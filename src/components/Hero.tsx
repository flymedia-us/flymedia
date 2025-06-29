
import { Button } from '@/components/ui/button';
import { Play, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    const targetCount = 40;
    const duration = 3000; // 3 seconds
    const increment = targetCount / (duration / 50); // Update every 50ms
    
    const timer = setInterval(() => {
      setViewCount(prev => {
        const next = prev + increment;
        if (next >= targetCount) {
          clearInterval(timer);
          return targetCount;
        }
        return next;
      });
    }, 50);

    return () => clearInterval(timer);
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
            Turn Your <span className="gradient-text">Performance</span> Into 
            <br />
            <span className="gradient-text">Viral Content</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto break-words">
            We transform your existing footage into viral short-form videos and cross-post across 5 platforms simultaneously. 
            Perfect for magicians, comedians, and jugglers ready to explode on social media.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 w-full">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg animate-pulse-glow w-full sm:w-auto"
              onClick={() => window.open('https://calendar.app.google/PRzwkEYHEnnaJbFR8', '_blank')}
            >
              <Calendar className="mr-2" size={20} />
              Ready for takeoff?
            </Button>
            
            <Button size="lg" variant="outline" className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-8 py-4 text-lg w-full sm:w-auto">
              See Our Work
            </Button>
          </div>
          
          {/* Single animated counter */}
          <div className="mt-16 w-full max-w-full">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-4">
                {Math.floor(viewCount)}M+
              </div>
              <div className="text-xl md:text-2xl text-gray-300">Views Generated for Our Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
