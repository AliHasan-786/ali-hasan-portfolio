(() => {
  const data = window.STANCEBENCH_WORKBENCH;
  const validator = window.StanceBenchValidation && window.StanceBenchValidation.validateWorkbench;

  function renderSafeState() {
    const main = document.createElement("main");
    main.className = "safe-state";
    main.setAttribute("role", "alert");
    const label = document.createElement("p");
    label.className = "section-label";
    label.textContent = "Saved data unavailable";
    const heading = document.createElement("h1");
    heading.textContent = "This page cannot verify its saved data.";
    const copy = document.createElement("p");
    copy.textContent = "No record is shown. StanceBench does not fill in a missing or malformed file with a result.";
    const link = document.createElement("a");
    link.href = "public/METHODS.md";
    link.textContent = "Read the methods and limits";
    main.append(label, heading, copy, link);
    document.body.replaceChildren(main);
  }

  if (!validator || !validator(data).ok) {
    renderSafeState();
    return;
  }

  const byId = (id) => document.getElementById(id);
  const kernelSelect = byId("kernel-select");
  const stanceSelect = byId("stance-select");
  const recordByKernel = new Map();
  data.items.forEach((item) => {
    if (!recordByKernel.has(item.kernel_id)) recordByKernel.set(item.kernel_id, []);
    recordByKernel.get(item.kernel_id).push(item);
  });
  const readable = (value) => value.replaceAll("_", " ");
  const actionClass = (value) => value === "no_flag" ? "no-flag" : value;
  const actionSentence = (value) => {
    if (value === "flag") return "was flagged";
    if (value === "review") return "was sent to review";
    return "was not flagged";
  };
  const text = (element, value) => { element.textContent = value; };
  const make = (tag, content, className) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    node.textContent = content;
    return node;
  };

  function appendFact(container, label, value) {
    const wrap = document.createElement("div");
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = label;
    dd.textContent = value;
    wrap.append(dt, dd);
    container.append(wrap);
  }

  function outcomeNote(item) {
    const observed = item.available_output.normalized_action;
    if (item.stance === "perpetration") {
      if (observed === "flag") return "The local baseline flagged this promotional item.";
      return `The local baseline sent this promotional item to ${readable(observed)} instead of flagging it.`;
    }
    if (item.stance === "benign_unrelated_control") {
      return observed === "no_flag"
        ? "The local baseline did not flag this unrelated control."
        : `The local baseline sent this unrelated control to ${readable(observed)}.`;
    }
    if (observed === "flag") return "The local baseline flagged this counter-speech item.";
    if (observed === "review") return "The local baseline sent this counter-speech item to review.";
    return "The local baseline did not flag this counter-speech item.";
  }

  function setStanceOptions(kernelId, preferred) {
    const items = recordByKernel.get(kernelId) || [];
    stanceSelect.replaceChildren();
    items.sort((a, b) => a.stance.localeCompare(b.stance)).forEach((item) => {
      const option = document.createElement("option");
      option.value = item.stance;
      option.textContent = readable(item.stance);
      stanceSelect.append(option);
    });
    stanceSelect.value = items.some((item) => item.stance === preferred) ? preferred : items[0].stance;
  }

  function renderMatrix(kernelId) {
    const items = [...(recordByKernel.get(kernelId) || [])].sort((a, b) => a.stance.localeCompare(b.stance));
    const body = byId("stance-table");
    body.replaceChildren();
    items.forEach((item) => {
      const row = document.createElement("tr");
      const values = [readable(item.stance), item.expected_action, item.available_output.normalized_action];
      values.forEach((value, index) => {
        const cell = document.createElement("td");
        if (index > 0) {
          const code = document.createElement("code");
          code.textContent = value;
          code.className = index === 2 ? `status-text ${actionClass(value)}` : "";
          cell.append(code);
        } else {
          const rowHeader = document.createElement("th");
          rowHeader.scope = "row";
          rowHeader.textContent = value;
          row.append(rowHeader);
          return;
        }
        row.append(cell);
      });
      row.append(make("td", item.available_output.compatible_mapping ? "compatible" : "incompatible"));
      body.append(row);
    });
    const counter = items.filter((item) => !["perpetration", "benign_unrelated_control"].includes(item.stance));
    const counterFlags = counter.filter((item) => item.available_output.normalized_action === "flag").length;
    const perpetration = items.find((item) => item.stance === "perpetration");
    text(byId("kernel-note"), perpetration
      ? `${counterFlags} of ${counter.length} counter-speech items were flagged. The promotional item ${actionSentence(perpetration.available_output.normalized_action)}.`
      : "This unrelated control has no matched promotional counterpart.");
  }

  function renderRecord() {
    const kernelId = kernelSelect.value;
    const item = (recordByKernel.get(kernelId) || []).find((candidate) => candidate.stance === stanceSelect.value);
    if (!item) return;
    const output = item.available_output;
    text(byId("record-kind"), `${readable(item.input_role)} / ${readable(item.stance)}`);
    text(byId("record-title"), readable(item.kernel_id));
    text(byId("record-text"), item.text);
    const observed = byId("observed-action");
    text(observed, `saved decision: ${readable(output.normalized_action)}`);
    observed.className = `action-chip ${actionClass(output.normalized_action)}`;
    text(byId("comparison"), outcomeNote(item));

    const facts = byId("record-facts");
    facts.replaceChildren();
    appendFact(facts, "Study expectation", item.expected_action);
    appendFact(facts, "Baseline label", output.native_label);
    appendFact(facts, "Score", output.raw_score === null ? "not recorded" : output.raw_score.toFixed(4));
    appendFact(facts, "Mapping", output.compatible_mapping ? "compatible" : "incompatible");
    appendFact(facts, "Vocabulary overlap", String(item.vocabulary_overlap.jaccard));
    appendFact(facts, "Run date", output.run_date);

    const provenance = byId("provenance-list");
    provenance.replaceChildren();
    const pairs = [
      ["Tuple ID", item.tuple_id], ["Source type", item.provenance.source_type],
      ["Policy SHA-256", output.policy_sha256], ["Input SHA-256", output.input_sha256],
      ["Config SHA-256", output.config_sha256], ["Baseline artifact SHA-256", data.available_condition.artifact_sha256],
      ["Pinned revision", data.available_condition.resolved_revision], ["Safety constraints", item.safety_notes.join("; ")]
    ];
    pairs.forEach(([label, value]) => {
      const dt = document.createElement("dt"); const dd = document.createElement("dd");
      dt.textContent = label; dd.textContent = value || "not recorded"; provenance.append(dt, dd);
    });
    renderMatrix(kernelId);
  }

  function renderStaticEvidence() {
    const inventory = data.source_inventory;
    const summary = data.observed_action_summary;
    text(byId("scope-copy"), "Try the 60 saved decisions from one local TF-IDF baseline. The examples are synthetic and low severity. Hosted comparisons have not run.");
    const strip = byId("evidence-strip");
    [["Saved examples", inventory.expected_record_count], ["Counter-speech flags", `${summary.counter_speech.flag}/${summary.counter_speech.denominator}`], ["Promotional items flagged", `${summary.perpetration.flag}/${summary.perpetration.denominator}`], ["Hosted comparisons unrun", data.unavailable_conditions.length]].forEach(([label, value]) => {
      const wrap = document.createElement("div"); const dt = document.createElement("dt"); const dd = document.createElement("dd");
      dt.textContent = label; dd.textContent = value; wrap.append(dt, dd); strip.append(wrap);
    });
    const unavailable = byId("unavailable-list");
    data.unavailable_conditions.forEach((condition) => {
      const item = document.createElement("li"); item.append(make("strong", condition.condition_id), make("span", "No saved output yet.")); unavailable.append(item);
    });
    text(byId("rights-copy"), "The 60 displayed examples are approved, synthetic, low severity, and CC BY 4.0. Open the links to inspect the methods, source hashes, and saved data file.");
    text(byId("artifact-revision"), `Saved-data version ${data.derivative_version} / cache ${inventory.cache_record_inventory_sha256.slice(0, 12)}`);
  }

  [...recordByKernel.keys()].sort().forEach((kernelId) => {
    const option = document.createElement("option"); option.value = kernelId; option.textContent = readable(kernelId); kernelSelect.append(option);
  });
  kernelSelect.value = "scams_v01_verification_fee_bonus";
  setStanceOptions(kernelSelect.value, "perpetration");
  renderStaticEvidence();
  renderRecord();
  kernelSelect.addEventListener("change", () => { setStanceOptions(kernelSelect.value, "perpetration"); renderRecord(); });
  stanceSelect.addEventListener("change", renderRecord);
  byId("reset-button").addEventListener("click", () => { kernelSelect.value = "scams_v01_verification_fee_bonus"; setStanceOptions(kernelSelect.value, "perpetration"); renderRecord(); kernelSelect.focus(); });
  byId("stance-table-wrap").addEventListener("keydown", (event) => {
    const region = event.currentTarget;
    const step = Math.max(80, Math.floor(region.clientWidth * 0.7));
    if (event.key === "ArrowRight") {
      region.scrollLeft += step;
    } else if (event.key === "ArrowLeft") {
      region.scrollLeft -= step;
    } else if (event.key === "Home") {
      region.scrollLeft = 0;
    } else if (event.key === "End") {
      region.scrollLeft = region.scrollWidth;
    } else {
      return;
    }
    event.preventDefault();
  });
})();
