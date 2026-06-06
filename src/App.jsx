import React, { useState } from "react";

const readerModes = {
  recruiter: {
    label: "Recruiter",
    prompt: "Fast scan",
    headline: "PM-pivoting AI builder with measurable safety/eval output.",
    focus: "Role fit, signal, proof points, and what to read first.",
  },
  hiring: {
    label: "Hiring Manager",
    prompt: "Case depth",
    headline: "Turns ambiguous AI risk into shipped systems, evals, and product decisions.",
    focus: "Problem framing, constraints, tradeoffs, and impact.",
  },
  technical: {
    label: "Technical",
    prompt: "Deep dive",
    headline: "Hands-on with RAG, LLM guardrails, multimodal pipelines, ML eval, and interactive analysis.",
    focus: "Methods, architecture, metrics, failure modes, and extension plans.",
  },
};

const proofStats = [
  { value: "13", label: "House IQ PRs merged", detail: "Across 5 production services" },
  { value: "70%", label: "Merged code was tests", detail: "5,270 of 7,497 added lines" },
  { value: "5,350", label: "Eval/config lines", detail: "Red-team scenarios, baselines, stress data" },
  { value: "10+", label: "Client demos led", detail: "Myridius AI/RAG workflows" },
  { value: "7", label: "Cornell project labs", detail: "ML, fairness, RL, data science, startup studio" },
];

const caseFiles = [
  {
    title: "Automated Agent Stress-Test and Evaluation Pipeline",
    org: "House IQ",
    date: "Dec 2025 - Mar 2026",
    status: "Shipped",
    audience: ["PM", "AI Safety", "Engineering"],
    tags: ["LLM eval", "CI baselines", "structured output", "agent safety"],
    impact: "Replaced manual chat spot-checking with CI-gated safety/topicality evals and reusable evaluator primitives.",
    problem:
      "Prompt and agent changes could silently regress unsafe renovation guidance, discriminatory steering, or privacy leakage. Manual testing was too sparse to catch behavioral drift.",
    approach:
      "Built a two-phase pipeline: cheap local-model generation for adversarial prompts, production-path execution, and expensive cloud-model judging with schema-validated outputs. Later consolidated duplicated runner/auth/judge code onto shared infra.",
    outcome:
      "Established 0.95 safety and 0.80 topicality baselines, removed fail-open judge defaults, and authored evaluators later promoted into a shared library.",
    constraints:
      "Public description is sanitized: no internal repo names, screenshots, code, prompts, vendor-sensitive details, or user data.",
  },
  {
    title: "Image Pipeline Expansion for Real-World Uploads",
    org: "House IQ",
    date: "Mar - Apr 2026",
    status: "Shipped",
    audience: ["PM", "Engineering"],
    tags: ["multimodal AI", "PDF/DOCX", "HEIC", "scope control"],
    impact: "Expanded a document vision pipeline from clean PDFs to scanned PDFs, Word documents, and iPhone photo formats.",
    problem:
      "The foundation worked on software-generated PDFs but failed on real customer document formats, blocking a downstream property-cataloging feature.",
    approach:
      "Split the epic into smaller tickets, added format-specific extraction paths inside a shared loop, and tracked an unrelated size-limit bug as its own focused fix.",
    outcome:
      "All three format-support tickets shipped, plus a graceful recompression fallback for oversized images that would otherwise be silently dropped.",
    constraints:
      "Case study focuses on architecture and product tradeoffs, not implementation details or internal file paths.",
  },
  {
    title: "Visualization Guardrails for Multi-Vendor LLM Paths",
    org: "House IQ",
    date: "2026",
    status: "Shipped",
    audience: ["PM", "AI Safety"],
    tags: ["guardrails", "trust and safety", "cached content", "multi-vendor"],
    impact: "Closed a safety gap where one inference path could bypass checks already present in another path.",
    problem:
      "Visualization generation had two AI routes, but the safety primitive and model lived with different vendors. Cached or deduped content could create a bypass.",
    approach:
      "Measured baseline bypasses before implementation, designed input/output guardrail semantics, then added unit, wiring, and router tests across layers.",
    outcome:
      "Added coverage across 31 automated tests and documented why blocked responses should avoid echoing unsafe content back to the user.",
    constraints:
      "The public version omits vendor-specific APIs and exact adversarial prompts.",
  },
  {
    title: "Indirect Prompt Injection Threat Model",
    org: "House IQ",
    date: "Apr - May 2026",
    status: "Paused after design",
    audience: ["PM", "AI Safety", "Analyst"],
    tags: ["threat modeling", "red team", "OWASP", "agentic RAG"],
    impact: "Mapped external-content attack surfaces and built reusable test infrastructure before pausing for launch-blocking work.",
    problem:
      "Agents retrieved web results, listing text, and memory summaries into the LLM context with no dedicated indirect-injection coverage.",
    approach:
      "Traced the full data path, audited filtering assumptions, rewrote unrealistic CSS-hidden attacks into prose-embedded attacks, and documented stakeholder explainers.",
    outcome:
      "Delivered attack-surface map, evaluator plan, controlled-attack-site concept, and a decision log so the work can resume without re-deriving the reasoning.",
    constraints:
      "Status is intentionally honest: the infrastructure was designed and audited, but execution was deferred.",
  },
  {
    title: "Hybrid RAG + SQL Knowledge Assistant",
    org: "Myridius / RCG",
    date: "Oct 2024 - Jun 2025",
    status: "Built and demoed",
    audience: ["Engineering", "Analyst"],
    tags: ["Databricks", "RAG", "SQL", "Streamlit", "client demos"],
    impact: "Built and demonstrated a Databricks-backed assistant that answered from documents and structured tables for enterprise use cases.",
    problem:
      "Static FAQ-style bots were brittle for enterprise knowledge workflows that needed grounded document retrieval and structured-data lookup.",
    approach:
      "Assembled a Databricks serving endpoint, Streamlit chat UI, PDF preparation, retrieval chain, and evaluation scripts; paired technical demos with setup/training docs.",
    outcome:
      "Led 10+ demos, authored internal enablement material, and proposed a pivot from static FAQ to discovery-to-purchase workflows after identifying failure modes.",
    constraints:
      "Client/project details are intentionally abstracted because the underlying materials include proprietary and internship documents.",
  },
];

