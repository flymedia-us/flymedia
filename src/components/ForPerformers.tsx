
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

const ForPerformers = () => {
  return (
    <section id="performers" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Made for <span className="gradient-text">Performers</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We understand the unique needs of live performers and know exactly how to translate your stage presence into viral social media content.
          </p>
        </div>
        
        <Card className="dynamic-card animate-shimmer max-w-4xl mx-auto">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-4 p-4 bg-black/30 rounded-full w-fit animate-float">
              <Sparkles className="w-12 h-12 text-red-500" />
            </div>
            <CardTitle className="text-white text-3xl">All Performance Types Welcome</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <CardDescription className="text-gray-400 text-lg leading-relaxed text-center">
              Whether you're a magician creating mind-blowing moments, a comedian delivering perfect punchlines, 
              or a juggler showcasing incredible skills, we know how to capture and amplify what makes your 
              performance special. Our team understands the art of timing, audience engagement, and the magic 
              of live entertainment.
            </CardDescription>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
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
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ForPerformers;
