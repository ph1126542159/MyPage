<script setup>
import { computed, ref } from 'vue'
const props = defineProps({ project: { type: Object, required: true } })
const selectedIndex = ref(0)
const viewerOpen = ref(false)
const selected = computed(() => props.project.screenshots[selectedIndex.value])
</script>

<template>
  <article :id="`project-${project.id}`" class="featured-project" :class="`featured-${project.id}`">
    <header class="featured-heading">
      <div class="featured-label"><span>{{ project.number }} / {{ project.category }}</span><span class="featured-status">{{ project.status }}</span></div>
      <p class="featured-name">{{ project.name }}</p>
      <h3>{{ project.title }}</h3>
      <p class="featured-description">{{ project.description }}</p>
    </header>

    <div class="featured-stage">
      <div class="screen-gallery">
        <figure class="featured-screen">
          <div class="screen-chrome"><span><i></i><i></i><i></i></span><small>{{ project.name }}</small><span>{{ String(selectedIndex + 1).padStart(2, '0') }} / {{ project.screenshots.length }}</span></div>
          <button type="button" class="screen-open" :aria-label="`放大查看：${selected.title}`" @click="viewerOpen = true">
            <img :src="selected.file" :alt="`${project.name}：${selected.title}`" loading="lazy" />
            <span class="screen-expand"><v-icon icon="mdi-arrow-expand" /> 点击放大</span>
          </button>
          <figcaption><strong>{{ selected.title }}</strong><p>{{ selected.text }}</p></figcaption>
        </figure>
        <div class="screen-thumbnails" :aria-label="`${project.name} 界面图集`">
          <button v-for="(screen, index) in project.screenshots" :key="screen.file" type="button" :class="{ selected: selectedIndex === index }" :aria-pressed="selectedIndex === index" :aria-label="`查看${screen.title}`" @click="selectedIndex = index">
            <img :src="screen.file" alt="" loading="lazy" /><span>{{ screen.title }}</span>
          </button>
        </div>
        <p class="gallery-note">{{ project.galleryNote }}</p>
      </div>
      <aside class="featured-value">
        <p class="kicker">Why I built it</p><h4>{{ project.problem }}</h4><p>{{ project.value }}</p>
        <div class="featured-facts"><div v-for="fact in project.facts" :key="fact.label"><strong>{{ fact.value }}</strong><span>{{ fact.label }}</span></div></div>
        <div class="featured-scenario"><span>从这样的需求开始</span><blockquote>{{ project.scenario }}</blockquote><small>{{ project.audience }}</small></div>
        <a class="button button-primary" :href="project.href" :target="project.external ? '_blank' : undefined" :rel="project.external ? 'noopener noreferrer' : undefined">{{ project.cta }} <v-icon :icon="project.external ? 'mdi-open-in-new' : 'mdi-arrow-right'" /></a>
      </aside>
    </div>

    <div class="feature-grid"><div v-for="feature in project.features" :key="feature.title" class="feature-tile"><v-icon :icon="feature.icon" /><h4>{{ feature.title }}</h4><p>{{ feature.text }}</p></div></div>
    <div class="featured-workflow"><span>一条连贯的工作流</span><ol><li v-for="(step, index) in project.workflow" :key="step"><small>{{ String(index + 1).padStart(2, '0') }}</small>{{ step }}</li></ol></div>
    <footer class="featured-footer"><div class="tag-list"><span v-for="tech in project.stack" :key="tech">{{ tech }}</span></div><p>{{ project.note }}</p></footer>

    <v-dialog v-model="viewerOpen" max-width="1440" class="screenshot-dialog" :aria-label="`${project.name} ${selected.title} 大图`">
      <div class="image-viewer"><header><strong>{{ project.name }} · {{ selected.title }}</strong><button type="button" aria-label="关闭大图" @click="viewerOpen = false"><v-icon icon="mdi-close" /></button></header><img :src="selected.file" :alt="selected.title" /><p>{{ selected.text }}</p></div>
    </v-dialog>
  </article>
</template>
