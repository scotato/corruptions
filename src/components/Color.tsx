export const colorsHSL = [
  "hsl(0deg 0% 50%)",
  "hsl(100deg 100% 50%)",
  "hsl(225deg 100% 50%)",
  "hsl(295deg 100% 50%)",
  "hsl(36deg 100% 50%)",
  "hsl(323deg 100% 50%)",
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
