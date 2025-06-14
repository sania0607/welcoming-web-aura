
import React from 'react';
import { Heart, Code, Coffee, Lightbulb } from 'lucide-react';

const About = () => {
  const interests = [{
    icon: Code,
    text: "Web Development",
    color: "text-purple-500"
  }, {
    icon: Lightbulb,
    text: "Problem Solving",
    color: "text-yellow-500"
  }, {
    icon: Heart,
    text: "User Experience",
    color: "text-pink-500"
  }, {
    icon: Coffee,
    text: "Continuous Learning",
    color: "text-blue-500"
  }];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-cream/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="animate-slide-in-left">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
            Hello! I'm Sania Rajput, passionate about creating digital experiences.
          </h3>
          
          <div className="space-y-4 text-gray-600 leading-relaxed max-w-full">
            <p>
              I'm an aspiring web developer with a love for clean code, beautiful design, and continuous personal growth. 
              My journey into tech started with curiosity and has grown into a genuine passion 
              for solving problems through technology. Recently, I've also started learning about Artificial Intelligence (AI) and Machine Learning (ML), 
              and I'm excited by the possibilities these fields bring!
            </p>
            
            <p>
              Currently, I'm focused on mastering modern web technologies like React, 
              TypeScript, and Node.js, as well as expanding my knowledge of AI and ML concepts. I believe in continuous learning and staying 
              up-to-date with the latest industry trends.
            </p>
            
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing my learning journey 
              with the developer community.
            </p>
          </div>

          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-4 text-gray-800 text-center">What I'm passionate about:</h4>
            <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
              {interests.map((interest, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-white/50 backdrop-blur-sm">
                  <interest.icon className={`${interest.color}`} size={20} />
                  <span className="text-sm font-medium text-gray-700">{interest.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
