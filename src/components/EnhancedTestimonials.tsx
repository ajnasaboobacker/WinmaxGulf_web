import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star, Building, MapPin } from "lucide-react";
import EnhancedScrollAnimation from "./EnhancedScrollAnimations";

const EnhancedTestimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Al-Mansouri",
      role: "General Manager",
      company: "Dubai Corporate Center",
      location: "Dubai, UAE",
      image: "/placeholder.svg",
      rating: 5,
      testimonial: "WinmaxGulf transformed our office spaces with their PDLC smart film technology. The privacy control and energy efficiency have exceeded our expectations. Professional installation and excellent support.",
      project: "Office Privacy Solutions",
      projectValue: "AED 150,000"
    },
    {
      name: "Sarah Johnson",
      role: "Event Manager", 
      company: "Premium Events LLC",
      location: "Abu Dhabi, UAE",
      image: "/placeholder.svg",
      rating: 5,
      testimonial: "Their LED display systems made our events spectacular. The image quality is outstanding and the team's technical expertise is unmatched. Highly recommended for any large-scale events.",
      project: "LED Display Rental",
      projectValue: "AED 85,000"
    },
    {
      name: "Omar Hassan",
      role: "Club Owner",
      company: "Nightlife Ventures",
      location: "Dubai, UAE", 
      image: "/placeholder.svg",
      rating: 5,
      testimonial: "Complete DJ club solution delivered on time and within budget. The sound system quality and lighting integration is perfect. Our customers love the immersive experience.",
      project: "Complete DJ Club Setup",
      projectValue: "AED 250,000"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6 lg:px-8">
        <EnhancedScrollAnimation animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              What Our <span className="text-winmax-orange">Clients Say</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Real feedback from satisfied customers across the UAE
            </p>
          </div>
        </EnhancedScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <EnhancedScrollAnimation 
              key={index} 
              animation="slideInRotate" 
              delay={index * 200}
            >
              <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 border-winmax-orange/20 group relative overflow-hidden">
                {/* Background Quote */}
                <Quote className="absolute top-4 right-4 w-12 h-12 text-winmax-orange/10 group-hover:text-winmax-orange/20 transition-colors duration-300" />
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-foreground/80 mb-6 italic leading-relaxed">
                  "{testimonial.testimonial}"
                </blockquote>

                {/* Project Info */}
                <div className="bg-winmax-orange/10 rounded-lg p-3 mb-6">
                  <p className="text-sm font-medium text-winmax-orange">{testimonial.project}</p>
                  <p className="text-xs text-foreground/60">Project Value: {testimonial.projectValue}</p>
                </div>

                {/* Client Info */}
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-winmax-orange text-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/70">{testimonial.role}</p>
                    <div className="flex items-center text-xs text-foreground/60 mt-1">
                      <Building className="w-3 h-3 mr-1" />
                      <span className="mr-2">{testimonial.company}</span>
                      <MapPin className="w-3 h-3 mr-1" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </EnhancedScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedTestimonials;