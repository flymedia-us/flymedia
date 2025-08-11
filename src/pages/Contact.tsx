import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail } from 'lucide-react';

const Contact = () => {

  document.title = 'Fly Media | Contact';

  return (
    <div className="min-h-screen animate-gradient text-white flex flex-col">
      <Header />
      <section className="flex-grow flex items-center justify-center px-4 pt-32 pb-20">
        <div className="container mx-auto max-w-xl animate-slide-up">
          <Card className="bg-black/60 backdrop-blur-md border border-red-600 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-bold mb-2">Contact Us</CardTitle>
              <p className="text-gray-300 text-lg">We'd love to hear from you!</p>
            </CardHeader>
            <CardContent className="space-y-6 mt-4">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-red-500" />
                <span className="font-semibold">Sam Friedman:</span>
                <a href="mailto:sam@flymedia.us" className="text-red-400 hover:underline">sam@flymedia.us</a>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-red-500" />
                <span className="font-semibold">Bennett Santora:</span>
                <a href="mailto:bennett@flymedia.us" className="text-red-400 hover:underline">bennett@flymedia.us</a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
