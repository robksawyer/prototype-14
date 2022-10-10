import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const MainScene = dynamic(() => import('@/components/MainScene'), {
  ssr: false,
});
import HamburgerMenu from '@/components/HamburgerMenu';

const CursorCircle = dynamic(() => import('@/components/CursorCircle'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className={`align-center flex min-h-screen flex-col justify-center`}>
      <Head>
        <title>prototype</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HamburgerMenu />
      <main className={`flex flex-grow flex-col`}>
        <MainScene />
      </main>

      <footer
        className={`h-50 align-center flex w-full items-center justify-center bg-black px-40 uppercase text-white`}
      >
        Powered by passion
      </footer>
      <CursorCircle />
    </div>
  );
}
