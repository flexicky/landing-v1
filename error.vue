<template>
  <main class="error-page page-shell">
    <AppLogo />
    <div class="error-page__content">
      <span class="error-page__code">{{ error?.statusCode || 500 }}</span>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <AppButton @click="clearError({ redirect: '/' })">На главную</AppButton>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const title = computed(() => props.error.statusCode === 404 ? 'Страница не найдена' : 'Что-то пошло не так')
const description = computed(() => props.error.statusCode === 404
  ? 'Похоже, такой страницы нет. Вернитесь на главную — там всё по-прежнему на своих местах.'
  : 'Попробуйте обновить страницу или вернитесь на главную.')
</script>

<style scoped>
.error-page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  padding-block: 28px;
}

.error-page__content {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 65px;
}

.error-page__code {
  color: #8da953;
  font-family: Manrope, 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.14em;
}

.error-page h1 {
  max-width: 650px;
  margin: 15px 0 0;
  font-family: Manrope, 'DM Sans', sans-serif;
  font-size: clamp(42px, 7vw, 74px);
  letter-spacing: -0.075em;
  line-height: 1.03;
}

.error-page p {
  max-width: 450px;
  margin: 17px 0 25px;
  color: var(--color-muted);
  font-size: 15px;
  line-height: 1.7;
}
</style>
