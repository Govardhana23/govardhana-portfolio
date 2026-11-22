import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { AchievementsSection } from './components/AchievementsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SpecMatchCaseStudyPage } from './components/SpecMatchCaseStudyPage';

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<'home' | 'specmatch-case-study'>('home');
  const [darkMode, setDarkMode] = useState<boolean>(true);

  // Sync route with URL path / hash
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === '/projects/specmatch-ai' || hash === '#/projects/specmatch-ai') {
        setCurrentRoute('specmatch-case-study');
      } else {
        setCurrentRoute('home');
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (route: 'home' | 'specmatch-case-study') => {
    setCurrentRoute(route);
    if (route === 'specmatch-case-study') {
      window.history.pushState({}, '', '#/projects/specmatch-ai');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.history.pushState({}, '', '#');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Toggle theme class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [darkMode]);

  const scrollToSection = (id: string) => {
    if (currentRoute !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-bg text-brand-text transition-colors duration-300">
      {/* Background Interactive Nodes Canvas */}
      <BackgroundCanvas />

      {/* Navigation Bar */}
      <Navbar
        currentRoute={currentRoute}
        setCurrentRoute={navigateTo}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Content Router */}
      {currentRoute === 'home' ? (
        <main className="relative z-10">
          <HeroSection
            onExploreWork={() => scrollToSection('projects')}
            onConnect={() => scrollToSection('contact')}
            onOpenSpecMatch={() => navigateTo('specmatch-case-study')}
          />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection
            onOpenSpecMatch={() => navigateTo('specmatch-case-study')}
          />
          <ExperienceSection />
          <EducationSection />
          <AchievementsSection />
          <CertificationsSection />
          <ContactSection />
        </main>
      ) : (
        <main className="relative z-10">
          <SpecMatchCaseStudyPage onBackToHome={() => navigateTo('home')} />
        </main>
      )}

      {/* Site Footer */}
      <Footer />
    </div>
  );
};