const courseProjects = [
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
    viz: "watermark",
  },
  {
    id: "drift",
    course: "CS 5787 Deep Learning",
    title: "Representation Drift in Vision-Language Models",
    theme: "Model monitoring",
    metric: "Drift curves",
    caption: "Tracked CLIP embedding geometry during LoRA fine-tuning on Food101 with CIFAR-10 as held-out general knowledge.",
    bullets: [
      "Fine-tuned CLIP ViT-B/32 using LoRA on the vision tower.",
      "Measured centroid displacement and Frechet distance across checkpoints.",
      "Connected geometric drift to stability-plasticity tradeoffs and performance loss.",
    ],
    expansion: [
      "Embedding-map scrubber across checkpoints.",
      "Early-warning monitor that predicts final drift from intermediate metrics.",
      "Side-by-side Food101 gains and CIFAR-10 degradation.",
    ],
    viz: "drift",
  },
  {
    id: "rl-housing",
    course: "ORIE 5570 Reinforcement Learning",
    title: "NYC Housing Inspection Dispatch",
    theme: "Public-sector RL",
    metric: "16/16 violations",
    caption: "Modeled 311 after-hours construction complaints as a dispatch policy problem with resource and fairness tradeoffs.",
    bullets: [
      "Built an MDP with complaint category, borough, inspector budget, prior count, and time bin.",
      "Compared Monte Carlo, tabular Q-learning, DQN, REINFORCE, and baselines.",
      "Framed reward design around missed violations, wasted inspections, and displacement risk.",
    ],
    expansion: [
      "Policy simulator for inspect/dismiss/aggressive enforcement.",
      "Fairness penalty slider showing over-policing tradeoffs.",
      "Pareto frontier for violations caught vs inspection cost vs tenant retention.",
    ],
    viz: "rl",
  },
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
    course: "CS 5304 Data Science in the Wild",
    title: "Yelp Signals and Future Rent Growth",
    theme: "Urban data science",
    metric: "ZIP-year model",
    caption: "Explored whether Yelp business/review signals correlate with future rent growth and gentrification-coded language.",
    bullets: [
      "Combined Yelp Open Dataset signals with ZIP-year rental dynamics.",
      "Validated a gentrification keyword list and business-composition measures.",
      "Used focused EDA and regression with metro/year controls.",
    ],
    expansion: [
      "Interactive ZIP-year scatterplot with filters for review coverage.",
      "Keyword validation panel with examples and uncertainty flags.",
      "Time-series extension for metro-adjusted rent growth.",
    ],
    viz: "yelp",
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
  {
    title: "PromptPlay",
    status: "First side-project slot",
    description:
      "A planned interactive playground for prompt experiments, evaluation traces, and before/after behavior changes.",
    action: "Link pending",
  },
  {
    title: "Portfolio Engine",
    status: "This site",
    description:
      "A living case-study system where coursework becomes interactive demos instead of static PDFs.",
    action: "In progress",
  },
];

