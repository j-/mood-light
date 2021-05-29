import { useEffect, useRef } from 'react';
import FillParent from './FillParent';
import { rainbowMode, Params as RainbowModeParams } from '../modes/rainbow';

const DisplayRainbow: React.FC<RainbowModeParams> = (props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    return rainbowMode(ref.current, props);
  }, [ref, props]);
  return <FillParent ref={ref} data-test-id="display-rainbow" />;
};

export default DisplayRainbow;
