import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Solutions = () => {
  const mainSolutions = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built from scratch to meet your specific business requirements and goals.",
      features: ["Full-stack development", "API integration", "Database design", "Performance optimization"],
      popular: true
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android apps", "React Native", "Flutter", "App Store optimization"],
      popular: false
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to modernize your technology stack.",
      features: ["AWS/Azure/GCP", "Microservices", "DevOps", "Auto-scaling"],
      popular: true
    }
  ];

  const serviceCategories = [
    {
      title: "Staff Augmentation",
      description: "Extend your team with our skilled developers",
      icon: Users,
      benefits: ["Quick scaling", "Cost-effective", "Retain control", "Flexible contracts"]
    },
    {
      title: "Dedicated Teams",
      description: "Full-time dedicated development teams",
      icon: Zap,
      benefits: ["Complete focus", "Long-term partnership", "Agile methodology", "Direct communication"]
    },
    {
      title: "Software Outsourcing",
      description: "Complete project delivery from start to finish",
      icon: Shield,
      benefits: ["End-to-end delivery", "Risk mitigation", "Quality assurance", "On-time delivery"]
    }
  ];

  const technologies = [
    "React", "Node.js", "Python", "Java", "TypeScript", "AWS", "Docker", "Kubernetes",
    "MongoDB", "PostgreSQL", "GraphQL", "React Native", "Flutter", "TensorFlow"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-primary bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive software development services designed to accelerate your digital transformation 
            and drive business growth.
          </p>
        </div>

        {/* Main Solutions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {mainSolutions.map((solution, index) => (
            <Card key={index} className={`relative group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${solution.popular ? 'border-primary' : ''}`}>
              {solution.popular && (
                <Badge className="absolute -top-2 left-4 bg-primary text-white">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{solution.title}</CardTitle>
                <CardDescription>{solution.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Categories */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Engagement Models</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the engagement model that best fits your project requirements and business goals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center justify-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable, and future-ready solutions.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and find the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline">
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;