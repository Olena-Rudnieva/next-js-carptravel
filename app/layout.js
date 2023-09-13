import Head from 'next/head';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CarpTravel',
  description: "Uncover Carpathian's Secrets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="icon" href="/app/favicon.ico" />
      </Head> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
