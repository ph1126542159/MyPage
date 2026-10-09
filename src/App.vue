<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { siteContent } from './data/siteContent'
import { featuredProjects } from './data/featuredProjects'
import ProjectShowcase from './components/ProjectShowcase.vue'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`
const menuOpen = ref(false)
const activeSection = ref('#hero')
const resumeUrl = asset('resume/Peng-Hui-Resume.pdf')
const selectedFeatured = ref('codex')
const showcaseProjects = ['codex', '3dcs', 'myblue'].map(id => featuredProjects.find(project => project.id === id))
const syncFeaturedFromHash = () => {
  const id = window.location.hash.replace('#project-', '')
  if (showcaseProjects.some(project => project.id === id)) {
    selectedFeatured.value = id
    requestAnimationFrame(() => document.getElementById(`project-${id}`)?.scrollIntoView())
  }
}
const selectFeatured = (id) => {
  selectedFeatured.value = id
  window.history.replaceState(null, '', `#project-${id}`)
}

const navItems = [
  ['首页', '#hero'], ['代表作品', '#ai-projects'], ['工程实践', '#projects'],
  ['技术能力', '#capability'], ['联系我', '#contact'],
]
const proofItems = [
  ['13+', '年工程经验'], ['C++ / Qt', '系统与桌面应用'],
  ['Linux', '嵌入式与设备'], ['AI × 工程', '工具集成与验证'],
]
const projects = [
  {
    number: '01', eyebrow: '机器人 / 嵌入式系统', title: '移动机器人研发与系统集成',
    summary: '基于 Linux 的机器人底盘控制、传感器融合与上层应用开发，覆盖设备联调、运动开发及功能验证的全过程。',
    image: asset('media/work/office-robot.jpg'), alt: '移动机器人研发与联调现场',
    tags: ['Linux', 'C/C++', '机器人', '传感器', '系统集成'],
    highlights: ['完成机器人底盘、执行器与传感器联调', '构建从设备通信到上层业务的完整链路', '以现场问题闭环驱动软件稳定性提升'],
    aside: ['ROBOTS', 'IN', 'REAL WORLD'],
  },
]
const capabilityNodes = [
  ['mdi-code-braces', 'C/C++', '13+ 年开发经验\n性能 · 跨平台 · 工程化', 'left-top'],
  ['mdi-linux', 'Linux', '嵌入式开发\n驱动 · 系统 · 调试', 'top'],
  ['mdi-robot-industrial', '机器人', '运动控制 · 传感融合\nSLAM · 系统集成', 'right-top'],
  ['mdi-microsoft-windows', 'Windows 桌面', '工业软件 · 设备控制\n界面 · 通信 · 数据处理', 'left-bottom'],
  ['mdi-chip', '工业产品', '从需求到落地\n联调 · 质量 · 量产', 'bottom'],
  ['mdi-creation-outline', 'AI 辅助工程', '代码生成 · 问题分析\n文档编写 · 自动化', 'right-bottom'],
]
const timeline = [
  ['2011', '起步积累', '嵌入式软件与 C/C++'], ['2011 – 2015', '系统研发', 'Linux / Windows 工业应用'],
  ['2015 – 2019', '复杂项目', '设备控制与平台架构'], ['2019 – 2023', '产品落地', '机器人与工业软件交付'],
  ['2023 – 至今', 'AI × 工程', '以智能工具放大工程价值'],
]
let scrollFrame = 0
const updateActiveSection = () => {
  if (scrollFrame) return
  scrollFrame = requestAnimationFrame(() => {
    const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
    const current = navItems.filter(([, id]) => document.querySelector(id)?.getBoundingClientRect().top <= 160).at(-1)
    activeSection.value = atBottom ? '#contact' : current?.[1] ?? '#hero'
    scrollFrame = 0
  })
}
onMounted(() => {
  window.addEventListener('hashchange', syncFeaturedFromHash)
  syncFeaturedFromHash()
  window.addEventListener('scroll', updateActiveSection, { passive: true })
  updateActiveSection()
})
onUnmounted(() => {
  window.removeEventListener('hashchange', syncFeaturedFromHash)
  window.removeEventListener('scroll', updateActiveSection)
  cancelAnimationFrame(scrollFrame)
})
</script>

