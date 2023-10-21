<template>
  <div class="">
    <input v-model="qrData" placeholder="Enter data for QR code" />
    <button @click="generateQRCode">Generate QR Code</button>
    <div v-if="qrCode">
      <img :src="qrCode" alt="QR Code" />
      <a :href="qrCode" download="qrcode.png">
        Download QR Code
      </a>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import QRCode from 'qrcode-generator';

export default {
  setup() {
    const qrData = ref('');
    const qrCode = ref(null);

    function generateQRCode() {
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
