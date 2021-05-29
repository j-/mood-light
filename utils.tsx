export const clamp = (val: number, min = -Infinity, max = Infinity) => (
  Math.max(min, Math.min(val, max))
);
