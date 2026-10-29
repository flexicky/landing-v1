<template>
  <article class="feature-card">
    <div class="feature-card__top">
      <span class="feature-card__icon"><component :is="icon" /></span>
      <span class="feature-card__index">{{ index }}</span>
    </div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <span class="feature-card__line" />
  </article>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  index: string
  title: string
  description: string
  icon: Component
}>()
</script>

<style scoped>
.feature-card {
  position: relative;
  display: flex;
  min-height: 252px;
  flex-direction: column;
  padding: 27px 27px 23px;
  overflow: hidden;
  border: 1px solid #e8ebe4;
  border-radius: 21px;
  background: #fff;
  transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  border-color: #d7e4c5;
  box-shadow: 0 18px 44px rgba(35, 51, 37, 0.075);
}

.feature-card__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.feature-card__icon {
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  border: 1px solid #e9eee2;
  border-radius: 15px;
  background: #f6f9f1;
  color: #718e4a;
}

.feature-card__icon :deep(svg) {
  width: 23px;
  height: 23px;
}

.feature-card__index {
  color: #b0b9af;
  font-family: Manrope, 'DM Sans', sans-serif;
  font-size: 12px;
  font-weight: 700;
}

.feature-card h3 {
  margin: 26px 0 0;
  color: #2b372e;
  font-family: Manrope, 'DM Sans', sans-serif;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.04em;
}

.feature-card p {
  max-width: 310px;
  margin: 9px 0 0;
  color: #7d877e;
  font-size: 13px;
  line-height: 1.7;
}

.feature-card__line {
  width: 37px;
  height: 3px;
  margin-top: auto;
  padding-top: 20px;
  border-bottom: 2px solid #d8efb0;
}

@media (max-width: 760px) {
  .feature-card {
    min-height: 225px;
    padding: 22px;
  }

  .feature-card h3 {
    margin-top: 21px;
  }
}
</style>
