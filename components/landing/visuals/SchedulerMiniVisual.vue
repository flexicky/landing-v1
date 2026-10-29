<template>
  <div class="mini-scheduler" aria-hidden="true">
    <div class="mini-scheduler__top"><span>Контент-план</span><b>Октябрь 2026 <i>⌄</i></b></div>
    <div class="mini-scheduler__week"><span>ПН</span><span>ВТ</span><span>СР</span><span>ЧТ</span><span>ПТ</span><span>СБ</span><span>ВС</span></div>
    <div class="mini-scheduler__grid">
      <span v-for="day in days" :key="day.date" class="mini-scheduler__day" :class="day.type">
        <b>{{ day.date }}</b>
        <i v-if="day.type.includes('has-post')" />
        <i v-if="day.type.includes('double')" />
      </span>
    </div>
    <div class="mini-scheduler__footer"><span class="mini-scheduler__scheduled"><i /> 12 публикаций в плане</span><span class="mini-scheduler__post-now">+ Запланировать</span></div>
  </div>
</template>

<script setup lang="ts">
const days = [
  { date: '28', type: 'muted' }, { date: '29', type: '' }, { date: '30', type: 'has-post' }, { date: '1', type: 'has-post double' }, { date: '2', type: '' }, { date: '3', type: 'has-post' }, { date: '4', type: '' },
  { date: '5', type: '' }, { date: '6', type: 'has-post' }, { date: '7', type: '' }, { date: '8', type: 'has-post double' }, { date: '9', type: '' }, { date: '10', type: '' }, { date: '11', type: 'has-post' },
  { date: '12', type: 'has-post' }, { date: '13', type: '' }, { date: '14', type: 'has-post double' }, { date: '15', type: '' }, { date: '16', type: 'has-post' }, { date: '17', type: '' }, { date: '18', type: '' },
]
</script>

<style scoped>
.mini-scheduler {
  min-height: 132px;
  padding: 12px 14px 11px;
  border: 1px solid #eee8f4;
  border-radius: 15px;
  background: #fff;
}

.mini-scheduler__top,
.mini-scheduler__week,
.mini-scheduler__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mini-scheduler__top > span {
  color: #51485f;
  font-size: 9px;
  font-weight: 800;
}

.mini-scheduler__top > b {
  color: #81788e;
  font-size: 7px;
}

.mini-scheduler__top > b i {
  margin-left: 4px;
  color: #a89bb9;
  font-style: normal;
}

.mini-scheduler__week {
  margin-top: 9px;
  color: #a9a1b2;
  font-size: 6px;
  font-weight: 800;
}

.mini-scheduler__grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  margin-top: 5px;
}

.mini-scheduler__day {
  position: relative;
  display: grid;
  height: 18px;
  place-items: center;
  border-radius: 5px;
  color: #776e83;
  font-size: 6px;
}

.mini-scheduler__day.muted {
  color: #c4bdcc;
}

.mini-scheduler__day.has-post {
  background: #f2ecff;
  color: #7858c7;
}

.mini-scheduler__day.has-post.double {
  background: #f0f8e0;
  color: #63833a;
}

.mini-scheduler__day i {
  position: absolute;
  bottom: 2px;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: currentColor;
}

.mini-scheduler__day i + i {
  left: calc(50% + 2px);
}

.mini-scheduler__footer {
  margin-top: 8px;
}

.mini-scheduler__scheduled {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #81788e;
  font-size: 6px;
}

.mini-scheduler__scheduled i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #9b76f6;
}

.mini-scheduler__post-now {
  color: #6b4ab8;
  font-size: 6px;
  font-weight: 800;
}
</style>
