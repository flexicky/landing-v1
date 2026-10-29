<template>
  <section id="возможности" class="benefits-section section-space">
    <div class="page-shell">
      <div class="benefits-section__heading">
        <SectionIntro
          eyebrow="Пространство для ясности"
          title="Работа становится легче, когда всё на своём месте."
          description="Точка помогает команде держать общий курс — без бесконечных чатов и потерянных договорённостей."
        />
        <p class="benefits-section__aside"><span>01—03</span><br />Простые инструменты<br />для повседневной работы</p>
      </div>

      <div class="benefits-grid">
        <FeatureCard
          v-for="feature in features"
          :key="feature.index"
          :index="feature.index"
          :title="feature.title"
          :description="feature.description"
          :icon="feature.icon"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import IconFocus from '~/components/icons/IconFocus.vue'
import IconLayers from '~/components/icons/IconLayers.vue'
import IconSpark from '~/components/icons/IconSpark.vue'

const features = [
  {
    index: '01',
    title: 'Задачи с контекстом',
    description: 'Понятно, что делать дальше, кто отвечает и как задача связана с общей целью.',
    icon: IconFocus,
  },
  {
    index: '02',
    title: 'Планы в одном месте',
    description: 'Собирайте текущие проекты и ближайшие шаги в простой, общей картине.',
    icon: IconLayers,
  },
  {
    index: '03',
    title: 'Команда на одной волне',
    description: 'Договорённости и прогресс остаются видимыми — ничего важного не теряется.',
    icon: IconSpark,
  },
]
</script>

<style scoped>
.benefits-section {
  padding-top: 86px;
  padding-bottom: 120px;
}

.benefits-section__heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 44px;
}

.benefits-section__aside {
  flex: 0 0 auto;
  margin: 0 2px 5px 0;
  color: #8b958c;
  font-size: 11px;
  line-height: 1.7;
  text-align: right;
}

.benefits-section__aside span {
  color: #6f8d4a;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 17px;
  margin-top: 45px;
}

@media (max-width: 760px) {
  .benefits-section {
    padding-top: 64px;
    padding-bottom: 78px;
  }

  .benefits-section__heading {
    display: block;
  }

  .benefits-section__aside {
    display: none;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 30px;
  }
}
</style>
