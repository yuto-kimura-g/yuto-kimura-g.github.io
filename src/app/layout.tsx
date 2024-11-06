import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/Container';
import '@/styles/globals.css';
import Background from '@/components/Background';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: 'yuto::website',
  description: 'yuto no homepage dayo :)',
  icons: {
    icon: '/y.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Background />
        <Header />
        <Container>{children}</Container>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-DTJMT2QH02" />
    </html>
  );
}
