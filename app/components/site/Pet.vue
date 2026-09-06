<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, computed, provide } from 'vue'
import PetInstance from './PetInstance.vue'

interface PetInstanceComponent {
  posX: number
  posY: number
  triggerInteraction: (type: 'bump' | 'jump') => void
  say: (text: string) => void
  clearSpeech: () => void
}

const mouseX = ref(0)
const mouseY = ref(0)

provide('mousePos', { x: mouseX, y: mouseY })

const primaryPet = ref<PetInstanceComponent | null>(null)
const girlPet = ref<PetInstanceComponent | null>(null)

const primaryPetX = computed(() => primaryPet.value?.posX ?? mouseX.value)
const primaryPetY = computed(() => primaryPet.value?.posY ?? mouseY.value)
const girlPetX = computed(() => girlPet.value?.posX ?? mouseX.value)
const girlPetY = computed(() => girlPet.value?.posY ?? mouseY.value)
const isPitching = ref(false)
let conversationTimer: ReturnType<typeof setInterval> | null = null
let conversationTimeouts: ReturnType<typeof setTimeout>[] = []
const REPLY_DELAY = 5500
const CONVERSATION_INTERVAL = 46000

const primaryPhrases = [
  'Nice detail.', 'That feels smooth.', 'Good work takes care.',
  'Thoughtful builder.', 'Quietly impressive.', 'I like that idea.'
]

const girlPhrases = [
  'He notices the little things.', 'That is very Chester.', 'Good instincts.',
  'Clear and considered.', 'Easy to work with.', 'A lovely touch.'
]

type ConversationLine = { pet: 'primary' | 'girl', text: string }

const conversationOpenings: ConversationLine[][] = [
  [
    { pet: 'primary', text: 'This page has a nice rhythm.' },
    { pet: 'girl', text: 'Chester thinks about the little details.' },
  ],
  [
    { pet: 'girl', text: 'How did he make that feel so simple?' },
    { pet: 'primary', text: 'He spent time with the tricky parts first.' },
  ],
  [
    { pet: 'primary', text: 'I like how clearly he explains things.' },
    { pet: 'girl', text: 'It makes collaborating feel easy.' },
  ],
  [
    { pet: 'girl', text: 'Do you think he notices every tiny detail?' },
    { pet: 'primary', text: 'Probably the ones that matter.' },
  ],
  [
    { pet: 'primary', text: 'That interaction felt effortless.' },
    { pet: 'girl', text: 'The best work usually does.' },
  ],
  [
    { pet: 'girl', text: 'There is a lot happening, but it feels calm.' },
    { pet: 'primary', text: 'He knows when to leave room to breathe.' },
  ],
  [
    { pet: 'primary', text: 'This is a thoughtful way to tell a story.' },
    { pet: 'girl', text: 'He makes the important parts easy to find.' },
  ],
  [
    { pet: 'girl', text: 'I appreciate the small touches.' },
    { pet: 'primary', text: 'They make a big difference together.' },
  ],
  [
    { pet: 'primary', text: 'It feels like someone cared all the way through.' },
    { pet: 'girl', text: 'That is a very Chester thing to do.' },
  ],
  [
    { pet: 'girl', text: 'He makes difficult things feel friendly.' },
    { pet: 'primary', text: 'That takes patience and good judgement.' },
  ]
]

