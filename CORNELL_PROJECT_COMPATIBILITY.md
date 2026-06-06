# Cornell Project Compatibility Guide

Future Cornell projects do **not** need to share one layout, number of tabs, or visual style. A generative-models lab can be a threshold explorer, an RL project can be a simulator, and Startup Studio can feel like a product demo.

What they should share is a small integration contract so the main portfolio can link, summarize, and embed them without custom rewiring every time.

## Required Project Metadata

Each project should maintain a short metadata block. If the project is a standalone repo, put this in `portfolio.json`. If it lives inside this repo, export the same shape from a local data file.

```json
{
  "id": "llm-watermarking",
  "title": "Invisible Watermarking for LLMs",
  "course": "CS 5788 Generative Models",
  "semester": "Spring 2026",
  "oneLine": "Interactive lab for green-list logit-bias watermark detection and attacks.",
  "themes": ["AI provenance", "LLM evaluation", "security"],
  "role": "Co-author / implementation / evaluation",
  "status": "expanded-demo",
  "primaryMetric": "98.7% TPR on >=150-token completions",
  "demoUrl": "",
  "repoUrl": "",
  "writeupUrl": "",
  "thumbnail": "",
  "featured": true
}
```

## Required Narrative Fields

Every project should be able to answer these, even if the page design varies:

- **Problem:** What real question or product risk did this address?
- **Your role:** What did you personally own?
- **Method:** What technical approach did you use?
- **Result:** What changed, what did you measure, or what did you learn?
- **Failure mode:** What did not work, or what limitation matters?
- **Extension:** What would you build next if this became a production-quality artifact?

## Recommended Demo Interface

Use whichever format fits the project:

- **Embedded React module:** Best for small interactive visualizations inside the main portfolio.
- **Standalone Vite/Next app:** Best for complex demos with many views, state, or heavy assets.
- **Static artifact page:** Fine for research-heavy projects if it includes visual evidence and a clear narrative.
- **External hosted demo:** Fine when the project has its own deployment; the portfolio only needs metadata and a link.

If you build a standalone app, keep it compatible with Vercel:

- `npm run build` should pass locally.
- Avoid secrets for demo mode; use static sample data where possible.
- Put public assets under `public/` or documented asset paths.
- Add a short `README.md` with setup, build, and data provenance.

## Stable Asset Rules

- Use sanitized, public-safe data only.
- Store demo-sized datasets as `.json` or `.csv` under `public/data/` or `src/data/`.
- Keep large/private/raw files out of the repo.
- Prefer generated screenshots or thumbnails under `public/project-thumbnails/`.
- Do not depend on absolute local paths like `/Users/alihasan/...`.

## Main Portfolio Integration Options

When a project is ready, the main site only needs one of these:

- A route/component import if the demo lives inside `portfolio-site`.
- A `demoUrl` if the project is deployed separately.
- A `repoUrl` and `writeupUrl` if it is research-first.
- A `thumbnail` and `primaryMetric` for the Cornell Lab grid.

## Quality Bar

Before linking a project from the main portfolio:

- The demo should load without credentials.
- The first screen should explain the project in under 20 seconds.
- There should be at least one meaningful interaction, visual, or artifact.
- The page should distinguish completed work from future expansion.
- The project should be public-safe: no private company data, credentials, raw confidential docs, or unlicensed datasets.

## Suggested Freedom By Project Type

- **ML/research projects:** prioritize method, metrics, ablations, and failure modes.
- **Data science projects:** prioritize data provenance, cleaning choices, uncertainty, and interactive filters.
- **Product/startup projects:** prioritize user flow, market wedge, demo journey, and tradeoffs.
- **Safety/fairness projects:** prioritize threat model, policy/rubric, evaluation, and responsible deployment boundaries.
