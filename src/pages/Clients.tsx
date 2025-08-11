
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siInstagram } from 'simple-icons/icons';

import React, { useEffect } from 'react';

const Clients = () => {

document.title = 'Fly Media | Clients';

  const clients = [
    {
      name: "Bernini Magic",
      status: "Current Client", 
      description: "Professional magician specializing in close-up magic and mentalism performances.",
      highlight: "Create engaging content showcasing mind-bending illusions and audience reactions",
      image: "/lovable-uploads/Bernini Magic.jpg",
      instagram: "https://www.instagram.com/berninimagic/reels/",
      instagramLabel: "@berninimagic"
    },
    {
      name: "The Mind Noodler",
      status: "Current Client", 
      description: "Mentalist and mind reader creating interactive experiences for live and digital audiences.",
      highlight: "Craft compelling content showcasing incredible mentalism and audience participation",
      image: "/lovable-uploads/The Mind Noodler.jpg",
      instagram: "https://www.instagram.com/mindnoodler/reels/",
      instagramLabel: "@mindnoodler"
    },
    {
      name: "Vinny Grosso",
      status: "Current Client",
      description: "Multi-talented performer blending comedy, magic, and audience interaction.",
      highlight: "Build engaging social media presence through creative performance content",
      image: "/lovable-uploads/Vinny Grosso.jpg",
      instagram: "https://www.instagram.com/vinnygrosso/reels/",
      instagramLabel: "@vinnygrosso"
    },
    {
      name: "Judge Mentalist",
      status: "Current Client",
      description: "Professional mentalist and performer known for incredible mind-reading abilities.",
      highlight: "Enhance online presence with captivating mentalism content and audience engagement",
      image: "/lovable-uploads/Judge Mentalist.jpg",
      instagram: "https://www.instagram.com/psychicish/reels/",
      instagramLabel: "@psychicish"
    },
    {
      name: "Riccardo Berdini",
      status: "Current Client",
      description: "Award-winning magician and mentalist known for cinematic storytelling and mind-blowing illusions.",
      highlight: "Produce cinematic content to showcase Riccardo's unique blend of magic and narrative.",
      image: "/lovable-uploads/Riccardo Berdini.jpg",
      instagram: "https://www.instagram.com/riccardoberdini/reels/",
      instagramLabel: "@riccardoberdini"
    },
    {
      name: "Stunt Magician",
      status: "Current Client",
      description: "Extreme illusionist performing daring stunts and high-impact magic for live and digital audiences.",
      highlight: "Amplify reach with viral videos of jaw-dropping stunts and magical escapes.",
      image: "/lovable-uploads/Stunt Magician.jpg",
      instagram: "https://www.instagram.com/stuntmagician/reels/",
      instagramLabel: "@stuntmagician"
    },
    {
      name: "Nathan Coe Marsh",
      status: "Current Client",
      description: "Acclaimed magician and entertainer specializing in interactive and innovative performances.",
      highlight: "Help Nathan connect with new audiences through creative, interactive social content.",
      image: "/lovable-uploads/Nathan Coe Marsh.jpg",
      instagram: "https://www.instagram.com/nathan_coe_marsh/reels/",
      instagramLabel: "@nathan_coe_marsh"
    },
    {
      name: "The Passing Zone",
      status: "Former Client",
      description: "Comedy juggling duo known for their high-energy performances and television appearances.",
      highlight: "Helped amplify their viral comedy juggling content across multiple platforms",
      image: "/lovable-uploads/The Passing Zone.jpg",
      instagram: "https://www.instagram.com/thepassingzone/reels/",
      instagramLabel: "@thepassingzone"
    },
    {
      name: "Magical Bones",
      status: "Former Client",
      description: "Dynamic performer combining magic with theatrical storytelling and character work.",
      highlight: "Developed viral content highlighting unique magical performances and character development",
      image: "/lovable-uploads/Magical Bones.jpg",
      instagram: "https://www.instagram.com/magicalbones/reels/",
      instagramLabel: "@magicalbones"
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {clients.map((client, index) => (
              <Card key={index} className="dynamic-card h-full">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-1/2 aspect-square md:aspect-auto overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                    <img 
                      src={client.image} 
                      alt={client.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 flex flex-col">
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
                    <CardContent className="pt-4 border-t border-gray-700 flex-grow flex flex-col gap-4">
                      <div className="flex items-start space-x-3">
                        <Star className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {client.highlight}
                        </p>
                      </div>
                      {client.instagram && (
                        <Button 
                          asChild 
                          className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white mt-2"
                        >
                          <a 
                            href={client.instagram} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center"
                          >
                            <span className="mr-2 w-5 h-5 flex items-center justify-center">
                              <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d={siInstagram.path} />
                              </svg>
                            </span>
                            {client.instagramLabel}
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </div>
                </div>
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
