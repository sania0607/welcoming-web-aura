
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML/CSS", level: 90, color: "from-orange-400 to-red-500" },
        { name: "JavaScript", level: 85, color: "from-yellow-400 to-orange-500" },
        { name: "React", level: 80, color: "from-blue-400 to-blue-600" },
        { name: "TypeScript", level: 75, color: "from-blue-600 to-purple-600" }
      ]
    },
    {
      title: "Design & Tools",
      skills: [
        { name: "Figma", level: 70, color: "from-purple-400 to-pink-500" },
        { name: "Git/GitHub", level: 85, color: "from-gray-600 to-gray-800" },
        { name: "Responsive Design", level: 90, color: "from-green-400 to-blue-500" },
        { name: "Tailwind CSS", level: 88, color: "from-cyan-400 to-blue-500" }
      ]
    },
    {
      title: "Currently Learning",
      skills: [
        { name: "Node.js", level: 60, color: "from-green-500 to-green-700" },
        { name: "MongoDB", level: 55, color: "from-green-600 to-emerald-600" },
        { name: "Next.js", level: 65, color: "from-gray-700 to-black" },
        { name: "Docker", level: 40, color: "from-blue-500 to-blue-700" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-lavender/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies I work with and areas I'm continuously improving
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-800 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-gray-600">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out transform origin-left`}
                        style={{
                          width: `${skill.level}%`,
                          animation: `skillBar${categoryIndex}${skillIndex} 1.5s ease-out ${skillIndex * 0.2}s forwards`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">
            Certifications & Learning
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "FreeCodeCamp Responsive Web Design",
              "JavaScript Algorithms Certification",
              "React Development Course",
              "UI/UX Design Fundamentals"
            ].map((cert, index) => (
              <div 
                key={index}
                className="glass-card rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <p className="text-sm font-medium text-gray-700">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes skillBar00 { from { width: 0%; } to { width: 90%; } }
        @keyframes skillBar01 { from { width: 0%; } to { width: 85%; } }
        @keyframes skillBar02 { from { width: 0%; } to { width: 80%; } }
        @keyframes skillBar03 { from { width: 0%; } to { width: 75%; } }
        @keyframes skillBar10 { from { width: 0%; } to { width: 70%; } }
        @keyframes skillBar11 { from { width: 0%; } to { width: 85%; } }
        @keyframes skillBar12 { from { width: 0%; } to { width: 90%; } }
        @keyframes skillBar13 { from { width: 0%; } to { width: 88%; } }
        @keyframes skillBar20 { from { width: 0%; } to { width: 60%; } }
        @keyframes skillBar21 { from { width: 0%; } to { width: 55%; } }
        @keyframes skillBar22 { from { width: 0%; } to { width: 65%; } }
        @keyframes skillBar23 { from { width: 0%; } to { width: 40%; } }
      `}</style>
    </section>
  );
};

export default Skills;
