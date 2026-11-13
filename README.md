# Ali Hasan Portfolio

Interactive portfolio for AI safety systems, evaluation programs, product work, data workflows, and Cornell Tech projects.

## Featured Project

The [Crypto Scam Moderation Lab](https://crypto-scam-lab.vercel.app) turns an investment-scam policy into an interactive Trust & Safety console with:

- model audit and reproducible baseline
- scenario, adversarial, hardening, evidence, and release-gate evals
- review queue, threshold controls, and campaign intelligence
- calibration, incident response, appeals, and transparency workflows
- bounded GenAI and agentic-abuse testing

The complete source and generated evaluation reports are available in [AliHasan-786/crypto-scam-moderation-lab](https://github.com/AliHasan-786/crypto-scam-moderation-lab).

## Local Development

```bash
npm install
npm run dev
```

Build check:

```bash
npm run build
```

Run the reviewed project-snapshot checks with `npm test`.

## Standalone Labs

- [The Brunch Index](https://the-brunch-index.vercel.app): an observational data essay across five metros, with a corrected 1,105-ZIP-year panel and explicit non-causal limits.
- [Representation Drift Lab](https://representation-drift-lab.vercel.app): a checkpoint explorer, class microscope, and adaptation comparisons with preliminary local three-seed evidence.

Reviewed snapshots and packaged thumbnails live in `src/projectReleases.js` and
`public/projects/`. These are not fetched from project repositories at runtime.
Share a selected project using `?project=yelp-rent#lab` or `?project=drift#lab`.

Hub controls do not manufacture performance curves. The crypto walkthrough
uses authored examples of the pinned written policy, not model predictions.
Watermarking currently explores evidence requirements, not a live detector.
The sports comparison transcribes saved coursework values with its source hash
in `public/evidence/sports-coursework.json`; it is not a fresh experiment.

## Work Case Studies

Experience has one entry per workplace: American Express, House IQ, Cornell
Tech SETS, and Myridius. House IQ has no project breakdowns or scenarios.
Amex lists the current affiliation without work details. SETS links to public
Cornell coverage. PromptPlay remains parked. The `#labs` directory links all
six released demos.

## Project Structure

The lead-design contract is [DESIGN.md](./DESIGN.md): shared visual grammar,
project-specific interactions, open-source experiments and release review.
Fonts are self-hosted; attribution is in [THIRD_PARTY.md](./THIRD_PARTY.md).

```text
src/App.jsx       Main React application and portfolio content
src/styles.css    Visual system, responsive layout, and chart styling
src/main.jsx      React entrypoint
```

Future coursework demos follow the lightweight [project integration guide](./docs/PROJECT_INTEGRATION.md). Each project keeps its own design, stack, views, and interactions; independent demo links are the default integration. The portfolio chat owns the hub, and project chats supply reviewed metadata and evidence handoffs.

## Deployment

The Vite application is deployed on Vercel. Production builds use `npm run build` and publish `dist/`.
