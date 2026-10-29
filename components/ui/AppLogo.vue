<template>
  <NuxtLink class="app-logo" :to="to" aria-label="Точка — на главную">
    <span class="app-logo__mark" aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none">
        <path d="M8.2 8.7h10.4a5.2 5.2 0 0 1 0 10.4h-5.2a5.2 5.2 0 1 0 0 10.4h10.4" />
        <path d="M23.8 23.3H13.4a5.2 5.2 0 0 1 0-10.4h5.2a5.2 5.2 0 1 0 0-10.4H8.2" />
      </svg>
    </span>
    <span class="app-logo__word">точка<span>.</span></span>
  </NuxtLink>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ to?: string }>(), { to: '/' })
</script>

<style scoped>
.app-logo {
  display: inline-flex;
  width: max-content;
  align-items: center;
  gap: 10px;
  color: var(--color-ink);
}

.app-logo__mark {
  display: grid;
  width: 32px;
  height: 32px;
  place-items: center;
  border-radius: 10px;
  background: var(--color-accent);
}

.app-logo__mark svg {
  width: 22px;
  height: 22px;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2.4;
  transform: rotate(-45deg);
}

.app-logo__word {
  font-family: Manrope, 'DM Sans', sans-serif;
  font-size: 21px;
  font-weight: 800;
  letter-spacing: -0.075em;
}

.app-logo__word span {
  color: #91bd3f;
}
</style>
