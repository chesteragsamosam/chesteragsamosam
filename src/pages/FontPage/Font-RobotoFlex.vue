<template>
  <div class="jb-mono">
    <button @click="reset" class="px-2 py-1 mx-1 my-1 text-white uppercase bg-green-500 rounded shadow-md fira-code active:bg-green-600">Ok</button>
    <button @click="reset" class="px-2 py-1 mx-1 my-1 text-white uppercase bg-green-500 rounded shadow-md fira-code active:bg-green-600">Cancel</button>
  </div>
  <div class="p-2 text-4xl text-green-500 roboto-flex bg-zinc-700">
    ABCDEFGHIJKLMNOPQRSTUVWXYZ
  </div>
  <div class="p-2 text-4xl text-green-500 lowercase roboto-flex bg-zinc-700">
    ABCDEFGHIJKLMNOPQRSTUVWXYZ
  </div>
  <div class="p-2 text-4xl text-green-500 roboto-flex bg-zinc-700">
    The1 Quick Brown Fox Jumps Over0 The Lazy Dog2
  </div>
  <div class="p-2 text-4xl text-green-500 lowercase roboto-flex bg-zinc-700">
    0123456789
  </div>
  <div class="p-2 text-4xl text-green-500 lowercase roboto-flex bg-zinc-700">
    !"£$%^&*()_+-=,./"
  </div>
  <!-- <div><span>ALL<input v-model="all" type="range" min="0" max="100" /></span></div> -->
  <div><span>wght<input v-model="wght" type="range" min="100" max="1000" /></span></div>
  <div><span>wdth<input v-model="wdth" type="range" min="25" max="151" /></span></div>
  <div><span>opsz<input v-model="opsz" type="range" min="8" max="144" /></span></div>
  <div><span>GRAD<input v-model="GRAD" type="range" min="-200" max="150" /></span></div>
  <div><span>slnt<input v-model="slnt" type="range" min="-10" max="0" /></span></div>
  <div><span>XTRA<input v-model="XTRA" type="range" min="323" max="603" /></span></div>
  <div><span>XOPQ<input v-model="XOPQ" type="range" min="27" max="175" /></span></div>
  <div><span>YOPQ<input v-model="YOPQ" type="range" min="25" max="135" /></span></div>
  <div><span>YTLC<input v-model="YTLC" type="range" min="416" max="570" /></span></div>
  <div><span>YTUC<input v-model="YTUC" type="range" min="528" max="760" /></span></div>
  <div><span>YTAS<input v-model="YTAS" type="range" min="649" max="854" /></span></div>
  <div><span>YTDE<input v-model="YTDE" type="range" min="-305" max="-98" /></span></div>
  <div><span>YTFI<input v-model="YTFI" type="range" min="560" max="788" /></span></div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
const all = ref(0)
const wght = ref ((100 + 1000)/ 2)
const wdth = ref ((25 + 151)/ 2)
const opsz = ref ((8 + 144)/ 2)
const GRAD = ref ((-200 + 150)/ 2)
const slnt = ref ((-10 + 0)/ 2)
const XTRA = ref ((323 + 603)/ 2)
const XOPQ = ref ((27 + 175)/ 2)
const YOPQ = ref ((25 + 135)/ 2)
const YTLC = ref ((416 + 570)/ 2)
const YTUC = ref ((528 + 760)/ 2)
const YTAS = ref ((649 + 854)/ 2)
const YTDE = ref ((-305 + -98)/ 2)
const YTFI = ref ((560 + 788)/ 2)
const varr = computed({
  get: () => {
    return [
      `"wght" ${wght.value}`,
      `"wdth" ${wdth.value}`,
      `"opsz" ${opsz.value}`,
      `"GRAD" ${GRAD.value}`,
      `"slnt" ${slnt.value}`,
      `"XTRA" ${XTRA.value}`,
      `"XOPQ" ${XOPQ.value}`,
      `"YOPQ" ${YOPQ.value}`,
      `"YTLC" ${YTLC.value}`,
      `"YTUC" ${YTUC.value}`,
      `"YTAS" ${YTAS.value}`,
      `"YTDE" ${YTDE.value}`,
      `"YTFI" ${YTFI.value}`,
    ].join(", ")
  },
})

const reset = () => {
  wght.value = (100 + 1000)/ 2
  wdth.value = (25 + 151)/ 2
  opsz.value = (8 + 144)/ 2
  GRAD.value = (-200 + 150)/ 2
  slnt.value = (-10 + 0)/ 2
  XTRA.value = (323 + 603)/ 2
  XOPQ.value = (27 + 175)/ 2
  YOPQ.value = (25 + 135)/ 2
  YTLC.value = (416 + 570)/ 2
  YTUC.value = (528 + 760)/ 2
  YTAS.value = (649 + 854)/ 2
  YTDE.value = (-305 + -98)/ 2
  YTFI.value = (560 + 788)/ 2
}

watch(all, (val) => {
  console.log(val)
  wght.value = all.value
  wdth.value = all.value
  opsz.value = all.value
  GRAD.value = all.value
  slnt.value = all.value
  XTRA.value = all.value
  XOPQ.value = all.value
  YOPQ.value = all.value
  YTLC.value = all.value
  YTUC.value = all.value
  YTAS.value = all.value
  YTDE.value = all.value
  YTFI.value = all.value
})
</script>

<style scoped>
.roboto-flex {
  font-family: Robotoflex;
  text-align: center;
  padding-top: 10px;
  font-variation-settings: v-bind(varr);
}
</style>