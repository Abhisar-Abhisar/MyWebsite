import { Award, Star, BookOpen, Trophy, BadgeCheck } from 'lucide-react';

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    icon: <Trophy className="w-5 h-5" />,
    title: 'Rewards and Recognition at HiLabs',
    description: 'Recognized for leading LLM-driven automation initiatives',
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Minor in Business Management',
    description: 'GPA 9.25 from IIT Delhi',
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: 'International Formula Student',
    description: 'Qualified multiple International Formula Student quizzes',
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: 'CBSE Certificate of Merit',
    description: 'Top 0.1% in Mathematics',
  },
  {
    icon: <BadgeCheck className="w-5 h-5" />,
    title: 'Professional Certifications',
    description: 'Machine Learning, AI, and Project Management certifications',
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle mx-auto">
            Recognition and milestones throughout my journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="card-base flex items-start gap-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 text-gold">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 font-sans">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
