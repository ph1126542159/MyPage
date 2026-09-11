# Repository Index

> 统一仓库目录（第一版）。当前先覆盖 `ph1126542159` 个人账号下可见仓库；组织仓库在组织授权可读后并入同一目录。
>
> 目标：不再依赖多个含义不清的 Organization 做分类，而是用 **功能域 + 模糊关键词 + 时间窗口 + 状态** 来收缩仓库列表。

## 快速筛选

### 功能模糊词

| 功能域 | 推荐搜索词 |
|---|---|
| AI / Agent / MCP | `ai agent agents gpt llm mcp automation nlp pytorch` |
| C++ / Qt / Desktop | `qt cpp c++ cmake desktop framework ui widget` |
| Embedded / IoT / Robotics | `embedded iot ros robot robotics jetson orin dds device` |
| 3D / Game / GIS | `3d game engine terrain gis qgis blender ue unreal vision` |
| Quant / Trading | `quant trading stock finance market strategy` |
| Tools / DevOps | `tool tools workflow updater deploy downloader profiler` |
| Reference / Learning | `guide book tutorial learning docs awesome reference` |
| Cleanup / Test | `test demo sample old temp summary` |

### 时间收缩

以 2026-09-11 为基准，建议直接用 GitHub 仓库搜索：

- **Active / 30 天内**：`user:ph1126542159 pushed:>=2026-08-12`
- **Recent / 30～180 天**：`user:ph1126542159 pushed:2026-03-15..2026-08-11`
- **Inactive / 180～365 天**：`user:ph1126542159 pushed:2025-09-12..2026-03-14`
- **Archive Candidate / 1 年以上**：`user:ph1126542159 pushed:<2025-09-12`
- **Private**：`user:ph1126542159 is:private`
- **Public**：`user:ph1126542159 is:public`
- **Fork 候选检查**：在仓库详情中确认 `Forked from ...`，再决定归档或保留。

---

## 1. Core / 自研核心项目

这些优先按“正式项目”保护，不做自动删除。

