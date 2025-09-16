import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import AnimatedIcon from "./AnimatedIcon";
import { MicroInteractionButton } from "./Microinteractions";
import winmaxLogo from "@/assets/winmax-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
      ${isScrolled 
        ? 'bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-xl py-2' 
        : 'bg-background/80 backdrop-blur-sm border-b border-transparent py-4'
      }
    `}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={winmaxLogo}
              alt="Winmax Gulf Logo"
              className="h-8 md:h-10 w-auto filter brightness-150 contrast-125 drop-shadow-[0_0_20px_rgba(255,165,0,0.9)] drop-shadow-[0_0_40px_rgba(255,165,0,0.6)] hover:drop-shadow-[0_0_30px_rgba(255,165,0,1)] hover:drop-shadow-[0_0_60px_rgba(255,165,0,0.8)] transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="relative text-foreground hover:text-winmax.orange transition-all duration-300 group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-winmax.orange transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#services" className="relative text-foreground hover:text-winmax.orange transition-all duration-300 group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-winmax.orange transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="relative text-foreground hover:text-winmax.orange transition-all duration-300 group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-winmax.orange transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#process" className="relative text-foreground hover:text-winmax.orange transition-all duration-300 group">
              Process
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-winmax.orange transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="relative text-foreground hover:text-winmax.orange transition-all duration-300 group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-winmax.orange transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <MicroInteractionButton 
              className="bg-gradient-to-r from-winmax.orange to-winmax.orange-light hover:shadow-xl"
              onClick={() => window.open('https://wa.me/+97142713101?text=Hello%20I%20want%20to%20know%20about%20your%20services', '_blank')}
            >
              Get Quote
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </MicroInteractionButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-foreground hover:text-winmax.orange transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#services" 
                className="text-foreground hover:text-winmax.orange transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="text-foreground hover:text-winmax.orange transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#process" 
                className="text-foreground hover:text-winmax.orange transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Process
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-winmax.orange transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button 
                className="bg-gradient-to-r from-winmax.orange to-winmax.orange-light hover:opacity-90 transition-opacity mt-4"
                onClick={() => {
                  window.open('https://wa.me/+97142713101?text=Hello%20I%20want%20to%20know%20about%20your%20services', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;