
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';

const Founder = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <Card className="dynamic-card max-w-4xl mx-auto">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl md:text-5xl font-bold mb-4">
              Meet the <span className="gradient-text">Founder</span>
            </CardTitle>
            <CardDescription className="text-xl text-gray-300">
              Led by a performer who knows what it takes to go viral
            </CardDescription>
          </CardHeader>
          
          <CardContent className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img 
                src="/lovable-uploads/19665d13-e164-4d8a-aabc-6a25914bf894.png" 
                alt="Bennet Santora - The Fly Juggler" 
                className="w-64 h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Bennet Santora</h3>
                <p className="text-red-500 font-semibold text-lg">The Fly Juggler</p>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Fly Media was co-founded and is operated by Bennet Santora, better known as the Fly Juggler. 
                As a performer himself, Bennet understands the unique challenges of creating viral content that 
                showcases your talent while building a loyal audience.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Through his own social media journey, Bennet has grown his following to over 1 million followers 
                across platforms, proving that the strategies we use for our clients work. He brings this 
                first-hand experience and performer's perspective to every Fly Media partnership.
              </p>
              
              <Button 
                asChild 
                className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white"
              >
                <a 
                  href="https://www.instagram.com/flyjuggler/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Instagram className="mr-2 w-5 h-5" />
                  Follow @flyjuggler
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Founder;
