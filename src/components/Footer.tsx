import { Phone, Mail, Linkedin, Download, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="footer-gradient py-16">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Contact Section */}
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Let's Connect</h2>
            <p className="text-muted-foreground text-lg">
              Open to discussing product opportunities, collaborations, and new ventures
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="tel:+917838304520"
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 text-accent" />
              <span className="font-medium">+91 7838304520</span>
            </a>

            <a
              href="mailto:abhisar.abhisar@outlook.com"
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <Mail className="w-5 h-5 text-accent" />
              <span className="font-medium">abhisar.abhisar@outlook.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/abhisar03"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5 text-accent" />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>

          {/* Resume Download */}
          <div className="text-center mb-12">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="btn-hero-primary"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Abhisar. All rights reserved.
              </p>

              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Back to top
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
