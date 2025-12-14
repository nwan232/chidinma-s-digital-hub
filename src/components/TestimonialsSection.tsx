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
    <section id="testimonials" className="section-padding bg-cream-dark">
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

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-elevated relative hover-lift"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              <div className="pt-6">
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 bg-sage-light rounded-full flex items-center justify-center">
                    <span className="font-medium text-primary">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
