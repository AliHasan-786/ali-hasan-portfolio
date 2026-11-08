import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const fonts = [
  ["@fontsource-variable/bricolage-grotesque", "bricolage-grotesque"],
  ["@fontsource-variable/instrument-sans", "instrument-sans"],
  ["@fontsource/ibm-plex-mono", "ibm-plex-mono"],
];

const luminance = (hex) => {
  const channels = hex.match(/[a-f\d]{2}/gi).map((value) => {
    const channel = parseInt(value, 16) / 255;
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
  return channels.reduce((sum, channel, index) => sum + channel * [0.2126, 0.7152, 0.0722][index], 0);
};

test("accent text and filled-action color pairs meet normal-text contrast", () => {
  const css = read("src/styles.css");
  const colors = Object.fromEntries([...css.matchAll(/--([\w-]+): (#[a-f\d]{6});/gi)].map((match) => [match[1], match[2]]));
  for (const [foreground, background] of [
    [colors["flag-deep"], colors.bone],
    [colors["flag-deep"], colors.panel],
    [colors["flag-deep"], colors["bone-deep"]],
    [colors.flag, colors.dark],
    [colors.flag, colors["dark-2"]],
    [colors.muted, colors["bone-deep"]],
    [colors["dark-muted"], colors["dark-2"]],
    ["#ffffff", colors["flag-deep"]],
  ]) {
    const values = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
    assert.ok((values[0] + 0.05) / (values[1] + 0.05) >= 4.5, `${foreground} on ${background}`);
  }
  assert.ok(css.includes("--flag-text: var(--flag-deep)"));
  assert.ok(css.includes("--flag-text: var(--flag)"));
});

test("fonts are pinned, open-licensed and locally bundled with exact notices", () => {
  const pkg = JSON.parse(read("package.json"));
  for (const [name, slug] of fonts) {
    assert.equal(pkg.dependencies[name], "5.3.0");
    const upstream = read(`node_modules/${name}/LICENSE`);
    assert.match(upstream, /SIL OPEN FONT LICENSE Version 1\.1/);
    assert.equal(read(`public/licenses/${slug}-OFL.txt`), upstream);
    assert.ok(read("src/main.jsx").includes(name));
  }
  const css = read("src/styles.css");
  assert.ok(!css.includes("@import url"));
  assert.ok(css.includes("Bricolage Grotesque Variable"));
  assert.ok(css.includes("Instrument Sans Variable"));
  assert.ok(css.includes("prefers-reduced-motion"));
});

test("integration retains project autonomy and a design acceptance gate", () => {
  assert.ok(read("docs/PROJECT_INTEGRATION.md").includes("../DESIGN.md"));
  const design = read("DESIGN.md");
  assert.ok(design.includes("not a mandatory page template"));
  assert.ok(design.includes("not claims that all interactions already exist"));
  assert.ok(design.includes("not an installed dependency or a shipped feature"));
});
