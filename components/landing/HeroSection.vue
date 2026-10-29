<template>
  <section class="hero-section" aria-labelledby="hero-title">
    <div class="hero-section__backdrop" aria-hidden="true">
      <span class="hero-section__blur hero-section__blur--violet" />
      <span class="hero-section__blur hero-section__blur--lime" />
      <span class="hero-section__grid-pattern" />
    </div>

    <div class="page-shell hero-section__grid">
      <div class="hero-copy">
        <span class="hero-copy__eyebrow"><i /> SMM-ЦЕНТР УПРАВЛЕНИЯ</span>
        <h1 id="hero-title">Твой SMM.<br /><span>Без рутины.</span></h1>
        <p class="hero-copy__description">Аналитика, автопостинг и нейросети — в одном монструозно удобном сервисе. Ты придумываешь стратегию, Monst помогает довести её до результата.</p>

        <div class="hero-copy__chips" aria-label="Возможности сервиса">
          <span><i>↗</i> Аналитика</span>
          <span><i>◷</i> Автопостинг</span>
          <span><i>✦</i> Нейросети</span>
        </div>

        <div class="hero-copy__actions">
          <AppButton :to="isAuthenticated ? '/workspace' : '/register'" size="large">
            {{ isAuthenticated ? 'Открыть кабинет' : 'Начать бесплатно' }}
            <template #end><IconArrowUpRight class="hero-copy__arrow" /></template>
          </AppButton>
          <NuxtLink v-if="isAuthenticated" class="hero-copy__login" to="/workspace">
            С возвращением, <b>{{ firstName }}</b>
          </NuxtLink>
          <NuxtLink v-else class="hero-copy__login" to="#возможности">Посмотреть возможности <b>↓</b></NuxtLink>
        </div>

        <div v-if="isAuthenticated" class="hero-proof hero-proof--session">
          <span class="hero-proof__status"><IconCheck /></span>
          <div><strong>Monst уже наготове</strong><span>Твой SMM-кабинет ждёт продолжения</span></div>
        </div>
        <div v-else class="hero-proof">
          <div class="hero-proof__avatar"><img src="/images/monst-mascot.png" alt="" /></div>
          <div><strong>Пока ты занят делом</strong><span>Monst следит за контентом и цифрами</span></div>
          <span class="hero-proof__spark">✦</span>
        </div>
      </div>

      <div class="hero-visual" role="group" aria-label="Пример аналитической панели Monst Smm">
        <div class="hero-visual__aura" aria-hidden="true" />
        <div class="hero-visual__orbit hero-visual__orbit--one" aria-hidden="true" />
        <div class="hero-visual__orbit hero-visual__orbit--two" aria-hidden="true" />
        <img
          class="hero-visual__mascot"
          src="/images/monst-mascot.png"
          alt="Зелёный маскот Monst Smm с телефоном и парящими карточками аналитики"
          width="1024"
          height="1024"
          fetchpriority="high"
        />

        <div class="hero-visual__float hero-visual__float--growth" aria-hidden="true">
          <span class="hero-visual__float-icon">↗</span>
          <span class="hero-visual__float-copy"><b>+28,4%</b><small>охват за месяц</small></span>
          <span class="hero-visual__sparkline"><i /><i /><i /><i /><i /><i /><i /></span>
        </div>
        <div class="hero-visual__float hero-visual__float--ai" aria-hidden="true">
          <span class="hero-visual__ai-star">✦</span>
          <span class="hero-visual__float-copy"><b>Monst AI</b><small>3 идеи уже готовы</small></span>
          <span class="hero-visual__ai-ready">●</span>
        </div>

        <DashboardPreview class="hero-visual__dashboard" :user-name="dashboardUserName" />
      </div>
    </div>

    <div class="hero-ticker" aria-label="Аналитика, автопостинг и нейросети для SMM">
      <div class="hero-ticker__track" aria-hidden="true">
        <div class="hero-ticker__group"><span>АНАЛИТИКА</span><i>✳</i><span>АВТОПОСТИНГ</span><i>✳</i><span>НЕЙРОСЕТИ</span><i>✳</i><span>КОНТЕНТ-ПЛАН</span><i>✳</i><span>РОСТ В СОЦСЕТЯХ</span><i>✳</i></div>
        <div class="hero-ticker__group"><span>АНАЛИТИКА</span><i>✳</i><span>АВТОПОСТИНГ</span><i>✳</i><span>НЕЙРОСЕТИ</span><i>✳</i><span>КОНТЕНТ-ПЛАН</span><i>✳</i><span>РОСТ В СОЦСЕТЯХ</span><i>✳</i></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAuth } from '~/composables/useAuth'

