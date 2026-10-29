<template>
  <div class="dashboard-visual" aria-label="Предпросмотр рабочего пространства Точка">
    <div class="dashboard-glow" aria-hidden="true" />
    <div class="dashboard-window">
      <div class="dashboard-window__topbar">
        <div class="dashboard-window__brand">
          <span class="dashboard-window__brand-mark">т.</span>
          <span>точка</span>
        </div>
        <div class="dashboard-window__top-links"><span>Рабочее пространство</span><span>Моя неделя</span></div>
        <div class="dashboard-window__user"><span class="dashboard-window__avatar">А</span><span class="dashboard-window__user-name">Аня</span><span class="dashboard-window__chevron">⌄</span></div>
      </div>

      <div class="dashboard-window__body">
        <aside class="dashboard-sidebar" aria-hidden="true">
          <div class="dashboard-sidebar__workspace"><span class="dashboard-sidebar__workspace-icon">F</span><span><b>Команда формы</b><small>Рабочая область</small></span><span class="dashboard-sidebar__chevron">⌄</span></div>
          <div class="dashboard-sidebar__label">РАБОТА</div>
          <div class="dashboard-sidebar__item dashboard-sidebar__item--active"><span class="dashboard-sidebar__symbol">▦</span>Обзор</div>
          <div class="dashboard-sidebar__item"><span class="dashboard-sidebar__symbol">◇</span>Мои задачи<span class="dashboard-sidebar__count">4</span></div>
          <div class="dashboard-sidebar__item"><span class="dashboard-sidebar__symbol">▤</span>Проекты</div>
          <div class="dashboard-sidebar__label dashboard-sidebar__label--space">КОМАНДА</div>
          <div class="dashboard-sidebar__item"><span class="dashboard-sidebar__symbol">◎</span>Календарь</div>
          <div class="dashboard-sidebar__item"><span class="dashboard-sidebar__symbol">◉</span>Обсуждения</div>
          <div class="dashboard-sidebar__invite"><span>＋</span>Пригласить команду</div>
        </aside>

        <div class="dashboard-main">
          <div class="dashboard-main__greeting">
            <div>
              <span class="dashboard-main__date">ПОНЕДЕЛЬНИК, 21 ОКТЯБРЯ</span>
              <h2>Хорошего дня, Аня <span>✳</span></h2>
            </div>
            <div class="dashboard-main__toolbar"><span>⌕</span><span>♧</span><span class="dashboard-main__toolbar-avatar">М</span></div>
          </div>

          <div class="dashboard-summary">
            <div class="dashboard-summary__card dashboard-summary__card--focus">
              <span class="dashboard-summary__label">МОЙ ФОКУС</span>
              <strong>4 <small>задачи</small></strong>
              <span class="dashboard-summary__meta"><i /> Всё важное на виду</span>
            </div>
            <div class="dashboard-summary__card">
              <span class="dashboard-summary__label">НА ЭТОЙ НЕДЕЛЕ</span>
              <strong>12 <small>дел</small></strong>
              <span class="dashboard-summary__meta">3 уже завершены</span>
            </div>
            <div class="dashboard-summary__card dashboard-summary__card--progress">
              <span class="dashboard-summary__label">РИТМ КОМАНДЫ</span>
              <div class="dashboard-bars" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
              <span class="dashboard-summary__meta">Неделя идёт по плану</span>
            </div>
          </div>

          <div class="dashboard-board">
            <div class="dashboard-board__heading"><div><h3>В работе</h3><span>Задачи, к которым можно приступить</span></div><span class="dashboard-board__filter">На этой неделе <b>⌄</b></span></div>
            <div class="dashboard-task">
              <span class="dashboard-task__check dashboard-task__check--done">✓</span>
              <span class="dashboard-task__text"><b>Собрать обратную связь</b><small>Исследование продукта</small></span>
              <span class="dashboard-task__avatar dashboard-task__avatar--rose">Л</span>
              <span class="dashboard-task__date dashboard-task__date--done">Сегодня</span>
            </div>
            <div class="dashboard-task">
              <span class="dashboard-task__check" />
              <span class="dashboard-task__text"><b>Обновить презентацию</b><small>Запуск осенней кампании</small></span>
              <span class="dashboard-task__avatar dashboard-task__avatar--blue">М</span>
              <span class="dashboard-task__date">Завтра</span>
            </div>
            <div class="dashboard-task dashboard-task--last">
              <span class="dashboard-task__check" />
              <span class="dashboard-task__text"><b>Сверить план с командой</b><small>Еженедельный ритм</small></span>
              <span class="dashboard-task__avatar dashboard-task__avatar--sand">А</span>
              <span class="dashboard-task__date">Чт, 24 окт.</span>
            </div>
            <div class="dashboard-board__add"><span>＋</span> Добавить задачу</div>
          </div>
        </div>
      </div>
    </div>

    <div class="dashboard-note dashboard-note--focus" aria-hidden="true"><span class="dashboard-note__icon">✳</span><span><b>Фокус на главном</b><small>План уже собран</small></span></div>
    <div class="dashboard-note dashboard-note--team" aria-hidden="true"><span class="dashboard-note__avatars"><i>М</i><i>А</i><i>Л</i></span><span><b>Команда в контексте</b><small>Все видят следующий шаг</small></span></div>
  </div>
