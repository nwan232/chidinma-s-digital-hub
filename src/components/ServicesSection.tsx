import { 
  Megaphone, 
  PenTool, 
  Calendar, 
  BarChart3, 
  Mail,
  LineChart,
  Clock,
  Plane,
  FileText,
  FolderOpen,
  Search,
  Heart,
  CheckSquare,
  Users
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Digital Marketing Services',
      description: 'Growing your brand\'s online presence with strategic, engaging content.',
      color: 'bg-sage-light',
      iconColor: 'text-primary',
      items: [
        { icon: Megaphone, label: 'Social Media Management' },
        { icon: PenTool, label: 'Copywriting' },
        { icon: FileText, label: 'Drafting Content Strategy' },
        { icon: Calendar, label: 'Content Scheduling and Planning' },
        { icon: BarChart3, label: 'Campaign Support and Tracking' },
        { icon: Mail, label: 'Email Marketing' },
        { icon: Users, label: 'Influencer Marketing' },
        { icon: LineChart, label: 'Analytics and Tracking' },
      ],
    },
    {
      title: 'Virtual Assistant Services',
      description: 'Keeping your operations running smoothly and efficiently.',
      color: 'bg-gold-light',
      iconColor: 'text-accent',
      items: [
        { icon: Clock, label: 'Calendar and schedule management' },
        { icon: Plane, label: 'Travel bookings and itineraries' },
        { icon: Mail, label: 'Email drafting and inbox management' },
        { icon: FileText, label: 'Meeting minutes and documentation' },
        { icon: FolderOpen, label: 'Organizing digital files and folders' },
        { icon: Search, label: 'Research tasks' },
        { icon: Heart, label: 'Personal and business support' },
        { icon: CheckSquare, label: 'Task tracking and reminders' },
      ],
    },
  ];

  return (
    <section id="services" className="section-padding bg-cream">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3">What I Do</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Services I Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From building your brand's digital presence to managing your day-to-day operations, I provide comprehensive support tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, serviceIndex) => (
            <div
              key={service.title}
              className="card-elevated p-8 lg:p-10"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 ${service.color} rounded-2xl mb-6`}>
                {serviceIndex === 0 ? (
                  <Megaphone className={`w-7 h-7 ${service.iconColor}`} />
                ) : (
                  <Clock className={`w-7 h-7 ${service.iconColor}`} />
                )}
              </div>
              
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-8">
                {service.description}
              </p>

              <ul className="space-y-4">
                {service.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 group">
                    <div className={`flex-shrink-0 w-8 h-8 ${service.color} rounded-lg flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <item.icon className={`w-4 h-4 ${service.iconColor}`} />
                    </div>
                    <span className="text-foreground">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
