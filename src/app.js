import { siteContent } from './data/siteContent.js'

const navItems = [
  { label: '项目成果', href: '#projects' },
  { label: '职业经历', href: '#experience' },
  { label: '能力体系', href: '#capability' },
  { label: 'AI 方法', href: '#ai' },
  { label: '联系我', href: '#contact' },
]

const copy = {
  about:
    '这不是一份传统意义上的“技术清单”。它更像一个完整职业画像：从复杂设备软件到现代 AI 协同开发，我希望页面传递的是“能独立落地复杂系统，也能够借助 AI 放大交付效率”的能力结构。',
  heroSignature:
    '用复杂系统交付能力做底座，用 AI 协同能力放大研发效率，把想法持续做成可运行、可部署、可维护的真实产品。',
  projects:
    '页面内容完整覆盖简历中的代表产品和项目经历，并把图片、视频、软件界面、板卡与现场照片一起组合成“真实落地证据”。',
  evidence:
    '除了产品结果，我也希望页面能保留职业现场感，让“万能型工程师”不是抽象形容词，而是有清晰人物和环境支撑的职业形象。',
  experience:
    '这里完整承接《彭辉简历.docx》中的工作履历，并保留各阶段负责系统、职责范围和代表性交付内容。',
  capability:
    '这一部分完整吸收《编程语言与核心技术栈（基础必备）》内容，并转成更适合网页阅读与职业表达的结构。',
  aiOutro:
    '这套能力组合会让项目从“一个人写代码”升级为“一个人组织系统 + AI 协同 + 自动化交付”。',
  contact:
    '如果你需要的是一个既懂底层系统、又能落地产品、还能把现代 AI 工作流融入工程体系的人，这页内容已经尽可能完整地展示了我的履历与能力结构。',
  signal:
    '真实项目履历覆盖嵌入式、工业设备、桌面端、视觉检测、通信与系统架构；页面表达再叠加 AI 协同方式，形成现代程序员的完整能力画像。',
}

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

const iconLabel = (index, prefix) => `${prefix} ${String(index + 1).padStart(2, '0')}`

const renderTags = (items) => items.map((item) => `<span class="chip">${escapeHtml(item)}</span>`).join('')

const renderStats = (items) =>
  items
    .map(
      (stat) => `
        <article class="stat-tile">
          <strong>${escapeHtml(stat.value)}</strong>
          <span>${escapeHtml(stat.label)}</span>
        </article>
      `,
    )
    .join('')

const renderStoryThreads = (items) =>
  items
    .map(
      (item) => `
        <div class="story-list-item">
          <span class="story-list-item__dot"></span>
          <span>${escapeHtml(item)}</span>
        </div>
      `,
    )
    .join('')

const renderFocusCards = (items) =>
  items
    .map(
      (item, index) => `
        <article class="story-card pillar-card">
          <div class="card-kicker">${iconLabel(index, 'Pillar')}</div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `,
    )
    .join('')

const renderProjectMedia = (items) =>
  items
    .map((media) => {
      const caption = escapeHtml(media.label)
      const src = escapeHtml(media.src)

      if (media.type === 'video') {
        const poster = escapeHtml(media.poster)

        return `
          <figure class="media-box">
            <video class="project-video" controls preload="metadata" poster="${poster}">
              <source src="${src}" type="video/mp4" />
            </video>
            <figcaption class="media-caption">${caption}</figcaption>
          </figure>
        `
      }

      return `
        <figure class="media-box">
          <img class="project-image" src="${src}" alt="${caption}" loading="lazy" />
          <figcaption class="media-caption">${caption}</figcaption>
        </figure>
      `
    })
    .join('')

const renderHighlights = (items) => items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')

const renderProjects = (items) =>
  items
    .map(
      (project, index) => `
        <article class="project-card ${project.media.length > 1 ? 'project-card--wide' : 'project-card--tall'}">
          <div class="project-brandline">
            <span class="project-index">${String(index + 1).padStart(2, '0')}</span>
            <span class="project-brandtext">Flagship Delivery</span>
          </div>
          <div class="meta-line">
            <span>${escapeHtml(project.company)}</span>
            <span>${escapeHtml(project.period)}</span>
          </div>
          <h3 class="project-title">${escapeHtml(project.title)}</h3>
          <p class="project-summary">${escapeHtml(project.summary)}</p>
          <div class="project-stack">${renderTags(project.stack)}</div>
          <ul class="bullet-list">${renderHighlights(project.highlights)}</ul>
          <div class="project-media">${renderProjectMedia(project.media)}</div>
        </article>
      `,
    )
    .join('')

const renderGallery = (items) =>
  items
    .map(
      (item) => `
        <article class="gallery-card">
          <img class="gallery-image" src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" loading="lazy" />
          <div class="gallery-card__body">
            <div class="gallery-card__title">${escapeHtml(item.title)}</div>
            <div class="section-copy">${escapeHtml(item.text)}</div>
          </div>
        </article>
      `,
    )
    .join('')

