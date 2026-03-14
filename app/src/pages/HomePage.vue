<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { copyToClipboard, Notify } from 'quasar'

import heroTech from '../assets/media/work-hero.jpg'
import avatarImg from '../assets/media/profile-3.jpg'
import productCover from '../assets/media/product-cover.png'
import product1 from '../assets/media/product-1.mp4'
import product2 from '../assets/media/product-2.mp4'
import product3 from '../assets/media/product-3.mp4'
import work1 from '../assets/media/work-1.jpg'
import work2 from '../assets/media/work-2.jpg'
import work3 from '../assets/media/work-3.jpg'
import work4 from '../assets/media/work-4.jpg'
import work5 from '../assets/media/work-5.jpg'
import profile1 from '../assets/media/profile-1.jpg'
import profile2 from '../assets/media/profile-2.jpg'

import { profile } from '../content/profile'

type Section = { id: string; label: string }
type DemoVideo = { title: string; src: string }
type GalleryImage = { title: string; src: string; subtitle: string }

const baseUrl = import.meta.env.BASE_URL

const drawer = ref(false)
const showToTop = ref(false)

const sections: Section[] = [
  { id: 'intro', label: '个人简介' },
  { id: 'portfolio', label: '作品集' },
  { id: 'achievements', label: '成果展示' },
  { id: 'charm', label: '个人魅力' },
  { id: 'contact', label: '联系我' },
]

