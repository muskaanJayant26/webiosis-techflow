import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext"; 
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
const { theme, toggleTheme } = useTheme(); 
  const navItems = [
    { name: "Solutions", href: "/solutions", hasDropdown: false },
    { name: "Technologies", href: "/technologies", hasDropdown: false },
    { name: "Industries", href: "/industries", hasDropdown: false },
    { name: "About", href: "/about", hasDropdown: false },
    { name: "Our Work", href: "/our-work", hasDropdown: false },
    { name: "Blog", href: "/blog", hasDropdown: false },
  ];



  return (
<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border bg-white/95 dark:bg-gray-800">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <h1 className="text-xl text-white px-4 py-2 md:text-2xl rounded font-bold gradient-primary cursor-pointer">
                Webiosis
              </h1>
            </a>
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
                        "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium ",
                        "text-foreground  transition-smooth",
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
          
          </div>
            <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="text-foreground "
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="/contact">
              <Button variant="default" className="gradient-primary text-white font-semibold shadow-primary">
                Schedule a Call
              </Button>
            </a>
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