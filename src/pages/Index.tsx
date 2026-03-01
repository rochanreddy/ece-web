import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ToolsSection from "@/components/ToolsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import FounderSection from "@/components/FounderSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen font-body">
    <Navbar />
    <HeroSection />
    <FounderSection />
    <FeaturesSection />
    <ProjectsSection />
    <ToolsSection />
    <WhyChooseUsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
