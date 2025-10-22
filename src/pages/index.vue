<template>
  <div class="container mx-auto pt-5 md:max-h-screen">
    <div class="mx-auto p-4">
      <h2 class="text-2xl font-bold mb-4">Dvoretsky's Endgame Manual</h2>

      <div class="md:grid gap-4 md:grid-cols-3 grid-cols-1">
        <!-- Video Player -->
        <div
          class="bg-slate-800 rounded-lg p-4 mb-4 md:mb-0"
          style="grid-column-start: 1; grid-column-end: 3"
        >
          <div v-if="selectedVideo">
            <h3 class="text-xl mb-3">{{ selectedVideo.title }}</h3>
            <video
              ref="videoEl"
              controls
              playsinline
              webkit-playsinline
              x5-playsinline
              :src="selectedVideo.src"
              @play="onPlay"
              class="w-full rounded"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div v-else class="h-full flex items-center justify-center text-slate-400">
            Select a video to start learning
          </div>
        </div>
        <!-- Video List -->
        <div class="bg-slate-800 rounded-lg p-4">
          <h3 class="text-xl mb-3">Course Contents</h3>
          <div class="space-y-2 overflow-y-auto max-h-[80vh]">
            <p
              class="wrap-normal leading-5 cursor-pointer"
              v-for="video in videos"
              :key="video.src"
              @click="changeVid(video)"
              :class="[
                'w-full text-left p-2 rounded',
                selectedVideo?.src === video.src ? 'bg-green-600' : 'hover:bg-slate-700',
              ]"
            >
              {{ video.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import videos from '@/consts/videoSrc.js'

export default {
  components: {
    // NavBar
  },
  data() {
    return {
      currentVideoIdx: 0,
      videos,
      videoSrc: videos[0].src,
      videoTitle: videos[0].title,
      selectedVideo: videos[0],
    }
  },
  mounted() {
    // console.log('sample video path:', this.sampleVideo);
  },
  methods: {
    onPlay() {
      const videoEl = this.$refs.videoEl
      // If your build or other code sometimes left the video muted, unmute on user play
      if (videoEl.value && videoEl.value.muted) {
        videoEl.value.muted = false
      }
    },
    changeVid(video) {
      this.selectedVideo = video
      // const videoElement = document.querySelector('video')
      // if (videoElement) {
      //   this.$nextTick(() => {
      //     videoElement.play()
      //   })
      //   console.log('should play')
      // }
    },
  },
}
</script>

<style></style>
