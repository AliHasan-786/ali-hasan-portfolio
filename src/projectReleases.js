// Reviewed snapshots, not live repository metadata. Update after release review.
export const projectReleases = {
  "stance-bench": {
    course: "Independent research / Trust & Safety",
    title: "StanceBench",
    theme: "What the speaker means",
    metric: "60 synthetic examples",
    caption: "The same scam claim can be a solicitation, a warning, or someone asking for help. Compare six speech stances and inspect where one saved local baseline gets them wrong.",
    bullets: [
      "Inspect 48 matched scam records and 12 unrelated controls, with the expected action and saved local TF-IDF decision side by side.",
      "Compare all six stances for a claim, then trace the input, policy, configuration, and baseline hashes behind a decision.",
      "The package contains only reviewed synthetic examples and public-safe methods. Missing or malformed data produces an unavailable state, not a substitute result.",
    ],
    expansion: [
      "Seven hosted comparison conditions remain unrun. This is not a hosted-model ranking or a completed benchmark.",
      "The held-out extension and independent corpus review remain separate work; these synthetic examples cannot establish real-world error rates.",
    ],
    nextHeading: "What remains unproven",
    links: [
      { label: "Methods and limits", href: "https://ali-hasan-ai.vercel.app/labs/stancebench/public/METHODS.md" },
      { label: "Evidence provenance", href: "https://ali-hasan-ai.vercel.app/labs/stancebench/public/provenance.json" },
      { label: "Release manifest", href: "https://ali-hasan-ai.vercel.app/labs/stancebench/PACKAGE_MANIFEST.json" },
    ],
    release: {
      sourceCommit: "4f6378da89ba4b86a985a5f6a3fa6378b606475f",
      evidenceSourceCommit: "803736102caf49ff3bc48d96fa6ae1e1453e3dfc",
      checkedAt: "2026-11-09",
      demoUrl: "https://ali-hasan-ai.vercel.app/labs/stancebench/",
      packageManifest: "/labs/stancebench/PACKAGE_MANIFEST.json",
      evidenceStage: "Partial local synthetic baseline",
      thumbnail: "/projects/stancebench.svg",
      thumbnailAlt: "StanceBench's saved-decision inspector with synthetic matched speech stances and a local baseline.",
      invitation: "Change the stance. Inspect the saved decision.",
      note: "One cached local TF-IDF baseline on 60 approved synthetic examples. No live model call, held-out result, or completed hosted comparison. The source repository remains private; reviewed methods and provenance are public.",
    },
  },
  watermarking: {
    course: "CS 5788 Generative Models",
    title: "Text Provenance Lab",
    theme: "AI provenance",
    metric: "Historical replay",
    caption:
      "What survives an edit? Inspect preserved detector evidence across two models, text lengths, and edit conditions, then separate what the scores show from what they cannot establish.",
    bullets: [
      "Implemented green-list watermark injection and a one-sided detector, then built an interactive replay of the preserved coursework evidence.",
      "Compare clean distributions, eight text-length cells per model, and saved edit scores on fixed scales with sample counts and accessible numeric tables.",
      "The exporter verifies 17 source-artifact hashes. Missing experiments and unavailable rewritten text stay visibly distinct from measured zero.",
    ],
    expansion: [
      "Historical thresholds do not preserve a calibration/held-out split; these are not confirmatory calibrated-FPR results.",
      "The Llama paraphrase scores survive, but the rewritten passages do not. They cannot establish reconstruction or text quality.",
      "The planned SynthID comparison, fresh paraphrase replication, and November extension remain unrun.",
    ],
    nextHeading: "What remains unproven",
    links: [
      { label: "Source", href: "https://github.com/AliHasan-786/llm-invisible-watermarking" },
      { label: "Evidence contract", href: "https://github.com/AliHasan-786/llm-invisible-watermarking/blob/e794de39b9100dc51bdbff398f0a35b986abcd4b/docs/HISTORICAL_REPLAY_CONTRACT.md" },
    ],
    release: {
      sourceCommit: "e794de39b9100dc51bdbff398f0a35b986abcd4b",
      checkedAt: "2026-11-09",
      demoUrl: "https://text-provenance-lab.vercel.app",
      evidenceStage: "Historical coursework evidence",
      thumbnail: "/projects/text-provenance-lab.svg",
      thumbnailAlt: "Historical clean TPR: Gemma 90.0 percent and Llama 98.0 percent; Llama paraphrase 27.3 percent from scores only. SynthID remains unrun.",
      invitation: "Choose a model. Follow the signal through an edit.",
      note: "Two English-language models and one Kirchenbauer-style scheme. Fixed historical thresholds, not held-out calibration. The separate word-level mechanics toy is illustrative, not a study result.",
    },
  },
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
