

// import { Button } from "@/components/ui/button";
// import { ArrowRight, Play } from "lucide-react";

// const techNames = [
//   "React", "Next.js", "Java", "JavaScript", "CSS", "HTML",
//   "Node.js", "Python", "Django", "Tailwind", "C++", "Go",
//   "Rust", "Kotlin", "Swift", "AI/ML", "Cloud", "Docker", "Kubernetes"
// ];

// const HeroTwo = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#141433] to-[#1c1c44]">
      
//       {/* Nebula Glow */}
//       <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/30 rounded-full blur-[150px]" />
//       <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-blue-500/25 rounded-full blur-[200px]" />

//       {/* Twinkling Particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {Array.from({ length: 70 }).map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${2 + Math.random() * 3}s`,
//               opacity: Math.random() * 0.8 + 0.2,
//             }}
//           />
//         ))}

//         {/* Floating Glowing Tech Names */}
//         {Array.from({ length: 15 }).map((_, i) => {
//           const tech = techNames[i % techNames.length];
//           return (
//             <span
//               key={i}
//               className="absolute text-white/60 font-semibold text-lg animate-float opacity-0 drop-shadow-[0_0_8px_rgba(128,128,255,0.6)]"
//               style={{
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//                 animationDelay: `${i * 1.5}s`,
//                 animationDuration: `${6 + Math.random() * 4}s`
//               }}
//             >
//               {tech}
//             </span>
//           );
//         })}
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
//         <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
//           Accelerate Your{" "}
//           <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
//             Digital Future
//           </span>
//           With Elite Tech Talent
//         </h1>
//         <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
//           Access 5,000+ world-class software engineers and data scientists.
//           Build faster, scale smarter, and innovate without limits.
//         </p>

//         <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
//           <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:shadow-xl">
//             Start Your Project
//             <ArrowRight className="ml-2 h-5 w-5" />
//           </Button>
//           <Button
//             variant="outline"
//             size="lg"
//             className="border-gray-500 text-gray-200 hover:bg-gray-800"
//           >
//             <Play className="mr-2 h-5 w-5" />
//             Watch Demo
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroTwo;


// import { Button } from "@/components/ui/button";
// import { ArrowRight, Play } from "lucide-react";

// const techNames = [
//   "React", "Next.js", "Java", "JavaScript", "CSS", "HTML",
//   "Node.js", "Python", "Django", "Tailwind", "C++", "Go",
//   "Rust", "Kotlin", "Swift", "AI/ML", "Cloud", "Docker", "Kubernetes"
// ];

// const HeroTwo = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
//       {/* Cyber Grid Background */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

