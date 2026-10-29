<template>
  <section class="hero-section">
    <div class="page-shell hero-section__grid">
      <div class="hero-copy">
        <span class="eyebrow"><span class="eyebrow-dot" />Рабочее пространство для команд</span>
        <h1>Всё важное —<br /><span>в одной точке.</span></h1>
        <p class="hero-copy__description">Соберите задачи, планы и договорённости в одном месте. Чтобы меньше переключаться и чаще двигаться к результату.</p>
        <div class="hero-copy__actions">
          <AppButton :to="isAuthenticated ? '/workspace' : '/register'" size="large">
            {{ isAuthenticated ? 'Открыть пространство' : 'Начать бесплатно' }}
            <template #end><IconArrowUpRight class="hero-copy__arrow" /></template>
          </AppButton>
          <NuxtLink v-if="isAuthenticated" class="hero-copy__login" to="/workspace">
            Вы вошли как <b>{{ firstName }}</b>
          </NuxtLink>
          <NuxtLink v-else class="hero-copy__login" to="/login">Уже есть аккаунт? <b>Войти</b></NuxtLink>
        </div>
        <div v-if="isAuthenticated" class="hero-proof hero-proof--session">
          <span class="hero-proof__status"><IconCheck /></span>
          <div><strong>С возвращением, {{ firstName }}</strong><span>Ваше пространство готово к работе</span></div>
        </div>
        <div v-else class="hero-proof">
          <div class="hero-proof__avatars" aria-hidden="true"><span>А</span><span>М</span><span>Л</span><span>+</span></div>
          <div><strong>Вместе проще</strong><span>Планы команды — под рукой</span></div>
        </div>
      </div>
      <DashboardPreview :user-name="dashboardUserName" :user-initial="dashboardUserInitial" />
    </div>
    <div class="page-shell hero-bottom">
      <span class="hero-bottom__line" />
      <p>Ясный план меняет всё.</p>
      <span class="hero-bottom__line" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAuth } from '~/composables/useAuth'

const { user, isAuthenticated } = useAuth()
const firstName = computed(() => {
  const displayName = user.value?.name?.trim()
  const name = displayName?.split(/\s+/)[0] || user.value?.email?.split('@')[0] || 'вам'
  return name.length > 16 ? `${name.slice(0, 15)}…` : name
})
const dashboardUserName = computed(() => isAuthenticated.value ? firstName.value : 'Аня')
const dashboardUserInitial = computed(() => dashboardUserName.value.slice(0, 1).toUpperCase())
</script>

<style scoped>
.hero-section {
  position: relative;
  padding-top: 70px;
}

.hero-section__grid {
  display: grid;
  min-height: 545px;
  grid-template-columns: minmax(360px, 0.82fr) minmax(0, 1.18fr);
  align-items: center;
  gap: clamp(24px, 4vw, 56px);
}

.hero-copy {
  position: relative;
  z-index: 2;
  padding-block: 16px 37px;
}

.hero-copy h1 {
  margin: 24px 0 0;
  font-family: Manrope, 'DM Sans', sans-serif;
  font-size: clamp(52px, 6.2vw, 78px);
  font-weight: 700;
  letter-spacing: -0.082em;
  line-height: 0.99;
}

.hero-copy h1 span {
  color: #718d4d;
}

.hero-copy__description {
  max-width: 445px;
  margin: 23px 0 0;
  color: #69746b;
  font-size: 16px;
  line-height: 1.75;
}

.hero-copy__actions {
  display: flex;
  align-items: center;
  gap: 23px;
  margin-top: 30px;
}

.hero-copy__arrow {
  width: 19px;
  height: 19px;
}

.hero-copy__login {
  color: #7b857c;
  font-size: 12px;
  white-space: nowrap;
}

.hero-copy__login b {
  margin-left: 3px;
  color: var(--color-ink);
  font-weight: 700;
  text-decoration: underline;
  text-decoration-color: #b8c2b7;
  text-underline-offset: 3px;
}

.hero-proof {
  display: flex;
  align-items: center;
  gap: 13px;
  margin-top: 47px;
}

.hero-proof__status {
  display: grid;
  width: 34px;
  height: 34px;
  flex: 0 0 34px;
  place-items: center;
  border: 1px solid #d8e8bd;
  border-radius: 50%;
  background: #f0f7e3;
  color: #749849;
}

.hero-proof__status :deep(svg) {
  width: 18px;
  height: 18px;
}

.hero-proof__avatars {
  display: flex;
  padding-left: 4px;
}

.hero-proof__avatars span {
  display: grid;
  width: 31px;
  height: 31px;
  place-items: center;
  margin-left: -4px;
  border: 2px solid var(--color-paper);
  border-radius: 50%;
  background: #ecd0c0;
  color: #705245;
  font-size: 9px;
  font-weight: 800;
}

.hero-proof__avatars span:nth-child(2) { background: #dce9c6; color: #526b38; }
.hero-proof__avatars span:nth-child(3) { background: #d8e6ed; color: #4d6574; }
.hero-proof__avatars span:nth-child(4) { background: var(--color-ink); color: white; font-size: 12px; }

.hero-proof strong,
.hero-proof > div:last-child span {
  display: block;
}

.hero-proof strong {
  color: #344137;
  font-size: 11px;
  font-weight: 800;
}

.hero-proof > div:last-child span {
  margin-top: 4px;
  color: #929b92;
  font-size: 10px;
}

.hero-bottom {
  display: flex;
  align-items: center;
  gap: 19px;
  padding-block: 14px 27px;
}

.hero-bottom__line {
  height: 1px;
  flex: 1;
  background: #e5e9e1;
}

.hero-bottom p {
  margin: 0;
  color: #99a198;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

@media (max-width: 1050px) {
  .hero-section__grid {
    grid-template-columns: minmax(320px, 0.78fr) minmax(0, 1.22fr);
    gap: 20px;
  }

  .hero-copy h1 {
    font-size: clamp(52px, 6vw, 68px);
  }

  .hero-copy__actions {
    align-items: flex-start;
    flex-direction: column;
    gap: 14px;
  }

  .hero-proof {
    margin-top: 31px;
  }
}

@media (max-width: 760px) {
  .hero-section {
    padding-top: 48px;
  }

  .hero-section__grid {
    min-height: auto;
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
  }

  .hero-copy {
    padding-block: 0 0;
  }

  .hero-copy h1 {
    margin-top: 19px;
    font-size: clamp(50px, 11vw, 72px);
  }

  .hero-copy__description {
    max-width: 520px;
    margin-top: 17px;
    font-size: 15px;
  }

  .hero-copy__actions {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 18px;
    margin-top: 23px;
  }

  .hero-proof {
    margin-top: 24px;
  }

  .hero-bottom {
    padding-top: 10px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding-top: 38px;
  }

  .hero-copy h1 {
    font-size: 51px;
  }

  .hero-copy__actions {
    align-items: flex-start;
    flex-direction: column;
    gap: 15px;
  }

  .hero-bottom {
    gap: 11px;
  }

  .hero-bottom p {
    font-size: 8px;
  }
}
</style>
