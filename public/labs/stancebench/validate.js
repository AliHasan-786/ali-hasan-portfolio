(() => {
  const ACTIONS = new Set(["flag", "review", "no_flag"]);
  const SHA256 = /^[a-f0-9]{64}$/;

  const fail = (code) => ({ ok: false, code });
  const isObject = (value) => value !== null && typeof value === "object" && !Array.isArray(value);
  const isText = (value) => typeof value === "string" && value.trim().length > 0;
  const isCount = (value) => Number.isSafeInteger(value) && value >= 0;

  function validateItem(item) {
    if (!isObject(item)) return false;
    for (const key of ["tuple_id", "kernel_id", "stance", "expected_action", "text", "input_role"]) {
      if (!isText(item[key])) return false;
    }
    if (!ACTIONS.has(item.expected_action) || !isObject(item.available_output)) return false;
    const output = item.available_output;
    return ACTIONS.has(output.normalized_action)
      && output.compatible_mapping === true
      && isText(output.native_label)
      && isText(output.run_date)
      && (typeof output.raw_score === "number" || output.raw_score === null)
      && ["input_sha256", "config_sha256", "policy_sha256"].every((key) => SHA256.test(output[key]))
      && isObject(item.provenance)
      && isText(item.provenance.source_type)
      && isObject(item.vocabulary_overlap)
      && typeof item.vocabulary_overlap.jaccard === "number"
      && Array.isArray(item.safety_notes)
      && item.safety_notes.every(isText);
  }

  function validateSummary(summary, items, stance) {
    if (!isObject(summary) || !isCount(summary.denominator)) return false;
    const selected = items.filter((item) => stance(item));
    if (summary.denominator !== selected.length) return false;
    return [...ACTIONS].every((action) => (
      isCount(summary[action])
      && summary[action] === selected.filter((item) => item.available_output.normalized_action === action).length
    ));
  }

  function validateWorkbench(data) {
    if (!isObject(data)) return fail("missing_bundle");
    if (data.artifact_kind !== "stancebench-local-workbench" || data.derivative_version !== "1.0") return fail("wrong_artifact");
    if (data.evidence_stage !== "partial_local_baseline" || data.publication_status !== "local_release_candidate_only") return fail("wrong_stage");
    if (!isObject(data.source_inventory) || !isObject(data.available_condition)
      || !isObject(data.scientific_boundary) || !isObject(data.text_publication_boundary)) return fail("missing_inventory");
    const inventory = data.source_inventory;
    if (!isCount(inventory.expected_record_count) || inventory.expected_record_count !== 60 || inventory.available_record_count !== 60) return fail("wrong_inventory");
    if (!SHA256.test(inventory.config_sha256) || !SHA256.test(inventory.cache_record_inventory_sha256) || !SHA256.test(inventory.expected_tuple_ids_sha256)) return fail("bad_hash");
    if (!isText(data.scientific_boundary.available_measurement) || !isText(data.scientific_boundary.not_a_claim)
      || !isText(data.text_publication_boundary.basis) || !isText(data.text_publication_boundary.public_release_gate)) return fail("missing_boundary");
    if (!SHA256.test(data.available_condition.artifact_sha256) || !isText(data.available_condition.resolved_revision)) return fail("bad_condition");
    if (!Array.isArray(data.items) || data.items.length !== inventory.expected_record_count) return fail("item_count");
    if (new Set(data.items.map((item) => item && item.tuple_id)).size !== data.items.length || !data.items.every(validateItem)) return fail("invalid_item");
    if (!Array.isArray(data.unavailable_conditions) || data.unavailable_conditions.length !== 7 || !data.unavailable_conditions.every((condition) => isObject(condition) && isText(condition.condition_id) && condition.state === "unrun" && isText(condition.reason))) return fail("unavailable_conditions");
    const summaries = data.observed_action_summary;
    if (!isObject(summaries)
      || !validateSummary(summaries.counter_speech, data.items, (item) => !["perpetration", "benign_unrelated_control"].includes(item.stance))
      || !validateSummary(summaries.perpetration, data.items, (item) => item.stance === "perpetration")
      || !validateSummary(summaries.benign_unrelated_control, data.items, (item) => item.stance === "benign_unrelated_control")) return fail("summary_mismatch");
    return { ok: true, code: "verified" };
  }

  window.StanceBenchValidation = { validateWorkbench };
})();
