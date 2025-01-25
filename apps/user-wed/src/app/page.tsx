
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Head from 'next/head';
import 'next/navigation';
import HomePage from '../modules/home/HomePage';
import MainLayout from '../layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Nguyen Trong Qui - Blog</title>
      </Head>
      <HomePage />
      
    </MainLayout>
  );
}