const onlineLinks = [
  { icon: 'mdi-github', label: 'GitHub', value: '/penghui-embedded', href: 'https://github.com/' },
  { icon: 'mdi-linkedin', label: 'LinkedIn', value: '/in/penghui', href: 'https://www.linkedin.com/' },
  { icon: 'mdi-email-outline', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
]

const footerProjects = profile.projects.slice(0, 6)

const demoVideos: DemoVideo[] = [
  { title: '成果演示 01', src: product1 },
  { title: '成果演示 02', src: product2 },
  { title: '成果演示 03', src: product3 },
]

const projectCovers = [productCover, work2, work3, work4, work5]

const galleryImages: GalleryImage[] = [
  { title: '现场与设备 01', subtitle: '机器人作业与实验现场', src: work1 },
  { title: '现场与设备 02', subtitle: '设备调试与联调过程', src: work2 },
  { title: '现场与设备 03', subtitle: '系统集成与工位验证', src: work3 },
  { title: '个人工作状态 01', subtitle: '专注开发与持续优化', src: profile1 },
  { title: '个人工作状态 02', subtitle: '现场问题闭环处理', src: profile2 },
  { title: '个人工作状态 03', subtitle: '研发现场工作照', src: heroTech },
]

const imageDialog = ref(false)
const activeImage = ref<GalleryImage | null>(null)

function scrollTo(sectionId: string) {
  if (sectionId === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const el = document.getElementById(sectionId)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function toast(message: string) {
  Notify.create({
    message,
    position: 'bottom',
    timeout: 1400,
    color: 'primary',
    textColor: 'white',
    classes: 'notify-round',
  })
}

function copyText(text: string, okText: string) {
  copyToClipboard(text)
    .then(() => toast(okText))
    .catch(() => toast('复制失败，请手动复制'))
}

function openImage(image: GalleryImage) {
  activeImage.value = image
  imageDialog.value = true
}

function onScroll() {
  showToTop.value = window.scrollY > 640
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <q-layout view="hHh lpR fFf" class="site-layout">
    <q-header class="site-header" reveal>
      <q-toolbar class="site-shell header-inner q-px-sm">
        <q-btn flat round dense icon="mdi-menu" class="lt-md" @click="drawer = true" />

        <q-btn flat no-caps class="brand-btn" @click="scrollTo('top')">
          <span class="brand-mark">PH</span>
          <span class="brand-name">彭辉 · 嵌入式机器人工程师</span>
        </q-btn>

        <q-space />

        <div class="row items-center q-gutter-xs gt-sm nav-wrap">
          <q-btn
            v-for="s in sections"
            :key="s.id"
            flat
            dense
            no-caps
            class="nav-link"
            @click="scrollTo(s.id)"
          >
            {{ s.label }}
          </q-btn>

          <q-btn
            unelevated
            no-caps
            color="primary"
            class="resume-btn"
            label="下载简历"
            :href="`${baseUrl}resume.docx`"
            target="_blank"
            rel="noreferrer"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" bordered overlay class="lt-md nav-drawer">
      <q-list padding>
        <q-item>
          <q-item-section>
            <q-item-label class="text-weight-bold">{{ profile.name }}</q-item-label>
            <q-item-label caption>{{ profile.title }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced />

        <q-item v-for="s in sections" :key="s.id" clickable @click="scrollTo(s.id); drawer = false">
          <q-item-section>{{ s.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page class="site-shell page-pad">
        <div id="top"></div>

        <section class="hero-banner">
          <div class="hero-mask">
            <div class="hero-content">
              <div class="hero-copy">
                <p class="hero-kicker">机器人 · 嵌入式 · 边缘计算</p>
                <h1>{{ profile.name }}</h1>
                <p class="hero-role">{{ profile.title }}</p>
                <p class="hero-tagline">{{ profile.tagline }}</p>

                <div class="row items-center q-gutter-sm q-mt-lg">
                  <q-btn
                    unelevated
                    color="primary"
                    icon="mdi-email-outline"
                    label="发邮件"
                    :href="`mailto:${profile.email}`"
                    target="_blank"
                    rel="noreferrer"
                  />
                  <q-btn flat no-caps class="hero-link" @click="copyText(profile.phone, '手机号已复制')">
                    复制手机号
                  </q-btn>
                  <q-btn flat no-caps class="hero-link" @click="copyText(profile.email, '邮箱已复制')">
                    复制邮箱
                  </q-btn>
                </div>
              </div>

              <div class="hero-panel">
                <q-avatar size="140px" class="hero-avatar">
                  <img :src="avatarImg" alt="头像" />
                </q-avatar>
                <div class="hero-metrics">
                  <article><strong>13+</strong><span>从业年限</span></article>
                  <article><strong>300m</strong><span>雷达量程</span></article>
                  <article><strong>μs</strong><span>同步精度</span></article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="main-columns q-mt-xl">
          <aside class="left-column" id="intro">
            <article class="panel-card">
              <header>
                <span>01</span>
                <h2>个人简介</h2>
              </header>
              <p v-for="(p, idx) in profile.about" :key="idx">{{ p }}</p>
            </article>

            <article class="panel-card q-mt-md">
              <header>
                <span>02</span>
                <h2>机器人嵌入式专长</h2>
              </header>
              <div class="mini-grid">
                <div v-for="item in profile.roboticsFocus" :key="item.title" class="mini-item">
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.details.join(' · ') }}</p>
                </div>
              </div>
            </article>

            <article class="panel-card q-mt-md">
              <header>
                <span>03</span>
                <h2>核心技能</h2>
              </header>
              <div class="mini-grid">
                <div v-for="group in profile.skills" :key="group.title" class="mini-item">
                  <h3>{{ group.title }}</h3>
                  <p>{{ group.items.join(' · ') }}</p>
                </div>
              </div>
            </article>

            <article class="panel-card q-mt-md" id="charm">
              <header>
                <span>04</span>
                <h2>个人魅力展示</h2>
              </header>
              <div class="mini-grid">
                <div v-for="item in profile.charms" :key="item.title" class="mini-item">
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.description }}</p>
                  <ul>
                    <li v-for="point in item.points" :key="point">{{ point }}</li>
                  </ul>
                </div>
              </div>
            </article>

          </aside>

          <section class="right-column" id="portfolio">
            <article class="panel-card">
              <header>
                <span>A</span>
                <h2>个人作品集</h2>
              </header>

              <div class="portfolio-list">
                <article v-for="(p, idx) in profile.projects" :key="p.title" class="work-item">
                  <q-img :src="projectCovers[idx % projectCovers.length]" ratio="16/10" class="work-image" />
                  <div>
                    <h3>{{ p.title }}</h3>
                    <p class="sub">{{ p.subtitle }}</p>
                    <p class="desc">{{ p.description }}</p>
                    <p class="tags">{{ p.tags.join(' · ') }}</p>
                  </div>
                </article>
              </div>
            </article>

            <article class="panel-card q-mt-md" id="achievements">
              <header>
                <span>B</span>
                <h2>个人成果展示</h2>
              </header>

              <div class="achievement-grid">
                <article v-for="item in profile.achievements" :key="item.title" class="achievement-item">
                  <h3>{{ item.title }}</h3>
                  <strong>{{ item.metric }}</strong>
                  <p>{{ item.description }}</p>
                  <small>{{ item.tags.join(' · ') }}</small>
                </article>
              </div>

              <div class="video-grid q-mt-lg">
                <article v-for="v in demoVideos" :key="v.title" class="video-item">
                  <video
                    class="result-video"
                    :src="v.src"
                    :poster="productCover"
                    controls
                    preload="metadata"
                    playsinline
                  >
                    浏览器不支持视频播放，请下载后观看。
                  </video>
                  <h3>{{ v.title }}</h3>
                </article>
              </div>
            </article>

            <article class="panel-card q-mt-md">
              <header>
                <span>C</span>
                <h2>现场与设备 / 个人工作状态</h2>
              </header>

              <div class="gallery-grid">
                <article
                  v-for="img in galleryImages"
                  :key="img.title"
                  class="gallery-item"
                  @click="openImage(img)"
                >
                  <q-img :src="img.src" height="220px" fit="cover" class="gallery-photo" />
                  <div class="gallery-overlay">
                    <h4>{{ img.title }}</h4>
                    <p>{{ img.subtitle }}</p>
                  </div>
                </article>
              </div>
            </article>
          </section>
        </section>

        <section class="bottom-contact q-mt-lg" id="contact">
          <div class="cta-grid">
            <article class="cta-card">
              <h3>合作邀请</h3>
              <p class="cta-sub">有项目想一起做？</p>
              <p>
                我长期聚焦机器人嵌入式、感知链路和工业软件架构，欢迎直接联系沟通需求和交付目标。
              </p>
              <q-btn
                outline
                color="primary"
                no-caps
                class="cta-btn"
                label="联系我"
                :href="`mailto:${profile.email}`"
                target="_blank"
                rel="noreferrer"
              />
            </article>

            <article class="cta-card">
              <h3>支持我</h3>
              <p class="cta-sub">认可我的工程实践？</p>
              <p>
                如果你喜欢这些项目与内容，也欢迎支持我持续打磨机器人与嵌入式方向的开源技术沉淀。
              </p>
              <div class="cta-actions">
                <q-btn
                  outline
                  color="grey-7"
                  no-caps
                  class="cta-btn"
                  label="GitHub"
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                />
                <q-btn
                  outline
                  color="amber-8"
                  no-caps
                  class="cta-btn"
                  label="支持"
                  @click="copyText(profile.email, '已复制邮箱，可用于联系支持')"
                />
              </div>
            </article>
          </div>

          <section class="contact-block">
            <h3>联系我</h3>
            <div class="line"></div>
            <div class="contact-list">
              <div class="contact-row">
                <q-icon name="mdi-translate" />
                <span>我使用中文与英文进行技术沟通</span>
              </div>
              <div class="contact-row">
                <q-icon name="mdi-email-outline" />
                <button type="button" class="inline-btn" @click="copyText(profile.email, '邮箱已复制')">
                  {{ profile.email }}
                </button>
              </div>
              <div class="contact-row">
                <q-icon name="mdi-phone-outline" />
                <button type="button" class="inline-btn" @click="copyText(profile.phone, '手机号已复制')">
                  {{ profile.phone }}
                </button>
              </div>
            </div>
          </section>

          <section class="contact-block">
            <h3>线上平台</h3>
            <div class="line"></div>
            <div class="contact-list">
              <a
                v-for="item in onlineLinks"
                :key="item.label"
                class="contact-row contact-link"
                :href="item.href"
                target="_blank"
                rel="noreferrer"
              >
                <q-icon :name="item.icon" />
                <span>{{ item.value }}</span>
              </a>
            </div>
          </section>
        </section>

        <section class="quote-strip">
          <p>今日语录： “把复杂系统做稳定，才是工程价值。”</p>
        </section>

        <footer class="mega-footer">
          <div class="site-shell footer-grid">
            <section>
              <h4>{{ profile.name }}</h4>
              <p>© {{ new Date().getFullYear() }} {{ profile.name }}</p>
              <p>{{ profile.location }}</p>
              <a :href="`mailto:${profile.email}`">联系</a>
            </section>
            <section>
              <h4>项目</h4>
              <div class="footer-links">
                <a v-for="p in footerProjects.slice(0, 3)" :key="p.title">{{ p.title }}</a>
              </div>
            </section>
            <section>
              <h4>更多</h4>
              <div class="footer-links">
                <a v-for="p in footerProjects.slice(3, 6)" :key="p.title">{{ p.title }}</a>
              </div>
            </section>
            <section>
              <h4>关于我</h4>
              <p>机器人嵌入式开发者，关注感知系统、实时计算与工程化交付。</p>
              <div class="footer-icons">
                <q-icon name="mdi-github" />
                <q-icon name="mdi-linkedin" />
                <q-icon name="mdi-email-outline" />
                <q-icon name="mdi-youtube" />
              </div>
            </section>
          </div>
        </footer>
      </q-page>

      <q-page-sticky position="bottom-right" :offset="[20, 20]">
        <q-btn
          v-show="showToTop"
          round
          unelevated
          color="primary"
          icon="mdi-arrow-up"
          aria-label="回到顶部"
          @click="scrollTo('top')"
        />
      </q-page-sticky>
    </q-page-container>

    <q-dialog v-model="imageDialog">
      <q-card flat class="dialog-card">
        <q-card-section class="row items-center q-pb-sm">
          <div class="text-weight-bold">{{ activeImage?.title }}</div>
          <q-space />
          <q-btn flat round dense icon="mdi-close" v-close-popup />
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-img v-if="activeImage" :src="activeImage.src" ratio="16/9" class="dialog-img" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<style scoped>
.site-layout {
  background: #fff;
}

.site-header {
  background: rgba(255, 255, 255, 0.94);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(8px);
}

.header-inner {
  min-height: 68px;
}

.nav-wrap {
  flex-wrap: nowrap;
}

.brand-btn {
  padding-inline: 2px;
}

.brand-mark {
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px;
  font-weight: 700;
  color: var(--accent);
  margin-right: 8px;
}

.brand-name {
  font-weight: 700;
  color: var(--ink);
  font-size: 15px;
  letter-spacing: 0.02em;
}

.nav-link {
  color: var(--muted);
  font-weight: 500;
  letter-spacing: 0.01em;
}

.resume-btn {
  border-radius: 999px;
  font-weight: 600;
}

.page-pad {
  padding: 28px 0 72px;
}

.hero-banner {
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  border-radius: 0;
  overflow: hidden;
  border: 0;
  background: linear-gradient(120deg, #2f5fe3, #2f7af8 56%, #4f90ff);
  box-shadow: none;
}

.hero-mask {
  background: transparent;
  padding: 46px 0;
}

.hero-content {
  width: min(var(--max-width), calc(100% - 32px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 0.75fr);
  gap: 30px;
  align-items: center;
}

.hero-kicker {
  margin: 0 0 10px;
  font-size: 12px;
  letter-spacing: 0.2em;
  font-weight: 700;
  color: #d7e7ff;
}

.hero-copy h1 {
  margin: 0;
  font-family: 'Cormorant Garamond', 'Noto Serif SC', serif;
  font-size: clamp(64px, 10vw, 124px);
  line-height: 0.88;
  color: #fbfeff;
}

.hero-role {
  margin: 12px 0 0;
  color: rgba(252, 254, 255, 0.98);
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 600;
}

.hero-tagline {
  margin: 16px 0 0;
  color: #eef4ff;
  line-height: 1.72;
  font-size: 17px;
  max-width: 56ch;
}

.hero-link {
  color: #e6f0ff;
  font-weight: 500;
}

.hero-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 14px;
  border-radius: 16px;
  padding: 18px;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 14px 26px rgba(18, 40, 90, 0.2);
}

.hero-avatar {
  align-self: center;
  border: 5px solid rgba(255, 255, 255, 0.94);
}

.hero-metrics {
  margin-top: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.hero-metrics article {
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.94);
  padding: 10px 8px;
  box-shadow: 0 6px 14px rgba(26, 54, 122, 0.12);
}

.hero-metrics strong {
  display: block;
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  color: var(--accent);
  line-height: 1;
}

.hero-metrics span {
  font-size: 12px;
  letter-spacing: 0.02em;
  color: var(--muted);
}

.main-columns {
  display: grid;
  grid-template-columns: minmax(0, 0.96fr) minmax(0, 1.24fr);
  gap: 22px;
}

.left-column,
.right-column {
  min-width: 0;
}

.panel-card {
  border: 1px solid var(--line);
  border-radius: 16px;
  background: #fff;
  padding: 20px;
  box-shadow: 0 10px 26px rgba(15, 23, 42, 0.06);
}

.panel-card header {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 14px;
}

.panel-card header span {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: var(--accent);
}

.panel-card h2 {
  margin: 0;
  font-size: 24px;
  line-height: 1.2;
}

.panel-card p {
  margin: 0 0 12px;
  color: var(--muted);
  line-height: 1.76;
}

.mini-grid {
  display: grid;
  gap: 12px;
}

.mini-item {
  border: 1px solid var(--line);
  border-radius: 13px;
  padding: 14px;
  background: #fbfcff;
}

.mini-item h3,
.work-item h3,
.achievement-item h3,
.video-item h3 {
  margin: 0;
  font-size: 17px;
  font-weight: 700;
}

.mini-item p {
  margin: 9px 0 0;
  font-size: 14px;
}

.mini-item ul {
  margin: 12px 0 0;
  padding-left: 18px;
}

.mini-item li {
  margin-bottom: 7px;
  color: var(--muted);
}

.inline-btn {
  border: 0;
  background: transparent;
  color: var(--accent);
  font: inherit;
  font-weight: 600;
  padding: 0;
  cursor: pointer;
  border-bottom: 1px dashed rgba(37, 99, 235, 0.42);
  transition: color 0.2s ease, border-color 0.2s ease;
}

.inline-btn:hover {
  color: #1d4ed8;
  border-bottom-color: #1d4ed8;
}

.bottom-contact {
  padding: 52px 0 28px;
}

.cta-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}

.cta-card {
  background: #f7f9fc;
  border: 1px solid #e8edf3;
  border-radius: 14px;
  padding: 28px;
}

.cta-card h3 {
  margin: 0;
  font-size: clamp(46px, 6vw, 64px);
  line-height: 0.95;
  font-family: 'Cormorant Garamond', 'Noto Serif SC', serif;
  color: #1f2937;
}

.cta-sub {
  margin: 14px 0 0 !important;
  font-size: 21px;
  color: #374151 !important;
}

.cta-card p {
  margin: 14px 0 0;
  font-size: 17px;
  line-height: 1.78;
  color: #536070;
}

.cta-btn {
  margin-top: 20px;
  border-radius: 12px;
  min-height: 44px;
  font-weight: 600;
}

.cta-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.contact-block {
  margin-top: 42px;
}

.contact-block h3 {
  margin: 0;
  font-size: clamp(44px, 5.4vw, 62px);
  line-height: 0.98;
  font-family: 'Cormorant Garamond', 'Noto Serif SC', serif;
  color: #1f2937;
}

.line {
  height: 1px;
  background: #d8e0ea;
  margin: 14px 0 18px;
}

.contact-list {
  display: grid;
  gap: 14px;
}

.contact-row {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: clamp(22px, 2.4vw, 34px);
  line-height: 1.3;
  color: #1f2937;
}

.contact-row .q-icon {
  color: #1f2937;
  font-size: clamp(22px, 2.3vw, 33px);
}

.contact-link {
  color: inherit;
  transition: color 0.2s ease;
}

.contact-link:hover {
  color: var(--accent);
}

.quote-strip {
  margin-top: 36px;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  background: linear-gradient(90deg, #666c75, #717985);
  color: #f0f0f0;
  text-align: center;
  padding: 34px 20px;
}

.quote-strip p {
  margin: 0;
  font-size: clamp(22px, 2.4vw, 34px);
  font-weight: 500;
  letter-spacing: 0.01em;
}

.mega-footer {
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  background: #2f343c;
  color: #f2f2f2;
  padding: 46px 0 52px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 34px;
}

.mega-footer h4 {
  margin: 0 0 12px;
  font-size: 40px;
  line-height: 1;
  font-family: 'Cormorant Garamond', 'Noto Serif SC', serif;
}

.mega-footer p,
.mega-footer a {
  display: block;
  margin: 0 0 9px;
  color: #e5e9f0;
  font-size: 17px;
  line-height: 1.48;
}

.mega-footer a:hover {
  color: #99b9ff;
}

.footer-links {
  display: grid;
  gap: 8px;
}

.footer-icons {
  display: flex;
  gap: 14px;
  margin-top: 14px;
  font-size: 28px;
  color: #f1f4fa;
}

.portfolio-list {
  display: grid;
  gap: 14px;
}

.work-item {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 14px;
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 12px;
  background: #fff;
}

.work-image {
  border-radius: 12px;
  overflow: hidden;
}

.sub,
.tags {
  color: var(--muted);
}

.sub {
  margin: 4px 0 0;
}

.desc {
  margin: 8px 0;
  color: var(--muted);
  line-height: 1.72;
}

.tags {
  margin: 0;
  font-size: 13px;
}

.achievement-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.achievement-item {
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 14px;
  background: #fbfdff;
}

.achievement-item strong {
  display: block;
  margin-top: 6px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 34px;
  color: var(--accent);
  line-height: 1;
}

.achievement-item small {
  color: var(--muted);
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.video-item {
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 12px;
  background: #fbfdff;
}

.result-video {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 10px;
  object-fit: cover;
  background: #0b1220;
}

.video-item h3 {
  margin-top: 10px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.gallery-item {
  position: relative;
  display: block;
  border: 1px solid var(--line);
  border-radius: 14px;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  background: #fff;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.gallery-photo {
  display: block;
  transition: transform 0.35s ease;
}

.gallery-overlay {
  position: absolute;
  inset: auto 0 0;
  padding: 14px;
  background: linear-gradient(to top, rgba(8, 26, 54, 0.8), transparent);
  color: #fff;
  text-align: left;
}

.gallery-overlay h4 {
  margin: 0;
  font-size: 15px;
}

.gallery-overlay p {
  margin: 4px 0 0;
  color: rgba(255, 255, 255, 0.9);
  font-size: 13px;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 30px rgba(15, 23, 42, 0.2);
}

.gallery-item:hover .gallery-photo {
  transform: scale(1.06);
}

.dialog-card {
  width: min(980px, 94vw);
  border-radius: 16px;
}

.dialog-img {
  border-radius: 12px;
  overflow: hidden;
}

@media (max-width: 1200px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .hero-metrics {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .main-columns {
    grid-template-columns: 1fr;
  }

  .cta-grid {
    grid-template-columns: 1fr;
  }

  .contact-row {
    font-size: clamp(20px, 3.4vw, 28px);
  }

  .contact-row .q-icon {
    font-size: clamp(20px, 3vw, 28px);
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 760px) {
  .hero-mask {
    padding: 24px 0;
  }

  .hero-content {
    width: min(var(--max-width), calc(100% - 24px));
  }

  .hero-copy h1 {
    font-size: clamp(54px, 18vw, 72px);
  }

  .hero-role {
    font-size: 20px;
  }

  .hero-tagline {
    font-size: 16px;
  }

  .hero-panel {
    align-items: center;
    text-align: center;
  }

  .hero-metrics {
    grid-template-columns: 1fr 1fr;
  }

  .panel-card {
    padding: 16px;
  }

  .work-item {
    grid-template-columns: 1fr;
  }

  .achievement-grid {
    grid-template-columns: 1fr;
  }

  .video-grid {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .contact-row {
    font-size: 18px;
  }

  .contact-row .q-icon {
    font-size: 18px;
  }

  .contact-block h3,
  .cta-card h3 {
    font-size: clamp(34px, 10vw, 44px);
  }

  .cta-card {
    padding: 20px;
  }

  .quote-strip p {
    font-size: 19px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }

  .mega-footer h4 {
    font-size: 32px;
  }
}
</style>
