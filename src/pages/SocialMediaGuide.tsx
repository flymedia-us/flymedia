import { Button } from '@/components/ui/button';
import { Calendar, Users, TrendingUp, Star, Video, MessageSquare, Camera } from 'lucide-react';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SocialMediaGuide = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tips = [
    {
      icon: <Video className="w-8 h-8 text-red-500" />,
      title: "Post Consistently",
      description: "Regular posting keeps your audience engaged and helps the algorithm favor your content. Aim for 3-5 posts per week across platforms."
    },
    {
      icon: <Camera className="w-8 h-8 text-red-500" />,
      title: "Show Behind-the-Scenes",
      description: "Audiences love seeing the preparation, practice, and personality behind the performance. It builds connection and trust."
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: "Engage with Your Community",
      description: "Respond to comments, collaborate with other performers, and build genuine relationships with your audience."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-red-500" />,
      title: "Use Trending Hashtags",
      description: "Research and use relevant hashtags to increase discoverability. Mix popular tags with niche performer-specific ones."
    },
    {
      icon: <Star className="w-8 h-8 text-red-500" />,
      title: "Showcase Social Proof",
      description: "Share testimonials, reviews, and footage from successful events to build credibility with potential clients."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-red-500" />,
      title: "Tell Your Story",
      description: "Share your journey, challenges, and victories. Authentic storytelling creates emotional connections with your audience."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="gradient-text">Social Media Mastery</span>
            <br />
            for Performers
          </h1>
          <p className={`text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Transform your social media presence and turn followers into bookings with proven strategies from industry experts.
          </p>
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl animate-pulse-glow w-full sm:w-auto max-w-md rounded-md shadow-xl"
              size="lg"
              onClick={() => window.open('https://calendar.app.google/SwCqN1pHeeAcU2ev7', '_blank')}
            >
              <Calendar className="mr-2 sm:mr-3 w-5 sm:w-7 h-5 sm:h-7" />
              <span className="text-sm sm:text-xl">Book Your Free Strategy Session</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="gradient-text">6 Essential Social Media Tips</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <div
                key={index}
                className={`dynamic-card p-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="mb-6">{tip.icon}</div>
                <h3 className="text-xl font-bold mb-4">{tip.title}</h3>
                <p className="text-gray-300 leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="gradient-text">The Problem Most Performers Face</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-300 mb-12">
              <p>
                You're incredibly talented. Your performances are amazing. But your social media feels like a chore, 
                and you're not seeing the bookings you deserve.
              </p>
              <p>
                The truth is, talent alone isn't enough in today's digital world. You need a strategic approach 
                to social media that showcases your skills AND converts viewers into paying clients.
              </p>
              <p className="text-xl font-semibold text-white">
                That's where we come in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              <span className="gradient-text">See Bennett in Action</span>
            </h2>
            <div className="aspect-video w-full max-w-3xl mx-auto mb-16">
              <iframe
                className="w-full h-full rounded-lg shadow-2xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Bennett Fly Juggler Social Media Strategy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Bennett Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              <span className="gradient-text">Learn from a Proven Expert</span>
            </h2>
            <div className="dynamic-card p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">Bennett "Fly Juggler" Santora</h3>
                  <p className="text-red-400 font-semibold mb-6">Over 1 Million Social Media Followers</p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Bennett has built one of the largest performer followings online and has helped dozens of 
                    entertainers transform their social media presence. He knows exactly what works because 
                    he's done it himself and for countless others.
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <div className="aspect-square w-full max-w-sm mx-auto">
                    <img 
                      src="/lovable-uploads/Fly Juggler.png" 
                      alt="Bennett 'Fly Juggler' Santora"
                      className="w-full h-full object-cover rounded-lg shadow-xl"
                    />
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-700 pt-8">
                <p className="text-lg font-semibold text-white mb-4">
                  In your free consultation, Bennett will:
                </p>
                <ul className="text-left space-y-3 text-gray-300 max-w-2xl mx-auto">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✓</span>
                    Audit your current social media presence
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✓</span>
                    Identify your biggest growth opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✓</span>
                    Create a custom strategy for your performance style
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✓</span>
                    Show you how to turn followers into bookings
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Ready to Transform Your Social Media?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Book your free strategy session with Bennett and discover how to turn your social media 
            into a booking machine.
          </p>
          <Button 
            className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl animate-pulse-glow w-full sm:w-auto max-w-md rounded-md shadow-xl"
            size="lg"
            onClick={() => window.open('https://calendar.app.google/SwCqN1pHeeAcU2ev7', '_blank')}
          >
            <Calendar className="mr-2 sm:mr-3 w-5 sm:w-7 h-5 sm:h-7" />
            <span className="text-sm sm:text-xl">Book Your Free Session Now</span>
          </Button>
          <p className="text-gray-300 text-center mt-4">No obligation. No pitch. Just value.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SocialMediaGuide;