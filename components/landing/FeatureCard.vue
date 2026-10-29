<template>
  <article class="feature-card" :class="`feature-card--${tone}`">
    <div class="feature-card__top">
      <span class="feature-card__icon"><component :is="icon" /></span>
      <span class="feature-card__index">{{ index }}<i /> MONST TOOL</span>
    </div>
    <div class="feature-card__visual"><slot name="visual" /></div>
    <div class="feature-card__copy">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
    <div class="feature-card__bottom"><span>{{ label }}</span><span class="feature-card__arrow">↗</span></div>
  </article>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  index: string
  title: string
  description: string
  icon: Component
  label: string
  tone: 'violet' | 'lime' | 'pink'
}>()
</script>

<style scoped>
.feature-card {
  position: relative;
  display: flex;
  min-height: 432px;
  flex-direction: column;
  padding: 22px;
  overflow: hidden;
  border: 1px solid #e8e3ed;
  border-radius: 22px;
  background: #fff;
  box-shadow: 0 12px 36px rgba(38, 28, 54, 0.035);
  transition: border-color 220ms ease, box-shadow 220ms ease, transform 220ms ease;
}

.feature-card:hover {
  transform: translateY(-7px);
  border-color: #d5c9ea;
  box-shadow: 0 22px 48px rgba(38, 28, 54, 0.1);
}

.feature-card::after {
  position: absolute;
  top: -86px;
  right: -75px;
  width: 190px;
  height: 190px;
  border: 1px solid rgba(144, 113, 205, 0.1);
  border-radius: 50%;
  box-shadow: 0 0 0 22px rgba(144, 113, 205, 0.025);
  content: '';
  pointer-events: none;
}

.feature-card--violet::after { border-color: rgba(151, 116, 234, 0.2); }
.feature-card--lime::after { border-color: rgba(128, 168, 61, 0.22); }
.feature-card--pink::after { border-color: rgba(221, 106, 177, 0.18); }

.feature-card__top {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.feature-card__icon {
  display: grid;
  width: 41px;
  height: 41px;
  place-items: center;
  border: 1px solid #eae5f0;
  border-radius: 13px;
  background: #faf8fd;
  color: #7e5bc9;
}

.feature-card--lime .feature-card__icon {
  border-color: #e3edcc;
  background: #f4f9e8;
  color: #6f913e;
}

.feature-card--pink .feature-card__icon {
  border-color: #f2deeb;
  background: #fff4fb;
  color: #bc5a97;
}

.feature-card__icon :deep(svg) {
  width: 21px;
  height: 21px;
}

.feature-card__index {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: #aaa2b3;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: 0.11em;
}

.feature-card__index:first-letter {
  color: #70647f;
}

.feature-card__index i {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-accent-strong);
}

.feature-card__visual {
  position: relative;
  z-index: 1;
  margin-top: 18px;
}

.feature-card__copy {
  position: relative;
  z-index: 1;
  margin-top: 19px;
}

.feature-card h3 {
  margin: 0;
  color: #282233;
  font-family: Manrope, 'DM Sans', sans-serif;
  font-size: 21px;
  font-weight: 800;
  letter-spacing: -0.055em;
}

.feature-card p {
  max-width: 330px;
  margin: 8px 0 0;
  color: #797283;
  font-size: 12px;
  line-height: 1.65;
}

.feature-card__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 18px;
  color: #8b8196;
  font-size: 8px;
  font-weight: 700;
}

.feature-card__arrow {
  display: grid;
  width: 25px;
  height: 25px;
  place-items: center;
  border: 1px solid #e9e4ee;
  border-radius: 50%;
  color: #6e54aa;
  font-size: 13px;
  transition: transform 180ms ease, background 180ms ease, color 180ms ease;
}

.feature-card:hover .feature-card__arrow {
  transform: rotate(45deg);
  border-color: #211a2d;
  background: #211a2d;
  color: white;
}

@media (max-width: 760px) {
  .feature-card {
    min-height: 400px;
    padding: 19px;
  }
}
</style>
