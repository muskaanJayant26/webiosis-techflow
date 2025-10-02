import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";

const techNames = [
  "React", "Next.js", "Java", "JavaScript", "CSS", "Python",
  "Node.js", "AI/ML", "Docker", "Kubernetes", "MongoDB", "SQL",
  "Tailwind", "TypeScript", "GraphQL", "AWS", "Azure", "Blockchain"
];

const Hero = () => {
  const [fallingTech, setFallingTech] = useState<
    { id: number; name: string; left: string; duration: string; delay: string }[]
  >([]);

  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      const randomTech = techNames[Math.floor(Math.random() * techNames.length)];
      const newItem = {
        id: counter++,
        name: randomTech,
        left: `${Math.random() * 100}%`, // random horizontal position
        duration: `${5 + Math.random() * 5}s`, // different fall speed
        delay: `0s`,
      };
      setFallingTech((prev) => [...prev, newItem]);

      // Clean up old items after a while
      setFallingTech((prev) => prev.filter((item) => counter - item.id < 20));
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100vh] min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Falling Tech Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {fallingTech.map((tech) => (
          <span
            key={tech.id}
            className="absolute text-white/70 font-bold text-lg md:text-2xl animate-fall-sparkle select-none"
            style={{
              left: tech.left,
              animationDuration: tech.duration,
              animationDelay: tech.delay,
            }}
          >
            {tech.name}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Accelerate Your
              <span className="block  ext-white">
                Digital Future
              </span>
              With Elite Tech Talent
            </h1>

            <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Access 5,000+ world-class software engineers and data scientists.
              Build faster, scale smarter, and innovate without limits.
            </p>

            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="gradient-primary text-white font-semibold shadow-primary hover:shadow-secondary transition-smooth group w-full sm:w-auto"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 transition-smooth group w-full sm:w-auto backdrop-blur-sm"
              >
                <Play className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style>{`
        @keyframes fallSparkle {
          0% {
            transform: translateY(-120%) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 1;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
                         0 0 20px rgba(0, 255, 255, 0.6),
                         0 0 40px rgba(0, 200, 255, 0.5);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(360deg) scale(1.1);
            opacity: 0;
          }
        }

        .animate-fall-sparkle {
          position: absolute;
          top: -50px;
          animation-name: fallSparkle;
          animation-timing-function: linear;
          animation-iteration-count: 1;
        }
      `}</style>
    </section>
  );
};

export default Hero;
