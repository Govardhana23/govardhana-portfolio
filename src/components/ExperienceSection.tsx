import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Terminal, 
  Code2, 
  Database, 
  ArrowUpRight,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden bg-brand-surface/30 border-y border-brand-border/60">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-blue font-medium">
            <Briefcase className="w-3.5 h-3.5 text-brand-blue" />
            <span>INDUSTRY TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-brand-text tracking-tight">
            Experience That <span className="text-gradient">Builds.</span>
          </h2>
          <p className="text-sm sm:text-base text-brand-textMuted max-w-xl">
            Practical backend engineering, production database integrations, and automated operational pipelines.
          </p>
        </div>

        {/* Modern Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Animated Progression Line */}
          <div className="absolute left-4 sm:left-8 top-3 bottom-3 w-[2px] bg-gradient-to-b from-brand-blue via-brand-violet to-brand-border" />

          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-12 sm:pl-20 group">
              
              {/* Timeline Glowing Node */}
              <div className="absolute left-2.5 sm:left-6.5 top-1.5 -translate-x-1/2 w-5 h-5 rounded-full bg-brand-surface border-2 border-brand-blue shadow-md shadow-brand-blue/50 flex items-center justify-center group-hover:scale-125 transition-transform">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping"></span>
              </div>

              {/* Experience Card */}
              <div className="bg-brand-surface/80 border border-brand-border rounded-2xl p-6 sm:p-8 backdrop-blur-md space-y-6 hover:border-brand-borderLight hover:bg-brand-elevated/40 transition-all shadow-xl">
                
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-brand-border/60">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-brand-blue font-bold block">
                      SOFTWARE ENGINEERING INTERNSHIP
                    </span>
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-brand-text mt-0.5">
                      {exp.company}
                    </h3>
                    <p className="text-sm font-semibold text-brand-cyan">
                      {exp.role}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-brand-textMuted">
                    <span className="flex items-center gap-1.5 bg-brand-elevated px-2.5 py-1 rounded-md border border-brand-border">
                      <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <MapPin className="w-3 h-3 text-brand-textMuted" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-sm text-brand-textMuted leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Achievements Grid */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-brand-textMuted uppercase tracking-wider block">
                    ENGINEERING HIGHLIGHTS & OUTCOMES:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {exp.achievements.map((item, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-brand-elevated/70 border border-brand-border flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                        <span className="text-brand-text/90 leading-relaxed font-sans">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-brand-surface text-xs font-mono text-brand-text border border-brand-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
