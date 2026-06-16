import './globals.css';
import { Inter, Space_Grotesk, IBM_Plex_Mono } from 'next/font/google';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});
const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});
const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const siteUrl = 'https://markpotentia.in';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Mark Potentia — Power Infrastructure & Energy Solutions',
    template: '%s · Mark Potentia',
  },
  description:
    'Mark Potentia engineers, manufactures and supports diesel generator sets, acoustic enclosures and control systems from 5–750 KVA. 29+ years, 3,000+ installations, authorised Ashok Leyland engine OEM.',
  keywords: [
    'diesel generators',
    'genset manufacturer',
    'power infrastructure',
    'acoustic enclosures',
    'control panels',
    'Ashok Leyland OEM',
    'standby power',
    'India',
  ],
  authors: [{ name: 'Mark Potentia Pvt. Ltd.' }],
  openGraph: {
    title: 'Mark Potentia — Power Infrastructure & Energy Solutions',
    description:
      'Engineering reliable power for mission-critical operations. 29+ years, 3,000+ installations across India.',
    url: siteUrl,
    siteName: 'Mark Potentia',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mark Potentia — Power Infrastructure & Energy Solutions',
    description: 'Engineering reliable power for mission-critical operations.',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#06090f',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
