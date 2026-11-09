import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { projectReleases } from "../src/projectReleases.js";
import { workStories } from "../src/workStories.js";

const copyFiles = [
  "src/App.jsx", "src/workStories.js", "src/sourceCases.js",
  "src/projectReleases.js", "src/explorationCases.js", "src/ContextBench.jsx", "index.html",
];
const stockPhrases = [
  "delve into", "ever-evolving landscape", "unlock the potential",
  "seamlessly integrate", "at the intersection of", "groundbreaking solution",
];

test("visitor copy excludes em dashes and stock marketing phrases", () => {
  for (const path of copyFiles) {
    const text = readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
    assert.ok(!text.includes(String.fromCodePoint(0x2014)), `em dash in ${path}`);
    assert.ok(!/\\u2014|&(?:mdash|#8212|#x2014);/i.test(text), `encoded em dash in ${path}`);
    for (const phrase of stockPhrases) {
      assert.ok(!text.toLowerCase().includes(phrase), `stock phrase in ${path}: ${phrase}`);
    }
  }
});

test("release summaries and work-story introductions stay concise", () => {
  const wordCount = (text) => text.trim().split(/\s+/).length;
  for (const project of Object.values(projectReleases)) assert.ok(wordCount(project.caption) <= 55);
  for (const story of Object.values(workStories)) assert.ok(wordCount(story.introduction) <= 55);
});
