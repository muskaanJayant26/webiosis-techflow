import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Users, 
  Globe, 
  Clock,
  TrendingUp,
  Target,
  Heart
} from "lucide-react";
import techBg from "@/assets/tech-bg.jpg";

const About = () => {
  const stats = [
    { 
      icon: <Users className="h-6 w-6" />, 
      number: "5,000+", 
      label: "Expert Engineers",
      description: "Top 1% talent worldwide"
    },
    { 
      icon: <Globe className="h-6 w-6" />, 
      number: "40+", 
      label: "Countries Served",
      description: "Global reach, local expertise"
    },
    { 
      icon: <Award className="h-6 w-6" />, 
      number: "98%", 
      label: "Success Rate",
      description: "Projects delivered on time"
    },
    { 
      icon: <Clock className="h-6 w-6" />, 
      number: "24/7", 
      label: "Support Available",
      description: "Round-the-clock assistance"
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence First",
      description: "We maintain the highest standards in everything we do, ensuring exceptional quality in every line of code."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering solutions that drive real business value."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Innovation Drive",
      description: "We stay ahead of the curve, leveraging cutting-edge technologies to solve tomorrow's challenges today."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={techBg}
          alt="Technology background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <Badge variant="secondary" className="mb-4">
            About TechFlow
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Building the Future of
            <span className="gradient-primary bg-clip-text text-transparent"> Technology</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            For over a decade, we've been at the forefront of digital transformation, 
            helping companies worldwide harness the power of technology to achieve their goals.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-20">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="text-center p-6 border-border/50 hover:border-primary/20 transition-smooth group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-smooth">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values Section */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-20">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Our Core Values</h3>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
              These principles guide everything we do, from how we select our team 
              to how we approach every project and client relationship.
            </p>
            
            <div className="space-y-6">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="flex gap-4 animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-scale-in">
            <Card className="p-8 gradient-card border-0 shadow-glass">
              <h4 className="text-2xl font-bold mb-4">Why Choose TechFlow?</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Rigorous vetting process - only top 1% of candidates</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Timezone-aligned teams for seamless collaboration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Proven track record with Fortune 500 companies</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Agile methodologies and continuous delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Comprehensive support throughout project lifecycle</span>
                </div>
              </div>
              
              <div className="mt-8">
                <Button variant="outline" className="w-full">
                  Learn More About Our Process
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Team CTA */}
        <div className="text-center animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to work with world-class talent?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that trust TechFlow to accelerate their digital transformation 
            and deliver exceptional results.
          </p>
          <Button size="lg" className="gradient-primary text-white font-semibold shadow-primary">
            Start Your Project Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;