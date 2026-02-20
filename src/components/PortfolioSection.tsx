import { ExternalLink, FileText } from 'lucide-react';

interface PortfolioItem {
  title: string;
  problem: string;
  link: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'HiLabs Deck',
    problem: 'How can insurers use public data to find and recruit top-performing healthcare providers?',
    link: 'https://1drv.ms/b/c/2281b3d194781807/IQCD3CLG_pk9QK-JEzrpUXgVAf-ddbSUZxlD_AbTjEr9NgM?e=OvOj75',
  },
  {
    title: 'Virtual Internship Deck',
    problem: 'How can individuals find affordable and accessible learning through peer-to-peer connections?',
    link: 'https://1drv.ms/b/c/2281b3d194781807/IQCcaBt3DGbuSbDC6z6lkT0CAaoI5Z0MK7ZfqI2TWcA6rTw?e=C69Ljm',
  },
  {
    title: 'Tata 1MG Deck',
    problem: 'How can we ensure timely emergency care for elderly individuals with limited mobility?',
    link: 'https://1drv.ms/b/c/2281b3d194781807/IQCe_DZgQIMDTrhOIrFrszyfAZXtiOfi9_N3fS0rB-dsc7M?e=7ZnSGV',
  },
  {
    title: 'MBF Deck',
    problem: 'How can we connect people with mentors, workshops, and communities?',
    link: 'https://1drv.ms/b/c/2281b3d194781807/IQB_z3khR7LSSK6kUyAqxahnAWCAwEQR530v94PQsAiV30g?e=JQWXs6',
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Portfolio and Case Studies</h2>
          <p className="section-subtitle mx-auto">
            Product strategy decks and case studies showcasing problem-solving approaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="portfolio-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3 font-sans">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm flex-grow leading-relaxed">
                  {item.problem}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero-secondary mt-6 w-full"
                >
                  Open Deck
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Full Portfolio Link */}
        <div className="text-center">
          <a
            href="https://1drv.ms/f/c/2281b3d194781807/IgDS0Q8Gv931R5gySs0rQ0d7Ae3ETYE_ePvhmibmQMycRu0?e=Suerlt"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent"
          >
            <FileText className="w-4 h-4" />
            View Full Portfolio Folder
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
