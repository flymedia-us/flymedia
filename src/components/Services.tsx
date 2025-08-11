
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Share2, TrendingUp, Zap, Globe, BarChart3 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Video className="w-8 h-8 text-red-500" />,
      title: "Video Editing & Optimization",
      description: "We take your existing footage and transform it into viral-ready short-form content optimized for each platform's algorithm."
    },
    {
      icon: <Share2 className="w-8 h-8 text-red-500" />,
      title: "Multi-Platform Cross-Posting",
      description: "Maximize your reach with simultaneous posting across YouTube, TikTok, Instagram, Facebook, Snapchat, and more."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-red-500" />,
      title: "Viral Strategy & Timing",
      description: "Strategic posting schedules and hashtag optimization based on current trends and your audience's peak activity times."
    },
    {
      icon: <Zap className="w-8 h-8 text-red-500" />,
      title: "Rapid Turnaround & Revisions",
      description: "From raw footage to published content in just one week. That leaves time for revisions to perfect each clip."
    },
    {
      icon: <Globe className="w-8 h-8 text-red-500" />,
      title: "Audience Growth",
      description: "Targeted growth strategies to build your fan base across all platforms and convert viewers into loyal followers."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-500" />,
      title: "Performance Analytics",
      description: "Detailed analytics and insights to track your viral success and optimize future content strategies."
    }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Complete <span className="gradient-text">Social Media Toolkit.</span> 
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We handle every aspect of your social media presence so you can focus on what you do best - performing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="dynamic-card">
              <CardHeader>
                <div className="mb-4 p-3 bg-black/30 rounded-full w-fit">
                  {service.icon}
                </div>
                <CardTitle className="text-white text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
