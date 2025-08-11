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
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://instagram.com/flymedia.us" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 rounded-full p-2 hover:scale-110 transition-transform">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="white"/><path d="M16.98 8.27a1.09 1.09 0 1 1-2.18 0 1.09 1.09 0 0 1 2.18 0ZM12 9.5A2.5 2.5 0 1 0 12 14.5 2.5 2.5 0 0 0 12 9.5Zm0 6.5a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm5.5-8.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="#E1306C"/></svg>
                </a>
                <a href="https://tiktok.com/@flymedia.us" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="bg-black rounded-full p-2 hover:scale-110 transition-transform">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="white"/><path d="M16.5 8.5c-.7 0-1.3-.2-1.8-.6V15c0 2-1.6 3.6-3.6 3.6S7.5 17 7.5 15s1.6-3.6 3.6-3.6c.2 0 .4 0 .6.1V13c-.2-.1-.4-.1-.6-.1-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2V7.5h1.5c.1.7.7 1.3 1.4 1.5v1.5z" fill="#000"/></svg>
                </a>
                <a href="https://facebook.com/flymedia.us" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-blue-600 rounded-full p-2 hover:scale-110 transition-transform">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="white"/><path d="M15.5 8.5h-2V7.5c0-.3.2-.5.5-.5h1.5V5h-2c-1.1 0-2 .9-2 2v1.5H8.5V11H11v6h2v-6h1.3l.2-2.5z" fill="#1877F3"/></svg>
                </a>
                <a href="https://snapchat.com/add/flymedia.us" target="_blank" rel="noopener noreferrer" aria-label="Snapchat" className="bg-yellow-400 rounded-full p-2 hover:scale-110 transition-transform">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="white"/><path d="M12 7c-2.2 0-4 1.8-4 4 0 1.7 1.1 3.1 2.7 3.7-.1.2-.2.4-.2.6 0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1c0-.2-.1-.4-.2-.6C14.9 14.1 16 12.7 16 11c0-2.2-1.8-4-4-4z" fill="#FFFC00"/></svg>
                </a>
                <a href="https://youtube.com/@TryFlyMedia" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="bg-red-600 rounded-full p-2 hover:scale-110 transition-transform">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="white"/><path d="M16.5 10.5c0-.8-.7-1.5-1.5-1.5h-6c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h6c.8 0 1.5-.7 1.5-1.5v-3zm-5 2.5v-2l2 1-2 1z" fill="#FF0000"/></svg>
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
            © 2025 Fly Media LLC. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2">
            7901 4th Street N Suite 300 St. Petersburg, FL 33702
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
