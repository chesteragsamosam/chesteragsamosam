<template>
  <div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
    <!-- Blob 1: Top Right -->
    <div
      class="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] rounded-full bg-acid/20 blur-[120px] animate-float"
      style="animation-duration: 25s; animation-delay: 0s;"
    />
    <!-- Blob 2: Mid Left -->
    <div
      class="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[100px] animate-float"
      style="animation-duration: 30s; animation-delay: -5s;"
    />
    <!-- Blob 3: Bottom Center -->
    <div
      class="absolute -bottom-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-acid/10 blur-[140px] animate-float"
      style="animation-duration: 35s; animation-delay: -10s;"
    />
  </div>
</template>

<style scoped>
.animate-float {
  animation: float 20s ease-in-out infinite;
  will-change: transform;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}
</style>
