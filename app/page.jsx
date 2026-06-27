import ScrollProgress from '@/components/ui/ScrollProgress';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import HeroStats from '@/components/HeroStats';
import TrustBar from '@/components/TrustBar';
import About from '@/components/About';
import Products from '@/components/Products';
import WhyChooseUs from '@/components/WhyChooseUs';
import OEM from '@/components/OEM';
import Industries from '@/components/Industries';
import Installations from '@/components/Installations';
import Leadership from '@/components/Leadership';
import Process from '@/components/Process';
import SocialProof from '@/components/SocialProof';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { company } from '@/lib/data';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.legalName,
  alternateName: company.name,
  url: 'https://markpotentia.in',
  slogan: company.tagline,
  description:
    'Manufacturer of diesel generator sets, acoustic enclosures and control systems from 15–250 KVA. Authorised Ashok Leyland engine OEM.',
  foundingDate: '1996',
  telephone: company.phone,
  email: company.emails[0],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Coimbatore',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  areaServed: 'IN',
  knowsAbout: [
    'Diesel Generators',
    'Standby Power',
    'Acoustic Enclosures',
    'Control Panels',
    'Power Infrastructure',
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <HeroStats />
        <TrustBar />
        <About />
        <Products />
        <WhyChooseUs />
        <OEM />
        <Industries />
        <Installations />
        <Leadership />
        <Process />
        <SocialProof />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
