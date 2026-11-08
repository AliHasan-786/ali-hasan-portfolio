import React, { useState } from "react";
import { projectReleases } from "./projectReleases";
import { workStories } from "./workStories";
import { deepShieldSourceCase, housingSourceCase } from "./sourceCases";

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
    value: "$5.8B",
    label: "Problem on the table",
    detail: "US crypto-fraud losses (FBI IC3) my moderation lab is built against",
  },
  {
    value: "50k/day",
    label: "Scale economics modeled",
    detail: "Every review threshold priced in queue load, reviewers, and payroll",
  },
  {
    value: "15-step",
    label: "CI release gate",
    detail: "Every metric regenerated and re-verified on every commit",
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
    label: "Published research",
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
    course: "CS 5788 Generative Models",
    title: "Invisible Watermarking for LLMs",
    theme: "AI provenance",
    metric: "98.7% TPR",
    caption: "Green-list logit-bias watermarking on modern instruction-tuned LLMs.",
    bullets: [
      "Implemented watermark injection as inference-time logit manipulation.",
      "Detected watermark via one-sided z-test calibrated to 1% FPR.",
      "Measured robustness to substitution, insertion, deletion, and LLM paraphrase attacks.",
    ],
    expansion: [
      "Interactive threshold explorer over z-score distributions.",
      "Prompt playground showing quality vs detectability as delta changes.",
      "Attack lab comparing mild edits vs full paraphrase failure.",
    ],
    links: [
      { label: "Repo", href: "https://github.com/AliHasan-786/llm-invisible-watermarking" },
      { label: "SynthID-Text comparison (in progress, preregistered)", href: "https://github.com/AliHasan-786/llm-invisible-watermarking/pull/3" },
    ],
    viz: "watermark",
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
    metric: "HIPAA + HITL",
    caption: "A responsible AI concept for Haitian Creole clinical translation with human review for high-stakes content.",
    bullets: [
      "Framed language access as disparate impact under healthcare translation constraints.",
      "Positioned fine-tuned open translation models inside a HIPAA-compliant workflow.",
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
    metric: "MAE 7.54",
    caption: "Predicted Nikola Jokic game-by-game points using leakage-safe rolling features and chronological validation.",
    bullets: [
      "Engineered rolling form, usage volatility, rest-days, and back-to-back features.",
      "Compared Ridge and GBDT under TimeSeriesSplit and chronological test split.",
      "Showed simpler regularized models beat added complexity on limited noisy data.",
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
  const [threshold, setThreshold] = useState(1.77);
  const [fraudThreshold, setFraudThreshold] = useState(0.48);

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
        threshold={threshold}
        setThreshold={setThreshold}
        fraudThreshold={fraudThreshold}
        setFraudThreshold={setFraudThreshold}
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
  threshold,
  setThreshold,
  fraudThreshold,
  setFraudThreshold,
}) {
  return (
    <section className="section-shell lab-section" id="lab">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Selected projects.</h2>
        <p>
          Open a full project, inspect its evidence, or explore a sketch here.
          Sketches are illustrative; each lab distinguishes what was measured
          from what is still being built.
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
          <div className="project-body">
            <div>
              <h4>What exists</h4>
              <ul>
                {activeProject.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <h4>{activeProject.nextHeading || "Expansion roadmap"}</h4>
              <ul>
                {activeProject.expansion.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            {activeProject.release ? (
              <ProjectReleasePreview project={activeProject} />
            ) : (
              <InteractiveViz
                project={activeProject}
                threshold={threshold}
                setThreshold={setThreshold}
                fraudThreshold={fraudThreshold}
                setFraudThreshold={setFraudThreshold}
              />
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

function InteractiveViz({
  project,
  threshold,
  setThreshold,
  fraudThreshold,
  setFraudThreshold,
}) {
  if (project.viz === "trust-safety") {
    const precision = Math.min(96, Math.round(54 + fraudThreshold * 72));
    const recall = Math.max(48, Math.round(118 - fraudThreshold * 70));
    const reviewLoad = Math.max(12, Math.round(118 - fraudThreshold * 130));
    return (
      <div className="viz-card trust-viz">
        <div className="viz-header">
          <span>Reviewer threshold</span>
          <strong>{recall}% recall</strong>
        </div>
        <p className="viz-note">Illustrative sketch for orientation; measured results live in the linked project and its repo.</p>
        <div className="trust-mini-grid">
          <div>
            <strong>{precision}%</strong>
            <span>sim precision</span>
          </div>
          <div>
            <strong>{reviewLoad}</strong>
            <span>review cases</span>
          </div>
          <div>
            <strong>0.94</strong>
            <span>reported F1</span>
          </div>
        </div>
        <label>
          Risk threshold: {Math.round(fraudThreshold * 100)}%
          <input
            type="range"
            min="0.3"
            max="0.8"
            step="0.01"
            value={fraudThreshold}
            onChange={(event) => setFraudThreshold(Number(event.target.value))}
          />
        </label>
        <div className="flow-step">
          <span>C</span>
          <strong>Potential Crypto Fraud label</strong>
        </div>
        <div className="flow-step">
          <span>B</span>
          <strong>DM throttles and warning friction</strong>
        </div>
        <div className="flow-step">
          <span>A</span>
          <strong>Repeated-domain and wallet escalation</strong>
        </div>
      </div>
    );
  }

  if (project.viz === "watermark") {
    const tpr = Math.max(27, Math.min(99, Math.round(112 - threshold * 12)));
    const fpr = Math.max(0.2, Math.min(8, Number((threshold / 2.3).toFixed(1))));
    return (
      <div className="viz-card">
        <div className="viz-header">
          <span>Threshold explorer</span>
          <strong>{tpr}% TPR</strong>
        </div>
        <p className="viz-note">Illustrative sketch for orientation; measured results live in the linked project and its repo.</p>
        <WatermarkChart threshold={threshold} />
        <label>
          Detection threshold z = {threshold.toFixed(2)}
          <input
            type="range"
            min="0.8"
            max="4.2"
            step="0.01"
            value={threshold}
            onChange={(event) => setThreshold(Number(event.target.value))}
          />
        </label>
        <div className="mini-metrics">
          <span>Estimated FPR {fpr}%</span>
          <span>Long-text TPR 98.7%</span>
        </div>
      </div>
    );
  }

  if (project.viz === "source-audit") {
    return (
      <div className="viz-card">
        <div className="viz-header">
          <span>Source checkpoint</span>
          <strong>{project.audit.sourceCommit.slice(0, 7)}</strong>
        </div>
        <h4>{project.audit.title}</h4>
        {project.audit.steps.map((step) => (
          <div key={step.title}>
            <h4>{step.title}</h4>
            <p>{step.text}</p>
          </div>
        ))}
        <p className="viz-note">The interactive benchmark will be linked after its artifacts and result accounting pass review.</p>
      </div>
    );
  }

  if (project.viz === "drift") {
    return (
      <div className="viz-card">
        <div className="viz-header">
          <span>Checkpoint drift</span>
          <strong>Trackable forgetting</strong>
        </div>
        <LineChart
          lines={[
            { name: "Food101", color: "#0d9488", values: [42, 55, 67, 74, 80, 83] },
            { name: "CIFAR-10", color: "#f97316", values: [79, 77, 74, 70, 67, 64] },
            { name: "Drift", color: "#334155", values: [8, 14, 21, 31, 43, 55] },
          ]}
        />
        <p className="viz-note">
          The portfolio version can let viewers scrub checkpoints and watch the embedding
          space warp as fine-tuning improves the target task.
        </p>
      </div>
    );
  }

  if (project.viz === "kreyol") {
    return (
      <div className="viz-card flow-card">
        <div className="viz-header">
          <span>Clinical translation route</span>
          <strong>Human review gate</strong>
        </div>
        {["Patient text", "Domain model", "Risk classifier", "Qualified reviewer", "EHR delivery"].map(
          (step, index) => (
            <div className="flow-step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ),
        )}
      </div>
    );
  }

  if (project.viz === "casekick") {
    return (
      <div className="viz-card flow-card">
        <div className="viz-header">
          <span>Voice intake state machine</span>
          <strong>Compliance first</strong>
        </div>
        {["Disclosure", "Matter class", "Detailed intake", "Refusal checks", "Case package"].map(
          (step, index) => (
            <div className="flow-step" key={step}>
              <span>{index === 0 ? "Start" : `S${index}`}</span>
              <strong>{step}</strong>
            </div>
          ),
        )}
      </div>
    );
  }

  if (project.viz === "yelp") {
    return (
      <div className="viz-card">
        <div className="viz-header">
          <span>ZIP-year signal sketch</span>
          <strong>EDA layer</strong>
        </div>
        <ScatterPlot />
        <p className="viz-note">
          A next version can load cleaned ZIP-year aggregates and let viewers filter by review
          coverage and metro/year controls.
        </p>
      </div>
    );
  }

  return (
    <div className="viz-card">
      <div className="viz-header">
        <span>Bias-variance explorer</span>
        <strong>Ridge wins</strong>
      </div>
      <LineChart
        lines={[
          { name: "Ridge MAE", color: "#0d9488", values: [11, 9.3, 8.2, 7.7, 7.54] },
          { name: "GBDT MAE", color: "#e11d48", values: [12.3, 10, 8.4, 7.9, 7.62] },
        ]}
      />
      <p className="viz-note">
        Simpler regularization wins when game-level sports data has limited samples and high noise.
      </p>
    </div>
  );
}

function WatermarkChart({ threshold }) {
  const control = [0.2, 0.5, 0.7, 1.0, 1.2, 1.5, 1.7, 2.0];
  const watermarked = [2.4, 3.0, 3.5, 4.1, 4.6, 5.3, 5.8, 6.5];
  const scaleX = (value) => 32 + value * 46;
  const scaleY = (index, offset) => 150 - index * 13 - offset;
  return (
    <svg viewBox="0 0 360 190" role="img" aria-label="Watermark z-score histogram">
      <line x1="30" y1="160" x2="330" y2="160" className="axis" />
      <line x1={scaleX(threshold)} y1="24" x2={scaleX(threshold)} y2="160" className="threshold" />
      <text x={scaleX(threshold) + 6} y="34" className="chart-label">
        z
      </text>
      {control.map((value, index) => (
        <circle key={`c-${value}`} cx={scaleX(value)} cy={scaleY(index, 0)} r="8" className="control-dot" />
      ))}
      {watermarked.map((value, index) => (
        <circle
          key={`w-${value}`}
          cx={scaleX(value)}
          cy={scaleY(index, 28)}
          r="8"
          className="watermark-dot"
        />
      ))}
      <text x="34" y="180" className="chart-label">
        control
      </text>
      <text x="238" y="180" className="chart-label">
        watermarked
      </text>
    </svg>
  );
}

function LineChart({ lines }) {
  const max = Math.max(...lines.flatMap((line) => line.values));
  const min = Math.min(...lines.flatMap((line) => line.values));
  const x = (index, length) => 24 + (index * 290) / (length - 1);
  const y = (value) => 150 - ((value - min) / (max - min || 1)) * 112;
  return (
    <svg viewBox="0 0 340 185" role="img" aria-label="Line chart">
      <line x1="24" y1="150" x2="318" y2="150" className="axis" />
      <line x1="24" y1="30" x2="24" y2="150" className="axis" />
      {lines.map((line) => {
        const points = line.values.map((value, index) => `${x(index, line.values.length)},${y(value)}`).join(" ");
        return (
          <g key={line.name}>
            <polyline points={points} fill="none" stroke={line.color} strokeWidth="4" strokeLinecap="round" />
            {line.values.map((value, index) => (
              <circle key={`${line.name}-${index}`} cx={x(index, line.values.length)} cy={y(value)} r="4" fill={line.color} />
            ))}
          </g>
        );
      })}
      {lines.map((line, index) => (
        <text key={line.name} x="26" y={18 + index * 16} className="chart-label" fill={line.color}>
          {line.name}
        </text>
      ))}
    </svg>
  );
}

function ScatterPlot() {
  const points = [
    [40, 118],
    [70, 96],
    [96, 84],
    [120, 72],
    [154, 65],
    [180, 50],
    [210, 74],
    [238, 42],
    [270, 34],
  ];
  return (
    <svg viewBox="0 0 320 170" role="img" aria-label="Scatterplot">
      <line x1="34" y1="140" x2="290" y2="140" className="axis" />
      <line x1="34" y1="20" x2="34" y2="140" className="axis" />
      {points.map(([cx, cy], index) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={5 + (index % 3)} className="scatter-dot" />
      ))}
      <path d="M42 124 C 92 104, 152 78, 276 40" fill="none" className="trend-line" />
      <text x="40" y="160" className="chart-label">
        gentrification-coded Yelp signal
      </text>
    </svg>
  );
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
