import React, { useState } from "react";
import { projectReleases } from "./projectReleases";
import { workStories } from "./workStories";
import { deepShieldSourceCase, housingSourceCase } from "./sourceCases";
import { policyCases, policySource, watermarkQuestions } from "./explorationCases";
import sportsCoursework from "./sports-coursework.json";

const trustSafetyLabUrl = "https://crypto-scam-lab.vercel.app";
const trustSafetyRepoUrl = "https://github.com/AliHasan-786/crypto-scam-moderation-lab";

const heroCopy = {
  headline: "I build trust systems that show their work.",
  focus:
    "Cornell Tech M.Eng. working in AI evaluation and safety. I build and stress-test AI systems, from policy-grounded safeguards to reliable evaluation and multimodal workflows. My work spans House IQ, Cornell Tech's SETS AI Red Team Clinic, and enterprise AI delivery. Explore practical decisions from my work and inspect the methods, evidence, and limits behind my independent labs.",
};

const artifactLedger = [
  {
    title: "Policy boundary",
    text:
      "Crypto-fraud enforcement is separated from warnings, satire, market news, debugging, and help-seeking.",
  },
  {
    title: "Evaluation program",
    text:
      "Scenario, adversarial, production-hardening, evidence-faithfulness, calibration, and launch-gate checks are executable artifacts.",
  },
  {
    title: "Reviewer workflow",
    text:
      "The lab includes queue states, evidence views, threshold tuning, appeals, transparency, and reviewer decision history.",
  },
  {
    title: "Operational loop",
    text:
      "SQL-readable analytics track backlog, review coverage, action mix, false-positive candidates, entity leads, and incident readiness.",
  },
];

const proofStats = [
  {
    value: "Speaker intent",
    label: "Policy boundary",
    detail: "Distinguishing scam promotion from warnings, reporting, and help-seeking",
  },
  {
    value: "50k/day",
    label: "Scale economics modeled",
    detail: "Every review threshold priced in queue load, reviewers, and payroll",
  },
  {
    value: "15-step",
    label: "Executable release gate",
    detail: "Reproducible checks regenerate and verify benchmark reports before release",
  },
  {
    value: "Human review",
    label: "Evaluation practice",
    detail: "Designing how automated judgments are checked against human evidence",
  },
  {
    value: "Policy to code",
    label: "Safety engineering",
    detail: "Connecting written boundaries, product behavior, and regression tests",
  },
  {
    value: "arXiv",
    label: "Research preprint",
    detail: "Co-author, Scaling the Queue — RL for NYC municipal complaint triage",
  },
];

