import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import DisplayRainbow from '../../components/DisplayRainbow';
import { MAX_STOPS } from '../../modes/rainbow';
import {
  DEFAULT_ANGLE,
  DEFAULT_LIGHTNESS,
  DEFAULT_PERIOD,
  DEFAULT_SATURATION,
  DEFAULT_STOPS,
  PARAM_ANGLE,
  PARAM_LIGHTNESS,
  PARAM_PERIOD,
  PARAM_SATURATION,
  PARAM_STOPS,
} from './full';

const RainbowIndex: React.FC = () => {
  const action = '/rainbow/full';
  const [period, setPeriod] = useState(DEFAULT_PERIOD);
  const handleChangePeriod: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPeriod(e.currentTarget.valueAsNumber);
  };
  const [stops, setStops] = useState(DEFAULT_STOPS);
  const handleChangeStops: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setStops(e.currentTarget.valueAsNumber);
  };
  const [angle, setAngle] = useState(DEFAULT_ANGLE);
  const handleChangeAngle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setAngle(e.currentTarget.value);
  };
  const [saturation, setSaturation] = useState(DEFAULT_SATURATION);
  const handleChangeSaturation: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSaturation(e.currentTarget.valueAsNumber);
  };
  const [lightness, setLightness] = useState(DEFAULT_LIGHTNESS);
  const handleChangeLightness: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setLightness(e.currentTarget.valueAsNumber);
  };
  const query = { period, stops, angle, saturation, lightness };
  return (
    <>
      <Head>
        <title>Rainbow | Mood Light</title>
      </Head>
      <form action={action} method="get">
        <div>
          <label htmlFor="RainbowIndex-period">Period</label><br />
          <input
            id="RainbowIndex-period"
            type="number"
            name={PARAM_PERIOD}
            value={period}
            onChange={handleChangePeriod}
            min={0}
            step={1_000}
          />
        </div>

        <div>
          <label htmlFor="RainbowIndex-stops">Stops</label><br />
          <input
            id="RainbowIndex-stops"
            type="range"
            name={PARAM_STOPS}
            value={stops}
            onChange={handleChangeStops}
            min={1}
            max={MAX_STOPS}
          />
        </div>

        <div>
          <label htmlFor="RainbowIndex-angle">Angle</label><br />
          <input
            id="RainbowIndex-angle"
            type="string"
            name={PARAM_ANGLE}
            value={angle}
            onChange={handleChangeAngle}
          />
        </div>

        <div>
          <label htmlFor="RainbowIndex-saturation">Saturation</label><br />
          <input
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

        <div>
          <label htmlFor="RainbowIndex-lightness">Lightness</label><br />
          <input
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

        <div style={{ width: '20em', height: '20em' }}>
          <DisplayRainbow
            period={period}
            stops={stops}
            angle={angle}
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
    </>
  );
};

export default RainbowIndex;
