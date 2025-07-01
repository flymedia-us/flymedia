import { Button } from '@/components/ui/button';
import { Play, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    const targetCount = 40000000; // 40 million
    const fastDuration = 3000; // 3 seconds to reach 40M
    const fastIncrement = targetCount / (fastDuration / 16); // Update every 16ms for smooth animation
    
    let currentCount = 0;
    
    // Fast counting phase
    const fastTimer = setInterval(() => {
      currentCount += fastIncrement;
      if (currentCount >= targetCount) {
        currentCount = targetCount;
        setViewCount(currentCount);
        clearInterval(fastTimer);
        
        // Start slow counting phase
        const slowTimer = setInterval(() => {
          currentCount ++
          setViewCount(Math.floor(currentCount));
        }, 500); // Update every half second
        
        return () => clearInterval(slowTimer);
      }
      setViewCount(Math.floor(currentCount));
    }, 16);

    return () => clearInterval(fastTimer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-section">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-black to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-red-600/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-red-500/5 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10 w-full max-w-full">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight break-words">
            Turn Your <span className="gradient-text">Performance</span> <br /> Into <span className="gradient-text">Viral Content</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto break-words">
            Grow your audience and book more shows with professional social media management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 w-full">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg animate-pulse-glow w-full sm:w-auto"
              onClick={() => window.open('https://calendar.app.google/PRzwkEYHEnnaJbFR8', '_blank')}
            >
              <Calendar className="mr-2" size={20} />
              Book a Complimentary Call
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-red-600 text-red-500 px-8 py-4 text-lg w-full sm:w-auto group relative overflow-hidden bg-transparent transition-colors duration-300"
              type="button"
            >
              <span className="block group-hover:opacity-0 group-hover:translate-y-2 transition-all duration-300">See Our Work</span>
              <span className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                Coming Soon
              </span>
            </Button>
          </div>
          
          {/* Large animated counter */}
          <div className="mt-16 w-full max-w-full">
            <div className="text-center">
              <div className="text-5xl xs:text-6xl md:text-7xl lg:text-8xl font-bold gradient-text mb-4 tracking-wider break-words max-w-full overflow-x-auto overflow-y-hidden">
                {viewCount.toLocaleString()}
              </div>
              <div className="text-xl md:text-2xl text-gray-300">Views generated for our clients, and counting...</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
