
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Star, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingSummary = () => {
  const plans = [
    {
      name: "Basic",
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      price: "$749",
      description: "3x edited videos/week, core platforms",
      gradient: "from-blue-600/20 to-purple-600/20"
    },
    {
      name: "Growth",
      icon: <Star className="w-6 h-6 text-red-500" />,
      price: "$1,499",
      description: "5x edited videos/week, expanded platforms, and thumbnails",
      gradient: "from-red-600/20 to-orange-600/20",
      popular: true
    },
    {
      name: "Pro",
      icon: <Crown className="w-6 h-6 text-yellow-500" />,
      price: "$2,999",
      description: "7x videos/week, unlimited platforms, thumbnails, and more",
      gradient: "from-yellow-600/20 to-amber-600/20"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees and 0% booking commission on all plans
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`dynamic-card relative overflow-hidden transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-2 ring-red-500' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-orange-600 text-white text-center py-1 text-xs font-semibold">
                  MOST POPULAR
                </div>
              )}
              
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-50`}></div>
              
              <CardHeader className="relative z-10 text-center pb-4 pt-8">
                <div className="mx-auto mb-2 p-3 bg-black/30 rounded-full w-fit">
                  {plan.icon}
                </div>
                <CardTitle className="text-white text-xl mb-2">{plan.name}</CardTitle>
                <div className="mb-3">
                  <span className="text-2xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <CardDescription className="text-gray-300 text-sm">
                  {plan.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button 
            asChild
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg animate-pulse-glow w-full sm:w-auto max-w-sm"
          >
            <Link to="/pricing" className="flex items-center justify-center">
              <ArrowRight className="mr-2" size={20} />
              View Full Pricing Details
            </Link>
          </Button>
        </div>
        
        <p className="text-gray-400 mt-4 text-sm text-center">
          All plans include unlimited cloud storage, monthly analytics, and 0% booking commission
        </p>
      </div>
    </section>
  );
};

export default PricingSummary;
