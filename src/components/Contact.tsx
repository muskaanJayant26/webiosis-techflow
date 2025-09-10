import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Send,
  Calendar,
  Users
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      content: "hello@techflow.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      content: "San Francisco, CA",
      description: "Global presence, local expertise"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Response Time",
      content: "< 2 Hours",
      description: "Average first response time"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Contact form submission would be handled here
    // For now, just show a simple alert
    alert("Thank you for your message! We'll be in touch soon.");
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="secondary" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start Your
            <span className="gradient-primary bg-clip-text text-transparent"> Next Project?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how we can help you achieve your technology goals. 
            Schedule a free consultation with our experts today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6 animate-fade-in-up">
            <Card className="p-6 gradient-card border-0 shadow-glass">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Let's Talk
                </CardTitle>
                <CardDescription>
                  Multiple ways to reach our team
                </CardDescription>
              </CardHeader>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.title}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-smooth"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{info.title}</div>
                      <div className="font-medium">{info.content}</div>
                      <div className="text-xs text-muted-foreground">{info.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-border/50">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Calendar className="h-5 w-5 text-primary" />
                  Schedule a Call
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-sm text-muted-foreground mb-4">
                  Book a 30-minute consultation to discuss your project requirements.
                </p>
                <Button variant="outline" className="w-full">
                  Book Free Consultation
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-scale-in">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-primary" />
                  Send us a message
                </CardTitle>
                <CardDescription>
                  Tell us about your project and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <Input 
                        id="firstName"
                        placeholder="John"
                        required
                        className="transition-smooth focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <Input 
                        id="lastName"
                        placeholder="Doe"
                        required
                        className="transition-smooth focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      required
                      className="transition-smooth focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <Input 
                      id="company"
                      placeholder="Your Company"
                      className="transition-smooth focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                      Project Type
                    </label>
                    <select 
                      id="projectType"
                      className="w-full p-3 border border-input rounded-md bg-background text-foreground transition-smooth focus:border-primary focus:outline-none"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="ai-ml">AI & Machine Learning</option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="data-engineering">Data Engineering</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Project Details *
                    </label>
                    <Textarea 
                      id="message"
                      placeholder="Tell us about your project requirements, timeline, and budget..."
                      rows={5}
                      required
                      className="transition-smooth focus:border-primary"
                    />
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="consent"
                      required
                      className="mt-1"
                    />
                    <label htmlFor="consent" className="text-sm text-muted-foreground">
                      I agree to receive communications from TechFlow and understand that I can 
                      unsubscribe at any time. *
                    </label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full gradient-primary text-white font-semibold shadow-primary"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Users className="h-4 w-4" />
            Join 500+ satisfied clients
          </div>
          <h3 className="text-2xl font-semibold mb-4">
            Prefer to talk directly?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Schedule a call with our team to discuss your project in detail and get a 
            personalized solution proposal.
          </p>
          <Button variant="outline" size="lg">
            <Phone className="mr-2 h-5 w-5" />
            Schedule Call Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;