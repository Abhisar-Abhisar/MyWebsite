import { useEffect, useRef } from 'react';
import { Sparkles, BarChart3, Target, Leaf } from 'lucide-react';
import StaticImage from './StaticImage';

const ProjectsSection = () => {
  const chatbotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the Wonderchat script
    const script = document.createElement('script');
    script.src = 'https://app.wonderchat.io/scripts/wonderchat-searchbar.js';
    script.setAttribute('chatbotId', 'cmkv46un107g9wuy57oaf2ku6');
    script.setAttribute('showSuggestedQuestions', 'true');
    script.async = true;
    
    if (chatbotRef.current) {
      chatbotRef.current.appendChild(script);
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            Data-driven research and product development
          </p>
        </div>

        {/* Featured Project */}
        <div className="card-base max-w-5xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Content */}
            <div className="space-y-6">
              <div>
                <span className="achievement-badge mb-4 inline-block">
                  <Sparkles className="w-3 h-3" />
                  Featured Research
                </span>
                <h3 className="text-2xl font-bold text-foreground font-serif mb-2">
                  Optimizing Ethanol-Petrol Ratios for Vehicle Performance
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                A comprehensive machine learning analysis to identify optimal ethanol blending ratios
                for maximizing vehicle efficiency while minimizing emissions.
              </p>

              {/* Key Findings */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-highlight/10 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-4 h-4 text-highlight" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">35+ lakh data points</span>
                    <span className="text-muted-foreground"> analyzed using supervised ML</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-highlight/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4 text-highlight" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">47 → 4 parameters</span>
                    <span className="text-muted-foreground"> reduced, explaining 91% prediction variation</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-highlight/10 flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-4 h-4 text-highlight" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">E20 and E80</span>
                    <span className="text-muted-foreground"> identified as optimal ethanol blends</span>
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="card-metric">
                  <div className="card-metric-value">R² = 0.97</div>
                  <div className="card-metric-label">Model Fit</div>
                </div>
                <div className="card-metric">
                  <div className="card-metric-value">84%</div>
                  <div className="card-metric-label">Accuracy</div>
                </div>
                <div className="card-metric">
                  <div className="card-metric-value">91%</div>
                  <div className="card-metric-label">Variance Explained</div>
                </div>
              </div>
            </div>

            {/* Project Image */}
            <div className="flex items-center justify-center">
              <StaticImage
                src="/images/ethanol-project.jpg"
                alt="Ethanol Blending Project"
                type="project"
                className="w-full aspect-[4/3]"
              />
            </div>
          </div>
        </div>

        {/* Interactive Chatbot Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground font-serif mb-2">
              Ask Questions About My Ethanol Blending Project
            </h3>
            <p className="text-muted-foreground">
              Explore the research through an interactive AI-powered chatbot
            </p>
          </div>

          <div className="chatbot-container">
            <div id="wonderchat-searchbar" ref={chatbotRef}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
