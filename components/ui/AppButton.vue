<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="app-button"
    :class="buttonClasses"
    :aria-disabled="disabled || loading ? 'true' : undefined"
    :tabindex="disabled || loading ? -1 : undefined"
    @click="preventDisabledNavigation"
  >
    <span v-if="loading" class="app-button__spinner" aria-hidden="true" />
    <slot v-else name="icon" />
    <span><slot /></span>
    <slot name="end" />
  </NuxtLink>
  <button
    v-else
    class="app-button"
    :class="buttonClasses"
    :type="type"
    :disabled="disabled || loading"
    :aria-busy="loading ? 'true' : undefined"
  >
    <span v-if="loading" class="app-button__spinner" aria-hidden="true" />
    <slot v-else name="icon" />
    <span><slot /></span>
    <slot name="end" />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    to?: string
    variant?: 'primary' | 'dark' | 'outline' | 'subtle'
    size?: 'small' | 'medium' | 'large'
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    loading?: boolean
    block?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'medium',
    type: 'button',
    disabled: false,
    loading: false,
    block: false,
  },
)

const buttonClasses = computed(() => [
  `app-button--${props.variant}`,
  `app-button--${props.size}`,
  { 'app-button--block': props.block },
])

function preventDisabledNavigation(event: MouseEvent) {
  if (props.disabled || props.loading) event.preventDefault()
}
</script>

<style scoped>
.app-button {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 160ms ease, border-color 160ms ease, color 160ms ease, transform 160ms ease, box-shadow 160ms ease;
}

.app-button:hover:not(:disabled):not([aria-disabled='true']) {
  transform: translateY(-1px);
}

.app-button:active:not(:disabled):not([aria-disabled='true']) {
  transform: translateY(0);
}

.app-button :slotted(svg),
.app-button__spinner {
  width: 19px;
  height: 19px;
  flex: 0 0 auto;
}

.app-button--primary {
  padding-inline: 23px;
  background: var(--color-accent);
  color: var(--color-ink);
}

.app-button--primary:hover:not(:disabled):not([aria-disabled='true']) {
  background: var(--color-accent-strong);
  box-shadow: 0 8px 22px rgba(171, 218, 77, 0.22);
}

.app-button--dark {
  padding-inline: 23px;
  background: var(--color-ink);
  color: #fff;
}

.app-button--dark:hover:not(:disabled):not([aria-disabled='true']) {
  background: #382c49;
}

.app-button--outline {
  padding-inline: 22px;
  border-color: #e2dce9;
  background: rgba(255, 255, 255, 0.7);
  color: var(--color-ink);
}

.app-button--outline:hover:not(:disabled):not([aria-disabled='true']) {
  border-color: #c9bfd7;
  background: #fff;
}

.app-button--subtle {
  padding-inline: 16px;
  background: transparent;
  color: #635b6d;
}

.app-button--subtle:hover:not(:disabled):not([aria-disabled='true']) {
  background: rgba(104, 77, 152, 0.07);
  color: var(--color-ink);
}

.app-button--small {
  min-height: 40px;
  gap: 8px;
  padding-inline: 17px;
  font-size: 13px;
}

.app-button--medium {
  min-height: 48px;
}

.app-button--large {
  min-height: 56px;
  gap: 13px;
  padding-inline: 26px;
  font-size: 15px;
}

.app-button--block {
  width: 100%;
}

.app-button:disabled,
.app-button[aria-disabled='true'] {
  opacity: 0.58;
  cursor: not-allowed;
}

.app-button__spinner {
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 650ms linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@media (max-width: 480px) {
  .app-button--large {
    min-height: 52px;
    padding-inline: 20px;
  }
}
</style>
