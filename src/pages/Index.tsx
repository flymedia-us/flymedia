
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ForPerformers from '@/components/ForPerformers';
import Process from '@/components/Process';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Services />
      <ForPerformers />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
