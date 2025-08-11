
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ClientsCarousel from '@/components/ClientsCarousel';
import QualificationCheck from '@/components/QualificationCheck';
import Services from '@/components/Services';
import ForPerformers from '@/components/ForPerformers';
import PricingSummary from '@/components/PricingSummary';
import Process from '@/components/Process';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {

  document.title = 'Fly Media | Video & Social Media for Performers';

  return (
    <div className="min-h-screen w-full max-w-full animate-gradient text-white overflow-x-hidden fixed left-0 right-0 top-0 bottom-0">
      {/* Floating orbs */}
      <div className="floating-orb w-96 h-96 top-10 -left-20 animate-float"></div>
      <div className="floating-orb w-64 h-64 top-1/2 -right-32 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="floating-orb w-48 h-48 bottom-20 left-1/4 animate-float" style={{animationDelay: '4s'}}></div>
      
      <Header />
      <Hero />
      <ClientsCarousel />
      <QualificationCheck />
      <Services />
      <ForPerformers />
      <PricingSummary />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
