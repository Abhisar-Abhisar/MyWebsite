import { GraduationCap, Building } from 'lucide-react';
interface Education {
  degree: string;
  institution: string;
  type: 'university' | 'school';
}
const educationList: Education[] = [{
  degree: 'B.Tech in Mechanical Engineering',
  institution: 'IIT Delhi',
  type: 'university'
}, {
  degree: 'Minor Degree in Business Management',
  institution: 'IIT Delhi',
  type: 'university'
}, {
  degree: 'Class XII (CBSE)',
  institution: 'Abhinav Public School',
  type: 'school'
}, {
  degree: 'Class X (CBSE)',
  institution: 'The Srijan School',
  type: 'school'
}];
const EducationSection = () => {
  return <section className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle mx-auto">Academic foundation </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            {educationList.map((edu, index) => <div key={index} className="card-base flex items-center gap-4" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${edu.type === 'university' ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                  {edu.type === 'university' ? <GraduationCap className="w-6 h-6" /> : <Building className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground font-sans">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default EducationSection;