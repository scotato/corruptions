import { forwardRef } from "react";
import { ReactComponent as CORRUPTION } from "../svgs/CORRUPTION-QUARTER.svg";
import { ReactComponent as EVERYTHING } from "../svgs/EVERYTHING-QUARTER.svg";
import { ReactComponent as EVERYWHERE } from "../svgs/EVERYWHERE-QUARTER.svg";
import { ReactComponent as GENERATION } from "../svgs/GENERATION-QUARTER.svg";
import { ReactComponent as ILLUMINATI } from "../svgs/ILLUMINATI-QUARTER.svg";
import { ReactComponent as INDIVIDUAL } from "../svgs/INDIVIDUAL-QUARTER.svg";
import { ReactComponent as REFLECTION } from "../svgs/REFLECTION-QUARTER.svg";
import { ReactComponent as REVELATION } from "../svgs/REVELATION-QUARTER.svg";
import { ReactComponent as TECHNOLOGY } from "../svgs/TECHNOLOGY-QUARTER.svg";
import { ReactComponent as TEMPTATION } from "../svgs/TEMPTATION-QUARTER.svg";
import { ReactComponent as UNDERWORLD } from "../svgs/UNDERWORLD-QUARTER.svg";

export const phrases = [
  "corruption",
  "everything",
  "everywhere",
  "generation",
  "illuminati",
  "individual",
  "reflection",
  "revelation",
  "technology",
  "temptation",
  "underworld",
] as const;
export type Phrase = typeof phrases[number];

interface GlyphsProps {
  name?: Phrase;
}
interface GlyphProps {
  name?: Phrase;
  x?: number | string;
  y?: number | string;
  opacity?: number | string;
}

export const GlyphSymbols = () => (
  <>
    {phrases.map((phrase) => (
      <symbol id={phrase} key={phrase} width="3" height="3" viewBox="0 0 3 3">
        <Glyphs name={phrase} />
      </symbol>
    ))}
    <symbol id="pure" width="3" height="3" viewBox="0 0 3 3">
      <Glyphs />
    </symbol>
  </>
);

export const Glyph = forwardRef<SVGUseElement, GlyphProps>(
  ({ name, ...props }, ref) => {
    return <use ref={ref} href={`#${name || "pure"}`} {...props} />;
  }
);

export const Glyphs = ({ name }: GlyphsProps) => {
  switch (name) {
    case "corruption":
      return <CORRUPTION />;
    case "everything":
      return <EVERYTHING />;
    case "everywhere":
      return <EVERYWHERE />;
    case "generation":
      return <GENERATION />;
    case "illuminati":
      return <ILLUMINATI />;
    case "individual":
      return <INDIVIDUAL />;
    case "reflection":
      return <REFLECTION />;
    case "revelation":
      return <REVELATION />;
    case "technology":
      return <TECHNOLOGY />;
    case "temptation":
      return <TEMPTATION />;
    case "underworld":
      return <UNDERWORLD />;
    default:
      return <rect width="3" height="3" />;
  }
};
