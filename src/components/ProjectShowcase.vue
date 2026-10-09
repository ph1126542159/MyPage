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
      <div class="featured-intro"><div class="featured-label"><span>{{ project.number }} / {{ project.category }}</span></div><p class="featured-name">{{ project.displayName || project.name }}</p><p v-if="project.alias" class="featured-alias">{{ project.alias }}</p><span class="featured-status">{{ project.status }}</span></div>
      <div class="featured-story"><h3>{{ project.title }}</h3><p class="featured-description">{{ project.compactSummary || project.description }}</p></div>
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
        <p class="kicker">实现重点</p>
        <ul class="project-highlights"><li v-for="item in project.engineering" :key="item.title"><strong>{{ item.title }}</strong><p>{{ item.text }}</p></li></ul>
        <div class="tag-list"><span v-for="tech in project.stack.slice(0, 4)" :key="tech">{{ tech }}</span></div>
        <a class="button button-primary" :href="project.href" :target="project.external ? '_blank' : undefined" :rel="project.external ? 'noopener noreferrer' : undefined">{{ project.external ? project.cta : (project.contactLabel || '交流项目经验') }} <v-icon :icon="project.external ? 'mdi-open-in-new' : 'mdi-arrow-right'" /></a>
        <p class="project-status-note">{{ project.note }}</p>
      </aside>
    </div>

    <details class="project-more">
      <summary>查看功能与实现细节 <v-icon icon="mdi-chevron-down" /></summary>
      <div class="project-context"><h4>{{ project.problem }}</h4><p>{{ project.value }}</p><blockquote>{{ project.scenario }}</blockquote></div>
      <div class="feature-grid"><div v-for="feature in project.features" :key="feature.title" class="feature-tile"><v-icon :icon="feature.icon" /><h4>{{ feature.title }}</h4><p>{{ feature.text }}</p></div></div>
      <div class="featured-workflow"><span>一条连贯的工作流</span><ol><li v-for="(step, index) in project.workflow" :key="step"><small>{{ String(index + 1).padStart(2, '0') }}</small>{{ step }}</li></ol></div>
    </details>

    <v-dialog v-model="viewerOpen" max-width="1440" class="screenshot-dialog" :aria-label="`${project.name} ${selected.title} 大图`">
      <div class="image-viewer"><header><strong>{{ project.name }} · {{ selected.title }}</strong><button type="button" aria-label="关闭大图" @click="viewerOpen = false"><v-icon icon="mdi-close" /></button></header><img :src="selected.file" :alt="selected.title" /><p>{{ selected.text }}</p></div>
    </v-dialog>
  </article>
</template>
