import AppHeader from '../components/appHeader';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <AppHeader />
      <Component {...pageProps} />
    </>
  );
}