const readingPaths = [
  {
    time: "5 min",
    title: "Recruiter scan",
    steps: ["Hero", "Proof stats", "House IQ impact card", "Cornell lab thumbnails", "Contact"],
  },
  {
    time: "20 min",
    title: "Hiring manager review",
    steps: ["Stress-test eval case", "Image pipeline case", "Myridius RAG case", "Watermarking lab", "CaseKick product demo"],
  },
  {
    time: "60 min",
    title: "Technical deep dive",
    steps: ["All case files", "Watermark threshold explorer", "RL policy simulator", "VLM drift monitor", "Course expansion roadmaps"],
  },
];

function App() {
  const [mode, setMode] = useState("recruiter");
  const [activeAudience, setActiveAudience] = useState("All");
  const [activeCase, setActiveCase] = useState(caseFiles[0]);
  const [activeProject, setActiveProject] = useState(courseProjects[0]);
  const [threshold, setThreshold] = useState(1.77);
  const [budget, setBudget] = useState(3);
  const [risk, setRisk] = useState(2);

  const filteredCases =
    activeAudience === "All"
      ? caseFiles
      : caseFiles.filter((item) => item.audience.includes(activeAudience));

  return (
    <main>
      <Nav mode={mode} setMode={setMode} />
      <Hero mode={mode} />
      <ProofStrip />
      <ReaderPaths />
      <ExperienceAtlas
        activeAudience={activeAudience}
        setActiveAudience={setActiveAudience}
        filteredCases={filteredCases}
        activeCase={activeCase}
        setActiveCase={setActiveCase}
      />
      <CourseLab
        activeProject={activeProject}
        setActiveProject={setActiveProject}
        threshold={threshold}
        setThreshold={setThreshold}
        budget={budget}
        setBudget={setBudget}
        risk={risk}
        setRisk={setRisk}
      />
      <SideProjects />
      <ContactPanel mode={mode} />
    </main>
  );
}

function Nav({ mode, setMode }) {
  return (
    <header className="nav-shell">
      <a href="#top" className="brand" aria-label="Ali Hasan home">
        AH
      </a>
      <nav>
        <a href="#experience">Experience</a>
        <a href="#lab">Cornell Lab</a>
        <a href="#side">Side Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="mode-switcher" aria-label="Reader mode">
        {Object.entries(readerModes).map(([key, value]) => (
          <button
            key={key}
            className={mode === key ? "active" : ""}
            onClick={() => setMode(key)}
            type="button"
          >
            {value.label}
          </button>
        ))}
      </div>
    </header>
  );
}

