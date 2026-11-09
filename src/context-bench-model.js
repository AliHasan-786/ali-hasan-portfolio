import { policyCases } from "./explorationCases.js";
import { boxCorners, cylinder, depthOf, fitProjection, iso, knurl, lineOnTop, pathOf, planOutline, slabOf } from "./vendor/anatomy/iso-kit.mjs";

// Drawer positions illustrate the written policy. They are not classifier scores.
export const benchRoutes = [
  { id: "protected", label: "Protected context", cases: ["warning", "help"] },
  { id: "review", label: "Needs review", cases: ["conflict"] },
  { id: "candidate", label: "Label candidate", cases: ["promotion"] },
];

export function contextBenchState(caseId) {
  const example = policyCases.find((item) => item.id === caseId);
  const drawer = benchRoutes.findIndex((route) => route.cases.includes(caseId));
  if (!example || drawer < 0) throw new Error("Unknown authored policy example");
  return { example, drawer, route: benchRoutes[drawer], selectorAngle: policyCases.indexOf(example) * 90 };
}

export const benchProjection = fitProjection(
  boxCorners({ x: -91, y: -61, w: 182, d: 184, r: 0 }, -14, 112),
  600, 390, { pad: 24, azimuth: 34, elevation: 27 },
);

function solid(id, plan, z, height, finish = "metal") {
  return { id, finish, paths: slabOf(plan, z, height, benchProjection, 5, 0.7), depth: depthOf([plan.x + plan.w / 2, plan.y + plan.d / 2, z + height / 2], benchProjection) };
}

function round(id, x, y, radius, z, height, finish = "metal") {
  return { id, finish, paths: cylinder(x, y, radius, z, height, benchProjection, 32, 0.4), depth: depthOf([x, y, z + height / 2], benchProjection) };
}

const base = { x: -91, y: -61, w: 182, d: 138, r: 6 };
export const benchBase = [
  ...[[-77, -47], [77, -47], [-77, 63], [77, 63]].map(([x, y], i) => round(`foot-${i}`, x, y, 6, -14, 5, "dark")),
  solid("base", base, -9, 9, "dark"),
  solid("rear-wall", { x: -72, y: -49, w: 144, d: 5, r: 1 }, 0, 99),
  solid("left-wall", { x: -77, y: -49, w: 5, d: 103, r: 1 }, 0, 100),
  ...[0, 31, 62].map((z, i) => solid(`shelf-${i}`, { x: -72, y: -44, w: 144, d: 95, r: 1 }, z, 3)),
];

export const benchFrame = [
  solid("right-wall", { x: 72, y: -49, w: 5, d: 103, r: 1 }, 0, 100),
  solid("top", { x: -79, y: -51, w: 158, d: 107, r: 3 }, 100, 5),
  ...[-66, 66].flatMap((x) => [-39, 43].map((y) => round(`top-fastener-${x}-${y}`, x, y, 1.7, 105, 0.8, "dark"))),
  round("selector-mount", 43, 12, 13, 105, 2, "dark"),
  round("selector", 43, 12, 10, 107, 4, "accent"),
  solid("label-plate", { x: -60, y: -24, w: 58, d: 22, r: 1 }, 105, 0.7, "paper"),
];

export const benchDrawers = benchRoutes.map((route, index) => {
  const z = 5 + index * 31;
  return {
    id: route.id,
    parts: [
      solid(`${route.id}-floor`, { x: -67, y: -38, w: 134, d: 81, r: 2 }, z, 3),
      solid(`${route.id}-left`, { x: -67, y: -38, w: 3, d: 81, r: 0.5 }, z + 3, 16),
      solid(`${route.id}-back`, { x: -64, y: -38, w: 128, d: 3, r: 0.5 }, z + 3, 16),
      solid(`${route.id}-right`, { x: 64, y: -38, w: 3, d: 81, r: 0.5 }, z + 3, 16),
      ...[-51, 51].map((x) => solid(`${route.id}-runner-${x}`, { x, y: -35, w: 3, d: 77, r: 0.5 }, z - 1.5, 1.5, "dark")),
      solid(`${route.id}-paper`, { x: -53, y: -25, w: 106, d: 54, r: 0.5 }, z + 3, 0.8, "paper"),
      solid(`${route.id}-front`, { x: -69, y: 43, w: 138, d: 4, r: 1.5 }, z - 1, 24),
      ...[-15, 15].map((x) => solid(`${route.id}-handle-stem-${x}`, { x, y: 47, w: 3, d: 6, r: 0.7 }, z + 9, 3, "dark")),
      solid(`${route.id}-handle`, { x: -15, y: 51, w: 33, d: 3, r: 1 }, z + 9, 3, "dark"),
      ...[-57, 57].map((x) => round(`${route.id}-rivet-${x}`, x, 44.5, 1.2, z + 23, 0.5, "dark")),
    ],
    paperLines: [0, 1, 2, 3].map((i) => lineOnTop([-44, -14 + i * 9], [i === 3 ? 14 : 43, -14 + i * 9], z + 4, benchProjection)),
  };
});

export const benchDetails = {
  baseRim: planOutline({ ...base, x: -87, y: -57, w: 174, d: 130, r: 4 }, 0, benchProjection),
  knurl: knurl(43, 12, 10, 107, 111, 42, benchProjection),
  labelLines: [0, 1, 2].map((i) => lineOnTop([-54, -18 + i * 6], [-10 - i * 8, -18 + i * 6], 106, benchProjection)),
  sidePanel: pathOf([[77.1, -39, 9], [77.1, 44, 9], [77.1, 44, 92], [77.1, -39, 92]].map((point) => iso(point, benchProjection)), true),
  sideVents: [0, 1, 2, 3, 4, 5].map((i) => pathOf([[77.2, -31, 21 + i * 7], [77.2, -9, 21 + i * 7], [77.2, -9, 23 + i * 7], [77.2, -31, 23 + i * 7]].map((point) => iso(point, benchProjection)), true)),
  sideRivets: [-35, 40].flatMap((y) => [13, 88].map((z) => iso([77.3, y, z], benchProjection))),
};

export function drawerOffset(index, selected) {
  const from = iso([0, 0, 0], benchProjection);
  const to = iso([0, index === selected ? 57 : 0, 0], benchProjection);
  return [to[0] - from[0], to[1] - from[1]];
}

export function selectorPath(angleDegrees) {
  const angle = angleDegrees * Math.PI / 180;
  return lineOnTop([43, 12], [43 + 7 * Math.cos(angle), 12 + 7 * Math.sin(angle)], 112, benchProjection);
}
