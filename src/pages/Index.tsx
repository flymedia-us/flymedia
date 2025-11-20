import { Suspense, lazy } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
// Lazy load below-the-fold components
const ClientsCarousel = lazy(() => import('@/components/ClientsCarousel'));
const QualificationCheck = lazy(() => import('@/components/QualificationCheck'));
const Services = lazy(() => import('@/components/Services'));
const ForPerformers = lazy(() => import('@/components/ForPerformers'));
const PricingSummary = lazy(() => import('@/components/PricingSummary'));
const Process = lazy(() => import('@/components/Process'));
const CTA = lazy(() => import('@/components/CTA'));
const Footer = lazy(() => import('@/components/Footer'));
const StickyCTA = lazy(() => import('@/components/StickyCTA'));

import SEO from '@/components/SEO';

const Index = () => {

  return (
    <div className="min-h-screen w-full max-w-full animate-gradient text-white overflow-x-hidden relative">
      <SEO
        title="Video & Social Media for Performers"
        description="Take your talent to new heights with Fly Media's viral video editing and social media management."
      />
      {/* Floating orbs */}
      <div className="floating-orb w-96 h-96 top-10 -left-20 animate-float"></div>
      <div className="floating-orb w-64 h-64 top-1/2 -right-32 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="floating-orb w-48 h-48 bottom-20 left-1/4 animate-float" style={{ animationDelay: '4s' }}></div>

      <Header />
      <Hero />

      <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
        <ClientsCarousel />
        <QualificationCheck />
        <Services />
        <ForPerformers />
        <PricingSummary />
        <Process />
        <CTA />
        <Footer />
        <StickyCTA />
      </Suspense>
    </div>
  );
};

export default Index;
