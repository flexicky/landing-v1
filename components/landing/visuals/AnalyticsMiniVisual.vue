<template>
  <div class="mini-analytics" aria-hidden="true">
    <div class="mini-analytics__header"><span>Охват каналов</span><b>+28,4% <i>↗</i></b></div>
    <div class="mini-analytics__graph">
      <div class="mini-analytics__bars"><i v-for="bar in bars" :key="bar" :style="{ height: `${bar}%` }" /></div>
      <svg viewBox="0 0 290 76" preserveAspectRatio="none" fill="none">
        <path class="mini-analytics__path" d="M2 59C21 57 20 45 40 48s20 12 37 3 24-27 42-20 20 13 38 7 24-23 41-18 23 17 39 12 22-20 39-18 24 9 52-7" />
        <circle cx="288" cy="7" r="4" />
      </svg>
    </div>
    <div class="mini-analytics__axis"><span>1 окт</span><span>7 окт</span><span>14 окт</span><span>21 окт</span><span>30 окт</span></div>
  </div>
</template>

<script setup lang="ts">
const bars = [28, 42, 34, 56, 48, 62, 44, 68, 54, 83, 72, 96]
</script>

<style scoped>
.mini-analytics {
  position: relative;
  min-height: 132px;
  overflow: hidden;
  padding: 14px 15px 10px;
  border: 1px solid rgba(155, 118, 246, 0.12);
  border-radius: 15px;
  background: linear-gradient(145deg, #fcfaff, #f5f0ff);
}

.mini-analytics__header,
.mini-analytics__axis {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mini-analytics__header > span {
  color: #625a70;
  font-size: 9px;
  font-weight: 700;
}

.mini-analytics__header b {
  color: #6f50c0;
  font-size: 8px;
}

.mini-analytics__header i {
  color: #80b847;
  font-style: normal;
}

.mini-analytics__graph {
  position: relative;
  height: 77px;
  margin-top: 6px;
  border-bottom: 1px solid #e8e1f2;
  background: repeating-linear-gradient(to bottom, transparent 0 24px, #ebe6f3 24px 25px);
}

.mini-analytics__bars {
  position: absolute;
  inset: 9px 0 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 5px;
}

.mini-analytics__bars i {
  width: 5.6%;
  border-radius: 4px 4px 0 0;
  background: linear-gradient(to top, rgba(167, 137, 236, 0.1), rgba(167, 137, 236, 0.35));
  animation: bar-rise 900ms cubic-bezier(0.2, 0.75, 0.25, 1) both;
}

.mini-analytics__bars i:nth-child(2n) { animation-delay: 90ms; }
.mini-analytics__bars i:nth-child(3n) { animation-delay: 160ms; }

.mini-analytics__graph svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.mini-analytics__path {
  stroke: #8c67ea;
  stroke-width: 2.6;
  stroke-linecap: round;
  stroke-dasharray: 450;
  stroke-dashoffset: 450;
  animation: draw-mini-chart 2s 180ms ease forwards;
}

.mini-analytics__graph circle {
  fill: var(--color-accent);
  stroke: #fff;
  stroke-width: 2;
}

.mini-analytics__axis {
  margin-top: 6px;
  color: #a29bad;
  font-size: 6px;
}

@keyframes draw-mini-chart {
  to { stroke-dashoffset: 0; }
}

@keyframes bar-rise {
  from { opacity: 0; transform: scaleY(0.1); transform-origin: bottom; }
  to { opacity: 1; transform: scaleY(1); transform-origin: bottom; }
}
</style>