const { user, isAuthenticated } = useAuth()
const firstName = computed(() => {
  const displayName = user.value?.name?.trim()
  const name = displayName?.split(/\s+/)[0] || user.value?.email?.split('@')[0] || 'тебя'
  return name.length > 16 ? `${name.slice(0, 15)}…` : name
})
const dashboardUserName = computed(() => isAuthenticated.value ? firstName.value : 'Моя команда')
</script>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
  padding-top: 45px;
  background: #17131f;
  color: #fff;
  isolation: isolate;
}

.hero-section__backdrop {
  position: absolute;
  z-index: -1;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.hero-section__blur {
  position: absolute;
  border-radius: 50%;
  filter: blur(3px);
}

.hero-section__blur--violet {
  top: -430px;
  right: -80px;
  width: 900px;
  height: 900px;
  background: radial-gradient(circle, rgba(120, 83, 202, 0.24), rgba(120, 83, 202, 0) 67%);
  animation: glow-pulse 9s ease-in-out infinite;
}

.hero-section__blur--lime {
  right: 35%;
  bottom: 4%;
  width: 360px;
  height: 360px;
  background: radial-gradient(circle, rgba(211, 255, 89, 0.12), transparent 68%);
}

.hero-section__grid-pattern {
  position: absolute;
  inset: 0;
  opacity: 0.2;
  background-image: linear-gradient(rgba(224, 209, 251, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(224, 209, 251, 0.045) 1px, transparent 1px);
  background-size: 62px 62px;
  mask-image: linear-gradient(to bottom, black 0%, transparent 85%);
}

.hero-section__grid {
  position: relative;
  display: grid;
  min-height: 610px;
  grid-template-columns: minmax(380px, 0.85fr) minmax(0, 1.15fr);
  align-items: center;
  gap: clamp(22px, 3vw, 45px);
  padding-top: 5px;
  padding-bottom: 48px;
}

.hero-copy {
  position: relative;
  z-index: 5;
  padding-block: 20px 25px;
  animation: hero-copy-enter 780ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

.hero-copy__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 8px 11px;
  border: 1px solid rgba(221, 210, 244, 0.14);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.055);
  color: #c7bed6;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.14em;
}

.hero-copy__eyebrow i {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-accent);
  box-shadow: 0 0 13px rgba(211, 255, 89, 0.72);
}

.hero-copy h1 {
  max-width: 660px;
  margin: 25px 0 0;
  color: #fff;
  font-family: Manrope, 'DM Sans', sans-serif;
  font-size: clamp(58px, 7vw, 88px);
  font-weight: 800;
  letter-spacing: -0.085em;
  line-height: 0.96;
}

.hero-copy h1 span {
  color: var(--color-accent);
  text-shadow: 0 0 38px rgba(211, 255, 89, 0.14);
}

.hero-copy__description {
  max-width: 505px;
  margin: 22px 0 0;
  color: #b7afc2;
  font-size: 15px;
  line-height: 1.8;
}

.hero-copy__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 21px;
}

.hero-copy__chips span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 10px;
  border: 1px solid rgba(226, 217, 241, 0.13);
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.04);
  color: #d3cadd;
  font-size: 9px;
  font-weight: 700;
}

.hero-copy__chips i {
  color: var(--color-accent);
  font-size: 11px;
  font-style: normal;
}

.hero-copy__chips span:nth-child(2) i { color: #b897ff; }
.hero-copy__chips span:nth-child(3) i { color: var(--color-pink); }

.hero-copy__actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 19px;
  margin-top: 27px;
}

.hero-copy__arrow {
  width: 19px;
  height: 19px;
}

.hero-copy__login {
  color: #b7aec5;
  font-size: 11px;
  transition: color 160ms ease;
}

