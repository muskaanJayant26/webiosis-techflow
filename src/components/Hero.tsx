import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const techNames = [
  "React", "Next.js", "Java", "JavaScript", "CSS", "HTML",
  "Node.js", "Python", "Django", "Tailwind", "C++", "Go",
  "Rust", "Kotlin", "Swift", "AI/ML", "Cloud", "Docker", "Kubernetes"
];

const Hero = () => {
  const [bouncing, setBouncing] = useState({});

  const handleBounce = (index) => {
    setBouncing((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => {
      setBouncing((prev) => ({ ...prev, [index]: false }));
    }, 800);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Floating Tech Names */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => {
          const tech = techNames[i % techNames.length];
          const neonColor = Math.random() > 0.5 ? "text-cyan-400" : "text-pink-400";

          // Generate safe random positions (avoiding content zone)
          let top, left;
          let tries = 0;
          do {
            top = Math.random() * 100;   // %
            left = Math.random() * 100;  // %
            tries++;
          } while (
            // exclude central content area (responsive safe zone)
            top > 25 && top < 75 && left > 15 && left < 85 && tries < 10
          );

          return (
            <span
              key={i}
              onClick={() => handleBounce(i)}
              className={`absolute ${neonColor} font-semibold text-sm md:text-lg cursor-pointer opacity-0 pointer-events-auto drop-shadow-[0_0_10px] 
                animate-float ${bouncing[i] ? "animate-bounce" : ""}`}
              style={{
                top: `${top}%`,
                left: `${left}%`,
                animationDelay: `${i * 1.3}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            >
              {tech}
            </span>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight">
          Accelerate Your{" "}
          <span className="block bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            Digital Future
          </span>
          With Elite Tech Talent
        </h1>
        <p className="mt-6 text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
          Access 5,000+ world-class software engineers and data scientists.
          Build faster, scale smarter, and innovate without limits.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-bold shadow-lg hover:shadow-xl">
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-cyan-400 text-cyan-300 hover:bg-cyan-950/40"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
