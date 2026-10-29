<template>
  <footer class="site-footer">
    <div class="page-shell">
      <div class="site-footer__top">
        <div class="site-footer__brand">
          <AppLogo />
          <p>SMM растёт. Руки свободны.</p>
        </div>
        <nav class="site-footer__links" aria-label="Навигация в подвале">
          <a href="/#возможности">Возможности</a>
          <a href="/#как-это-работает">Как это работает</a>
          <NuxtLink :to="isAuthenticated ? '/workspace' : '/login'">
            {{ isAuthenticated ? 'Мой кабинет' : 'Войти в аккаунт' }}
          </NuxtLink>
        </nav>
        <AppButton :to="isAuthenticated ? '/workspace' : '/register'" variant="outline" size="small">
          {{ isAuthenticated ? 'Продолжить работу' : 'Попробовать Monst' }}
          <template #end><IconArrowUpRight class="site-footer__arrow" /></template>
        </AppButton>
      </div>
      <div class="site-footer__bottom">
        <span>© {{ currentYear }} Monst Smm. Все права защищены.</span>
        <span class="site-footer__note"><i /> Контент под контролем. Monst на связи.</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useAuth } from '~/composables/useAuth'

const { isAuthenticated } = useAuth()
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.site-footer {
  padding: 36px 0 25px;
  border-top: 1px solid #e8e3ed;
  background: #f7f5fb;
}

.site-footer__top,
.site-footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.site-footer__top { gap: 30px; padding: 6px 0 32px; }
.site-footer__brand p { margin: 10px 0 0; color: #8b8394; font-size: 11px; }
.site-footer__links { display: flex; align-items: center; gap: 28px; }

.site-footer__links a {
  color: #71697d;
  font-size: 11px;
  font-weight: 700;
  transition: color 150ms ease;
}

.site-footer__links a:hover { color: #7958c8; }
.site-footer__arrow { width: 16px; height: 16px; }

.site-footer__bottom {
  gap: 20px;
  padding-top: 18px;
  border-top: 1px solid #e8e3ed;
  color: #a39cae;
  font-size: 9px;
}

.site-footer__note { display: inline-flex; align-items: center; gap: 8px; }
.site-footer__note i { width: 6px; height: 6px; border-radius: 50%; background: #9b76f6; }

@media (max-width: 760px) {
  .site-footer__top { flex-wrap: wrap; align-items: flex-start; gap: 22px; }
  .site-footer__links { order: 3; width: 100%; flex-wrap: wrap; gap: 15px 22px; }
  .site-footer__top > :deep(.app-button) { margin-left: auto; }
}

@media (max-width: 480px) {
  .site-footer__bottom { align-items: flex-start; flex-direction: column; gap: 10px; }
}
</style>
