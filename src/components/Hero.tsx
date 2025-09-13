import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Tech team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Accelerate Your
              <span className="block gradient-primary bg-clip-text text-transparent">
                Digital Future
              </span>
              With Elite Tech Talent
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
              Access 5,000+ world-class software engineers and data scientists. 
              Build faster, scale smarter, and innovate without limits.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-primary text-white font-semibold shadow-primary hover:shadow-secondary transition-smooth group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-border hover:bg-accent transition-smooth group"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">5,000+</div>
                <div className="text-sm text-muted-foreground">Expert Developers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">40+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>

          <div className="lg:block hidden animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-3xl blur-3xl opacity-20 animate-pulse-glow" />
              <div className="relative glassmorphism rounded-3xl p-8 shadow-glass">
                <h3 className="text-xl font-semibold mb-4">Technologies We Master</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    "React", "Node.js", "Python", "AI/ML", "Cloud", "Mobile",
                    "DevOps", "Blockchain", "IoT"
                  ].map((tech) => (
                    <div
                      key={tech}
                      className="bg-accent/50 rounded-lg px-3 py-2 text-sm font-medium text-center hover:bg-accent transition-smooth"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl floating-3d" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-xl floating-3d" style={{ animationDelay: '2s' }} />
      
      {/* 3D Geometric Shapes */}
      <div className="absolute top-1/3 left-1/6 w-16 h-16 cube-3d opacity-60">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg transform rotate-12"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-secondary/25 to-primary/25 rounded-lg transform -rotate-6 translate-x-2 translate-y-2"></div>
      </div>
      
      <div className="absolute bottom-1/3 right-1/6 w-20 h-20 cube-3d opacity-50" style={{ animationDelay: '1s' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/35 to-primary/35 rounded-xl transform rotate-45"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-primary/30 to-secondary/30 rounded-xl transform -rotate-12 translate-x-3 translate-y-3"></div>
      </div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          animation: 'float 8s ease-in-out infinite'
        }}></div>
      </div>
    </section>
  );
};

export default Hero;