.hero-copy__login:hover { color: #fff; }

.hero-copy__login b {
  margin-left: 3px;
  color: var(--color-accent);
  font-weight: 800;
}

.hero-proof {
  display: flex;
  align-items: center;
  gap: 11px;
  margin-top: 35px;
}

.hero-proof__avatar {
  display: grid;
  width: 37px;
  height: 37px;
  flex: 0 0 37px;
  place-items: center;
  overflow: hidden;
  border: 1px solid rgba(211, 255, 89, 0.2);
  border-radius: 12px;
  background: #30263d;
}

.hero-proof__avatar img {
  width: 54px;
  height: 54px;
  object-fit: cover;
  object-position: 50% 45%;
  mix-blend-mode: screen;
}

.hero-proof__status {
  display: grid;
  width: 34px;
  height: 34px;
  flex: 0 0 34px;
  place-items: center;
  border: 1px solid rgba(211, 255, 89, 0.28);
  border-radius: 50%;
  background: rgba(211, 255, 89, 0.1);
  color: var(--color-accent);
}

.hero-proof__status :deep(svg) { width: 18px; height: 18px; }

.hero-proof > div:nth-child(2) strong,
.hero-proof > div:nth-child(2) span {
  display: block;
}

.hero-proof > div:nth-child(2) strong {
  color: #f5f1f9;
  font-size: 10px;
  font-weight: 800;
}

.hero-proof > div:nth-child(2) span {
  margin-top: 4px;
  color: #9b92a8;
  font-size: 9px;
}

.hero-proof__spark {
  align-self: flex-start;
  margin-left: 1px;
  color: var(--color-accent);
  font-size: 13px;
}

.hero-visual {
  position: relative;
  min-width: 0;
  min-height: 555px;
  isolation: isolate;
  animation: hero-visual-enter 950ms 100ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

.hero-visual__aura {
  position: absolute;
  top: 4%;
  right: 2%;
  width: 94%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(139, 97, 219, 0.28), rgba(139, 97, 219, 0.1) 43%, transparent 70%);
  filter: blur(10px);
  animation: glow-pulse 6.5s ease-in-out infinite;
}

.hero-visual__mascot {
  position: absolute;
  top: -15px;
  right: -6%;
  z-index: 2;
  width: min(108%, 610px);
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  mask-image: radial-gradient(circle at 51% 49%, #000 50%, rgba(0, 0, 0, 0.84) 58%, transparent 75%);
  mix-blend-mode: screen;
  animation: soft-float 6s ease-in-out infinite;
}

.hero-visual__orbit {
  position: absolute;
  z-index: 1;
  border: 1px solid rgba(212, 196, 247, 0.2);
  border-radius: 50%;
  pointer-events: none;
}

.hero-visual__orbit--one {
  top: 5%;
  right: -3%;
  width: 86%;
  aspect-ratio: 1;
  transform: rotate(-27deg) scaleY(0.55);
}

.hero-visual__orbit--two {
  top: 3%;
  right: 7%;
  width: 77%;
  aspect-ratio: 1;
  border-style: dashed;
  border-color: rgba(211, 255, 89, 0.12);
  transform: rotate(24deg) scaleY(0.62);
  animation: orbit-spin 35s linear infinite;
}

@keyframes orbit-spin { to { transform: rotate(384deg) scaleY(0.62); } }
@keyframes hero-copy-enter { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
@keyframes hero-visual-enter { from { opacity: 0; transform: translateY(25px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }

.hero-visual__float {
  position: absolute;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 11px 13px;
  border: 1px solid rgba(237, 229, 250, 0.2);
  border-radius: 13px;
  background: rgba(36, 28, 49, 0.88);
  box-shadow: 0 15px 45px rgba(4, 3, 10, 0.27);
  backdrop-filter: blur(15px);
}

.hero-visual__float--growth {
  top: 8%;
  left: 1%;
  animation: float-card-one 5s ease-in-out infinite;
}

.hero-visual__float--ai {
  top: 39%;
  right: -1%;
  animation: float-card-two 5.6s 300ms ease-in-out infinite;
}

@keyframes float-card-one { 50% { transform: translateY(-8px) rotate(-2deg); } }
@keyframes float-card-two { 50% { transform: translateY(7px) rotate(1deg); } }

.hero-visual__float-icon,
.hero-visual__ai-star {
  display: grid;
  width: 29px;
  height: 29px;
  flex: 0 0 29px;
  place-items: center;
  border-radius: 9px;
  background: rgba(211, 255, 89, 0.12);
  color: var(--color-accent);
  font-size: 16px;
  font-weight: 800;
}

.hero-visual__ai-star {
  background: rgba(164, 129, 247, 0.17);
  color: #cbb6ff;
}

.hero-visual__float-copy b,
.hero-visual__float-copy small {
  display: block;
  white-space: nowrap;
}

.hero-visual__float-copy b {
  color: #f8f4ff;
  font-size: 10px;
  font-weight: 800;
}

.hero-visual__float-copy small {
  margin-top: 3px;
  color: #aca3b8;
  font-size: 7px;
}

.hero-visual__sparkline {
  display: flex;
  height: 25px;
  align-items: flex-end;
  gap: 3px;
  margin-left: 5px;
}

.hero-visual__sparkline i {
  width: 4px;
  border-radius: 3px;
  background: #d3ff59;
  animation: sparkline-breathe 1.5s ease-in-out infinite alternate;
}

.hero-visual__sparkline i:nth-child(1) { height: 9px; }
.hero-visual__sparkline i:nth-child(2) { height: 15px; animation-delay: 100ms; }
.hero-visual__sparkline i:nth-child(3) { height: 11px; animation-delay: 210ms; }
.hero-visual__sparkline i:nth-child(4) { height: 20px; animation-delay: 320ms; }
.hero-visual__sparkline i:nth-child(5) { height: 14px; animation-delay: 430ms; }
.hero-visual__sparkline i:nth-child(6) { height: 24px; animation-delay: 540ms; }
.hero-visual__sparkline i:nth-child(7) { height: 19px; animation-delay: 650ms; }

@keyframes sparkline-breathe { to { opacity: 0.45; transform: scaleY(0.68); transform-origin: bottom; } }

.hero-visual__ai-ready {
  color: #c5fb59;
  font-size: 7px;
  text-shadow: 0 0 12px rgba(211, 255, 89, 0.9);
}

.hero-visual__dashboard {
  position: absolute;
  bottom: 3px;
  left: -3%;
  width: min(100%, 525px);
}

.hero-ticker {
  position: relative;
  z-index: 6;
  overflow: hidden;
  border-top: 1px solid rgba(228, 217, 245, 0.1);
  border-bottom: 1px solid rgba(228, 217, 245, 0.1);
  background: rgba(255, 255, 255, 0.025);
}

.hero-ticker__track {
  display: flex;
  width: max-content;
  animation: ticker-scroll 32s linear infinite;
}

.hero-ticker__group {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 16px 16px 16px 0;
  color: #bdb4cb;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.15em;
  white-space: nowrap;
}

.hero-ticker__group i {
  color: var(--color-accent);
  font-size: 12px;
  font-style: normal;
}

@keyframes ticker-scroll { to { transform: translateX(-50%); } }

@media (max-width: 1080px) {
  .hero-section__grid {
    grid-template-columns: minmax(350px, 0.9fr) minmax(0, 1.1fr);
    gap: 15px;
  }

  .hero-copy h1 { font-size: clamp(58px, 6.7vw, 75px); }
  .hero-visual { min-height: 510px; }
  .hero-visual__dashboard { left: -8%; width: 108%; }
}

@media (max-width: 820px) {
  .hero-section { padding-top: 35px; }
  .hero-section__grid { grid-template-columns: 1fr; gap: 10px; padding-bottom: 28px; }
  .hero-copy { max-width: 660px; padding-block: 22px 10px; }
  .hero-copy h1 { font-size: clamp(61px, 10vw, 84px); }
  .hero-copy__description { max-width: 600px; }
  .hero-visual { width: min(100%, 660px); min-height: 550px; justify-self: center; }
  .hero-visual__mascot { right: 1%; width: min(90%, 580px); }
  .hero-visual__dashboard { left: 0; width: min(88%, 525px); }
  .hero-visual__float--growth { left: 4%; }
  .hero-visual__float--ai { right: 3%; }
}

@media (max-width: 560px) {
  .hero-section { padding-top: 22px; }
  .hero-section__grid { width: min(var(--container-width), calc(100% - 36px)); }
  .hero-copy { padding-top: 25px; }
  .hero-copy__eyebrow { font-size: 8px; }
  .hero-copy h1 { margin-top: 20px; font-size: clamp(54px, 13vw, 68px); }
  .hero-copy__description { margin-top: 16px; font-size: 13px; }
  .hero-copy__actions { gap: 13px; margin-top: 21px; }
  .hero-proof { margin-top: 25px; }
  .hero-visual { min-height: 400px; margin-top: 2px; }
  .hero-visual__mascot { top: -7px; right: -7%; width: 112%; }
  .hero-visual__dashboard { bottom: 3px; left: -1%; width: 97%; }
  .hero-visual__float { gap: 7px; padding: 8px 9px; }
  .hero-visual__float--growth { top: 6%; left: -1%; }
  .hero-visual__float--ai { top: 38%; right: -1%; }
  .hero-visual__float-icon, .hero-visual__ai-star { width: 24px; height: 24px; flex-basis: 24px; font-size: 13px; }
  .hero-visual__float-copy b { font-size: 8px; }
  .hero-visual__float-copy small { font-size: 6px; }
  .hero-visual__sparkline { display: none; }
  .hero-ticker__group { gap: 22px; padding-block: 13px; font-size: 8px; }
}

@media (prefers-reduced-motion: reduce) {
  .hero-copy,
  .hero-visual,
  .hero-visual__mascot,
  .hero-ticker__track,
  .hero-section__blur,
  .hero-visual__orbit--two,
  .hero-visual__float,
  .hero-visual__sparkline i {
    animation: none;
  }
}
</style>