const caseFiles = [
  {
    org: "House IQ",
    title: "Designing trustworthy AI evaluation",
    date: "2026",
    status: "Shipped analysis, owns follow-on",
    tags: ["LLM-as-judge", "evals", "measurement integrity", "AI quality"],
    summary: "I work on the question behind an automated quality score: what evidence makes it trustworthy enough to inform a product decision?",
    lead:
      "My work includes examining automated evaluation, understanding the limits of a metric, and designing human validation around the decisions it is meant to support.",
    body:
      "The important engineering question is not simply whether a judge produces a score. It is whether the rubric is meaningful, the sample reflects the intended use, disagreement is understood, and uncertainty remains visible to the person making a decision.",
    did: [
      "Examined the relationship between automated judgments and human evidence.",
      "Designed the calibration program end to end: stratified sampling, blind labeling, agreement statistics with confidence intervals, and failure-recall.",
      "Built supporting statistical tooling while keeping proposed evaluation work separate from measured outcomes.",
    ],
  },
  {
    org: "House IQ",
    title: "Owning safety for a customer-facing generative AI feature",
    date: "Dec 2025 - present",
    status: "Shipped",
    tags: ["AI safety", "red teaming", "guardrails", "LLM-as-judge"],
    summary: "I connect written safety policy, evaluation, and application behavior for generative-AI features.",
    lead:
      "My responsibilities span safety-policy design, multimodal evaluation, adversarial testing, and application-level safeguards for generative-AI features.",
    body:
      "The public takeaway is a design principle, not a description of internal architecture: safety depends on how policy, model judgment, failure handling, and product behavior work together. Testing needs to cover the surrounding workflow as well as the model.",
    did: [
      "Translated harm-policy requirements into evaluable criteria and application checks.",
      "Developed adversarial tests and regression coverage around intended product behavior.",
      "Worked on threat modeling and clear boundaries between tested behavior and planned evaluation.",
    ],
  },
  {
    org: "House IQ",
    title: "Defining what a good answer looks like",
    date: "2026",
    status: "In progress",
    tags: ["product judgment", "evaluation", "benchmark design", "AI quality"],
    summary: "Deciding what \u201cgood\u201d means may be the hardest problem in an AI product. I own the system the team uses to define and measure it.",
    lead:
      "I design evaluation workflows around a product question: what does a good answer look like for the person relying on it?",
    body:
      "Useful scenarios should represent intended use rather than reward a system for agreeing with itself. My work separates scenario construction from evaluation, makes rubrics explicit, and treats comparison results as evidence to inspect rather than an automatic verdict.",
    did: [
      "Authored and reviewed product-grounded evaluation scenarios.",
      "Packaged scenario-generation and independent-validation workflows into reusable tooling.",
    ],
  },
  {
    org: "House IQ",
    title: "Shipping AI that survives real, messy user data",
    date: "2026",
    status: "Shipped",
    tags: ["production ML", "multimodal", "performance", "reliability"],
    summary: "I work on making multimodal AI useful when real inputs are incomplete, inconsistent, or difficult to process.",
    lead:
      "I built document and image-processing capabilities that turn heterogeneous inputs into structured information for product workflows.",
    body:
      "The challenge is the system around the model: input handling, bounded resource use, partial failures, observability, and integration with the surrounding service. I improved that workflow without assuming every document or image arrives in an ideal format.",
    did: [
      "Extended the pipeline to the formats real users bring: scanned PDFs, embedded-office images, and iPhone photos.",
      "Adapted the implementation to production service patterns through engineering review.",
    ],
  },
  {
    org: "House IQ",
    title: "The data foundation under a product feature",
    date: "2025 - 2026",
    status: "Shipped",
    tags: ["data modeling", "semantic search", "product infrastructure"],
    summary: "A recommendation feature is only as good as the data under it. I designed that foundation from an industry standard and built the pipeline that fills it.",
    lead:
      "I designed structured domain-data foundations and the processing workflows that make them usable by a product.",
    body:
      "That work connects taxonomy design, retrieval, validation, and human review. The public lesson is that reliable AI behavior often depends on careful data modeling and uncertainty handling, not just model selection.",
    did: [],
  },
  {
    org: "Cornell Tech SETS AI Red Team Clinic",
    title: "Red-teaming high-stakes public-sector AI",
    date: "Oct - Nov 2025",
    status: "Inaugural cohort",
    tags: ["red team", "public-sector AI", "adversarial testing"],
    summary: "I was part of the inaugural SETS AI Content Red Team Clinic cohort, working on public-sector AI assessment.",
    lead:
      "The clinic brought students and public-sector practitioners together to examine the behavior and limits of AI tools. Cornell's public account names the inaugural cohort and describes the engagement with New York City's health department.",
    body:
      "My contribution included adversarial test design and review-oriented evaluation work with the team: define intended use, test behavior across contexts, organize evidence for human review, and communicate the limits of an observation.",
    did: [],
    links: [
      { label: "Cornell Tech: the clinic", href: "https://tech.cornell.edu/news/red-team-clinic-cornell-tech/" },
      { label: "Cornell Chronicle", href: "https://news.cornell.edu/stories/2025/12/red-team-students-stress-test-nyc-health-departments-ai" },
    ],
  },
  {
    org: "Myridius",
    title: "Enterprise AI assistants, client-facing",
    date: "Oct 2024 - Jul 2025",
    status: "Built and demoed",
    tags: ["RAG", "enterprise AI", "client delivery"],
    summary: "Built and delivered retrieval assistants for 10+ businesses, and defined what they were and weren't allowed to answer.",
    lead:
      "I built and demoed enterprise knowledge assistants for more than ten businesses, and the interesting part was drawing the lines: which sources they could use, when they should refuse, and where a human had to take over.",
    body:
      "I structured product and travel data behind a retrieval assistant in Databricks, presented working future-state demos to executives and clients, and delivered the market-analysis dashboards that turned customer evidence into decisions for leadership.",
    did: [],
  },
];

