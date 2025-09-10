import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, Users, Clock, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A comprehensive online marketplace with advanced features including real-time inventory, AI-powered recommendations, and seamless payment processing.",
      image: "/lovable-uploads/23406833-acac-4fe5-a7ce-9bbf22854357.png",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      stats: { users: "50K+", rating: 4.8, duration: "6 months" },
      type: "Web Application",
      status: "Live"
    },
    {
      id: 2,
      title: "AI-Powered Analytics Dashboard",
      description: "Advanced business intelligence platform with machine learning insights, predictive analytics, and real-time data visualization for enterprise clients.",
      image: "/lovable-uploads/23406833-acac-4fe5-a7ce-9bbf22854357.png",
      tags: ["Python", "TensorFlow", "React", "D3.js", "PostgreSQL"],
      stats: { users: "25K+", rating: 4.9, duration: "8 months" },
      type: "Analytics Platform",
      status: "Live"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking solution with biometric authentication, instant transfers, and comprehensive financial management tools.",
      image: "/lovable-uploads/23406833-acac-4fe5-a7ce-9bbf22854357.png",
      tags: ["React Native", "Node.js", "Blockchain", "AWS", "Biometrics"],
      stats: { users: "100K+", rating: 4.7, duration: "10 months" },
      type: "Mobile Application",
      status: "Live"
    },
    {
      id: 4,
      title: "Smart IoT Platform",
      description: "Complete IoT ecosystem for smart cities including device management, real-time monitoring, and predictive maintenance capabilities.",
      image: "/lovable-uploads/23406833-acac-4fe5-a7ce-9bbf22854357.png",
      tags: ["Vue.js", "Python", "MQTT", "Docker", "Kubernetes"],
      stats: { users: "15K+", rating: 4.6, duration: "12 months" },
      type: "IoT Platform",
      status: "Development"
    },
    {
      id: 5,
      title: "Healthcare Management System",
      description: "Comprehensive healthcare platform with patient records, appointment scheduling, telemedicine, and clinical decision support systems.",
      image: "/lovable-uploads/23406833-acac-4fe5-a7ce-9bbf22854357.png",
      tags: ["Angular", "Java", "Spring", "PostgreSQL", "HIPAA"],
      stats: { users: "75K+", rating: 4.8, duration: "14 months" },
      type: "Healthcare Platform",
      status: "Live"
    },
    {
      id: 6,
      title: "EdTech Learning Platform",
      description: "Interactive online learning platform with AI tutoring, progress tracking, gamification, and collaborative learning features.",
      image: "/lovable-uploads/23406833-acac-4fe5-a7ce-9bbf22854357.png",
      tags: ["Next.js", "Python", "AI/ML", "WebRTC", "Redis"],
      stats: { users: "200K+", rating: 4.9, duration: "9 months" },
      type: "Education Platform",
      status: "Live"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Our Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-6">
            Transforming Ideas into Digital Reality
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our carefully crafted projects that showcase innovation, technical excellence, and 
            user-centric design across various industries and technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-border/50 hover:border-primary/20 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={project.status === "Live" ? "default" : "secondary"}
                    className={project.status === "Live" ? "bg-green-500 hover:bg-green-600" : ""}
                  >
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs text-primary border-primary/30">
                    {project.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{project.stats.users}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{project.stats.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{project.stats.duration}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 3} more
                    </Badge>
                  )}
                </div>

                {/* Action Button */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  View Case Study
                  <TrendingUp className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their business with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-white shadow-primary hover:shadow-lg transition-all">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline">
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;