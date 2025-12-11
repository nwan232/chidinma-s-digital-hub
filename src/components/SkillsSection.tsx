const SkillsSection = () => {
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
  ];

  return (
    <section id="skills" className="section-padding bg-cream-dark">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3">My Toolkit</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Tools I Use
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I leverage modern tools and platforms to deliver efficient, high-quality work for every project.
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
