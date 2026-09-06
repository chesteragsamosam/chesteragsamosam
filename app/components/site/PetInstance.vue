<script setup lang="ts">
import { inject, computed, onMounted, onUnmounted, ref } from 'vue'
import { usePetPhysics, type InteractionType } from '~/composables/usePetPhysics'
import { usePetBehavior } from '~/composables/usePetBehavior'

interface Props {
  color: string
  size?: number
  targetX: number
  targetY: number
  phrases: string[]
  repelX?: number
  repelY?: number
  hasFlower?: boolean
  isPrimary?: boolean
  autoSpeech?: boolean
}

const props = defineProps<Props>()

const mousePos = inject<{ x: import('vue').Ref<number>, y: import('vue').Ref<number> }>('mousePos')
const isNearContent = ref(false)
let proximityTimer: ReturnType<typeof setInterval> | null = null

const targetX = computed(() => props.targetX)
const targetY = computed(() => props.targetY)
const repelX = computed(() => props.repelX)
const repelY = computed(() => props.repelY)
const petOpacity = computed(() => isNearContent.value ? 0.4 : 0.75)

const {
  posX,
  posY,
  scaleX,
  scaleY,
  bob,
  trickRotation,
  trickJump,
  distance,
  triggerInteraction: triggerPhysics
} = usePetPhysics({
  targetX,
  targetY,
  repelX,
  repelY,
  isPrimary: props.isPrimary
})

const {
  emotion,
  displayedSpeech,
  say,
  clearSpeech
} = usePetBehavior({
  phrases: props.phrases,
  distance: distance,
  autoSpeech: computed(() => props.autoSpeech !== false)
})

let lastPlayfulRemarkAt = 0
const PLAYFUL_REMARK_COOLDOWN = 30000

function updateContentProximity() {
  const probes = [
    [posX.value, posY.value],
    [posX.value - 22, posY.value],
    [posX.value + 22, posY.value],
  ]
  const contentSelector = 'h1, h2, h3, h4, h5, h6, p, li, a, button, label, input, textarea, select, [role="button"]'

  isNearContent.value = probes.some(([x, y]) => {
    const element = document.elementFromPoint(x, y)
    return Boolean(element?.closest(contentSelector))
  })
}

onMounted(() => {
  updateContentProximity()
  proximityTimer = setInterval(updateContentProximity, 200)
})

onUnmounted(() => {
  if (proximityTimer) clearInterval(proximityTimer)
})

function triggerInteraction(type: InteractionType) {
  triggerPhysics(type)
  const now = Date.now()
  if (now - lastPlayfulRemarkAt > PLAYFUL_REMARK_COOLDOWN && Math.random() < 0.25) {
    lastPlayfulRemarkAt = now
    say(type === 'bump' ? 'Boop!' : 'Wheee!')
  }
}

defineExpose({
  posX,
  posY,
  triggerInteraction,
  say,
  clearSpeech
})
</script>

<template>
  <div
    class="fixed top-0 left-0 pointer-events-none z-40 transition-opacity duration-500"
    :style="{
      transform: `translate3d(${posX}px, ${posY}px, 0)`,
      opacity: petOpacity,
    }"
  >
    <div
      class="relative"
      :style="{
        transform: `scale(${props.size || 1})`,
        marginLeft: '-30px',
        marginTop: '-30px'
      }"
    >
      <div
        class="relative"
        :style="{ transform: `translateY(${bob + trickJump}px) scale(${scaleX}, ${scaleY}) rotate(${trickRotation}deg)` }"
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="8" y="12" width="24" height="20" rx="8" fill="#0a1220" :stroke="color" stroke-width="2" />
          <template v-if="emotion !== 'blink'">
            <circle cx="15" cy="20" r="3" :fill="color" />
            <circle cx="15" cy="19" r="1" fill="white" opacity="0.6" />
            <circle cx="25" cy="20" r="3" :fill="color" />
            <circle cx="25" cy="19" r="1" fill="white" opacity="0.6" />
            <circle
              cx="15" cy="20" r="1" fill="white" opacity="0.8"
              :style="{ transform: `translate(${(targetX - posX)/50}px, ${(targetY - posY)/50}px)` }"
            />
            <circle
              cx="25" cy="20" r="1" fill="white" opacity="0.8"
              :style="{ transform: `translate(${(targetX - posX)/50}px, ${(targetY - posY)/50}px)` }"
            />
            <template v-if="emotion === 'angry'">
              <line x1="12" y1="17" x2="17" y2="19" :stroke="color" stroke-width="1.5" stroke-linecap="round" />
              <line x1="28" y1="17" x2="23" y2="19" :stroke="color" stroke-width="1.5" stroke-linecap="round" />
            </template>
          </template>
          <template v-else>
            <line x1="13" y1="20" x2="17" y2="20" :stroke="color" stroke-width="2" stroke-linecap="round" />
            <line x1="23" y1="20" x2="27" y2="20" :stroke="color" stroke-width="2" stroke-linecap="round" />
          </template>
          <path
            v-if="emotion === 'happy'"
            d="M17 24 Q20 26 23 24"
            :stroke="color" stroke-width="1.5" stroke-linecap="round"
          />
          <path
            v-if="emotion === 'surprised'"
            d="M19 25 A1 1 0 1 1 21 25 A1 1 0 1 1 19 25"
            :stroke="color" stroke-width="1.5" fill="none"
          />
          <path
            v-if="emotion === 'excited'"
            d="M16 25 Q20 28 24 25"
            :stroke="color" stroke-width="1.5" stroke-linecap="round"
          />
          <path
            v-if="emotion === 'angry'"
            d="M17 25 L23 25"
            :stroke="color" stroke-width="1.5" stroke-linecap="round"
          />
          <path
            v-if="emotion === 'blink'"
            d="M18 25 L22 25"
            :stroke="color" stroke-width="1" stroke-linecap="round"
          />
          <line x1="20" y1="12" x2="20" y2="6" :stroke="color" stroke-width="2" />
          <circle cx="20" cy="5" r="2" :fill="color" />
          <circle
            cx="11" cy="22" r="1.5" :fill="props.hasFlower ? '#ffb6c1' : color" :opacity="props.hasFlower ? '0.6' : '0.3'"
          />
          <circle
            cx="29" cy="22" r="1.5" :fill="props.hasFlower ? '#ffb6c1' : color" :opacity="props.hasFlower ? '0.6' : '0.3'"
          />
          <g v-if="props.hasFlower" transform="translate(26, 10)">
            <line x1="4" y1="4" x2="4" y2="8" stroke="#4ade80" stroke-width="1" />
            <circle cx="4" cy="2" r="1.5" fill="#f472b6" />
            <circle cx="6" cy="3" r="1.5" fill="#f472b6" />
            <circle cx="6" cy="5" r="1.5" fill="#f472b6" />
            <circle cx="4" cy="6" r="1.5" fill="#f472b6" />
            <circle cx="2" cy="5" r="1.5" fill="#f472b6" />
            <circle cx="2" cy="3" r="1.5" fill="#f472b6" />
            <circle cx="4" cy="4" r="1.2" fill="#fcd34d" />
          </g>
        </svg>
      </div>
      <div
        v-if="displayedSpeech"
        class="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-widest opacity-80 whitespace-nowrap transition-all duration-500"
        :style="{ color: color }"
      >
        {{ displayedSpeech }}
      </div>
    </div>
  </div>
</template>

<style scoped>
div {
  will-change: transform;
}
</style>
