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
npm run dev:vite
```

如果当前机器无法访问 npm 仓库，也可以直接用零依赖静态服务启动：

```bash
npm run dev
```

## 构建

```bash
npm run build
```

## 双部署发布

仓库已内置两套自动部署：

- `GitHub Pages`：面向国际访问
- `EdgeOne Pages`：面向国内更友好的访问

### GitHub Pages

工作流位于 `.github/workflows/deploy.yml`，推送到 `main` 后会自动发布。

发布地址策略：

- 如果仓库名是 `<github-username>.github.io`
  - 主页地址是 `https://<github-username>.github.io/`
- 如果仓库名是普通项目仓库，例如 `Snake`
  - 主页地址通常是 `https://<github-username>.github.io/Snake/`

工作流会自动判断仓库名并设置 Vite 的 `base`，因此同一套代码可同时兼容根域名主页和子路径主页。

### EdgeOne Pages

工作流位于 `.github/workflows/deploy-edgeone.yml`，推送到 `main` 后会自动构建 `dist/` 并发布到 EdgeOne Pages。

启用前需要先在 GitHub 仓库里配置：

1. `Settings -> Secrets and variables -> Actions -> New repository secret`
2. 新建 Secret：`EDGEONE_API_TOKEN`
3. 可选新建 Variable：`EDGEONE_PROJECT_NAME`
   - 不填时默认使用当前 GitHub 仓库名作为 EdgeOne 项目名
   - EdgeOne 项目名只能包含小写字母、数字和连字符，工作流会自动把仓库名规范化
   - 例如 `MyPage` 会自动变成 `mypage`

如果还没配置 `EDGEONE_API_TOKEN`，这个工作流会自动跳过，不会把仓库 CI 标记为失败。

建议先在 EdgeOne 控制台创建 Pages 项目，再让工作流部署到这个已存在的项目。这样你可以提前选好加速区域和域名策略。

国内外都要长期稳定访问时，推荐：

- GitHub Pages 继续保留，作为国际访问地址
- EdgeOne Pages 绑定一个已备案自定义域名，作为国内优先访问地址

如果只用 EdgeOne 默认预览链接，它更适合测试和验收，不适合作为长期正式入口。

## 说明

- 页面源码位于 `src/`
- 媒体资源位于 `public/media/`
- GitHub Pages 工作流位于 `.github/workflows/deploy.yml`
- EdgeOne Pages 工作流位于 `.github/workflows/deploy-edgeone.yml`
- 执行约束与整体规划见 `AGENT.md`

## GitHub 仓库总目录

个人账号下的仓库正在统一整理。功能分类、模糊关键词、时间筛选和待清理队列见：

- [REPOSITORY_INDEX.md](./REPOSITORY_INDEX.md)
