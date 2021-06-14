import Head from 'next/head';
import { useRouter } from 'next/router';
import { useParams } from '../../use-params';
import FullScreenContainer from '../../components/FullScreenContainer';
import FullRainbow from '../../components/FullRainbow';

export const PARAM_SCALE = 'scale';
export const PARAM_SPEED = 'speed';
export const PARAM_ANGLE = 'angle';
export const PARAM_SATURATION = 'saturation';
export const PARAM_LIGHTNESS = 'lightness';

export const DEFAULT_SCALE = 2;
export const DEFAULT_SPEED = 10;
export const DEFAULT_ANGLE = 'to right';
export const DEFAULT_SATURATION = 0.8;
export const DEFAULT_LIGHTNESS = 0.8;

const RainbowFull: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const scale = Number(params[PARAM_SCALE] || '') || DEFAULT_SCALE;
  const speed = Number(params[PARAM_SPEED] || '') || DEFAULT_SPEED;
  const angle = String(params[PARAM_ANGLE] || '') || DEFAULT_ANGLE;
  const saturation = Number(params[PARAM_SATURATION] || '') || DEFAULT_SATURATION;
  const lightness = Number(params[PARAM_LIGHTNESS] || '') || DEFAULT_LIGHTNESS;

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
      <FullScreenContainer
        onClickBack={() => {
          window.close();
          router.push('/rainbow', {}, { shallow: true });
        }}
      >
        <FullRainbow
          scale={scale}
          speed={speed}
          angle={angle}
          saturation={saturation}
          lightness={lightness}
        />
      </FullScreenContainer>
    </>
  );
};

export default RainbowFull;