const renderExperiences = (items) =>
  items
    .map(
      (item) => `
        <article class="experience-card">
          <div class="experience-head">
            <div>
              <div class="experience-company">${escapeHtml(item.company)}</div>
              <div class="experience-role">${escapeHtml(item.team)} / ${escapeHtml(item.role)}</div>
            </div>
            <div class="experience-period">${escapeHtml(item.period)}</div>
          </div>
          <p>${escapeHtml(item.summary)}</p>
          <ul class="bullet-list">${renderHighlights(item.details)}</ul>
        </article>
      `,
    )
    .join('')

const renderCapabilityItems = (items) =>
  items
    .map(
      (item) => `
        <div class="capability-row">
          <div class="capability-row__head">
            <div class="capability-row__name">${escapeHtml(item.name)}</div>
            ${item.level ? `<div class="capability-row__level">${escapeHtml(item.level)}</div>` : ''}
          </div>
          <div class="capability-row__detail">${escapeHtml(item.detail)}</div>
        </div>
      `,
    )
    .join('')

const renderCapabilitySummaries = (items) =>
  items
    .map(
      (item) => `
        <div class="summary-tile">
          <strong>${escapeHtml(item.name)}</strong>
          <div class="capability-row__detail">${escapeHtml(item.detail)}</div>
        </div>
      `,
    )
    .join('')

const renderCapabilityGroups = (items) =>
  items
    .map(
      (group, index) => `
        <details class="capability-panel" ${index === 0 ? 'open' : ''}>
          <summary class="capability-summary">
            <span>${escapeHtml(group.title)}</span>
          </summary>
          <div class="capability-body">
            <div class="capability-bridge">${escapeHtml(group.bridge)}</div>
            ${
              group.items
                ? `<div class="capability-list">${renderCapabilityItems(group.items)}</div>`
                : `<div class="summary-grid">${renderCapabilitySummaries(group.summary)}</div>`
            }
            ${group.closing ? `<div class="capability-closing">${escapeHtml(group.closing)}</div>` : ''}
          </div>
        </details>
      `,
    )
    .join('')

const renderAiCards = (items) =>
  items
    .map(
      (item, index) => `
        <article class="ai-card">
          <div class="card-kicker">${iconLabel(index, 'Step')}</div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `,
    )
    .join('')

