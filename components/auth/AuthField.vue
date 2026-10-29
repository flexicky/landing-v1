<template>
  <div class="auth-field">
    <label class="auth-field__label" :for="name">{{ label }}</label>
    <div class="auth-field__control" :class="{ 'auth-field__control--invalid': error }">
      <input
        :id="name"
        :name="name"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :required="required"
        :minlength="minlength"
        :maxlength="maxlength"
        :aria-invalid="Boolean(error)"
        :aria-describedby="error ? `${name}-error` : undefined"
        :disabled="disabled"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
      <slot name="trailing" />
    </div>
    <span v-if="error" :id="`${name}-error`" class="auth-field__error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  name: string
  label: string
  modelValue: string
  type?: string
  placeholder?: string
  autocomplete?: string
  required?: boolean
  minlength?: number
  maxlength?: number
  error?: string
  disabled?: boolean
}>(), {
  type: 'text',
  placeholder: '',
  autocomplete: 'off',
  required: false,
  disabled: false,
})

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<style scoped>
.auth-field {
  display: grid;
  gap: 8px;
}

.auth-field__label {
  color: #36423a;
  font-size: 13px;
  font-weight: 700;
}

.auth-field__control {
  display: flex;
  min-height: 52px;
  align-items: center;
  border: 1px solid #e1e5dd;
  border-radius: 13px;
  background: #fff;
  transition: border-color 150ms ease, box-shadow 150ms ease;
}

.auth-field__control:focus-within {
  border-color: #9bbb56;
  box-shadow: 0 0 0 3px rgba(190, 222, 119, 0.24);
}

.auth-field__control--invalid {
  border-color: #d7837d;
}

.auth-field__control input {
  width: 100%;
  min-width: 0;
  min-height: 50px;
  padding: 0 15px;
  border: 0;
  outline: 0;
  border-radius: inherit;
  background: transparent;
  color: var(--color-ink);
  font-size: 14px;
}

.auth-field__control input::placeholder {
  color: #a5ada5;
}

.auth-field__control input:disabled {
  color: #a5ada5;
  cursor: not-allowed;
}

.auth-field__error {
  color: var(--color-danger);
  font-size: 12px;
  line-height: 1.45;
}
</style>
