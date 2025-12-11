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
    <section id="about" className="section-padding bg-cream-dark">
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
                I'm a <span className="text-foreground font-medium">Digital Marketing</span> and <span className="text-foreground font-medium">Corporate Communications</span> professional who also works as a Virtual Assistant. I support brands by managing their online presence, organizing operations, and improving communication efficiency.
              </p>
              <p>
                With strong experience in social media management, caption writing, content development, and campaign coordination, I bring a strategic approach to every project. As a Virtual Assistant, I'm skilled in managing schedules, emails, itineraries, notes, and administrative tasks.
              </p>
              <p>
                I combine creativity with structure to support brands and executives—whether it's crafting the perfect social media campaign or ensuring your inbox is organized and your meetings run smoothly.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="card-elevated flex items-start gap-5 hover-lift"
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
