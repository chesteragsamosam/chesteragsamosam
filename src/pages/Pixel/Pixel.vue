<template>
  <canvas class="cells" id="canvas" width="5000" height="5000"></canvas>
  <!-- <div class="wireframe" style="border: 3px solid green; height: 1080px; aspect-ratio: 16/9;">
  </div>
  <div class="wireframe" style="border: 3px solid red; height: 1080px; aspect-ratio: 21/9;">
  </div>
  <div class="wireframe"
    style="border: 3px solid blue;"
    :style="{height: `${availScreen.y}px`, width: `${availScreen.x}px`}">
  </div> -->
  <div style="font-size: 1rem;">
    1rem {{ rootFontSize }}px
  </div>
  <div :style="{ fontSize: `${rootFontSize * dpr}px` }">
  fs * dpr ({{ `${rootFontSize * dpr}px` }})
  </div>
  <div class="screen-info" @click="updateInfo()">
    <table>
      <tr v-for="(info, i) in screenInfo">
        <td class="px-1 text-right">{{ info[0] }}</td>
        <td class="px-1 text-left">{{ info[1] }}</td>
      </tr>
    </table>
  </div>
</template>
<script>

export default {
  data () {
    return {
      width: '100px',
      height: '100px',
      numWidth: 12,
      numHeight: 12,
      screenInfo: [],
      availScreen: { x: 0, y: 0},
      dpr: 0,
      rootFontSize: 0,
    }
  },
  methods: {
    updateInfo () {
      // Get the width and height of the screen
      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;
      const screen = `${screenWidth}x${screenHeight}`
      // Get the available width and height of the screen (excluding taskbars, etc.)
      const availWidth = window.screen.availWidth;
      const availHeight = window.screen.availHeight;
      const availableScreen = `${availWidth}x${availHeight}`
      this.availScreen = { x: availWidth, y: availHeight }
      // Get the width and height of the viewport
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const viewport = `${viewportWidth}x${viewportHeight}`
      
      this.dpr = window.devicePixelRatio

      this.rootFontSize = parseInt(window.getComputedStyle(document.documentElement, null).getPropertyValue('font-size'), 10)

      this.screenInfo = Object.entries({
        screen,
        availableScreen,
        viewport,
        DPR: this.dpr,
        fs: this.rootFontSize,
      })
      this.updateCanvas()
    },
    updateCanvas () {
      const c = document.getElementById('canvas')
      
      var ctx = c.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cellSize = 100
      for (let y = 0; y < 10; y++) for (let x = 0; x < 10; x++) {
        ctx.moveTo(x * cellSize, y * cellSize);
        ctx.font = "8px Arial";
        ctx.fillText(`${x * cellSize},${y * cellSize}`, x * cellSize ,y * cellSize + 8);
        ctx.lineTo(x * cellSize + cellSize, y * cellSize);
        ctx.moveTo(x * cellSize, y * cellSize);
        ctx.lineTo(x * cellSize, y * cellSize + cellSize);
      }
      ctx.stroke();
    },
  },
  mounted () {
    const body = document.querySelector('body')
    body.style.maxWidth = '100vw'
    body.style.margin = '0'
    body.style.padding = '0'
    this.updateInfo()
    window.addEventListener('resize', this.updateInfo)
    // setInterval(() => {
    //   body.style.maxWidth = 'none'
    //   body.style.margin = '0'
    //   body.style.padding = '0'
    //   // console.log(body)
    // }, 200)
  },
  destroyed () {
    console.log('document.documentElement.', document.documentElement.style)
    console.table(getComputedStyle(document.getElementsByTagName('body')))
  }
}

</script>
<style lang="scss">
.container {
  max-width: none !important;
  margin: 0;
  padding: 0;
}

.screen-info {
  @apply absolute bg-black bg-opacity-50 text-white text-xs text-right right-0 top-0 rounded cursor-pointer active:bg-opacity-60 hover:bg-opacity-40;
}

html,
body {
  @apply bg-slate-700 text-white mx-auto;
  max-width: 100vh !important;
  overflow: hidden;
}

@media (min-width: 768px) {

  html,
  body {
    max-width: none !important;
  }
}
.cells {
  @apply absolute;
  .cell {
    height: v-bind(height);
    aspect-ratio: 1;
    border: 1px solid green;
    background-color: transparent;
  }
}

.wireframe {
  @apply absolute left-0 top-0
}
</style>