<template>
  <main class="auth-shell">
    <div class="auth-shell__top page-shell">
      <AppLogo />
      <NuxtLink class="auth-shell__back" to="/">
        <span aria-hidden="true">←</span>
        На главную
      </NuxtLink>
    </div>

    <div class="auth-shell__content page-shell">
      <section class="auth-shell__story" aria-label="О рабочем пространстве Точка">
        <div class="auth-shell__story-inner">
          <span class="auth-shell__orb auth-shell__orb--one" aria-hidden="true" />
          <span class="auth-shell__orb auth-shell__orb--two" aria-hidden="true" />
          <div class="auth-shell__story-copy">
            <span class="auth-shell__overline"><span /> ПРОСТОЕ МЕСТО ДЛЯ ВАЖНОГО</span>
            <h1>Работать вместе. <em>Двигаться дальше.</em></h1>
            <p>Один ясный план помогает команде меньше переключаться и чаще доводить задуманное до результата.</p>
          </div>
          <div class="auth-shell__mini-card" aria-hidden="true">
            <div class="auth-shell__mini-card-top">
              <span class="auth-shell__mini-icon">↗</span>
              <span>В фокусе</span>
              <span class="auth-shell__mini-dots">•••</span>
            </div>
            <div class="auth-shell__mini-line auth-shell__mini-line--long" />
            <div class="auth-shell__mini-line auth-shell__mini-line--medium" />
            <div class="auth-shell__mini-bottom">
              <span class="auth-shell__mini-avatar">М</span>
              <span class="auth-shell__mini-avatar auth-shell__mini-avatar--yellow">А</span>
              <span class="auth-shell__mini-tag">на этой неделе</span>
              <span class="auth-shell__mini-check">✓</span>
            </div>
          </div>
          <div class="auth-shell__story-caption"><span class="auth-shell__caption-dot" /> Ваш следующий шаг уже ближе</div>
        </div>
      </section>

      <section class="auth-shell__form-area" aria-label="Форма авторизации">
        <slot />
        <p class="auth-shell__legal">Продолжая, вы соглашаетесь с условиями использования и политикой конфиденциальности.</p>
      </section>
    </div>
  </main>
</template>

<style scoped>
.auth-shell {
  min-height: 100vh;
  padding: 28px 0 36px;
  background:
    radial-gradient(ellipse at 78% 19%, rgba(215, 242, 167, 0.25), transparent 26%),
    var(--color-paper);
}

.auth-shell__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.auth-shell__back {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: #69736a;
  font-size: 13px;
  font-weight: 600;
  transition: color 150ms ease;
}

.auth-shell__back:hover {
  color: var(--color-ink);
}

.auth-shell__back span {
  font-size: 18px;
}

.auth-shell__content {
  display: grid;
  min-height: calc(100vh - 116px);
  grid-template-columns: minmax(0, 1.1fr) minmax(380px, 0.9fr);
  align-items: center;
  gap: clamp(52px, 8vw, 120px);
  padding-block: 48px 32px;
}

.auth-shell__story-inner {
  position: relative;
  display: flex;
  min-height: 490px;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  padding: clamp(36px, 5vw, 64px);
  border-radius: 30px;
  background:
    radial-gradient(circle at 84% 29%, rgba(190, 237, 103, 0.16), transparent 22%),
    linear-gradient(145deg, #26342a, #1a241d 72%);
  color: white;
  isolation: isolate;
}

.auth-shell__story-inner::after {
  position: absolute;
  z-index: -1;
  right: -95px;
  bottom: -190px;
  width: 440px;
  height: 440px;
  border: 1px solid rgba(225, 247, 201, 0.1);
  border-radius: 50%;
  box-shadow: 0 0 0 56px rgba(225, 247, 201, 0.035), 0 0 0 112px rgba(225, 247, 201, 0.025);
  content: '';
}

.auth-shell__orb {
  position: absolute;
  z-index: -1;
  border-radius: 50%;
  filter: blur(1px);
}

.auth-shell__orb--one {
  top: 90px;
  right: 11%;
  width: 110px;
  height: 110px;
  background: linear-gradient(145deg, rgba(220, 249, 124, 0.32), rgba(220, 249, 124, 0));
}

.auth-shell__orb--two {
  top: 140px;
  right: 6%;
  width: 190px;
  height: 190px;
  border: 1px solid rgba(218, 248, 128, 0.18);
}

.auth-shell__story-copy,
.auth-shell__mini-card,
.auth-shell__story-caption {
  position: relative;
}

.auth-shell__overline {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: #c7d0c6;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
}

.auth-shell__overline span,
.auth-shell__caption-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-accent);
  box-shadow: 0 0 14px rgba(217, 248, 121, 0.7);
}

