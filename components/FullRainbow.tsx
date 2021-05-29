import { useEffect } from 'react';
import { rainbowMode, Params as RainbowModeParams } from '../modes/rainbow';

const FullRainbow: React.FC<RainbowModeParams> = (props) => {
  useEffect(() => rainbowMode(document.documentElement, props), [props]);
  return null;
};

export default FullRainbow;
