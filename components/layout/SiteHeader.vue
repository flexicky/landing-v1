<template>
  <header class="site-header">
    <div class="page-shell site-header__inner">
      <AppLogo />

      <nav id="mobile-menu" class="site-header__nav" :class="{ 'site-header__nav--open': menuOpen }" aria-label="Основная навигация">
        <a href="/#возможности" @click="closeMenu">Возможности</a>
        <a href="/#как-это-работает" @click="closeMenu">Как это работает</a>
        <a href="/#о-продукте" @click="closeMenu">О продукте</a>
        <div class="site-header__mobile-actions">
          <NuxtLink to="/login" @click="closeMenu">Войти</NuxtLink>
          <AppButton to="/register" size="small" @click="closeMenu">Начать бесплатно</AppButton>
        </div>
      </nav>

      <div class="site-header__actions">
        <NuxtLink class="site-header__login" to="/login">Войти</NuxtLink>
        <AppButton to="/register" size="small">
          Начать бесплатно
          <template #end><IconArrowUpRight class="site-header__arrow" /></template>
        </AppButton>
      </div>

      <button
        class="site-header__menu-button"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        :aria-label="menuOpen ? 'Закрыть меню' : 'Открыть меню'"
        @click="menuOpen = !menuOpen"
      >
        <IconX v-if="menuOpen" />
        <IconMenu v-else />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<style scoped>
.site-header {
  position: relative;
  z-index: 20;
  padding-top: 24px;
}

.site-header__inner {
  display: flex;
  height: 64px;
  align-items: center;
  justify-content: space-between;
  padding-inline: 18px 12px;
  border: 1px solid rgba(39, 53, 43, 0.08);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 8px 30px rgba(26, 39, 29, 0.035);
  backdrop-filter: blur(16px);
}

.site-header__nav {
  display: flex;
  align-items: center;
  gap: clamp(22px, 3.1vw, 44px);
}

.site-header__nav > a,
.site-header__login {
  color: #677168;
  font-size: 13px;
  font-weight: 600;
  transition: color 150ms ease;
}

.site-header__nav > a:hover,
.site-header__login:hover {
  color: var(--color-ink);
}

.site-header__actions {
  display: flex;
  align-items: center;
  gap: 23px;
}

.site-header__arrow {
  width: 17px;
  height: 17px;
}

.site-header__mobile-actions,
.site-header__menu-button {
  display: none;
}

@media (max-width: 900px) {
  .site-header__nav {
    gap: 18px;
  }

  .site-header__actions {
    gap: 16px;
  }

  .site-header__actions :deep(.app-button) {
    padding-inline: 14px;
  }
}

@media (max-width: 760px) {
  .site-header {
    padding-top: 16px;
  }

  .site-header__inner {
    height: 60px;
    padding-inline: 14px;
  }

  .site-header__actions {
    display: none;
  }

  .site-header__menu-button {
    display: grid;
    width: 42px;
    height: 42px;
    place-items: center;
    border: 1px solid var(--color-border);
    border-radius: 12px;
    background: white;
    color: var(--color-ink);
    cursor: pointer;
  }

  .site-header__menu-button :deep(svg) {
    width: 20px;
    height: 20px;
  }

  .site-header__nav {
    position: absolute;
    top: calc(100% + 10px);
    right: 20px;
    left: 20px;
    display: none;
    align-items: stretch;
    gap: 0;
    padding: 10px;
    border: 1px solid var(--color-border);
    border-radius: 18px;
    background: white;
    box-shadow: var(--shadow-soft);
  }

  .site-header__nav--open {
    display: flex;
    flex-direction: column;
  }

  .site-header__nav > a {
    padding: 13px 12px;
    border-radius: 10px;
  }

  .site-header__nav > a:hover {
    background: #f6f8f3;
  }

  .site-header__mobile-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-top: 7px;
    padding: 12px 7px 4px;
    border-top: 1px solid var(--color-border);
  }

  .site-header__mobile-actions > a {
    padding: 10px;
    color: #5c675e;
    font-size: 13px;
    font-weight: 700;
  }
}
</style>
