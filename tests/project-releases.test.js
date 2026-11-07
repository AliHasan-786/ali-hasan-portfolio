import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { projectReleases } from "../src/projectReleases.js";

for (const [id, project] of Object.entries(projectReleases)) {
  test(`${id} has traceable evidence and packaged artwork`, () => {
    assert.ok(project.title && project.course && project.caption);
    assert.ok(project.bullets.length > 0);
    assert.ok(project.expansion.length > 0);
    assert.ok(project.nextHeading);
    const release = project.release;
    assert.match(release.sourceCommit, /^[a-f0-9]{40}$/);
    assert.match(release.checkedAt, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(release.evidenceStage && release.note && release.thumbnailAlt);
    assert.match(release.thumbnail, /^\/projects\/[a-z0-9.-]+$/);
    const asset = readFileSync(new URL(`../public${release.thumbnail}`, import.meta.url));
    assert.ok(asset.byteLength > 100);
    assert.ok(project.links.some((link) => link.href.includes(`/blob/${release.sourceCommit}/`)));
    for (const link of project.links) {
      assert.equal(new URL(link.href).protocol, "https:");
    }
    if (release.demoUrl !== null) {
      assert.equal(new URL(release.demoUrl).protocol, "https:");
    }
  });
}

test("the urban panel retains its corrected sample and non-causal boundary", () => {
  const project = projectReleases["yelp-rent"];
  assert.equal(project.metric, "1,105 ZIP-years");
  assert.equal(project.release.evidenceStage, "Observational analysis");
  assert.ok(project.bullets.some((line) => line.includes("not a causal effect")));
  assert.ok(project.expansion.some((line) => line.includes("did not meet")));
});

test("local drift evidence does not promote the unrun full-scale tier", () => {
  const project = projectReleases.drift;
  assert.equal(project.release.evidenceStage, "Preliminary local evidence");
  assert.ok(project.expansion.some((line) => line.includes("not yet complete")));
  assert.ok(project.expansion.some((line) => line.includes("synthetic methodology")));
});
