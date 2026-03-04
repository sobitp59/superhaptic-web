'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Installation from './components/Installation';
import Testimonials from './components/Testimonials';
import Examples from './components/Examples';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollAnimations from './components/ScrollAnimations';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <Installation />
      <Testimonials />
      <Examples />
      <CTA />
      <Footer />
      <ScrollAnimations />
    </>
  );
}
