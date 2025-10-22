<template>
  <div class="grid h-screen w-screen">
    {{ time }}
    <div class="clock shadow bg-slate-600 rounded-full aspect-square m-auto w-80 relative left-0 top-0">
      <span v-for="h in 12" class="hours"
        :style="`transform: translate(50%, 50%) translate(${getPos(h, 12).x * 120}px, ${getPos(h, 12).y * 120}px)`">
        {{ h }}
      </span>
      <div class="minutes">
        <span v-for="h in 60" class="hours"
          :style="`transform: translate(50%, 50%) translate(${getPos(h, 60).x * 100}px, ${getPos(h, 60).y * 100}px) rotate(${h * 360 / 60 - 90}deg)`">
          -
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const time = ref(0)
function posToRadians (pos, total) {
  let angleInRadians = ((pos) / total) * (2 * Math.PI) - Math.PI / 2;
  return angleInRadians;
}
const getPos = (pos, total) => {
  return {
    y: Math.sin(posToRadians(pos, total)),
    x: Math.cos(posToRadians(pos, total))
  }

}
const timer = setInterval(() => {
  const date = new Date()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  time.value = `${hour}:${minute}:${second}`
  console.log(time.value)
}, 1000);
</script>
<style scoped>
.hours {
  @apply m-auto absolute;
  /* transform: translateX(); */
}
</style>