<template>
  <div>
    <h1>Time-based One-Time Password (TOTP) Generator ({{ currentTimeVue }})</h1>
    <p>Current TOTP: {{ currentTOTP }}</p>
    <input v-model="secret">
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CryptoJS  from 'crypto-js';

const currentTOTP = ref('');
const secret = ref('your-secret-key')
const timeStep = ref(30)
const calculateTOTP = (secret, timeCounter) => {
  console.log('calculating: ', secret)
  const secretBytes = CryptoJS.enc.Utf8.parse(secret);
  const counterBytes = CryptoJS.lib.WordArray.create([timeCounter]);
  const hmac = CryptoJS.HmacSHA1(counterBytes, secretBytes);
  const offset = hmac.words[19] & 0xf;
  const binary = (hmac.words[offset] & 0x7f) << 24 | (hmac.words[offset + 1] & 0xff) << 16 | (hmac.words[offset + 2] & 0xff) << 8 | (hmac.words[offset + 3] & 0xff);
  const totp = (binary % 1000000).toString().padStart(6, '0');
  return totp;
};
const currentTimeVue = ref()
const generateTOTP = () => {
  const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
  currentTimeVue.value = new Date(Date.now())
  const timeCounter = Math.floor(currentTime / timeStep.value);
  const totp = calculateTOTP(secret.value, timeCounter);
  currentTOTP.value = totp;
};


onMounted(() => {
  generateTOTP();
  setInterval(generateTOTP,  1000); // Refresh every timeStep seconds
});
</script>
