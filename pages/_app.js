import { useRouter } from 'next/router';
import '@/styles/globals.css';
import Head from 'next/head';
import Header from '@/layout/header/Header';
import Provider from '@/contexts/Provider';
// pages/_app.js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/globals.css'; // 기존 스타일 파일

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const noLayoutPages = ['/login', '/sign-up']; // Layout을 적용하지 않을 페이지 경로
  const shouldShowLayout = !noLayoutPages.includes(router.pathname);
  return (
    <>
      <Head>
        <title>최애의포토</title>
        <link rel="icon" href="/favicon/favicon.png" />
        <meta name="description" content="안녕하세요 최애의 포토입니다." />
      </Head>
      <Provider>
        {shouldShowLayout && <Header />}
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
