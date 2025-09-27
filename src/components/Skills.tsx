import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { SkillsScene } from './3d/3DScenes';
import { Interactive3DSkills } from './3d/Interactive3DSkills';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'React.js', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Frontend' },
    { name: 'Next.js', level: 88, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 92, category: 'Frontend' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'Express.js', level: 82, category: 'Backend' },
    { name: 'MongoDB', level: 80, category: 'Database' },
    { name: 'PostgreSQL', level: 78, category: 'Database' },
    { name: 'Git & GitHub', level: 90, category: 'Tools' },
    { name: 'Docker', level: 75, category: 'Tools' },
    { name: 'AWS', level: 70, category: 'Cloud' },
    { name: 'Vercel', level: 85, category: 'Cloud' },
  ];

  const categories = ['Frontend', 'Backend', 'Database', 'Tools', 'Cloud'];

  const categoryColors = {
    Frontend: 'from-blue-500 to-blue-600',
    Backend: 'from-green-500 to-green-600',
    Database: 'from-purple-500 to-purple-600',
    Tools: 'from-orange-500 to-orange-600',
    Cloud: 'from-cyan-500 to-cyan-600',
  };

  return (
    <section id="skills" className="py-20 relative">
      {/* 3D Skills Scene */}
      <SkillsScene />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to create amazing digital experiences
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((category) => (
            <Card key={category} className="p-8 card-hover">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <span className={`w-4 h-4 rounded-full bg-gradient-to-r ${categoryColors[category]} mr-3`}></span>
                {category}
              </h3>
              
              <div className="grid gap-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="skill-progress">
                        <div
                          className="skill-progress-fill"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${skills.indexOf(skill) * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Interactive 3D Skills Showcase */}
        <div className="mt-16">
          <Interactive3DSkills />
        </div>
      </div>
    </section>
  );
};

export default Skills;