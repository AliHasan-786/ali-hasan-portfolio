# THE INDEX — Evidence Labs brand system v2

One identity across the portfolio hub and every lab it links to. Reference
implementation: `portfolio-site/src/styles.css` (live). Canonical tokens:
`brand/brand.css`.

**The concept.** The portfolio is an *index of numbered labs* — LAB 01, LAB
02, LAB 03 — presented like a design catalog, not a résumé. Premium restraint
in the chrome (bone, ink, hairlines, zero radius); personality in the
artifacts (huge Clash Display numbers, flag-orange index marks, real product
screenshots). Influences: Linear (one huge plain sentence, product as hero),
Apple (monochrome stage, one accent moment), The Pudding (numbered entries,
artifact-first), Persona 5 (one violent accent, everything indexed).

## The system in one table

| Element | Rule |
| --- | --- |
| Stage | Bone `#F2F0EA`, panels `#FBFAF7`, hairlines `#D8D4C8`, ink `#131311` |
| Dark chapter | `#0F0F0E` → `#171716`, hairlines `rgba(242,240,234,.16)` |
| Accent | **One**: flag orange `#E8490F` (hover `#C43A08`). Same in every property. |
| Signals | good `#2E7D4F` · warn `#C28A1E` — data meaning only, never decoration |
| Display | Clash Display 600, tracking −0.02em, line-height 0.94 |
| Text | Switzer 400/500/600 |
| Data/index | IBM Plex Mono — eyebrows, course codes, metrics labels, footers, 01/02/03 |
| Radius | 0. No pills, no soft shadows, no gradients, no backdrop blur. |
| Separation | Hairlines + whitespace. Card boxes only for interactive detail panels. |

## Signature moves

1. **The statement hero.** One short declarative sentence, massive
   ("I build trust systems that show their work."). No decoration behind it.
2. **Dash eyebrow.** `— MONO LABEL` in flag orange opens every section.
3. **Numbers as graphic objects.** `$5.8B` / `50k/day` / `15-step` set in
   Clash Display with a plain-language label and one-line qualifier.
   Scale-first: lead with the biggest *true* number; caveats live in the
   qualifier line, methods pages carry the fine print.
4. **The index.** Labs are numbered 01/02/03 in mono. Flat hairline columns,
   never card grids. Active item gets a 3px flag bar on the left.
5. **The ↗ mark.** External/live actions are mono-caps bordered links whose
   arrow is always flag orange.
6. **Shared wordmark + labs footer.** `AH · ALI HASAN / EVIDENCE LABS`
   top-left everywhere; dark mono footer cross-linking all four properties
   with `aria-current="page"` on the current one.

## Applying it per property

### portfolio-site — DONE (reference)
`src/styles.css` is the live implementation of this system.

### crypto-scam-moderation-lab (LAB 01)
⚠️ First: the Vercel deployment runs code matching **no GitHub commit**
(different `app.js`/`styles.css` hashes). Locate that newer source
(`vercel ls`, other machine), commit and push before restyling. Then:
replace `:root` in `crypto-scam-lab/styles.css` with brand tokens
(`--bg→--bone`, `--panel→--panel`, `--accent #4f46e5 indigo→--flag`,
kill `--hero-grad` for flat `--dark`), load the three brand fonts, set the
landing hero in Clash Display, keep the operator console in Switzer/Plex
Mono, add wordmark + labs footer, radius 0.

### representation-drift-lab (LAB 02) — local at ~/Documents/Deep Learning Project
Stays **dark** (the family's dark chapter): ground `--dark`, panels
`--dark-2`. Its acid green `#c5f36b` retires; accents become flag orange
(verify AA on dark: it passes for large text/marks; keep body text bone).
Swap Avenir/DM Mono/Newsreader for Switzer/Plex Mono/Clash Display; hero
"forget?" italic becomes Clash Display with the word in flag. Add wordmark
+ labs footer. Fonts load in `apps/web/index.html`.

### nyc-housing-inspection-rl (LAB 03, `web/`)
Replace `:root` in `src/app/globals.css` with brand tokens; Georgia serif →
Clash Display; Arial → Switzer; labels → Plex Mono; its vermillion
`#f05a35` → flag; navy ink → brand ink; dark panels → `--dark`. Add
wordmark + labs footer. Also: the hero preview's invented numbers must be
replaced with precomputed simulator outputs before deploying (see audit).

## Scale-first copy rules (applies with the design)

- Above the fold, only needle-moving true numbers: $5.8B problem, 50k/day
  economics, 199→13 reviewer curve, 15-step CI gate, arXiv publication,
  production PRs. Sample-size caveats live one level down, in mono
  qualifiers and methods pages — present, honest, but not the headline.
- Every lab is framed as a **product with a job**, never "coursework":
  "a working moderation console", "a model-behavior laboratory", "a civic
  decision tool". The word "assignment" is banned above the fold.
- Path to real scale signals (do these, don't fake them): deploy all three
  labs publicly, add privacy-safe analytics, publish the blog post, launch
  on LinkedIn — then "N sessions / M countries" becomes a true stat.

## Don'ts

- No second accent color. No border-radius. No soft shadows. No gradients.
- No emoji in UI chrome. No "✨/🚀" anywhere.
- Signals never decorate; flag never colors body text.
- No headline metric without its one-line qualifier.
- Fraunces, Space Grotesk, and the v1 warm-earth palette are retired —
  don't mix v1 and v2.
