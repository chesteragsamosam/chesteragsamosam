<template>
  <div class="grid">
    <div v-for="(i, idx) in numWidth * numHeight" class="cell">
      {{ i }} - {{ idx }}
    </div>
    <div class="cell" style="border: 3px solid green; height: 1080px; aspect-ratio: 16/9;">
    </div>
    <div class="cell" style="border: 3px solid red; height: 1080px; aspect-ratio: 21/9;">
    </div>
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
    }
  },
  mounted () {
    const body = document.querySelector('body')
    body.style.maxWidth = '100vw'
    body.style.margin = '0'
    body.style.padding = '0'
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
<style lang="scss" scoped>
.no-tailwind-max-width {
  max-width: none !important;
}

html,
body {
  @apply bg-slate-700 text-white mx-auto;
  max-width: none;
}

@media (min-width: 768px) {

  html,
  body {
    max-width: none !important;
  }
}

.cell {
  height: v-bind(height);
  aspect-ratio: 1;
  border: 1px solid green;
  background-color: transparent;
}
</style>