import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { siInstagram, siTiktok } from 'simple-icons/icons';

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
                  src="/lovable-uploads/Fly Juggler.png" 
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
                
                <div className="flex flex-wrap gap-4 mt-4">
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
                      <span className="mr-2 w-5 h-5 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d={siInstagram.path} />
                        </svg>
                      </span>
                      375K+ on Instagram
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    className="bg-[#010101] hover:bg-[#161616] text-white border border-[#25F4EE]"
                  >
                    <a 
                      href="https://www.tiktok.com/@flyjuggler" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <span className="mr-2 w-5 h-5 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" width={20} height={20} fill="white" xmlns="http://www.w3.org/2000/svg">
                          <path d={siTiktok.path} />
                        </svg>
                      </span>
                      250K+ on TikTok
                    </a>
                  </Button>
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
