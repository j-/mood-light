import { MoodLightMode } from '../types';

export type Params = {
  /** Milliseconds until the animation restarts */
  period: number;
  /** How many colors to show at once (between 0 and MAX_STOPS) */
  stops: number;
  /** Direction of gradient in degrees, rads, turns etc */
  angle: string;
  /** Between 0 and 1 */
  saturation: number;
  /** Between 0 and 1 */
  lightness: number;
};

export const MAX_STOPS = 36;

export const generateBackground = (p: number, { stops, angle, saturation, lightness }: Params): string => {
  if (stops <= 1) {
    const hue = p * 360;
    return `hsl(${hue}, ${saturation * 100}%, ${lightness * 100}%)`;
  }
  const colors = [];
  for (let i = 0; i < stops; i++) {
    const hue = (p + (stops - i) / MAX_STOPS) * 360;
    colors.push(`hsl(${hue}, ${saturation * 100}%, ${lightness * 100}%)`);
  }
  return `linear-gradient(${[angle, ...colors].join(', ')})`;
};

export const rainbowMode: MoodLightMode<Params> = (element, { period, stops, angle, saturation, lightness }) => {
  const initial = element.style.background;

  /** Generate a background and assign it to the display element */
  const update = (p: number) => {
    const background = generateBackground(p, { period, stops, angle, saturation, lightness });
    element.style.background = background;
  };

  // If not animating, generate background and stop
  if (period <= 0) {
    update(0);
    return () => {
      element.style.background = initial;
    };
  }

  // If animating, generate background in a loop
  let handle: number;
  const loop = () => {
    const t = Date.now();
    const p = (t % period) / period;
    update(p);
    handle = requestAnimationFrame(loop);
  };
  loop();
  return () => {
    cancelAnimationFrame(handle);
    element.style.background = initial;
  };
};
