import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Vegetable Price Prediction",
      description: "Machine learning model predicting market prices for vegetables using historical data and market trends. Helps farmers and vendors make informed decisions.",
      tech: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "AllerGo",
      description: "Health-focused application for allergy detection and management. Provides personalized recommendations and tracks allergen exposure.",
      tech: ["React", "JavaScript", "Health API", "UI/UX"],
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Student Management System",
      description: "Comprehensive web-based platform for managing academic records, student data, and administrative tasks efficiently.",
      tech: ["HTML", "CSS", "JavaScript", "Database"],
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Some of my recent work and experiments
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="p-6 glow-effect-hover transition-all duration-300 border-primary/20 group overflow-hidden relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open('https://github.com/satheeshma', '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
