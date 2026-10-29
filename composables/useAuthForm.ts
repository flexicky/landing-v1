import { computed, ref } from 'vue'
import { useAuth } from '~/composables/useAuth'

type AuthFormMode = 'login' | 'register'
type FieldErrors = Partial<Record<'email' | 'password' | 'confirmation', string>>

export function useAuthForm(mode: AuthFormMode) {
  const email = ref('')
  const password = ref('')
  const confirmation = ref('')
  const errors = ref<FieldErrors>({})
  const formError = ref('')
  const isSubmitting = ref(false)
  const isPasswordVisible = ref(false)
  const { signIn, signUp, getErrorMessage } = useAuth()
  const router = useRouter()
  const route = useRoute()

  const isRegister = computed(() => mode === 'register')
  const successNotice = computed(() => mode === 'login' && route.query.registered === '1')

  function validate(): boolean {
    const nextErrors: FieldErrors = {}
    const normalizedEmail = email.value.trim()

    if (!normalizedEmail) {
      nextErrors.email = 'Введите электронную почту.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      nextErrors.email = 'Проверьте формат электронной почты.'
    } else if (normalizedEmail.length > 100) {
      nextErrors.email = 'Почта должна быть не длиннее 100 символов.'
    }

    if (!password.value) {
      nextErrors.password = 'Введите пароль.'
    } else if (password.value.length < 6) {
      nextErrors.password = 'Пароль должен содержать не менее 6 символов.'
    } else if (password.value.length > 200) {
      nextErrors.password = 'Пароль должен быть не длиннее 200 символов.'
    }

    if (mode === 'register' && password.value !== confirmation.value) {
      nextErrors.confirmation = 'Пароли не совпадают.'
    }

    errors.value = nextErrors
    return Object.keys(nextErrors).length === 0
  }

  function getRedirectPath(): string {
    const redirect = route.query.redirect
    if (typeof redirect === 'string' && redirect.startsWith('/') && !redirect.startsWith('//') && !redirect.startsWith('/\\')) {
      return redirect
    }
    return '/workspace'
  }

  async function submit() {
    formError.value = ''
    if (!validate()) return

    isSubmitting.value = true
    try {
      const normalizedEmail = email.value.trim()
      if (mode === 'login') {
        await signIn(normalizedEmail, password.value)
        await router.replace(getRedirectPath())
        return
      }

      const authenticated = await signUp(normalizedEmail, password.value)
      if (authenticated) {
        await router.replace('/workspace')
      } else {
        await router.replace({ path: '/login', query: { registered: '1' } })
      }
    } catch (error) {
      formError.value = getErrorMessage(error)
    } finally {
      isSubmitting.value = false
    }
  }

  return {
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
  }
}
