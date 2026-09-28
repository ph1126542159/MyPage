<script setup>
import { computed, ref } from 'vue'
import { siteContent } from './data/siteContent'

const navItems = [
  { label: '首页', href: '#hero' },
  { label: '项目实践', href: '#projects' },
  { label: '技术能力', href: '#capability' },
  { label: '工作经历', href: '#experience' },
  { label: '联系我', href: '#contact' },
]

const featuredProjects = computed(() => [0, 1, 3].map((index) => siteContent.signatureProjects[index]))
const activeCapability = ref(0)
const menuOpen = ref(false)
const resumeUrl = `${import.meta.env.BASE_URL}resume/Peng-Hui-Resume.pdf`

const capabilityTabs = [
  {
    label: '核心技术',
    items: [
      ['C/C++', '系统编程 · 性能 · 工程化'],
      ['Linux', '嵌入式开发 · 驱动 · 调试'],
      ['Windows 桌面', 'Qt / Win32 · 工业软件'],
      ['通信与中间件', 'Fast-DDS · RPC · Socket'],
      ['工业设备', '采集 · 控制 · 视觉检测'],
      ['AI 辅助工程', 'Agent · Skill · 自动化'],
    ],
  },
  {
    label: '工程实践',
    items: [
      ['系统架构', '多进程 · 多线程 · 共享内存'],
      ['嵌入式平台', 'Rockchip · ARM · RTOS'],
      ['设备联调', '串口 · 相机 · 传感器 · 板卡'],
      ['3D / 视觉', 'Qt3D · OpenGL · OpenCV'],
      ['质量体系', '测试 · CI/CD · Code Review'],
      ['交付闭环', '需求 · 实现 · 验证 · 发布'],
    ],
  },
  {
    label: 'AI 应用',
    items: [
      ['需求拆解', '从目标到约束与验收标准'],
      ['Agent 编排', '任务路由与多角色协作'],
      ['Prompt 工程', '稳定、可复用的任务指令'],
      ['自动化测试', '生成 · 回归 · 证据留存'],
      ['代码审查', '风险识别与修复闭环'],
      ['部署回归', '构建 · 发布 · 线上验证'],
    ],
  },
]

const projectImage = (project) => {
  const media = project.media?.[0]
  return media?.type === 'video' ? media.poster : media?.src
}
</script>

