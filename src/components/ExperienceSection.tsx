import { Briefcase, Calendar } from 'lucide-react';
import StaticImage from './StaticImage';

interface ExperienceRole {
  title: string;
  company: string;
  period: string;
  description?: string;
  highlights: {
    category: string;
    items: string[];
  }[];
  metrics?: { value: string; label: string }[];
}

// Helper function to get image path for a company
const getCompanyImage = (company: string): string => {
  const companyLower = company.toLowerCase();
  if (companyLower.includes('hilabs')) return '/images/hilabs.jpg';
  if (companyLower.includes('effisciences')) return '/images/effisciences.jpg';
  if (companyLower.includes('drdo')) return '/images/drdo.jpg';
  if (companyLower.includes('tata steel')) return '/images/tata-steel.jpg';
  if (companyLower.includes('expansive')) return '/images/expansive.jpg';
  return '/images/company-placeholder.jpg';
};

const experiences: ExperienceRole[] = [
  {
    title: 'Associate Product Manager',
    company: 'HiLabs – Roster Automation',
    period: 'June 2025 – Present',
    description: 'At HiLabs, I work on a large-scale enterprise automation platform serving healthcare organizations.',
    highlights: [
      {
        category: 'Product Discovery and Requirements',
        items: [
          'Led discovery calls for a Fortune 50 client across 3 markets, capturing and documenting 200+ business rules',
          'Spent extensive time with business stakeholders to convert workflows into structured, scalable product requirements',
          'Authored detailed Business Requirements Documents (BRDs) to guide engineering execution',
        ],
      },
      {
        category: 'Execution, Delivery, and Cross-Functional Leadership',
        items: [
          'Coordinated 12+ engineers, QAs, and 30+ client SMEs to deliver Phase 1 successfully',
          'Collaborated with engineering and QA teams to implement customized automation logic',
          'Oversaw the end-to-end product lifecycle, from requirements to deployment',
        ],
      },
      {
        category: 'LLM and AI-Driven Automation',
        items: [
          'Built validation scenarios for LLM-based parsing of free-hand roster text across 20+ provider groups',
          'Validated thousands of rule outputs to ensure accuracy and production readiness',
        ],
      },
      {
        category: 'Quality Assurance and UAT Ownership',
        items: [
          'Designed 100+ test scenarios',
          'Trained QA teams and conducted regression testing',
          'Led UAT, product demos, walkthroughs, and direct client collaboration',
          'Supported 20,000+ daily transactions across 20+ provider groups',
        ],
      },
      {
        category: 'Growth and Market Expansion',
        items: [
          'Created 8+ multi-step outreach touchpoints for 10 enterprise clients',
          'Supported structured go-to-market and lead generation',
        ],
      },
    ],
    metrics: [
      { value: '200+', label: 'Business Rules' },
      { value: '12+', label: 'Engineers Led' },
      { value: '20K+', label: 'Daily Transactions' },
      { value: '100+', label: 'Test Scenarios' },
    ],
  },
  {
    title: 'Associate Product Manager Intern',
    company: 'HiLabs',
    period: 'March 2025 – June 2025',
    highlights: [
      {
        category: 'Key Contributions',
        items: [
          'Conducted competitor analysis across 8+ competitors and 12+ features',
          'Built an end-to-end Knowledge Transfer (KT) suite with 8 training videos, manuals, and demos',
          'Reduced onboarding from 3 weeks to 3 days',
          'Identified critical data and UI bugs',
        ],
      },
    ],
    metrics: [
      { value: '8+', label: 'Competitors Analyzed' },
      { value: '90%', label: 'Onboarding Time Reduced' },
      { value: '8', label: 'Training Videos' },
    ],
  },
  {
    title: 'Researcher',
    company: 'EffiSciences',
    period: 'January 2025 – February 2025',
    highlights: [
      {
        category: 'AI Safety Research',
        items: [
          'Contributor to AI Safety Literature Review',
          'Credited at AI Action Summit Paris 2025',
          'Worked with GRASP on safe AI frameworks',
          'Contributed to global AI risk mitigation strategies',
        ],
      },
    ],
  },
  {
    title: 'Research Intern',
    company: 'DRDO',
    period: 'December 2023 – January 2024',
    highlights: [
      {
        category: 'Machine Learning & Cryptography',
        items: [
          'Built CNN models for digit recognition',
          'Developed GAN-based generative AI models',
          'Optimized cryptography pipelines, achieving 60% reduction in training time',
          'Published research with IACR',
          'Received a Letter of Recommendation',
        ],
      },
    ],
    metrics: [
      { value: '60%', label: 'Training Time Reduced' },
      { value: 'IACR', label: 'Published Research' },
    ],
  },
  {
    title: 'Management Intern',
    company: 'Tata Steel',
    period: 'May 2024 – July 2024',
    highlights: [
      {
        category: 'Operations & Analytics',
        items: [
          'Built a Python-based worker tracking system for 90+ workers',
          'Improved productivity by 13% for 600+ workers',
          'Built Tableau dashboards for workforce optimization',
          'Saved approximately ₹5 lakh per month',
        ],
      },
    ],
    metrics: [
      { value: '13%', label: 'Productivity Increase' },
      { value: '₹5L+', label: 'Monthly Savings' },
      { value: '600+', label: 'Workers Impacted' },
    ],
  },
  {
    title: 'Product Analyst Intern',
    company: 'Expansive Solutions',
    period: 'September 2023 – January 2024',
    highlights: [
      {
        category: 'Data Analytics & Product Development',
        items: [
          'Built Python algorithms to compute 40+ KPIs across 12 machines',
          'Analyzed equipment failure patterns in heavy machinery',
          'Developed predictive maintenance insights',
        ],
      },
    ],
    metrics: [
      { value: '40+', label: 'KPIs Developed' },
      { value: '12', label: 'Machines Analyzed' },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Product Management Experience</h2>
          <p className="section-subtitle mx-auto">
            Building impactful products at the intersection of technology, AI, and business
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative md:pl-20 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline Dot */}
                <div className="timeline-dot hidden md:block" style={{ top: '2rem' }} />

                <div className="card-base">
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-4">
                      {/* Header */}
                      <div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <h3 className="text-xl font-bold text-foreground font-sans">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-accent font-medium">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </div>
                      </div>

                      {exp.description && (
                        <p className="text-muted-foreground">{exp.description}</p>
                      )}

                      {/* Highlights */}
                      <div className="space-y-4">
                        {exp.highlights.map((highlight, hIndex) => (
                          <div key={hIndex}>
                            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide mb-2">
                              {highlight.category}
                            </h4>
                            <ul className="space-y-2">
                              {highlight.items.map((item, iIndex) => (
                                <li
                                  key={iIndex}
                                  className="flex items-start gap-2 text-sm text-foreground/80"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Metrics */}
                      {exp.metrics && (
                        <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                          {exp.metrics.map((metric, mIndex) => (
                            <div key={mIndex} className="text-center">
                              <div className="text-xl font-bold text-highlight">
                                {metric.value}
                              </div>
                              <div className="text-xs text-muted-foreground uppercase tracking-wide">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Company Photo */}
                    <div className="flex items-start justify-center lg:justify-end">
                      <StaticImage
                        src={getCompanyImage(exp.company)}
                        alt={`${exp.company} Photo`}
                        type="experience"
                        className="w-full max-w-xs"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
