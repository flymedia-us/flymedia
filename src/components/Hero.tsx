
import { Button } from '@/components/ui/button';
import { Play, TrendingUp, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-black to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-red-600/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-red-500/5 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Turn Your <span className="gradient-text">Performance</span> Into 
            <br />
            <span className="gradient-text">Viral Content</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We transform your existing footage into viral short-form videos and cross-post across 5 platforms simultaneously. 
            Perfect for magicians, comedians, and jugglers ready to explode on social media.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg animate-pulse-glow">
              <Play className="mr-2" size={20} />
              Start Going Viral
            </Button>
            
            <Button size="lg" variant="outline" className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-8 py-4 text-lg">
              See Our Work
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">5</div>
              <div className="text-gray-400">Platforms Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">10M+</div>
              <div className="text-gray-400">Views Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">500+</div>
              <div className="text-gray-400">Performers Helped</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
