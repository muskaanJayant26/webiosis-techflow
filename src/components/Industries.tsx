import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Stethoscope, 
  GraduationCap, 
  ShoppingCart, 
  Banknote, 
  Car,
  Gamepad2,
  Plane,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Award,
  Zap,
  BarChart3,
  Factory,
  Home,
  Shield
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Building2,
      title: "Enterprise & B2B",
      description: "Custom enterprise solutions for large-scale businesses and B2B operations.",
      projects: "150+",
      color: "text-blue-500",
      solutions: ["ERP Systems", "CRM Platforms", "Supply Chain Management", "Business Intelligence"],
      caseStudy: "Automated workflow system reducing operational costs by 40%",
      growth: "+180%",
      clients: "Fortune 500 companies"
    },
    {
      icon: Stethoscope,
      title: "Healthcare & MedTech",
      description: "HIPAA-compliant healthcare solutions and medical technology platforms.",
      projects: "80+",
      color: "text-red-500",
      solutions: ["Telemedicine Apps", "Patient Management", "Medical Records", "Health Monitoring"],
      caseStudy: "Telehealth platform serving 50,000+ patients nationwide",
      growth: "+250%",
      clients: "Hospital networks"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description: "Scalable e-commerce platforms and retail management solutions.",
      projects: "120+",
      color: "text-green-500",
      solutions: ["Online Stores", "Inventory Management", "Payment Processing", "Mobile Commerce"],
      caseStudy: "E-commerce platform handling $10M+ in annual transactions",
      growth: "+300%",
      clients: "Retail brands"
    },
    {
      icon: Banknote,
      title: "FinTech & Banking",
      description: "Secure financial technology solutions and banking applications.",
      projects: "60+",
      color: "text-yellow-600",
      solutions: ["Digital Wallets", "Trading Platforms", "Compliance Tools", "Blockchain Solutions"],
      caseStudy: "Digital banking app with 100,000+ active users",
      growth: "+220%",
      clients: "Financial institutions"
    },
    {
      icon: GraduationCap,
      title: "Education & EdTech",
      description: "Interactive learning platforms and educational management systems.",
      projects: "90+",
      color: "text-purple-500",
      solutions: ["LMS Platforms", "Virtual Classrooms", "Student Portals", "Assessment Tools"],
      caseStudy: "Learning platform used by 500+ educational institutions",
      growth: "+280%",
      clients: "Universities & schools"
    },
    {
      icon: Car,
      title: "Automotive & Transportation",
      description: "Smart automotive solutions and transportation management systems.",
      projects: "45+",
      color: "text-orange-500",
      solutions: ["Fleet Management", "Ride-sharing Apps", "Vehicle Tracking", "Maintenance Systems"],
      caseStudy: "Fleet management system optimizing routes for 1,000+ vehicles",
      growth: "+160%",
      clients: "Transportation companies"
    },
    {
      icon: Factory,
      title: "Manufacturing & Industry 4.0",
      description: "Smart manufacturing solutions and industrial automation systems.",
      projects: "65+",
      color: "text-gray-600",
      solutions: ["IoT Integration", "Predictive Maintenance", "Quality Control", "Supply Chain"],
      caseStudy: "Reduced manufacturing downtime by 60% through predictive analytics",
      growth: "+200%",
      clients: "Manufacturing plants"
    },
    {
      icon: Home,
      title: "Real Estate & PropTech",
      description: "Digital transformation solutions for real estate and property management.",
      projects: "35+",
      color: "text-teal-500",
      solutions: ["Property Management", "Virtual Tours", "CRM Systems", "Market Analytics"],
      caseStudy: "Property management platform managing $500M+ in assets",
      growth: "+240%",
      clients: "Real estate firms"
    },
    {
      icon: Gamepad2,
      title: "Gaming & Entertainment",
      description: "Immersive gaming experiences and entertainment platforms.",
      projects: "30+",
      color: "text-pink-500",
      solutions: ["Mobile Games", "Web Games", "Streaming Platforms", "Content Management"],
      caseStudy: "Mobile game with 1M+ downloads and 4.8-star rating",
      growth: "+320%",
      clients: "Game studios"
    },
    {
      icon: Plane,
      title: "Travel & Hospitality",
      description: "Digital solutions for travel agencies and hospitality businesses.",
      projects: "55+",
      color: "text-indigo-500",
      solutions: ["Booking Systems", "Hotel Management", "Travel Apps", "Customer Experience"],
      caseStudy: "Booking platform processing 10,000+ reservations monthly",
      growth: "+190%",
      clients: "Travel agencies"
    }
  ];

  const stats = [
    {
      icon: <Users className="h-6 w-6" />,
      number: "10",
      label: "Industries Served",
      description: "Deep expertise across sectors"
    },
    {
      icon: <Award className="h-6 w-6" />,
      number: "700+",
      label: "Projects Delivered",
      description: "Successful implementations"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      number: "95%",
      label: "Client Retention",
      description: "Long-term partnerships"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      number: "40%",
      label: "Avg. ROI Increase",
      description: "Measurable business impact"
    }
  ];

  const complianceStandards = [
    { name: "HIPAA", industry: "Healthcare", description: "Health Insurance Portability and Accountability Act", icon: "🏥" },
    { name: "SOX", industry: "Financial", description: "Sarbanes-Oxley Act compliance", icon: "💼" },
    { name: "PCI DSS", industry: "E-commerce", description: "Payment Card Industry Data Security Standard", icon: "💳" },
    { name: "FERPA", industry: "Education", description: "Family Educational Rights and Privacy Act", icon: "🎓" },
    { name: "GDPR", industry: "All", description: "General Data Protection Regulation", icon: "🔒" },
    { name: "ISO 27001", industry: "All", description: "Information Security Management", icon: "🛡️" },
    { name: "SOC 2", industry: "All", description: "Service Organization Controls", icon: "📋" },
    { name: "FDA", industry: "Healthcare", description: "Medical device compliance", icon: "⚕️" }
  ];

  const digitalTransformation = [
    {
      challenge: "Legacy System Modernization",
      solution: "Cloud migration and microservices architecture",
      impact: "60% faster deployments, 40% cost reduction",
      industries: ["Healthcare", "Finance", "Manufacturing"]
    },
    {
      challenge: "Data Silos & Analytics",
      solution: "Unified data platform with AI insights",
      impact: "Real-time analytics, 10x faster reporting",
      industries: ["Retail", "E-commerce", "Education"]
    },
    {
      challenge: "Customer Experience",
      solution: "Omnichannel digital platforms",
      impact: "50% increase in customer satisfaction",
      industries: ["Travel", "Hospitality", "Retail"]
    },
    {
      challenge: "Operational Efficiency",
      solution: "Process automation and AI optimization",
      impact: "70% reduction in manual tasks",
      industries: ["Manufacturing", "Healthcare", "Finance"]
    }
  ];

  const industryTrends = [
    {
      trend: "AI-Powered Healthcare",
      growth: "+150%",
      description: "Diagnostic AI and personalized treatment plans",
      impact: "30% better patient outcomes"
    },
    {
      trend: "Autonomous Vehicles",
      growth: "+120%",
      description: "Self-driving technology and smart transportation",
      impact: "40% reduction in accidents"
    },
    {
      trend: "EdTech Innovation",
      growth: "+200%",
      description: "Personalized learning and virtual classrooms",
      impact: "25% improvement in learning outcomes"
    },
    {
      trend: "Sustainable Manufacturing",
      growth: "+90%",
      description: "IoT-enabled green manufacturing processes",
      impact: "35% reduction in carbon footprint"
    }
  ];

  const successMetrics = [
    {
      metric: "Implementation Speed",
      improvement: "50% faster",
      description: "Accelerated digital transformation timelines"
    },
    {
      metric: "Cost Reduction",
      improvement: "35% average",
      description: "Operational cost savings across industries"
    },
    {
      metric: "User Adoption",
      improvement: "85% rate",
      description: "High user adoption of digital solutions"
    },
    {
      metric: "ROI Achievement",
      improvement: "18 months",
      description: "Average time to achieve positive ROI"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Industry Expertise
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Industries We <span className="gradient-primary bg-clip-text text-transparent">Transform</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep domain expertise across multiple industries, delivering specialized solutions 
            that address unique challenges and drive measurable business outcomes.
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

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {industries.map((industry, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center`}>
                    <industry.icon className={`h-6 w-6 ${industry.color}`} />
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="text-xs mb-1">
                      {industry.projects}
                    </Badge>
                    <div className="text-xs text-muted-foreground">projects</div>
                  </div>
                </div>
                <CardTitle className="text-lg">{industry.title}</CardTitle>
                <CardDescription className="text-sm">{industry.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-xs text-muted-foreground uppercase tracking-wide">Key Solutions:</h4>
                  <ul className="space-y-1">
                    {industry.solutions.slice(0, 3).map((solution, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs">
                        <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-accent/30 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-3 w-3 text-primary" />
                      <span className="text-xs font-medium text-primary">Growth: {industry.growth}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{industry.clients}</span>
                  </div>
                  <p className="text-xs text-muted-foreground italic">{industry.caseStudy}</p>
                </div>
                
                <Button size="sm" variant="outline" className="w-full group">
                  View Projects
                  <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industry Trends */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry Innovation Trends
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Emerging technologies and innovations that are reshaping industries and creating new opportunities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryTrends.map((trend, index) => (
              <Card key={trend.trend} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="text-lg font-semibold text-primary">{trend.growth}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{trend.trend}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{trend.description}</p>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs font-medium text-primary">{trend.impact}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Digital Transformation Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Digital Transformation Across Industries
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Common challenges we solve across all industries with proven methodologies and cutting-edge technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {digitalTransformation.map((item, index) => (
              <Card key={item.challenge} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{item.challenge}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.solution}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{item.impact}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.industries.map((industry) => (
                        <Badge key={industry} variant="secondary" className="text-xs">
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Measurable Success Across Industries
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven results that demonstrate the impact of our industry-specific solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successMetrics.map((metric, index) => (
              <Card key={metric.metric} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-2xl font-bold text-primary mb-2">{metric.improvement}</div>
                <h3 className="text-lg font-semibold mb-2">{metric.metric}</h3>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Compliance & Standards */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Compliance & Security Standards</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We ensure all solutions meet industry-specific compliance requirements and security standards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceStandards.map((standard, index) => (
              <Card key={standard.name} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{standard.icon}</span>
                    <h3 className="text-lg font-semibold">{standard.name}</h3>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {standard.industry}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{standard.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Industry Insights CTA */}
        <Card className="p-8 lg:p-12 gradient-card border-0 shadow-glass mb-20">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">
              Industry Insights
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Ahead with Industry-Specific Intelligence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get exclusive insights, trends, and best practices tailored to your industry's unique challenges and opportunities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Market Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Quarterly reports on technology trends and market opportunities specific to your industry sector.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Peer Benchmarking</h3>
              <p className="text-sm text-muted-foreground">
                Compare your digital maturity against industry leaders and identify key improvement areas.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
              <p className="text-sm text-muted-foreground">
                Proven strategies and implementation guides specific to your industry's unique challenges.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button size="lg" className="gradient-primary text-white">
              <Shield className="mr-2 h-5 w-5" />
              Subscribe to Industry Insights
            </Button>
          </div>
        </Card>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Building2 className="h-5 w-5 text-primary" />
            <span className="text-sm text-muted-foreground">Trusted by industry leaders worldwide</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't See Your Industry?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We work across many industries and adapt our expertise to meet your specific needs. 
            Let's discuss how we can help transform your business with industry-focused technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white">
              <Users className="mr-2 h-5 w-5" />
              Discuss Your Industry
            </Button>
            <Button size="lg" variant="outline">
              View All Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;