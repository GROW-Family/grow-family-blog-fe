
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { Metadata } from 'next';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../modules/home/HomePage';

export const metadata: Metadata = {
  title: 'Grow Blog',
  description: 'A blog for everyone, developed by Grow Team',
}

export default function Home() {
  return (
    <MainLayout>
      <HomePage />
    </MainLayout>
  );
}
