// useQRCodeDecoder.js
import { ref } from 'vue';
import jsQR from 'jsqr';

export function useQRCodeDecoder() {
  const decodedData = ref(null);

  function decodeQRCode(imageData) {
    const code = jsQR(imageData.data, imageData.width, imageData.height);
    decodedData.value = code ? code.data : null;
  }

  return {
    decodedData,
    decodeQRCode,
  };
}
