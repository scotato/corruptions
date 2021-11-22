import styled from "styled-components";
import portalJSON from "../portal.json";
const portalPixels = portalJSON as Pixels;

type X = number;
type Y = number;
type Shade = number;
type PixelProperties = [X, Y, Shade];
type Pixels = PixelProperties[];

type PortalProps = {
  pixels?: Pixels;
  corruption?: number;
};

type PortalQuadrantProps = {
  pixels: Pixels;
  quadrant: number;
};

export const Portal = ({
  corruption = 0,
  pixels = portalPixels,
}: PortalProps) => {
  return (
    <SVG viewBox={`0 0 48 48`} xmlns="http://www.w3.org/2000/svg">
      <PortalQuadrant
        quadrant={1}
        pixels={corruptPixels({ corruption, pixels })}
      />
      <PortalQuadrant
        quadrant={2}
        pixels={corruptPixels({ corruption, pixels })}
      />
      <PortalQuadrant
        quadrant={3}
        pixels={corruptPixels({ corruption, pixels })}
      />
      <PortalQuadrant
        quadrant={4}
        pixels={corruptPixels({ corruption, pixels })}
      />
    </SVG>
  );
};

function corruptPixels({ corruption, pixels }: PortalProps) {
  const length = pixels?.length ?? 0;
  console.log(length, Math.round(length * 0.5));
  // ensure at least 25% pixels remain
  // return pixels ? pixels : [];
  return pixels ? shuffleSlice(pixels) : [];
}

function shuffleSlice(pixels: Pixels) {
  return shuffleArray(pixels).slice(0, pixels.length * 0.5);
}

function shuffleArray(array: any[]) {
  let arr = [...array];
  // tslint:disable-next-line:no-increment-decrement
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

const PortalQuadrant = ({ quadrant, pixels }: PortalQuadrantProps) => {
  return (
    <g transform={`scale(${scaleByQuadrant(quadrant)}) translate(24 0)`}>
      {pixels.map(([x, y, shade]) => (
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
