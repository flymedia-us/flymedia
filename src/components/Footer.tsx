import { SOCIAL_LINKS, COMPANY_INFO } from '@/config/constants';
import { siInstagram, siTiktok, siFacebook, siSnapchat, siYoutube, siX } from 'simple-icons';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-red-900/20 py-12 px-6 pb-32 md:pb-12">
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
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 rounded-full p-2 hover:scale-110 transition-transform">
                  <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg"><path d={siInstagram.path} /></svg>
                </a>
                <a href={SOCIAL_LINKS.TIKTOK} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="bg-black rounded-full p-2 hover:scale-110 transition-transform">
                  <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg"><path d={siTiktok.path} /></svg>
                </a>
                <a href={SOCIAL_LINKS.FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-[#1877F2] rounded-full p-2 hover:scale-110 transition-transform">
                  <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg"><path d={siFacebook.path} /></svg>
                </a>
                <a href={SOCIAL_LINKS.SNAPCHAT} target="_blank" rel="noopener noreferrer" aria-label="Snapchat" className="bg-[#FFFC00] rounded-full p-2 hover:scale-110 transition-transform">
                  <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg"><path d={siSnapchat.path} /></svg>
                </a>
                <a href={SOCIAL_LINKS.YOUTUBE} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="bg-[#FF0000] rounded-full p-2 hover:scale-110 transition-transform">
                  <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg"><path d={siYoutube.path} /></svg>
                </a>
                <a href={SOCIAL_LINKS.X} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="bg-black rounded-full p-2 hover:scale-110 transition-transform">
                  <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg"><path d={siX.path} /></svg>
                </a>
              </div>
            </div>
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
              <li>YouTube Shorts</li>
              <li>TikTok</li>
              <li>Instagram Reels</li>
              <li>Facebook Reels</li>
              <li>Snapchat Spotlight</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-900/20 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            {COMPANY_INFO.COPYRIGHT}
          </p>
          <p className="text-gray-500 mt-2">
            {COMPANY_INFO.ADDRESS}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
