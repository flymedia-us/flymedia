
const Footer = () => {
  return (
    <footer className="bg-black border-t border-red-900/20 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold gradient-text mb-4">
              FLY MEDIA
            </div>
            <p className="text-gray-400 max-w-md">
              Transforming performers into viral sensations across all major social media platforms. 
              Your talent deserves the biggest stage.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-red-500 transition-colors">Video Editing</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Cross-Platform Posting</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Viral Strategy</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Analytics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Platforms</h4>
            <ul className="space-y-2 text-gray-400">
              <li>TikTok</li>
              <li>Instagram Reels</li>
              <li>YouTube Shorts</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-red-900/20 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © 2024 Fly Media. All rights reserved. Ready to go viral?
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
