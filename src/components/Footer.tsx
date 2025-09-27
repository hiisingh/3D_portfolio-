import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and</span>
            <Code className="h-4 w-4 text-primary" />
            <span>by Alex Johnson</span>
          </div>
          
          <div className="text-muted-foreground text-sm">
            © {currentYear} Alex Johnson. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;