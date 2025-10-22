<template>
  <div class="container mx-auto pt-5">
    <div class="mx-auto p-4">
      <h2 class="text-2xl font-bold mb-4">Dvoretsky's Endgame Manual</h2>

      <div class="grid gap-4 md:grid-cols-3 grid-cols-1">
        <!-- Video List -->
        <div class="bg-slate-800 rounded-lg p-4">
          <h3 class="text-xl mb-3">Course Contents</h3>
          <div class="space-y-2">
            <span
              class="inline-block leading-1 cursor-pointer"
              v-for="video in videos"
              :key="video.src"
              @click="changeVid(video)"
              :class="[
                'w-full text-left p-2 rounded',
                selectedVideo?.src === video.src ? 'bg-green-600' : 'hover:bg-slate-700',
              ]"
            >
              {{ video.title }}
            </span>
          </div>
        </div>

        <!-- Video Player -->
        <div class="bg-slate-800 rounded-lg p-4" style="grid-column-start: 2; grid-column-end: 4">
          <div v-if="selectedVideo">
            <h3 class="text-xl mb-3">{{ selectedVideo.title }}</h3>
            <video controls class="w-full rounded" :src="selectedVideo.src">
              Your browser does not support the video tag.
            </video>
          </div>
          <div v-else class="h-full flex items-center justify-center text-slate-400">
            Select a video to start learning
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
    changeVid(video) {
      this.selectedVideo = video
      const videoElement = document.querySelector('video')
      if (videoElement) {
        this.$nextTick(() => {
          videoElement.play()
        })
        console.log('should play')
      }
    },
  },
}
</script>

<style></style>
