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
  Layers
} from "lucide-react";

const Technologies = () => {
  const techStacks = [
    {
      category: "Frontend",
      icon: Code2,
      description: "Modern, responsive user interfaces",
      color: "text-blue-500",
      technologies: [
        { name: "React", level: "Expert", logo: "⚛️" },
        { name: "Vue.js", level: "Advanced", logo: "🟢" },
        { name: "Angular", level: "Advanced", logo: "🔴" },
        { name: "TypeScript", level: "Expert", logo: "🔷" },
        { name: "Next.js", level: "Expert", logo: "⚫" },
        { name: "Tailwind CSS", level: "Expert", logo: "🎨" }
      ]
    },
    {
      category: "Backend",
      icon: Database,
      description: "Scalable server-side solutions",
      color: "text-green-500",
      technologies: [
        { name: "Node.js", level: "Expert", logo: "🟢" },
        { name: "Python", level: "Expert", logo: "🐍" },
        { name: "Java", level: "Advanced", logo: "☕" },
        { name: "Go", level: "Intermediate", logo: "🔵" },
        { name: "C#", level: "Advanced", logo: "🟦" },
        { name: "GraphQL", level: "Advanced", logo: "🔗" }
      ]
    },
    {
      category: "Mobile",
      icon: Smartphone,
      description: "Cross-platform mobile applications",
      color: "text-purple-500",
      technologies: [
        { name: "React Native", level: "Expert", logo: "📱" },
        { name: "Flutter", level: "Advanced", logo: "🦋" },
        { name: "Swift", level: "Advanced", logo: "🍎" },
        { name: "Kotlin", level: "Advanced", logo: "🤖" },
        { name: "Xamarin", level: "Intermediate", logo: "🔷" },
        { name: "Ionic", level: "Intermediate", logo: "⚡" }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      description: "Scalable infrastructure solutions",
      color: "text-orange-500",
      technologies: [
        { name: "AWS", level: "Expert", logo: "☁️" },
        { name: "Azure", level: "Advanced", logo: "🔵" },
        { name: "Google Cloud", level: "Advanced", logo: "🟡" },
        { name: "Docker", level: "Expert", logo: "🐳" },
        { name: "Kubernetes", level: "Advanced", logo: "⚙️" },
        { name: "Terraform", level: "Advanced", logo: "🏗️" }
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: Brain,
      description: "Intelligent automation solutions",
      color: "text-pink-500",
      technologies: [
        { name: "TensorFlow", level: "Advanced", logo: "🧠" },
        { name: "PyTorch", level: "Advanced", logo: "🔥" },
        { name: "OpenAI", level: "Expert", logo: "🤖" },
        { name: "Scikit-learn", level: "Advanced", logo: "📊" },
        { name: "Pandas", level: "Expert", logo: "🐼" },
        { name: "Computer Vision", level: "Intermediate", logo: "👁️" }
      ]
    },
    {
      category: "Database",
      icon: Layers,
      description: "Robust data management systems",
      color: "text-indigo-500",
      technologies: [
        { name: "PostgreSQL", level: "Expert", logo: "🐘" },
        { name: "MongoDB", level: "Expert", logo: "🍃" },
        { name: "MySQL", level: "Advanced", logo: "🐬" },
        { name: "Redis", level: "Advanced", logo: "🔴" },
        { name: "Elasticsearch", level: "Intermediate", logo: "🔍" },
        { name: "Neo4j", level: "Intermediate", logo: "🔗" }
      ]
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional",
    "Microsoft Azure Developer",
    "Kubernetes Certified Administrator",
    "MongoDB Certified Developer",
    "React Certified Professional"
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-green-100 text-green-800 border-green-200";
      case "Advanced": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-primary bg-clip-text text-transparent">Technologies</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage cutting-edge technologies and proven frameworks to build robust, 
            scalable, and future-ready solutions for your business.
          </p>
        </div>

        {/* Technology Stacks */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {techStacks.map((stack, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4`}>
                  <stack.icon className={`h-6 w-6 ${stack.color}`} />
                </div>
                <CardTitle className="text-xl">{stack.category}</CardTitle>
                <CardDescription>{stack.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {stack.technologies.map((tech, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{tech.logo}</span>
                        <span className="font-medium">{tech.name}</span>
                      </div>
                      <Badge variant="outline" className={getLevelColor(tech.level)}>
                        {tech.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Development Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow industry best practices and agile methodologies to ensure quality delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🔍", title: "Discovery", description: "Understanding requirements and planning" },
              { icon: "🎨", title: "Design", description: "UI/UX design and architecture planning" },
              { icon: "⚡", title: "Development", description: "Agile development with regular updates" },
              { icon: "🚀", title: "Deployment", description: "Testing, deployment, and maintenance" }
            ].map((step, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certifications & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team holds industry-recognized certifications ensuring the highest standards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{cert}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Technology Solution?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our experts are ready to help you choose the right technology stack for your project 
            and deliver exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white">
              Discuss Your Project
            </Button>
            <Button size="lg" variant="outline">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;