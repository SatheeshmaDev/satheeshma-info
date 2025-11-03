import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code2, Brain } from "lucide-react";
const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px] animate-pulse-glow" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px] animate-pulse-glow" style={{
        animationDelay: '1s'
      }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-40 right-[15%] w-3 h-3 bg-secondary rounded-full animate-float" style={{
        animationDelay: '1s',
        animationDuration: '8s'
      }}></div>
        <div className="absolute bottom-32 left-[20%] w-2 h-2 bg-accent rounded-full animate-float" style={{
        animationDelay: '2s',
        animationDuration: '7s'
      }}></div>
        <div className="absolute bottom-48 right-[25%] w-1.5 h-1.5 bg-primary rounded-full animate-float" style={{
        animationDelay: '0.5s',
        animationDuration: '9s'
      }}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Status badge */}
          <div className="mb-8 inline-block animate-fade-in">
            <div className="glass-effect px-6 py-3 rounded-full inline-flex items-center gap-2 group hover:scale-105 transition-transform">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Available for Opportunities
              </span>
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in">
            Hi! I'm <br className="md:hidden" />
            <span className="gradient-text inline-block animate-gradient">SATHEESH M A</span>
          </h1>
          
          {/* Subtitle with icons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8 text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground animate-fade-in">
            <div className="flex items-center gap-2 group">
              <Brain className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:scale-110 transition-transform" />
              <span>AI & ML Developer</span>
            </div>
            <span className="text-primary">|</span>
            <div className="flex items-center gap-2 group">
              <Code2 className="w-6 h-6 md:w-8 md:h-8 text-secondary group-hover:scale-110 transition-transform" />
              <span>Web Developer</span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Building <span className="text-primary font-semibold">smart</span>, <span className="text-secondary font-semibold">data-driven</span>, and <span className="text-accent font-semibold">visually modern</span> digital experiences
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button size="lg" variant="gradient" className="text-base md:text-lg px-8 group" onClick={() => document.getElementById('projects')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              View My Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-base md:text-lg px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Contact Me
            </Button>
          </div>

          {/* Decorative tech stack pills */}
          <div className="mt-16 flex flex-wrap justify-center gap-3 opacity-60">
            {['Python', 'TensorFlow', 'React', 'JavaScript', 'Machine Learning'].map((tech, i) => <div key={tech} className="glass-effect px-4 py-2 rounded-full text-xs md:text-sm font-medium hover:opacity-100 transition-opacity" style={{
            animationDelay: `${i * 0.1}s`
          }}>
                {tech}
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;