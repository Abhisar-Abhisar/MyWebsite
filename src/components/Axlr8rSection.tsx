import { Flag, Wrench, Users, DollarSign, Clock, Scale } from 'lucide-react';
import PhotoUploadSlot from './PhotoUploadSlot';

const highlights = [
  {
    icon: <Flag className="w-5 h-5" />,
    text: 'Represented India and IIT Delhi at Formula Student Germany at the Hockenheimring',
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    text: 'Designed and fabricated a lightweight, high-performance chassis',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    text: 'Reduced assembly time by 60%',
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    text: 'Reduced costs by 20% while lowering car weight by 5%',
  },
  {
    icon: <Scale className="w-5 h-5" />,
    text: 'Managed budgets, BOM, and cost breakdowns',
  },
  {
    icon: <Users className="w-5 h-5" />,
    text: 'Trained 40+ freshers',
  },
];

const Axlr8rSection = () => {
  return (
    <section id="axlr8r" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">AXLR8R Formula Racing</h2>
          <p className="section-subtitle mx-auto">
            IIT Delhi's Formula Student Team
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="card-base">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Content */}
              <div className="space-y-6">
                <div>
                  <span className="achievement-badge mb-4 inline-block">
                    <Flag className="w-3 h-3" />
                    International Competition
                  </span>
                </div>

                <div className="space-y-4">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent">
                        {highlight.icon}
                      </div>
                      <p className="text-foreground/80 pt-2">{highlight.text}</p>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div className="card-metric">
                    <div className="card-metric-value">60%</div>
                    <div className="card-metric-label">Time Saved</div>
                  </div>
                  <div className="card-metric">
                    <div className="card-metric-value">20%</div>
                    <div className="card-metric-label">Cost Reduced</div>
                  </div>
                  <div className="card-metric">
                    <div className="card-metric-value">40+</div>
                    <div className="card-metric-label">Freshers Trained</div>
                  </div>
                </div>
              </div>

              {/* Image Upload Slot */}
              <div className="flex items-center justify-center">
                <PhotoUploadSlot
                  type="project"
                  label="AXLR8R Photo"
                  className="w-full aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Axlr8rSection;
