import Navigation from "@/components/Navigation";
import Technologies from "@/components/Technologies";
import Footer from "@/components/Footer";

const TechnologiesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Technologies />
      </div>
      <Footer />
    </div>
  );
};

export default TechnologiesPage;