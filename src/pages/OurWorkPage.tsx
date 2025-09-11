import Navigation from "@/components/Navigation";
import OurWork from "@/components/OurWork";
import Footer from "@/components/Footer";

const OurWorkPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <OurWork />
      </div>
      <Footer />
    </div>
  );
};

export default OurWorkPage;