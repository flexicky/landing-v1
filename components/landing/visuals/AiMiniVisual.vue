<template>
  <div class="mini-ai" aria-hidden="true">
    <div class="mini-ai__top"><span class="mini-ai__spark">✦</span><b>Monst AI</b><span class="mini-ai__ready">ГОТОВ К РАБОТЕ</span></div>
    <div class="mini-ai__prompt"><span>Идея для поста о запуске новой коллекции…</span><b>↗</b></div>
    <div class="mini-ai__answer">
      <span class="mini-ai__avatar">m.</span>
      <div><span>Свежий дроп. Новые правила.</span><b>Собрали то, чего не хватало твоему гардеробу ✦</b></div>
    </div>
    <div class="mini-ai__tools"><span>✦ Текст</span><span>▧ Визуал</span><span>↻ Ещё вариант</span></div>
  </div>
</template>

<style scoped>
.mini-ai {
  min-height: 132px;
  padding: 12px 13px;
  border: 1px solid #e9e1f8;
  border-radius: 15px;
  background:
    radial-gradient(circle at 100% 0, rgba(211, 255, 89, 0.14), transparent 28%),
    linear-gradient(135deg, #fbf9ff, #f2edfc);
}

.mini-ai__top,
.mini-ai__prompt,
.mini-ai__answer,
.mini-ai__tools {
  display: flex;
  align-items: center;
}

.mini-ai__top {
  gap: 6px;
}

.mini-ai__spark {
  display: grid;
  width: 21px;
  height: 21px;
  place-items: center;
  border-radius: 7px;
  background: #e8ddff;
  color: #805de0;
  font-size: 11px;
}

.mini-ai__top b {
  color: #59447d;
  font-size: 8px;
}

.mini-ai__ready {
  margin-left: auto;
  color: #7ba744;
  font-size: 5px;
  font-weight: 900;
  letter-spacing: 0.1em;
}

.mini-ai__prompt {
  justify-content: space-between;
  gap: 8px;
  margin-top: 10px;
  padding: 7px 8px;
  border: 1px solid #e8e2ef;
  border-radius: 8px;
  background: #fff;
  color: #948b9e;
  font-size: 6px;
}

.mini-ai__prompt b {
  color: #7b58d2;
  font-size: 9px;
}

.mini-ai__answer {
  align-items: flex-start;
  gap: 7px;
  margin-top: 8px;
}

.mini-ai__avatar {
  display: grid;
  width: 19px;
  height: 19px;
  flex: 0 0 19px;
  place-items: center;
  border-radius: 6px;
  background: var(--color-accent);
  color: #3e354a;
  font-size: 7px;
  font-weight: 900;
}

.mini-ai__answer > div > span,
.mini-ai__answer > div > b {
  display: block;
}

.mini-ai__answer > div > span {
  color: #554668;
  font-size: 7px;
  font-weight: 800;
}

.mini-ai__answer > div > b {
  margin-top: 4px;
  color: #847a90;
  font-size: 6px;
  font-weight: 500;
}

.mini-ai__tools {
  gap: 5px;
  margin-top: 8px;
}

.mini-ai__tools span {
  padding: 4px 6px;
  border: 1px solid #e7e0f1;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.7);
  color: #7f728f;
  font-size: 5px;
}
</style>
