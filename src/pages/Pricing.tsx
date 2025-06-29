
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, Zap, Crown, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      price: "$749",
      period: "/month",
      description: "Perfect for individual performers starting their viral journey",
      features: [
        "5 videos per month",
        "Cross-post to 3 platforms",
        "Basic editing & optimization",
        "24-48 hour turnaround",
        "Email support",
        "Performance analytics"
      ],
      popular: false,
      gradient: "from-blue-600/20 to-purple-600/20"
    },
    {
      name: "Growth",
      icon: <Star className="w-8 h-8 text-red-500" />,
      price: "$1,499",
      period: "/month",
      description: "Ideal for active performers ready to dominate social media",
      features: [
        "15 videos per month",
        "Cross-post to all 5 platforms",
        "Advanced editing & effects",
        "12-24 hour turnaround",
        "Priority support",
        "Detailed analytics & insights",
        "Custom hashtag strategy",
        "Trending topic integration"
      ],
      popular: true,
      gradient: "from-red-600/20 to-orange-600/20"
    },
    {
      name: "Pro",
      icon: <Crown className="w-8 h-8 text-yellow-500" />,
      price: "$3,999",
      period: "/month",
      description: "For established performers who want maximum viral potential",
      features: [
        "Unlimited videos",
        "Cross-post to all 5 platforms",
        "Premium editing & custom effects",
        "Same-day turnaround",
        "Dedicated account manager",
        "Advanced analytics dashboard",
        "Personal brand development",
        "Viral strategy consulting",
        "Custom thumbnail creation",
        "A/B testing optimization"
      ],
      popular: false,
      gradient: "from-yellow-600/20 to-amber-600/20"
    }
  ];

  return (
    <div className="min-h-screen animate-gradient text-white">
      {/* Floating orbs */}
      <div className="floating-orb w-96 h-96 top-10 -left-20 animate-float"></div>
      <div className="floating-orb w-64 h-64 top-1/2 -right-32 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="floating-orb w-48 h-48 bottom-20 left-1/4 animate-float" style={{animationDelay: '4s'}}></div>
      
      <Header />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Choose Your <span className="gradient-text">Viral Plan</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              From individual performers to viral sensations - we have the perfect plan to launch your social media success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`dynamic-card relative overflow-hidden h-full flex flex-col transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-2 ring-red-500' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-orange-600 text-white text-center py-2 text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-50`}></div>
                
                <CardHeader className="relative z-10 text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-black/30 rounded-full w-fit">
                    {plan.icon}
                  </div>
                  <CardTitle className="text-white text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-gray-400 text-lg">{plan.period}</span>
                  </div>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10 space-y-6 flex-grow flex flex-col">
                  <ul className="space-y-4 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-200">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    size="lg" 
                    className={`w-full mt-auto ${plan.popular 
                      ? 'bg-red-600 hover:bg-red-700 animate-pulse-glow' 
                      : 'bg-blue-600 hover:bg-blue-700'
                    } text-white py-4 text-lg`}
                    onClick={() => window.open('https://calendar.app.google/PRzwkEYHEnnaJbFR8', '_blank')}
                  >
                    <Calendar className="mr-2 w-4 h-4" />
                    Ready for takeoff?
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-4">Need a custom plan? Have questions?</p>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white"
              onClick={() => window.open('https://calendar.app.google/PRzwkEYHEnnaJbFR8', '_blank')}
            >
              <Calendar className="mr-2 w-4 h-4" />
              Ready for takeoff?
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Pricing;
