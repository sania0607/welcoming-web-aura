import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';
const Education = () => {
  const education = [{
    degree: "Bachelor's in Computer Science",
    institution: "University Name",
    location: "City, State",
    period: "2020 - 2024",
    description: "Focused on software development, algorithms, and web technologies. Maintained a strong GPA while participating in coding competitions and tech clubs.",
    achievements: ["Dean's List", "Programming Club President", "Hackathon Winner"]
  }];
  const certifications = [{
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "2023",
    icon: "🌐"
  }, {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "FreeCodeCamp",
    date: "2023",
    icon: "💻"
  }, {
    title: "React Developer Certification",
    issuer: "Meta",
    date: "2024",
    icon: "⚛️"
  }, {
    title: "UI/UX Design Fundamentals",
    issuer: "Google",
    date: "2024",
    icon: "🎨"
  }];
  return <section id="education" className="py-20 bg-gradient-to-b from-lavender/20 to-mint/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Education </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">Education</h3>
          <div className="space-y-8">
            {education.map((edu, index) => <div key={index} className="glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-lg text-purple-600 font-medium mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {edu.description}
                </p>
                
                
              </div>)}
          </div>
        </div>

        {/* Certifications Section */}
        
      </div>
    </section>;
};
export default Education;