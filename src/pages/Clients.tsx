
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Star } from 'lucide-react';

const Clients = () => {
  const clients = [
    {
      name: "The Passing Zone",
      status: "Former Client",
      description: "Comedy juggling duo known for their high-energy performances and television appearances.",
      highlight: "Helped amplify their viral comedy juggling content across multiple platforms",
      image: "/lovable-uploads/f5989665-4fdd-42cd-961b-0d4df3f0c2fe.png"
    },
    {
      name: "Bernini Magic",
      status: "Current Client", 
      description: "Professional magician specializing in close-up magic and mentalism performances.",
      highlight: "Created engaging content showcasing mind-bending illusions and audience reactions",
      image: "/lovable-uploads/b1ccd2b5-a22c-4387-927d-c3b8e653fc8f.png"
    },
    {
      name: "Magical Bones",
      status: "Current Client",
      description: "Dynamic performer combining magic with theatrical storytelling and character work.",
      highlight: "Developed viral content highlighting unique magical performances and character development",
      image: "/lovable-uploads/d1aba56a-5fc8-499f-94ee-2b54301bfe47.png"
    },
    {
      name: "The Mind Noodler",
      status: "Current Client", 
      description: "Mentalist and mind reader creating interactive experiences for live and digital audiences.",
      highlight: "Crafted compelling content showcasing incredible mentalism and audience participation",
      image: "/lovable-uploads/e8977bce-cd51-4909-ad6e-4269c557ea5f.png"
    },
    {
      name: "Vinny Grosso",
      status: "Current Client",
      description: "Multi-talented performer blending comedy, magic, and audience interaction.",
      highlight: "Built engaging social media presence through creative performance content",
      image: "/lovable-uploads/fb2d5ebb-a129-4f96-ae30-3b2930845b46.png"
    },
    {
      name: "Judge Mentalist",
      status: "Current Client",
      description: "Professional mentalist and performer known for incredible mind-reading abilities.",
      highlight: "Enhanced online presence with captivating mentalism content and audience engagement",
      image: "/lovable-uploads/dfe7a9a3-6658-440d-8031-02128dce36c5.png"
    }
  ];

  return (
    <div className="min-h-screen w-full max-w-full animate-gradient text-white overflow-x-hidden">
      {/* Floating orbs */}
      <div className="floating-orb w-96 h-96 top-10 -left-20 animate-float"></div>
      <div className="floating-orb w-64 h-64 top-1/2 -right-32 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="floating-orb w-48 h-48 bottom-20 left-1/4 animate-float" style={{animationDelay: '4s'}}></div>
      
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <div className="mx-auto mb-6 p-4 bg-black/30 rounded-full w-fit animate-float">
              <Users className="w-12 h-12 text-red-500" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Clients</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're proud to work with talented performers who trust us to amplify their unique artistry 
              and connect with audiences worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {clients.map((client, index) => (
              <Card key={index} className="dynamic-card h-full animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="aspect-square w-full overflow-hidden rounded-t-lg mb-4">
                  <img 
                    src={client.image} 
                    alt={client.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-white text-xl">{client.name}</CardTitle>
                    <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      client.status === 'Current Client' 
                        ? 'bg-green-600/20 text-green-400 border border-green-600/30' 
                        : 'bg-blue-600/20 text-blue-400 border border-blue-600/30'
                    }`}>
                      {client.status}
                    </div>
                  </div>
                  <CardDescription className="text-gray-400 text-sm">
                    {client.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-4 border-t border-gray-700">
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {client.highlight}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Clients;
