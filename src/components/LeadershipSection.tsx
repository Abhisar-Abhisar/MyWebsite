import { Users, Calendar, Megaphone } from 'lucide-react';

interface LeadershipRole {
  icon: React.ReactNode;
  title: string;
  organization: string;
}

const leadershipRoles: LeadershipRole[] = [
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Mentor',
    organization: 'Board for Student Welfare (IIT Delhi)',
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: 'Events Coordinator',
    organization: "Entrepreneurship Development Cell (Becon'24)",
  },
  {
    icon: <Megaphone className="w-5 h-5" />,
    title: 'Team Head',
    organization: 'Rendezvous IIT Delhi',
  },
];

const LeadershipSection = () => {
  return (
    <section id="leadership" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Leadership and Campus Roles</h2>
          <p className="section-subtitle mx-auto">
            Building communities and driving initiatives at IIT Delhi
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {leadershipRoles.map((role, index) => (
              <div
                key={index}
                className="card-base text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 text-accent">
                  {role.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2 font-sans">
                  {role.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {role.organization}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
