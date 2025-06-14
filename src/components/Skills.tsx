
import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Brain, Image } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      skills: ["HTML5 & CSS3", "JavaScript (ES6+)", "React.js", "TypeScript", "Tailwind CSS", "Responsive Design"]
    },
    {
      title: "Backend Development", 
      icon: <Server className="w-6 h-6" />,
      skills: [
        "Python",
        "Flask",
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "GraphQL",
        "Authentication",
        "pandas",
        "seaborn"
      ]
    },
    {
      title: "Database & Tools",
      icon: <Database className="w-6 h-6" />,
      skills: [
        "MongoDB",
        "PostgreSQL",
        "Git & GitHub",
        "VS Code",
        "Figma",
        "Postman",
        "pandas",
        "seaborn"
      ]
    }
    // Removed "Mobile & Emerging" card as requested
  ];

  const certifications = [
    {
      title: "freeCodeCamp Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2024",
      status: "Completed",
      image: null // placeholder for certificate image
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp", 
      date: "2024",
      status: "In Progress",
      image: null // placeholder for certificate image
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2024",
      status: "Planned",
      image: null // placeholder for certificate image
    }
  ];

  return (
    <section id="skills" className="pt-16 py-20 bg-gradient-to-br from-cream via-mint to-lavender relative overflow-hidden">
      <style>
        {`
          @keyframes skillPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          .skill-card:hover .skill-icon {
            animation: skillPulse 1s ease-in-out infinite;
          }
        `}
      </style>
      <div className="absolute inset-0 bg-white/40"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Continuously learning and building expertise in modern web development technologies
          </p>
        </div>
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 justify-items-center">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="skill-card glass-card rounded-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-icon mb-4 p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full w-fit">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-sm text-gray-600 flex items-center">
                    <Code className="w-3 h-3 mr-2 text-purple-400" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Certifications Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Certifications & Learning Path
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="glass-card rounded-xl p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Certificate Image Placeholder */}
              <div className="mb-4 aspect-video bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center hover:border-purple-400 transition-colors cursor-pointer group">
                {cert.image ? (
                  <img 
                    src={cert.image} 
                    alt={`${cert.title} certificate`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="text-center">
                    <Image className="w-8 h-8 text-gray-400 group-hover:text-purple-400 transition-colors mx-auto mb-2" />
                    <p className="text-xs text-gray-500 group-hover:text-purple-500 transition-colors">
                      Add certificate image
                    </p>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between mb-3">
                <Brain className="w-6 h-6 text-purple-500" />
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  cert.status === 'Completed' ? 'bg-green-100 text-green-600' :
                  cert.status === 'In Progress' ? 'bg-blue-100 text-blue-600' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {cert.status}
                </span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">{cert.title}</h4>
              <p className="text-sm text-gray-600 mb-1">{cert.issuer}</p>
              <p className="text-xs text-gray-500">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-purple-200/20 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-pink-200/20 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
    </section>
  );
};

export default Skills;
