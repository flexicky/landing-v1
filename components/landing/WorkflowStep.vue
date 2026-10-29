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
  grid-template-columns: 35px minmax(0, 1fr);
  column-gap: 16px;
}

.workflow-step__number {
  display: grid;
  width: 35px;
  height: 35px;
  place-items: center;
  border: 1px solid rgba(217, 248, 121, 0.32);
  border-radius: 11px;
  color: var(--color-accent);
  font-size: 10px;
  font-weight: 800;
}

.workflow-step__line {
  position: relative;
  grid-column: 1;
  min-height: 80px;
  justify-self: center;
  width: 1px;
  margin-block: 10px 4px;
  background: rgba(220, 238, 215, 0.14);
}

.workflow-step__line span {
  position: absolute;
  top: 0;
  left: -2px;
  width: 5px;
  height: 20px;
  border-radius: 5px;
  background: rgba(217, 248, 121, 0.6);
}

.workflow-step__copy {
  grid-column: 2;
  grid-row: 1 / span 2;
  padding: 4px 0 30px;
}

.workflow-step h3 {
  margin: 0;
  color: #f2f5f0;
  font-family: Manrope, 'DM Sans', sans-serif;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.035em;
}

.workflow-step p {
  max-width: 360px;
  margin: 9px 0 0;
  color: #aab5ab;
  font-size: 12px;
  line-height: 1.75;
}

.workflow-step:last-child .workflow-step__line {
  visibility: hidden;
}

@media (max-width: 760px) {
  .workflow-step__copy {
    padding-bottom: 24px;
  }
}
</style>
