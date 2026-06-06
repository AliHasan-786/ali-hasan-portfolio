# Portfolio Strategy

## Positioning

This site should function as a one-stop portfolio for three reader types:

- Recruiters need a fast proof scan: role target, credible metrics, recognizable domains, and contact links.
- Hiring managers need case studies: problem, constraints, role, approach, outcome, and evidence.
- Technical reviewers need depth: architecture, methods, evaluation design, failure modes, and reproducible artifacts.

## Research Takeaways

Current strong engineering and data portfolios usually combine:

- A clear landing page with strong typography and fast navigation.
- Project cards that summarize problem, solution, measurable result, and technologies.
- Case-study pages or expandable panels for deeper context.
- Interactive or visual artifacts for data/ML work instead of static technical summaries.
- Confidential-work boundaries that demonstrate judgment instead of oversharing.

Sources reviewed:

- Site Builder Report software engineering portfolio examples: https://www.sitebuilderreport.com/inspiration/software-engineer-portfolios
- dan1d.dev interactive engineering portfolio: https://dan1d.dev/
- Michael Princ data science portfolio case-study structure: https://michaelprinc.com/en/portfolio/
- Alex Labuda ML/data project and visualization structure: https://www.alex-labuda.com/projects/
- TechRepublic guidance on confidential client portfolio work: https://www.techrepublic.com/article/including-clients-projects-in-your-portfolio/

## Recommended Build Order

1. Ship the portfolio shell and navigation first.
2. Convert House IQ and Myridius into sanitized case files.
3. Expand Cornell Tech projects one at a time into interactive labs.
4. Add PromptPlay as the first personal project once a repo or deployed demo exists.
5. Add downloadable resume and optional tailored PDFs only after the public copy is finalized.

## Project Compatibility Contract

Separate Cornell project builds should follow the metadata and asset rules in
`CORNELL_PROJECT_COMPATIBILITY.md`. They do not need a shared UI template; they only need enough common metadata for the main portfolio to index, summarize, link, and optionally embed them.

## Cornell Lab Expansion Targets

- Generative Models: Watermark threshold explorer, quality/detectability slider, attack-lab comparison.
- Deep Learning: CLIP embedding drift scrubber and early-warning monitor.
- Reinforcement Learning: Housing dispatch simulator with fairness/resource sliders.
- Fairness ML: Haitian Creole healthcare translation routing and human-review workflow.
- Data Science in the Wild: Yelp/rent ZIP-year explorer with metro/year controls.
- Startup Studio: CaseKick state-machine demo and synthetic attorney dashboard.
- Applied ML: Sports time-series bias-variance explorer.
