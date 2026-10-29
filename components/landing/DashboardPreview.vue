<template>
  <div class="dashboard-visual" role="img" aria-label="Дашборд Monst Smm: статистика охватов, вовлечённости и запланированных публикаций">
    <div class="dashboard-visual__topbar">
      <div class="dashboard-visual__brand"><span>m.</span><b>monst <i>smm</i></b></div>
      <div class="dashboard-visual__workspace"><span class="dashboard-visual__workspace-dot" /> {{ userName }}</div>
      <span class="dashboard-visual__menu" aria-hidden="true">•••</span>
    </div>

    <div class="dashboard-visual__channels">
      <span class="dashboard-visual__channel dashboard-visual__channel--active"><b>VK</b> ВКонтакте</span>
      <span class="dashboard-visual__channel"><b>TG</b> Telegram</span>
      <span class="dashboard-visual__channel dashboard-visual__channel--short"><b>IG</b> Instagram</span>
      <span class="dashboard-visual__channel dashboard-visual__channel--all">+2</span>
      <span class="dashboard-visual__live"><i /> Все каналы активны</span>
    </div>

    <div class="dashboard-visual__heading">
      <div><span>АНАЛИТИКА / СВОДКА</span><h3>Результаты за 30 дней</h3></div>
      <span class="dashboard-visual__range">За месяц <b>⌄</b></span>
    </div>

    <div class="dashboard-visual__metrics">
      <article class="dashboard-metric dashboard-metric--reach">
        <span>Охват</span>
        <b>48,2 <small>тыс.</small></b>
        <i>↗ 28,4%</i>
      </article>
      <article class="dashboard-metric">
        <span>Вовлечённость</span>
        <b>8,6<small>%</small></b>
        <i>↗ 12,1%</i>
      </article>
      <article class="dashboard-metric dashboard-metric--posts">
        <span>Публикации</span>
        <b>36</b>
        <i>↗ 6 за неделю</i>
      </article>
    </div>

    <div class="dashboard-visual__chart-card">
      <div class="dashboard-visual__chart-heading">
        <div><b>Охват аудитории</b><span>Динамика по всем каналам</span></div>
        <span class="dashboard-visual__chart-growth">+28,4%</span>
      </div>
      <svg class="dashboard-chart" viewBox="0 0 460 116" fill="none" aria-hidden="true" preserveAspectRatio="none">
        <defs>
          <linearGradient id="monst-chart-fill" x1="230" y1="8" x2="230" y2="116" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9B76F6" stop-opacity=".28" />
            <stop offset="1" stop-color="#9B76F6" stop-opacity="0" />
          </linearGradient>
        </defs>
        <path class="dashboard-chart__grid" d="M0 22.5h460M0 56.5h460M0 90.5h460" />
        <path class="dashboard-chart__area" d="M0 86C19 79 23 69 41 73s25 16 42 9 26-33 43-27 23 18 40 13 26-32 43-26 24 27 42 18 22-23 40-14 24 18 42 11 24-26 42-20 23 18 41 12 26-23 42-31 20-5 42-12v109H0V86Z" fill="url(#monst-chart-fill)" />
        <path class="dashboard-chart__line" d="M0 86C19 79 23 69 41 73s25 16 42 9 26-33 43-27 23 18 40 13 26-32 43-26 24 27 42 18 22-23 40-14 24 18 42 11 24-26 42-20 23 18 41 12 26-23 42-31 20-5 42-12" stroke="#8E69EF" stroke-width="3" stroke-linecap="round" />
        <circle cx="413" cy="39" r="5" fill="#D3FF59" stroke="#fff" stroke-width="3" />
      </svg>
      <div class="dashboard-visual__chart-axis"><span>1 окт</span><span>7 окт</span><span>14 окт</span><span>21 окт</span><span>30 окт</span></div>
    </div>

    <div class="dashboard-visual__bottom">
      <div class="dashboard-visual__post">
        <span class="dashboard-visual__post-art"><i>✳</i><b>НОВЫЙ<br />ДРОП</b></span>
        <span class="dashboard-visual__post-copy"><small>СЛЕДУЮЩАЯ ПУБЛИКАЦИЯ</small><b>Подборка недели</b><span>Сегодня, 18:30 · VK</span></span>
        <span class="dashboard-visual__post-status"><i /> В плане</span>
      </div>
      <div class="dashboard-visual__ai"><span>✦</span><b>Monst AI</b><small>текст и идеи готовы</small><i>↗</i></div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ userName?: string }>(), { userName: 'Моя команда' })
</script>

<style scoped>
.dashboard-visual {
  position: relative;
  z-index: 4;
  width: min(100%, 525px);
  padding: 15px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.85);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 32px 90px rgba(9, 6, 19, 0.32), 0 3px 10px rgba(13, 8, 30, 0.08);
  transform: perspective(1100px) rotateY(-5deg) rotateX(1.5deg);
  transform-origin: center;
  backdrop-filter: blur(18px);
}

