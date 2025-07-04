
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Edit3, Rocket, BarChart } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Upload className="w-8 h-8 text-red-500" />,
      step: "01",
      title: "Send Us Your Footage",
      description: "Upload your performance videos, show recordings, or any content you want transformed. We work with any quality - even phone recordings can go viral!"
    },
    {
      icon: <Edit3 className="w-8 h-8 text-red-500" />,
      step: "02", 
      title: "We Work Our Magic",
      description: "Our team picks out the best moments from your performances, then edits and optimizes each clip to be perfect for social media."
    },
    {
      icon: <Rocket className="w-8 h-8 text-red-500" />,
      step: "03",
      title: "Cross-Platform Launch",
      description: "We simultaneously post across YouTube, TikTok, Instagram, Facebook, and Snapchat at optimal times for maximum reach."
    },
    {
      icon: <BarChart className="w-8 h-8 text-red-500" />,
      step: "04",
      title: "Track & Optimize",
      description: "Monitor performance, analyze what works, and continuously refine the strategy to maximize your viral potential and follower growth."
    }
  ];

  return (
    <section id="process" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple Process,
            <span className="gradient-text block mt-2">Explosive Results</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Going viral has never been easier. Just send us your content and watch your social media explode.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="dynamic-card relative overflow-hidden">
              {/* Step number background */}
              <div className="absolute top-4 right-4 text-6xl font-bold text-blue-600/10">
                {step.step}
              </div>
              
              <CardHeader className="relative z-10">
                <div className="mb-4 p-3 bg-black/30 rounded-full w-fit">
                  {step.icon}
                </div>
                <CardTitle className="text-white text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 dynamic-card rounded-full">
            <span className="text-red-400 font-medium">⚡ New posts every day</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
