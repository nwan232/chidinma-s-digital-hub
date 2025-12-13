import { Megaphone, Headphones } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Digital Marketing Skills',
      icon: Megaphone,
      color: 'bg-sage-light',
      iconColor: 'text-primary',
      skills: [
        'Social Media Management',
        'Copywriting',
        'Content Strategy & Development',
        'Campaign Planning & Coordination',
        'Email Marketing',
        'Influencer Marketing',
        'Analytics & Tracking',
        'Media Buying',
      ],
    },
    {
      title: 'Virtual Assistant Skills',
      icon: Headphones,
      color: 'bg-gold-light',
      iconColor: 'text-accent',
      skills: [
        'Schedule & Calendar Management',
        'Email Management',
        'Itinerary Planning',
        'Documentation & Reporting',
        'Research & Data Organization',
        'Task & Workflow Management',
        'Client/Team Communication',
      ],
    },
  ];

  const tools = [
    { name: 'Canva', category: 'Design' },
    { name: 'Meta Business Suite', category: 'Social Media' },
    { name: 'Google Workspace', category: 'Productivity' },
    { name: 'Microsoft Office', category: 'Productivity' },
    { name: 'Notion', category: 'Organization' },
    { name: 'Trello', category: 'Project Management' },
    { name: 'Asana', category: 'Project Management' },
    { name: 'Hootsuite', category: 'Social Media' },
    { name: 'Buffer', category: 'Social Media' },
    { name: 'Mailchimp', category: 'Email Marketing' },
    { name: 'MailerLite', category: 'Email Marketing' },
    { name: 'Zoom', category: 'Communication' },
    { name: 'Microsoft Teams', category: 'Communication' },
    { name: 'Google Meet', category: 'Communication' },
    { name: 'ChatGPT', category: 'AI Tools' },
    { name: 'Zoho', category: 'CRM & Productivity' },
  ];

  return (
    <section id="skills" className="section-padding bg-cream-dark">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3">My Expertise</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Skills & Tools
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive skill set for digital marketing and virtual assistance, backed by modern tools.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {skillCategories.map((category) => (
            <div key={category.title} className="card-elevated p-8 lg:p-10">
              <div className={`inline-flex items-center justify-center w-14 h-14 ${category.color} rounded-2xl mb-6`}>
                <category.icon className={`w-7 h-7 ${category.iconColor}`} />
              </div>
              
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                {category.title}
              </h3>

              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <div className={`w-2 h-2 ${category.color} rounded-full`} />
                    <span className="text-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="text-center mb-10">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
            Tools I Use
          </h3>
          <p className="text-muted-foreground">
            Leveraging modern tools and platforms for efficient, high-quality work.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="group relative bg-card px-6 py-4 rounded-full border border-border hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="font-medium text-foreground">{tool.name}</span>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-foreground text-background text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {tool.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