.dashboard-visual__topbar,
.dashboard-visual__brand,
.dashboard-visual__workspace,
.dashboard-visual__channels,
.dashboard-visual__channel,
.dashboard-visual__live,
.dashboard-visual__heading,
.dashboard-visual__chart-heading,
.dashboard-visual__chart-axis,
.dashboard-visual__bottom,
.dashboard-visual__post,
.dashboard-visual__post-copy,
.dashboard-visual__post-status,
.dashboard-visual__ai {
  display: flex;
  align-items: center;
}

.dashboard-visual__topbar {
  min-height: 30px;
  justify-content: space-between;
}

.dashboard-visual__brand {
  gap: 7px;
  color: #292237;
  font-size: 10px;
  letter-spacing: -0.04em;
}

.dashboard-visual__brand > span {
  display: grid;
  width: 23px;
  height: 23px;
  place-items: center;
  border-radius: 8px;
  background: #d3ff59;
  color: #251d33;
  font-size: 12px;
  font-weight: 900;
}

.dashboard-visual__brand b {
  font-weight: 900;
}

.dashboard-visual__brand i {
  color: #8d69e8;
  font-style: normal;
}

.dashboard-visual__workspace {
  gap: 6px;
  max-width: 140px;
  overflow: hidden;
  color: #766f81;
  font-size: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dashboard-visual__workspace-dot,
.dashboard-visual__live i,
.dashboard-visual__post-status i {
  width: 6px;
  height: 6px;
  flex: 0 0 6px;
  border-radius: 50%;
  background: #89c747;
  box-shadow: 0 0 0 3px rgba(137, 199, 71, 0.12);
}

.dashboard-visual__menu {
  padding: 3px 7px 7px;
  border: 0;
  border-radius: 7px;
  background: #f6f3fa;
  color: #928a9e;
  font-size: 10px;
  letter-spacing: 1px;
}

.dashboard-visual__channels {
  gap: 6px;
  min-height: 42px;
  margin-top: 8px;
  border-bottom: 1px solid #f0edf4;
}

.dashboard-visual__channel {
  gap: 5px;
  min-height: 27px;
  padding: 0 8px;
  border: 1px solid #ede9f2;
  border-radius: 8px;
  color: #777083;
  font-size: 7px;
  white-space: nowrap;
}

.dashboard-visual__channel b {
  color: #6f50be;
  font-size: 7px;
  font-weight: 900;
}

.dashboard-visual__channel--active {
  border-color: #d5c7f6;
  background: #f5f0ff;
  color: #55427d;
}

.dashboard-visual__channel--short {
  display: none;
}

.dashboard-visual__channel--all {
  display: grid;
  width: 27px;
  min-width: 27px;
  place-items: center;
  padding: 0;
  color: #766d86;
}

.dashboard-visual__live {
  gap: 7px;
  margin-left: auto;
  color: #92909a;
  font-size: 7px;
  white-space: nowrap;
}

.dashboard-visual__live i {
  width: 5px;
  height: 5px;
  flex-basis: 5px;
  box-shadow: 0 0 0 2px rgba(137, 199, 71, 0.12);
}

.dashboard-visual__heading {
  justify-content: space-between;
  gap: 10px;
  margin: 12px 0 10px;
}

.dashboard-visual__heading > div > span {
  color: #958d9e;
  font-size: 6px;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.dashboard-visual__heading h3 {
  margin: 4px 0 0;
  color: #282233;
  font-family: Manrope, 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: -0.05em;
}

.dashboard-visual__range {
  padding: 6px 8px;
  border: 1px solid #eeeaf3;
  border-radius: 7px;
  color: #746d7f;
  font-size: 7px;
  white-space: nowrap;
}

.dashboard-visual__range b {
  margin-left: 5px;
  font-size: 9px;
}

.dashboard-visual__metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
}

.dashboard-metric {
  display: grid;
  min-width: 0;
  padding: 9px 10px 8px;
  border: 1px solid #f0edf4;
  border-radius: 10px;
  background: #fbfaff;
}

.dashboard-metric--reach {
  border-color: #e4dafa;
  background: linear-gradient(135deg, #f8f4ff, #f1ebff);
}

.dashboard-metric > span {
  overflow: hidden;
  color: #857d91;
  font-size: 7px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dashboard-metric > b {
  margin-top: 4px;
  color: #282233;
  font-family: Manrope, 'DM Sans', sans-serif;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.07em;
  line-height: 1;
}

.dashboard-metric > b small {
  color: #7b7485;
  font-family: 'DM Sans', sans-serif;
  font-size: 7px;
  font-weight: 600;
  letter-spacing: 0;
}

.dashboard-metric > i {
  margin-top: 6px;
  color: #71a846;
  font-size: 6px;
  font-style: normal;
  font-weight: 800;
  white-space: nowrap;
}

.dashboard-visual__chart-card {
  margin-top: 9px;
  padding: 10px 10px 7px;
  border: 1px solid #f0edf4;
  border-radius: 11px;
  background: white;
}

.dashboard-visual__chart-heading {
  justify-content: space-between;
}

.dashboard-visual__chart-heading > div > b,
.dashboard-visual__chart-heading > div > span {
  display: block;
}

.dashboard-visual__chart-heading > div > b {
  color: #393245;
  font-size: 8px;
  font-weight: 800;
}

.dashboard-visual__chart-heading > div > span {
  margin-top: 3px;
  color: #9b94a2;
  font-size: 6px;
}

.dashboard-visual__chart-growth {
  padding: 5px 7px;
  border-radius: 6px;
  background: #f0f8e2;
  color: #658d37;
  font-size: 7px;
  font-weight: 800;
}

.dashboard-chart {
  width: 100%;
  height: 76px;
  margin-top: 4px;
  overflow: visible;
}

.dashboard-chart__grid {
  stroke: #f0edf4;
  stroke-width: 1;
}

.dashboard-chart__line {
  stroke-dasharray: 600;
  stroke-dashoffset: 600;
  animation: chart-line-draw 1.8s 0.3s cubic-bezier(0.6, 0, 0.25, 1) forwards;
}

.dashboard-chart__area {
  opacity: 0;
  animation: chart-area-in 800ms 1.3s ease forwards;
}

@keyframes chart-line-draw {
  to { stroke-dashoffset: 0; }
}

@keyframes chart-area-in {
  to { opacity: 1; }
}

.dashboard-visual__chart-axis {
  justify-content: space-between;
  margin-top: -3px;
  color: #aaa3b1;
  font-size: 6px;
}

.dashboard-visual__bottom {
  justify-content: space-between;
  gap: 8px;
  margin-top: 9px;
}

.dashboard-visual__post {
  min-width: 0;
  flex: 1;
  gap: 8px;
  padding: 7px;
  border: 1px solid #f0edf4;
  border-radius: 10px;
  background: #fcfbfe;
}

.dashboard-visual__post-art {
  display: grid;
  width: 36px;
  height: 36px;
  flex: 0 0 36px;
  place-content: center;
  border-radius: 7px;
  background: linear-gradient(135deg, #aa8aff, #6945c4);
  color: white;
  text-align: center;
}

.dashboard-visual__post-art i {
  font-size: 9px;
  font-style: normal;
  line-height: 1;
}

.dashboard-visual__post-art b {
  margin-top: 2px;
  font-size: 5px;
  letter-spacing: 0.1em;
  line-height: 1.1;
}

.dashboard-visual__post-copy {
  min-width: 0;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
}

.dashboard-visual__post-copy small {
  color: #a19aa9;
  font-size: 5px;
  font-weight: 800;
  letter-spacing: 0.07em;
}

.dashboard-visual__post-copy b {
  overflow: hidden;
  max-width: 100%;
  color: #484153;
  font-size: 7px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dashboard-visual__post-copy > span {
  color: #9992a1;
  font-size: 6px;
}

.dashboard-visual__post-status {
  gap: 5px;
  padding: 5px 6px;
  border-radius: 6px;
  background: #f0f8e3;
  color: #6c903f;
  font-size: 6px;
  white-space: nowrap;
}

.dashboard-visual__post-status i {
  width: 5px;
  height: 5px;
  flex-basis: 5px;
  box-shadow: none;
}

.dashboard-visual__ai {
  gap: 6px;
  padding: 9px;
  border: 1px solid #e8defd;
  border-radius: 10px;
  background: #f8f5ff;
  color: #7256b1;
  white-space: nowrap;
}

.dashboard-visual__ai > span {
  color: #9a76ee;
  font-size: 12px;
}

.dashboard-visual__ai b {
  font-size: 7px;
}

.dashboard-visual__ai small {
  color: #8b829a;
  font-size: 6px;
}

.dashboard-visual__ai > i {
  margin-left: auto;
  font-size: 8px;
  font-style: normal;
}

@media (max-width: 560px) {
  .dashboard-visual {
    padding: 11px;
    border-radius: 18px;
    transform: none;
  }

  .dashboard-visual__channel--short,
  .dashboard-visual__live,
  .dashboard-visual__ai small {
    display: none;
  }

  .dashboard-visual__channels {
    gap: 4px;
  }

  .dashboard-visual__channel {
    padding-inline: 6px;
  }

  .dashboard-visual__metrics {
    gap: 5px;
  }

  .dashboard-metric {
    padding: 8px 7px;
  }

  .dashboard-metric > b {
    font-size: 16px;
  }

  .dashboard-visual__post-status {
    display: none;
  }
}
</style>
