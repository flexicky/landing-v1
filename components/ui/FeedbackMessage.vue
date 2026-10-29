<template>
  <p v-if="message" class="feedback-message" :class="`feedback-message--${kind}`" :role="kind === 'error' ? 'alert' : 'status'">
    <span class="feedback-message__icon" aria-hidden="true">{{ kind === 'error' ? '!' : '✓' }}</span>
    <span>{{ message }}</span>
  </p>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ message?: string; kind?: 'error' | 'success' }>(), { kind: 'error' })
</script>

<style scoped>
.feedback-message {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 0;
  padding: 13px 14px;
  border: 1px solid transparent;
  border-radius: 12px;
  font-size: 13px;
  line-height: 1.55;
}

.feedback-message--error {
  border-color: #f0d1ce;
  background: #fff4f2;
  color: #9c3734;
}

.feedback-message--success {
  border-color: #d7e9b2;
  background: #f6fbe9;
  color: #48651c;
}

.feedback-message__icon {
  display: grid;
  width: 18px;
  height: 18px;
  flex: 0 0 18px;
  place-items: center;
  border: 1px solid currentColor;
  border-radius: 50%;
  font-size: 11px;
  font-weight: 800;
  line-height: 1;
}
</style>
