<template>
  <div class="shadow bg-slate-700">
    <nav class="container flex justify-end px-2 py-2 mx-auto mb-2 space-x-5 font-semibold text-gray-300 uppercase ">
      <router-link class="router-link" to="/">
        Home
      </router-link>
      <router-link class="router-link" to="/qr">
        QR Generator
      </router-link>
    </nav>
  </div>
</template>
<script>
import { ref } from 'vue'
console.log('script NavBar')
</script>
<style scoped>
.router-link {
  @apply hover:text-white;
}
</style>