
import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-white/10"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden profile-hover floating-animation border-4 border-white shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>

          {/* Hero Text */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Hi, I'm [Your Name]
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-light">
            Aspiring Web Developer & Tech Enthusiast
          </p>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional web experiences. 
            Currently learning modern technologies and building projects that solve real-world problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="mr-2" size={20} />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full transition-all duration-300"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-gray-700 hover:text-purple-600 hover:bg-white/40 transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-gray-700 hover:text-blue-600 hover:bg-white/40 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200/30 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-pink-200/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-blue-200/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default Hero;
