
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const ClientsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const clients = [
    {
      name: "The Passing Zone",
      image: "/lovable-uploads/The Passing Zone.jpg"
    },
    {
      name: "Bernini Magic", 
      image: "/lovable-uploads/Bernini Magic.jpg"
    },
    {
      name: "Magical Bones",
      image: "/lovable-uploads/Magical Bones.jpg"
    },
    {
      name: "The Mind Noodler",
      image: "/lovable-uploads/The Mind Noodler.jpg"
    },
    {
      name: "Vinny Grosso",
      image: "/lovable-uploads/Vinny Grosso.jpg"
    },
    {
      name: "Judge Mentalist",
      image: "/lovable-uploads/Judge Mentalist.jpg"
    }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollDelay = 30;

    const scroll = () => {
      scrollAmount += scrollStep;
      if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, scrollDelay);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="gradient-text">Amazing Performers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join the ranks of successful performers who've transformed their social media presence
          </p>
        </div>
        {/* Add extra margin above carousel to prevent card cutoff on hover */}
        <div className="mt-10">
          <div 
            ref={scrollRef}
            className="overflow-x-hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex space-x-6" style={{ width: 'max-content' }}>
              {/* Duplicate clients array for seamless loop */}
              {[...clients, ...clients].map((client, index) => (
                <Card key={index} className="dynamic-card flex-shrink-0 w-64">
                  <div className="aspect-square w-full overflow-hidden rounded-t-lg">
                    <img 
                      src={client.image} 
                      alt={client.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white text-lg font-semibold text-center">{client.name}</h3>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
        {/* Button to Clients page */}
        <div className="flex justify-center mt-10">
          <Button 
            asChild
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg animate-pulse-glow w-full sm:w-auto max-w-sm"
          >
            <Link to="/clients" className="flex items-center justify-center">
              <ArrowRight className="mr-2" size={20} />
              Meet Our Clients
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
