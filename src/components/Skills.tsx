import { Card } from "@/components/ui/card";
import { Code2, Database, Globe, Brain, Coffee } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      icon: Code2,
      level: 90,
      color: "text-orange-500"
    },
    {
      name: "CSS3",
      icon: Code2,
      level: 85,
      color: "text-blue-500"
    },
    {
      name: "JavaScript",
      icon: Globe,
      level: 88,
      color: "text-yellow-500"
    },
    {
      name: "Machine Learning",
      icon: Brain,
      level: 80,
      color: "text-primary"
    },
    {
      name: "Java",
      icon: Coffee,
      level: 75,
      color: "text-red-500"
    },
    {
      name: "React (Learning)",
      icon: Globe,
      level: 65,
      color: "text-cyan-500"
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Technologies and tools I work with
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <Card 
                  key={skill.name}
                  className="p-6 glow-effect-hover transition-all duration-300 border-primary/20 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-primary/10 ${skill.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{skill.name}</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
