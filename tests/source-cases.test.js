import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { deepShieldSourceCase, housingSourceCase } from "../src/sourceCases.js";

test("the historical housing audit snapshot separates generated coursework", () => {
  const project = housingSourceCase;
  assert.equal(project.id, "rl-housing");
  assert.equal(project.viz, "source-audit");
  assert.ok(project.bullets.some((line) => line.includes("not a historical backtest")));
  assert.ok(project.bullets.some((line) => line.includes("under review")));
  assert.ok(project.expansion.some((line) => line.includes("do not establish demographic fairness")));
  assert.match(project.audit.sourceCommit, /^[a-f0-9]{40}$/);
  assert.ok(project.links.some((link) => link.href.includes(`/blob/${project.audit.sourceCommit}/`)));
  assert.equal(project.release, undefined);
});

test("DeepShield credits inherited work and pins an unmeasured source checkpoint", () => {
  const project = deepShieldSourceCase;
  assert.ok(project.description.includes("group extension of BlurGuard"));
  assert.ok(project.description.includes("effectiveness is unmeasured"));
  assert.match(project.sourceCommit, /^[a-f0-9]{40}$/);
  assert.ok(project.href.includes(`/blob/${project.sourceCommit}/`));
  assert.ok(project.href.endsWith("/docs/PORTFOLIO_CASE_STUDY.md"));
});

test("the housing hub no longer invents reward outputs or enforcement choices", () => {
  const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
  assert.ok(app.includes('projectReleases["rl-housing"]'));
  assert.ok(app.includes("deepShieldSourceCase"));
  assert.ok(!app.includes("const aggressive ="));
  assert.ok(!app.includes("PolicyBars"));
  assert.ok(!app.includes("Inspector budget:"));
});
