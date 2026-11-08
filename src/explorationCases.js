export const policySource = {
  commit: "73cabbde4503004ff25d5a0f75a3088e0d85150e",
  href: "https://github.com/AliHasan-786/crypto-scam-moderation-lab/blob/73cabbde4503004ff25d5a0f75a3088e0d85150e/policy/CRYPTO_INVESTMENT_SCAM_POLICY.md",
};

// Authored illustrations of the written policy, not model or evaluation outputs.
export const policyCases = [
  {
    id: "promotion",
    title: "A direct solicitation",
    text: "Send me 0.1 ETH today and I will send you twice as much back.",
    route: "Public-label candidate",
    evidence: "The speaker requests a transfer and promises a doubled return.",
    reason: "Direct solicitation is strong policy evidence. A candidate still requires reviewer confirmation; this walkthrough does not issue a label.",
    section: "4. Evidence standards",
  },
  {
    id: "warning",
    title: "A warning about it",
    text: "Never send ETH to someone promising to double it. That is a scam warning sign.",
    route: "Protect the warning",
    evidence: "The same transfer vocabulary appears, but the speaker discourages the transaction.",
    reason: "Warnings are a protected context. Matching words is not enough to justify a public accusation.",
    section: "3. Protected contexts",
  },
  {
    id: "help",
    title: "Someone asking for help",
    text: "I sent ETH to a recovery service and think I was scammed. How can I report it?",
    route: "Support, not enforcement",
    evidence: "The speaker reports an experience and asks for help; they are not promoting an offer.",
    reason: "Victim help-seeking is protected. A system should not punish the person describing the harm.",
    section: "3. Protected contexts",
  },
  {
    id: "conflict",
    title: "Conflicting context",
    text: "Be careful with this giveaway. I am sharing its wallet-connect page so you can investigate.",
    route: "Human review",
    evidence: "Warning language and a potentially risky destination appear together; the surrounding source is missing.",
    reason: "The policy routes unresolved strong-signal/context conflicts to review rather than automatically labeling the speaker.",
    section: "3-5. Context, evidence and review",
  },
];

export const watermarkQuestions = [
  {
    id: "threshold",
    title: "What does a threshold change?",
    question: "Which texts cross the detector's decision boundary?",
    need: "Actual watermarked and control score arrays, a declared comparison rule, and the sample denominator.",
    limit: "Moving a threshold does not create new model evidence. A coursework control set cannot silently become a fresh held-out calibration set.",
  },
  {
    id: "editing",
    title: "What survives an edit?",
    question: "Does the signal remain useful after a particular transformation?",
    need: "The exact edit condition, preserved detector scores, and quality evidence for a fair comparison.",
    limit: "A cached paraphrase score does not recover the missing rewritten passage or establish its quality. Unrun comparisons stay unavailable.",
  },
  {
    id: "length",
    title: "Why does length matter?",
    question: "Is there enough evidence in a short passage to make a reliable decision?",
    need: "Length-specific detector evidence and controls, with calibration separated from evaluation.",
    limit: "Long-text results do not establish short-text reliability. Each length and method needs its own supported comparison.",
  },
];
