import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '../globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Devika Dileep — Frontend Developer',
  description: 'Frontend Developer and Architecture Enthusiast from Kerala',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} bg-neutral-950 text-neutral-300 selection:bg-white/20 selection:text-white relative`}>
        <Script src="https://code.iconify.design/3/3.1.0/iconify.min.js" strategy="afterInteractive" />
        {children}
      </body>
    </html>
  );
}
