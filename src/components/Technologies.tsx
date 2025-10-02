import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Smartphone, 
  Database, 
  Cloud, 
  Brain, 
  Shield,
  Zap,
  Layers,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Users,
  CheckCircle,
  Target,
  BarChart3
} from "lucide-react";
import { useState } from "react";
import DiscussProject from "./DiscussProject";

const Technologies = () => {
  const techStacks = [
    {
      category: "Frontend",
      icon: Code2,
      description: "Modern, responsive user interfaces",
      color: "text-blue-500",
      expertise: "Expert",
      projects: "300+",
      technologies: [
        { name: "React", level: "Expert", logo: "⚛️", experience: "5+ years" },
        { name: "Vue.js", level: "Advanced", logo: "🟢", experience: "3+ years" },
        { name: "Angular", level: "Advanced", logo: "🔴", experience: "4+ years" },
        { name: "TypeScript", level: "Expert", logo: "🔷", experience: "4+ years" },
        { name: "Next.js", level: "Expert", logo: "⚫", experience: "3+ years" },
        { name: "Tailwind CSS", level: "Expert", logo: "🎨", experience: "3+ years" }
      ]
    },
    {
      category: "Backend",
      icon: Database,
      description: "Scalable server-side solutions",
      color: "text-green-500",
      expertise: "Expert",
      projects: "250+",
      technologies: [
        { name: "Node.js", level: "Expert", logo: "🟢", experience: "5+ years" },
        { name: "Python", level: "Expert", logo: "🐍", experience: "6+ years" },
        { name: "Java", level: "Advanced", logo: "☕", experience: "4+ years" },
        { name: "Go", level: "Intermediate", logo: "🔵", experience: "2+ years" },
        { name: "C#", level: "Advanced", logo: "🟦", experience: "3+ years" },
        { name: "GraphQL", level: "Advanced", logo: "🔗", experience: "2+ years" }
      ]
    },
    {
      category: "Mobile",
      icon: Smartphone,
      description: "Cross-platform mobile applications",
      color: "text-purple-500",
      expertise: "Advanced",
      projects: "150+",
      technologies: [
        { name: "React Native", level: "Expert", logo: "📱", experience: "4+ years" },
        { name: "Flutter", level: "Advanced", logo: "🦋", experience: "3+ years" },
        { name: "Swift", level: "Advanced", logo: "🍎", experience: "4+ years" },
        { name: "Kotlin", level: "Advanced", logo: "🤖", experience: "3+ years" },
        { name: "Xamarin", level: "Intermediate", logo: "🔷", experience: "2+ years" },
        { name: "Ionic", level: "Intermediate", logo: "⚡", experience: "2+ years" }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      description: "Scalable infrastructure solutions",
      color: "text-orange-500",
      expertise: "Expert",
      projects: "400+",
      technologies: [
        { name: "AWS", level: "Expert", logo: "☁️", experience: "5+ years" },
        { name: "Azure", level: "Advanced", logo: "🔵", experience: "3+ years" },
        { name: "Google Cloud", level: "Advanced", logo: "🟡", experience: "3+ years" },
        { name: "Docker", level: "Expert", logo: "🐳", experience: "4+ years" },
        { name: "Kubernetes", level: "Advanced", logo: "⚙️", experience: "3+ years" },
        { name: "Terraform", level: "Advanced", logo: "🏗️", experience: "2+ years" }
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: Brain,
      description: "Intelligent automation solutions",
      color: "text-pink-500",
      expertise: "Advanced",
      projects: "80+",
      technologies: [
        { name: "TensorFlow", level: "Advanced", logo: "🧠", experience: "3+ years" },
        { name: "PyTorch", level: "Advanced", logo: "🔥", experience: "2+ years" },
        { name: "OpenAI", level: "Expert", logo: "🤖", experience: "2+ years" },
        { name: "Scikit-learn", level: "Advanced", logo: "📊", experience: "3+ years" },
        { name: "Pandas", level: "Expert", logo: "🐼", experience: "4+ years" },
        { name: "Computer Vision", level: "Intermediate", logo: "👁️", experience: "2+ years" }
      ]
    },
    {
      category: "Database",
      icon: Layers,
      description: "Robust data management systems",
      color: "text-indigo-500",
      expertise: "Expert",
      projects: "200+",
      technologies: [
        { name: "PostgreSQL", level: "Expert", logo: "🐘", experience: "5+ years" },
        { name: "MongoDB", level: "Expert", logo: "🍃", experience: "4+ years" },
        { name: "MySQL", level: "Advanced", logo: "🐬", experience: "5+ years" },
        { name: "Redis", level: "Advanced", logo: "🔴", experience: "3+ years" },
        { name: "Elasticsearch", level: "Intermediate", logo: "🔍", experience: "2+ years" },
        { name: "Neo4j", level: "Intermediate", logo: "🔗", experience: "1+ years" }
      ]
    }
  ];

  const stats = [
    {
      icon: <Code2 className="h-6 w-6" />,
      number: "50+",
      label: "Technologies Mastered",
      description: "Latest frameworks & tools"
    },
    {
      icon: <Award className="h-6 w-6" />,
      number: "1000+",
      label: "Projects Delivered",
      description: "Across all tech stacks"
    },
    {
      icon: <Users className="h-6 w-6" />,
      number: "200+",
      label: "Expert Engineers",
      description: "Certified professionals"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      number: "99.5%",
      label: "Success Rate",
      description: "Project delivery rate"
    }
  ];

  const certifications = [
    { name: "AWS Solutions Architect", level: "Professional", holders: 45, logo: "☁️" },
    { name: "Google Cloud Professional", level: "Cloud Architect", holders: 32, logo: "🟡" },
    { name: "Microsoft Azure", level: "Expert", holders: 38, logo: "🔵" },
    { name: "Kubernetes", level: "Certified Administrator", holders: 28, logo: "⚙️" },
    { name: "React", level: "Expert Certification", holders: 85, logo: "⚛️" },
    { name: "Node.js", level: "Professional", holders: 67, logo: "🟢" },
    { name: "Python", level: "Certified Developer", holders: 72, logo: "🐍" },
    { name: "MongoDB", level: "Certified DBA", holders: 24, logo: "🍃" }
  ];

  const techTrends = [
    {
      trend: "AI/ML Integration",
      growth: "+85%",
      description: "Increasing demand for AI-powered applications and intelligent automation",
      status: "Hot",
      adoption: "94% of enterprises"
    },
    {
      trend: "Serverless Architecture", 
      growth: "+70%",
      description: "Cost-effective, auto-scaling solutions with pay-per-use pricing",
      status: "Growing",
      adoption: "78% of organizations"
    },
    {
      trend: "Edge Computing",
      growth: "+60%", 
      description: "Faster processing with reduced latency for real-time applications",
      status: "Emerging",
      adoption: "65% planning adoption"
    },
    {
      trend: "Microservices",
      growth: "+55%",
      description: "Flexible, maintainable architecture for scalable applications",
      status: "Stable",
      adoption: "87% of enterprises"
    }
  ];

  const migrationServices = [
    {
      title: "Legacy System Modernization",
      description: "Transform outdated systems with modern technologies",
      benefits: ["Zero-downtime migration", "Improved performance", "Enhanced security", "Cost reduction"],
      timeline: "3-6 months",
      success_rate: "99.8%"
    },
    {
      title: "Cloud Migration",
      description: "Move your infrastructure to scalable cloud platforms",
      benefits: ["Auto-scaling", "Cost optimization", "Global availability", "Enhanced backup"],
      timeline: "2-4 months",
      success_rate: "99.5%"
    },
    {
      title: "Database Migration",
      description: "Upgrade to modern, high-performance database systems",
      benefits: ["Better performance", "Enhanced security", "Automated backups", "Real-time analytics"],
      timeline: "1-3 months",
      success_rate: "99.9%"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-green-100 text-green-800 border-green-200";
      case "Advanced": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };
const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 relative">
   

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Technology Stack
          </Badge>
          <h1 className="text-3xl md:text-3xl font-bold mb-6">
           <span className="bg-[linear-gradient(135deg,hsl(var(--primary-light)),hsl(var(--secondary-light)))] dark:gradient-primary px-2 py-1 rounded">
            Cutting-Edge Technologies</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage the latest and most reliable technologies to build robust, 
            scalable, and future-ready solutions that drive business success and innovation.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={stat.label} className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </div>

        {/* Technology Stacks */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {techStacks.map((stack, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center`}>
                    <stack.icon className={`h-6 w-6 ${stack.color}`} />
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="mb-1">
                      {stack.expertise}
                    </Badge>
                    <div className="text-sm text-muted-foreground">{stack.projects} projects</div>
                  </div>
                </div>
                <CardTitle className="text-xl">{stack.category}</CardTitle>
                <CardDescription>{stack.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  {stack.technologies.map((tech, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{tech.logo}</span>
                        <div>
                          <span className="font-medium text-sm">{tech.name}</span>
                          <div className="text-xs text-muted-foreground">{tech.experience}</div>
                        </div>
                      </div>
                      <Badge variant="outline" className={`text-xs ${getLevelColor(tech.level)}`}>
                        {tech.level}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full group" size="sm">
                  View Projects 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Trends Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-3xl font-bold mb-4">
              Technology Trends We're Leading
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay ahead of the curve with emerging technologies that are shaping the future of software development.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techTrends.map((trend, index) => (
              <Card key={trend.trend} className="p-6 relative overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="absolute top-4 right-4">
                  <Badge variant={trend.status === "Hot" ? "default" : "secondary"} className="text-xs">
                    {trend.status}
                  </Badge>
                </div>
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="text-lg font-semibold text-primary">{trend.growth}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{trend.trend}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{trend.description}</p>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{trend.adoption}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Migration Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-3xl font-bold mb-4">
              Migration & Modernization Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your legacy systems with our proven migration strategies and modern architecture patterns.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {migrationServices.map((service, index) => (
              <Card key={service.title} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Timeline:</span>
                      <div className="font-semibold">{service.timeline}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Success Rate:</span>
                      <div className="font-semibold text-primary">{service.success_rate}</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow industry best practices and agile methodologies to ensure quality delivery and client satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🔍", title: "Discovery", description: "Understanding requirements, technical constraints, and business goals" },
              { icon: "🎨", title: "Design", description: "UI/UX design, system architecture, and technical specification" },
              { icon: "⚡", title: "Development", description: "Agile development with continuous integration and regular updates" },
              { icon: "🚀", title: "Deployment", description: "Testing, production deployment, monitoring, and ongoing maintenance" }
            ].map((step, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certifications & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team holds industry-recognized certifications ensuring the highest standards of technical excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{cert.logo}</span>
                    <div>
                      <span className="font-medium text-sm">{cert.name}</span>
                      <div className="text-xs text-muted-foreground">{cert.level}</div>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {cert.holders} certified
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="h-5 w-5 text-primary" />
            <span className="text-sm text-muted-foreground">Industry-leading technology partnerships</span>
          </div>
          <h2 className="text-3xl md:text-3xl font-bold mb-4">Need a Custom Technology Solution?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our experts are ready to help you choose the right technology stack for your project 
            and deliver exceptional results that drive business growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white" onClick={() => setIsOpen(true)}>
              <Zap className="mr-2 h-5 w-5" />
              Discuss Your Project
            </Button>
            <Button size="lg" variant="outline">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </div>
      <DiscussProject  isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
};

export default Technologies;