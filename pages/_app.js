import AppFooter from '../components/appFooter';
import AppHeader from '../components/appHeader';
import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <>{page}</>);
  return (
    <>
      <AppHeader />
      <Head>
        <title>건국대학교 컴퓨터공학부</title>
        <meta
          name='description'
          content='건국대학교 컴퓨터공학부 사이트입니다.'
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
      <AppFooter />
    </>
  );
}
