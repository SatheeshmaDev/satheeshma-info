import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    { name: "Programming in C", icon: "C" },
    { name: "Java Programming", icon: "Java" },
    { name: "MongoDB", icon: "MongoDB" },
    { name: "SQL", icon: "SQL" }
  ];

  return (
    <section id="certifications" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Professional certifications and achievements
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <Card
                key={cert.name}
                className="p-6 glow-effect-hover transition-all duration-300 border-primary/20 hover:border-primary/40"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">Certified</p>
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

export default Certifications;