const renderToolset = (items) => items.map((item) => `<span class="tool-chip">${escapeHtml(item)}</span>`).join('')

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="app-shell">
    <header class="top-bar">
      <div class="top-bar__inner container">
        <div class="nav-brand">
          <span class="nav-brand__title">Penghui / Builder</span>
          <span class="nav-brand__subtitle">万能型工程师 + AI 驱动开发者</span>
        </div>
        <nav class="nav-links" aria-label="页面导航">
          ${navItems
            .map((item) => `<a class="nav-link" href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`)
            .join('')}
        </nav>
        <a class="button button--primary button--compact" href="mailto:${escapeHtml(siteContent.hero.email)}">立即联系</a>
      </div>
    </header>

    <main>
      <section id="hero" class="hero-section">
        <div class="container">
          <article class="hero-card">
            <div class="hero-layout">
              <div>
                <div class="eyebrow">${escapeHtml(siteContent.hero.tagline)}</div>
                <h1 class="display-title">
                  <span>${escapeHtml(siteContent.hero.name)}</span>
                  ${escapeHtml(siteContent.hero.role)}
                </h1>
                <p class="hero-subtitle">${escapeHtml(siteContent.hero.subtitle)}</p>
                <div class="chip-row">${renderTags(siteContent.hero.tags)}</div>
                <div class="hero-cta">
                  <a class="button button--primary" href="#projects">查看项目成果</a>
                  <a class="button button--tonal" href="tel:${escapeHtml(siteContent.hero.phone)}">${escapeHtml(
                    siteContent.hero.phone,
                  )}</a>
                  <a class="button button--outlined" href="mailto:${escapeHtml(siteContent.hero.email)}">${escapeHtml(
                    siteContent.hero.email,
                  )}</a>
                </div>
                <p class="hero-signature">${escapeHtml(copy.heroSignature)}</p>
                <div class="stats-grid">${renderStats(siteContent.hero.stats)}</div>
              </div>

              <div class="hero-visual">
                <div class="hero-visual__stage">
                  <div class="portrait-frame">
                    <img class="hero-portrait-image" src="${escapeHtml(siteContent.hero.portrait)}" alt="彭辉正式形象照" />
                  </div>
                </div>
                <aside class="floating-signal">
                  <div class="floating-signal__label">Current Signal</div>
                  <div class="floating-signal__text">${escapeHtml(copy.signal)}</div>
                </aside>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="section-shell">
        <div class="container">
          <div class="section-head">
            <div class="eyebrow">About</div>
            <h2 class="section-title">不只是写代码，更是把系统做成产品</h2>
            <p class="section-copy">${escapeHtml(copy.about)}</p>
          </div>

          <div class="content-grid">
            <div class="content-grid__main">
              <article class="story-card">
                <h3>职业叙事</h3>
                ${siteContent.introduction.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}
              </article>

              <article class="story-card">
                <h3>正在强化的技术主线</h3>
                <div class="story-list">${renderStoryThreads(siteContent.introduction.specialThreads)}</div>
              </article>
            </div>

            <div class="pillars-grid">${renderFocusCards(siteContent.introduction.focusCards)}</div>
          </div>
        </div>
      </section>

      <section id="projects" class="section-shell">
        <div class="container">
          <div class="section-head">
            <div class="eyebrow">Signature Work</div>
            <h2 class="section-title">项目成果与产品落地</h2>
            <p class="section-copy">${escapeHtml(copy.projects)}</p>
          </div>

          <div class="project-grid">${renderProjects(siteContent.signatureProjects)}</div>

          <div class="section-head section-head--compact">
            <div class="eyebrow">Evidence</div>
            <h2 class="section-title">人物、现场、设备与团队气质</h2>
            <p class="section-copy">${escapeHtml(copy.evidence)}</p>
          </div>

          <div class="gallery-grid">${renderGallery(siteContent.evidenceGallery)}</div>
        </div>
      </section>

      <section id="experience" class="section-shell">
        <div class="container">
          <div class="section-head">
            <div class="eyebrow">Timeline</div>
            <h2 class="section-title">职业经历全覆盖</h2>
            <p class="section-copy">${escapeHtml(copy.experience)}</p>
          </div>
          <div class="timeline">${renderExperiences(siteContent.experiences)}</div>
        </div>
      </section>

      <section id="capability" class="section-shell">
        <div class="container">
          <div class="section-head">
            <div class="eyebrow">Capability System</div>
            <h2 class="section-title">现代程序员的万能型能力矩阵</h2>
            <p class="section-copy">${escapeHtml(copy.capability)}</p>
          </div>

          <div class="capability-note">${escapeHtml(siteContent.capabilityFramework.boundary)}</div>
          <div class="capability-stack">${renderCapabilityGroups(siteContent.capabilityFramework.groups)}</div>
        </div>
      </section>

      <section id="ai" class="section-shell">
        <div class="container">
          <div class="section-head">
            <div class="eyebrow">AI Workflow</div>
            <h2 class="section-title">把 AI 从工具升级为交付方法</h2>
            <p class="section-copy">${escapeHtml(siteContent.aiWorkflow.intro)}</p>
          </div>

          <div class="ai-grid">${renderAiCards(siteContent.aiWorkflow.cards)}</div>

          <article class="contact-card toolbox-card">
            <div class="eyebrow eyebrow--tight">Toolset</div>
            <h3>${escapeHtml(siteContent.aiWorkflow.title)}</h3>
            <p>${escapeHtml(copy.aiOutro)}</p>
            <div class="toolbox">${renderToolset(siteContent.aiWorkflow.toolset)}</div>
          </article>
        </div>
      </section>

      <section id="contact" class="section-shell">
        <div class="container">
          <div class="contact-grid">
            <article class="contact-card">
              <div class="eyebrow eyebrow--tight">Education & Contact</div>
              <h3>继续合作或进一步沟通</h3>
              <p>${escapeHtml(copy.contact)}</p>
              <div class="contact-line">
                <span class="contact-line__label">地点</span>
                <span>${escapeHtml(siteContent.hero.location)}</span>
              </div>
              <div class="contact-line">
                <span class="contact-line__label">电话</span>
                <a href="tel:${escapeHtml(siteContent.hero.phone)}">${escapeHtml(siteContent.hero.phone)}</a>
              </div>
              <div class="contact-line">
                <span class="contact-line__label">邮箱</span>
                <a href="mailto:${escapeHtml(siteContent.hero.email)}">${escapeHtml(siteContent.hero.email)}</a>
              </div>
              <div class="contact-line">
                <span class="contact-line__label">教育</span>
                <span>
                  ${escapeHtml(siteContent.education.school)} · ${escapeHtml(siteContent.education.major)} ·
                  ${escapeHtml(siteContent.education.degree)}（${escapeHtml(siteContent.education.period)}）
                </span>
              </div>
            </article>

            <article class="contact-card">
              <img class="contact-image" src="${escapeHtml(siteContent.footer.contactImage)}" alt="彭辉生活照" loading="lazy" />
              <div class="footer-note">${escapeHtml(siteContent.footer.note)}</div>
            </article>
          </div>
        </div>
      </section>
    </main>
  </div>
`
