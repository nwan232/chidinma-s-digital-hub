import { ExternalLink, Instagram, FileText, BarChart, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: 'Social Media Captions',
      category: 'Content Creation',
      description: 'Engaging captions that drive interaction and build community.',
      icon: Instagram,
      color: 'bg-sage-light',
      iconColor: 'text-primary',
    },
    {
      title: 'Canva Graphics',
      category: 'Design',
      description: 'Eye-catching visuals for social media posts, stories, and more.',
      icon: ExternalLink,
      color: 'bg-gold-light',
      iconColor: 'text-accent',
    },
    {
      title: 'Campaign Support',
      category: 'Marketing',
      description: 'End-to-end campaign coordination and execution.',
      icon: BarChart,
      color: 'bg-sage-light',
      iconColor: 'text-primary',
    },
    {
      title: 'Reports & Insights',
      category: 'Analytics',
      description: 'Clear, actionable reports that inform strategy.',
      icon: FileText,
      color: 'bg-gold-light',
      iconColor: 'text-accent',
    },
    {
      title: 'VA Deliverables',
      category: 'Virtual Assistance',
      description: 'Itineraries, meeting minutes, and outreach messages.',
      icon: MessageSquare,
      color: 'bg-sage-light',
      iconColor: 'text-primary',
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-cream/50 backdrop-blur-sm">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3">My Work</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Portfolio Highlights
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A glimpse into the work I've done for clients across various industries.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.title}
              className="group bg-card/90 backdrop-blur-sm rounded-2xl shadow-sm border border-border overflow-hidden hover-lift cursor-pointer"
            >
              {/* Preview Area */}
              <div className={`${item.color} h-48 flex items-center justify-center relative overflow-hidden`}>
                <item.icon className={`w-16 h-16 ${item.iconColor} opacity-30 group-hover:opacity-50 transition-opacity`} />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-primary-foreground font-medium flex items-center gap-2">
                    View Sample <ExternalLink size={16} />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#contact">Request Full Portfolio</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
