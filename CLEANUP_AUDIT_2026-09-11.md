# GitHub Repository Cleanup Audit — 2026-09-11

> 第二阶段清理审计。当前范围仅覆盖 `ph1126542159` 个人账号；Organization 尚未通过当前 GitHub App 暴露，因此组织仓库暂不纳入本轮。
>
> 原则：先核验，再归档/删除。原创项目默认保护；第三方 Fork 只有在确认 **ahead_by = 0**（没有个人独有提交）后才进入删除候选。

## A. 已核验：可进入“删除 Fork”候选

| Repository | 上游 | 差异状态 | 建议 |
|---|---|---:|---|
| `Summary2023` | `OpenGithubs/Summary2023` | identical / ahead 0 / behind 0 | 可删除个人 Fork，改为 Star 原仓库 |
| `NewJob` | `IcarusRyy/NewJob` | behind 2 / ahead 0 | 可删除个人 Fork，改为 Star 原仓库 |
| `CTK-project` | `myhhub/CTK-project` | identical / ahead 0 / behind 0 | 可删除个人 Fork，改为 Star 原仓库 |
| `Qt-Open-Source-Project` | `masterchen/Qt-Open-Source-Project` | identical / ahead 0 / behind 0 | 可删除个人 Fork，改为 Star 原仓库 |
| `CS-Books` | `forthespada/CS-Books` | behind 8 / ahead 0 | 可删除个人 Fork，改为 Star 原仓库 |
| `gpt-webcodex` | `3169657175/gpt-webcodex` | identical / ahead 0 / behind 0 | 新 Fork；若只是参考，可删除；若准备二次开发则保留 |

## B. 原创但属于旧测试 / Demo：建议先 Archive

| Repository | 已核验情况 | 建议 |
|---|---|---|
| `PlushTest` | 非 Fork；“自动化发布测试”；2024-10 后无更新；体积很小 | **Archive 优先**，确认无用途后再删除 |
| `ctkDemo` | 非 Fork；CTK 插件系统演示；2024-05 后无更新 | **Archive**，作为历史 Demo 保留 |
| `testRos` | 非 Fork；无描述；2025-12 后无更新；约 10 KB | **Archive**，确认无本地依赖后可删除 |

## C. 原创项目：暂不动

以下项目属于原创或当前用途不够明确，本轮禁止自动删除：

- `3DCS`
- `3DScene`
- `myiot`
- `PocoDDSRuntime`
- `DistriFrameWork`
- `PRO_M3`
- `QuantTradingSystem`
- `Trading`
- `stock`
- `MyPage`
- `obsidian-vault`
- `AppMgr`

## D. 下一批重点核验

优先检查这些明显像第三方源码/参考工程的仓库是否存在个人独有提交：

`QGIS`, `godot`, `ogre`, `ogre-next`, `grpc`, `flutter`, `Catch2`, `doctest`, `stb`, `PythonRobotics`, `d2l-zh`, `AppFlowy`, `Motrix`, `AliceVision`, `fprime`, `OpenCat`, `TrinityCore`, `tdesktop`, `trilium`, `vlc-qt`, `thrift`, `jetson-inference`。

判定规则：

- **Fork + ahead_by = 0** → 删除 Fork 候选；以后用 Star 收藏原仓库。
- **Fork + ahead_by > 0** → 保留，进入“个人修改 Fork”组。
- **非 Fork + test/demo/sample + 长期不活跃** → Archive 优先。
- **非 Fork + 明确自研项目** → Keep，并逐步补 Description / Topics。

## E. 组织整理状态

当前 GitHub App 仍只安装在个人账号 `ph1126542159`。截图中的多个 Organization 尚不可读，因此暂时不能安全执行仓库迁移或组织删除。

最终目标仍是：

1. 组织仓库全部盘点；
2. 有价值仓库先迁回统一归属；
3. 确认仓库完整后清空多余组织；
4. 最后再删除无用途 Organization。
