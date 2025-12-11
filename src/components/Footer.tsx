import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container-narrow px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="font-display text-2xl font-semibold">
            Chidinma<span className="text-primary">.</span>
          </a>

          <p className="text-background/70 text-sm flex items-center gap-2">
            Made with <Heart size={14} className="text-accent" /> © {new Date().getFullYear()} Chidinma Nwankwoala
          </p>

          <nav className="flex gap-6 text-sm">
            <a href="#about" className="text-background/70 hover:text-background transition-colors">
              About
            </a>
            <a href="#services" className="text-background/70 hover:text-background transition-colors">
              Services
            </a>
            <a href="#contact" className="text-background/70 hover:text-background transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
