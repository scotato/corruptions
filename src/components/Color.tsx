export const colorsHSL = [
  "hsl(0deg 0% 50%)",
  "hsl(150deg 95% 45%)",
  "hsl(215deg 100% 45%)",
  "hsl(281deg 100% 55%)",
  "hsl(39deg 100% 50%)",
  "hsl(323deg 100% 55%)",
];

export const colors = [
  "gray",
  "green",
  "blue",
  "purple",
  "orange",
  "pink",
] as const;

export type Color = typeof colors[number];

export const colorToHSL = (color: Color) => {
  return colorsHSL[colors.indexOf(color)];
};
