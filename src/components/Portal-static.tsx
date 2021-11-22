// import { useEffect, useState } from "react";
import styled from "styled-components";

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
      <rect className="shade-half" x="0" y="23" />
      <rect className="shade-quarter" x="20" y="2" />
      <rect className="shade-quarter" x="20" y="3" />
      <rect className="shade-quarter" x="21" y="2" />
      <rect className="shade-quarter" x="21" y="3" />
      <rect className="shade-half" x="20" y="23" />
      <rect className="shade-half" x="21" y="23" />
      <rect className="shade-half" x="0" y="2" />
      <rect className="shade-half" x="0" y="3" />
      <rect className="shade-quarter" x="5" y="3" />
      <rect className="shade-quarter" x="5" y="4" />
      <rect className="shade-quarter" x="6" y="3" />
      <rect className="shade-quarter" x="6" y="4" />
      <rect className="shade-half" x="10" y="5" />
      <rect className="shade-half" x="10" y="6" />
      <rect className="shade-half" x="11" y="5" />
      <rect className="shade-half" x="11" y="6" />
      <rect className="shade-half" x="17" y="12" />
      <rect className="shade-half" x="17" y="13" />
      <rect className="shade-half" x="18" y="12" />
      <rect className="shade-half" x="18" y="13" />
      <rect className="shade-quarter" x="19" y="17" />
      <rect className="shade-quarter" x="19" y="18" />
      <rect className="shade-quarter" x="20" y="17" />
      <rect className="shade-quarter" x="20" y="18" />
      <rect className="shade-quarter" x="14" y="8" />
      <rect className="shade-quarter" x="14" y="9" />
      <rect className="shade-quarter" x="15" y="8" />
      <rect className="shade-quarter" x="15" y="9" />
      <rect className="shade-half" x="15" y="3" />
      <rect className="shade-half" x="15" y="4" />
      <rect className="shade-half" x="16" y="3" />
      <rect className="shade-half" x="16" y="4" />
      <rect className="shade-half" x="19" y="7" />
      <rect className="shade-half" x="19" y="8" />
      <rect className="shade-half" x="20" y="7" />
      <rect className="shade-half" x="20" y="8" />
      <rect x="14" y="17" />
      <rect x="14" y="18" />
      <rect x="15" y="17" />
      <rect x="15" y="18" />
      <rect x="12" y="13" />
      <rect x="12" y="14" />
      <rect x="13" y="13" />
      <rect x="13" y="14" />
      <rect x="11" y="12" />
      <rect x="12" y="12" />
      <rect x="11" y="11" />
      <rect x="11" y="13" />
      <rect x="9" y="11" />
      <rect x="10" y="11" />
      <rect x="9" y="10" />
      <rect x="10" y="10" />
      <rect x="10" y="12" />
      <rect x="13" y="15" />
      <rect x="13" y="16" />
      <rect x="14" y="15" />
      <rect x="14" y="16" />
      <rect x="2" y="20" />
      <rect x="2" y="21" />
      <rect x="3" y="20" />
      <rect x="3" y="21" />
      <rect x="3" y="22" />
      <rect x="3" y="23" />
      <rect x="4" y="22" />
      <rect x="4" y="23" />
      <rect x="0" y="19" />
      <rect x="0" y="19" />
      <rect x="0" y="20" />
      <rect x="1" y="19" />
      <rect x="1" y="20" />
      <rect x="6" y="19" />
      <rect x="6" y="20" />
      <rect x="7" y="19" />
      <rect x="7" y="20" />
      <rect x="3" y="16" />
      <rect x="3" y="17" />
      <rect x="4" y="16" />
      <rect x="4" y="17" />
      <rect x="6" y="18" />
      <rect x="5" y="18" />
      <rect x="5" y="17" />
      <rect x="7" y="21" />
      <rect x="7" y="22" />
      <rect x="7" y="23" />
      <rect x="8" y="21" />
      <rect x="8" y="22" />
      <rect x="8" y="23" />
      <rect x="0" y="15" />
      <rect x="1" y="15" />
      <rect x="2" y="15" />
      <rect x="0" y="16" />
      <rect x="1" y="16" />
      <rect x="2" y="16" />
      <rect x="10" y="18" />
      <rect x="10" y="19" />
      <rect x="11" y="18" />
      <rect x="11" y="19" />
      <rect x="4" y="12" />
      <rect x="4" y="13" />
      <rect x="5" y="12" />
      <rect x="5" y="13" />
      <rect x="9" y="16" />
      <rect x="9" y="17" />
      <rect x="10" y="16" />
      <rect x="10" y="17" />
      <rect x="8" y="16" />
      <rect x="8" y="15" />
      <rect x="8" y="14" />
      <rect x="9" y="15" />
      <rect x="6" y="13" />
      <rect x="6" y="14" />
      <rect x="7" y="13" />
      <rect x="7" y="14" />
      <rect x="7" y="15" />
      <rect x="11" y="20" />
      <rect x="11" y="21" />
      <rect x="11" y="22" />
      <rect x="11" y="23" />
      <rect x="12" y="20" />
      <rect x="12" y="21" />
      <rect x="12" y="22" />
      <rect x="12" y="23" />
      <rect x="0" y="11" />
      <rect x="1" y="11" />
      <rect x="2" y="11" />
      <rect x="3" y="11" />
      <rect x="0" y="12" />
      <rect x="1" y="12" />
      <rect x="2" y="12" />
      <rect x="3" y="12" />
      <rect x="5" y="8" />
      <rect x="5" y="9" />
      <rect x="6" y="8" />
      <rect x="6" y="9" />
      <rect x="7" y="9" />
      <rect x="7" y="10" />
      <rect x="8" y="9" />
      <rect x="8" y="10" />
      <rect x="15" y="19" />
      <rect x="15" y="20" />
      <rect x="15" y="21" />
      <rect x="15" y="22" />
      <rect x="15" y="23" />
      <rect x="16" y="19" />
      <rect x="16" y="20" />
      <rect x="16" y="21" />
      <rect x="16" y="22" />
      <rect x="16" y="23" />
      <rect x="0" y="7" />
      <rect x="1" y="7" />
      <rect x="2" y="7" />
      <rect x="3" y="7" />
      <rect x="4" y="7" />
      <rect x="0" y="8" />
      <rect x="1" y="8" />
      <rect x="2" y="8" />
      <rect x="3" y="8" />
      <rect x="4" y="8" />
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