<template>
  <v-app>
    <div class="site-shell">
      <header class="site-header">
        <a class="brand" href="#hero" aria-label="返回首页">
          <strong>Peng Hui</strong>
          <span>Aurora Precision Lab</span>
        </a>
        <nav class="desktop-nav" aria-label="页面导航">
          <a v-for="item in navItems" :key="item.href" :href="item.href">{{ item.label }}</a>
        </nav>
        <a class="header-contact" :href="`mailto:${siteContent.hero.email}`">联系我</a>
        <button class="menu-button" type="button" aria-label="打开导航" @click="menuOpen = !menuOpen">
          <v-icon :icon="menuOpen ? 'mdi-close' : 'mdi-menu'" />
        </button>
        <nav v-if="menuOpen" class="mobile-nav" aria-label="移动端导航">
          <a v-for="item in navItems" :key="item.href" :href="item.href" @click="menuOpen = false">
            {{ item.label }}
          </a>
        </nav>
      </header>

      <main>
        <section id="hero" class="hero">
          <div class="hero-atmosphere" aria-hidden="true"></div>
          <div class="page-width hero-grid">
            <div class="hero-copy">
              <p class="kicker">工程 × 机器人 × 工业产品 × AI</p>
              <h1>用工程与智能<br />让复杂问题变得简单</h1>
              <p class="hero-lead">
                13+ 年 C/C++ 开发经验，专注 Linux、嵌入式系统、Windows 桌面应用、工业设备与三维工程软件。
                结合 AI 工作流，打造高效率、更可靠的工程解决方案。
              </p>
              <div class="hero-actions">
                <a class="button button-primary" href="#projects">查看我的项目 <v-icon icon="mdi-arrow-right" /></a>
                <a class="button button-ghost" :href="resumeUrl" download="彭辉-系统软件工程师-简历.pdf">
                  <v-icon icon="mdi-download-outline" /> 下载简历
                </a>
                <a class="button button-ghost" :href="`mailto:${siteContent.hero.email}`">
                  <v-icon icon="mdi-email-outline" /> 联系我
                </a>
              </div>
            </div>
            <div class="hero-portrait-wrap">
              <img :src="siteContent.hero.portrait" alt="彭辉正式形象照" class="hero-portrait" />
              <div class="identity-card">
                <strong>彭辉</strong>
                <span>Peng Hui</span>
                <i></i>
                <p>专注工程落地<br />连接真实世界</p>
              </div>
            </div>
          </div>
          <div class="proof-rail">
            <div class="page-width proof-grid">
              <div v-for="stat in siteContent.hero.stats" :key="stat.label" class="proof-item">
                <strong>{{ stat.value }}</strong><span>{{ stat.label }}</span>
              </div>
              <div class="proof-item"><strong>AI × 工程</strong><span>提效与创新</span></div>
            </div>
          </div>
        </section>

        <section id="projects" class="section projects-section">
          <div class="page-width">
            <header class="section-heading">
              <div><p class="kicker">Featured Projects</p><h2>精选项目实践</h2></div>
              <p>真实项目 · 真实场景 · 真实代码 · 真实结果</p>
            </header>
            <article v-for="(project, index) in featuredProjects" :key="project.title" class="project-row">
              <div class="project-index">0{{ index + 1 }}</div>
              <div class="project-media">
                <img :src="projectImage(project)" :alt="project.media?.[0]?.label || project.title" loading="lazy" />
              </div>
              <div class="project-copy">
                <p class="project-meta">{{ project.company }} <span>{{ project.period }}</span></p>
                <h3>{{ project.title }}</h3>
                <p>{{ project.summary }}</p>
                <div class="tag-list" aria-label="技术标签">
                  <span v-for="tag in project.stack" :key="tag">{{ tag }}</span>
                </div>
                <details>
                  <summary>了解这个项目 <v-icon icon="mdi-arrow-right" /></summary>
                  <ul><li v-for="item in project.highlights" :key="item">{{ item }}</li></ul>
                </details>
              </div>
            </article>
          </div>
        </section>

        <section id="capability" class="section capability-section">
          <div class="page-width">
            <header class="section-heading">
              <div><p class="kicker">Tech Stack</p><h2>技术能力</h2></div>
              <p>多领域融合的工程能力，解决复杂问题的系统化思维</p>
            </header>
            <div class="capability-tabs" role="tablist" aria-label="能力分类">
              <button
                v-for="(tab, index) in capabilityTabs"
                :key="tab.label"
                type="button"
                role="tab"
                :aria-selected="activeCapability === index"
                :class="{ active: activeCapability === index }"
                @click="activeCapability = index"
              >{{ tab.label }}</button>
            </div>
            <div class="capability-grid">
              <div v-for="item in capabilityTabs[activeCapability].items" :key="item[0]" class="capability-item">
                <strong>{{ item[0] }}</strong><span>{{ item[1] }}</span>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" class="section experience-section">
          <div class="page-width">
            <header class="section-heading">
              <div><p class="kicker">Career Timeline</p><h2>职业轨迹</h2></div>
              <p>持续深耕，在真实项目中成长</p>
            </header>
            <div class="timeline">
              <article v-for="item in siteContent.experiences" :key="`${item.company}-${item.period}`">
                <span class="timeline-dot"></span>
                <time>{{ item.period }}</time>
                <strong>{{ item.company }}</strong>
                <em>{{ item.role }}</em>
                <p>{{ item.summary }}</p>
              </article>
            </div>
          </div>
        </section>

        <section id="ai" class="section ai-section">
          <div class="page-width">
            <header class="section-heading">
              <div><p class="kicker">AI Workflow</p><h2>把 AI 变成工程交付能力</h2></div>
              <p>{{ siteContent.aiWorkflow.intro }}</p>
            </header>
            <ol class="workflow-list">
              <li v-for="(card, index) in siteContent.aiWorkflow.cards" :key="card.title">
                <span>0{{ index + 1 }}</span><v-icon :icon="card.icon" /><strong>{{ card.title }}</strong><p>{{ card.text }}</p>
              </li>
            </ol>
          </div>
        </section>

        <section id="contact" class="contact-section">
          <div class="contact-atmosphere" aria-hidden="true"></div>
          <div class="page-width contact-inner">
            <div>
              <p class="kicker">Let's Build Together</p>
              <h2>一起让有价值的想法落地</h2>
              <p>如果你正在寻找兼具工程深度、系统思维和创新精神的合作伙伴，欢迎与我联系。</p>
            </div>
            <div class="contact-actions">
              <a class="button button-primary" :href="`mailto:${siteContent.hero.email}`">联系我 <v-icon icon="mdi-arrow-right" /></a>
              <a :href="`tel:${siteContent.hero.phone}`"><v-icon icon="mdi-phone-outline" /> {{ siteContent.hero.phone }}</a>
              <a :href="`mailto:${siteContent.hero.email}`"><v-icon icon="mdi-email-outline" /> {{ siteContent.hero.email }}</a>
            </div>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <div class="page-width"><span>Peng Hui · Aurora Precision Lab</span><span>工程为本 · 持续学习 · 拥抱 AI</span></div>
      </footer>
    </div>
  </v-app>
</template>
