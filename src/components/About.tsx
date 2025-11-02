import { Card } from "@/components/ui/card";
import { GraduationCap, Brain, Code } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Passionate about AI, ML, and creating intelligent solutions
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 glow-effect-hover transition-all duration-300 border-primary/20">
              <GraduationCap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Education</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>B.E. Computer Science and Engineering</strong><br />
                Specialization in AI & ML<br />
                Easwari Engineering College<br />
                <span className="text-primary">Class of 2027</span>
              </p>
            </Card>

            <Card className="p-8 glow-effect-hover transition-all duration-300 border-primary/20">
              <Brain className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Interests</h3>
              <p className="text-muted-foreground leading-relaxed">
                Artificial Intelligence<br />
                Machine Learning<br />
                Web Development<br />
                Problem Solving & Innovation
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <Code className="w-12 h-12 text-primary mb-4 mx-auto" />
            <p className="text-lg text-center leading-relaxed">
              I'm a passionate AI & ML developer with a strong interest in building intelligent systems 
              and solving real-world problems using data-driven approaches. With expertise spanning both 
              back-end intelligence and front-end design, I strive to create solutions that are not only 
              smart but also visually engaging and user-friendly.
            </p>
            <p className="text-center text-primary font-semibold mt-6 text-lg">
              "Let's build something intelligent together!"
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
