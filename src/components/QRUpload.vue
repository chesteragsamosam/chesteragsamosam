<template>
  <div>
    <div>
      <input type="file" @change="handleImageUpload" />x
      <div v-if="decodedData">{{ decodedData }}</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useQRCodeDecoder } from '../utils/useQRCodeDecoder.js'; // Adjust the path

export default {
  setup() {
    const { decodedData, decodeQRCode } = useQRCodeDecoder();
    const fileInput = ref(null);

    function handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image();
          img.src = e.target.result;
          img.onload = () => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0, img.width, img.height);
            const imageData = context.getImageData(0, 0, img.width, img.height);
            decodeQRCode(imageData);
          };
        };
        reader.readAsDataURL(file);
      }
    }

    return {
      decodedData,
      handleImageUpload,
    };
  },
};
</script>
