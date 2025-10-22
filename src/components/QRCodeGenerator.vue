<template>
  <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
    <div class="p-3 border rounded bg-slate-600">
      <input class="block w-full" v-model="qrData" placeholder="Enter data for QR code" />
      <button class="w-full mt-3 sm:w-auto" @click="generateQRCode">Generate QR Code</button>
    </div>
    <div class="p-3 border rounded bg-slate-600">
      <div v-if="qrCode">
        <img :src="qrCode" alt="QR Code" class="w-full mx-auto border-4 sm:w-auto lg:w-96" />
        <a class="text-amber-500" :href="qrCode" download="qrcode.png">
          Download QR Code
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import QRCode from 'qrcode-generator';
let test = 1
alert('sciprt')
export default {
  setup() {
    const qrData = ref('');
    const qrCode = ref(null);
    const num = ref(1)
    test++
    alert(`${num.value}=${test}`)
    num.value++

    function generateQRCode() {
      num.value++     
      if (qrData.value) {
        const qr = new QRCode(0, 'M');
        qr.addData(qrData.value);
        qr.make();

        // Get the QR code as a data URL
        const qrDataURL = qr.createDataURL(10, 0);

        qrCode.value = qrDataURL;
      }
    }

    return {
      qrData,
      qrCode,
      generateQRCode,
    };
  },
};
</script>
