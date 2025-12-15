import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ServicesSection from '@/components/ServicesSection';
import SkillsSection from '@/components/SkillsSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Waves } from '@/components/ui/waves-background';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Fixed wave background - always visible */}
      <div className="fixed inset-0 z-0">
        <Waves
          lineColor="rgba(107, 142, 128, 0.12)"
          backgroundColor="hsl(var(--cream))"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          xGap={12}
          yGap={36}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
        />
      </div>

      {/* All content with relative positioning and higher z-index */}
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ServicesSection />
          <SkillsSection />
          <PortfolioSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