const courseProjects = [
  {
    id: "crypto-scam-lab",
    course: "CS 5342 Trust & Safety",
    title: "Crypto Scam Moderation Lab",
    theme: "Platform policy",
    metric: "Op F1 0.94",
    caption: "Bluesky-compatible moderation system that turns an investment-scam policy into evals, reviewer decisions, incident response, appeals, and campaign intelligence.",
    bullets: [
      "Defined the investment-scam boundary across ABC and AIM: wallet drainers, fake recovery, airdrops, and impersonation are in scope; warnings, news, satire, debugging, and help-seeking are protected.",
      "Audited the original hybrid classifier, then built a reproducible v2 baseline with TF-IDF, policy features, calibrated thresholds, explicit review tiers, and contextual evidence guardrails.",
      "Built scenario, adversarial, hardening, evidence-faithfulness, and calibration evals that separate public-label safety from review-or-label recall.",
      "Expanded the classifier into an interactive console with a review queue, custom tester, campaign graph, 12-case calibration simulator, incident replay, and bounded GenAI abuse lab.",
      "Added notices, appeal reversals, transparency metrics, SQLite-backed operations analytics, and public-safe campaign examples so detection connects to user impact and operational follow-through.",
    ],
    expansion: [
      "Blind external evaluation over a privacy-safe, time-separated sample of public scam patterns.",
      "Small reviewer study measuring agreement, time-to-decision, and evidence usefulness.",
      "Broader local AT Protocol ingestion with privacy-safe retention, reviewer decision state, and ops analytics.",
      "Hosted LLM evidence adapter gated by schema, faithfulness, and over-enforcement evals.",
      "Actor/network enrichment for URL redirects, account histories, and coordinated campaigns.",
      "Active-learning queue for uncertain labels, appeals, multilingual review, and warning-design experiments.",
    ],
    viz: "trust-safety",
  },
  {
    id: "watermarking",
    ...projectReleases.watermarking,
  },
  {
    id: "drift",
    ...projectReleases.drift,
  },
  housingSourceCase,
  {
    id: "kreyol",
    course: "CS 5382 Fairness in ML",
    title: "Kreyol AI Healthcare Translation",
    theme: "Fairness product",
    metric: "Coursework concept",
    caption: "A responsible AI concept for Haitian Creole clinical translation with human review for high-stakes content.",
    bullets: [
      "Framed language access as disparate impact under healthcare translation constraints.",
      "Proposed a translation workflow with privacy requirements and qualified human review; the concept does not establish clinical validity or compliance.",
      "Designed human-in-the-loop review tiers and launch focus on South Florida.",
    ],
    expansion: [
      "Clinical-risk routing diagram for AI-only vs human-reviewed content.",
      "Market wedge calculator for hospital account tiers.",
      "Translation-error taxonomy tied to patient harm categories.",
    ],
    viz: "kreyol",
  },
  {
    id: "yelp-rent",
    ...projectReleases["yelp-rent"],
  },
  {
    id: "casekick",
    course: "TECH 5910 Startup Studio",
    title: "CaseKick AI Legal Intake",
    theme: "AI product",
    metric: "Voice MVP",
    caption: "AI voice intake agent that conducts structured legal intake, extracts a case package, and routes attorney review.",
    bullets: [
      "Built state-machine voice flow with disclosure, matter classification, intake, contact, and wrap-up.",
      "Added refusal classifier for legal advice, fee quotes, and distress flags.",
      "Created attorney dashboard for package review, accept, decline, and referral workflows.",
    ],
    expansion: [
      "Clickable call-state machine with refusal examples.",
      "Package-review dashboard demo with synthetic cases.",
      "Compliance checklist for disclosure, consent, and review routing.",
    ],
    viz: "casekick",
  },
  {
    id: "sports-ml",
    course: "CS 5785 Applied Machine Learning",
    title: "Sports Time-Series Bias-Variance Study",
    theme: "Forecasting",
    metric: "Course MAE 7.54",
    caption: "Predicted Nikola Jokic game-by-game points using leakage-safe rolling features and chronological validation.",
    bullets: [
      "Engineered rolling form, usage volatility, rest-days, and back-to-back features.",
      "Compared Ridge and GBDT under TimeSeriesSplit and chronological test split.",
      "The saved coursework output favors Ridge over gradient boosting on that test set; it does not establish a general advantage or current forecasting performance.",
    ],
    expansion: [
      "Feature-window explorer for rolling momentum and usage volatility.",
      "Learning-curve view of model complexity vs sample size.",
      "Prediction interval visualization for aleatoric sports noise.",
    ],
    viz: "sports",
  },
];

const sideProjects = [
  deepShieldSourceCase,
  {
    title: "Guard-model research program",
    status: "In progress",
    description:
      "Studying whether moderation mistakes warnings about scams for promotion, and how error rates change across dialect and identity mentions. A local synthetic stance pilot exists; the broader matched-pair study and model comparison remain unrun.",
    action: "Protocols and evaluations in progress",
  },
];

