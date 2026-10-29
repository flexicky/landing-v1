<template>
  <footer class="site-footer" id="о-продукте">
    <div class="page-shell">
      <div class="site-footer__top">
        <div class="site-footer__brand">
          <AppLogo />
          <p>Меньше шума. Больше движения.</p>
        </div>
        <div class="site-footer__links">
          <a href="/#возможности">Возможности</a>
          <a href="/#как-это-работает">Как это работает</a>
          <NuxtLink to="/login">Войти в аккаунт</NuxtLink>
        </div>
        <AppButton to="/register" variant="outline" size="small">
          Создать аккаунт
          <template #end><IconArrowUpRight class="site-footer__arrow" /></template>
        </AppButton>
      </div>
      <div class="site-footer__bottom">
        <span>© {{ currentYear }} Точка. Все права защищены.</span>
        <span class="site-footer__note"><span /> Сделано для ясной работы</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.site-footer {
  padding: 34px 0 24px;
  border-top: 1px solid var(--color-border);
  background: #f8f9f6;
}

.site-footer__top,
.site-footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.site-footer__top {
  gap: 30px;
  padding: 6px 0 32px;
}

.site-footer__brand p {
  margin: 11px 0 0;
  color: #7c857d;
  font-size: 12px;
}

.site-footer__links {
  display: flex;
  align-items: center;
  gap: 30px;
}

.site-footer__links a {
  color: #677168;
  font-size: 12px;
  font-weight: 600;
  transition: color 150ms ease;
}

.site-footer__links a:hover {
  color: var(--color-ink);
}

.site-footer__arrow {
  width: 16px;
  height: 16px;
}

.site-footer__bottom {
  gap: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--color-border);
  color: #929a92;
  font-size: 11px;
}

.site-footer__note {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.site-footer__note span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #9ac64e;
}

@media (max-width: 760px) {
  .site-footer__top {
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 25px;
  }

  .site-footer__links {
    order: 3;
    width: 100%;
    flex-wrap: wrap;
    gap: 16px 22px;
  }

  .site-footer__top > :deep(.app-button) {
    margin-left: auto;
  }
}

@media (max-width: 480px) {
  .site-footer__bottom {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
