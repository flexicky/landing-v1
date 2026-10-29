<template>
  <div class="auth-form">
    <div class="auth-form__intro">
      <span class="auth-form__eyebrow"><span /> {{ isRegister ? 'НОВОЕ НАЧАЛО' : 'С ВОЗВРАЩЕНИЕМ' }}</span>
      <h2>{{ isRegister ? 'Создайте свой аккаунт' : 'Снова в своей точке' }}</h2>
      <p>{{ isRegister ? 'Начните с простого — дальше разберётесь по ходу.' : 'Войдите, чтобы продолжить работу над важным.' }}</p>
    </div>

    <FeedbackMessage v-if="successNotice" kind="success" message="Аккаунт создан. Теперь войдите, чтобы продолжить." />
    <FeedbackMessage v-if="formError" :message="formError" />

    <form class="auth-form__fields" novalidate @submit.prevent="submit">
      <AuthField
        v-model="email"
        name="email"
        label="Электронная почта"
        type="email"
        placeholder="name@example.com"
        autocomplete="email"
        :maxlength="100"
        :required="true"
        :disabled="isSubmitting"
        :error="errors.email"
      />
      <AuthField
        v-model="password"
        name="password"
        label="Пароль"
        :type="isPasswordVisible ? 'text' : 'password'"
        placeholder="Не менее 6 символов"
        :autocomplete="isRegister ? 'new-password' : 'current-password'"
        :minlength="6"
        :maxlength="200"
        :required="true"
        :disabled="isSubmitting"
        :error="errors.password"
      >
        <template #trailing>
          <button
            class="auth-form__password-toggle"
            type="button"
            :aria-label="isPasswordVisible ? 'Скрыть пароль' : 'Показать пароль'"
            :aria-pressed="isPasswordVisible"
            :disabled="isSubmitting"
            @click="isPasswordVisible = !isPasswordVisible"
          >
            <svg v-if="!isPasswordVisible" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M2.75 12s3.25-6 9.25-6 9.25 6 9.25 6-3.25 6-9.25 6-9.25-6-9.25-6Z" stroke="currentColor" stroke-width="1.6" />
              <circle cx="12" cy="12" r="2.5" stroke="currentColor" stroke-width="1.6" />
            </svg>
            <svg v-else viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m3 3 18 18M10.6 10.7a2 2 0 0 0 2.7 2.7M9.8 5.2A9.6 9.6 0 0 1 12 5c6 0 9.25 7 9.25 7a14.2 14.2 0 0 1-3.2 3.8M6.2 6.2C3.9 7.7 2.75 12 2.75 12s3.25 7 9.25 7c1.2 0 2.3-.3 3.2-.7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </template>
      </AuthField>

      <AuthField
        v-if="isRegister"
        v-model="confirmation"
        name="confirmation"
        label="Повторите пароль"
        :type="isPasswordVisible ? 'text' : 'password'"
        placeholder="Введите пароль ещё раз"
        autocomplete="new-password"
        :minlength="6"
        :maxlength="200"
        :required="true"
        :disabled="isSubmitting"
        :error="errors.confirmation"
      />

      <p v-if="isRegister" class="auth-form__password-hint">Используйте не менее 6 символов.</p>

      <AppButton type="submit" size="large" block :loading="isSubmitting">
        {{ isRegister ? 'Создать аккаунт' : 'Войти в аккаунт' }}
        <template #end><IconArrowRight class="auth-form__arrow" /></template>
      </AppButton>
    </form>

    <p class="auth-form__switch">
      {{ isRegister ? 'Уже зарегистрированы?' : 'Впервые в Точке?' }}
      <NuxtLink :to="isRegister ? '/login' : '/register'">{{ isRegister ? 'Войти' : 'Создать аккаунт' }}</NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useAuthForm } from '~/composables/useAuthForm'

const props = defineProps<{ mode: 'login' | 'register' }>()
const {
  email,
  password,
  confirmation,
  errors,
  formError,
  isSubmitting,
  isPasswordVisible,
  isRegister,
  successNotice,
  submit,
} = useAuthForm(props.mode)
</script>

<style scoped>
.auth-form {
  width: 100%;
}

.auth-form__intro {
  margin-bottom: 27px;
}

.auth-form__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #78847a;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.15em;
}

.auth-form__eyebrow span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #9ac94e;
}

.auth-form h2 {
  margin: 14px 0 0;
  color: var(--color-ink);
  font-family: Manrope, 'DM Sans', sans-serif;
  font-size: clamp(31px, 3vw, 38px);
  font-weight: 700;
  letter-spacing: -0.065em;
  line-height: 1.1;
}

.auth-form__intro p {
  margin: 11px 0 0;
  color: #7e887f;
  font-size: 13px;
  line-height: 1.6;
}

.auth-form > :deep(.feedback-message) + :deep(.feedback-message) {
  margin-top: 10px;
}

.auth-form__fields {
  display: grid;
  gap: 17px;
  margin-top: 24px;
}

.auth-form__password-toggle {
  display: grid;
  width: 43px;
  height: 48px;
  flex: 0 0 43px;
  place-items: center;
  margin-right: 2px;
  border: 0;
  border-radius: 9px;
  background: transparent;
  color: #8b968d;
  cursor: pointer;
}

.auth-form__password-toggle:hover {
  color: #46544a;
}

.auth-form__password-toggle:disabled {
  cursor: not-allowed;
}

.auth-form__password-toggle svg {
  width: 19px;
  height: 19px;
}

.auth-form__password-hint {
  margin: -8px 0 -2px;
  color: #929b93;
  font-size: 11px;
}

.auth-form__arrow {
  width: 19px;
  height: 19px;
}

.auth-form__switch {
  margin: 22px 0 0;
  color: #798379;
  font-size: 12px;
  text-align: center;
}

.auth-form__switch a {
  margin-left: 5px;
  color: #344237;
  font-weight: 800;
  text-decoration: underline;
  text-decoration-color: #c2cfb5;
  text-underline-offset: 3px;
}

.auth-form__switch a:hover {
  color: #718e4a;
}

@media (max-width: 480px) {
  .auth-form__intro {
    margin-bottom: 23px;
  }

  .auth-form h2 {
    font-size: 32px;
  }
}
</style>
