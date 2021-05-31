import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
