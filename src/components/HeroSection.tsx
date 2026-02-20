import { Mail, Phone, Linkedin, Download, ArrowDown } from 'lucide-react';
import PhotoUploadSlot from './PhotoUploadSlot';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Name & Title */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
                Abhisar
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                Associate Product Manager at HiLabs | IIT Delhi | Product, AI, and Automation
              </p>
            </div>

            {/* Introduction */}
            <p className="text-foreground/80 text-lg leading-relaxed">
              I am a Product Manager passionate about building impactful, scalable, and data-driven products at the intersection of technology, business, and problem-solving. I currently work at HiLabs, a B2B healthcare AI company, where I contribute to the Roster Automation platform, owning product discovery, business requirements, execution, quality assurance, and delivery for enterprise clients.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href="tel:+917838304520"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 7838304520
              </a>
              <a
                href="mailto:abhisar.abhisar@outlook.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                abhisar.abhisar@outlook.com
              </a>
              <a
                href="https://www.linkedin.com/in/abhisar03"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#experience" className="btn-hero-primary">
                View Experience
              </a>
              <a href="#projects" className="btn-hero-secondary">
                View Projects
              </a>
              <a href="#portfolio" className="btn-hero-secondary">
                View Portfolio
              </a>
              <a
                href="#"
                className="btn-accent"
                onClick={(e) => e.preventDefault()}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a href="#contact" className="btn-hero-secondary">
                Contact Me
              </a>
            </div>
          </div>

          {/* Right - Profile Photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/10 rounded-full blur-2xl" />
              <div className="absolute -inset-1 bg-gradient-to-br from-accent/30 to-primary/20 rounded-full" />
              <PhotoUploadSlot type="profile" label="Profile Photo" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-float">
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 text-accent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
