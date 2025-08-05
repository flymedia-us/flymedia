import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { siInstagram, siTiktok } from 'simple-icons/icons';

const ForPerformers = () => {
  return (
    <section id="performers" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            By a team who <span className="gradient-text">knows your needs.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Led by a team of co-founders who know exactly what it takes to go viral and understand the unique needs of live performers.
          </p>
        </div>
        
        <Card className="dynamic-card animate-shimmer max-w-6xl mx-auto mb-12">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Bennett Santora */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src="/lovable-uploads/Fly Juggler.png" 
                    alt="Bennett Santora - The Fly Juggler" 
                    className="w-32 h-32 object-cover rounded-lg shadow-lg"
                  />
                </div>
                
                <div className="flex-1 space-y-3 text-center sm:text-left">
                  <div>
                    <h3 className="text-xl font-bold text-white">Bennett Santora</h3>
                    <p className="text-red-500 font-semibold">aka Fly Juggler. Co-Founder & CMO</p>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    A performer himself with over 1 million followers across platforms. Bennett understands the 
                    unique challenges of creating viral content that showcases your talent.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    <Button 
                      asChild 
                      size="sm"
                      className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white"
                    >
                      <a 
                        href="https://www.instagram.com/flyjuggler/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <span className="mr-2 w-4 h-4 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d={siInstagram.path} />
                          </svg>
                        </span>
                        380K+
                      </a>
                    </Button>
                    <Button 
                      asChild 
                      size="sm"
                      className="bg-[#010101] hover:bg-[#161616] text-white border border-[#25F4EE]"
                    >
                      <a 
                        href="https://www.tiktok.com/@flyjuggler" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <span className="mr-2 w-4 h-4 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" width={16} height={16} fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d={siTiktok.path} />
                          </svg>
                        </span>
                        250K+
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Sam Friedman */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gray-600 rounded-lg shadow-lg flex items-center justify-center">
                <div className="flex-shrink-0">
                  <img 
                    src="/lovable-uploads/Sam Friedman.png" 
                    alt="Sam Friedman"
                    className="w-32 h-32 object-cover rounded-lg shadow-lg"
                  />
                </div>
                  </div>
                </div>
                
                <div className="flex-1 space-y-3 text-center sm:text-left">
                  <div>

                    <h3 className="text-xl font-bold text-white">Sam Friedman</h3>
                    <p className="text-blue-500 font-semibold">Co-Founder & COO</p>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    With over 10 years of experience in video production plus a background in tech and working directly with clients, Sam brings the 
                     expertise to produce and distribute high-quality content.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center pt-4 border-t border-gray-700">
              <p className="text-gray-300 leading-relaxed">
                Together, Bennett and Sam lead a powerhouse creative team that combines performer insights with 
                technical excellence to help entertainers like you dominate social media and build loyal audiences.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ForPerformers;
