import { Button } from '@/components/ui/button';
import { Play, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

import { DISCOVERY_CALL_URL } from '@/config/constants';

const Hero = () => {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    const targetCount = 75000000; // 75 million
    const fastDuration = 3000; // 3 seconds to reach 50M
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
          currentCount++
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
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-red-500/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 text-center relative z-10 w-full max-w-full">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight break-words">
            Take Your <span className="gradient-text">Talent</span> <br />to a <span className="gradient-text">Global Stage</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto break-words">
            We turn your show footage into a powerful social media presence that builds your fanbase and grows your career.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 w-full">
            <Button
              className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 text-2xl animate-pulse-glow w-full sm:w-auto max-w-md rounded-md shadow-xl"
              size="lg"
              onClick={() => window.open(DISCOVERY_CALL_URL, '_blank')}
            >
              <Calendar className="mr-3 w-7 h-7" />
              Book a Discovery Call
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
