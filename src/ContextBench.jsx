import React, { useId, useState } from "react";
import { policyCases, policySource } from "./explorationCases.js";
import { benchBase, benchDetails, benchDrawers, benchFrame, benchRoutes, contextBenchState, drawerOffset, selectorPath } from "./context-bench-model.js";
import "./context-bench.css";

function Solid({ part }) {
  const { paths } = part;
  return (
    <g className={`bench-solid bench-${part.finish}`} data-part={part.id}>
      <path className="bench-fill" d={paths.fill} />
      {paths.shades.map((d, i) => d && <path key={i} className={`bench-shade shade-${i}`} d={d} />)}
      <path className="bench-top" d={paths.top} />
      <path className="bench-crease" d={paths.crease} />
      <path className="bench-edge" d={paths.outline} />
    </g>
  );
}

export function ContextBench() {
  const [caseId, setCaseId] = useState("warning");
  const titleId = useId();
  const readoutId = useId();
  const state = contextBenchState(caseId);
  return (
    <figure className="context-bench" aria-labelledby={titleId}>
      <div className="bench-heading"><span>01 / An example to try</span><span>Policy, not prediction</span></div>
      <figcaption id={titleId}>Same words. Different intent.</figcaption>
      <div className="bench-stage">
        <svg viewBox="0 0 600 390" aria-hidden="true" focusable="false">
          <ellipse className="bench-shadow" cx="302" cy="318" rx="170" ry="33" />
          {benchBase.map((part) => <Solid key={part.id} part={part} />)}
          <path className="bench-rule" d={benchDetails.baseRim} />
          {benchDrawers.map((drawer, index) => {
            const [x, y] = drawerOffset(index, state.drawer);
            return (
              <g className="bench-drawer" key={drawer.id} data-selected={index === state.drawer} style={{ transform: `translate(${x}px, ${y}px)` }}>
                {drawer.parts.map((part) => <Solid key={part.id} part={part} />)}
                {drawer.paperLines.map((d, i) => <path key={i} className="bench-paper-line" d={d} />)}
              </g>
            );
          })}
          {benchFrame.map((part) => <Solid key={part.id} part={part} />)}
          <path className="bench-panel-outline" d={benchDetails.sidePanel} />
          {benchDetails.sideVents.map((d, i) => <path className="bench-vent" key={i} d={d} />)}
          {benchDetails.sideRivets.map(([x, y], i) => <circle key={i} className="bench-rivet" cx={x} cy={y} r="1" />)}
          <path className="bench-rule" d={benchDetails.knurl} />
          {benchDetails.labelLines.map((d, i) => <path key={i} className="bench-paper-line" d={d} />)}
          <path className="bench-selector-mark" d={selectorPath(state.selectorAngle)} />
        </svg>
        <div className="bench-route-key" aria-label="Policy routes">
          {benchRoutes.map((route, index) => <span key={route.id} data-selected={index === state.drawer}><i aria-hidden="true">{index + 1}</i>{route.label}</span>)}
        </div>
      </div>
      <div className="bench-controls" aria-label="Choose an authored example">
        {policyCases.map((example) => (
          <button key={example.id} type="button" aria-pressed={caseId === example.id} aria-controls={readoutId} onClick={() => setCaseId(example.id)}>
            {{ promotion: "Solicitation", warning: "Warning", help: "Help request", conflict: "Mixed context" }[example.id]}
          </button>
        ))}
      </div>
      <div id={readoutId} className="bench-readout" aria-live="polite" aria-atomic="true">
        <blockquote>{state.example.text}</blockquote>
        <strong>{state.example.route}</strong>
        <p>{state.example.evidence}</p>
      </div>
      <p className="bench-source">Authored examples, not model results. <a href={policySource.href} target="_blank" rel="noreferrer">Read the policy</a></p>
    </figure>
  );
}
