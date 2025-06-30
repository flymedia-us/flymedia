
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Instagram } from 'lucide-react';

const ForPerformers = () => {
  return (
    <section id="performers" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            By Performers. <span className="gradient-text">For Performers.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Led by a team who knows exactly what it takes to go viral and understands the unique needs of live performers.
          </p>
        </div>
        
        <Card className="dynamic-card animate-shimmer max-w-6xl mx-auto mb-12">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
              <div className="flex-shrink-0">
                <img 
                  src="/lovable-uploads/19665d13-e164-4d8a-aabc-6a25914bf894.png" 
                  alt="Bennett Santora - The Fly Juggler" 
                  className="w-48 h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="flex-1 space-y-4">
                <div>
                  <p className="text-red-500 font-semibold text-lg">Bennett Santora, aka</p>
                  <h3 className="text-2xl font-bold text-white mb-2">Fly Juggler</h3>
                  
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  Fly Media is co-founded and operated by Bennett Santora, better known as the Fly Juggler. 
                  As a performer himself with over 1 million followers across platforms, Bennett understands the 
                  unique challenges of creating viral content that showcases your talent while building a loyal audience.
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
                    374K+ on Instagram
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-8">
              <div className="text-center">
                <div className="mx-auto mb-4 p-4 bg-black/30 rounded-full w-fit animate-float">
                  <Sparkles className="w-12 h-12 text-red-500" />
                </div>
                <CardTitle className="text-white text-2xl mb-4">Built for All Performance Types</CardTitle>
                <CardDescription className="text-gray-400 leading-relaxed max-w-3xl mx-auto">
                  Whether you're a magician, comedian, juggler, or any other type of performer, we understand 
                  the art of timing, audience engagement, and the magic of live entertainment. Our team knows 
                  how to capture and amplify what makes your performance special.
                </CardDescription>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ForPerformers;
