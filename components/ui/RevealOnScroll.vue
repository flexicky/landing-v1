<template>
  <div
    ref="element"
    class="reveal-on-scroll"
    :class="{ 'reveal-on-scroll--ready': isReady, 'reveal-on-scroll--visible': isVisible }"
    :style="{ transitionDelay: `${delay}ms` }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

withDefaults(defineProps<{ delay?: number }>(), { delay: 0 })

const element = ref<HTMLElement | null>(null)
const isReady = ref(false)
const isVisible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  const target = element.value
  if (!target) return

  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    isVisible.value = true
    return
  }

  isReady.value = true
  observer = new IntersectionObserver(([entry]) => {
    if (!entry?.isIntersecting) return
    isVisible.value = true
    observer?.disconnect()
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -42px 0px',
  })
  observer.observe(target)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<style scoped>
.reveal-on-scroll {
  width: 100%;
  height: 100%;
}
</style>