const projectPaths = [
  {
    time: "5 min",
    title: "Quick tour",
    steps: ["Proof stats", "Featured work", "Crypto scam case study", "Contact"],
  },
  {
    time: "20 min",
    title: "Project trail",
    steps: ["Trust & Safety lab", "Eval philosophy", "Image pipeline", "RAG assistant", "Watermarking"],
  },
  {
    time: "60 min",
    title: "Build details",
    steps: ["Architecture", "Evals", "Failure modes", "Governance", "Expansion roadmaps"],
  },
];

const cryptoCaseMetrics = [
  { value: "0.938", label: "Operational public-label F1", detail: "0 FN / 8 FP on assignment test set" },
  { value: "40", label: "Scenario eval cases", detail: "Fraud, legitimate, ambiguous, and adversarial buckets" },
  { value: "56", label: "Red-team variants", detail: "Obfuscation, OCR placeholders, brand shifts, laundering" },
  { value: "100%", label: "Evidence faithfulness", detail: "All extracted spans map back to source text" },
  { value: "12", label: "Hardening evals", detail: "Canonicalization, URL evidence, OCR, Spanish, protected contexts" },
  { value: "12", label: "Calibration cases", detail: "Reviewer QA across label, review, and no-label outcomes" },
];

const cryptoArchitecture = [
  {
    title: "Policy foundation",
    items: ["Investment-scam definition", "ABC and AIM response", "Protected-context boundaries"],
  },
  {
    title: "Model and evals",
    items: ["TF-IDF + policy features", "Tiered thresholds", "Scenario, adversarial, hardening evals"],
  },
  {
    title: "Review and quality",
    items: ["SQLite review store", "Calibration simulator", "Ops analytics and launch gates"],
  },
  {
    title: "Intelligence and response",
    items: ["Entity and campaign graph", "Incident replay", "GenAI abuse testing"],
  },
  {
    title: "Reviewer assistance",
    items: ["Structured evidence schema", "Span faithfulness", "LLM agency boundary"],
  },
  {
    title: "Governance",
    items: ["Notice copy", "Appeals and reversals", "Incident runbooks"],
  },
];

const courseworkChanges = [
  {
    before: "Coursework labeler optimized for a final report.",
    after: "The expanded system audits the old model, documents leakage risk, and ships a reproducible v2 baseline.",
  },
  {
    before: "One classifier output.",
    after: "Separate review, public-label, and high-confidence escalation tiers with policy evidence guardrails.",
  },
  {
    before: "Static written results.",
    after: "Interactive reviewer workbench with threshold tuning, eval cards, red-team mutations, graph evidence, and governance flow.",
  },
  {
    before: "Metrics centered on model performance.",
    after: "Metrics cover false positives, protected contexts, span faithfulness, adversarial downgrades, appeals, transparency, QA calibration, and ops health.",
  },
];

const evalPrinciples = [
  "Aggregate F1 is never enough; public labels and review routing need separate metrics.",
  "The eval suite must include examples the model should not act on: warnings, satire, research, debugging, and help-seeking.",
  "Hardening evals should turn suspected production gaps into executable cases before changing policy, model, prompt, or thresholds.",
  "A downgrade from public label to human review can be a good product result when source context is missing.",
];

const productDecisions = [
  "Use restrained operator UI instead of a marketing dashboard: queue, evidence, thresholds, graph, governance.",
  "Make uncertainty visible and route it to review instead of pretending the model knows intent.",
  "Keep live Bluesky ingestion read-only and local; public artifacts use sanitized demo data.",
  "Show calibration, incidents, notices, and reversals because user impact and repeatable process matter as much as detection performance.",
];

function App() {
  const [activeCase, setActiveCase] = useState(caseFiles[0]);
  const [activeProject, setActiveProject] = useState(() => {
    const id = new URLSearchParams(window.location.search).get("project");
    return courseProjects.find((project) => project.id === id) || courseProjects[0];
  });

  function selectProject(project) {
    setActiveProject(project);
    const url = new URL(window.location.href);
    url.searchParams.set("project", project.id);
    window.history.replaceState(null, "", url);
  }

  return (
    <main>
      <Nav />
      <Hero />
      <ProofStrip />
      <ArtifactLedger />
      <ExperienceAtlas
        activeCase={activeCase}
        setActiveCase={setActiveCase}
      />
      <WorkPractice story={workStories.houseIQ} />
      <WorkPractice story={workStories.sets} />
      <CourseLab
        activeProject={activeProject}
        setActiveProject={selectProject}
      />
      <CryptoCaseStudy />
      <SideProjects />
      <ContactPanel />
      <LabsFooter />
    </main>
  );
}

