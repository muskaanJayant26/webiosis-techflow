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
  CheckCircle
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
      caseStudy: "Automated workflow system reducing operational costs by 40%"
    },
    {
      icon: Stethoscope,
      title: "Healthcare & MedTech",
      description: "HIPAA-compliant healthcare solutions and medical technology platforms.",
      projects: "80+",
      color: "text-red-500",
      solutions: ["Telemedicine Apps", "Patient Management", "Medical Records", "Health Monitoring"],
      caseStudy: "Telehealth platform serving 50,000+ patients nationwide"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description: "Scalable e-commerce platforms and retail management solutions.",
      projects: "120+",
      color: "text-green-500",
      solutions: ["Online Stores", "Inventory Management", "Payment Processing", "Mobile Commerce"],
      caseStudy: "E-commerce platform handling $10M+ in annual transactions"
    },
    {
      icon: Banknote,
      title: "FinTech & Banking",
      description: "Secure financial technology solutions and banking applications.",
      projects: "60+",
      color: "text-yellow-600",
      solutions: ["Digital Wallets", "Trading Platforms", "Compliance Tools", "Blockchain Solutions"],
      caseStudy: "Digital banking app with 100,000+ active users"
    },
    {
      icon: GraduationCap,
      title: "Education & EdTech",
      description: "Interactive learning platforms and educational management systems.",
      projects: "90+",
      color: "text-purple-500",
      solutions: ["LMS Platforms", "Virtual Classrooms", "Student Portals", "Assessment Tools"],
      caseStudy: "Learning platform used by 500+ educational institutions"
    },
    {
      icon: Car,
      title: "Automotive & Transportation",
      description: "Smart automotive solutions and transportation management systems.",
      projects: "45+",
      color: "text-orange-500",
      solutions: ["Fleet Management", "Ride-sharing Apps", "Vehicle Tracking", "Maintenance Systems"],
      caseStudy: "Fleet management system optimizing routes for 1,000+ vehicles"
    },
    {
      icon: Gamepad2,
      title: "Gaming & Entertainment",
      description: "Immersive gaming experiences and entertainment platforms.",
      projects: "30+",
      color: "text-pink-500",
      solutions: ["Mobile Games", "Web Games", "Streaming Platforms", "Content Management"],
      caseStudy: "Mobile game with 1M+ downloads and 4.8-star rating"
    },
    {
      icon: Plane,
      title: "Travel & Hospitality",
      description: "Digital solutions for travel agencies and hospitality businesses.",
      projects: "55+",
      color: "text-indigo-500",
      solutions: ["Booking Systems", "Hotel Management", "Travel Apps", "Customer Experience"],
      caseStudy: "Booking platform processing 10,000+ reservations monthly"
    }
  ];

  const stats = [
    { label: "Industries Served", value: "15+" },
    { label: "Successful Projects", value: "500+" },
    { label: "Enterprise Clients", value: "200+" },
    { label: "Years of Experience", value: "8+" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Industries We <span className="gradient-primary bg-clip-text text-transparent">Serve</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver specialized software solutions across diverse industries, 
            understanding unique challenges and regulatory requirements.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6">
              <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
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
                  <Badge variant="secondary" className="text-xs">
                    {industry.projects} Projects
                  </Badge>
                </div>
                <CardTitle className="text-lg">{industry.title}</CardTitle>
                <CardDescription className="text-sm">{industry.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <h4 className="font-semibold text-sm">Key Solutions:</h4>
                  <ul className="space-y-1">
                    {industry.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs">
                        <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-accent/50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-muted-foreground italic">
                    Case Study: {industry.caseStudy}
                  </p>
                </div>
                <Button size="sm" variant="outline" className="w-full group">
                  View Projects
                  <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Compliance & Standards */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Compliance & Standards</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We ensure all solutions meet industry-specific compliance requirements and security standards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "HIPAA", description: "Healthcare compliance" },
              { title: "PCI DSS", description: "Payment security" },
              { title: "GDPR", description: "Data protection" },
              { title: "SOX", description: "Financial reporting" },
              { title: "ISO 27001", description: "Information security" },
              { title: "FERPA", description: "Educational privacy" },
              { title: "SOC 2", description: "Service organization controls" },
              { title: "FDA", description: "Medical device compliance" }
            ].map((standard, index) => (
              <Card key={index} className="text-center p-4">
                <h3 className="font-semibold mb-2">{standard.title}</h3>
                <p className="text-sm text-muted-foreground">{standard.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Industry?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We work with businesses across all sectors. Let's discuss how we can create 
            a customized solution for your specific industry needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white">
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