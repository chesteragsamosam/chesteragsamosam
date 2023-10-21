// useCamera.js
import { ref } from 'vue';

export function useCamera() {
  const videoElement = ref(null);

  async function startCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoElement.value.srcObject = stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  }

  return {
    videoElement,
    startCamera,
  };
}
