<template>
  <section id="возможности" class="benefits-section">
    <div class="page-shell">
      <div class="benefits-section__heading">
        <SectionIntro
          eyebrow="SMM без хаоса"
          title="Три инструмента. Один монструозный результат."
          description="Monst Smm собирает аналитику, автопостинг и нейросети в одном кабинете — чтобы у тебя оставалось больше времени на рост бренда."
        />
        <p class="benefits-section__aside"><span>01—03</span><br />Твой новый набор<br />для роста в соцсетях</p>
      </div>

      <div class="benefits-grid">
        <RevealOnScroll :delay="40">
          <FeatureCard
            index="01"
            title="Аналитика без гадания"
            description="Охваты, вовлечённость и динамика каналов в одном понятном дашборде. Сразу видно, что цепляет аудиторию."
            label="Смотри на цифры яснее"
            tone="violet"
            :icon="IconChart"
          >
            <template #visual><AnalyticsMiniVisual /></template>
          </FeatureCard>
        </RevealOnScroll>

        <RevealOnScroll :delay="150">
          <FeatureCard
            index="02"
            title="Автопостинг по плану"
            description="Собери контент-календарь заранее — Monst опубликует посты вовремя, пока ты занят важным."
            label="Публикуй без рутины"
            tone="lime"
            :icon="IconCalendar"
          >
            <template #visual><SchedulerMiniVisual /></template>
          </FeatureCard>
        </RevealOnScroll>

        <RevealOnScroll :delay="260">
          <FeatureCard
            index="03"
            title="Нейросети в команде"
            description="Накидывай идеи, превращай их в тексты и быстро собирай новые варианты контента с Monst AI."
            label="Создавай быстрее"
            tone="pink"
            :icon="IconSpark"
          >
            <template #visual><AiMiniVisual /></template>
          </FeatureCard>
        </RevealOnScroll>
      </div>

      <div class="benefits-section__note"><span>✳</span> Анализируй. Планируй. Публикуй. Повторяй.</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import IconCalendar from '~/components/icons/IconCalendar.vue'
import IconChart from '~/components/icons/IconChart.vue'
import IconSpark from '~/components/icons/IconSpark.vue'
</script>

<style scoped>
.benefits-section {
  position: relative;
  padding-top: 104px;
  padding-bottom: 118px;
  overflow: hidden;
  background:
    radial-gradient(circle at 6% 30%, rgba(155, 118, 246, 0.07), transparent 28%),
    var(--color-paper);
}

.benefits-section::before {
  position: absolute;
  top: 115px;
  right: -110px;
  width: 240px;
  height: 240px;
  border: 1px solid rgba(155, 118, 246, 0.13);
  border-radius: 50%;
  box-shadow: 0 0 0 24px rgba(155, 118, 246, 0.025), 0 0 0 48px rgba(155, 118, 246, 0.02);
  content: '';
  pointer-events: none;
}

.benefits-section__heading {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 44px;
}

.benefits-section__heading :deep(.section-intro) {
  max-width: 720px;
}

.benefits-section__heading :deep(.section-intro h2) {
  max-width: 720px;
  font-size: clamp(38px, 5vw, 62px);
}

.benefits-section__heading :deep(.section-intro p) {
  max-width: 620px;
}

.benefits-section__aside {
  flex: 0 0 auto;
  margin: 0 2px 5px 0;
  color: #8b8396;
  font-size: 11px;
  line-height: 1.7;
  text-align: right;
}

.benefits-section__aside span {
  color: #7958c8;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.12em;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
  gap: 16px;
  margin-top: 42px;
}

.benefits-section__note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  margin-top: 31px;
  color: #7c7489;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.benefits-section__note span {
  color: #8f6ddd;
  font-size: 15px;
}

@media (max-width: 900px) {
  .benefits-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .benefits-grid :deep(.reveal-on-scroll:last-child) {
    grid-column: 1 / -1;
  }
}

@media (max-width: 760px) {
  .benefits-section {
    padding-top: 76px;
    padding-bottom: 82px;
  }

  .benefits-section__heading {
    display: block;
  }

  .benefits-section__aside {
    display: none;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 30px;
  }

  .benefits-grid :deep(.reveal-on-scroll:last-child) {
    grid-column: auto;
  }
}
</style>
