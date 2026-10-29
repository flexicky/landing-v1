<template>
  <div class="default-layout">
    <SiteHeader />
    <slot />
    <SiteFooter />
  </div>
</template>

<style scoped>
.default-layout {
  min-height: 100vh;
  overflow: clip;
}
</style>
