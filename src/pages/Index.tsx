import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InteractiveElements from "@/components/InteractiveElements";
import Services from "@/components/Services";
import TechnologyShowcase from "@/components/TechnologyShowcase";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CharacterAnimations from "@/components/CharacterAnimations";
import FloatingChatWidget from "@/components/FloatingChatWidget";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";
import SectionNavigation from "@/components/SectionNavigation";
import SEOHead from "@/components/SEOHead";
import TrustBadges from "@/components/TrustBadges";
import EnhancedTestimonials from "@/components/EnhancedTestimonials";

const Index = () => {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-background">
      <ScrollProgressIndicator />
      <SectionNavigation />
      <Header />
      <Hero />
      <InteractiveElements />
      <Services />
      <TechnologyShowcase />
      <About />
      <TrustBadges />
      <Gallery />
      <Process />
      <EnhancedTestimonials />
      <Contact />
      <Footer />
      <CharacterAnimations />
      <FloatingChatWidget />
      </div>
    </>
  );
};

export default Index;
