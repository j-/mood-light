import { useEffect, useMemo, useRef } from 'react';
import FillParent from './FillParent';

export type Props = {
  /** Scale the rainbow (0.5 = two rainbows, 2 = one half rainbow) */
  scale: number;
  /** Multiply the animation speed */
  speed: number;
  /** Direction of gradient in degrees, rads, turns etc */
  angle: string;
  /** Between 0 and 1 */
  saturation: number;
  /** Between 0 and 1 */
  lightness: number;
};

const DisplayRainbow: React.FC<Props> = ({ scale, speed, angle, saturation, lightness }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const backgroundSize = `${scale * 100}%`;
  const backgroundImage = useMemo(() => {
    const colors = [];
    for (let i = 0; i <= 36; i++) {
      colors.push(`hsl(${i * 10}, ${saturation * 100}%, ${lightness * 100}%)`);
    }
    const options = [angle, ...colors];
    return `repeating-linear-gradient(${options})`;
  }, [angle, saturation, lightness]);

  useEffect(() => {
    if (!ref.current) return;
    const animation = ref.current.animate({
      backgroundPosition: `-${scale * 200}% -${scale * 200}%`,
    }, {
      duration: scale * (10 / speed) * 10_000,
      iterations: Infinity,
      easing: 'linear',
    });
    return () => {
      animation.cancel();
    };
  }, [ref, scale, speed]);

  return (
    <FillParent
      ref={ref}
      style={{
        backgroundSize,
        backgroundImage,
      }}
      data-test-id="display-rainbow"
    />
  );
};

export default DisplayRainbow;
