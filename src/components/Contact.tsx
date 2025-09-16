import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle, Clock, Globe } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+971 4 271 3101",
      link: "tel:+97142713101"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      value: "Chat with us",
      link: "https://wa.me/+97142713101?text=Hello%20I%20want%20to%20know%20about%20your%20services"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "info@winmaxgulf.com",
      link: "mailto:info@winmaxgulf.com"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Dubai, UAE",
      link: "#"
    }
  ];

  const services = [
    { name: "PDLC Smart Film", link: "https://wa.me/+97142713101?text=Hello%20I%20want%20to%20know%20about%20your%20PDLC%20services" },
    { name: "LED Display Systems", link: "https://wa.me/+97142713101?text=Hello%20I%20want%20to%20know%20about%20your%20LED%20DISPLAY%20services" },
    { name: "DJ Club Solutions", link: "https://wa.me/+97142713101?text=Hello%20I%20want%20to%20know%20about%20your%20DJSOLUTION%20services" },
    { name: "Custom Solutions", link: "https://wa.me/+97142713101?text=Hello%20I%20want%20to%20know%20about%20your%20custom%20solutions" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-winmax-orange/20 border border-winmax-orange/30 mb-6">
            <span className="text-sm font-medium text-winmax-orange">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Let's Start Your 
            <span className="bg-gradient-to-r from-winmax-orange to-winmax-orange-light bg-clip-text text-transparent"> Project</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Ready to transform your space with innovative technology? Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Info */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-card to-secondary/10 border-border/50 hover:border-winmax-orange/50 cursor-pointer"
                  onClick={() => info.link !== "#" && window.open(info.link, '_blank')}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-winmax-orange to-winmax-orange-light rounded-lg text-primary-foreground">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg group-hover:text-winmax-orange transition-colors text-foreground">
                          {info.title}
                        </h4>
                        <p className="text-foreground/80">{info.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Business Hours */}
            <Card className="bg-winmax-orange/10 border border-winmax-orange/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-winmax-orange to-winmax-orange-light rounded-lg text-primary-foreground">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-lg text-foreground">Business Hours</h4>
                </div>
                <div className="space-y-2 text-foreground/80">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Quick Actions */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Quick Contact</h3>
            
            {/* Service Buttons */}
            <div className="space-y-4 mb-8">
              <h4 className="font-semibold text-lg mb-4 text-foreground">Enquire About Our Services:</h4>
              {services.map((service, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start border-winmax-orange/30 text-winmax-orange hover:bg-winmax-orange/10 transition-colors"
                  onClick={() => window.open(service.link, '_blank')}
                >
                  <MessageCircle className="mr-3 h-5 w-5" />
                  {service.name}
                </Button>
              ))}
            </div>

            {/* Main CTA */}
            <Card className="bg-winmax-orange/10 border border-winmax-orange/20">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-gradient-to-r from-winmax-orange to-winmax-orange-light rounded-full text-primary-foreground mb-4">
                    <MessageCircle className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-foreground">Chat with Us Now</h4>
                  <p className="text-foreground/80">
                    Get instant responses to your questions via WhatsApp
                  </p>
                </div>
                <Button 
                  size="lg"
                  className="w-full bg-gradient-to-r from-winmax-orange to-winmax-orange-light hover:opacity-90 transition-opacity"
                  onClick={() => window.open('https://wa.me/+97142713101?text=Hello%20I%20want%20to%20know%20about%20your%20services', '_blank')}
                >
                  Start WhatsApp Chat
                </Button>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="mt-8 p-6 rounded-lg bg-winmax-orange/10 border border-winmax-orange/20">
              <div className="flex items-center space-x-4 mb-4">
                <Globe className="h-6 w-6 text-winmax-orange" />
                <h4 className="font-semibold text-foreground">Serving Across UAE</h4>
              </div>
              <p className="text-foreground/80">
                We provide our services across Dubai, Abu Dhabi, Sharjah, and all other Emirates in the UAE.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="p-8 rounded-lg bg-gradient-to-r from-background to-secondary/20 border border-border">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Transform Your Space?</h3>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who have upgraded their spaces with our innovative technology solutions.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-winmax-orange to-winmax-orange-light hover:opacity-90 transition-opacity"
              onClick={() => window.open('https://wa.me/+97142713101?text=Hello%20I%20want%20to%20schedule%20a%20free%20consultation', '_blank')}
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;