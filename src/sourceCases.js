// Historical audit snapshot. The released housing entry lives in projectReleases.js.
export const housingSourceCase = {
  id: "rl-housing",
  course: "ORIE 5570 Reinforcement Learning",
  title: "NYC Housing Inspection Dispatch",
  theme: "Allocation under capacity",
  metric: "Simulation / real-data rebuild",
  caption:
    "When inspection capacity is scarce, can a learned dispatch policy beat a transparent queue? A course simulation being rebuilt around real complaints and temporal evaluation.",
  bullets: [
    "The course team explored Monte Carlo, tabular Q-learning, DQN, REINFORCE, and transparent baselines in a synthetic complaint simulation.",
    "My course work focused on tabular TD and REINFORCE, reward components, and policy heatmaps. The 755 generated complaints were not a historical backtest.",
    "The independent rebuild adds a real NYC complaint pipeline, persistent inspection capacity, and defer/routine/expedited dispatch instead of treating enforcement as a dispatcher choice.",
    "Implemented a seeded temporal comparison of transparent and learned policies. Result accounting and provenance are under review; no operational effectiveness is established.",
  ],
  links: [
    { label: "Course paper", href: "https://arxiv.org/abs/2605.06482" },
    { label: "Source and rebuild", href: "https://github.com/AliHasan-786/nyc-housing-inspection-rl" },
    { label: "Coursework evidence audit", href: "https://github.com/AliHasan-786/nyc-housing-inspection-rl/blob/0b49eab0170b27b6998f027cba02c3cadf4d6280/docs/audit/coursework-audit.md" },
  ],
  nextHeading: "What remains unproven",
  expansion: [
    "An artifact-backed queue explorer and corrected capacity/access comparisons are in progress, not a deployed decision system.",
    "A wider verified cohort is needed before predictive claims. Borough service slices do not establish demographic fairness.",
  ],
  audit: {
    sourceCommit: "0b49eab0170b27b6998f027cba02c3cadf4d6280",
    title: "What changed after the audit",
    steps: [
      { title: "Data", text: "Generated course complaints are now distinguished from the real-data extension." },
      { title: "Decisions", text: "Dispatch controls priority and timing, not an inspector's legal finding." },
      { title: "Evidence", text: "Temporal comparisons and explicit outcome accounting replace an in-sample success headline." },
    ],
  },
  viz: "source-audit",
};

export const deepShieldSourceCase = {
  title: "DeepShield",
  status: "Supporting engineering case study",
  description:
    "A group extension of BlurGuard for adversarial image protection. I contributed the initial enhanced pipeline, momentum/translation-invariant gradients, WebP/color-jitter transforms, pixel-space loss, and the original demo. The reviewed checkpoint adds an offline paired-evaluation harness; real-model transfer effectiveness is unmeasured.",
  action: "Read the source case study",
  sourceCommit: "3b2703e49f8e9919b6c29543ce2de3f5b662dc97",
  href: "https://github.com/AliHasan-786/DeepShield/blob/3b2703e49f8e9919b6c29543ce2de3f5b662dc97/docs/PORTFOLIO_CASE_STUDY.md",
};
