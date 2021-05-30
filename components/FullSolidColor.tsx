import DisplaySolidColor, { Props } from './DisplaySolidColor';
import FillViewport from './FillViewport';

const FullSolidColor: React.FC<Props> = (props) => (
  <FillViewport>
    <DisplaySolidColor {...props} />
  </FillViewport>
);

export default FullSolidColor;
