import { Sparkles, Users, Target } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Sparkles,
      title: 'Creative Strategist',
      description: 'Crafting compelling content and campaigns that resonate with your audience.',
    },
    {
      icon: Users,
      title: 'Brand Partner',
      description: 'Working closely with brands to amplify their voice and grow their presence.',
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'Focused on measurable outcomes and continuous improvement.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-cream/50 backdrop-blur-sm">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <p className="text-primary font-medium mb-3">About Me</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Combining Creativity with Structure
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a <span className="text-foreground font-medium">Digital Marketing and Communications Specialist</span> and a dedicated <span className="text-foreground font-medium">Virtual Assistant</span>. I combine strategic marketing with hands-on support, creating campaigns that generate leads and engagement while keeping businesses and individuals organized and running efficiently.
              </p>
              <p>
                With strong experience in social media management, copywriting, content development, media buying, metric analysis, and campaign coordination, I bring a strategic approach to every project.
              </p>
              <p>
                As a Virtual Assistant, I provide dependable support like managing schedules, emails, itineraries, and documentation. I combine creativity with structure to support brands and individuals.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-border flex items-start gap-5 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-sage-light rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
