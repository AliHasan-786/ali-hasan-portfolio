# Project Integration

Cornell extensions also follow the [research extension standard](./RESEARCH_STANDARD.md).
Deployment and scientific contribution are separate acceptance gates.
Visual and interaction review follows the shared [design system](../DESIGN.md).
The portfolio coordinator owns final art direction and release design review.

Projects keep their own design, stack, views, and interactions. The portfolio
hub supplies discovery and introductions; each project supplies its deeper
experience. Independent demo deployments are the default. Embedding or importing
a component is optional.

## Handoff Metadata

A repository-root `portfolio.json` is convenient. An existing portfolio-entry
Markdown file is also acceptable. Keep missing values null.

```json
{
  "contractVersion": 1,
  "id": "stable-project-id",
  "title": "Project title",
  "course": "Course or independent project",
  "semester": "Spring 2026",
  "oneLine": "What a visitor can explore and why it matters.",
  "themes": ["Product", "Engineering", "Data"],
  "role": "Contribution and collaborator credits",
  "status": "local-demo",
  "evidenceStage": "preliminary",
  "primaryMetric": null,
  "demoUrl": null,
  "repoUrl": null,
  "writeupUrl": null,
  "thumbnail": null,
  "featured": false,
  "release": {
    "commit": null,
    "checkedAt": null,
    "publicationStatus": "pending"
  },
  "evidence": []
}
```

`status` describes implementation/release state. `evidenceStage` describes
results: `planned`, `coursework`, `preliminary`, or `confirmatory`. A completed
interface can still display preliminary evidence. Approval to publish is a
separate fact. Older metadata using the original fields remains compatible.

Every headline number should have an evidence entry identifying its artifact,
revision, sample/denominator, and scope. Label class results, later experiments,
synthetic simulations, and illustrative charts distinctly. Passing software
tests is separate from completing an experiment.

## Visitor Experience

Explain the question, the interaction, and the author's role on the first screen.
Provide a useful visual, control, or inspectable artifact. Make methods,
limitations, sources, credits, and completed versus planned work easy to find.
Use labeled controls, keyboard support, a readable mobile layout, and
reduced-motion behavior where relevant.

There is no required tab count, page layout, shared navigation model, or
framework. A stable demo URL is enough; deep links to specific views are useful
when the project supports them.

## Assets and Builds

- Use relative or deployment-aware asset URLs.
- Ship compact, reviewed public derivatives with provenance and licenses.
- Keep credentials, private raw data, large experiment outputs, and internal
  coordination files outside public bundles and repositories.
- Provide a stable thumbnail with alternative text when ready.
- Document the actual install, build, serve, and validation commands. Static
  HTML projects do not need an npm build.
- Prefer cached examples or static artifacts for core exploration so optional
  model providers can be unavailable without breaking the experience.

For optional component imports, document props, dependencies, style namespaces,
and routing/base-path assumptions. For optional iframes, document height,
accessibility, mobile behavior, and framing headers.

## Ownership and Release

Project chats own their project repositories. The portfolio chat owns edits to
the hub. Keep an existing hub ID when changing a title or design so links and
references remain stable.

A release handoff names the repository, branch/commit, implemented capabilities,
validated evidence, demo URL, limitations, approval state, and next milestone.
Existing spending, credential, dataset, and publication decisions remain in force.

The hub uses reviewed metadata snapshots. It does not fetch arbitrary repository
metadata at runtime or silently promote new experiment output into a headline.