function LabsFooter() {
  return (
    <footer className="labs-footer">
      <p>ALI HASAN · EVIDENCE LABS — AI systems held to evidence standards</p>
      <div className="labs-footer-row">
        <a href="#top" aria-current="page">
          Portfolio
        </a>
        <a href="https://crypto-scam-lab.vercel.app" target="_blank" rel="noreferrer">
          Crypto Scam Moderation Lab
        </a>
        <a
          href={projectReleases.drift.release.demoUrl}
          target="_blank"
          rel="noreferrer"
        >
          Representation Drift Lab
        </a>
        <a
          href="https://github.com/AliHasan-786/nyc-housing-inspection-rl"
          target="_blank"
          rel="noreferrer"
        >
          Civic Inspection Lab
        </a>
      </div>
    </footer>
  );
}

function ArtifactLedger() {
  return (
    <section className="artifact-ledger" aria-label="Project artifact ledger">
      <div className="ledger-copy">
        <p className="eyebrow">Featured project</p>
        <h2>Inside the crypto-scam moderation lab.</h2>
        <p>
          A content-moderation system for crypto investment scams, built end to end:
          written policy, tiered enforcement with human review, an evaluation suite with a
          CI release gate, and live-traffic calibration. Deployed and open source.
        </p>
      </div>
      <div className="ledger-grid">
        {artifactLedger.map((item) => (
          <article key={item.title}>
            <span>{item.title}</span>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Nav() {
  return (
    <header className="nav-shell">
      <a href="#top" className="brand-group" aria-label="Ali Hasan home">
        <span className="brand">AH</span>
        <span className="brand-word">
          Ali Hasan <em>Evidence Labs</em>
        </span>
      </a>
      <nav>
        <a href="#experience">Experience</a>
        <a href="#lab">Cornell Lab</a>
        <a href="#crypto-case-study">Case Study</a>
        <a href="#side">Side Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="nav-cta" href={trustSafetyLabUrl} target="_blank" rel="noreferrer">
        Open live lab
      </a>
    </header>
  );
}

function CryptoCaseStudy() {
  return (
    <section className="section-shell crypto-case-study" id="crypto-case-study">
      <div className="section-heading">
        <p className="eyebrow">Featured case study</p>
        <h2>From a class policy proposal to a working moderation system.</h2>
        <p>
          The project begins with a narrow policy question: how should Bluesky reduce
          investment scams without suppressing legitimate financial speech? That boundary
          becomes a classifier, an evaluation program, and an inspectable operations console
          for review, campaigns, incidents, appeals, and transparency.
        </p>
        <div className="case-study-actions">
          <a className="primary-link" href={trustSafetyLabUrl} target="_blank" rel="noreferrer">
            Open live lab
          </a>
          <a className="secondary-link" href={trustSafetyRepoUrl} target="_blank" rel="noreferrer">
            View source and evals
          </a>
        </div>
      </div>

      <div className="case-study-metrics">
        {cryptoCaseMetrics.map((metric) => (
          <article key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            <p>{metric.detail}</p>
          </article>
        ))}
      </div>

      <div className="case-study-layout">
        <article className="architecture-panel">
          <div className="case-study-block-head">
            <span>Architecture</span>
            <strong>Policy to evals to operations</strong>
          </div>
          <div className="architecture-grid">
            {cryptoArchitecture.map((layer, index) => (
              <div className="architecture-node" key={layer.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{layer.title}</strong>
                <ul>
                  {layer.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>

        <article className="case-study-panel">
          <div className="case-study-block-head">
            <span>What changed</span>
            <strong>Coursework became a product system</strong>
          </div>
          <div className="change-list">
            {courseworkChanges.map((change) => (
              <div key={change.before}>
                <span>Before</span>
                <p>{change.before}</p>
                <span>After</span>
                <p>{change.after}</p>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="case-study-layout compact">
        <article className="case-study-panel">
          <div className="case-study-block-head">
            <span>Eval philosophy</span>
            <strong>Evidence standards for safety decisions</strong>
          </div>
          <ul className="case-study-list">
            {evalPrinciples.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </article>

        <article className="case-study-panel">
          <div className="case-study-block-head">
            <span>Product decisions</span>
            <strong>How the system stays useful without overreaching</strong>
          </div>
          <ul className="case-study-list">
            {productDecisions.map((decision) => (
              <li key={decision}>{decision}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Ali Hasan · New York</p>
        <h1>{heroCopy.headline}</h1>
        <p className="hero-subtitle">{heroCopy.focus}</p>
        <div className="hero-actions">
          <a href="#experience" className="primary-link">
            See my work
          </a>
          <a href="#lab" className="secondary-link">
            Projects
          </a>
        </div>
      </div>
    </section>
  );
}

function ProofStrip() {
  return (
    <section className="proof-strip" aria-label="Proof points">
      {proofStats.map((stat) => (
        <article key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
          <small>{stat.detail}</small>
        </article>
      ))}
    </section>
  );
}

function ProjectPaths() {
  return (
    <section className="reader-paths">
      <div>
        <p className="eyebrow">Overview</p>
        <h2>What's here.</h2>
      </div>
      <div className="path-grid">
        {projectPaths.map((path) => (
          <article key={path.time}>
            <span>{path.time}</span>
            <h3>{path.title}</h3>
            <p>{path.steps.join(" -> ")}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperienceAtlas({ activeCase, setActiveCase }) {
  return (
    <section className="section-shell" id="experience">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Where I've worked.</h2>
        <p>
          House IQ, the SETS AI Red Team Clinic at Cornell Tech, and Myridius —
          across safety, product, and engineering.
        </p>
        <div className="link-row">
          <a href="#house-iq">House IQ: evaluation decisions</a>
          <a href="#sets">SETS: red-team practice</a>
        </div>
      </div>

      <div className="case-layout">
        <div className="case-list">
          {caseFiles.map((item) => (
            <button
              type="button"
              key={item.title}
              aria-label={`Open case file: ${item.title}`}
              data-case-title={item.title}
              className={activeCase.title === item.title ? "case-card active" : "case-card"}
              onClick={() => setActiveCase(item)}
            >
              <span>{item.org}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </button>
          ))}
        </div>
        <article className="case-detail">
          <div className="case-detail-header">
            <div>
              <span className="pill">{activeCase.status}</span>
              <span className="pill ghost">{activeCase.date}</span>
            </div>
            <strong>{activeCase.org}</strong>
          </div>
          <h3>{activeCase.title}</h3>
          <div className="tag-row">
            {activeCase.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <p className="case-lead">{activeCase.lead}</p>
          <p className="case-body">{activeCase.body}</p>
          {activeCase.did && activeCase.did.length > 0 && (
            <ul className="case-did">
              {activeCase.did.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {activeCase.note && <p className="case-note">{activeCase.note}</p>}
          {activeCase.links && (
            <div className="link-row">
              {activeCase.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </article>
      </div>
    </section>
  );
}

function WorkPractice({ story }) {
  const [activeId, setActiveId] = useState(story.scenarios[0].id);
  const active = story.scenarios.find((scenario) => scenario.id === activeId);
  return (
    <section className="section-shell practice-section" id={story.id}>
      <div className="section-heading">
        <p className="eyebrow">{story.organization}</p>
        <h2>{story.title}</h2>
        <p>{story.introduction}</p>
      </div>
      <div className="practice-layout">
        <aside className="practice-context">
          <p className="practice-label">{story.label}</p>
          <h3>My contribution</h3>
          <p>{story.role}</p>
          <div className="link-row">
            {story.sources.map((source) => (
              <a key={source.href} href={source.href} target="_blank" rel="noreferrer">{source.label}</a>
            ))}
          </div>
        </aside>
        <div className="practice-explorer">
          <p className="practice-label">{story.exampleLabel}</p>
          <h3>{story.question}</h3>
          <div className="practice-controls" aria-label={`${story.organization} examples`}>
            {story.scenarios.map((scenario) => (
              <button
                key={scenario.id}
                type="button"
                aria-pressed={scenario.id === active.id}
                aria-controls={`${story.id}-example`}
                onClick={() => setActiveId(scenario.id)}
              >
                {scenario.title}
              </button>
            ))}
          </div>
          <article id={`${story.id}-example`} className="practice-example">
            <h4>{active.title}</h4>
            <p>{active.situation}</p>
            <dl>
              <dt>Evidence to inspect</dt><dd>{active.evidence}</dd>
              <dt>Decision principle</dt><dd>{active.decision}</dd>
              <dt>The tradeoff</dt><dd>{active.tradeoff}</dd>
            </dl>
          </article>
        </div>
      </div>
    </section>
  );
}

function CourseLab({
  activeProject,
  setActiveProject,
}) {
  return (
    <section className="section-shell lab-section" id="lab">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Selected projects.</h2>
        <p>
          Start with a decision or a piece of evidence, then open the full project.
          Policy examples, saved coursework and measured lab releases are kept distinct.
        </p>
      </div>

      <div className="lab-grid">
        <div className="project-rail" aria-label="Course projects">
          {courseProjects.map((project) => (
            <button
              key={project.id}
              type="button"
              aria-label={`Open project lab: ${project.title}`}
              data-project-id={project.id}
              aria-pressed={activeProject.id === project.id}
              aria-controls="project-panel"
              className={activeProject.id === project.id ? "project-tab active" : "project-tab"}
              onClick={() => setActiveProject(project)}
            >
              <span>{project.course}</span>
              <strong>{project.title}</strong>
              <small>{project.theme}</small>
            </button>
          ))}
        </div>

        <article className="project-stage" id="project-panel">
          <div className="project-stage-head">
            <div>
              <span className="pill">{activeProject.course}</span>
              <h3>{activeProject.title}</h3>
            </div>
            <strong>{activeProject.metric}</strong>
          </div>
          <p>{activeProject.caption}</p>
          <a className="project-permalink" href={`?project=${activeProject.id}#lab`}>
            Link to this project
          </a>
          {activeProject.release && (
            <p className="project-evidence-label">{activeProject.release.evidenceStage}</p>
          )}
          {activeProject.release?.demoUrl && (
            <div className="project-links">
              <a href={activeProject.release.demoUrl} target="_blank" rel="noreferrer">
                Open interactive project
              </a>
            </div>
          )}
          {activeProject.links && (
            <div className="link-row">
              {activeProject.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          )}
          {activeProject.id === "crypto-scam-lab" && (
            <div className="project-links">
              <a href={trustSafetyLabUrl} target="_blank" rel="noreferrer">
                Open live lab
              </a>
              <a href={trustSafetyRepoUrl} target="_blank" rel="noreferrer">
                Inspect source and reports
              </a>
            </div>
          )}
          <div className={`project-body${["trust-safety", "watermark", "sports"].includes(activeProject.viz) ? " project-body--exploration" : ""}`}>
            <div>
              <h4>What exists</h4>
              <ul>
                {activeProject.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {activeProject.nextHeading ? (
                <><h4>{activeProject.nextHeading}</h4><ul>{activeProject.expansion.map((item) => <li key={item}>{item}</li>)}</ul></>
              ) : (
                <details className="project-roadmap">
                  <summary>Explore the extension roadmap</summary>
                  <ul>{activeProject.expansion.map((item) => <li key={item}>{item}</li>)}</ul>
                </details>
              )}
            </div>
            {activeProject.release ? (
              <ProjectReleasePreview project={activeProject} />
            ) : (
              <InteractiveViz key={activeProject.id} project={activeProject} />
            )}
          </div>
        </article>
      </div>
    </section>
  );
}

function ProjectReleasePreview({ project }) {
  const release = project.release;
  return (
    <figure className="project-release-preview">
      <img
        src={release.thumbnail}
        alt={release.thumbnailAlt}
        width="1200"
        height="630"
        loading="lazy"
      />
      <figcaption>
        <h4>{release.invitation}</h4>
        <p>{release.note}</p>
        <span className="project-release-revision">
          Reviewed source {release.sourceCommit.slice(0, 7)}
        </span>
      </figcaption>
    </figure>
  );
}

function PolicyWalkthrough() {
  const [activeId, setActiveId] = useState(policyCases[0].id);
  const active = policyCases.find((item) => item.id === activeId);
  return (
    <div className="viz-card evidence-walkthrough">
      <div className="viz-header"><span>Same vocabulary. Different intent.</span></div>
      <h4>Who is asking whom to do what?</h4>
      <p className="viz-note">Authored policy examples, not model predictions or evaluation cases.</p>
      <div className="evidence-choices" aria-label="Policy examples">
        {policyCases.map((item) => (
          <button key={item.id} type="button" aria-pressed={item.id === activeId}
            aria-controls="policy-example" onClick={() => setActiveId(item.id)}>
            {item.title}
          </button>
        ))}
      </div>
      <article id="policy-example" className="evidence-example">
        <blockquote>{active.text}</blockquote>
        <p className="evidence-route">{active.route}</p>
        <dl><dt>Evidence</dt><dd>{active.evidence}</dd><dt>Why the boundary changes</dt><dd>{active.reason}</dd></dl>
        <a href={policySource.href} target="_blank" rel="noreferrer">{active.section} in the written policy</a>
      </article>
    </div>
  );
}

function WatermarkQuestions() {
  const [activeId, setActiveId] = useState(watermarkQuestions[0].id);
  const active = watermarkQuestions.find((item) => item.id === activeId);
  return (
    <div className="viz-card evidence-walkthrough">
      <div className="viz-header"><span>Provenance questions</span><strong>Evidence before a verdict</strong></div>
      <p className="viz-note">Explore the measurement problem, not a live detector.</p>
      <div className="evidence-choices" aria-label="Watermark evidence questions">
        {watermarkQuestions.map((item) => (
          <button key={item.id} type="button" aria-pressed={item.id === activeId}
            aria-controls="watermark-question" onClick={() => setActiveId(item.id)}>
            {item.title}
          </button>
        ))}
      </div>
      <article id="watermark-question" className="evidence-example">
        <h4>{active.question}</h4>
        <dl><dt>Evidence needed</dt><dd>{active.need}</dd><dt>What not to infer</dt><dd>{active.limit}</dd></dl>
      </article>
    </div>
  );
}

function CourseworkMetrics() {
  const [metric, setMetric] = useState("mae");
  const max = Math.ceil(Math.max(...sportsCoursework.models.flatMap((model) => [model.mae, model.rmse])));
  return (
    <div className="viz-card evidence-walkthrough">
      <div className="viz-header"><span>Saved coursework output</span><strong>Lower error is better</strong></div>
      <div className="evidence-choices" aria-label="Coursework error metric">
        {["mae", "rmse"].map((item) => (
          <button key={item} type="button" aria-pressed={item === metric}
            aria-controls="course-error-values" onClick={() => setMetric(item)}>
            {item.toUpperCase()}
          </button>
        ))}
      </div>
      <p className="viz-note">{metric === "mae" ? "Mean absolute error: average size of a prediction error." : "Root mean squared error: gives larger mistakes more weight."} Units: points.</p>
      <p className="viz-note">Shared bar scale: 0 to {max} points for both metrics.</p>
      <dl id="course-error-values" className="course-error-values">
        {sportsCoursework.models.map((model) => (
          <div key={model.id}>
            <dt>{model.label}</dt><dd>{model[metric].toFixed(2)} points</dd>
            <span aria-hidden="true" className="course-error-bar" style={{ width: `${model[metric] / max * 100}%` }} />
          </div>
        ))}
      </dl>
      <p className="viz-note">One saved test-set comparison, not a new run or a general superiority claim. Test size and uncertainty have not been verified here.</p>
      <a href="/evidence/sports-coursework.json">Inspect the values and source fingerprint</a>
    </div>
  );
}

function InteractiveViz({ project }) {
  if (project.viz === "trust-safety") return <PolicyWalkthrough />;
  if (project.viz === "watermark") return <WatermarkQuestions />;
  if (project.viz === "source-audit") {
    return (
      <div className="viz-card">
        <div className="viz-header"><span>Source checkpoint</span><strong>{project.audit.sourceCommit.slice(0, 7)}</strong></div>
        <h4>{project.audit.title}</h4>
        {project.audit.steps.map((step) => <div key={step.title}><h4>{step.title}</h4><p>{step.text}</p></div>)}
        <p className="viz-note">The interactive benchmark will be linked after its artifacts and result accounting pass review.</p>
      </div>
    );
  }
  if (project.viz === "kreyol" || project.viz === "casekick") {
    const translation = project.viz === "kreyol";
    const steps = translation
      ? ["Patient text", "Translation draft", "Risk assessment", "Qualified review", "Proposed handoff"]
      : ["Disclosure", "Matter class", "Detailed intake", "Refusal checks", "Case package"];
    return (
      <div className="viz-card flow-card">
        <div className="viz-header"><span>{translation ? "Coursework concept" : "Intake workflow"}</span><strong>Review before use</strong></div>
        {steps.map((step, index) => <div className="flow-step" key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></div>)}
      </div>
    );
  }
  if (project.viz === "sports") return <CourseworkMetrics />;
  return <div className="viz-card"><p>No reviewed evidence preview is available yet.</p></div>;
}

function SideProjects() {
  return (
    <section className="section-shell side-section" id="side">
      <div className="section-heading">
        <p className="eyebrow">More</p>
        <h2>Further explorations.</h2>
        <p>
          Supporting engineering work and research in progress.
        </p>
      </div>
      <div className="side-grid">
        {sideProjects.map((project) => (
          <article key={project.title}>
            <span>{project.status}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.href ? (
              <a className="side-action" href={project.href} target="_blank" rel="noreferrer">
                {project.action}
              </a>
            ) : (
              <span className="side-action">{project.action}</span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactPanel() {
  return (
    <section className="contact-panel" id="contact">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Get in touch.</h2>
        <p>
          The case studies above are designed to be inspected, challenged, and extended.
          Use the links below for direct contact or to keep exploring the code.
        </p>
      </div>
      <div className="contact-links">
        <a href="mailto:ali.hasan.312@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/alihasan786/">LinkedIn</a>
        <a href="https://github.com/AliHasan-786">GitHub</a>
      </div>
    </section>
  );
}

export default App;
