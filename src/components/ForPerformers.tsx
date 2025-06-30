
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Instagram } from 'lucide-react';

const ForPerformers = () => {
  return (
    <section id="performers" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Made by a <span className="gradient-text">Viral Performer</span> for Performers
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Led by someone who knows exactly what it takes to go viral and understands the unique needs of live performers.
          </p>
        </div>
        
        <Card className="dynamic-card animate-shimmer max-w-6xl mx-auto mb-12">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
              <div className="flex-shrink-0">
                <img 
                  src="/lovable-uploads/19665d13-e164-4d8a-aabc-6a25914bf894.png" 
                  alt="Bennet Santora - The Fly Juggler" 
                  className="w-48 h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Bennet Santora</h3>
                  <p className="text-red-500 font-semibold text-lg">The Fly Juggler</p>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  Fly Media was co-founded and is operated by Bennet Santora, better known as the Fly Juggler. 
                  As a performer himself with over 1 million followers across platforms, Bennet understands the 
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
                    Follow @flyjuggler
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-8">
              <div className="text-center mb-6">
                <div className="mx-auto mb-4 p-4 bg-black/30 rounded-full w-fit animate-float">
                  <Sparkles className="w-12 h-12 text-red-500" />
                </div>
                <CardTitle className="text-white text-2xl mb-4">All Performance Types Welcome</CardTitle>
                <CardDescription className="text-gray-400 leading-relaxed">
                  Whether you're a magician creating mind-blowing moments, a comedian delivering perfect punchlines, 
                  or a juggler showcasing incredible skills, we know how to capture and amplify what makes your 
                  performance special. Our team understands the art of timing, audience engagement, and the magic 
                  of live entertainment.
                </CardDescription>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-red-500 font-semibold">Content We Create:</h4>
                  <ul className="space-y-2">
                    <li className="text-gray-300 text-sm flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                      Highlight reels of your best moments
                    </li>
                    <li className="text-gray-300 text-sm flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                      Behind-the-scenes content
                    </li>
                    <li className="text-gray-300 text-sm flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                      Audience reaction compilations
                    </li>
                    <li className="text-gray-300 text-sm flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                      Tutorial teasers and previews
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-red-500 font-semibold">Performance Focus:</h4>
                  <ul className="space-y-2">
                    <li className="text-gray-300 text-sm flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                      Close-up magic and illusions
                    </li>
                    <li className="text-gray-300 text-sm flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                      Comedy timing and punchlines
                    </li>
                    <li className="text-gray-300 text-sm flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                      Juggling and skill demonstrations
                    </li>
                    <li className="text-gray-300 text-sm flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                      Interactive challenges and trends
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ForPerformers;
