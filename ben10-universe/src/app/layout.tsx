import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Ben 10 Character Universe | Canon Fan Encyclopedia & Research Archive',
  description: 'Public, unofficial fan encyclopedia and research database covering Ben 10 (2005), Ben 10: Alien Force, and Ben 10: Ultimate Alien with verified fact citations and rights-reviewed assets.',
  keywords: ['Ben 10', 'Omnitrix', 'Alien Force', 'Ultimate Alien', 'Heatblast', 'Swampfire', 'Vilgax', 'Ultimatrix', 'Canon Encyclopedia'],
  authors: [{ name: 'Ben 10 Universe Fan Research Project' }],
  openGraph: {
    title: 'Ben 10 Character Universe | Canon Fan Encyclopedia',
    description: 'Explore the definitive archive for Ben 10 (2005), Alien Force, and Ultimate Alien with sourced facts and high-tech Omnitrix dossiers.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Ben 10 Character Universe',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col bg-[#0B0F0C] text-[#E9EFE9] antialiased selection:bg-[#A3FF12] selection:text-[#0B0F0C]">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