</template>

<style scoped>
.dashboard-visual {
  position: relative;
  min-width: 0;
  padding: 18px 0 28px 28px;
  isolation: isolate;
}

.dashboard-glow {
  position: absolute;
  z-index: -1;
  top: 3%;
  right: -8%;
  bottom: 0;
  left: 7%;
  border-radius: 48%;
  background: radial-gradient(ellipse at 45% 40%, rgba(204, 236, 137, 0.51), rgba(214, 241, 185, 0.12) 46%, transparent 72%);
  filter: blur(20px);
}

.dashboard-window {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(36, 53, 39, 0.12);
  border-radius: 17px;
  background: white;
  box-shadow: 0 36px 90px rgba(35, 51, 37, 0.14), 0 8px 22px rgba(35, 51, 37, 0.06);
  transform: perspective(1600px) rotateY(-4deg) rotateX(1deg);
  transform-origin: 50% 50%;
}

.dashboard-window__topbar {
  display: flex;
  height: 47px;
  align-items: center;
  justify-content: space-between;
  padding-inline: 15px;
  border-bottom: 1px solid #eef0eb;
  background: #fff;
}

.dashboard-window__brand,
.dashboard-window__user,
.dashboard-window__top-links {
  display: flex;
  align-items: center;
}

.dashboard-window__brand {
  gap: 6px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: -0.05em;
}

.dashboard-window__brand-mark {
  display: grid;
  width: 18px;
  height: 18px;
  place-items: center;
  border-radius: 6px;
  background: var(--color-accent);
  font-size: 11px;
}

.dashboard-window__top-links {
  gap: 19px;
  color: #7e887f;
  font-size: 8px;
}

.dashboard-window__top-links span:first-child {
  color: #313d34;
  font-weight: 700;
}

.dashboard-window__user {
  gap: 6px;
  color: #59655b;
  font-size: 8px;
  font-weight: 600;
}

.dashboard-window__avatar,
.dashboard-main__toolbar-avatar {
  display: grid;
  width: 20px;
  height: 20px;
  place-items: center;
  border-radius: 50%;
  background: #f4d2c5;
  color: #7d5545;
  font-size: 8px;
  font-weight: 800;
}

.dashboard-window__chevron {
  color: #9aa49b;
  font-size: 11px;
}

.dashboard-window__body {
  display: grid;
  min-height: 388px;
  grid-template-columns: 155px minmax(0, 1fr);
}

.dashboard-sidebar {
  display: flex;
  flex-direction: column;
  padding: 15px 9px 10px;
  border-right: 1px solid #eff1ec;
  background: #fbfcfa;
  color: #69736b;
  font-size: 8px;
}

.dashboard-sidebar__workspace {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 5px 6px 15px;
  color: #334038;
}

.dashboard-sidebar__workspace-icon {
  display: grid;
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
  place-items: center;
  border-radius: 7px;
  background: #e6edda;
  color: #586b43;
  font-size: 11px;
  font-weight: 800;
}

.dashboard-sidebar__workspace b,
.dashboard-sidebar__workspace small {
  display: block;
  white-space: nowrap;
}

.dashboard-sidebar__workspace b {
  font-size: 8px;
}

.dashboard-sidebar__workspace small {
  margin-top: 3px;
  color: #9aa39b;
  font-size: 7px;
}

.dashboard-sidebar__chevron {
  margin-left: auto;
  color: #9aa39b;
}

