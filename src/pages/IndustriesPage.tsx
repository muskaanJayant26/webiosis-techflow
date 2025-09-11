import Navigation from "@/components/Navigation";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";

const IndustriesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Industries />
      </div>
      <Footer />
    </div>
  );
};

export default IndustriesPage;