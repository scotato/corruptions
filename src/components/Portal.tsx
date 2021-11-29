import styled from "styled-components";
import { ReactComponent as STARS } from "../svgs/PORTAL-QUARTER-STARS.svg";
import { Phrase, Glyph, GlyphSymbols } from "./Glyph";
import { Color, colorToHSL } from "./Color";
import { Rings } from "./Rings";

type PortalProps = {
  iterations: number;
  insight?: number;
  phrase?: Phrase;
  secret?: Phrase;
  corruptor?: Phrase;
  color: Color;
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
      color={props.color}
    >
      <GlyphSymbols />
      <PortalQuadrant quadrant={1} {...props} />
      <PortalQuadrant quadrant={2} {...props} />
      <PortalQuadrant quadrant={3} {...props} />
      <PortalQuadrant quadrant={4} {...props} />
    </SVG>
  );
};

const PortalQuadrant = (props: PortalQuadrantProps) => {
  const { quadrant, corruptor } = props;
  // const remaining = Math.floor(quadrant / (props.iterations % 4));
  const iterations = Math.floor((props.iterations + 4 - quadrant) / 4);

  return (
    <g transform={`scale(${scaleByQuadrant(quadrant)}) translate(24 0)`}>
      <Rings iterations={iterations} glyph={corruptor} />
      <STARS />
      <Glyph name="technology" x="0" y="21" opacity="0.25" />
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

const SVG = styled.svg<{ color: Color }>`
  display: block;
  margin: 0 auto;

  rect:not(.bg) {
    fill: ${(props) => colorToHSL(props.color)};
    will-change: fill;
    transition: fill 0.2s ease-out;
  }

  .bg {
    fill: black;
  }

  g {
    transform-origin: center;
  }
`;
