import React from 'react';
import { Heart, Code } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gradient-to-r from-purple-900 via-pink-800 to-purple-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-lg">Made with</span>
            <Heart className="text-pink-300" size={20} fill="currentColor" />
            <span className="text-lg">and</span>
            <Code className="text-blue-300" size={20} />
            <span className="text-lg">by [Your Name]</span>
          </div>
          
          <p className="text-purple-200 mb-4">
            Passionate about creating beautiful web experiences
          </p>
          
          <div className="flex justify-center space-x-8 text-sm text-purple-300">
            <span>© 2025 Portfolio</span>
            
            
            
            <span>Designed with ❤️</span>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;