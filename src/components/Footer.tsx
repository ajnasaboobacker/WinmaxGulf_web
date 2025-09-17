import { Globe, Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-secondary/20 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-winmax-orange to-winmax-orange-light rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-winmax-orange to-winmax-orange-light bg-clip-text text-transparent">
                Winmax Gulf
              </span>
            </div>
            <p className="text-foreground/80 mb-6 max-w-md">
              Leading UAE provider of PDLC smart film, LED display systems, and turnkey DJ club solutions. 
              Transforming spaces with innovative technology.
            </p>
            <div className="flex space-x-4">
              <a 
                href="tel:+971527200466"
                className="p-2 bg-winmax-orange/20 rounded-lg hover:bg-winmax-orange/30 transition-colors"
              >
                <Phone className="h-5 w-5 text-winmax-orange" />
              </a>
              <a 
                href="mailto:info@winmaxgulf.com"
                className="p-2 bg-winmax-orange/20 rounded-lg hover:bg-winmax-orange/30 transition-colors"
              >
                <Mail className="h-5 w-5 text-winmax-orange" />
              </a>
              <a 
                href="https://wa.me/+971527200466?text=Hello%20I%20want%20to%20know%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-winmax-orange/20 rounded-lg hover:bg-winmax-orange/30 transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-winmax-orange" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Services</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://wa.me/+971527200466?text=Hello%20I%20want%20to%20know%20about%20your%20PDLC%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-winmax-orange transition-colors"
                >
                  PDLC Smart Film
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/+971527200466?text=Hello%20I%20want%20to%20know%20about%20your%20LED%20DISPLAY%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-winmax-orange transition-colors"
                >
                  LED Display Systems
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/+971527200466?text=Hello%20I%20want%20to%20know%20about%20your%20DJSOLUTION%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-winmax-orange transition-colors"
                >
                  DJ Club Solutions
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/+971527200466?text=Hello%20I%20want%20to%20know%20about%20your%20custom%20solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-winmax-orange transition-colors"
                >
                  Custom Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-winmax-orange" />
                <span className="text-foreground/80">+971 527 200 466</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-winmax-orange" />
                <span className="text-foreground/80">+971 504 171 875</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-winmax-orange" />
                <span className="text-foreground/80">+971 4 271 3101</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-winmax-orange" />
                <span className="text-foreground/80">info@winmaxgulf.com</span>
                <span className="text-foreground/80">marimuthu@winmaxgulf.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-winmax-orange" />
                <span className="text-foreground/80">Dubai, UAE</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/80">
            © {currentYear} Winmax Gulf. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-foreground/80 hover:text-winmax-orange transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/80 hover:text-winmax-orange transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;