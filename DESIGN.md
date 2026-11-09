# Evidence Labs Design System

Owner: Ali Hasan's portfolio coordinator and lead designer. Updated 2026-11-08.
This is the shared visual and interaction contract, not a mandatory page template.

Writing follows [WRITING.md](./WRITING.md): plain language, concrete actions,
short explanations, no em dashes or stock AI phrasing. Copy is part of design
review, not a finishing pass after layout.

## Direction

An editorial research studio: confident typography, warm paper, precise data,
generous margins, and tools that reveal how a conclusion was reached. The work
is the spectacle. Avoid generic SaaS cards, ambient particles, fake terminals,
scroll hijacking, and ornamental dashboards.

The hub is an index and introduction. A project is an instrument for learning.
Keep project-specific layouts, stacks, tab counts, and established strengths.
Consistency should reduce relearning, not make every project look identical.

## Shared Grammar

| Role | Hub baseline | Project flexibility |
| --- | --- | --- |
| Canvas | Bone `#f2f0ea`, panel `#fbfaf7` | Warm paper or a deliberate ink inversion |
| Primary text | Ink `#131311` | Near-black or high-contrast light text |
| Accent | Vermilion `#e8490f` | One complementary project accent; do not overload status semantics |
| Accent text | Deep vermilion `#b83608` on paper; bright vermilion on ink | Verify the actual foreground/background pair, including hover states |
| Rules | `#d8d4c8`, fine dividers | Use alignment and spacing before adding containers |
| Display | Bricolage Grotesque Variable | An expressive open-licensed face or justified editorial serif |
| Body | Instrument Sans Variable | Readable open-licensed companion, not a default UI stack |
| Data | IBM Plex Mono | Tabular numerals, units, stable precision |

Fonts in the hub are self-hosted, pinned, unmodified OFL-1.1 packages. Preserve
license notices. Do not require a third-party font service for rendering.
Default fallbacks must remain readable. New visual/UI dependencies must be
open-source and license-reviewed; a free download is not automatically open-source.

Use a 4px spacing base, with 8/12/16/24/32/48/64/96px steps as a vocabulary,
not a reason to rewrite working project CSS. Reading columns should generally
stay near 55-75 characters. Give the main interaction more room than its prose.
Use a clear display/body/annotation hierarchy; do not turn every label into
tiny uppercase monospace. Balance short headlines without distorting body text.

## Visitor Progression

Design goals, not measured claims: understand the question in about 30 seconds,
learn something through a control in two minutes, and find methods/source in
five. Start with a useful example and a clear next action, not a configuration
wall. Reveal advanced settings progressively. Always provide a route back to
the portfolio and stable source/method links.

Every signature interaction must specify its input, observable output, evidence
source, and intended insight. A changed label or arbitrary browser formula is
not a meaningful demonstration. Cached measured replays are legitimate; call
them replays rather than live model runs. Unrun cells stay absent, not zero.

## Complementary Project Languages

| Project | Appropriate form | Signature interaction to validate |
| --- | --- | --- |
| Fairness audit | Paired-evidence workbench | Inspect a matched pair and trace flag/review/coverage tradeoffs without hiding harmful-catch loss |
| Watermarking | Text/provenance laboratory | Inspect real detector evidence across edits, lengths and calibrated false-positive costs; distinguish mechanics from benchmark detection |
| DeepShield | Controlled visual comparison | Compare original/protected/postprocessed edit outputs at matched settings, with visible quality costs and failures |
| Drift | Checkpoint observatory | Scrub training, compare new/retained performance, inspect class and representation changes |
| Housing | Dispatch/queue instrument | Compare frozen policy/capacity/access/seed runs; distinguish service from a queue reduced by deferral |
| Brunch Index | Cartographic data essay | Inspect metro/year/coverage transfer cells and loading stability, retaining adverse results |
| Crypto/StanceBench | Policy/review console | Follow source evidence through action, review burden and appeal; compare only compatible action contracts |
| House IQ/SETS | General practice stories | Inspect newly authored illustrative decisions, not reconstructed client systems |

These are acceptance targets, not claims that all interactions already exist.
No same-format requirement, forced global theme, or fixed number of tabs.

## Data, States, And Motion

Keep model/policy colors and mark identities stable across views. Use direct
labels, accessible tables, explicit denominators and uncertainty. Missing,
incompatible, failed and unrun are distinct states. Never silently rescale a
comparison or equate operational geography with demographic fairness.

Use motion to preserve orientation when a checkpoint, filter, or comparison
changes. Prefer short state transitions, not continuous animation. Respect
`prefers-reduced-motion`. Never animate text that a visitor is trying to read,
select or compare. Avoid typewriter introductions and looping word carousels.

## Open-Source Experiments

Variable typography is adopted where it improves hierarchy and responsive fit.
It must not cause layout shifts or conceal content while animating.

[json-render](https://github.com/vercel-labs/json-render) is a reviewed candidate
(Apache-2.0), not an installed dependency or a shipped feature. A later prototype
may compose allowlisted views over verified artifacts. It may not invent metrics,
run arbitrary code, introduce unsandboxed HTML, or mutate scientific evidence.
Model-backed composition is optional and separately access/budget-gated. The
core exploration must still work with deterministic saved views and no provider.
Reject the dependency if ordinary components solve the task more clearly.

## Release Review

The coordinator reviews design as well as claims and code before hub promotion.

- Inspect desktop, tablet and mobile, including 320px reflow and 200% text zoom.
- Exercise a complete meaningful interaction, reset it, and verify its source.
- Check keyboard operation, visible/unobscured focus and non-hover alternatives.
- Aim for comfortable 44px primary touch targets; verify WCAG 2.2 minimum size
  or spacing rules for compact controls, not an assumed blanket certification.
- Check text/control contrast, color-independent encodings, and reduced motion.
- Test loading, empty, missing-data, failed-provider and unavailable-model states.
- Verify font/asset loading, first-load performance, console errors and links.
- Supply a representative screenshot, artifact revision and a short visual
  review note. A passing unit suite is not visual acceptance.

## Design References

- [GOV.UK principles](https://www.gov.uk/guidance/government-design-principles):
  user needs and consistent patterns without uniform layouts.
- [Communicating with Interactive Articles](https://distill.pub/2020/communicating-with-interactive-articles/):
  choose interaction to support understanding rather than decoration.
- [Object Constancy](https://bost.ocks.org/mike/constancy/): preserve a viewer's
  ability to follow the same data through a transition.
- [W3C target-size guidance](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html):
  test actual control geometry and spacing.
