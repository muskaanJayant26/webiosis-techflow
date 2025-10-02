import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const techNames = [
  "React", "Next.js", "Java", "JavaScript", "CSS", "HTML",
  "Node.js", "Python", "Django", "Tailwind", "C++", "Go",
  "Rust", "Kotlin", "Swift", "AI/ML", "Cloud", "Docker", "Kubernetes"
];

const HeroTwo = () => {
  const [bouncing, setBouncing] = useState({});

  const handleBounce = (index) => {
    setBouncing((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => {
      setBouncing((prev) => ({ ...prev, [index]: false }));
    }, 800);
  };

  // Generate random position avoiding the middle zone
  const getRandomPosition = () => {
    let top = Math.random() * 100;
    let left = Math.random() * 100;

    if (top > 30 && top < 70) top = Math.random() > 0.5 ? Math.random() * 30 : 70 + Math.random() * 30;
    if (left > 25 && left < 75) left = Math.random() > 0.5 ? Math.random() * 25 : 75 + Math.random() * 25;

    return { top, left };
  };

  // On mobile, render fewer floating texts for clarity
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const floatingCount = isMobile ? 8 : 15;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Floating Tech Names */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: floatingCount }).map((_, i) => {
          const tech = techNames[i % techNames.length];
          const neonColor = Math.random() > 0.5 ? "text-cyan-400" : "text-pink-400";
          const { top, left } = getRandomPosition();

          return (
            <span
              key={i}
              onClick={() => handleBounce(i)}
              className={`absolute ${neonColor} font-semibold 
                text-sm sm:text-base md:text-lg cursor-pointer pointer-events-auto drop-shadow-[0_0_10px]
                animate-float ${bouncing[i] ? "animate-bounce" : ""}`}
              style={{
                top: `${top}%`,
                left: `${left}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${isMobile ? 8 : 6 + Math.random() * 4}s`,
              }}
            >
              {tech}
            </span>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
          Accelerate Your{" "}
          <span className="block bg-gradient-to-r from-slate-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Digital Future
          </span>
          With Elite Tech Talent
        </h1>

        <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-xl sm:max-w-2xl mx-auto">
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

export default HeroTwo;
