<template>
  <section class="final-cta-section section-space">
    <div class="page-shell">
      <div class="final-cta">
        <div class="final-cta__pattern" aria-hidden="true"><span /><span /><span /><span /></div>
        <div class="final-cta__copy">
          <span class="final-cta__eyebrow"><span /> ХОРОШИЙ МОМЕНТ — СЕЙЧАС</span>
          <h2>Дайте планам<br />свою точку опоры.</h2>
          <p v-if="isAuthenticated">Ваше пространство уже готово. Продолжайте работу и двигайтесь к следующему результату.</p>
          <p v-else>Создайте пространство, в котором проще понять, что важно, и сделать следующий шаг.</p>
        </div>
        <div class="final-cta__action">
          <AppButton :to="isAuthenticated ? '/workspace' : '/register'" variant="dark" size="large">
            {{ isAuthenticated ? 'Перейти к работе' : 'Создать аккаунт' }}
            <template #end><IconArrowUpRight class="final-cta__arrow" /></template>
          </AppButton>
          <span>{{ isAuthenticated ? `С возвращением, ${accountName}` : 'Бесплатно начать — без лишних шагов' }}</span>
        </div>
        <div class="final-cta__orb" aria-hidden="true">т.</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAuth } from '~/composables/useAuth'

const { user, isAuthenticated } = useAuth()
const accountName = computed(() => {
  const name = user.value?.name?.trim() || user.value?.email?.split('@')[0] || 'снова'
  return name.length > 24 ? `${name.slice(0, 23)}…` : name
})
</script>

<style scoped>
.final-cta-section {
  padding-top: 10px;
  padding-bottom: 96px;
}

.final-cta {
  position: relative;
  display: flex;
  min-height: 310px;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  overflow: hidden;
  padding: 50px clamp(32px, 6vw, 72px);
  border: 1px solid #cee7a4;
  border-radius: 28px;
  background: linear-gradient(110deg, #e6f5ca, #d8efad 64%, #d3eba3);
  isolation: isolate;
}

.final-cta__copy,
.final-cta__action {
  position: relative;
  z-index: 2;
}

.final-cta__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #71834e;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.14em;
}

.final-cta__eyebrow span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #8db54b;
}

.final-cta h2 {
  margin: 16px 0 0;
  color: #1f2b22;
  font-family: Manrope, 'DM Sans', sans-serif;
  font-size: clamp(39px, 5vw, 58px);
  font-weight: 700;
  letter-spacing: -0.075em;
  line-height: 1.02;
}

.final-cta p {
  max-width: 460px;
  margin: 15px 0 0;
  color: #65754f;
  font-size: 13px;
  line-height: 1.7;
}

.final-cta__action {
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin-top: 70px;
}

.final-cta__action span {
  padding-left: 7px;
  color: #71815a;
  font-size: 10px;
}

.final-cta__arrow {
  width: 19px;
  height: 19px;
}

.final-cta__pattern {
  position: absolute;
  top: -115px;
  right: 8%;
  z-index: -1;
  display: grid;
  width: 290px;
  height: 290px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 12px;
  opacity: 0.46;
  transform: rotate(17deg);
}

.final-cta__pattern span {
  border: 1px solid rgba(92, 121, 51, 0.32);
  border-radius: 28px;
}

.final-cta__pattern span:nth-child(2) { border-radius: 50%; }
.final-cta__pattern span:nth-child(3) { border-radius: 50%; }

.final-cta__orb {
  position: absolute;
  right: -116px;
  bottom: -236px;
  z-index: -1;
  display: grid;
  width: 390px;
  height: 390px;
  place-items: center;
  border: 1px solid rgba(103, 141, 57, 0.24);
  border-radius: 50%;
  color: rgba(108, 144, 62, 0.16);
  font-family: Manrope, 'DM Sans', sans-serif;
  font-size: 145px;
  font-weight: 800;
  letter-spacing: -0.12em;
  transform: rotate(-20deg);
}

@media (max-width: 760px) {
  .final-cta-section {
    padding-bottom: 73px;
  }

  .final-cta {
    min-height: 0;
    align-items: flex-start;
    flex-direction: column;
    gap: 25px;
    padding: 36px 28px 33px;
    border-radius: 24px;
  }

  .final-cta h2 {
    font-size: clamp(39px, 10vw, 54px);
  }

  .final-cta__action {
    margin-top: 0;
  }

  .final-cta__pattern {
    top: -70px;
    right: -40px;
  }
}

@media (max-width: 480px) {
  .final-cta {
    padding-inline: 23px;
  }

  .final-cta h2 {
    font-size: 39px;
  }
}
</style>
