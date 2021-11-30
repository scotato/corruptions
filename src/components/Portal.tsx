import styled from "styled-components";
import { Phrase, Glyph, GlyphSymbols } from "./Glyph";
import { Color } from "./Color";
import { Rings } from "./Rings";
import { Stars } from "./Stars";
// import { colors } from "./Color";

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

// max iterations: 72

export const Portal = ({ corruption }: { corruption: Corruption }) => {
  console.log(corruption);
  const props = {
    insight: corruption.insight,
    iterations: Math.round((72 * corruption.iterations) / 1024),
    phrase: corruption.phrasePrimary.toLowerCase(),
    corruptor: corruption.phrasePrimary.toLowerCase(),
    // corruptor: corruption.corruptor.toLowerCase(),
    color: corruption.color,
  } as PortalQuadrantProps;

  return (
    <SVG
      viewBox={`0 0 48 48`}
      xmlns="http://www.w3.org/2000/svg"
      shape-rendering="crispEdges"
      color={corruption.color}
    >
      <GlyphSymbols />
      <PortalQuadrant {...props} quadrant={1} />
      <PortalQuadrant {...props} quadrant={2} />
      <PortalQuadrant {...props} quadrant={3} />
      <PortalQuadrant {...props} quadrant={4} />
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

const SVG = styled.svg<{ color: string }>`
  display: block;
  margin: 0 auto;

  .stars rect,
  use {
    fill: ${(props) => props.color};
    will-change: fill;
    transition: fill 1.2s ease-out;
  }

  g {
    transform-origin: center;
  }
`;
