<template>
  <section id="как-это-работает" class="workflow-section">
    <div class="page-shell workflow-section__inner">
      <div class="workflow-section__intro">
        <SectionIntro
          eyebrow="ПОНЯТНЫЙ ПЛАН — СИЛЬНЫЙ SMM"
          title="От идеи до публикации — без лишних движений."
          description="Monst собирает работу в понятный ритм: придумал, подготовил, поставил в очередь — и следишь за результатом."
          tone="light"
        />
        <div class="workflow-section__status-card">
          <span class="workflow-section__status-icon">✦</span>
          <span class="workflow-section__status-copy"><b>Monst AI уже в деле</b><small>Подготовил 3 идеи для следующего поста</small></span>
          <span class="workflow-section__status-pulse" />
        </div>
        <div class="workflow-section__note"><span>✳</span> Больше стратегии. Меньше рутины.</div>
      </div>

      <div class="workflow-section__steps">
        <WorkflowStep
          v-for="step in steps"
          :key="step.number"
          :number="step.number"
          :title="step.title"
          :description="step.description"
        />
      </div>

      <div class="workflow-section__orbit workflow-section__orbit--one" aria-hidden="true" />
      <div class="workflow-section__orbit workflow-section__orbit--two" aria-hidden="true" />
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    number: '01',
    title: 'Подключи площадки',
    description: 'Собери свои каналы и бренд в одном рабочем пространстве.',
  },
  {
    number: '02',
    title: 'Создай и запланируй',
    description: 'Подготовь контент сам или с Monst AI — выбери время публикации.',
  },
  {
    number: '03',
    title: 'Смотри, что работает',
    description: 'Отслеживай охваты и вовлечённость, чтобы усиливать удачные идеи.',
  },
]
</script>

<style scoped>
.workflow-section {
  padding-block: 96px;
}

.workflow-section__inner {
  position: relative;
  display: grid;
  min-height: 510px;
  grid-template-columns: 1.03fr 0.88fr;
  align-items: center;
  gap: clamp(48px, 8vw, 105px);
  overflow: hidden;
  padding: clamp(42px, 6vw, 72px);
  border: 1px solid rgba(181, 151, 240, 0.22);
  border-radius: 32px;
  background:
    radial-gradient(ellipse at 11% 105%, rgba(158, 123, 249, 0.24), transparent 40%),
    radial-gradient(ellipse at 100% 0%, rgba(211, 255, 89, 0.09), transparent 35%),
    linear-gradient(140deg, #231a31, #17131f 65%);
  box-shadow: 0 30px 75px rgba(35, 22, 52, 0.13);
  isolation: isolate;
}

.workflow-section__inner::before {
  position: absolute;
  z-index: -1;
  inset: 0;
  background-image: linear-gradient(rgba(233, 221, 255, 0.026) 1px, transparent 1px), linear-gradient(90deg, rgba(233, 221, 255, 0.026) 1px, transparent 1px);
  background-size: 40px 40px;
  content: '';
  mask-image: linear-gradient(90deg, black, transparent 90%);
}

.workflow-section__intro,
.workflow-section__steps {
  position: relative;
  z-index: 1;
}

.workflow-section__intro :deep(.section-intro) {
  max-width: 540px;
}

.workflow-section__intro :deep(.section-intro h2) {
  font-size: clamp(38px, 4.4vw, 56px);
}

.workflow-section__intro :deep(.section-intro p) {
  max-width: 430px;
}

.workflow-section__status-card {
  display: flex;
  width: min(100%, 380px);
  align-items: center;
  gap: 11px;
  margin-top: 31px;
  padding: 12px 14px;
  border: 1px solid rgba(241, 233, 255, 0.14);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.07);
  box-shadow: 0 12px 34px rgba(8, 5, 16, 0.12);
  backdrop-filter: blur(12px);
  animation: status-card-float 5s ease-in-out infinite;
}

.workflow-section__status-icon {
  display: grid;
  width: 33px;
  height: 33px;
  flex: 0 0 33px;
  place-items: center;
  border-radius: 10px;
  background: #d3ff59;
  color: #392c4e;
  font-size: 18px;
}

.workflow-section__status-copy {
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  gap: 4px;
}

.workflow-section__status-copy b {
  overflow: hidden;
  color: #f4f0fa;
  font-size: 9px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.workflow-section__status-copy small {
  overflow: hidden;
  color: #aaa1b8;
  font-size: 7px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.workflow-section__status-pulse {
  width: 7px;
  height: 7px;
  flex: 0 0 7px;
  border-radius: 50%;
  background: var(--color-accent);
  box-shadow: 0 0 0 5px rgba(211, 255, 89, 0.11);
  animation: glow-pulse 2.2s ease-in-out infinite;
}

.workflow-section__note {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 25px;
  color: #aaa1b8;
  font-size: 10px;
}

.workflow-section__note span {
  color: var(--color-accent);
  font-size: 15px;
}

.workflow-section__steps {
  padding-top: 8px;
}

.workflow-section__orbit {
  position: absolute;
  z-index: -1;
  border: 1px solid rgba(210, 190, 255, 0.1);
  border-radius: 50%;
  pointer-events: none;
}

.workflow-section__orbit--one {
  top: -210px;
  right: -165px;
  width: 480px;
  height: 480px;
  box-shadow: 0 0 0 55px rgba(210, 190, 255, 0.025), 0 0 0 110px rgba(210, 190, 255, 0.02);
}

.workflow-section__orbit--two {
  right: 31%;
  bottom: -310px;
  width: 390px;
  height: 390px;
  border-color: rgba(211, 255, 89, 0.13);
  animation: orbit-breathe 7s ease-in-out infinite;
}

@keyframes orbit-breathe {
  50% { transform: scale(1.08); opacity: 0.45; }
}

@keyframes status-card-float {
  50% { transform: translateY(-4px); }
}

@media (max-width: 900px) {
  .workflow-section__inner {
    grid-template-columns: minmax(0, 1fr) minmax(0, 0.85fr);
    gap: 38px;
    padding-inline: 40px;
  }
}

@media (max-width: 760px) {
  .workflow-section {
    padding-block: 72px;
  }

  .workflow-section__inner {
    min-height: 0;
    grid-template-columns: 1fr;
    gap: 37px;
    padding: 38px 27px 31px;
    border-radius: 25px;
  }

  .workflow-section__intro :deep(.section-intro h2) {
    font-size: 39px;
  }

  .workflow-section__status-card {
    margin-top: 22px;
  }
}

@media (max-width: 480px) {
  .workflow-section__inner {
    padding-inline: 22px;
  }

  .workflow-section__intro :deep(.section-intro h2) {
    font-size: 35px;
  }
}
</style>
