import Navigation from "@/components/Navigation";
import Solutions from "@/components/Solutions";
import Footer from "@/components/Footer";

const SolutionsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Solutions />
      </div>
      <Footer />
    </div>
  );
};

export default SolutionsPage;