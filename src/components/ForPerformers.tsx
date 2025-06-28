
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wand2, Smile, CircleDot } from 'lucide-react';

const ForPerformers = () => {
  const performerTypes = [
    {
      icon: <Wand2 className="w-12 h-12 text-red-500" />,
      title: "Magicians",
      description: "Turn your incredible tricks into mind-blowing viral moments. We know how to capture the perfect reaction shots and create that 'how did they do that?' engagement that drives shares.",
      benefits: ["Close-up magic optimization", "Reaction compilation videos", "Tutorial teasers", "Behind-the-scenes content"]
    },
    {
      icon: <Smile className="w-12 h-12 text-red-500" />,
      title: "Comedians",
      description: "Your best bits deserve the biggest audience. We'll extract the most shareable moments from your sets and create content that has people tagging their friends.",
      benefits: ["Punchline highlight reels", "Crowd reaction focus", "Relatable moment clips", "Comedy challenge content"]
    },
    {
      icon: <CircleDot className="w-12 h-12 text-red-500" />,
      title: "Jugglers & Performers",
      description: "Showcase your incredible skills with perfectly timed, visually stunning content that stops the scroll. We make your talent impossible to ignore.",
      benefits: ["Skill progression videos", "Trick compilation reels", "Failure to success stories", "Interactive challenges"]
    }
  ];

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
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {performerTypes.map((performer, index) => (
            <Card key={index} className="dynamic-card animate-shimmer">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-black/30 rounded-full w-fit animate-float">
                  {performer.icon}
                </div>
                <CardTitle className="text-white text-2xl">{performer.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <CardDescription className="text-gray-400 text-base leading-relaxed text-center">
                  {performer.description}
                </CardDescription>
                
                <div className="space-y-3">
                  <h4 className="text-red-500 font-semibold text-center">What We Create:</h4>
                  <ul className="space-y-2">
                    {performer.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForPerformers;
