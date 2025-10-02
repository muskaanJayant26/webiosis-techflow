import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Solutions: [
      "Custom Software",
      "Mobile Development", 
      "AI & ML Solutions",
      "Cloud Services",
      "Cybersecurity",
      "Data Engineering"
    ],
    Company: [
      "About Us",
      "Our Team", 
      "Careers",
      "Blog",
      "Case Studies",
      "Contact"
    ],
    Resources: [
      "Documentation",
      "API Reference",
      "Help Center",
      "Community",
      "Webinars",
      "Partners"
    ],
    Legal: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "GDPR",
      "Security",
      "Compliance"
    ]
  };

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white gradient-primary mb-4 w-fit px-4 py-2 rounded">
              Webiosis
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              Accelerating digital transformation with world-class software engineering talent. 
              Building the future, one line of code at a time.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@webiosis.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="sm"
                  className="hover:bg-primary hover:text-white transition-smooth rounded-full"
                  aria-label={social.label}
                >
                  {social.icon}
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 Webiosis. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-smooth">Privacy</a>
            <a href="#" className="hover:text-primary transition-smooth">Terms</a>
            <a href="#" className="hover:text-primary transition-smooth">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
