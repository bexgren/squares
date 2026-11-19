export const getOppositeColor = (color) => {
  const newColor = color.slice(4).slice(0, -1).split(",");

  const r = parseInt(newColor[0]) / 255;
  const g = parseInt(newColor[1]) / 255;
  const b = parseInt(newColor[2]) / 255;

  const cMax = Math.max(r, g, b);
  const cMin = Math.min(r, g, b);
  const delta = cMax - cMin;
  const lightness = (cMax + cMin) / 2;
  const saturation =
    delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));
  const hue =
    delta === 0
      ? 0
      : cMax === r
        ? ((g - b) / delta) % 6
        : cMax === g
          ? (b - r) / delta + 2
          : (r - g) / delta + 4;

  const textColor = `hsl(${hue * 180}, ${saturation * 100}%, ${lightness < 0.5 ? lightness * 100 + 80 : lightness * 20}%)`;
  return textColor;
};
