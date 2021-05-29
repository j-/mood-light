import { useEffect, useRef } from 'react';
import FillParent from './FillParent';
import { solidColorMode, Params as SolidColorModeParams } from '../modes/solid-color';

const DisplaySolidColor: React.FC<SolidColorModeParams> = (props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    return solidColorMode(ref.current, props);
  }, [ref, props]);
  return <FillParent ref={ref} data-test-id="display-solid-color" />;
};

export default DisplaySolidColor;
