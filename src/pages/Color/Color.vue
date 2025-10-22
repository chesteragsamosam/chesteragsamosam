<template>
  <div class="fira-code">
  <div><button @click="onClickRand()">Add random</button></div>
  <div class="grid items-stretch w-full grid-cols-6 gap-2 border">
  <div v-for="(color, i) in colors">
    <div class="h-full p-1 rounded aspect-square" :style="{ backgroundColor: `rgb(${color[0]},${color[1]},${color[2]})`}">{{ color.join(', ') }}</div>
  </div>
  </div>
  <div class="grid grid-cols-4">
    <div>
      <div class="w-full p-2 mt-1 rounded-xl aspect-video" :style="rgbaStyle">
        test
      </div>
      <label class="flex pb-1 align-middle" for="">
        R: <input type="range" min="0" max="255" v-model="rgbaRange.r">
        <input v-model="rgbaRange.r" type="number" max="255" min="0" class="text-white bg-transparent w-18">
      </label>
      <label class="flex pb-1 align-middle" for="">
        G: <input type="range" min="0" max="255" v-model="rgbaRange.g">
        <input v-model="rgbaRange.g" type="number" max="255" min="0" class="text-white bg-transparent w-18">
      </label>
      <label class="flex pb-1 align-middle" for="">
        B: <input type="range" min="0" max="255" v-model="rgbaRange.b">
        <input v-model="rgbaRange.b" type="number" max="255" min="0" class="text-white bg-transparent w-18">
      </label>
      <label class="flex pb-1 align-middle" for="">
        A: <input type="range" min="0" max="1" step="0.01" v-model="rgbaRange.a">
        <input v-model="rgbaRange.a" type="number" max="1" min="0" step="0.01" class="text-white bg-transparent w-18">
      </label>
    </div>
  </div>
  </div>
</template>
<script>
import { getRandInt, lerp } from '@/utils'
import { ref, reactive, computed } from 'vue'

export default {
  setup () {
    const rgba = (r, g, b, a = 1) => `rgba(${r}, ${g}, ${b}, ${a})`
    const colors = reactive([])
    const rgbaRange = reactive({
      r: 51, g: 51, b: 51, a: 1
    })
    const rgbaStyle = computed(() =>{
      const { r, g, b, a } = rgbaRange
      return {
        backgroundColor: `${rgba(r, g, b, a)}`
      }
    })
    const generateRandomRGBColor = () => {
      const r = getRandInt(256)
      const g = getRandInt(256)
      const b = getRandInt(256)
      return [r, g, b]
    }
    const onClickRand = () =>  colors.push(generateRandomRGBColor())
    const hsla = (h, s, l, a) => {
      const lightnessToHex = lerp // WIP
    }
    return { colors, onClickRand, rgbaStyle, rgbaRange}
  }
}
</script>
<style scoped></style>