<script setup>
import { ref } from 'vue'
import { siteContent } from './data/siteContent'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`
const menuOpen = ref(false)
const resumeUrl = asset('resume/Peng-Hui-Resume.pdf')

const navItems = [
  ['首页', '#hero'], ['关于我', '#about'], ['项目实践', '#projects'],
  ['技术能力', '#capability'], ['工作经历', '#experience'], ['联系我', '#contact'],
]
const proofItems = [
  ['13+', '年工程经验'], ['C/C++', '核心开发语言'], ['Linux', '嵌入式开发'],
  ['Windows', '桌面应用'], ['机器人', '系统集成'], ['工业产品', '从 0 到 1 落地'], ['AI × 工程', '提效与创新'],
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
  {
    number: '02', eyebrow: '数字孪生 / 尺寸工程 / C++ 桌面端', title: 'OpenDVA / 3DCS 尺寸变差分析平台',
    summary: '面向复杂装配的尺寸变差分析与数字孪生验证平台，以 3D 装配、公差建模和统计仿真支撑制造决策。',
    image: asset('media/products/opendva-3dcs-forge.png'), alt: 'OpenDVA 3DCS 尺寸变差分析平台界面',
    tags: ['3D 装配与工程树', 'GD&T 公差与测量', 'Monte Carlo 仿真', 'AAO 优化', '批处理与报告'],
    highlights: ['在三维场景中组织零部件、工位、夹具与变差链', '通过公差、测量和 Monte Carlo 仿真评估装配波动', '支持优化探索、批量计算以及工程报告输出'],
    aside: ['DIGITAL', 'TWIN', 'ENGINEERING'],
  },
  {
    number: '03', eyebrow: 'AI × 工程效率', title: 'AI 辅助的工程开发实践',
    summary: '在实际项目中引入 AI 工具，提升代码开发、问题定位、文档编写与测试效率，探索 AI 与工程融合的最佳实践。',
    image: asset('media/products/robot-debug.jpg'), alt: '工程软件开发与设备调试现场',
    tags: ['AI 工具', '工程效率', '自动化', '代码质量'],
    highlights: ['将复杂需求拆分为可验证的工程任务', '让 AI 参与代码审查、测试补强与文档沉淀', '把构建、发布和回归验证组织成稳定流程'],
    aside: ['AI', 'EMPOWERS', 'ENGINEERS'],
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
</script>

<template>
  <v-app><div class="site-shell" :style="{ '--aurora-bg': `url(${asset('media/aurora-lab-bg.png')})` }">
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="#hero"><strong>Peng Hui</strong><span>Aurora Precision Lab</span></a>
        <nav class="desktop-nav" aria-label="页面导航"><a v-for="item in navItems" :key="item[1]" :href="item[1]">{{ item[0] }}</a></nav>
        <button class="menu-button" type="button" :aria-expanded="menuOpen" aria-label="切换导航" @click="menuOpen = !menuOpen"><v-icon :icon="menuOpen ? 'mdi-close' : 'mdi-menu'" /></button>
      </div>
      <nav v-if="menuOpen" class="mobile-nav"><a v-for="item in navItems" :key="item[1]" :href="item[1]" @click="menuOpen = false">{{ item[0] }}</a></nav>
    </header>

    <main>
      <section id="hero" class="hero">
        <div class="hero-grid page-width">
          <div class="hero-copy">
            <p class="kicker">工程 × 机器人 × 工业产品 × AI</p>
            <h1>用工程与智能<br />让复杂问题变得简单</h1>
            <p class="hero-lead">13+ 年 C/C++ 开发经验，专注于 Linux、嵌入式系统、Windows 桌面应用、机器人与工业产品。结合 AI 工具，打造更高效率、更可靠的工程解决方案。</p>
            <div class="hero-actions">
              <a class="button button-primary" href="#projects">查看我的项目 <v-icon icon="mdi-arrow-right" /></a>
              <a class="button button-ghost" :href="resumeUrl" download="彭辉-系统软件工程师-简历.pdf"><v-icon icon="mdi-download-outline" /> 下载简历</a>
            </div>
          </div>
          <img class="hero-portrait" :src="asset('media/photos/profile-formal-cutout.png')" alt="彭辉正式形象照" />
          <div class="hero-identity"><strong>彭 辉</strong><span>Peng Hui</span><i></i><p>专注工程落地<br />连接真实世界</p></div>
        </div>
        <div id="about" class="proof-rail"><div class="proof-grid page-width"><div v-for="item in proofItems" :key="item[0]" class="proof-item"><strong>{{ item[0] }}</strong><span>{{ item[1] }}</span></div></div></div>
      </section>

      <section id="projects" class="projects-section"><div class="page-width">
        <header class="section-heading"><div><p class="kicker">Selected Work</p><h2>精选项目实践</h2></div><p>真实项目 · 真实场景 · 真实代码 · 真实结果</p><a href="#project-02">查看重点项目 <v-icon icon="mdi-arrow-right" /></a></header>
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
        <div class="orbit-map" aria-label="工程实践与 AI 增效能力图">
          <div class="orbit-ring orbit-one"></div><div class="orbit-ring orbit-two"></div>
          <div class="orbit-core"><span>工程实践</span><b>×</b><strong>AI 增效</strong><small>更高效地解决<br />真实世界的问题</small></div>
          <div v-for="node in capabilityNodes" :key="node[1]" class="orbit-node" :class="node[3]"><i><v-icon :icon="node[0]" /></i><div><strong>{{ node[1] }}</strong><span>{{ node[2] }}</span></div></div>
        </div>
      </div></section>

      <section id="experience" class="experience-section"><div class="page-width">
        <header class="section-heading compact"><div><p class="kicker">Career Path</p><h2>职业轨迹</h2></div><p>持续积累，在实践中成长</p></header>
        <div class="timeline"><article v-for="(item, index) in timeline" :key="item[0]" :class="{ active: index === timeline.length - 1 }"><div class="timeline-dot"></div><strong>{{ item[0] }}</strong><h3>{{ item[1] }}</h3><p>{{ item[2] }}</p></article></div>
      </div></section>

      <section id="contact" class="closing-section"><div class="page-width closing-content">
        <p class="kicker">Build · Solve · Automate · Together</p><h2>把复杂问题，变成可落地的答案</h2>
        <p>如果你正在寻找一位懂系统、懂产品，也懂如何用 AI 提升工程效率的开发者，欢迎联系我。</p>
        <div class="hero-actions"><a class="button button-primary" :href="`mailto:${siteContent.hero.email}`"><v-icon icon="mdi-email-outline" /> 联系我</a><a class="button button-ghost" :href="resumeUrl" download="彭辉-系统软件工程师-简历.pdf"><v-icon icon="mdi-download-outline" /> 下载简历</a></div>
      </div></section>
    </main>
    <footer class="site-footer"><div class="page-width"><strong>Peng Hui</strong><span>Engineering clarity for complex systems.</span><small>© 2026 Aurora Precision Lab</small></div></footer>
  </div></v-app>
</template>