const conversationClosings: ConversationLine[][] = [
  [
    { pet: 'primary', text: 'It makes things easier to use.' },
    { pet: 'girl', text: 'That is the best kind of polish.' },
  ],
  [
    { pet: 'girl', text: 'So everyone else gets an easy experience.' },
    { pet: 'primary', text: 'Thoughtful work is often quiet.' },
  ],
  [
    { pet: 'primary', text: 'Good questions lead to better ideas.' },
    { pet: 'girl', text: 'He asks the good ones.' },
  ],
  [
    { pet: 'girl', text: 'That is why it all feels considered.' },
    { pet: 'primary', text: 'Care shows up in the finished work.' },
  ],
  [
    { pet: 'primary', text: 'The details support the bigger picture.' },
    { pet: 'girl', text: 'Nothing is there just to be loud.' },
  ],
  [
    { pet: 'girl', text: 'It is clear without trying too hard.' },
    { pet: 'primary', text: 'That is a difficult balance to get right.' },
  ],
  [
    { pet: 'primary', text: 'It feels ready for real people to use.' },
    { pet: 'girl', text: 'That is always the point.' },
  ],
  [
    { pet: 'girl', text: 'I can tell he enjoys solving the puzzle.' },
    { pet: 'primary', text: 'And sharing the answer clearly.' },
  ],
  [
    { pet: 'primary', text: 'There is confidence in the quiet choices.' },
    { pet: 'girl', text: 'The work speaks for itself.' },
  ],
  [
    { pet: 'girl', text: 'That was a lovely little detail.' },
    { pet: 'primary', text: 'He has a good eye for those.' },
  ],
]

// Ten openings × ten endings gives the pets 100 different conversations.
const petConversations = conversationOpenings.flatMap(opening =>
  conversationClosings.map(closing => [...opening, ...closing])
)
let lastConversationIndex = -1

function handleMouseMove(e: MouseEvent) {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}

function clearConversationTimeouts() {
  conversationTimeouts.forEach(clearTimeout)
  conversationTimeouts = []
}

function startPetConversation() {
  if (!primaryPet.value || !girlPet.value || isPitching.value) return

  isPitching.value = true
  let conversationIndex = Math.floor(Math.random() * petConversations.length)
  if (petConversations.length > 1 && conversationIndex === lastConversationIndex) {
    conversationIndex = (conversationIndex + 1) % petConversations.length
  }
  lastConversationIndex = conversationIndex
  const conversation = petConversations[conversationIndex]

  conversation.forEach((line, index) => {
    const timeout = setTimeout(() => {
      const pet = line.pet === 'primary' ? primaryPet.value : girlPet.value
      const listener = line.pet === 'primary' ? girlPet.value : primaryPet.value
      listener?.clearSpeech()
      pet?.triggerInteraction(index % 2 === 0 ? 'jump' : 'bump')
      pet?.say(line.text)
    }, index * REPLY_DELAY)
    conversationTimeouts.push(timeout)
  })

  const finish = setTimeout(() => {
    isPitching.value = false
    conversationTimeouts = []
  }, conversation.length * REPLY_DELAY)
  conversationTimeouts.push(finish)
}

onMounted(async () => {
  mouseX.value = window.innerWidth / 2
  mouseY.value = window.innerHeight / 2
  window.addEventListener('mousemove', handleMouseMove)

  await nextTick()

  if (import.meta.client) {
    startPetConversation()
    conversationTimer = setInterval(startPetConversation, CONVERSATION_INTERVAL)
  }
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  if (conversationTimer) clearInterval(conversationTimer)
  clearConversationTimeouts()
})
</script>

<template>
  <div class="fixed inset-0 pointer-events-none">
    <!-- Primary Pet (Blue) -->
    <PetInstance
      ref="primaryPet"
      color="#4db8ff"
      :targetX="mouseX"
      :targetY="mouseY"
      :phrases="primaryPhrases"
      :size="1.2"
      :repelX="girlPetX"
      :repelY="girlPetY"
      :is-primary="true"
      :auto-speech="!isPitching"
    />

    <!-- Girl Pet (Pink) -->
    <PetInstance
      ref="girlPet"
      v-if="primaryPet"
      color="#ff4db8"
      :targetX="primaryPetX"
      :targetY="primaryPetY"
      :phrases="girlPhrases"
      :size="1.0"
      :repelX="primaryPetX"
      :repelY="primaryPetY"
      :has-flower="true"
      :is-primary="false"
      :auto-speech="!isPitching"
    />
  </div>
</template>

<style scoped>
div {
  will-change: transform;
}
</style>
