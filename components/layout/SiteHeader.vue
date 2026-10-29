<template>
  <header class="site-header">
    <div class="page-shell site-header__inner">
      <AppLogo />

      <nav id="mobile-menu" class="site-header__nav" :class="{ 'site-header__nav--open': menuOpen }" aria-label="Основная навигация">
        <a href="/#возможности" @click="closeMenu">Возможности</a>
        <a href="/#как-это-работает" @click="closeMenu">Как это работает</a>
        <a href="/#о-продукте" @click="closeMenu">О Monst</a>
        <div class="site-header__mobile-actions">
          <NuxtLink
            v-if="isAuthenticated"
            class="site-header__account-mobile"
            to="/workspace"
            @click="closeMenu"
          >
            <span class="site-header__user-avatar">{{ userInitials }}</span>
            <span class="site-header__account-mobile-copy"><b>{{ accountLabel }}</b><small>Открыть кабинет</small></span>
            <IconArrowUpRight class="site-header__arrow" />
          </NuxtLink>
          <template v-else>
            <NuxtLink to="/login" @click="closeMenu">Войти</NuxtLink>
            <AppButton to="/register" size="small" @click="closeMenu">Попробовать</AppButton>
          </template>
        </div>
      </nav>

      <div class="site-header__actions">
        <template v-if="isAuthenticated">
          <AppButton to="/workspace" variant="dark" size="small" aria-label="Открыть кабинет Monst Smm">
            <template #icon><span class="site-header__user-avatar">{{ userInitials }}</span></template>
            <span class="site-header__account-label">{{ accountLabel }}</span>
            <template #end><IconArrowUpRight class="site-header__arrow" /></template>
          </AppButton>
        </template>
        <template v-else>
          <NuxtLink class="site-header__login" to="/login">Войти</NuxtLink>
          <AppButton to="/register" size="small">
            Попробовать Monst
            <template #end><IconArrowUpRight class="site-header__arrow" /></template>
          </AppButton>
        </template>
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
import { computed, ref } from 'vue'
import { useAuth } from '~/composables/useAuth'

const menuOpen = ref(false)
const { user, isAuthenticated } = useAuth()

const accountLabel = computed(() => {
  const displayName = user.value?.name?.trim() || user.value?.email?.split('@')[0] || 'Мой кабинет'
  return displayName.length > 20 ? `${displayName.slice(0, 19)}…` : displayName
})
const userInitials = computed(() => {
  const words = accountLabel.value.trim().split(/\s+/).filter(Boolean)
  if (words.length > 1) return `${words[0]?.[0] || ''}${words[1]?.[0] || ''}`.toUpperCase()
  return (words[0]?.slice(0, 2) || 'M').toUpperCase()
})

function closeMenu() {
  menuOpen.value = false
}
</script>

<style scoped>
.site-header {
  position: relative;
  z-index: 20;
  padding-top: 20px;
  padding-bottom: 12px;
  background: #17131f;
}

.site-header__inner {
  display: flex;
  height: 66px;
  align-items: center;
  justify-content: space-between;
  padding-inline: 17px 12px;
  border: 1px solid rgba(233, 222, 255, 0.13);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.045);
  box-shadow: 0 8px 30px rgba(8, 6, 13, 0.12);
  backdrop-filter: blur(18px);
}

.site-header__inner :deep(.app-logo) { color: #fff; }

.site-header__nav {
  display: flex;
  align-items: center;
  gap: clamp(22px, 3.1vw, 42px);
}

.site-header__nav > a,
.site-header__login {
  color: #c2bacc;
  font-size: 12px;
  font-weight: 600;
  transition: color 150ms ease;
}

.site-header__nav > a:hover,
.site-header__login:hover { color: #fff; }

.site-header__actions {
  display: flex;
  align-items: center;
  gap: 21px;
}

.site-header__arrow { width: 17px; height: 17px; }

.site-header__user-avatar {
  display: grid;
  width: 25px;
  height: 25px;
  flex: 0 0 25px;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.13);
  color: inherit;
  font-size: 9px;
  font-weight: 800;
}

.site-header__account-label { max-width: 125px; overflow: hidden; text-overflow: ellipsis; }

.site-header__account-mobile {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 11px;
  padding: 11px 10px;
  border: 1px solid rgba(238, 230, 249, 0.12);
  border-radius: 11px;
  background: rgba(255, 255, 255, 0.055);
}

.site-header__account-mobile-copy {
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  gap: 4px;
}

.site-header__account-mobile-copy b {
  overflow: hidden;
  color: #f4f0f9;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.site-header__account-mobile-copy small { color: #a99fb6; font-size: 9px; }
.site-header__account-mobile > :deep(svg) { color: var(--color-accent); }

.site-header__mobile-actions,
.site-header__menu-button { display: none; }

@media (max-width: 900px) {
  .site-header__nav { gap: 18px; }
  .site-header__actions { gap: 16px; }
  .site-header__actions :deep(.app-button) { padding-inline: 14px; }
}

@media (max-width: 760px) {
  .site-header { padding-top: 13px; padding-bottom: 8px; }
  .site-header__inner { height: 60px; padding-inline: 12px; }
  .site-header__actions { display: none; }
  .site-header__menu-button {
    display: grid;
    width: 42px;
    height: 42px;
    place-items: center;
    border: 1px solid rgba(233, 222, 255, 0.17);
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.06);
    color: #fff;
    cursor: pointer;
  }
  .site-header__menu-button :deep(svg) { width: 20px; height: 20px; }
  .site-header__nav {
    position: absolute;
    top: calc(100% + 3px);
    right: 20px;
    left: 20px;
    display: none;
    align-items: stretch;
    gap: 0;
    padding: 10px;
    border: 1px solid rgba(233, 222, 255, 0.14);
    border-radius: 18px;
    background: #221b2c;
    box-shadow: 0 25px 70px rgba(8, 5, 16, 0.35);
  }
  .site-header__nav--open { display: flex; flex-direction: column; }
  .site-header__nav > a { padding: 13px 12px; border-radius: 10px; }
  .site-header__nav > a:hover { background: rgba(255, 255, 255, 0.055); }
  .site-header__mobile-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-top: 7px;
    padding: 12px 7px 4px;
    border-top: 1px solid rgba(233, 222, 255, 0.12);
  }
  .site-header__mobile-actions > a:not(.site-header__account-mobile) {
    padding: 10px;
    color: #c2bacc;
    font-size: 12px;
    font-weight: 700;
  }
}
</style>
