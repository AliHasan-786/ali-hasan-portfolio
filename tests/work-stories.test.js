import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { workStories } from "../src/workStories.js";

test("professional stories have separate anchors and explicit disclosure boundaries", () => {
  const ids = Object.values(workStories).map((story) => story.id);
  assert.equal(new Set(ids).size, ids.length);
  for (const story of Object.values(workStories)) {
    assert.ok(story.role && story.boundary);
    assert.match(story.exampleLabel, /Independent illustration/);
    assert.ok(story.scenarios.length >= 3);
    assert.equal(new Set(story.scenarios.map((scenario) => scenario.id)).size, story.scenarios.length);
    for (const scenario of story.scenarios) {
      assert.match(scenario.situation, /fictional/);
      assert.ok(scenario.evidence && scenario.decision && scenario.tradeoff);
    }
  }
});

test("SETS program sources are public Cornell records", () => {
  assert.equal(workStories.sets.sources.length, 2);
  for (const source of workStories.sets.sources) {
    assert.match(new URL(source.href).hostname, /(^|\.)cornell\.edu$/);
  }
});

test("the active showcase omits the parked project and former internal counts", () => {
  const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
  assert.ok(!app.includes('title: "PromptPlay"'));
  for (const text of ["200,000", "653-item", "1,607", "114 adversarial", "5.00 out of 5", "31-page report"]) {
    assert.ok(!app.includes(text), `internal detail must stay out of public copy: ${text}`);
  }
});
