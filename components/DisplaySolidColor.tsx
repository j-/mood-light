import FillParent from './FillParent';

export type Props = {
  color: string;
}

const DisplaySolidColor: React.FC<Props> = ({ color: backgroundColor }) => (
  <FillParent style={{ backgroundColor }} data-test-id="display-solid-color" />
);

export default DisplaySolidColor;
