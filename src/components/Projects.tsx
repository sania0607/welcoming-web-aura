
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Student Grade Analyzer",
      description:
        "A data science tool built with Python, pandas, numpy, seaborn, and scikit-learn to analyze and visualize student grades, predict performance, and gain insights from educational datasets.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop", // student analysis image
      technologies: ["Python", "pandas", "numpy", "seaborn", "scikit-learn"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Student Grade Analyzer",
      description:
        "A robust system using Python, pandas, numpy, seaborn, and scikit-learn to analyze students' academic data, visualize trends in grades, predict future performance, and provide actionable insights for educators.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop", // data/code themed for student analytics
      technologies: ["Python", "pandas", "numpy", "seaborn", "scikit-learn"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "An intuitive weather dashboard that provides real-time weather data, forecasts, and beautiful visualizations with location-based services.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=300&fit=crop",
      technologies: ["React", "API Integration", "Chart.js", "CSS3"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-cream/30 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-300 text-purple-600 hover:bg-purple-50"
                  >
                    <Github size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

