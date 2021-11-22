// import { useEffect, useState } from "react";
import styled from "styled-components";
import portal from "../portal.json";

// const colors = [
//   "#838383",
//   "#2E82FF",
//   "#C13CFF",
//   "#00DC82",
//   "#F8B73E",
//   "#FF44B7",
// ];

export const Portal = () => {
  return (
    <SVG
      viewBox={`0 0 ${48} ${48}`}
      xmlns="http://www.w3.org/2000/svg"
      // fill={colors[5]}
    >
      <PortalQuarter quadrant={1} />
      <PortalQuarter quadrant={2} />
      <PortalQuarter quadrant={3} />
      <PortalQuarter quadrant={4} />
    </SVG>
  );
};

const PortalQuarter = ({ quadrant }: { quadrant: number }) => {
  return (
    <g
      transform={`scale(${scaleByQuadrant(
        quadrant
      )}) translate(${translateByQuadrant(quadrant)})`}
    >
      <rect width="24" height="24" className="bg" />
      {portal.map(([x, y, shade]) => (
        <rect x={x} y={y} className={shadeByFloat(shade)} key={`${x},${y}`} />
      ))}
    </g>
  );
};

function scaleByQuadrant(quadrant: number) {
  switch (quadrant) {
    case 4:
      return `-1 1`;
    case 3:
      return `-1 -1`;
    case 2:
      return `1 -1`;
    case 1:
    default:
      return `1 1`;
  }
}

function translateByQuadrant(quadrant: number) {
  switch (quadrant) {
    case 4:
      return `24 0`;
    case 3:
      return `24 0`;
    case 2:
      return `24 0`;
    case 1:
    default:
      return `24 0`;
  }
}

function shadeByFloat(shade: number) {
  // className="shade-half"
  switch (shade) {
    case 0.25:
      return "shade-quarter";
    case 0.5:
      return "shade-half";
    default:
      return "";
  }
}

const SVG = styled.svg`
  display: block;
  margin: 0 auto;

  rect:not(.bg) {
    // fill: ${(props) => props.fill};
    fill: hsl(323deg 100% 50%);
    width: 1.1px;
    height: 1.1px;
  }

  rect.shade-quarter {
    // opacity: 0.75;
    fill: hsl(323deg 100% 37.5%);
  }

  rect.shade-half {
    // opacity: 0.5;
    fill: hsl(323deg 100% 25%);
  }

  .bg {
    fill: black;
  }

  g {
    transform-origin: center;
  }
`;