//       {/* Neon Particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {Array.from({ length: 80 }).map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1.5 h-1.5 rounded-full animate-twinkle"
//             style={{
//               backgroundColor: Math.random() > 0.5 ? "cyan" : "magenta",
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${2 + Math.random() * 3}s`,
//               opacity: Math.random() * 0.7 + 0.3,
//               filter: "drop-shadow(0 0 6px currentColor)",
//             }}
//           />
//         ))}

//         {/* Floating Neon Tech Names */}
//         {Array.from({ length: 15 }).map((_, i) => {
//           const tech = techNames[i % techNames.length];
//           const neonColor = Math.random() > 0.5 ? "text-cyan-400" : "text-pink-400";
//           return (
//             <span
//               key={i}
//               className={`absolute ${neonColor} font-semibold text-lg animate-float opacity-0 drop-shadow-[0_0_10px]`}
//               style={{
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//                 animationDelay: `${i * 1.3}s`,
//                 animationDuration: `${6 + Math.random() * 4}s`
//               }}
//             >
//               {tech}
//             </span>
//           );
//         })}
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
//         <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
//           Accelerate Your{" "}
//           <span className="block bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
//             Digital Future
//           </span>
//           With Elite Tech Talent
//         </h1>
//         <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
//           Access 5,000+ world-class software engineers and data scientists.
//           Build faster, scale smarter, and innovate without limits.
//         </p>

//         <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
//           <Button size="lg" className="bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-bold shadow-lg hover:shadow-xl">
//             Start Your Project
//             <ArrowRight className="ml-2 h-5 w-5" />
//           </Button>
//           <Button
//             variant="outline"
//             size="lg"
//             className="border-cyan-400 text-cyan-300 hover:bg-cyan-950/40"
//           >
//             <Play className="mr-2 h-5 w-5" />
//             Watch Demo
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroTwo;

// import { ArrowRight, Play } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useEffect, useRef } from "react";

// // Tech names floating around
// const techNames = [
//   "React", "Next.js", "Tailwind", "Node.js", "NestJS",
//   "PostgreSQL", "Redis", "TypeScript", "Three.js",
//   "Web3", "AI", "ML", "GraphQL", "Kubernetes", "Docker"
// ];

// const HeroTwo = () => {
//   const canvasRef = useRef(null);

//   // Matrix animation (Option 2)
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas?.getContext("2d");
//     if (!canvas || !ctx) return;

//     canvas.height = window.innerHeight;
//     canvas.width = window.innerWidth;

//     const letters = "01";
//     const fontSize = 14;
//     const columns = canvas.width / fontSize;
//     const drops = Array(Math.floor(columns)).fill(1);

//     function draw() {
//       ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       ctx.fillStyle = "#00ffff";
//       ctx.font = fontSize + "px monospace";

//       for (let i = 0; i < drops.length; i++) {
//         const text = letters[Math.floor(Math.random() * letters.length)];
//         ctx.fillText(text, i * fontSize, drops[i] * fontSize);

//         if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
//           drops[i] = 0;
//         }
//         drops[i]++;
//       }
//     }

//     const interval = setInterval(draw, 33);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
//       {/* Cyber Grid Background (Option 3) */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

//       {/* Floating Gradient Orbs (Option 1) */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
//         <div className="absolute top-40 -right-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse delay-700"></div>
//         <div className="absolute bottom-20 left-40 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse delay-1000"></div>
//       </div>

//       {/* Matrix Background (Option 2) */}
//       <canvas ref={canvasRef} className="absolute inset-0 opacity-40" />

//       {/* Neon Particles + Floating Tech Names */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {Array.from({ length: 80 }).map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1.5 h-1.5 rounded-full animate-twinkle"
//             style={{
//               backgroundColor: Math.random() > 0.5 ? "cyan" : "magenta",
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${2 + Math.random() * 3}s`,
//               opacity: Math.random() * 0.7 + 0.3,
//               filter: "drop-shadow(0 0 6px currentColor)",
//             }}
//           />
//         ))}

//         {Array.from({ length: 15 }).map((_, i) => {
//           const tech = techNames[i % techNames.length];
//           const neonColor = Math.random() > 0.5 ? "text-cyan-400" : "text-pink-400";
//           return (
//             <span
//               key={i}
//               className={`absolute ${neonColor} font-semibold text-lg animate-float opacity-0 drop-shadow-[0_0_10px]`}
//               style={{
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//                 animationDelay: `${i * 1.3}s`,
//                 animationDuration: `${6 + Math.random() * 4}s`
//               }}
//             >
//               {tech}
//             </span>
//           );
//         })}
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
//         <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
//           Accelerate Your{" "}
//           <span className="block bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
//             Digital Future
//           </span>
//           With Elite Tech Talent
//         </h1>
//         <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
//           Access 5,000+ world-class software engineers and data scientists.
//           Build faster, scale smarter, and innovate without limits.
//         </p>

//         <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
//           <Button size="lg" className="bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-bold shadow-lg hover:shadow-xl">
//             Start Your Project
//             <ArrowRight className="ml-2 h-5 w-5" />
//           </Button>
//           <Button
//             variant="outline"
//             size="lg"
//             className="border-cyan-400 text-cyan-300 hover:bg-cyan-950/40"
//           >
//             <Play className="mr-2 h-5 w-5" />
//             Watch Demo
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroTwo;


// import { ArrowRight, Play } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const HeroHex = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
//       {/* Animated Hexagon Mesh */}
//       <div className="absolute inset-0 overflow-hidden">
//         <svg
//           className="w-full h-full animate-slow-pan opacity-40"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <defs>
//             <pattern
//               id="hexGrid"
//               width="60"
//               height="52"
//               patternUnits="userSpaceOnUse"
//               patternTransform="scale(1) skewY(0)"
//             >
//               <polygon
//                 points="30,0 60,15 60,45 30,60 0,45 0,15"
//                 fill="none"
//                 stroke="cyan"
//                 strokeWidth="1"
//                 opacity="0.5"
//               />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#hexGrid)" />
//         </svg>
//       </div>

