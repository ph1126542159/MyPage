# Product Design QA

- Source visual truth: `design-audit/aurora-3dcs-reference.png`
- Primary user reference: `C:/Users/ph001/AppData/Local/Temp/codex-clipboard-359605bc-3836-4439-8e3f-f11c679a633f.png`
- Desktop viewport tested: 1440 x 1000
- Mobile viewport tested: 390 x 844
- Browser: Codex in-app browser against the local Vite build

## Fidelity result

The rebuilt page follows the selected Aurora reference structure: compact fixed navigation, cinematic planet-and-portrait hero, seven-column proof rail, editorial alternating project rows, OpenDVA / 3DCS as project 02, orbital capability map, horizontal career timeline, and an atmospheric closing contact panel.

The composition uses the real portrait and project evidence. The supplied 3DCS interface remains legible and is paired with functional descriptions of the 3D assembly tree, GD&T and measurement, Monte Carlo simulation, AAO optimization, batch processing, and reporting.

## Responsive checks

- Desktop hero retains the intended two-line display headline, portrait integration, and identity column.
- Desktop project rows preserve the alternating image/text rhythm and thin cyan dividers.
- At 390px, the headline is two lines, the portrait remains atmospheric rather than obscuring copy, and the proof rail scrolls without a visible scrollbar.
- Mobile project rows collapse to a single reading column, the orbit becomes a compact capability grid, and the timeline becomes vertical.

## Interaction and runtime checks

- Navigation anchors: passed.
- Mobile menu open/close: passed.
- 3DCS project detail expand/collapse: passed; detail copy becomes visible.
- Resume link: passed and points to `resume/Peng-Hui-Resume.pdf`.
- Contact action: preserved as a mail link.
- Browser console warnings/errors: none during the final desktop interaction pass.
- Production build: passed.
- GitHub Pages base-path build (`/MyPage/`): passed and emitted base-prefixed assets.

## Remaining visual differences

- The target is a concept image rather than a browser capture, so exact image crops vary by viewport.
- Real project photographs replace any invented imagery while preserving the target layout and tone.

final result: passed

## 2026-10-09 — OpenDVA / 3DCS project showcase

- Added a six-image gallery with captions: workbench preview, tolerance/GD&T, measures, simulation, actual contributors, and AAO workspace.
- Five added images are copied unchanged from `E:/3DCS/build/artifacts/full-product-2026-10-06/stage6bc-shared27/release-full-acceptance-fresh-r1/`. Sources: `batch-1012-1016/images/hud-collision/hud-collision-tolerances-phase2-zh_CN-resized.png`; `batch-1016-1020/images/hud-collision/hud-collision-measures-phase2-zh_CN-resized.png`; `batch-1060-1064/images/scale-1/actual-results.png`; `batch-1072-1076/images/native-results-scale-1/phase1-zh_CN-section2-window.png`; `batch-1028-1032/images/index-1030-378e9c21-d8cb-46d5-bad2-d2fd7bfbabe2/aao-stability-1-zh_CN.png`.
- Existing workbench image remains a visual preview. Captions identify built-in car-body demonstrations and distinguish them from actual validation-model results.
- Added six feature explanations, a five-step workflow, development status, and links from the project navigation and existing summary.
- Browser: all six gallery selections loaded the matching image; enlarged viewer opened and closed. No console warnings/errors were observed.
- Responsive check: 390 × 844 viewport, six thumbnails arranged in two rows, no horizontal page overflow.
- Local production and `/MyPage/` base-path builds passed; emitted image files are present. Screenshot evidence: `design-audit/3dcs-desktop-2026-10-09.jpg` and `design-audit/3dcs-mobile-2026-10-09.jpg` (local QA artifacts).
- This verifies the website presentation, not full software acceptance. Current functionality boundaries are based on the 3DCS README and `docs/reports/2026-10-08-screenshot-current-evidence.md`.

## 2026-10-09 — Compact portfolio for hiring reviewers

- Audience confirmed by the user: recruiters and technical leaders. The hero now identifies C++ / systems / industrial software work, with representative products and a resume action.
- Three projects share a selector; CodeX Assistant is the default. Each shows three implementation highlights. Full functions and workflows remain available through a native details control. All original project images and development-status notes are retained.
- Removed duplicate 3DCS and generic AI summary rows; kept robotics field experience. Career details are collapsed by default. Reduced navigation and spacing.
- At the same 1280px desktop viewport, default document height changed from 8664px to 3648px (57.9% reduction). At 390px mobile, height changed from 13438px to 4660px (65.3% reduction). Measurements apply to the default CodeX view with details closed.
- Browser checks: all three project selections show one panel; detailed features expand and collapse; the 3DCS hash reveals its panel; image selection updates the caption; the GD&T enlarged image loads and closes. Mobile has no horizontal overflow. Console warning/error capture is empty.
- Root and `/MyPage/` production builds passed, along with Git whitespace checks. Local visual evidence: `design-audit/compact-home-2026-10-09.jpg`.
- Hiring evidence to add when available: personal responsibility, an important engineering tradeoff, and reproducible outcome metrics. No performance improvements or user counts were invented.
