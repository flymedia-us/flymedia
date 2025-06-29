
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Calendar } from 'lucide-react';
import { useState } from 'react';

const CTA = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Handle form submission
  };

  const benefits = [
    "Transform existing footage into viral content",
    "Cross-post across 5 major platforms",
    "24-48 hour turnaround time",
    "Dedicated account manager",
    "Performance analytics & optimization",
    "No long-term contracts"
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-900/5 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <Card className="max-w-4xl mx-auto bg-gray-900/80 border-red-600/30 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Ready for takeoff?</span>
            </CardTitle>
            <CardDescription className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join hundreds of performers who've transformed their social media presence with our viral content strategy.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* Benefits grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Section */}
            <div className="bg-black/40 p-8 rounded-lg border border-red-600/20">
              <h3 className="text-2xl font-bold text-center mb-4 text-white">
                Let's Talk
              </h3>
              <p className="text-gray-400 text-center mb-6">
                Schedule a free consultation to discuss your viral content strategy and see how we can transform your social media presence.
              </p>
              
              <div className="flex justify-center">
                <Button 
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg animate-pulse-glow"
                  onClick={() => window.open('https://calendar.app.google/PRzwkEYHEnnaJbFR8', '_blank')}
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Book a Complimentary Call
                </Button>
              </div>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                No obligation. Free consultation included.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
