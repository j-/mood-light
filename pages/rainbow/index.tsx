import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import DisplayRainbow from '../../components/DisplayRainbow';
import {
  DEFAULT_ANGLE,
  DEFAULT_LIGHTNESS,
  DEFAULT_SATURATION,
  DEFAULT_SCALE,
  DEFAULT_SPEED,
  PARAM_LIGHTNESS,
  PARAM_SATURATION,
  PARAM_SCALE,
  PARAM_SPEED,
} from './full';

const RainbowIndex: React.FC = () => {
  const action = '/rainbow/full';
  const [scale, setScale] = useState(DEFAULT_SCALE);
  const handleChangeScale: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setScale(e.currentTarget.valueAsNumber);
  };
  const [speed, setSpeed] = useState(DEFAULT_SPEED);
  const handleChangeSpeed: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSpeed(e.currentTarget.valueAsNumber);
  };
  const [saturation, setSaturation] = useState(DEFAULT_SATURATION);
  const handleChangeSaturation: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSaturation(e.currentTarget.valueAsNumber);
  };
  const [lightness, setLightness] = useState(DEFAULT_LIGHTNESS);
  const handleChangeLightness: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setLightness(e.currentTarget.valueAsNumber);
  };
  const query = { scale, speed, saturation, lightness };
  return (
    <div className="container my-5">
      <Head>
        <title>Rainbow | Mood Light</title>
      </Head>
      <form action={action} method="get">
        <div className="form-group">
          <label className="form-label" htmlFor="RainbowIndex-scale">Scale</label><br />
          <input
            className="form-range"
            id="RainbowIndex-scale"
            type="range"
            name={PARAM_SCALE}
            value={scale}
            onChange={handleChangeScale}
            min={1}
            max={10}
            step={0.1}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="RainbowIndex-speed">Speed</label><br />
          <input
            className="form-range"
            id="RainbowIndex-speed"
            type="range"
            name={PARAM_SPEED}
            value={speed}
            onChange={handleChangeSpeed}
            min={1}
            max={100}
            step={1}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="RainbowIndex-saturation">Saturation</label><br />
          <input
            className="form-range"
            id="RainbowIndex-saturation"
            type="range"
            name={PARAM_SATURATION}
            value={saturation}
            onChange={handleChangeSaturation}
            min={0}
            max={1}
            step={0.1}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="RainbowIndex-lightness">Lightness</label><br />
          <input
            className="form-range"
            id="RainbowIndex-lightness"
            type="range"
            name={PARAM_LIGHTNESS}
            value={lightness}
            onChange={handleChangeLightness}
            min={0}
            max={1}
            step={0.1}
          />
        </div>

        <div className="card card-body" style={{ width: '20em', height: '20em' }}>
          <DisplayRainbow
            scale={scale}
            speed={speed}
            angle={DEFAULT_ANGLE}
            saturation={saturation}
            lightness={lightness}
          />
        </div>

        <ul>
          <li>
            <Link href={{ pathname: action, query }}>
              <a target="_self">Open in current tab</a>
            </Link>
          </li>
          <li>
            <Link href={{ pathname: action, query }}>
              <a target="_blank">Open in new tab</a>
            </Link>
          </li>
          <li>
            <Link href={{ pathname: action, query }}>
              <a onClick={(e) => {
                e.preventDefault();
                window.open(e.currentTarget.href, null, 'width=800,height=500');
              }}>Open in new window</a>
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default RainbowIndex;