.dashboard-sidebar__label {
  padding: 8px 7px 6px;
  color: #a0a8a0;
  font-size: 6px;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.dashboard-sidebar__label--space {
  margin-top: 13px;
}

.dashboard-sidebar__item {
  display: flex;
  height: 29px;
  align-items: center;
  gap: 8px;
  padding-inline: 7px;
  border-radius: 6px;
  color: #748076;
  white-space: nowrap;
}

.dashboard-sidebar__item--active {
  background: #eff4e8;
  color: #43563c;
  font-weight: 700;
}

.dashboard-sidebar__symbol {
  width: 12px;
  color: #89948a;
  font-size: 10px;
  text-align: center;
}

.dashboard-sidebar__item--active .dashboard-sidebar__symbol {
  color: #6f913b;
}

.dashboard-sidebar__count {
  display: grid;
  width: 15px;
  height: 15px;
  place-items: center;
  margin-left: auto;
  border-radius: 4px;
  background: #e6ebdf;
  color: #607548;
  font-size: 7px;
}

.dashboard-sidebar__invite {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-top: auto;
  padding: 10px 7px 3px;
  border-top: 1px solid #eef0eb;
  color: #808a81;
  font-size: 7px;
}

.dashboard-sidebar__invite span {
  font-size: 12px;
}

.dashboard-main {
  min-width: 0;
  padding: 21px 21px 14px;
}

.dashboard-main__greeting {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.dashboard-main__date {
  color: #a0a8a0;
  font-size: 6px;
  font-weight: 800;
  letter-spacing: 0.11em;
}

.dashboard-main__greeting h2 {
  margin: 7px 0 0;
  color: #2d3930;
  font-family: Manrope, 'DM Sans', sans-serif;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.055em;
}

.dashboard-main__greeting h2 span {
  color: #99c948;
  font-size: 12px;
}

.dashboard-main__toolbar {
  display: flex;
  align-items: center;
  gap: 11px;
  color: #919b92;
  font-size: 11px;
}

.dashboard-main__toolbar-avatar {
  width: 19px;
  height: 19px;
  font-size: 7px;
}

.dashboard-summary {
  display: grid;
  grid-template-columns: 1fr 1fr 1.15fr;
  gap: 8px;
  margin-top: 18px;
}

.dashboard-summary__card {
  min-width: 0;
  padding: 10px 11px 9px;
  border: 1px solid #edf0e9;
  border-radius: 9px;
  background: #fff;
}

.dashboard-summary__card--focus {
  border-color: #e0ebcc;
  background: #f8fbf2;
}

.dashboard-summary__label {
  display: block;
  overflow: hidden;
  color: #949e94;
  font-size: 5.5px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dashboard-summary__card strong {
  display: block;
  margin-top: 5px;
  color: #344037;
  font-family: Manrope, 'DM Sans', sans-serif;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.06em;
}

.dashboard-summary__card strong small {
  color: #7b867d;
  font-family: 'DM Sans', sans-serif;
  font-size: 7px;
  font-weight: 600;
  letter-spacing: 0;
}

.dashboard-summary__meta {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
  color: #939d94;
  font-size: 6px;
  white-space: nowrap;
}

.dashboard-summary__meta i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #91c347;
}

.dashboard-summary__card--progress {
  padding-bottom: 7px;
}

.dashboard-bars {
  display: flex;
  height: 23px;
  align-items: flex-end;
  gap: 3px;
  margin-top: 2px;
}

.dashboard-bars i {
  width: 7%;
  border-radius: 2px 2px 0 0;
  background: #ddecce;
}

.dashboard-bars i:nth-child(1) { height: 29%; }
.dashboard-bars i:nth-child(2) { height: 42%; }
.dashboard-bars i:nth-child(3) { height: 36%; }
.dashboard-bars i:nth-child(4) { height: 58%; }
.dashboard-bars i:nth-child(5) { height: 49%; }
.dashboard-bars i:nth-child(6) { height: 70%; }
.dashboard-bars i:nth-child(7) { height: 55%; }
.dashboard-bars i:nth-child(8) { height: 76%; }
.dashboard-bars i:nth-child(9) { height: 63%; }
.dashboard-bars i:nth-child(10) { height: 85%; background: #a9d66e; }
.dashboard-bars i:nth-child(11) { height: 72%; }
.dashboard-bars i:nth-child(12) { height: 100%; background: #a9d66e; }

.dashboard-board {
  margin-top: 19px;
  padding: 14px 12px 10px;
  border: 1px solid #edf0e9;
  border-radius: 10px;
}

.dashboard-board__heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 10px;
}

.dashboard-board__heading h3 {
  margin: 0;
  color: #39453c;
  font-size: 9px;
  font-weight: 800;
}

.dashboard-board__heading > div > span {
  display: block;
  margin-top: 4px;
  color: #9ca59d;
  font-size: 6px;
}

.dashboard-board__filter {
  padding: 5px 7px;
  border: 1px solid #e8ece5;
  border-radius: 5px;
  color: #778178;
  font-size: 6px;
  white-space: nowrap;
}

.dashboard-board__filter b {
  margin-left: 5px;
  font-size: 8px;
}

.dashboard-task {
  display: flex;
  min-height: 43px;
  align-items: center;
  gap: 7px;
  border-top: 1px solid #f0f2ee;
}

.dashboard-task__check {
  display: grid;
  width: 11px;
  height: 11px;
  flex: 0 0 11px;
  place-items: center;
  border: 1px solid #cdd5ca;
  border-radius: 50%;
  color: white;
  font-size: 7px;
}

.dashboard-task__check--done {
  border-color: #a8cf71;
  background: #a8cf71;
}

.dashboard-task__text {
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  gap: 4px;
}

.dashboard-task__text b {
  overflow: hidden;
  color: #4a554c;
  font-size: 7px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dashboard-task__text small {
  overflow: hidden;
  color: #a0a9a0;
  font-size: 6px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dashboard-task__avatar {
  display: grid;
  width: 16px;
  height: 16px;
  flex: 0 0 16px;
  place-items: center;
  border-radius: 50%;
  color: #68544b;
  font-size: 6px;
  font-weight: 800;
}

.dashboard-task__avatar--rose { background: #f3d4c8; }
.dashboard-task__avatar--blue { background: #d4e4ed; color: #4d6979; }
.dashboard-task__avatar--sand { background: #e9dfb8; color: #756b42; }

.dashboard-task__date {
  min-width: 43px;
  color: #929d93;
  font-size: 6px;
  text-align: right;
  white-space: nowrap;
}

.dashboard-task__date--done {
  color: #79a83d;
}

.dashboard-board__add {
  padding-top: 8px;
  border-top: 1px solid #f0f2ee;
  color: #929c93;
  font-size: 7px;
}

.dashboard-board__add span {
  margin-right: 3px;
  color: #6f8d4b;
  font-size: 10px;
}

.dashboard-note {
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 14px;
  border: 1px solid rgba(52, 69, 54, 0.08);
  border-radius: 13px;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 12px 30px rgba(32, 50, 35, 0.12);
  backdrop-filter: blur(12px);
}

.dashboard-note--focus {
  top: -9px;
  right: -10px;
}

.dashboard-note--team {
  bottom: 4px;
  left: 0;
}

.dashboard-note__icon {
  display: grid;
  width: 29px;
  height: 29px;
  place-items: center;
  border-radius: 9px;
  background: #f0f7e5;
  color: #7ca238;
  font-size: 16px;
}

.dashboard-note b,
.dashboard-note small {
  display: block;
  white-space: nowrap;
}

.dashboard-note b {
  color: #3b473e;
  font-size: 9px;
  font-weight: 800;
}

.dashboard-note small {
  margin-top: 4px;
  color: #909b91;
  font-size: 7px;
}

.dashboard-note__avatars {
  display: flex;
  padding-left: 3px;
}

.dashboard-note__avatars i {
  display: grid;
  width: 25px;
  height: 25px;
  place-items: center;
  margin-left: -4px;
  border: 2px solid white;
  border-radius: 50%;
  background: #edd1c2;
  color: #725347;
  font-size: 7px;
  font-style: normal;
  font-weight: 800;
}

.dashboard-note__avatars i:nth-child(2) { background: #d8e6ba; color: #52673b; }
.dashboard-note__avatars i:nth-child(3) { background: #d5e2ec; color: #526879; }

@media (max-width: 1100px) {
  .dashboard-visual {
    padding-left: 16px;
  }

  .dashboard-window__body {
    grid-template-columns: 130px minmax(0, 1fr);
  }

  .dashboard-main {
    padding-inline: 15px;
  }
}

@media (max-width: 760px) {
  .dashboard-visual {
    width: min(650px, calc(100% + 10px));
    margin-inline: auto;
    padding: 12px 4px 27px;
  }

  .dashboard-window {
    transform: none;
  }

  .dashboard-note--focus {
    top: -4px;
    right: -2px;
  }

  .dashboard-note--team {
    bottom: 0;
    left: -2px;
  }
}

@media (max-width: 520px) {
  .dashboard-window__body {
    min-height: 320px;
    grid-template-columns: 1fr;
  }

  .dashboard-sidebar,
  .dashboard-window__top-links,
  .dashboard-window__user-name,
  .dashboard-window__chevron,
  .dashboard-summary__card:nth-child(2) {
    display: none;
  }

  .dashboard-window__topbar {
    height: 42px;
  }

  .dashboard-main {
    padding: 16px 12px 12px;
  }

  .dashboard-summary {
    grid-template-columns: 1fr 1fr;
  }

  .dashboard-summary__card--progress {
    display: none;
  }

  .dashboard-board {
    margin-top: 13px;
  }

  .dashboard-task {
    min-height: 39px;
  }

  .dashboard-note {
    gap: 7px;
    padding: 8px 10px;
  }

  .dashboard-note__icon {
    width: 25px;
    height: 25px;
  }

  .dashboard-note b {
    font-size: 8px;
  }

  .dashboard-note small {
    font-size: 6px;
  }
}
</style>
