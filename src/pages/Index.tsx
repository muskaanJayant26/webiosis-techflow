import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import HeroTwo from "@/components/HeroTwo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* <Hero /> */}
      <HeroTwo />
      <Services />
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;
