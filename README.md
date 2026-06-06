# Ali Hasan Portfolio

Interactive portfolio site for Ali Hasan, focused on AI safety, product-minded engineering, data science, and Cornell Tech project work.

## What This Is

The site is designed as a one-stop shop for recruiters, hiring managers, and technical reviewers:

- Fast reader modes for recruiter, hiring-manager, and technical scans.
- Sanitized professional case files for House IQ and Myridius/RCG work.
- Cornell Tech project lab with interactive starter visualizations.
- Dedicated shelf for side projects, starting with PromptPlay.

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

## Future Cornell Project Modules

Future coursework demos do not need to share one presentation style. They should follow the lightweight metadata and asset contract in [CORNELL_PROJECT_COMPATIBILITY.md](./CORNELL_PROJECT_COMPATIBILITY.md) so each project can be indexed or embedded cleanly by the main portfolio.

## Deployment

This is a Vite app and is compatible with Vercel. Default build command:

```bash
npm run build
```

Default output directory:

```text
dist
```
