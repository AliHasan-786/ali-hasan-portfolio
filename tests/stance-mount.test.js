import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { resolveLabEntry } from "../labMounts.js";
import { projectReleases } from "../src/projectReleases.js";

const root = new URL("../public/labs/stancebench/", import.meta.url);
const read = (path) => readFileSync(new URL(path, root));
const manifest = JSON.parse(read("PACKAGE_MANIFEST.json"));

test("the isolated StanceBench import contains exactly its reviewed allowlist", () => {
  assert.equal(manifest.files.length, 16);
  const actual = readdirSync(root, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => relative(fileURLToPath(root), join(entry.parentPath, entry.name))).sort();
  assert.deepEqual(actual, [...manifest.files.map((file) => file.path), "PACKAGE_MANIFEST.json"].sort());
  for (const file of manifest.files) {
    assert.ok(!file.path.includes("..") && !file.path.startsWith("/"));
    assert.equal(createHash("sha256").update(read(file.path)).digest("hex"), file.sha256, file.path);
  }
});

test("mounted entry routes do not swallow assets or unrelated project paths", () => {
  assert.equal(resolveLabEntry("/labs/stancebench"), "/labs/stancebench/index.html");
  assert.equal(resolveLabEntry("/labs/stancebench/?example=x"), "/labs/stancebench/index.html?example=x");
  for (const path of ["/", "/labs/stancebench/app.js", "/labs/other/", "/labs/stancebench/public/provenance.json"]) {
    assert.equal(resolveLabEntry(path), null);
  }
  const config = JSON.parse(readFileSync(new URL("../vercel.json", import.meta.url)));
  for (const redirect of config.redirects) {
    assert.equal(resolveLabEntry(redirect.source), redirect.destination);
    assert.equal(redirect.permanent, true);
  }
});

test("the public entry preserves synthetic/unrun scope and private source boundaries", () => {
  const project = projectReleases["stance-bench"];
  const metadata = JSON.parse(read("public/PORTFOLIO_METADATA.json"));
  const evidence = JSON.parse(read("src/data/benchmark-explorer.json"));
  assert.equal(metadata.repoUrl, null);
  assert.equal(metadata.sourceCommit, project.release.evidenceSourceCommit);
  assert.equal(metadata.demoUrl, project.release.demoUrl);
  assert.equal(evidence.items.length, 60);
  assert.equal(evidence.unavailable_conditions.length, 7);
  assert.ok(evidence.unavailable_conditions.every((condition) => condition.state === "unrun"));
  assert.ok(project.expansion.some((line) => line.includes("remain unrun")));
  assert.ok(project.links.every((link) => new URL(link.href).origin === "https://ali-hasan-ai.vercel.app"));
});
