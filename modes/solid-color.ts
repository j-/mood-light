import { MoodLightMode } from '../types';

export type Params = {
  color: string;
}

export const solidColorMode: MoodLightMode<Params> = (element, { color }) => {
  const initial = element.style.backgroundColor;
  element.style.backgroundColor = color;
  return () => {
    element.style.backgroundColor = initial;
  };
};
