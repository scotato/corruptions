import styled from "styled-components";
import portal from "../portal.json";

export const Portal = () => {
  return (
    <SVG viewBox={`0 0 48 48`} xmlns="http://www.w3.org/2000/svg">
      <PortalQuarter quadrant={1} />
      <PortalQuarter quadrant={2} />
      <PortalQuarter quadrant={3} />
      <PortalQuarter quadrant={4} />
    </SVG>
  );
};

const PortalQuarter = ({ quadrant }: { quadrant: number }) => {
  return (
    <g transform={`scale(${scaleByQuadrant(quadrant)}) translate(24 0)`}>
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

function shadeByFloat(shade: number) {
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
    fill: hsl(323deg 100% 50%);
    width: 1.1px;
    height: 1.1px;
  }

  rect.shade-quarter {
    fill: hsl(323deg 100% 37.5%);
  }

  rect.shade-half {
    fill: hsl(323deg 100% 25%);
  }

  .bg {
    fill: black;
  }

  g {
    transform-origin: center;
  }
`;
