<template>
  <article class="workflow-step">
    <div class="workflow-step__number">{{ number }}</div>
    <div class="workflow-step__line" aria-hidden="true"><span /></div>
    <div class="workflow-step__copy">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{ number: string; title: string; description: string }>()
</script>

<style scoped>
.workflow-step {
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr);
  column-gap: 15px;
}

.workflow-step__number {
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border: 1px solid rgba(195, 166, 255, 0.32);
  border-radius: 12px;
  background: rgba(167, 127, 249, 0.1);
  color: #d9c7ff;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.04em;
}

.workflow-step__line {
  position: relative;
  grid-column: 1;
  width: 1px;
  min-height: 76px;
  justify-self: center;
  margin-block: 9px 0;
  background: rgba(227, 214, 247, 0.14);
}

.workflow-step__line span {
  position: absolute;
  top: 0;
  left: -2px;
  width: 5px;
  height: 21px;
  border-radius: 5px;
  background: linear-gradient(var(--color-accent), #ad8aff);
  box-shadow: 0 0 13px rgba(211, 255, 89, 0.24);
}

.workflow-step__copy {
  grid-column: 2;
  grid-row: 1 / span 2;
  padding: 3px 0 29px;
}

.workflow-step h3 {
  margin: 0;
  color: #f5f1fc;
  font-family: Manrope, 'DM Sans', sans-serif;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: -0.035em;
}

.workflow-step p {
  max-width: 350px;
  margin: 8px 0 0;
  color: #b1a9bd;
  font-size: 11px;
  line-height: 1.7;
}

.workflow-step:last-child .workflow-step__line {
  visibility: hidden;
}

@media (max-width: 760px) {
  .workflow-step__copy {
    padding-bottom: 23px;
  }
}
</style>
