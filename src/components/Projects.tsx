import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProjectsScene } from './3d/3DScenes';

// Import project images
import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectDashboard from '@/assets/project-dashboard.jpg';
import projectMobile from '@/assets/project-mobile.jpg';
import projectBlog from '@/assets/project-blog.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with React and Node.js featuring user authentication, payment integration, and admin dashboard.',
      image: projectEcommerce,
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      liveUrl: 'https://example-ecommerce.com',
      githubUrl: 'https://github.com/alexjohnson/ecommerce-platform',
      featured: true,
    },
    {
      id: 2,
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with interactive charts and data visualization for business intelligence and reporting.',
      image: projectDashboard,
      technologies: ['React', 'TypeScript', 'Chart.js', 'Express', 'PostgreSQL'],
      liveUrl: 'https://example-dashboard.com',
      githubUrl: 'https://github.com/alexjohnson/analytics-dashboard',
      featured: true,
    },
    {
      id: 3,
      title: 'Social Media App',
      description: 'Mobile-first social media application with real-time messaging, post sharing, and user interactions.',
      image: projectMobile,
      technologies: ['React Native', 'Firebase', 'Socket.io', 'Redux'],
      liveUrl: 'https://example-social.com',
      githubUrl: 'https://github.com/alexjohnson/social-media-app',
      featured: false,
    },
    {
      id: 4,
      title: 'Tech Blog Platform',
      description: 'Content management system for tech bloggers with markdown support, commenting system, and SEO optimization.',
      image: projectBlog,
      technologies: ['Next.js', 'Prisma', 'MySQL', 'NextAuth', 'MDX'],
      liveUrl: 'https://example-blog.com',
      githubUrl: 'https://github.com/alexjohnson/tech-blog',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-muted/30 relative">
      {/* 3D Projects Scene */}
      <ProjectsScene />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I've worked on recently
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden card-hover group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-foreground mb-3">{project.title}</h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8">More Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project) => (
              <Card key={project.id} className="p-6 card-hover group">
                <div className="flex items-start space-x-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-foreground mb-2">{project.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="text-xs px-3 py-1">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Live
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs px-3 py-1">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects on GitHub
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
