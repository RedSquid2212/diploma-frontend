export function generateColorInPalette(
    baseHue: number,
    saturationRange: readonly number[],
    lightnessRange: readonly number[],
) {
  const h = baseHue + (Math.random() * 30 - 15);
  const s = saturationRange[0] + Math.random() * (saturationRange[1] - saturationRange[0]);
  const l = lightnessRange[0] + Math.random() * (lightnessRange[1] - lightnessRange[0]);
  
  return `hsl(${h}, ${s}%, ${l}%)`;
}
