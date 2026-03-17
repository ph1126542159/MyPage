# 彭辉个人主页

基于 `Vue 3 + Vuetify + Vite` 实现的中文个人主页，核心叙事聚焦：

- 万能型系统软件工程能力
- 真实工业产品与设备落地经历
- AI 驱动的现代开发工作流

## 内容来源

- `个人信息/彭辉简历.docx`
- 有道云笔记《编程语言与核心技术栈（基础必备）》
- `个人产品/`、`个人信息/`、`工作照/` 中的图片与视频素材

## 本地启动

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## GitHub Pages 发布

仓库已内置 `.github/workflows/deploy.yml`，推送到 `main` 后会自动发布。

发布地址策略：

- 如果仓库名是 `<github-username>.github.io`
  - 主页地址是 `https://<github-username>.github.io/`
- 如果仓库名是普通项目仓库，例如 `Snake`
  - 主页地址通常是 `https://<github-username>.github.io/Snake/`

工作流会自动判断仓库名并设置 Vite 的 `base`，因此同一套代码可同时兼容根域名主页和子路径主页。

## 说明

- 页面源码位于 `src/`
- 媒体资源位于 `public/media/`
- GitHub Pages 工作流位于 `.github/workflows/deploy.yml`
- 执行约束与整体规划见 `AGENT.md`
