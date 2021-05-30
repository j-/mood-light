import Head from 'next/head';
import { useParams } from '../../use-params';
import FullSolidColor from '../../components/FullSolidColor';

export const PARAM_COLOR = 'color';

export const DEFAULT_COLOR = '#000000';

const SolidColorFull: React.FC = () => {
  const params = useParams();
  const color = String(params[PARAM_COLOR] || '') || DEFAULT_COLOR;

  return (
    <>
      <Head>
        <title>Solid Color | Mood Light</title>
      </Head>
      <style global jsx>{`
        * {
          overscroll-behavior: none;
        }
      `}</style>
      <FullSolidColor color={color} />
    </>
  );
};

export default SolidColorFull;
