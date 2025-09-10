import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navItems = [
    { name: "Solutions", href: "#solutions", hasDropdown: true },
    { name: "Technologies", href: "#technologies", hasDropdown: false },
    { name: "Industries", href: "#industries", hasDropdown: false },
    { name: "About", href: "/about", hasDropdown: false },
    { name: "Our Work", href: "#work", hasDropdown: false },
    { name: "Blog", href: "#blog", hasDropdown: false },
  ];

  const solutionsDropdown = {
    leftColumn: {
      title: "Solutions",
      subtitle: "Get software development services, built around your needs:",
      items: ["Staff Augmentation", "Dedicated Teams", "Software Outsourcing"]
    },
    middleColumn: {
      title: "TOP SOLUTIONS",
      items: [
        "AI Development",
        "Back-end Development", 
        "CMS Development",
        "Cryptocurrency & Blockchain",
        "Front-end Development",
        "Machine Learning",
        "QA Testing & Automation",
        "UX/UI Design"
      ]
    },
    rightColumn: {
      title: "ENTERPRISE FOCUSED",
      items: [
        "Android App Development",
        "Business Intelligence", 
        "Data Engineering",
        "eCommerce Development",
        "iOS App Development",
        "Mobile App Development",
        "SaaS Development",
        "Web Development"
      ]
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              TechFlow
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block relative">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <button
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium",
                        "text-foreground hover:text-primary transition-smooth",
                        "hover:bg-accent"
                      )}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium",
                        "text-foreground hover:text-primary transition-smooth",
                        "hover:bg-accent"
                      )}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Solutions Dropdown */}
            {dropdownOpen && (
              <div 
                className="absolute top-full left-0 w-screen bg-background border border-border shadow-lg z-50"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div className="max-w-7xl mx-auto px-8 py-8">
                  <div className="grid grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {solutionsDropdown.leftColumn.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {solutionsDropdown.leftColumn.subtitle}
                      </p>
                      <ul className="space-y-2">
                        {solutionsDropdown.leftColumn.items.map((item) => (
                          <li key={item}>
                            <a href="#" className="text-sm text-foreground hover:text-primary transition-smooth">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Middle Column */}
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">
                        {solutionsDropdown.middleColumn.title}
                      </h4>
                      <ul className="space-y-2">
                        {solutionsDropdown.middleColumn.items.map((item) => (
                          <li key={item}>
                            <a href="#" className="text-sm text-foreground hover:text-primary transition-smooth">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Column */}
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">
                        {solutionsDropdown.rightColumn.title}
                      </h4>
                      <ul className="space-y-2">
                        {solutionsDropdown.rightColumn.items.map((item) => (
                          <li key={item}>
                            <a href="#" className="text-sm text-foreground hover:text-primary transition-smooth">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" className="gradient-primary text-white font-semibold shadow-primary">
              Schedule a Call
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent transition-smooth"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-4">
                <Button variant="default" className="w-full gradient-primary text-white font-semibold">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;