//       {/* Glow Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />

//       {/* Content */}
//       <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
//         <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
//           Welcome to the{" "}
//           <span className="block bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
//             Next Tech Era
//           </span>
//         </h1>
//         <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
//           A futuristic platform where innovation meets speed, powered by elite engineers and cutting-edge tools.
//         </p>

//         <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
//           <Button size="lg" className="bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-bold shadow-lg hover:shadow-xl">
//             Start Your Project
//             <ArrowRight className="ml-2 h-5 w-5" />
//           </Button>
//           <Button
//             variant="outline"
//             size="lg"
//             className="border-cyan-400 text-cyan-300 hover:bg-cyan-950/40"
//           >
//             <Play className="mr-2 h-5 w-5" />
//             Watch Demo
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroHex;


// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Play } from "lucide-react";

// const techNames = [
//   "React", "Next.js", "Java", "JavaScript", "CSS", "HTML",
//   "Node.js", "Python", "Django", "Tailwind", "C++", "Go",
//   "Rust", "Kotlin", "Swift", "AI/ML", "Cloud", "Docker", "Kubernetes"
// ];

// const HeroTwo = () => {
//   const [bouncing, setBouncing] = useState({});

//   const handleBounce = (index) => {
//     setBouncing((prev) => ({ ...prev, [index]: true }));
//     setTimeout(() => {
//       setBouncing((prev) => ({ ...prev, [index]: false }));
//     }, 800);
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
//       {/* Cyber Grid Background */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

//       {/* Floating Tech Names */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {Array.from({ length: 15 }).map((_, i) => {
//           const tech = techNames[i % techNames.length];
//           const neonColor = Math.random() > 0.5 ? "text-cyan-400" : "text-pink-400";

//           return (
//             <span
//               key={i}
//               onClick={() => handleBounce(i)}
//               className={`absolute ${neonColor} font-semibold text-lg cursor-pointer opacity-0 pointer-events-auto drop-shadow-[0_0_10px] 
//                 animate-float ${bouncing[i] ? "animate-bounce" : ""}`}
//               style={{
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//                 animationDelay: `${i * 1.3}s`,
//                 animationDuration: `${6 + Math.random() * 4}s`,
//               }}
//             >
//               {tech}
//             </span>
//           );
//         })}
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
//         <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
//           Accelerate Your{" "}
//           <span className="block bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
//             Digital Future
//           </span>
//           With Elite Tech Talent
//         </h1>
//         <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
//           Access 5,000+ world-class software engineers and data scientists.
//           Build faster, scale smarter, and innovate without limits.
//         </p>

//         <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
//           <Button size="lg" className="bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-bold shadow-lg hover:shadow-xl">
//             Start Your Project
//             <ArrowRight className="ml-2 h-5 w-5" />
//           </Button>
//           <Button
//             variant="outline"
//             size="lg"
//             className="border-cyan-400 text-cyan-300 hover:bg-cyan-950/40"
//           >
//             <Play className="mr-2 h-5 w-5" />
//             Watch Demo
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroTwo;
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

    // Avoid middle 40% vertically and 50% horizontally
    if (top > 30 && top < 70) top = Math.random() > 0.5 ? Math.random() * 30 : 70 + Math.random() * 30;
    if (left > 25 && left < 75) left = Math.random() > 0.5 ? Math.random() * 25 : 75 + Math.random() * 25;

    return { top, left };
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
          const { top, left } = getRandomPosition();

          return (
            <span
              key={i}
              onClick={() => handleBounce(i)}
              className={`absolute ${neonColor} font-semibold text-lg cursor-pointer pointer-events-auto drop-shadow-[0_0_10px] 
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
<h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
  Accelerate Your{" "}
  <span className="block bg-gradient-to-r from-slate-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
    Digital Future
  </span>
  With Elite Tech Talent
</h1>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
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
