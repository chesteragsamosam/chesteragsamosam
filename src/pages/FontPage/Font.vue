<template>
  <div class="jb-mono">
    TEST
  </div>
  <div class="jb-moxno">
    TEST
  </div>
  <div class="decovar">
    TEST
  </div>
  <input v-model="ttt" type="range" min="0" max="1000" /> ttt: {{ ttt }}
</template>

<script setup>
import { ref } from 'vue'
const ttt = ref(500)
</script>

<style scoped>
.decovar {
  font-family: 'Decovar';
  font-size: 320px;
  font-family: "Decovar Alpha";
  color: white;
  background-color: rgb(0, 162, 215);
  font-size: 180px;
  text-align: center;
  padding-top: 20px;
  font-variation-settings: "BLDA" 0, "TRMD" 0, "TRMC" 0, "SKLD" 0, "TRML" 500, "SKLA" 0, "TRMF" 0, "BLDB" 0, "WMX2" 0, "TRMB" 0, "TRMA" 1000, "SKLB" 0, "TRMG" 0, "TRME" 0;
}
</style>