// Reviewed snapshots, not live repository metadata. Update after release review.
export const projectReleases = {
  drift: {
    course: "CS 5787 Deep Learning",
    title: "Representation Drift Lab",
    theme: "Learning vs. retaining",
    metric: "9 methods / 3 seeds",
    caption:
      "When an AI model learns something new, what does it forget? Follow real training checkpoints, compare adaptation strategies, and inspect the failure cases.",
    bullets: [
      "Built a checkpoint explorer connecting new-task accuracy, retained-task accuracy, and layer-level representation movement.",
      "Compared nine local adaptation approaches across three independent seeds, with 95% Student-t intervals and linked experiment manifests.",
      "Added an on-demand class microscope, a larger local confirmation, and domain-pair comparisons that preserve an excluded failure case rather than hiding it.",
    ],
    expansion: [
      "The five-seed full-scale GPU benchmark is not yet complete.",
      "The early-warning evaluator validates synthetic methodology; it does not establish that real forgetting can be predicted.",
    ],
    nextHeading: "What remains unproven",
    links: [
      { label: "Source", href: "https://github.com/AliHasan-786/representation-drift-lab" },
      { label: "Results and limitations", href: "https://github.com/AliHasan-786/representation-drift-lab/blob/472b5c97b3f26fe623c955b069816cdf157e443a/RESULTS.md" },
    ],
    release: {
      sourceCommit: "472b5c97b3f26fe623c955b069816cdf157e443a",
      checkedAt: "2026-11-07",
      demoUrl: "https://representation-drift-lab.vercel.app",
      evidenceStage: "Preliminary local evidence",
      thumbnail: "/projects/drift.svg",
      thumbnailAlt: "Representation Drift Lab: learning changes what a model retains, with preliminary three-seed evidence.",
      invitation: "Move through training. Inspect what changed.",
      note: "Bounded local subsets and one CLIP backbone, not a universal model ranking. The original team coursework and Ali's independent extension are credited separately.",
    },
  },
  "yelp-rent": {
    course: "INFO 5304 / CS 5304 Data Science in the Wild",
    title: "The Brunch Index",
    theme: "Reading a changing city",
    metric: "1,105 ZIP-years",
    caption:
      "Can the language people use about a neighborhood tell us where rents are headed? Explore an interactive data essay across five metros, then look under the hood of the association.",
    bullets: [
      "Built a five-metro map with a 2015-2022 year slider, selectable ZIPs, aligned language/rent curves, and a sortable 30-term lexicon.",
      "Rebuilt the original 1,113-row course panel into a reproducible 1,105-ZIP-year derivative after removing eight duplicate metro assignments.",
      "The corrected panel associates a one-standard-deviation language-score increase with +0.276 percentage points of next-year rent growth. This is not a causal effect.",
    ],
    expansion: [
      "Geography and review coverage limit how far the findings travel beyond these five metros.",
      "The high-versus-low language-score comparison did not meet its significance threshold; the essay reports that result alongside the positive association.",
    ],
    nextHeading: "Read with these limits",
    links: [
      { label: "Source and methods", href: "https://github.com/AliHasan-786/yelp-gentrification-rent" },
      { label: "Claims and provenance", href: "https://github.com/AliHasan-786/yelp-gentrification-rent/blob/dcab3385222f79d6ae28a87568cd9cc17d8d2e03/docs/CLAIMS_LEDGER.md" },
    ],
    release: {
      sourceCommit: "dcab3385222f79d6ae28a87568cd9cc17d8d2e03",
      checkedAt: "2026-11-07",
      demoUrl: "https://the-brunch-index.vercel.app",
      evidenceStage: "Observational analysis",
      thumbnail: "/projects/brunch-index.png",
      thumbnailAlt: "The Brunch Index interactive essay, with a neighborhood-language map and rent-growth analysis.",
      invitation: "Pick a ZIP. Follow the language and the rent.",
      note: "Indianapolis, Nashville, New Orleans, Philadelphia, and Tampa Bay, 2015-2022. Course team member on H3; interactive extension and release preparation by Ali.",
    },
  },
};
