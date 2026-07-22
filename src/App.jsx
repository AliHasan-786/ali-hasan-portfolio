import React, { useState } from "react";

const trustSafetyLabUrl = "https://crypto-scam-lab.vercel.app";
const trustSafetyRepoUrl = "https://github.com/AliHasan-786/crypto-scam-moderation-lab";

const heroCopy = {
  headline: "I build trust systems that show their work.",
  focus:
    "I'm a Cornell Tech M.Eng. working across AI safety, evaluation, and product. Recent work: a live content-moderation system, an LLM watermark study, and the safety layer for a customer-facing AI product at House IQ. Most things below are interactive and all of them link to real code.",
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
    value: "200K",
    label: "AI quality scores I audited",
    detail: "House IQ — validated against 9 human labels in 30 days, 3 disagreeing",
  },
  {
    value: "org-wide",
    label: "Evaluation code adopted",
    detail: "My safety and on-topic evaluators run on every production deploy",
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
    title: "Output-safety stack for a customer-facing image feature",
    date: "Dec 2025 - present",
    status: "Shipped",
    tags: ["LLM-as-judge", "red teaming", "guardrails", "defense-in-depth"],
    summary: "Traced a customer-facing feature and found its generated images were never being content-checked, then shipped the layered defense that closed it.",
    lead:
      "I traced the image-generation path of a live customer feature and found the content evaluation was never actually invoked \u2014 generated images reached users unchecked. I owned the fix end to end.",
    body:
      "I argued for defense-in-depth over a single checkpoint, then built it: a deterministic moderation cascade that fails closed (never serve an un-vetted image) with a semantic judge behind it that fails open, so a judge outage can't take down all rendering. When a code reviewer found my own guardrail could be skipped on a cache hit, I re-vetted every cached generation through the full cascade and shipped the fix the same day.",
    did: [
      "Authored a 12-rule multimodal LLM judge from scratch across 9 harm categories; ~21 red-team rounds (114 adversarial prompts, 132 renders triaged) made me add 2 policy rules for gaps I found and re-test to confirmed blocking.",
      "Wired an input + output guardrail cascade covered by 31 tests, with per-stage block attribution and a fail-open alarm counter added so a silent judge failure is visible.",
      "Designed and registered a prompt-injection threat model (10 scenarios, 4 evaluators) for the agent's web-retrieval path \u2014 built and ready, not yet run.",
    ],
    note: "Some feature names, prompts, and vendor details are generalized under NDA.",
  },
  {
    org: "House IQ",
    title: "Auditing 200K monthly AI quality scores against reality",
    date: "2026",
    status: "Shipped analysis, owns follow-on",
    tags: ["product analytics", "evaluation", "ground truth", "judgment"],
    summary: "Found that ~200,000 automated quality scores a month were validated by 9 human labels \u2014 three of which disagreed \u2014 and started the program to fix it.",
    lead:
      "The team's release decisions leaned on roughly 200,000 automated LLM-judge quality scores a month. I found, from live production data, that they rested on 9 human accuracy labels in 30 days \u2014 and 3 of those 9 disagreed with the judge.",
    body:
      "I paired that with the code: release gates hardcoded permissive, no evaluations running in CI, no agreement statistics anywhere. The anchor was a real release-blocking bug \u2014 the assistant recommended options outside a budget the user had stated one message earlier \u2014 that the live judges scored a perfect 5.00/5. Anyone watching judge scores as a quality signal would never have seen it. That analysis created a workstream nobody owned, and I took it.",
    did: [
      "Verified the figures against live observability dashboards over a five-day window before proposing anything.",
      "Designed the calibration program: stratified sampling, blind labeling, agreement statistics with bootstrap intervals, and failure-recall.",
      "Built the supporting stats toolkit; the lane went from no code, no ticket, no owner to owned.",
    ],
    note: "Program is proposed and instrumented; full adoption was in progress. Internal dashboards are not public.",
  },
  {
    org: "House IQ",
    title: "Defining what a good agent answer looks like",
    date: "2026",
    status: "In progress",
    tags: ["product", "benchmark design", "evaluation", "what-good-looks-like"],
    summary: "Designed the scenario system the team uses to judge agent quality, and A/B-tested my own approach until the leaner one won.",
    lead:
      "The team needed a benchmark to measure its agent against incumbents, which is really a product question: what does a good answer look like, for which user? I designed the system that answers it.",
    body:
      "My insight was demographic-realistic prompting \u2014 writing scenarios the way real users actually type, including older homeowners who write long and formally, which the existing curt, LLM-fluent prompts never tested. I grounded the personas in customer interviews and published research rather than my own intuition, and when I A/B-tested a rich generation prompt against a lean one, the lean one won on persona texture, so I shipped it and scheduled my own richer version for deletion.",
    did: [
      "Authored 7 of the first 11 scenarios in the benchmark database and reviewed each line-by-line with the product lead.",
      "Built the generation framework with an independent six-dimension validator that grades in a fresh session so it has no drafting context \u2014 an eval-integrity call I made deliberately; packaged both halves as installable skills the team uses.",
    ],
    note: "Framework is delivered and execution is ramping toward the team's several-hundred-scenario target; benchmark contents are not public.",
  },
  {
    org: "House IQ",
    title: "A document-understanding pipeline, prototype to production",
    date: "2026",
    status: "Shipped",
    tags: ["multimodal", "vision pipeline", "latency", "engineering"],
    summary: "Rebuilt an extraction prototype on the service's real patterns after a hard review, then cut its latency 10x on real documents.",
    lead:
      "My working extraction prototype got a changes-requested review for following none of the service's production patterns. Rather than defend it, I rewrote it as an integrated endpoint \u2014 and it became the foundation of a five-PR arc over 24 days.",
    body:
      "The capability pulls appliance and fixture images out of inspection documents and returns structured brand, model, and condition. On a real 31-page report it extracted 60 images correctly; I took a full-report pass from about five minutes sequential to roughly 30 seconds with bounded ten-way concurrency, and added a progressive quality ladder so an oversized phone photo degrades gracefully instead of being dropped.",
    did: [
      "Extended the pipeline to the formats users actually have: scanned PDFs, embedded-office-format images, and iPhone photos.",
      "The product lead later named embedded-image extraction a key competitive differentiator for that surface.",
    ],
    note: "Throughput and per-document economics are internal; figures above are from my own test records.",
  },
  {
    org: "Cornell Tech SETS AI Red Team Clinic",
    title: "Red-teaming NYC health department AI tools",
    date: "Oct - Nov 2025",
    status: "Inaugural cohort",
    tags: ["red team", "public-sector AI", "multi-turn testing"],
    summary: "One of five students in the clinic's first cohort, stress-testing two public-health AI tools operated by NYC DOHMH.",
    lead:
      "Public-sector AI serving people managing diabetes can give unsafe guidance, fabricate sources, or behave inconsistently \u2014 and the operating agency couldn't staff adversarial coverage itself. I was one of five students in the clinic's first cohort.",
    body:
      "I designed adversarial personas and multi-turn attack prompts, triaged outputs into a 653-item judging-policy dataset, and contributed to the automated pipeline that pre-screened 1,607 text and multimodal pairs for human review. Our findings on unsafe guidance and fabricated citations shaped the clinic's report to the agency.",
    did: [],
    note: "Specific vulnerabilities and agency-internal findings stay confidential; the coverage below is the public record.",
    links: [
      { label: "Cornell Tech: the clinic", href: "https://tech.cornell.edu/news/red-team-clinic-cornell-tech/" },
      { label: "Cornell Chronicle", href: "https://news.cornell.edu/stories/2025/12/red-team-students-stress-test-nyc-health-departments-ai" },
    ],
  },
  {
    org: "Myridius",
    title: "Enterprise AI assistants for 10+ businesses",
    date: "Oct 2024 - Jul 2025",
    status: "Built and demoed",
    tags: ["RAG", "Databricks", "enterprise", "client-facing"],
    summary: "Built and presented retrieval assistants that answered from documents and structured tables, and delivered the analysis behind them.",
    lead:
      "I built and demoed Amazon Q Business knowledge assistants for more than ten businesses, defining allowed sources, refusal behavior, confidence thresholds, and human handoffs for the answers the model shouldn't give on its own.",
    body:
      "I structured product and travel data in Databricks behind a retrieval assistant, presented working future-state demos to executives and clients, and delivered market-analysis dashboards that turned customer evidence into decisions for senior leadership.",
    did: [],
    note: "Client identities and engagement specifics are confidential.",
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
    links: [{ label: "Repo", href: "https://github.com/AliHasan-786/representation-drift-lab" }],
    viz: "drift",
  },
  {
    id: "rl-housing",
    course: "ORIE 5570 Reinforcement Learning",
    title: "NYC Housing Inspection Dispatch",
    theme: "Public-sector RL",
    metric: "Real 311 pipeline",
    caption: "Modeled 311 after-hours construction complaints as a dispatch policy problem with resource and fairness tradeoffs.",
    bullets: [
      "Built an MDP with complaint category, borough, inspector budget, prior count, and time bin.",
      "Compared Monte Carlo, tabular Q-learning, DQN, REINFORCE, and baselines.",
      "Framed reward design around missed violations, wasted inspections, and displacement risk.",
      "Co-author on the cohort's arXiv preprint; my hands-on agents: tabular TD and REINFORCE over 755 real-data-calibrated complaints, with reward-component and policy-heatmap analysis.",
    ],
    links: [
      { label: "Paper: arXiv:2605.06482", href: "https://arxiv.org/abs/2605.06482" },
      { label: "Ongoing lab repo", href: "https://github.com/AliHasan-786/nyc-housing-inspection-rl" },
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
    links: [{ label: "Repo + data", href: "https://github.com/AliHasan-786/yelp-gentrification-rent" }],
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
    title: "DeepShield",
    status: "Startup Studio",
    description:
      "Adversarial protection against AI image manipulation: an EOT-PGD engine with multi-VAE ensemble gradients across SD and Flux latent spaces, JPEG-robust augmentations, and a FastAPI service. Grounded in 20 customer interviews.",
    action: "github.com/AliHasan-786/DeepShield",
    href: "https://github.com/AliHasan-786/DeepShield",
  },
  {
    title: "Guard-model research program",
    status: "In progress",
    description:
      "Two preregistered studies of open moderation models: whether they punish counter-speech (people warning about scams score like scammers), and whether false-positive rates differ across dialect and identity mentions. Frozen datasets, pinned models, results published either way.",
    action: "Opening with first results",
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
  const [activeProject, setActiveProject] = useState(courseProjects[0]);
  const [threshold, setThreshold] = useState(1.77);
  const [fraudThreshold, setFraudThreshold] = useState(0.48);
  const [budget, setBudget] = useState(3);
  const [risk, setRisk] = useState(2);

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
      <CourseLab
        activeProject={activeProject}
        setActiveProject={setActiveProject}
        threshold={threshold}
        setThreshold={setThreshold}
        fraudThreshold={fraudThreshold}
        setFraudThreshold={setFraudThreshold}
        budget={budget}
        setBudget={setBudget}
        risk={risk}
        setRisk={setRisk}
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
          href="https://github.com/AliHasan-786/representation-drift-lab"
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
          House IQ, the SETS AI Red Team Clinic at Cornell Tech, and Myridius \u2014
          across safety, product, and engineering. Some client and feature specifics are
          generalized under NDA.
        </p>
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

function CourseLab({
  activeProject,
  setActiveProject,
  threshold,
  setThreshold,
  fraudThreshold,
  setFraudThreshold,
  budget,
  setBudget,
  risk,
  setRisk,
}) {
  return (
    <section className="section-shell lab-section" id="lab">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Selected projects.</h2>
        <p>
          Graduate coursework rebuilt as working demos. Charts marked as sketches are
          illustrative; the measured numbers live in each project's repo.
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
              fraudThreshold={fraudThreshold}
              setFraudThreshold={setFraudThreshold}
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

function InteractiveViz({
  project,
  threshold,
  setThreshold,
  fraudThreshold,
  setFraudThreshold,
  budget,
  setBudget,
  risk,
  setRisk,
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
        <p className="viz-note">Illustrative sketch for orientation; measured results live in the linked project and its repo.</p>
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
        <p className="eyebrow">More</p>
        <h2>Side projects.</h2>
        <p>
          Built outside coursework and work, on my own time.
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