| Repository | 功能关键词 | 建议状态 |
|---|---|---|
| [3DCS](https://github.com/ph1126542159/3DCS) | `3d cpp scene` | Keep |
| [3DScene](https://github.com/ph1126542159/3DScene) | `3d scene` | Keep |
| [myiot](https://github.com/ph1126542159/myiot) | `iot embedded device` | Keep |
| [PocoDDSRuntime](https://github.com/ph1126542159/PocoDDSRuntime) | `dds cpp runtime embedded` | Keep |
| [DistriFrameWork](https://github.com/ph1126542159/DistriFrameWork) | `cpp framework distributed` | Keep |
| [PRO_M3](https://github.com/ph1126542159/PRO_M3) | `project private` | Keep / Review |
| [QuantTradingSystem](https://github.com/ph1126542159/QuantTradingSystem) | `quant trading` | Keep |
| [Trading](https://github.com/ph1126542159/Trading) | `trading finance` | Keep |
| [stock](https://github.com/ph1126542159/stock) | `stock finance` | Keep |
| [MyPage](https://github.com/ph1126542159/MyPage) | `homepage vue vite` | Keep |
| [obsidian-vault](https://github.com/ph1126542159/obsidian-vault) | `notes knowledge` | Keep |

## 2. AI / Agent / Automation

- [gpt-webcodex](https://github.com/ph1126542159/gpt-webcodex) — `gpt codex automation` — **Fork / Reference 已确认**
- [agency-agents](https://github.com/ph1126542159/agency-agents) — `ai agents` — **Fork / Reference 已确认**
- [ai-agents-for-beginners](https://github.com/ph1126542159/ai-agents-for-beginners) — `ai agents learning`
- [spec-kit](https://github.com/ph1126542159/spec-kit) — `spec ai workflow`
- [funNLP](https://github.com/ph1126542159/funNLP) — `nlp ai reference`
- [d2l-zh](https://github.com/ph1126542159/d2l-zh) — `deep-learning learning`
- [Awesome-PyTorch-Chinese](https://github.com/ph1126542159/Awesome-PyTorch-Chinese) — `pytorch ai reference`
- [PyTorchDocs](https://github.com/ph1126542159/PyTorchDocs) — `pytorch docs`
- [pytorch_cpp](https://github.com/ph1126542159/pytorch_cpp) — `pytorch cpp`
- [LibtorchTutorials](https://github.com/ph1126542159/LibtorchTutorials) — `libtorch pytorch tutorial`
- [headroom](https://github.com/ph1126542159/headroom) — `ai tooling review`
- [anydoc](https://github.com/ph1126542159/anydoc) — `document tool review`
- [archify](https://github.com/ph1126542159/archify) — `archive automation review`

## 3. C++ / Qt / Desktop / Framework

- [parsePView](https://github.com/ph1126542159/parsePView) — `qt cpp desktop`
- [CTK-project](https://github.com/ph1126542159/CTK-project) — `qt ctk cpp` — Fork/Reference 候选
- [ctkDemo](https://github.com/ph1126542159/ctkDemo) — `qt ctk demo`
- [CQtDeployer](https://github.com/ph1126542159/CQtDeployer) — `qt deploy`
- [QtAutoUpdater](https://github.com/ph1126542159/QtAutoUpdater) — `qt updater`
- [qtAutoUpdateApp](https://github.com/ph1126542159/qtAutoUpdateApp) — `qt updater app`
- [QtAppProject](https://github.com/ph1126542159/QtAppProject) — `qt desktop`
- [QtApp-Template](https://github.com/ph1126542159/QtApp-Template) — `qt template`
- [Qt-Open-Source-Project](https://github.com/ph1126542159/Qt-Open-Source-Project) — `qt reference`
- [qtmultimedia-plugin-ffmpeg](https://github.com/ph1126542159/qtmultimedia-plugin-ffmpeg) — `qt ffmpeg plugin`
- [qtprotobuf](https://github.com/ph1126542159/qtprotobuf) — `qt protobuf`
- [QJsonStruct](https://github.com/ph1126542159/QJsonStruct) — `qt json`
- [Qicstable](https://github.com/ph1126542159/Qicstable) — `qt table`
- [qskinny](https://github.com/ph1126542159/qskinny) — `qt ui`
- [qt-natvis](https://github.com/ph1126542159/qt-natvis) — `qt debug`
- [MyFluentUI](https://github.com/ph1126542159/MyFluentUI) — `qt ui fluent`
- [LimeReport](https://github.com/ph1126542159/LimeReport) — `qt report`
- [LogicFlow](https://github.com/ph1126542159/LogicFlow) — `ui flow editor`
- [RibbonTemplate](https://github.com/ph1126542159/RibbonTemplate) — `qt ribbon template`
- [AppMgr](https://github.com/ph1126542159/AppMgr) — `app manager`
- [CppMicroServices](https://github.com/ph1126542159/CppMicroServices) — `cpp framework`
- [actor-framework](https://github.com/ph1126542159/actor-framework) — `cpp actor framework`
- [cpp-tbox](https://github.com/ph1126542159/cpp-tbox) — `cpp toolkit`
- [grpc](https://github.com/ph1126542159/grpc) — `cpp rpc reference`
- [json-rpc-cxx](https://github.com/ph1126542159/json-rpc-cxx) — `cpp rpc json`
- [gayrpc](https://github.com/ph1126542159/gayrpc) — `rpc cpp`
- [brynet](https://github.com/ph1126542159/brynet) — `cpp network`
- [TarsFramework](https://github.com/ph1126542159/TarsFramework) — `cpp rpc framework`
- [userver](https://github.com/ph1126542159/userver) — `cpp server framework`
- [stb](https://github.com/ph1126542159/stb) — `c cpp header reference`
- [Catch2](https://github.com/ph1126542159/Catch2) — `cpp test framework`
- [doctest](https://github.com/ph1126542159/doctest) — `cpp test framework`
- [easy_profiler](https://github.com/ph1126542159/easy_profiler) — `cpp profiler`
- [crashpad](https://github.com/ph1126542159/crashpad) — `crash debug`
- [Dobby](https://github.com/ph1126542159/Dobby) — `hook cpp`
- [vld](https://github.com/ph1126542159/vld) — `debug leak`
- [meta](https://github.com/ph1126542159/meta) — `cpp metaprogramming`
- [termbox2](https://github.com/ph1126542159/termbox2) — `terminal c`
- [sultan](https://github.com/ph1126542159/sultan) — `tool cpp review`
- [CmdForge](https://github.com/ph1126542159/CmdForge) — `cli tool`
- [coding-notes](https://github.com/ph1126542159/coding-notes) — `cpp notes`
- [CppGuide](https://github.com/ph1126542159/CppGuide) — `cpp guide learning`

## 4. Embedded / IoT / Robotics

- [myiot](https://github.com/ph1126542159/myiot) — `iot embedded`
- [PocoDDSRuntime](https://github.com/ph1126542159/PocoDDSRuntime) — `dds runtime embedded`
- [jetson-inference](https://github.com/ph1126542159/jetson-inference) — `jetson nvidia ai`
- [OpenCat](https://github.com/ph1126542159/OpenCat) — `robot embedded`
- [PythonRobotics](https://github.com/ph1126542159/PythonRobotics) — `robotics python`
- [fprime](https://github.com/ph1126542159/fprime) — `embedded framework`
- [testRos](https://github.com/ph1126542159/testRos) — `ros test` — Cleanup 候选

## 5. 3D / Game / GIS / Vision

- [3DCS](https://github.com/ph1126542159/3DCS) — `3d cpp`
- [3DScene](https://github.com/ph1126542159/3DScene) — `3d scene`
- [Terrain3D](https://github.com/ph1126542159/Terrain3D) — `3d terrain`
- [QGIS](https://github.com/ph1126542159/QGIS) — `gis qgis reference`
- [qgis3d](https://github.com/ph1126542159/qgis3d) — `gis 3d`
- [LAStools](https://github.com/ph1126542159/LAStools) — `lidar pointcloud gis`
- [AliceVision](https://github.com/ph1126542159/AliceVision) — `vision photogrammetry 3d`
- [godot](https://github.com/ph1126542159/godot) — `game engine reference`
- [ogre](https://github.com/ph1126542159/ogre) — `3d engine reference`
- [ogre-next](https://github.com/ph1126542159/ogre-next) — `3d engine reference`
- [skylicht-engine](https://github.com/ph1126542159/skylicht-engine) — `game 3d engine`
- [NoahGameFrame](https://github.com/ph1126542159/NoahGameFrame) — `game framework`
- [cpp-game-engine-book](https://github.com/ph1126542159/cpp-game-engine-book) — `game engine cpp learning`

## 6. Quant / Finance

- [QuantTradingSystem](https://github.com/ph1126542159/QuantTradingSystem) — `quant trading`
- [Trading](https://github.com/ph1126542159/Trading) — `trading`
- [stock](https://github.com/ph1126542159/stock) — `stock market`

## 7. Tools / Utility / General Software

- [it-tools](https://github.com/ph1126542159/it-tools) — `tools web utility`
- [AppFlowy](https://github.com/ph1126542159/AppFlowy) — `productivity app`
- [Motrix](https://github.com/ph1126542159/Motrix) — `downloader desktop`
- [rustdesk](https://github.com/ph1126542159/rustdesk) — `remote desktop`
- [Ghost-Downloader-3](https://github.com/ph1126542159/Ghost-Downloader-3) — `downloader`
- [nps](https://github.com/ph1126542159/nps) — `network proxy`
- [openui](https://github.com/ph1126542159/openui) — `ui tool`
- [workflow](https://github.com/ph1126542159/workflow) — `workflow automation`
- [VulChecker](https://github.com/ph1126542159/VulChecker) — `security scanner`
- [HEU_KMS_Activator](https://github.com/ph1126542159/HEU_KMS_Activator) — `activation utility` — Review
- [kms-activate](https://github.com/ph1126542159/kms-activate) — `activation utility` — Review

## 8. Learning / Reference / Collection

建议以后尽量使用 Star 收藏原项目；只有确实需要修改或固定版本时才保留 Fork。

- [project-based-learning](https://github.com/ph1126542159/project-based-learning)
- [Python-100-Days](https://github.com/ph1126542159/Python-100-Days)
- [CS-Books](https://github.com/ph1126542159/CS-Books)
- [git-recipes](https://github.com/ph1126542159/git-recipes)
- [awesome-fenix](https://github.com/ph1126542159/awesome-fenix)
- [Inconsolata](https://github.com/ph1126542159/Inconsolata)
- [JetBrainsMono](https://github.com/ph1126542159/JetBrainsMono)
- 以及上面各功能域中标记为 `reference / guide / learning / docs` 的仓库。

## 9. Cleanup Queue / 待清理

> 此区只列候选，当前不删除。

| Repository | 原因 | 下一步 |
|---|---|---|
| [testRos](https://github.com/ph1126542159/testRos) | 测试命名、体积很小 | 核对后 Archive/Delete |
| [PlushTest](https://github.com/ph1126542159/PlushTest) | Test 命名、体积很小 | 核对后 Archive/Delete |
| [NewJob](https://github.com/ph1126542159/NewJob) | 临时命名 | 核对用途 |
| [Summary2023](https://github.com/ph1126542159/Summary2023) | 年度历史仓库 | Archive 候选 |
| [ctkDemo](https://github.com/ph1126542159/ctkDemo) | Demo 项目 | Archive 候选 |
| [Qt-Open-Source-Project](https://github.com/ph1126542159/Qt-Open-Source-Project) | 参考集合 | Reference/Archive |
| [CS-Books](https://github.com/ph1126542159/CS-Books) | 学习收藏 | Reference/Archive |
| [git-recipes](https://github.com/ph1126542159/git-recipes) | 学习收藏 | Reference/Archive |

## 10. Organization Migration / 组织迁移计划

当前 GitHub App 只可见个人账号仓库，组织仓库尚未暴露给当前连接。因此暂不迁移或删除 Organization。

组织可读后按以下顺序执行：

1. 扫描所有 Organization 及其仓库。
2. 将每个组织仓库映射到本文件的功能域。
3. 检查个人账号是否存在同名仓库冲突。
4. 先迁移仓库，再验证 Issues / PR / Wiki / 默认分支。
5. 清空组织。
6. 最后才删除无用途 Organization。

---

## 状态约定

- **Keep**：正式项目，保护。
- **Review**：用途不明确，需要核对。
- **Reference**：第三方源码、Fork、教程、资料。
- **Archive**：保留历史但不再活跃。
- **Delete Candidate**：确认无价值后才删除。

> 原则：**先分类，再归档；先迁移，再删除。**
