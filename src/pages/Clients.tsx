
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siInstagram } from 'simple-icons';

import React, { useEffect } from 'react';

import SEO from '@/components/SEO';

const Clients = () => {

  const clients = [

    {
      name: "The Mind Noodler",
      status: "Current Client",
      description: "A quick-witted comedian and improviser who uses magic as a vehicle for hilarious, high-energy audience interaction. As head writer for Penn & Teller: Fool Us, his style is smart, irreverent, and always unpredictable.",
      highlight: "Craft compelling content showcasing incredible mentalism and audience participation.",
      image: "/lovable-uploads/The Mind Noodler.jpg",
      instagram: "https://www.instagram.com/mindnoodler/reels/",
      instagramLabel: "@mindnoodler"
    },
    {
      name: "Riccardo Berdini",
      status: "Current Client",
      description: "An award-winning Italian mentalist and corporate speaker who blends sophisticated mind-reading with a charismatic sense of humor. His unique offerings range from motivational keynotes to a full 'Music & Magic' show with a live band.",
      highlight: "Produce cinematic content to showcase Riccardo's unique blend of magic and narrative.",
      image: "/lovable-uploads/Riccardo Berdini.jpg",
      instagram: "https://www.instagram.com/riccardoberdini/reels/",
      instagramLabel: "@riccardoberdini"
    },
    {
      name: "Judge Mentalist",
      status: "Current Client",
      description: "A masterful mentalist who operates in the intriguing space between psychological illusion and psychic phenomena. His 'Psychic-ish' brand challenges audiences to question their own perceptions in a smart and captivating performance.",
      highlight: "Enhance online presence with captivating mentalism content and audience engagement",
      image: "/lovable-uploads/Judge Mentalist.jpg",
      instagram: "https://www.instagram.com/psychicish/reels/",
      instagramLabel: "@psychicish"
    },
    {
      name: "Mark Clearview",
      status: "Current Client",
      description: "A world-record-holding escape artist and comedy magician known for his jaw-dropping stunts and razor-sharp wit. A Golden Buzzer winner on Canada's Got Talent, his work blends extreme performance with philanthropy.",
      highlight: "Amplify reach with viral videos of jaw-dropping stunts and magical escapes.",
      image: "/lovable-uploads/Mark Clearview.jpg",
      instagram: "https://www.instagram.com/markclearview/reels/",
      instagramLabel: "@markclearview"
    },
    {
      name: "Siegfried Tieber",
      status: "Current Client",
      description: "An internationally acclaimed sleight-of-hand artist who creates intimate and mystifying experiences. A native of Ecuador, his masterful technique fooled Penn & Teller and earned his show the #1 spot in New York City.",
      highlight: "Amplify reach with viral videos of jaw-dropping stunts and magical escapes.",
      image: "/lovable-uploads/Siegfried Tieber.jpg",
      instagram: "https://www.instagram.com/siegfriedtieber/reels/",
      instagramLabel: "@siegfriedtieber"
    },
    {
      name: "Jamie Allen",
      status: "Current Client",
      description: "A theatrical innovator and the UK's original technology magician, known for fusing cutting-edge digital illusions with heartfelt, autobiographical storytelling. His hit show 'Amaze' is a journey through his life in magic.",
      highlight: "Amplify reach with viral videos of jaw-dropping stunts and magical escapes.",
      image: "/lovable-uploads/Jamie Allen.jpg",
      instagram: "https://www.instagram.com/amazelive/reels/",
      instagramLabel: "@amazelive"
    },

    {
      name: "Lionel Dellberg",
      status: "Current Client",
      description: "A charismatic Swiss magician and cabaret artist who delights international audiences with his humor and charm. A Fool Us trophy winner, he performs his amazing magic in over four languages.",
      highlight: "Amplify reach with viral videos of jaw-dropping stunts and magical escapes.",
      image: "/lovable-uploads/Lionel Dellberg.jpg",
      instagram: "https://www.instagram.com/lioneldellberg/reels/",
      instagramLabel: "@lioneldellberg"
    },
    {
      name: "Vinny Grosso",
      status: "Former Client",
      description: "A Las Vegas headliner, comedian, and world-record holder who twice fooled Penn & Teller. His hit show, Totally Mental, is a high-energy blend of comedy, mind-reading, and unforgettable stunts.",
      highlight: "Build engaging social media presence through creative performance content",
      image: "/lovable-uploads/Vinny Grosso.jpg",
      instagram: "https://www.instagram.com/vinnygrosso/reels/",
      instagramLabel: "@vinnygrosso"
    },
    {
      name: "Bernini Magic",
      status: "Former Client",
      description: "A Penn & Teller: Fool Us winner who delivers world-class magic for top corporate clients and major faith-based organizations. His performances blend mind-bending illusion with powerful, tailored messaging.",
      highlight: "Create engaging content showcasing mind-bending illusions and audience reactions",
      image: "/lovable-uploads/Bernini Magic.jpg",
      instagram: "https://www.instagram.com/berninimagic/reels/",
      instagramLabel: "@berninimagic"
    },
    {
      name: "Nathan Coe Marsh",
      status: "Former Client",
      description: "A polished and hilarious professional magician, known for his comedic style and regular headline performances at Hollywood's Magic Castle. He is also a respected columnist for the industry's top trade journal, Genii.",
      highlight: "Help Nathan connect with new audiences through creative, interactive social content.",
      image: "/lovable-uploads/Nathan Coe Marsh.jpg",
      instagram: "https://www.instagram.com/nathan_coe_marsh/reels/",
      instagramLabel: "@nathan_coe_marsh"
    },
    {
      name: "Stunt Magician",
      status: "Former Client",
      description: "A high-energy comedy magician and stunt artist who starred in the TruTV series Big Trick Energy. A Penn & Teller: Fool Us winner, his act is a relentless combination of hilarious audience interaction and daring physical stunts.",
      highlight: "Amplify reach with viral videos of jaw-dropping stunts and magical escapes.",
      image: "/lovable-uploads/Stunt Magician.jpg",
      instagram: "https://www.instagram.com/stuntmagician/reels/",
      instagramLabel: "@stuntmagician"
    },
    {
      name: "The Passing Zone",
      status: "Former Client",
      description: "A world-renowned comedy juggling duo holding five Guinness World Records. Two-time finalists on America's Got Talent, they deliver hilarious, high-stakes performances and powerful keynotes on teamwork to top corporations.",
      highlight: "Helped amplify their viral comedy juggling content across multiple platforms",
      image: "/lovable-uploads/The Passing Zone.jpg",
      instagram: "https://www.instagram.com/thepassingzone/reels/",
      instagramLabel: "@thepassingzone"
    },
    {
      name: "Magical Bones",
      status: "Former Client",
      description: "A truly unique performer who seamlessly blends breathtaking magic with his skills as a professional b-boy (breakdancer). A finalist on Britain's Got Talent, his soulful style combines high-energy dance with powerful storytelling.",
      highlight: "Developed viral content highlighting unique magical performances and character development",
      image: "/lovable-uploads/Magical Bones.jpg",
      instagram: "https://www.instagram.com/magicalbones/reels/",
      instagramLabel: "@magicalbones"
    }
  ];

  return (
    <div className="min-h-screen w-full max-w-full animate-gradient text-white overflow-x-hidden">
      <SEO title="Clients" description="See the amazing performers who trust Fly Media." />
      {/* Floating orbs */}
      <div className="floating-orb w-96 h-96 top-10 -left-20 animate-float"></div>
      <div className="floating-orb w-64 h-64 top-1/2 -right-32 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="floating-orb w-48 h-48 bottom-20 left-1/4 animate-float" style={{ animationDelay: '4s' }}></div>

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
                        <div className={`px-2 py-1 rounded-full text-xs font-semibold ${client.status === 'Current Client'
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
                      {/* <div className="flex items-start space-x-3">
                        <Star className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {client.highlight}
                        </p>
                      </div> */}
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
