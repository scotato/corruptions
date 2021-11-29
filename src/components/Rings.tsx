import { Glyph, Phrase } from "./Glyph";

interface RingsProps {
  iterations: number;
  glyph?: Phrase;
}

const positions = [
  [0, 6],
  [0, 11],
  [0, 17],
  [3, 6],
  [3, 12],
  [3, 18],
  [4, 21],
  [6, 7],
  [6, 13],
  [8, 15],
  [9, 8],
  [9, 18],
  [10, 21],
  [11, 10],
  [13, 12],
  [14, 15],
  [15, 18],
  [15, 21],
].sort(() => 0.5 - Math.random());

// const positions = [
//   [0, 6],
//   [3, 6],
//   [6, 7],
//   [9, 8],
//   [11, 10],
//   [13, 12],
//   [14, 15],
//   [15, 18],
//   [15, 21],
//   [0, 11],
//   [3, 12],
//   [6, 13],
//   [8, 15],
//   [9, 18],
//   [10, 21],
//   [0, 17],
//   [3, 18],
//   [4, 21],
// ];

export const Rings = ({ iterations, glyph }: RingsProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {positions.map(([x, y], i) => (
        <Glyph name={iterations > i ? glyph : undefined} key={i} x={x} y={y} />
      ))}
    </svg>
  );
};