function Hero({ mode }) {
  const current = readerModes[mode];
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Ali Hasan / Cornell Tech / AI Safety + Product</p>
        <h1>{current.headline}</h1>
        <p className="hero-subtitle">
          I build AI systems where the hard part is not just model output, but trust:
          guardrails, evals, data workflows, product tradeoffs, and clear explanations for
          people who have to make decisions.
        </p>
        <div className="hero-actions">
          <a href="#experience" className="primary-link">
            Open case files
          </a>
          <a href="#lab" className="secondary-link">
            Explore Cornell lab
          </a>
        </div>
      </div>
      <aside className="signal-console" aria-label="Reader mode summary">
        <div className="console-topline">
          <span>{current.prompt}</span>
          <span>Live lens</span>
        </div>
        <div className="orbital-map">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <span className="orbit orbit-three" />
          <span className="node node-a">PM</span>
          <span className="node node-b">Eval</span>
          <span className="node node-c">RAG</span>
          <span className="node node-d">ML</span>
        </div>
        <p>{current.focus}</p>
      </aside>
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

function ReaderPaths() {
  return (
    <section className="reader-paths">
      <div>
        <p className="eyebrow">How to read this</p>
        <h2>Built for different attention spans.</h2>
      </div>
      <div className="path-grid">
        {readingPaths.map((path) => (
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

function ExperienceAtlas({
  activeAudience,
  setActiveAudience,
  filteredCases,
  activeCase,
  setActiveCase,
}) {
  const audiences = ["All", "PM", "AI Safety", "Engineering", "Analyst"];
  return (
    <section className="section-shell" id="experience">
      <div className="section-heading">
        <p className="eyebrow">Constrained professional work</p>
        <h2>Case files that show judgment without leaking IP.</h2>
        <p>
          Work experience is written as sanitized evidence: what problem existed, what I
          changed, what shipped, and what tradeoff mattered.
        </p>
      </div>

      <div className="filter-row" aria-label="Case file filters">
        {audiences.map((audience) => (
          <button
            type="button"
            key={audience}
            className={activeAudience === audience ? "active" : ""}
            onClick={() => {
              setActiveAudience(audience);
              const next =
                audience === "All"
                  ? caseFiles[0]
                  : caseFiles.find((item) => item.audience.includes(audience));
              if (next) setActiveCase(next);
            }}
          >
            {audience}
          </button>
        ))}
      </div>

      <div className="case-layout">
        <div className="case-list">
          {filteredCases.map((item) => (
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
              <p>{item.impact}</p>
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
          <dl className="case-points">
            <div>
              <dt>Problem</dt>
              <dd>{activeCase.problem}</dd>
            </div>
            <div>
              <dt>Approach</dt>
              <dd>{activeCase.approach}</dd>
            </div>
            <div>
              <dt>Outcome</dt>
              <dd>{activeCase.outcome}</dd>
            </div>
            <div>
              <dt>Public-share boundary</dt>
              <dd>{activeCase.constraints}</dd>
            </div>
          </dl>
        </article>
      </div>
    </section>
  );
}

function CourseLab({
  activeProject,
  setActiveProject,
  threshold,
  setThreshold,
  budget,
  setBudget,
  risk,
  setRisk,
}) {
  return (
    <section className="section-shell lab-section" id="lab">
      <div className="section-heading">
        <p className="eyebrow">Cornell Tech project lab</p>
        <h2>Coursework becomes interactive evidence.</h2>
        <p>
          Each class final should eventually become a small product: explorable data,
          methods, failures, extension plan, and a demo that makes the work visual.
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
              className={activeProject.id === project.id ? "project-tab active" : "project-tab"}
              onClick={() => setActiveProject(project)}
            >
              <span>{project.course}</span>
              <strong>{project.title}</strong>
              <small>{project.theme}</small>
            </button>
          ))}
        </div>

        <article className="project-stage">
          <div className="project-stage-head">
            <div>
              <span className="pill">{activeProject.course}</span>
              <h3>{activeProject.title}</h3>
            </div>
            <strong>{activeProject.metric}</strong>
          </div>
          <p>{activeProject.caption}</p>
          <div className="project-body">
            <div>
              <h4>What it proves</h4>
              <ul>
                {activeProject.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <h4>Expansion roadmap</h4>
              <ul>
                {activeProject.expansion.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <InteractiveViz
              project={activeProject}
              threshold={threshold}
              setThreshold={setThreshold}
              budget={budget}
              setBudget={setBudget}
              risk={risk}
              setRisk={setRisk}
            />
          </div>
        </article>
      </div>
    </section>
  );
}

function InteractiveViz({ project, threshold, setThreshold, budget, setBudget, risk, setRisk }) {
  if (project.viz === "watermark") {
    const tpr = Math.max(27, Math.min(99, Math.round(112 - threshold * 12)));
    const fpr = Math.max(0.2, Math.min(8, Number((threshold / 2.3).toFixed(1))));
    return (
      <div className="viz-card">
        <div className="viz-header">
          <span>Threshold explorer</span>
          <strong>{tpr}% TPR</strong>
        </div>
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

  if (project.viz === "rl") {
    const dismiss = risk < 2 ? 10 : -500;
    const standard = risk * 85 - budget * 6;
    const aggressive = risk * 125 - 30 - budget * 10;
    const best = Math.max(dismiss, standard, aggressive);
    return (
      <div className="viz-card">
        <div className="viz-header">
          <span>Dispatch simulator</span>
          <strong>{best === aggressive ? "Aggressive" : best === standard ? "Inspect" : "Dismiss"}</strong>
        </div>
        <PolicyBars values={[dismiss, standard, aggressive]} />
        <label>
          Inspector budget: {budget}
          <input
            type="range"
            min="0"
            max="5"
            step="1"
            value={budget}
            onChange={(event) => setBudget(Number(event.target.value))}
          />
        </label>
        <label>
          Violation risk signal: {risk}
          <input
            type="range"
            min="0"
            max="4"
            step="1"
            value={risk}
            onChange={(event) => setRisk(Number(event.target.value))}
          />
        </label>
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
          The portfolio version should let viewers scrub checkpoints and watch the embedding
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
          Next version should load cleaned ZIP-year aggregates and let viewers filter by review
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

function PolicyBars({ values }) {
  const labels = ["Dismiss", "Inspect", "Aggressive"];
  const min = -520;
  const max = 480;
  return (
    <div className="policy-bars">
      {values.map((value, index) => {
        const width = Math.max(4, ((value - min) / (max - min)) * 100);
        return (
          <div className="policy-row" key={labels[index]}>
            <span>{labels[index]}</span>
            <div>
              <i style={{ width: `${width}%` }} />
            </div>
            <strong>{Math.round(value)}</strong>
          </div>
        );
      })}
    </div>
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
        <p className="eyebrow">Personal builds</p>
        <h2>Side projects get their own shelf.</h2>
        <p>
          PromptPlay is reserved as the first personal-project link. Once the repo or demo
          exists, this card should point there and show a live interaction.
        </p>
      </div>
      <div className="side-grid">
        {sideProjects.map((project) => (
          <article key={project.title}>
            <span>{project.status}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button type="button">{project.action}</button>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactPanel({ mode }) {
  return (
    <section className="contact-panel" id="contact">
      <div>
        <p className="eyebrow">Next step</p>
        <h2>Want the short version or the deep dive?</h2>
        <p>
          Current reader mode: <strong>{readerModes[mode].label}</strong>. The final site
          should route this to a tailored PDF, resume, or project walkthrough.
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
