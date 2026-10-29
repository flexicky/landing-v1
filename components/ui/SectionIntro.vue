<template>
  <div class="section-intro" :class="{ 'section-intro--center': align === 'center', 'section-intro--light': tone === 'light' }">
    <span v-if="eyebrow" class="eyebrow">
      <span class="eyebrow-dot" />
      {{ eyebrow }}
    </span>
    <h2>{{ title }}</h2>
    <p v-if="description">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
}>(), {
  align: 'left',
  tone: 'dark',
})
</script>

<style scoped>
.section-intro {
  max-width: 660px;
}

.section-intro h2 {
  margin: 17px 0 0;
  font-family: Manrope, 'DM Sans', sans-serif;
  font-size: clamp(34px, 4.5vw, 56px);
  font-weight: 700;
  letter-spacing: -0.065em;
  line-height: 1.08;
}

.section-intro p {
  max-width: 540px;
  margin: 18px 0 0;
  color: var(--color-muted);
  font-size: 16px;
  line-height: 1.75;
}

.section-intro--center {
  margin-inline: auto;
  text-align: center;
}

.section-intro--center p {
  margin-inline: auto;
}

.section-intro--light h2 {
  color: white;
}

.section-intro--light p {
  color: #b8c1ba;
}

.section-intro--light .eyebrow {
  color: #c7d0c8;
}

@media (max-width: 760px) {
  .section-intro h2 {
    margin-top: 14px;
  }

  .section-intro p {
    margin-top: 14px;
    font-size: 15px;
  }
}
</style>
