<template>
  <div>
    <SitePet />
    <div class="relative z-10">
      <SiteNav />
      <slot />
      <SiteFooter />
    </div>
    <SiteChat />
  </div>
</template>
