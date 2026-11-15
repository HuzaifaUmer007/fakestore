import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Instrument_Sans, Caveat } from 'next/font/google';
import './globals.css';

const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['600', '800'], variable: '--f-display', display: 'swap' });
const body = Instrument_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--f-body', display: 'swap' });
const script = Caveat({ subsets: ['latin'], weight: ['700'], variable: '--f-script', display: 'swap' });

const desc =
  'A.O. Book Marketing & Digital Services: a four-person team helping indie and self-published authors with 8-week launches, ARC outreach, covers, editing and Amazon KDP optimization. Packages from $75.';

export const metadata: Metadata = {
  title: 'A.O. Book Marketing | Launches, ARC Outreach & Amazon KDP for Indie Authors',
  description: desc,
  // Demo build: keep it out of search until the owner approves it.
  robots: { index: false, follow: false },
  icons: { icon: '/favicon.svg' },
  openGraph: { title: 'A.O. Book Marketing & Digital Services', description: desc, type: 'website' },
};

export const viewport: Viewport = { themeColor: '#2a0910', width: 'device-width', initialScale: 1 };

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'A.O. Book Marketing & Digital Services',
  slogan: 'Marketing · Visibility · Growth',
  description: desc,
  telephone: '+2348164597604',
  founder: { '@type': 'Person', name: 'Awoniyi Oluwatobi' },
  sameAs: [
    'https://www.facebook.com/share/152pQtiyJzS/',
    'https://www.instagram.com/awoniyioluwatobi559',
    'https://www.linkedin.com/in/awoniyi-oluwatobi-682579309',
    'https://www.upwork.com/freelancers/~017a15720de77ed15a',
  ],
  priceRange: '$75–$250',
  makesOffer: [
    { '@type': 'Offer', name: 'Book Launch Essentials', price: '75', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Full Launch Campaign', price: '150', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Full Team Package', price: '250', priceCurrency: 'USD' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${script.variable} loading`} suppressHydrationWarning>
      <head>
        {/* Reduced motion or no JS: skip the loader straight away. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if(matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.remove('loading');setTimeout(function(){document.documentElement.classList.remove('loading')},3000);",
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
