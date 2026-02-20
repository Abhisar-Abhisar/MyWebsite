import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import PortfolioSection from '@/components/PortfolioSection';
import SkillsSection from '@/components/SkillsSection';
import AchievementsSection from '@/components/AchievementsSection';
import LeadershipSection from '@/components/LeadershipSection';
import Axlr8rSection from '@/components/Axlr8rSection';
import EducationSection from '@/components/EducationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <PortfolioSection />
        <SkillsSection />
        <AchievementsSection />
        <LeadershipSection />
        <Axlr8rSection />
        <EducationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
