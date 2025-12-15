import { Linkedin, Palette, BarChart, FileText, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      name: 'Social Media Captions',
      category: 'Content Creation',
      description: 'Engaging captions that drive interaction and build community across platforms like Instagram, LinkedIn, and Facebook.',
      Icon: Linkedin,
      href: '#contact',
      cta: 'View Samples',
      className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
      background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />,
    },
    {
      name: 'Canva Graphics',
      category: 'Design',
      description: 'Eye-catching visuals for social media posts, stories, and marketing materials.',
      Icon: Palette,
      href: '#contact',
      cta: 'See Designs',
      className: 'lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2',
      background: <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />,
    },
    {
      name: 'Campaign Support',
      category: 'Marketing',
      description: 'End-to-end campaign coordination, tracking, and execution for maximum impact.',
      Icon: BarChart,
      href: '#contact',
      cta: 'Learn More',
      className: 'lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3',
      background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />,
    },
    {
      name: 'Reports & Insights',
      category: 'Analytics',
      description: 'Clear, actionable reports that inform strategy and demonstrate ROI for stakeholders.',
      Icon: FileText,
      href: '#contact',
      cta: 'View Examples',
      className: 'lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2',
      background: <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />,
    },
    {
      name: 'VA Deliverables',
      category: 'Virtual Assistance',
      description: 'Professional itineraries, meeting minutes, research summaries, and outreach messages.',
      Icon: MessageSquare,
      href: '#contact',
      cta: 'Request Samples',
      className: 'lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3',
      background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />,
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

        <BentoGrid className="lg:grid-rows-2 lg:auto-rows-[minmax(200px,1fr)]">
          {portfolioItems.map((item) => (
            <BentoCard key={item.name} {...item} />
          ))}
        </BentoGrid>

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