.auth-shell__story h1 {
  max-width: 490px;
  margin: 24px 0 17px;
  font-family: Manrope, 'DM Sans', sans-serif;
  font-size: clamp(39px, 5vw, 62px);
  font-weight: 700;
  letter-spacing: -0.07em;
  line-height: 1.02;
}

.auth-shell__story h1 em {
  color: var(--color-accent);
  font-style: normal;
}

.auth-shell__story-copy p {
  max-width: 410px;
  margin: 0;
  color: #b9c2b9;
  font-size: 15px;
  line-height: 1.75;
}

.auth-shell__mini-card {
  width: min(365px, 100%);
  align-self: flex-end;
  margin-top: 48px;
  padding: 17px 19px 16px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.095);
  box-shadow: 0 16px 55px rgba(0, 0, 0, 0.16);
  backdrop-filter: blur(15px);
}

.auth-shell__mini-card-top,
.auth-shell__mini-bottom {
  display: flex;
  align-items: center;
}

.auth-shell__mini-card-top {
  gap: 9px;
  color: #e9eee7;
  font-size: 11px;
  font-weight: 600;
}

.auth-shell__mini-icon,
.auth-shell__mini-check {
  display: grid;
  width: 23px;
  height: 23px;
  place-items: center;
  border-radius: 7px;
  background: var(--color-accent);
  color: var(--color-ink);
  font-weight: 800;
}

.auth-shell__mini-dots {
  margin-left: auto;
  color: #9ea99e;
  letter-spacing: 2px;
}

.auth-shell__mini-line {
  height: 5px;
  margin-top: 14px;
  border-radius: 9px;
  background: rgba(243, 247, 240, 0.35);
}

.auth-shell__mini-line--long {
  width: 68%;
}

.auth-shell__mini-line--medium {
  width: 42%;
  margin-top: 8px;
  background: rgba(243, 247, 240, 0.16);
}

.auth-shell__mini-bottom {
  margin-top: 16px;
}

.auth-shell__mini-avatar {
  display: grid;
  width: 23px;
  height: 23px;
  place-items: center;
  margin-right: -5px;
  border: 2px solid #455448;
  border-radius: 50%;
  background: #d0b4a0;
  color: #243026;
  font-size: 8px;
  font-weight: 800;
}

.auth-shell__mini-avatar--yellow {
  background: #ead87a;
}

.auth-shell__mini-tag {
  margin-left: 13px;
  color: #bdc7bd;
  font-size: 9px;
}

.auth-shell__mini-check {
  width: 19px;
  height: 19px;
  margin-left: auto;
  border-radius: 50%;
  font-size: 10px;
}

.auth-shell__story-caption {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-top: 24px;
  color: #b8c2b7;
  font-size: 11px;
}

.auth-shell__caption-dot {
  width: 6px;
  height: 6px;
}

.auth-shell__form-area {
  width: min(100%, 430px);
  justify-self: center;
}

.auth-shell__legal {
  max-width: 330px;
  margin: 28px auto 0;
  color: #959e95;
  font-size: 11px;
  line-height: 1.6;
  text-align: center;
}

@media (max-width: 900px) {
  .auth-shell__content {
    grid-template-columns: minmax(0, 1fr) minmax(350px, 0.88fr);
    gap: 36px;
  }

  .auth-shell__story-inner {
    min-height: 520px;
    padding: 38px;
  }
}

@media (max-width: 760px) {
  .auth-shell {
    padding-top: 21px;
  }

  .auth-shell__content {
    min-height: auto;
    grid-template-columns: 1fr;
    gap: 42px;
    padding-block: 32px 22px;
  }

  .auth-shell__story-inner {
    min-height: 300px;
    padding: 30px;
  }

  .auth-shell__story h1 {
    max-width: 460px;
    font-size: clamp(38px, 10vw, 54px);
  }

  .auth-shell__story-copy p {
    max-width: 460px;
  }

  .auth-shell__mini-card {
    display: none;
  }

  .auth-shell__story-caption {
    margin-top: 34px;
  }
}

@media (max-width: 480px) {
  .auth-shell__back {
    font-size: 12px;
  }

  .auth-shell__story-inner {
    min-height: 295px;
    padding: 27px 24px;
    border-radius: 24px;
  }

  .auth-shell__story h1 {
    margin-top: 19px;
    font-size: 40px;
  }

  .auth-shell__story-copy p {
    font-size: 14px;
  }
}
</style>
