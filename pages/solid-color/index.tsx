import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import DisplaySolidColor from '../../components/DisplaySolidColor';
import { DEFAULT_COLOR, PARAM_COLOR } from './full';

const SolidColorIndex: React.FC = () => {
  const action = '/solid-color/full';
  const [color, setColor] = useState(DEFAULT_COLOR);
  const handleChangeColor: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setColor(e.currentTarget.value);
  };
  const query = { color };
  return (
    <>
      <Head>
        <title>Solid Color | Mood Light</title>
      </Head>
      <form action={action} method="get">
        <div>
          <label htmlFor="SolidColorIndex-color">Color</label><br />
          <input id="SolidColorIndex-color" type="color" name={PARAM_COLOR} value={color} onChange={handleChangeColor} />
        </div>

        <div style={{ width: '20em', height: '20em' }}>
          <DisplaySolidColor color={color} />
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

export default SolidColorIndex;
