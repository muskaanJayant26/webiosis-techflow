import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, Users, Calendar } from "lucide-react";

const OurWork = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      description: "Complete redesign and development of a modern e-commerce platform with improved user experience and performance.",
      image: "/lovable-uploads/23406833-acac-4fe5-a7ce-9bbf22854357.png",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      stats: { users: "50K+", rating: 4.8, duration: "6 months" },
      type: "Web Development",
      status: "Completed"
    },
    {
      id: 2,
      title: "AI-Powered Analytics Dashboard",
      description: "Advanced analytics dashboard with machine learning capabilities for real-time business insights.",
      image: "/lovable-uploads/23406833-acac-4fe5-a7ce-9bbf22854357.png",
      tags: ["Python", "TensorFlow", "React", "PostgreSQL"],
      stats: { users: "10K+", rating: 4.9, duration: "8 months" },
      type: "AI Development",
      status: "Completed"
    },
    {
      id: 3,
      title: "Mobile Banking Application",
      description: "Secure mobile banking app with biometric authentication and real-time transaction processing.",
      image: "/lovable-uploads/23406833-acac-4fe5-a7ce-9bbf22854357.png",
      tags: ["React Native", "Node.js", "AWS", "Blockchain"],
      stats: { users: "100K+", rating: 4.7, duration: "12 months" },
      type: "Mobile Development",
      status: "Ongoing"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-primary bg-clip-text text-transparent">Work</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our portfolio of successful projects that have transformed businesses 
            and delivered exceptional results for our clients worldwide.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{project.type}</Badge>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{project.stats.users}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>{project.stats.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{project.stats.duration}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button className="w-full" variant="outline">
                  View Case Study
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our proven expertise 
            and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;