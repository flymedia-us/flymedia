import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, Zap, Crown, Calendar, Mail, Plus } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      price: "$749",
      period: "/month",
      description: "Perfect for performers starting their social media journey",
      features: [
        "3x edited videos/week",
        "0% booking commission",
        "Unlimited cloud storage",
        "Monthly analytics report",
        "Core platforms:",
        "• YouTube",
        "• Instagram", 
        "• TikTok",
        "Platform rewards split 50-50"
      ],
      popular: false,
      value: false,
      gradient: "from-blue-600/20 to-purple-600/20"
    },
    {
      name: "Growth",
      icon: <Star className="w-8 h-8 text-red-500" />,
      price: "$1,499",
      period: "/month",
      description: "For the rising star and regular performer ready to dominate social media",
      features: [
        "5x edited videos/week",
        "0% booking commission",
        "Unlimited cloud storage",
        "Monthly analytics report",
        "Expanded platforms:",
        "• YouTube",
        "• Instagram",
        "• TikTok", 
        "• Facebook",
        "• Snapchat",
        "You earn 70% platform rewards",
        "Custom thumbnails for videos"
      ],
      popular: true,
      value: false,
      gradient: "from-red-600/20 to-orange-600/20"
    },
    {
      name: "Pro",
      icon: <Crown className="w-8 h-8 text-yellow-500" />,
      price: "$2,999",
      period: "/month",
      description: "Everything, everywhere. All done for you for maximum viral potential",
      features: [
        "7x edited videos/week",
        "0% booking commission",
        "Unlimited cloud storage",
        "Monthly analytics report",
        "Unlimited platforms:",
        "• YouTube",
        "• Instagram",
        "• TikTok", 
        "• Facebook",
        "• Snapchat",
        "• Add LinkedIn, X, Threads, Bluesky, Reddit",
        "You earn 100% platform rewards",
        "Custom thumbnails for videos",
        "Profile optimization for conversions",
        "• Includes blue-check verification badge",
        "Full-service community engagement",
        "• Automatic comments",
        "• We respond to comments and messages for you",
        "Weekly strategy calls"
      ],
      popular: false,
      value: true,
      gradient: "from-yellow-600/20 to-amber-600/20"
    }
  ];


  return (
    <div className="min-h-screen w-full max-w-full animate-gradient text-white overflow-x-hidden fixed left-0 right-0 top-0 bottom-0">
      {/* Floating orbs */}
      <div className="floating-orb w-96 h-96 top-10 -left-20 animate-float"></div>
      <div className="floating-orb w-64 h-64 top-1/2 -right-32 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="floating-orb w-48 h-48 bottom-20 left-1/4 animate-float" style={{animationDelay: '4s'}}></div>
      <Header />
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Go <span className="gradient-text">Viral.</span> Not Broke.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Pick the perfect plan to launch your social media success.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`dynamic-card relative overflow-hidden h-full flex flex-col transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-2 ring-red-500' : ''} ${plan.value ? 'ring-2 ring-yellow-400' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-orange-600 text-white text-center py-2 text-sm font-semibold z-20">
                    MOST POPULAR
                  </div>
                )}
                {plan.value && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-amber-400 text-black text-center py-2 text-sm font-semibold z-20" style={{top: plan.popular ? '2.5rem' : 0}}>
                    BEST VALUE
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
                  <ul className="space-y-3 flex-grow text-sm">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-200">
                        {feature.startsWith('•') ? (
                          <span className="ml-6">{feature}</span>
                        ) : feature.endsWith(':') ? (
                          <span className="font-semibold text-white">{feature}</span>
                        ) : (
                          <>
                            <Check className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-20">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg animate-pulse-glow w-full sm:w-auto"
              onClick={() => window.open('https://calendar.app.google/SwCqN1pHeeAcU2ev7', '_blank')}
            >
              <Calendar className="mr-2" size={20} />
              Book a Complimentary Call
            </Button>
          </div>
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-4">Need a custom plan? Have questions?</p>
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white"
            >
              <a href="/contact">
                <Mail className="mr-2 w-4 h-4" />
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Pricing;
