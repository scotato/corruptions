import styled from "styled-components";
import { Glyph, GlyphSymbols } from "./Glyph";
import { ReactComponent as RINGS } from "../svgs/PORTAL-QUARTER-RINGS.svg";
import { ReactComponent as STARS } from "../svgs/PORTAL-QUARTER-STARS.svg";

type PortalProps = {
  iterations?: number;
  phrase?: string;
  secret?: string;
};

type PortalQuadrantProps = PortalProps & {
  quadrant: number;
};

export const Portal = (props: PortalProps) => {
  return (
    <SVG
      viewBox={`0 0 48 48`}
      xmlns="http://www.w3.org/2000/svg"
      shape-rendering="crispEdges"
    >
      <GlyphSymbols />
      <PortalQuadrant {...props} quadrant={1} />
      <PortalQuadrant {...props} quadrant={2} />
      <PortalQuadrant {...props} quadrant={3} />
      <PortalQuadrant {...props} quadrant={4} />
    </SVG>
  );
};

const PortalQuadrant = ({ quadrant }: PortalQuadrantProps) => {
  return (
    <g transform={`scale(${scaleByQuadrant(quadrant)}) translate(24 0)`}>
      <RINGS />
      <STARS />
      <use href="#technology" x="0" y="21" opacity="0.25" />
      {/* {pixels.map(([x, y, shade]) => (
        <rect x={x} y={y} className={shadeByFloat(shade)} key={`${x},${y}`} />
      ))} */}
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

// function shadeByFloat(shade: number) {
//   switch (shade) {
//     case 0.25:
//       return "shade-quarter";
//     case 0.5:
//       return "shade-half";
//     default:
//       return "";
//   }
// }

const SVG = styled.svg`
  display: block;
  margin: 0 auto;

  rect:not(.bg) {
    fill: hsl(323deg 100% 50%);
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
