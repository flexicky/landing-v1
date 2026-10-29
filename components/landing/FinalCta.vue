<template>
  <section id="о-продукте" class="final-cta-section">
    <div class="page-shell">
      <div class="final-cta" :class="{ 'final-cta--signed-in': isAuthenticated }">
        <div class="final-cta__grain" aria-hidden="true" />
        <div class="final-cta__copy">
          <span class="final-cta__eyebrow"><i /> {{ isAuthenticated ? 'ТВОЙ MONST УЖЕ ГОТОВ' : 'СДЕЛАЙ SMM ПРОЩЕ' }}</span>
          <h2>{{ isAuthenticated ? 'Продолжим растить?' : 'Пусть Monst заберёт рутину.' }}</h2>
          <p v-if="isAuthenticated">С возвращением, {{ accountName }}. Загляни в кабинет — там ждут твои каналы и новые цифры.</p>
          <p v-else>Планируй контент, автоматизируй публикации и принимай решения по данным, а не наугад.</p>
          <div class="final-cta__pills"><span>АНАЛИТИКА</span><i /> <span>АВТОПОСТИНГ</span><i /> <span>MONST AI</span></div>
        </div>
        <div class="final-cta__action">
          <AppButton :to="isAuthenticated ? '/workspace' : '/register'" variant="dark" size="large">
            {{ isAuthenticated ? 'Открыть кабинет' : 'Попробовать Monst' }}
            <template #end><IconArrowUpRight class="final-cta__arrow" /></template>
          </AppButton>
          <span>{{ isAuthenticated ? 'Твой следующий пост уже ждёт' : 'Стартуй и собери свой SMM-пульт' }}</span>
        </div>
        <div class="final-cta__mascot-wrap" aria-hidden="true">
          <div class="final-cta__mascot-glow" />
          <img class="final-cta__mascot" src="/images/monst-mascot.png" alt="" width="1024" height="1024" loading="lazy" />
          <span class="final-cta__badge">✦ AI НА БОРТУ</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAuth } from '~/composables/useAuth'

const { user, isAuthenticated } = useAuth()
const accountName = computed(() => user.value?.name?.trim() || user.value?.email?.split('@')[0] || 'снова')
</script>

<style scoped>
.final-cta-section {
  padding-top: 12px;
  padding-bottom: 96px;
  background: var(--color-paper);
}

.final-cta {
  position: relative;
  display: flex;
  min-height: 340px;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  overflow: hidden;
  padding: 49px clamp(31px, 6vw, 72px);
  border: 1px solid #d5ed8e;
  border-radius: 30px;
  background:
    radial-gradient(circle at 82% 53%, rgba(255, 255, 255, 0.68), transparent 30%),
    linear-gradient(108deg, #e4f6bf, #d5f086 68%, #d3ff59);
  isolation: isolate;
}

.final-cta__copy,
.final-cta__action {
  position: relative;
  z-index: 3;
}

.final-cta__copy {
  max-width: 560px;
}

.final-cta__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #63743c;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 0.15em;
}

.final-cta__eyebrow i {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #7652bf;
  box-shadow: 0 0 0 4px rgba(118, 82, 191, 0.13);
}

.final-cta h2 {
  max-width: 565px;
  margin: 16px 0 0;
  color: #1c1725;
  font-family: Manrope, 'DM Sans', sans-serif;
  font-size: clamp(38px, 5vw, 59px);
  font-weight: 800;
  letter-spacing: -0.075em;
  line-height: 1.02;
}

.final-cta p {
  max-width: 430px;
  margin: 14px 0 0;
  color: #53643e;
  font-size: 12px;
  line-height: 1.7;
}

.final-cta__pills {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 19px;
  color: #55663f;
  font-size: 7px;
  font-weight: 900;
  letter-spacing: 0.1em;
}

.final-cta__pills i {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #7d62b0;
}

.final-cta__action {
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 11px;
  margin-top: 73px;
}

.final-cta__action span {
  padding-left: 7px;
  color: #586842;
  font-size: 9px;
}

.final-cta__arrow {
  width: 19px;
  height: 19px;
}

.final-cta__mascot-wrap {
  position: absolute;
  z-index: 1;
  top: -46px;
  right: 14%;
  width: 330px;
  height: 390px;
  pointer-events: none;
}

.final-cta__mascot-glow {
  position: absolute;
  inset: 18% 4% 0;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(133, 81, 216, 0.18), transparent 70%);
  filter: blur(12px);
  animation: glow-pulse 5s ease-in-out infinite;
}

.final-cta__mascot {
  position: absolute;
  top: -10%;
  left: -9%;
  width: 118%;
  height: 118%;
  object-fit: cover;
  mask-image: radial-gradient(circle at 50% 50%, #000 53%, transparent 77%);
  mix-blend-mode: multiply;
  animation: soft-float 7s ease-in-out infinite;
}

.final-cta__badge {
  position: absolute;
  top: 29%;
  right: -10%;
  padding: 8px 11px;
  border: 1px solid rgba(123, 90, 185, 0.19);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.76);
  color: #6348a1;
  font-size: 7px;
  font-weight: 900;
  letter-spacing: 0.1em;
  box-shadow: 0 10px 24px rgba(46, 35, 65, 0.09);
}

.final-cta__grain {
  position: absolute;
  z-index: -1;
  inset: 0;
  opacity: 0.18;
  background-image: radial-gradient(rgba(39, 33, 49, 0.22) 0.7px, transparent 0.7px);
  background-size: 5px 5px;
  mask-image: linear-gradient(90deg, transparent 25%, black);
}

.final-cta--signed-in .final-cta__mascot-wrap {
  right: 12%;
}

@media (max-width: 920px) {
  .final-cta__mascot-wrap {
    right: 4%;
    opacity: 0.84;
  }

  .final-cta__action {
    position: absolute;
    right: 36px;
    bottom: 45px;
  }

  .final-cta__copy { max-width: 65%; }
}

@media (max-width: 760px) {
  .final-cta-section { padding-bottom: 72px; }
  .final-cta {
    min-height: 490px;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
    padding: 35px 27px 31px;
    border-radius: 25px;
  }
  .final-cta__copy { max-width: 100%; }
  .final-cta h2 { max-width: 460px; font-size: clamp(38px, 10vw, 52px); }
  .final-cta__mascot-wrap { top: auto; right: -15px; bottom: -90px; width: 280px; height: 300px; opacity: 0.8; }
  .final-cta__action { position: relative; right: auto; bottom: auto; margin-top: 3px; }
  .final-cta__badge { top: 17%; right: 1%; }
}

@media (max-width: 480px) {
  .final-cta { min-height: 470px; padding-inline: 22px; }
  .final-cta h2 { font-size: 38px; }
  .final-cta__mascot-wrap { right: -52px; bottom: -95px; opacity: 0.66; }
}

@media (prefers-reduced-motion: reduce) {
  .final-cta__mascot,
  .final-cta__mascot-glow { animation: none; }
}
</style>
