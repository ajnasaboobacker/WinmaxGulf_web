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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <InteractiveElements />
      <Services />
      <TechnologyShowcase />
      <About />
      <Gallery />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      <CharacterAnimations />
    </div>
  );
};

export default Index;
