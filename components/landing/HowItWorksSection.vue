<template>
  <section id="как-это-работает" class="workflow-section section-space">
    <div class="page-shell workflow-section__inner">
      <div class="workflow-section__content">
        <SectionIntro
          eyebrow="Без сложного старта"
          title="Порядок начинается с одного шага."
          description="Не нужно перестраивать всю работу за один день. Добавьте главное — и постепенно соберите своё пространство."
          tone="light"
        />
        <div class="workflow-section__note"><span>✳</span> Начните с малого. Остальное сложится.</div>
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
      <div class="workflow-section__deco" aria-hidden="true"><span>т.</span></div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    number: '01',
    title: 'Создайте пространство',
    description: 'Назовите команду или проект — и пригласите тех, с кем работаете.',
  },
  {
    number: '02',
    title: 'Соберите ближайшие задачи',
    description: 'Добавьте текущие дела, назначьте ответственных и укажите сроки.',
  },
  {
    number: '03',
    title: 'Двигайтесь в своём ритме',
    description: 'Следите за общим планом и отмечайте прогресс по мере движения.',
  },
]
</script>

<style scoped>
.workflow-section {
  padding-block: 102px;
}

.workflow-section__inner {
  position: relative;
  display: grid;
  min-height: 475px;
  grid-template-columns: 1fr 0.83fr;
  align-items: center;
  gap: clamp(60px, 10vw, 140px);
  overflow: hidden;
  padding: 65px clamp(38px, 7vw, 84px);
  border-radius: 30px;
  background:
    radial-gradient(circle at 10% 105%, rgba(218, 248, 121, 0.075), transparent 42%),
    linear-gradient(135deg, #26342a, #1c2820 75%);
  isolation: isolate;
}

.workflow-section__inner::before {
  position: absolute;
  z-index: -1;
  top: -275px;
  right: -200px;
  width: 600px;
  height: 600px;
  border: 1px solid rgba(230, 242, 219, 0.09);
  border-radius: 50%;
  box-shadow: 0 0 0 58px rgba(230, 242, 219, 0.025), 0 0 0 116px rgba(230, 242, 219, 0.02);
  content: '';
}

.workflow-section__content {
  position: relative;
  z-index: 1;
  align-self: center;
}

.workflow-section__content :deep(.section-intro) {
  max-width: 500px;
}

.workflow-section__content :deep(.section-intro h2) {
  font-size: clamp(38px, 4vw, 53px);
}

.workflow-section__note {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 38px;
  color: #c2ccc0;
  font-size: 11px;
}

.workflow-section__note span {
  color: var(--color-accent);
  font-size: 16px;
}

.workflow-section__steps {
  position: relative;
  z-index: 1;
  padding-top: 6px;
}

.workflow-section__deco {
  position: absolute;
  right: -13px;
  bottom: -95px;
  z-index: -1;
  display: grid;
  width: 240px;
  height: 240px;
  place-items: center;
  border: 1px solid rgba(223, 245, 210, 0.12);
  border-radius: 50%;
  color: rgba(220, 248, 190, 0.09);
  font-family: Manrope, 'DM Sans', sans-serif;
  font-size: 87px;
  font-weight: 800;
  letter-spacing: -0.1em;
  transform: rotate(-18deg);
}

@media (max-width: 900px) {
  .workflow-section__inner {
    grid-template-columns: 1fr 0.8fr;
    gap: 45px;
    padding-inline: 42px;
  }
}

@media (max-width: 760px) {
  .workflow-section {
    padding-block: 72px;
  }

  .workflow-section__inner {
    min-height: 0;
    grid-template-columns: 1fr;
    gap: 42px;
    padding: 42px 28px 33px;
    border-radius: 24px;
  }

  .workflow-section__content :deep(.section-intro h2) {
    font-size: 39px;
  }

  .workflow-section__note {
    margin-top: 23px;
  }

  .workflow-section__steps {
    padding-top: 0;
  }
}

@media (max-width: 480px) {
  .workflow-section__inner {
    padding-inline: 23px;
  }

  .workflow-section__content :deep(.section-intro h2) {
    font-size: 35px;
  }
}
</style>
