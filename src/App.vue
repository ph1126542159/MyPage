<script setup>
import { siteContent } from './data/siteContent'

const navItems = [
  { label: '项目成果', href: '#projects' },
  { label: '职业经历', href: '#experience' },
  { label: '能力体系', href: '#capability' },
  { label: 'AI 方法', href: '#ai' },
  { label: '联系我', href: '#contact' },
]
</script>

<template>
  <v-app>
    <div class="app-shell">
      <v-app-bar class="top-bar px-4" flat>
        <div class="nav-brand">
          <span class="nav-brand__title">Penghui / Builder</span>
          <span class="nav-brand__subtitle">万能型工程师 + AI 驱动开发者</span>
        </div>
        <v-spacer />
        <div class="nav-links d-none d-md-flex">
          <v-btn
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            color="primary"
            variant="text"
          >
            {{ item.label }}
          </v-btn>
        </div>
        <v-btn
          class="ml-2"
          color="primary"
          :href="`mailto:${siteContent.hero.email}`"
          prepend-icon="mdi-send-outline"
        >
          立即联系
        </v-btn>
      </v-app-bar>

      <v-main>
        <section id="hero" class="hero-section">
          <v-container>
            <v-card class="hero-card pa-6 pa-md-10">
              <v-row align="center" class="hero-layout">
                <v-col cols="12" md="7" class="pr-md-10">
                  <div class="eyebrow">{{ siteContent.hero.tagline }}</div>
                  <h1 class="display-title">
                    <span>{{ siteContent.hero.name }}</span>
                    {{ siteContent.hero.role }}
                  </h1>
                  <p class="hero-subtitle">
                    {{ siteContent.hero.subtitle }}
                  </p>

                  <div class="chip-row">
                    <v-chip
                      v-for="tag in siteContent.hero.tags"
                      :key="tag"
                      class="glass-chip"
                      color="primary"
                      size="small"
                      variant="outlined"
                    >
                      {{ tag }}
                    </v-chip>
                  </div>

                  <div class="hero-cta">
                    <v-btn color="primary" size="large" href="#projects" prepend-icon="mdi-rocket-launch-outline">
                      查看项目成果
                    </v-btn>
                    <v-btn
                      color="primary"
                      size="large"
                      variant="tonal"
                      :href="`tel:${siteContent.hero.phone}`"
                      prepend-icon="mdi-phone-outline"
                    >
                      {{ siteContent.hero.phone }}
                    </v-btn>
                    <v-btn
                      size="large"
                      variant="outlined"
                      :href="`mailto:${siteContent.hero.email}`"
                      prepend-icon="mdi-email-outline"
                    >
                      {{ siteContent.hero.email }}
                    </v-btn>
                  </div>

                  <p class="hero-signature">
                    用复杂系统交付能力做底座，用 AI 协同能力放大研发效率，把想法持续做成可运行、可部署、可维护的真实产品。
                  </p>

                  <div class="stats-grid">
                    <v-sheet
                      v-for="stat in siteContent.hero.stats"
                      :key="stat.label"
                      class="stat-tile"
                      rounded="xl"
                    >
                      <strong>{{ stat.value }}</strong>
                      <span>{{ stat.label }}</span>
                    </v-sheet>
                  </div>
                </v-col>

                <v-col cols="12" md="5">
                  <div class="hero-visual">
                    <div class="hero-visual__stage">
                      <div class="portrait-frame">
                        <v-img
                          :src="siteContent.hero.portrait"
                          alt="彭辉正式形象照"
                          class="hero-portrait-image"
                          cover
                          aspect-ratio="4/5"
                        />
                      </div>
                    </div>

                    <v-card class="floating-signal glass-card">
                      <div class="floating-signal__label">Current Signal</div>
                      <div class="floating-signal__text">
                        真实项目履历覆盖嵌入式、工业设备、桌面端、视觉检测、通信与系统架构；
                        页面表达再叠加 AI 协同方式，形成现代程序员的完整能力画像。
                      </div>
                    </v-card>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-container>
        </section>

        <section class="section-shell">
          <v-container>
            <div class="section-head">
              <div class="eyebrow">About</div>
              <h2 class="section-title">不只是写代码，更是把系统做成产品</h2>
              <p class="section-copy">
                这不是一份传统意义上的“技术清单”。它更像一个完整职业画像：从复杂设备软件到现代 AI 协同开发，我希望页面传递的是“能独立落地复杂系统，也能借助 AI 放大交付效率”的能力结构。
              </p>
            </div>

            <v-row>
              <v-col cols="12" md="7">
                <v-card class="story-card mb-4">
                  <h3>职业叙事</h3>
                  <p
                    v-for="paragraph in siteContent.introduction.paragraphs"
                    :key="paragraph"
                    class="mb-4"
                  >
                    {{ paragraph }}
                  </p>
                </v-card>

                <v-card class="story-card">
                  <h3>正在强化的技术主线</h3>
                  <div class="story-list">
                    <div
                      v-for="thread in siteContent.introduction.specialThreads"
                      :key="thread"
                      class="story-list-item"
                    >
                      <v-icon color="primary" icon="mdi-check-decagram-outline" />
                      <span>{{ thread }}</span>
                    </div>
                  </div>
                </v-card>
              </v-col>

              <v-col cols="12" md="5">
                <div class="pillars-grid">
                  <v-card
                    v-for="card in siteContent.introduction.focusCards"
                    :key="card.title"
                    class="story-card"
                  >
                    <v-icon :icon="card.icon" color="primary" size="30" />
                    <h3 class="mt-4">{{ card.title }}</h3>
                    <p>{{ card.text }}</p>
                  </v-card>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </section>

        <section id="projects" class="section-shell">
          <v-container>
            <div class="section-head">
              <div class="eyebrow">Signature Work</div>
              <h2 class="section-title">项目成果与产品落地</h2>
              <p class="section-copy">
                页面内容完整覆盖简历中的代表产品和项目经历，并把图片、视频、软件界面、板卡与现场照片一起组合成“真实落地证据”。
              </p>
            </div>

            <div class="project-grid">
              <v-card
                v-for="(project, index) in siteContent.signatureProjects"
                :key="project.title"
                class="project-card"
                :class="project.media.length > 1 ? 'project-card--wide' : 'project-card--tall'"
              >
                <div class="project-brandline">
                  <span class="project-index">{{ String(index + 1).padStart(2, '0') }}</span>
                  <span class="project-brandtext">Flagship Delivery</span>
                </div>
                <div class="meta-line">
                  <span>{{ project.company }}</span>
                  <span>{{ project.period }}</span>
                </div>
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-summary">{{ project.summary }}</p>

                <div class="project-stack">
                  <v-chip
                    v-for="item in project.stack"
                    :key="item"
                    color="primary"
                    size="small"
                    variant="outlined"
                  >
                    {{ item }}
                  </v-chip>
                </div>

                <ul class="bullet-list">
                  <li v-for="point in project.highlights" :key="point">
                    {{ point }}
                  </li>
                </ul>

                <div class="project-media">
                  <div v-for="media in project.media" :key="media.src" class="media-box">
                    <template v-if="media.type === 'video'">
                      <video :poster="media.poster" class="project-video" controls preload="metadata">
                        <source :src="media.src" type="video/mp4" />
                      </video>
                    </template>
                    <template v-else>
                      <v-img :src="media.src" :alt="media.label" class="project-image" cover />
                    </template>
                    <div class="media-caption">{{ media.label }}</div>
                  </div>
                </div>
              </v-card>
            </div>

            <div class="section-head mt-8">
              <div class="eyebrow">Evidence</div>
              <h2 class="section-title">人物、现场、设备与团队气质</h2>
              <p class="section-copy">
                除了产品结果，我也希望页面能保留职业现场感，让“万能型工程师”不是抽象形容词，而是有清晰人物和环境支撑的职业形象。
              </p>
            </div>

            <div class="gallery-grid">
              <v-card
                v-for="item in siteContent.evidenceGallery"
                :key="item.title"
                class="gallery-card"
              >
                <img :src="item.image" :alt="item.title" class="gallery-image" />
                <div class="gallery-card__body">
                  <div class="gallery-card__title">{{ item.title }}</div>
                  <div class="section-copy">{{ item.text }}</div>
                </div>
              </v-card>
            </div>
          </v-container>
        </section>

        <section id="experience" class="section-shell">
          <v-container>
            <div class="section-head">
              <div class="eyebrow">Timeline</div>
              <h2 class="section-title">职业经历全覆盖</h2>
              <p class="section-copy">
                这里完整承接《彭辉简历.docx》中的工作履历，并保留各阶段负责系统、职责范围和代表性交付内容。
              </p>
            </div>

            <div class="timeline">
              <v-card
                v-for="experience in siteContent.experiences"
                :key="`${experience.company}-${experience.period}`"
                class="experience-card"
              >
                <div class="experience-head">
                  <div>
                    <div class="experience-company">{{ experience.company }}</div>
                    <div class="experience-role">{{ experience.team }} / {{ experience.role }}</div>
                  </div>
                  <div class="experience-period">{{ experience.period }}</div>
                </div>

                <p class="mb-4">{{ experience.summary }}</p>

                <ul class="bullet-list">
                  <li v-for="detail in experience.details" :key="detail">
                    {{ detail }}
                  </li>
                </ul>
              </v-card>
            </div>
          </v-container>
        </section>

        <section id="capability" class="section-shell">
          <v-container>
            <div class="section-head">
              <div class="eyebrow">Capability System</div>
              <h2 class="section-title">现代程序员的万能型能力矩阵</h2>
              <p class="section-copy">
                这一部分完整吸收《编程语言与核心技术栈（基础必备）》内容，并转成更适合网页阅读与职业表达的结构。
              </p>
            </div>

            <v-card class="capability-note rounded-xl">
              {{ siteContent.capabilityFramework.boundary }}
            </v-card>

            <v-expansion-panels variant="accordion">
              <v-expansion-panel
                v-for="group in siteContent.capabilityFramework.groups"
                :key="group.title"
                class="capability-panel"
              >
                <v-expansion-panel-title>
                  <v-icon :icon="group.icon" class="mr-3" color="primary" />
                  {{ group.title }}
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <div class="capability-bridge">{{ group.bridge }}</div>

                  <template v-if="group.items">
                    <div class="capability-list">
                      <div v-for="item in group.items" :key="item.name" class="capability-row">
                        <div class="capability-row__head">
                          <div class="capability-row__name">{{ item.name }}</div>
                          <div v-if="item.level" class="capability-row__level">{{ item.level }}</div>
                        </div>
                        <div class="capability-row__detail">{{ item.detail }}</div>
                      </div>
                    </div>
                  </template>

                  <template v-else>
                    <div class="summary-grid">
                      <div v-for="item in group.summary" :key="item.name" class="summary-tile">
                        <strong>{{ item.name }}</strong>
                        <div class="capability-row__detail">{{ item.detail }}</div>
                      </div>
                    </div>
                  </template>

                  <div v-if="group.closing" class="capability-closing">
                    {{ group.closing }}
                  </div>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-container>
        </section>

        <section id="ai" class="section-shell">
          <v-container>
            <div class="section-head">
              <div class="eyebrow">AI Workflow</div>
              <h2 class="section-title">把 AI 从工具升级为交付方法</h2>
              <p class="section-copy">
                {{ siteContent.aiWorkflow.intro }}
              </p>
            </div>

            <v-row>
              <v-col
                v-for="card in siteContent.aiWorkflow.cards"
                :key="card.title"
                cols="12"
                md="6"
                lg="3"
              >
                <v-card class="ai-card">
                  <v-icon :icon="card.icon" color="primary" size="30" />
                  <h3 class="mt-4">{{ card.title }}</h3>
                  <p>{{ card.text }}</p>
                </v-card>
              </v-col>
            </v-row>

            <v-card class="contact-card mt-6">
              <div class="eyebrow mb-2">Toolset</div>
              <h3>{{ siteContent.aiWorkflow.title }}</h3>
              <p>
                这套能力组合会让项目从“一个人写代码”升级为“一个人组织系统 + AI 协同 + 自动化交付”。
              </p>
              <div class="toolbox">
                <div v-for="tool in siteContent.aiWorkflow.toolset" :key="tool" class="tool-chip">
                  {{ tool }}
                </div>
              </div>
            </v-card>
          </v-container>
        </section>

        <section id="contact" class="section-shell">
          <v-container>
            <div class="contact-grid">
              <v-row>
                <v-col cols="12" md="7">
                  <v-card class="contact-card h-100">
                    <div class="eyebrow mb-2">Education & Contact</div>
                    <h3>继续合作或进一步沟通</h3>
                    <p>
                      如果你需要的是一个既懂底层系统、又能落地产品、还能把现代 AI 工作流融入工程体系的人，这页内容已经尽可能完整地展示了我的履历与能力结构。
                    </p>
                    <div class="contact-line">
                      <v-icon icon="mdi-map-marker-outline" color="primary" />
                      <span>{{ siteContent.hero.location }}</span>
                    </div>
                    <div class="contact-line">
                      <v-icon icon="mdi-phone-outline" color="primary" />
                      <a :href="`tel:${siteContent.hero.phone}`">{{ siteContent.hero.phone }}</a>
                    </div>
                    <div class="contact-line">
                      <v-icon icon="mdi-email-outline" color="primary" />
                      <a :href="`mailto:${siteContent.hero.email}`">{{ siteContent.hero.email }}</a>
                    </div>
                    <div class="contact-line">
                      <v-icon icon="mdi-school-outline" color="primary" />
                      <span>
                        {{ siteContent.education.school }} · {{ siteContent.education.major }} ·
                        {{ siteContent.education.degree }}（{{ siteContent.education.period }}）
                      </span>
                    </div>
                  </v-card>
                </v-col>

                <v-col cols="12" md="5">
                  <v-card class="contact-card h-100">
                    <v-img
                      :src="siteContent.footer.contactImage"
                      alt="彭辉生活照"
                      class="contact-image"
                      cover
                      aspect-ratio="4/5"
                      rounded="xl"
                    />
                    <div class="footer-note">
                      {{ siteContent.footer.note }}
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </v-container>
        </section>
      </v-main>
    </div>
  </v-app>
</template>
