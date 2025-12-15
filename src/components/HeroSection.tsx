import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import chidinmaPortrait from '@/assets/chidinma-portrait.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-sage-light/40 rounded-full blur-3xl opacity-60 animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-light/40 rounded-full blur-3xl opacity-40" style={{ animationDelay: '2s' }} />
      
      <div className="container-narrow section-padding pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-primary font-medium mb-4 animate-fade-up">
              Digital Marketer & Virtual Assistant
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 animate-fade-up stagger-1">
              Hi, I'm{' '}
              <span className="text-gradient">Chidinma</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl animate-fade-up stagger-2">
              I help businesses grow through strategic digital marketing and efficient virtual assistance. Let's bring your brand to life and streamline your operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up stagger-3">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">
                  Hire Me
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#" download>
                  <Download size={20} />
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          {/* Portrait */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-up stagger-2">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-full" />
              <div className="absolute -inset-8 border border-gold/30 rounded-full" />
              
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
                <img
                  src={chidinmaPortrait}
                  alt="Chidinma Nwankwoala - Digital Marketer and Virtual Assistant"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-border animate-float">
                <span className="text-sm font-medium text-foreground">2+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
