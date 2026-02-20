interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Product and Business',
    skills: [
      'Product Management',
      'Business Requirements',
      'Competitive Analysis',
      'Product Strategy',
      'Market Positioning',
      'Growth Outreach',
    ],
  },
  {
    title: 'Programming and Analytics',
    skills: [
      'Python',
      'MATLAB',
      'R',
      'SQL',
      'Pandas',
      'NumPy',
      'TensorFlow',
      'Machine Learning',
      'Data Visualization',
    ],
  },
  {
    title: 'Tools and Platforms',
    skills: [
      'Excel',
      'Microsoft Office',
      'Jira',
      'Figma',
      'Notion',
      'Smartsheet',
      'Slack',
      'Confluence',
      'Tableau',
      'Power BI',
      'Lovable',
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle mx-auto">
            A multidisciplinary toolkit for building great products
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <h3 className="text-lg font-semibold text-foreground mb-4 font-sans uppercase tracking-wide">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-tag"
                    style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
