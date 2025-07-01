import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { useState } from 'react';

const CTA = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Handle form submission
  };

  return (
    <section className="py-20 pb-32 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Ready for takeoff?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join hundreds of performers who've transformed their social media presence with our viral content strategy.
          </p>
        </div>
        <div className="flex justify-center">
          <Button 
            className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 text-2xl animate-pulse-glow w-full sm:w-auto max-w-md rounded-md shadow-xl"
            size="lg"
            onClick={() => window.open('https://calendar.app.google/PRzwkEYHEnnaJbFR8', '_blank')}
          >
            <Calendar className="mr-3 w-7 h-7" />
            Book Discovery Call
          </Button>
        </div>

        <p className="text-gray-300 text-center mt-4">To see if we're a good fit.</p>

        <p className="text-gray-400 mt-6 text-sm text-center">
          No obligation. Free consultation included.
        </p>
      </div>
    </section>
  );
};

export default CTA;
