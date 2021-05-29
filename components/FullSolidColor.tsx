import { useEffect } from 'react';
import { solidColorMode, Params as SolidColorModeParams } from '../modes/solid-color';

const FullSolidColor: React.FC<SolidColorModeParams> = (props) => {
  useEffect(() => solidColorMode(document.documentElement, props), [props]);
  return null;
};

export default FullSolidColor;
