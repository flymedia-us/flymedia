
import { Card } from '@/components/ui/card';
import { useEffect, useRef } from 'react';

const ClientsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const clients = [
    {
      name: "The Passing Zone",
      image: "/lovable-uploads/f5989665-4fdd-42cd-961b-0d4df3f0c2fe.png"
    },
    {
      name: "Bernini Magic", 
      image: "/lovable-uploads/b1ccd2b5-a22c-4387-927d-c3b8e653fc8f.png"
    },
    {
      name: "Magical Bones",
      image: "/lovable-uploads/d1aba56a-5fc8-499f-94ee-2b54301bfe47.png"
    },
    {
      name: "The Mind Noodler",
      image: "/lovable-uploads/e8977bce-cd51-4909-ad6e-4269c557ea5f.png"
    },
    {
      name: "Vinny Grosso",
      image: "/lovable-uploads/fb2d5ebb-a129-4f96-ae30-3b2930845b46.png"
    },
    {
      name: "Judge Mentalist",
      image: "/lovable-uploads/dfe7a9a3-6658-440d-8031-02128dce36c5.png"
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
    </section>
  );
};

export default ClientsCarousel;
