import Head from 'next/head';
import { useParams } from '../../use-params';
import FullRainbow from '../../components/FullRainbow';

export const PARAM_PERIOD = 'period';
export const PARAM_STOPS = 'stops';
export const PARAM_ANGLE = 'angle';
export const PARAM_SATURATION = 'saturation';
export const PARAM_LIGHTNESS = 'lightness';

export const DEFAULT_PERIOD = 10000;
export const DEFAULT_STOPS = 12;
export const DEFAULT_ANGLE = 'to right';
export const DEFAULT_SATURATION = 0.8;
export const DEFAULT_LIGHTNESS = 0.8;

const RainbowFull: React.FC = () => {
  const params = useParams();
  const period = Number(params[PARAM_PERIOD]) || DEFAULT_PERIOD;
  const stops = Number(params[PARAM_STOPS]) || DEFAULT_STOPS;
  const angle = String(params[PARAM_ANGLE]) || DEFAULT_ANGLE;
  const saturation = Number(params[PARAM_SATURATION]) || DEFAULT_SATURATION;
  const lightness = Number(params[PARAM_LIGHTNESS]) || DEFAULT_LIGHTNESS;

  return (
    <>
      <Head>
        <title>Rainbow | Mood Light</title>
      </Head>
      <style global jsx>{`
        * {
          overscroll-behavior: none;
        }
      `}</style>
      <FullRainbow
        period={period}
        stops={stops}
        angle={angle}
        saturation={saturation}
        lightness={lightness}
      />
    </>
  );
};

export default RainbowFull;
