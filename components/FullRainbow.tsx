import DisplayRainbow, { Props } from './DisplayRainbow';
import FillViewport from './FillViewport';

const FullRainbow: React.FC<Props> = (props) => (
  <FillViewport>
    <DisplayRainbow {...props} />
  </FillViewport>
);

export default FullRainbow;
