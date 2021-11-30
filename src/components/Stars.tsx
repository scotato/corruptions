interface StarsProps {
  insight: number;
}

const positions = [
  [-1, 2, 0.5],
  [3, 2, 0.25],
  [7, 3, 0.5],
  [11, 4, 0.25],
  [16, 3, 0.25],
  [20, 2, 0.5],
  [19, 6, 0.25],
  [15, 7, 0.5],
  [18, 11, 0.5],
  [19, 15, 0.25],
  [20, 19, 0.5],
  [20, 23, 0.25],
].sort(() => 0.5 - Math.random());

export const Stars = ({ insight }: StarsProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {positions.map(([x, y, opacity], i) => (
        <rect
          x={x}
          y={y}
          key={`${x},${y}`}
          width="2"
          height="2"
          opacity={insight > i ? opacity : 0.1}
        />
      ))}
    </svg>
  );
};
