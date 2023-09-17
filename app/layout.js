import Head from 'next/head';
import './globals.css';
import { Inter } from 'next/font/google';
import AppBar from './components/AppBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CarpTravel',
  description: "Uncover Carpathian's Secrets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content="/logo.png" />
        <meta
          property="og:url"
          content="https://next-js-carptravel.vercel.app/"
        />
      </Head>
      <body className={inter.className}>
        <AppBar />
        {children}
      </body>
    </html>
  );
}
