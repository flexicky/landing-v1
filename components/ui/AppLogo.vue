<template>
  <NuxtLink class="app-logo" :to="to" aria-label="Monst Smm — на главную">
    <span class="app-logo__mark" aria-hidden="true">
      <svg viewBox="0 0 36 36" fill="none">
        <path d="M8.4 13.2 5.8 8.1l6 2.4M27.6 13.2l2.6-5.1-6 2.4" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8 15.2a10 10 0 0 1 20 0v5.1a7 7 0 0 1-7 7h-6a7 7 0 0 1-7-7v-5.1Z" fill="currentColor" />
        <ellipse cx="14.4" cy="17.2" rx="1.6" ry="2.1" fill="#D3FF59" />
        <ellipse cx="21.6" cy="17.2" rx="1.6" ry="2.1" fill="#D3FF59" />
        <path d="M14 23.2c2.5 1.7 5.5 1.7 8 0" stroke="#D3FF59" stroke-width="1.7" stroke-linecap="round" />
      </svg>
    </span>
    <span class="app-logo__word">Monst <b>Smm</b></span>
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
  width: 38px;
  height: 38px;
  flex: 0 0 38px;
  place-items: center;
  border: 1px solid rgba(211, 255, 89, 0.6);
  border-radius: 13px;
  background: var(--color-accent);
  color: #211b2e;
  box-shadow: 0 6px 20px rgba(211, 255, 89, 0.2);
}

.app-logo__mark svg {
  width: 28px;
  height: 28px;
}

.app-logo__word {
  font-family: Manrope, 'DM Sans', sans-serif;
  font-size: 19px;
  font-weight: 800;
  letter-spacing: -0.055em;
}

.app-logo__word b {
  margin-left: 2px;
  color: var(--color-violet);
  font-weight: 800;
}
</style>
