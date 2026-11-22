import React from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  Zap, 
  ExternalLink,
  Medal,
  ChevronRight
} from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  const triggerConfetti = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { x, y },
        colors: ['#4D8DFF', '#916BFF', '#00F2FE', '#10B981', '#F59E0B'],
        disableForReducedMotion: true
      });
    } catch {
      // Fallback
    }
  };

  const getAwardIcon = (category: string) => {
    switch (category) {
      case 'Hackathon':
        return <Trophy className="w-5 h-5 text-brand-amber" />;
      case 'Academic':
        return <Award className="w-5 h-5 text-brand-emerald" />;
      case 'Competitive':
        return <Code2 className="w-5 h-5 text-brand-blue" />;
      default:
        return <Medal className="w-5 h-5 text-brand-violet" />;
    }
  };

  return (
    <section id="achievements" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[400px] bg-brand-violet/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-blue font-medium">
              <Trophy className="w-3.5 h-3.5 text-brand-blue" />
              <span>COMPETITIVE MERIT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-brand-text tracking-tight">
              Milestones, <span className="text-gradient">Not Just Metrics.</span>
            </h2>
            <p className="text-sm sm:text-base text-brand-textMuted max-w-xl">
              Competitive hackathon championships, national-level engineering qualifications, and algorithmic problem-solving distinctions.
            </p>
          </div>

          <div className="text-xs font-mono text-brand-textMuted">
            Click cards to celebrate achievements ✦
          </div>
        </div>

        {/* Distinctive Award Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.id}
              onClick={triggerConfetti}
              className="group bg-brand-surface/70 border border-brand-border rounded-2xl p-6 sm:p-7 hover:border-brand-borderLight hover:bg-brand-elevated/60 transition-all duration-300 relative overflow-hidden flex flex-col justify-between shadow-xl cursor-pointer"
            >
              {/* Subtle award border shimmer */}
              <div className="space-y-4">
                
                {/* Header: Icon & Category Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="w-10 h-10 rounded-xl bg-brand-elevated border border-brand-border flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {getAwardIcon(ach.category)}
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-brand-elevated text-brand-cyan border border-brand-border font-bold">
                    {ach.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-brand-text group-hover:text-brand-blue transition-colors leading-snug">
                    {ach.title}
                  </h3>
                  <p className="text-xs font-mono text-brand-textMuted mt-1">
                    {ach.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-brand-textMuted/90 leading-relaxed">
                  {ach.description}
                </p>

              </div>

              {/* Card Footer */}
              <div className="pt-5 mt-5 border-t border-brand-border/60 flex items-center justify-between text-xs font-mono">
                {ach.year && (
                  <span className="text-brand-textMuted">
                    Year: {ach.year}
                  </span>
                )}
                {ach.metric && (
                  <span className="text-brand-emerald font-bold">
                    Problems: {ach.metric}
                  </span>
                )}
                <span className="text-brand-blue group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                  Verified <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
