import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient">Alex Johnson</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground mb-6">
            Full Stack Web Developer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            I create beautiful, responsive, and user-friendly web applications using modern technologies. 
            Passionate about clean code, great design, and seamless user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="hero-button"
              onClick={() => scrollToSection('#contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              className="secondary-button"
              onClick={() => {
                // Simulate resume download
                const link = document.createElement('a');
                link.href = '#';
                link.download = 'Alex-Johnson-Resume.pdf';
                link.click();
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('#about')}
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-200"
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;