<template>
  <v-app><div class="site-shell">
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="#hero"><strong>Peng Hui<span class="brand-dot">.</span></strong><span>工程与智能</span></a>
        <nav class="desktop-nav" aria-label="页面导航"><a v-for="item in navItems" :key="item[1]" :href="item[1]" :class="{ active: activeSection === item[1] }" :aria-current="activeSection === item[1] ? 'location' : undefined">{{ item[0] }}</a></nav>
        <button class="menu-button" type="button" :aria-expanded="menuOpen" aria-label="切换导航" @click="menuOpen = !menuOpen"><v-icon :icon="menuOpen ? 'mdi-close' : 'mdi-menu'" /></button>
      </div>
      <nav v-if="menuOpen" class="mobile-nav" aria-label="页面导航"><a v-for="item in navItems" :key="item[1]" :href="item[1]" :aria-current="activeSection === item[1] ? 'location' : undefined" @click="menuOpen = false">{{ item[0] }}</a></nav>
    </header>

    <main>
      <section id="hero" class="hero">
        <div class="hero-grid page-width">
          <div class="hero-copy">
            <p class="kicker">彭辉 · C++ / 系统软件 / 工业软件</p>
            <h1>把复杂系统<br />做成<em>可交付的软件。</em></h1>
            <p class="hero-lead">13+ 年 C/C++ 研发经验，覆盖 Linux、嵌入式与 Windows 桌面应用。用工业项目和自主产品，展示从系统设计、开发联调到测试交付的工程能力。</p>
            <div class="hero-actions">
              <a class="button button-primary" href="#ai-projects">查看代表作品 <v-icon icon="mdi-arrow-right" /></a>
              <a class="button button-ghost" :href="resumeUrl" download="彭辉-系统软件工程师-简历.pdf"><v-icon icon="mdi-download-outline" /> 下载简历</a>
            </div>
            <div class="hero-product-links"><span>代表作品</span><a href="#project-codex">AI 助手 <v-icon icon="mdi-arrow-top-right" /></a><a href="#project-3dcs">OpenDVA / 3DCS <v-icon icon="mdi-arrow-top-right" /></a></div>
          </div>
          <figure class="hero-profile"><div class="profile-topline"><span>Peng Hui / 彭辉</span><v-icon icon="mdi-arrow-top-right" /></div><img class="hero-portrait" :src="asset('media/photos/profile-formal-cutout.png')" alt="彭辉正式形象照" /><figcaption class="hero-identity"><div><strong>专注工程落地</strong><span>连接软件、硬件与真实世界</span></div><span class="profile-index">01 / PROFILE</span></figcaption></figure>
        </div>
        <div id="about" class="proof-rail"><div class="proof-grid page-width"><div v-for="item in proofItems" :key="item[0]" class="proof-item"><strong>{{ item[0] }}</strong><span>{{ item[1] }}</span></div></div></div>
      </section>

      <section id="ai-projects" class="featured-section"><div class="page-width">
        <header class="featured-section-heading"><div><p class="kicker">Selected Products</p><h2>用作品，说明实现能力。</h2><p>从 AI 开发工具到工业分析软件，选择一个项目查看。</p></div></header>
        <nav class="product-selector" aria-label="代表作品切换"><button v-for="project in showcaseProjects" :key="project.id" type="button" :aria-pressed="selectedFeatured === project.id" :aria-controls="`project-${project.id}`" :class="{ selected: selectedFeatured === project.id }" @click="selectFeatured(project.id)"><strong>{{ project.displayName || project.name }}</strong><span>{{ project.category }}</span></button></nav>
        <ProjectShowcase v-for="project in showcaseProjects" v-show="selectedFeatured === project.id" :key="project.id" :project="project" />
      </div></section>

      <section id="projects" class="projects-section"><div class="page-width">
        <header class="section-heading"><div><p class="kicker">Engineering Experience</p><h2>软件之外，还有现场。</h2></div><a :href="resumeUrl" download>完整经历见简历 <v-icon icon="mdi-arrow-down" /></a></header>
        <article v-for="project in projects" :id="`project-${project.number}`" :key="project.number" class="project-row" :class="`project-${project.number}`">
          <div class="project-number">{{ project.number }}</div>
          <div class="project-copy"><p class="project-eyebrow">{{ project.eyebrow }}</p><h3>{{ project.title }}</h3><p>{{ project.summary }}</p>
            <div class="tag-list"><span v-for="tag in project.tags" :key="tag">{{ tag }}</span></div>
            <details><summary>了解这个项目 <v-icon icon="mdi-arrow-right" /></summary><ul><li v-for="item in project.highlights" :key="item">{{ item }}</li></ul></details>
          </div>
          <figure class="project-media"><img :src="project.image" :alt="project.alt" loading="lazy" /></figure>
          <div class="project-aside"><span v-for="word in project.aside" :key="word">{{ word }}</span></div>
        </article>
      </div></section>

      <section id="capability" class="capability-section"><div class="page-width">
        <header class="section-heading compact"><div><p class="kicker">Tech Stack</p><h2>技术能力</h2></div><p>多领域融合的工程能力，解决复杂问题的系统化思维</p></header>
        <div class="capability-grid" aria-label="工程实践与 AI 增效能力">
          <article v-for="node in capabilityNodes" :key="node[1]" class="capability-item"><v-icon :icon="node[0]" /><div><h3>{{ node[1] }}</h3><p>{{ node[2] }}</p></div></article>
        </div>
      </div></section>

      <section id="experience" class="experience-section"><details class="page-width career-more">
        <summary>查看职业轨迹 <v-icon icon="mdi-chevron-down" /></summary>
        <header class="section-heading compact"><div><p class="kicker">Career Path</p><h2>职业轨迹</h2></div><p>持续积累，在实践中成长</p></header>
        <div class="timeline"><article v-for="(item, index) in timeline" :key="item[0]" :class="{ active: index === timeline.length - 1 }"><div class="timeline-dot"></div><strong>{{ item[0] }}</strong><h3>{{ item[1] }}</h3><p>{{ item[2] }}</p></article></div>
      </details></section>

      <section id="contact" class="closing-section"><div class="page-width closing-content">
        <p class="kicker">Let's Talk Engineering</p><h2>聊聊你的<em>技术岗位。</em></h2>
        <p>系统软件、C++ 桌面应用与工业软件研发。欢迎交流岗位需求、项目经历与实现细节。</p>
        <address class="contact-details">
          <a :href="`tel:${siteContent.hero.phone}`"><v-icon icon="mdi-phone-outline" /><span><small>电话</small><strong>{{ siteContent.hero.phone }}</strong></span></a>
          <a :href="`mailto:${siteContent.hero.email}`"><v-icon icon="mdi-email-outline" /><span><small>邮箱</small><strong>{{ siteContent.hero.email }}</strong></span></a>
        </address>
        <div class="hero-actions"><a class="button button-primary" :href="`mailto:${siteContent.hero.email}`"><v-icon icon="mdi-email-outline" /> 联系我</a><a class="button button-ghost" :href="resumeUrl" download="彭辉-系统软件工程师-简历.pdf"><v-icon icon="mdi-download-outline" /> 下载简历</a></div>
      </div></section>
    </main>
    <footer class="site-footer"><div class="page-width"><strong>Peng Hui</strong><span>Engineering clarity for complex systems.</span><small>© 2026 Aurora Precision Lab</small></div></footer>
  </div></v-app>
</template>
