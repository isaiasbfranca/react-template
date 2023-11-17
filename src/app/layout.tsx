import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from 'components/Footer';
import { Layout } from 'components/Layout';

import 'styles/globals.css';

export const metadata: Metadata = {
  title: 'Template',
  description: 'sample'
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Layout>
          <main className="pt-28">{children}</main>
        </Layout>

        <Footer />
      </body>
    </html>
  );
}
