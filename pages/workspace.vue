<template>
  <main class="workspace-page page-shell">
    <section class="workspace-welcome">
      <div>
        <span class="eyebrow"><span class="eyebrow-dot" />ЛИЧНЫЙ SMM-КАБИНЕТ</span>
        <h1>С возвращением<span>.</span></h1>
        <p>Все каналы, контент-план и показатели Monst Smm — в одном рабочем пространстве.</p>
      </div>
      <AppButton variant="outline" @click="handleSignOut">Выйти</AppButton>
    </section>

    <section class="workspace-card">
      <span class="workspace-card__icon"><IconSpark /></span>
      <div>
        <span class="workspace-card__eyebrow">MONST НА СВЯЗИ</span>
        <h2>{{ user?.name || user?.email || 'Рады видеть вас' }}</h2>
        <p>Сессия активна — вы вошли в Monst Smm. Здесь можно будет управлять публикациями, получать идеи от Monst AI и следить за динамикой каналов.</p>
      </div>
      <div class="workspace-card__email" v-if="user?.email">{{ user.email }}</div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useAuth } from '~/composables/useAuth'

const { user, signOut } = useAuth()
const router = useRouter()

async function handleSignOut() {
  await signOut()
  await router.replace('/')
}

definePageMeta({ middleware: 'auth' })
useHead({ title: 'Мой кабинет — Monst Smm' })
</script>

<style scoped>
.workspace-page {
  min-height: 68vh;
  padding-block: 84px 110px;
}

.workspace-welcome {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
}

.workspace-welcome h1 {
  margin: 19px 0 0;
  font-family: Manrope, 'DM Sans', sans-serif;
  font-size: clamp(48px, 7vw, 72px);
  font-weight: 700;
  letter-spacing: -0.08em;
  line-height: 1;
}

.workspace-welcome h1 span {
  color: #7958c8;
}

.workspace-welcome p {
  margin: 16px 0 0;
  color: var(--color-muted);
  font-size: 15px;
  line-height: 1.7;
}

.workspace-card {
  display: flex;
  align-items: flex-start;
  gap: 21px;
  margin-top: 46px;
  padding: 30px;
  border: 1px solid var(--color-border);
  border-radius: 22px;
  background: white;
  box-shadow: 0 18px 50px rgba(35, 51, 37, 0.045);
}

.workspace-card__icon {
  display: grid;
  width: 48px;
  height: 48px;
  flex: 0 0 48px;
  place-items: center;
  border-radius: 15px;
  background: #f4f0fb;
  color: #7654b9;
}

.workspace-card__icon :deep(svg) {
  width: 23px;
  height: 23px;
}

.workspace-card__eyebrow {
  color: #8575a0;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.13em;
}

.workspace-card h2 {
  margin: 8px 0 0;
  color: var(--color-ink);
  font-family: Manrope, 'DM Sans', sans-serif;
  font-size: 24px;
  letter-spacing: -0.05em;
}

.workspace-card p {
  max-width: 620px;
  margin: 10px 0 0;
  color: #777180;
  font-size: 13px;
  line-height: 1.75;
}

.workspace-card__email {
  margin-left: auto;
  padding: 8px 11px;
  border-radius: 9px;
  background: #f7f4fb;
  color: #756c82;
  font-size: 11px;
  white-space: nowrap;
}

@media (max-width: 760px) {
  .workspace-page {
    min-height: 62vh;
    padding-block: 62px 78px;
  }

  .workspace-welcome {
    align-items: flex-start;
    flex-direction: column;
  }

  .workspace-card {
    flex-wrap: wrap;
    padding: 22px;
  }

  .workspace-card__email {
    width: 100%;
    margin: 0;
  }
}
</style>
