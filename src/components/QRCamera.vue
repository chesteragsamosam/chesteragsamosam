<template>
  <div>
    <button class="border rounded px-2 py-1" @click="startCamera">Start Camera</button>
    {{ isCameraActive }}
    <div v-if="videoElement">
      <video ref="videoElement" autoplay></video>
    </div>
    <div v-if="decodedData">{{ decodedData }}</div>
  </div>
</template>

<script>
import { ref, onBeforeUnmount } from 'vue';
import { useQRCodeDecoder } from '../utils/useQRCodeDecoder.js'; // Adjust the path
import { useCamera } from '../utils/useCamera'; // Adjust the path

export default {
  setup() {
    const { decodedData, decodeQRCode } = useQRCodeDecoder();
    const { videoElement, startCamera } = useCamera();
    const isCameraActive = ref(false);

    onBeforeUnmount(() => {
      if (isCameraActive) {
        videoElement.value.srcObject.getTracks().forEach((track) => track.stop());
      }
    });

    return {
      videoElement,
      startCamera,
      decodedData,
      isCameraActive,
    };
  },
};
</script>
