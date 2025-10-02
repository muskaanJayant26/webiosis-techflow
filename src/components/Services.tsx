import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Smartphone, 
  Brain, 
  Cloud, 
  Shield, 
  Database,
  Zap,
  Users
} from "lucide-react";
import servicesImage from "@/assets/services-grid.jpg";

const Services = () => {
  const additionalServices = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "DevOps & CI/CD",
      description: "Streamline development with automated pipelines, continuous integration, and deployment automation.",
      technologies: ["Jenkins", "GitLab CI", "CircleCI", "ArgoCD"],
      popular: false
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Staff Augmentation",
      description: "Extend your team with our pre-vetted software engineers to meet project demands and deadlines.",
      technologies: ["Flexible Teams", "Quick Onboarding", "Timezone Match", "Agile"],
      popular: true
    }
  ];

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Software Development",
      description: "Full-stack web applications, enterprise software, and scalable solutions tailored to your business needs.",
      technologies: ["React", "Node.js", "Python", "Java"],
      popular: true
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      popular: false
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by AI, machine learning models, and data analytics to drive business insights.",
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "AWS ML"],
      popular: true
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Solutions",
      description: "Cloud migration, serverless architecture, and scalable infrastructure on AWS, Azure, and Google Cloud.",
      technologies: ["AWS", "Azure", "GCP", "Docker"],
      popular: false
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions, penetration testing, and compliance frameworks to protect your assets.",
      technologies: ["Security Audit", "Encryption", "GDPR", "SOC2"],
      popular: false
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Engineering",
      description: "Big data processing, ETL pipelines, and real-time analytics to unlock the power of your data.",
      technologies: ["Apache Spark", "Kafka", "MongoDB", "PostgreSQL"],
      popular: true
    }
  ];

  const allServices = [...services, ...additionalServices];

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <Badge variant="secondary" className="mb-4">
            Our Expertise
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            From Concept to Completion
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            We offer end-to-end technology solutions powered by our elite team of engineers,
            delivering exceptional results across every phase of your project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {allServices.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-elegant transition-smooth border-border/50 hover:border-primary/20 relative overflow-hidden h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <div className="absolute top-4 right-4">
                  <Badge className="gradient-primary text-white">
                    <Zap className="h-3 w-3 mr-1" />
                    Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4 flex-grow">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 md:p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-smooth">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-lg md:text-xl group-hover:text-primary transition-smooth">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm md:text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Users className="h-4 w-4" />
            Trusted by 500+ companies worldwide
          </div>
          <h3 className="text-2xl font-semibold mb-4">
            Ready to accelerate your next project?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how our expert team can help you build innovative solutions
            that drive your business forward.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;