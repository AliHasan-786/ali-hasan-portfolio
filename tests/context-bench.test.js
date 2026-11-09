import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import { policyCases } from "../src/explorationCases.js";
import { benchBase, benchDetails, benchDrawers, benchFrame, benchRoutes, contextBenchState, drawerOffset } from "../src/context-bench-model.js";

test("every authored example maps to exactly one policy drawer", () => {
  for (const example of policyCases) {
    const state = contextBenchState(example.id);
    assert.equal(state.example, example);
    assert.equal(benchRoutes.filter((route) => route.cases.includes(example.id)).length, 1);
    assert.equal(state.route, benchRoutes[state.drawer]);
    assert.deepEqual(drawerOffset((state.drawer + 1) % 3, state.drawer), [0, 0]);
    assert.ok(drawerOffset(state.drawer, state.drawer).some((value) => value !== 0));
  }
  assert.equal(contextBenchState("warning").route.id, "protected");
  assert.equal(contextBenchState("help").route.id, "protected");
  assert.equal(contextBenchState("conflict").route.id, "review");
  assert.equal(contextBenchState("promotion").route.id, "candidate");
  assert.throws(() => contextBenchState("unknown"));
});

test("custom Anatomy geometry has unique physical parts and finite paths", () => {
  const parts = [...benchBase, ...benchFrame, ...benchDrawers.flatMap((drawer) => drawer.parts)];
  assert.ok(parts.length >= 40);
  assert.equal(new Set(parts.map((part) => part.id)).size, parts.length);
  for (const part of parts) {
    for (const d of [part.paths.fill, part.paths.top, part.paths.outline, ...part.paths.shades]) {
      assert.equal(typeof d, "string");
      assert.ok(!/NaN|Infinity|undefined/.test(d), `${part.id} has invalid geometry`);
    }
  }
  assert.ok(benchDetails.knurl.length > 0);
});

test("the instrument retains a reduced-motion fallback and its upstream license", () => {
  const css = readFileSync(new URL("../src/context-bench.css", import.meta.url), "utf8");
  assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)[\s\S]*transition:\s*none/);
  const license = readFileSync(new URL("../src/vendor/anatomy/LICENSE", import.meta.url), "utf8");
  assert.match(license, /MIT License/);
  assert.match(license, /Copyright \(c\) 2026 Ryan/);
});
