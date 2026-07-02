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

## Project Structure

```text
src/App.jsx       Main React application and portfolio content
src/styles.css    Visual system, responsive layout, and chart styling
src/main.jsx      React entrypoint
```

Future coursework demos follow the lightweight metadata and asset contract in [CORNELL_PROJECT_COMPATIBILITY.md](./CORNELL_PROJECT_COMPATIBILITY.md), allowing each project to retain its own interaction and presentation model.

## Deployment

The Vite application is deployed on Vercel. Production builds use `npm run build` and publish `dist/`.
