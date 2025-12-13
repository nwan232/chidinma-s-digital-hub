import { Briefcase, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      role: 'Digital Marketing and Corporate Communications Support',
      company: 'SFH Access',
      period: 'April 2025 – Present',
      current: true,
    },
    {
      role: 'Executive Assistant',
      company: 'Hon. Maruf Taiwo Hassan – Senior Special Assistant (SSA) on Public Health to the Governor of Osun State',
      period: '2024 – Present',
      current: true,
    },
    {
      role: 'Digital Marketing Associate',
      company: 'Virces Kiddies',
      period: '2023 – Present',
      current: true,
    },
  ];

  return (
    <section id="experience" className="section-padding bg-cream">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3">My Journey</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Building expertise across digital marketing, corporate communications, and executive support.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative flex gap-6 group"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-shrink-0 w-12 h-12 bg-sage-light rounded-full items-center justify-center z-10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Briefcase className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>

                  {/* Content card */}
                  <div className="flex-1 card-elevated p-6 lg:p-8 hover-lift">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="inline-flex items-center px-3 py-1 bg-sage-light text-primary text-xs font-medium rounded-full whitespace-nowrap">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-3">{exp.company}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
