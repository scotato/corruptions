import styled from "styled-components";
import { Phrase, Glyph, GlyphSymbols } from "./Glyph";
import { Color, colorToHSL } from "./Color";
import { Rings } from "./Rings";
import { Stars } from "./Stars";

type PortalProps = {
  iterations: number;
  insight: number;
  phrase: Phrase;
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
  const { quadrant, phrase, corruptor } = props;
  const iterations = Math.floor((props.iterations + 4 - quadrant) / 4);
  const insight = Math.floor((props.insight + 4 - quadrant) / 4);

  return (
    <g transform={`scale(${scaleByQuadrant(quadrant)}) translate(24 0)`}>
      <Rings iterations={iterations} glyph={corruptor} />
      <Stars insight={insight} />
      <Glyph name={phrase} x="0" y="21" opacity="0.25" />
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

const SVG = styled.svg<{ color: Color }>`
  display: block;
  margin: 0 auto;

  rect:not(.bg) {
    fill: ${(props) => colorToHSL(props.color)};
    will-change: fill;
    transition: fill 1.2s ease-out;
  }

  g {
    transform-origin: center;
  }
`;
