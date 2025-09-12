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
  CheckCircle,
  Brain,
  Database,
  Target,
  TrendingUp,
  Award,
  Clock,
  Layers,
  Settings
} from "lucide-react";

const Solutions = () => {
  const mainSolutions = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built from scratch to meet your specific business requirements and goals.",
      features: ["Full-stack development", "API integration", "Database design", "Performance optimization"],
      popular: true,
      stats: { projects: "300+", satisfaction: "99%", timeline: "30% faster" }
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android apps", "React Native", "Flutter", "App Store optimization"],
      popular: false,
      stats: { projects: "200+", satisfaction: "98%", timeline: "25% faster" }
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to modernize your technology stack.",
      features: ["AWS/Azure/GCP", "Microservices", "DevOps", "Auto-scaling"],
      popular: true,
      stats: { projects: "400+", satisfaction: "99%", timeline: "40% faster" }
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence and machine learning capabilities.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Deep Learning"],
      popular: false,
      stats: { projects: "80+", satisfaction: "97%", timeline: "50% faster" }
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Threat Detection"],
      popular: false,
      stats: { projects: "150+", satisfaction: "99%", timeline: "35% faster" }
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Build robust data pipelines and analytics platforms for data-driven business insights.",
      features: ["Data Warehousing", "ETL Pipelines", "Real-time Analytics", "Business Intelligence"],
      popular: true,
      stats: { projects: "120+", satisfaction: "98%", timeline: "45% faster" }
    }
  ];

  const serviceCategories = [
    {
      title: "Staff Augmentation",
      description: "Extend your team with our skilled developers",
      icon: Users,
      benefits: ["Quick scaling", "Cost-effective", "Retain control", "Flexible contracts"],
      pricing: "From $30/hour",
      timeline: "1-2 weeks"
    },
    {
      title: "Dedicated Teams",
      description: "Full-time dedicated development teams",
      icon: Zap,
      benefits: ["Complete focus", "Long-term partnership", "Agile methodology", "Direct communication"],
      pricing: "From $8,000/month",
      timeline: "2-3 weeks"
    },
    {
      title: "Software Outsourcing",
      description: "Complete project delivery from start to finish",
      icon: Shield,
      benefits: ["End-to-end delivery", "Risk mitigation", "Quality assurance", "On-time delivery"],
      pricing: "Project-based",
      timeline: "1-2 weeks"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, define scope, and create a detailed project roadmap with clear milestones.",
      duration: "1-2 weeks",
      deliverables: ["Requirements Document", "Technical Specification", "Project Timeline"]
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Our team creates system architecture, UI/UX designs, and technical documentation.",
      duration: "2-3 weeks",
      deliverables: ["System Architecture", "UI/UX Designs", "Technical Documentation"]
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous integration, testing, and regular client updates.",
      duration: "8-16 weeks",
      deliverables: ["Working Software", "Test Results", "Documentation"]
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Production deployment with monitoring, maintenance, and ongoing support services.",
      duration: "Ongoing",
      deliverables: ["Production Deployment", "Monitoring Setup", "Support Documentation"]
    }
  ];

  const industrySpecific = [
    {
      industry: "Healthcare",
      solutions: ["HIPAA Compliance", "Telemedicine", "Patient Portals", "Medical Records"],
      clients: "50+ healthcare providers",
      compliance: "100% HIPAA compliant"
    },
    {
      industry: "Financial Services",
      solutions: ["Digital Banking", "Trading Platforms", "Risk Management", "Compliance"],
      clients: "30+ financial institutions",
      compliance: "SOX & PCI DSS compliant"
    },
    {
      industry: "E-commerce",
      solutions: ["Online Marketplaces", "Payment Processing", "Inventory Management", "Analytics"],
      clients: "100+ retailers",
      compliance: "PCI DSS compliant"
    },
    {
      industry: "Education",
      solutions: ["Learning Management", "Virtual Classrooms", "Student Information", "Assessment"],
      clients: "75+ educational institutions",
      compliance: "FERPA compliant"
    }
  ];

  const technologies = [
    "React", "Node.js", "Python", "Java", "TypeScript", "AWS", "Docker", "Kubernetes",
    "MongoDB", "PostgreSQL", "GraphQL", "React Native", "Flutter", "TensorFlow",
    "Azure", "Google Cloud", "Microservices", "AI/ML", "Blockchain", "IoT"
  ];

  const benefits = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Faster Time-to-Market",
      description: "Get your products to market 40% faster with our agile development approach.",
      metric: "40% faster delivery"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Scalable Architecture",
      description: "Build solutions that grow with your business using modern, scalable architectures.",
      metric: "10x scalability"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Quality Assurance",
      description: "99% bug-free delivery with comprehensive testing and quality assurance processes.",
      metric: "99% quality score"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Round-the-clock support and maintenance to keep your systems running smoothly.",
      metric: "< 2hr response time"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Solutions
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive <span className="gradient-primary bg-clip-text text-transparent">Technology Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end software development services 
            designed to accelerate your digital transformation and drive business growth.
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
                
                <div className="grid grid-cols-3 gap-2 mb-6 text-xs text-center">
                  <div>
                    <div className="font-semibold text-primary">{solution.stats.projects}</div>
                    <div className="text-muted-foreground">Projects</div>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{solution.stats.satisfaction}</div>
                    <div className="text-muted-foreground">Satisfaction</div>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{solution.stats.timeline}</div>
                    <div className="text-muted-foreground">Faster</div>
                  </div>
                </div>
                
                <Button className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Solutions?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver measurable business value through proven methodologies and cutting-edge technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{benefit.description}</p>
                <Badge variant="outline" className="text-xs">
                  {benefit.metric}
                </Badge>
              </Card>
            ))}
          </div>
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
                  
                  <div className="flex justify-between items-center mt-4 pt-4 border-t">
                    <div>
                      <span className="text-sm text-muted-foreground">Starting at</span>
                      <div className="font-semibold text-primary">{category.pricing}</div>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Timeline</span>
                      <div className="font-semibold">{category.timeline}</div>
                    </div>
                  </div>
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

        {/* Development Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery from conception to deployment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <Card key={step.step} className="p-6 relative overflow-hidden">
                <div className="text-6xl font-bold text-primary/20 absolute top-4 right-4">
                  {step.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-xs font-medium">{step.duration}</span>
                    </div>
                    
                    <div className="text-xs text-muted-foreground">
                      <span className="font-medium">Deliverables:</span>
                      <ul className="mt-1 space-y-1">
                        {step.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-center gap-1">
                            <CheckCircle className="h-3 w-3 text-primary" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Industry-Specific Solutions */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized solutions tailored to meet the unique requirements and compliance standards of different industries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {industrySpecific.map((item, index) => (
              <Card key={item.industry} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{item.industry}</h3>
                  <Badge variant="outline">{item.compliance}</Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {item.solutions.map((solution) => (
                    <div key={solution} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">{solution}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t">
                  <span className="text-sm text-muted-foreground">{item.clients}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technologies We Master</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable, and future-ready solutions.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm hover:bg-primary hover:text-white transition-colors">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="h-5 w-5 text-primary" />
            <span className="text-sm text-muted-foreground">Trusted by 500+ companies worldwide</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and find the perfect solution for your business needs. 
            Our experts are ready to help you achieve your technology goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white">
              <Settings className="mr-2 h-5 w-5" />
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