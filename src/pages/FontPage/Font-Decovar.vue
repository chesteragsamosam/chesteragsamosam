<template>
  <div class="jb-mono">
    <button type="button" @click="reset()">RESET</button>
  </div>
  <div class="p-2 text-6xl font-thin decovar text-sky-500 bg-zinc-700">
    Loref ypsum dolor sit amet consectetur adipisicing elit. Eaque, impedit!
  </div>
  <div class="p-2 text-6xl italic font-black decovar text-sky-500 bg-zinc-700">
    Loref ypsum dolor sit amet consectetur adipisicing elit. Eaque, impedit!
  </div>
  <div><span>ALL<input v-model="all" type="range" min="0" max="1000" /></span></div>
  <div><span>BLDA: Inline<input v-model="BLDA" type="range" min="0" max="1000" /></span></div>
  <div><span>TRMD: Sheared<input v-model="TRMD" type="range" min="0" max="1000" /></span></div>
  <div><span>TRMC: Rounded Slab<input v-model="TRMC" type="range" min="0" max="1000" /></span></div>
  <div><span>SKLD: Stripes<input v-model="SKLD" type="range" min="0" max="1000" /></span></div>
  <div><span>TRML: Worm Terminal<input v-model="TRML" type="range" min="0" max="1000" /></span></div>
  <div><span>SKLA: Inline Skeleton<input v-model="SKLA" type="range" min="0" max="1000" /></span></div>
  <div><span>TRMF: Open Inline Terminal<input v-model="TRMF" type="range" min="0" max="1000" /></span></div>
  <div><span>BLDB: Worm<input v-model="BLDB" type="range" min="0" max="1000" /></span></div>
  <div><span>WMX2: Weight<input v-model="WMX2" type="range" min="0" max="1000" /></span></div>
  <div><span>TRMB: Flared<input v-model="TRMB" type="range" min="0" max="1000" /></span></div>
  <div><span>TRMA: Rounded<input v-model="TRMA" type="range" min="0" max="1000" /></span></div>
  <div><span>SKLB: Worm Skeleton<input v-model="SKLB" type="range" min="0" max="1000" /></span></div>
  <div><span>TRMG: Slab<input v-model="TRMG" type="range" min="0" max="1000" /></span></div>
  <div><span>TRME: Bifurcated<input v-model="TRME" type="range" min="0" max="1000" /></span></div>
  <div><span>TRMK: Inline Terminal<input v-model="TRMK" type="range" min="0" max="1000" /></span></div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
const all = ref(0)
const BLDA = ref (0)
const TRMD = ref (0)
const TRMC = ref (0)
const SKLD = ref (0)
const TRML = ref (0)
const SKLA = ref (0)
const TRMF = ref (0)
const BLDB = ref (0)
const WMX2 = ref (0)
const TRMB = ref (0)
const TRMA = ref (0)
const SKLB = ref (0)
const TRMG = ref (0)
const TRME = ref (0)
const TRMK = ref (0)
const varr = computed({
  get: () => {
    return [
      `"BLDA" ${BLDA.value}`,
      `"TRMD" ${TRMD.value}`,
      `"TRMC" ${TRMC.value}`,
      `"SKLD" ${SKLD.value}`,
      `"TRML" ${TRML.value}`,
      `"SKLA" ${SKLA.value}`,
      `"TRMF" ${TRMF.value}`,
      `"BLDB" ${BLDB.value}`,
      `"WMX2" ${WMX2.value}`,
      `"TRMB" ${TRMB.value}`,
      `"TRMA" ${TRMA.value}`,
      `"SKLB" ${SKLB.value}`,
      `"TRMG" ${TRMG.value}`,
      `"TRME" ${TRME.value}`,
      `"TRMK" ${TRMK.value}`,
    ].join(", ")
  },
})

const reset = () => {
  BLDA.value = 0
  TRMD.value = 0
  TRMC.value = 0
  SKLD.value = 0
  TRML.value = 0
  SKLA.value = 0
  TRMF.value = 0
  BLDB.value = 0
  WMX2.value = 0
  TRMB.value = 0
  TRMA.value = 0
  SKLB.value = 0
  TRMG.value = 0
  TRME.value = 0
  TRMK.value = 0
}

watch(all, (val) => {
  console.log(val)
  BLDA.value = all.value
  TRMD.value = all.value
  TRMC.value = all.value
  SKLD.value = all.value
  TRML.value = all.value
  SKLA.value = all.value
  TRMF.value = all.value
  BLDB.value = all.value
  WMX2.value = all.value
  TRMB.value = all.value
  TRMA.value = all.value
  SKLB.value = all.value
  TRMG.value = all.value
  TRME.value = all.value
  TRMK.value = all.value
})
</script>

<style scoped>
.decovar {
  font-family: Decovar;
  text-align: center;
  padding-top: 10px;
  font-variation-settings: v-bind(varr);
}
</style>