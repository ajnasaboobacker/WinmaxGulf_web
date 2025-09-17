import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Oliver",
      role: "Designer",
      content: "The LED display solution provided by Winmax added a stunning visual impact to our event. Their team was professional, responsive, and delivered beyond expectations.",
      rating: 5
    },
    {
      name: "Sarah Ahmed",
      role: "Restaurant Owner",
      content: "Their interactive installations in our showroom attract and engage customers like never before. Highly recommend Winmax for anyone looking to upgrade their space with smart tech.",
      rating: 5
    },
    {
      name: "Mohammed Al-Rashid",
      role: "Office Manager",
      content: "The PDLC smart film installation transformed our conference rooms. The instant privacy control is exactly what we needed for our meetings.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            What Our <span className="text-winmax-orange">Clients Say</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-winmax-orange/20 bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-0">
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-winmax-orange/30 mb-4" />
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-winmax-orange text-winmax-orange" />
                    ))}
                  </div>
                </div>
                
                <p className="text-foreground/80 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-winmax-orange to-winmax-orange-light rounded-full flex items-center justify-center">
                    <span className="font-bold text-white text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-winmax-orange">{testimonial.name}</div>
                    <div className="text-sm text-foreground/70">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;