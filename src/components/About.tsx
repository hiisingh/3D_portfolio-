import { Code, Coffee, Users, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    { icon: Users, label: 'Happy Clients', value: '25+' },
    { icon: Award, label: 'Years Experience', value: '4+' },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a love for creating digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo and intro */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <img
                src={profilePhoto}
                alt="Alex Johnson - Web Developer"
                className="w-80 h-80 rounded-3xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                <Code className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>

          {/* About content */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Hello! I'm Alex Johnson
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate Full Stack Web Developer with over 4 years of experience 
                creating digital solutions that make a difference. I specialize in building 
                modern, responsive web applications using cutting-edge technologies.
              </p>
              <p>
                My journey in web development started with a curiosity about how websites work, 
                and it has evolved into a deep passion for creating seamless user experiences 
                and robust backend systems.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center card-hover">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;