import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Chidinma is a highly reliable and efficient professional. In her role as Executive Assistant, she demonstrated strong organization, attention to detail, and a high level of discretion. Her loyalty, professionalism, and ability to manage responsibilities effectively made a positive impact on daily operations.",
      author: "Hon. Maruf Taiwo Hassan",
      role: "Senior Special Assistant (SSA) on Public Health, Governor of Osun State",
      avatar: "MH",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-transparent">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3">Testimonials</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            What Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don't just take my word for it—hear from the brands and professionals I've worked with.
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="relative bg-card/80 backdrop-blur-sm p-8 lg:p-12 rounded-2xl shadow-sm border border-border">
            {/* Large decorative quote */}
            <Quote className="w-16 h-16 text-primary/20 mx-auto mb-8" />
            
            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed font-display italic mb-10">
              "{testimonials[0].quote}"
            </blockquote>

            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-sage-light rounded-full flex items-center justify-center">
                <span className="font-semibold text-primary text-xl">{testimonials[0].avatar}</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-lg">{testimonials[0].author}</p>
                <p className="text-muted-foreground">{testimonials[0].role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
