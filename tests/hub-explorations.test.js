import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { policyCases, policySource, watermarkQuestions } from "../src/explorationCases.js";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("policy walkthrough uses authored cases and a pinned written policy, not invented scores", () => {
  assert.match(policySource.commit, /^[a-f0-9]{40}$/);
  assert.ok(policySource.href.includes(`/blob/${policySource.commit}/`));
  assert.equal(new Set(policyCases.map((item) => item.id)).size, 4);
  for (const item of policyCases) {
    for (const key of ["title", "text", "route", "evidence", "reason", "section"]) assert.ok(item[key]);
    for (const key of ["score", "precision", "recall", "prediction"]) assert.ok(!Object.hasOwn(item, key));
  }
  assert.equal(policyCases.find((item) => item.id === "conflict").route, "Human review");
  assert.ok(read("src/App.jsx").includes("not model predictions or evaluation cases"));
});

test("watermark questions retain calibration, absent text and short-text evidence limits", () => {
  assert.equal(watermarkQuestions.length, 3);
  assert.ok(watermarkQuestions.find((item) => item.id === "threshold").limit.includes("held-out"));
  assert.ok(watermarkQuestions.find((item) => item.id === "editing").limit.includes("missing rewritten passage"));
  assert.ok(watermarkQuestions.find((item) => item.id === "length").limit.includes("short-text"));
});

test("sports comparison uses only the saved metric table and preserves unknown denominators", () => {
  const asset = read("public/evidence/sports-coursework.json");
  assert.equal(read("src/sports-coursework.json"), asset);
  const snapshot = JSON.parse(asset);
  assert.equal(snapshot.evidenceStage, "historical-coursework-output");
  assert.match(snapshot.source.sha256, /^[a-f0-9]{64}$/);
  assert.equal(snapshot.evaluationGameCount, null);
  assert.equal(snapshot.uncertaintyInterval, null);
  assert.deepEqual(snapshot.models.map((model) => [model.mae, model.rmse]), [
    [10.666667, 13.767918], [8.244444, 10.917875], [7.541359, 10.388711], [7.623263, 10.488378],
  ]);
});

test("hub removes fabricated performance curves and unsupported compliance headlines", () => {
  const app = read("src/App.jsx");
  for (const text of ["fraudThreshold", "setThreshold", "WatermarkChart", "LineChart", "ScatterPlot", "98.7%", "HIPAA-compliant", "Compliance first"]) {
    assert.ok(!app.includes(text), `must not reintroduce: ${text}`);
  }
  assert.ok(app.includes("Research preprint"));
});
