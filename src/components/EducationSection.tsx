import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Cpu, 
  CheckCircle2,
  Terminal,
  Brain
} from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-blue font-medium">
            <GraduationCap className="w-3.5 h-3.5 text-brand-blue" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-brand-text tracking-tight">
            Academic <span className="text-gradient">Rigour.</span>
          </h2>
          <p className="text-sm sm:text-base text-brand-textMuted max-w-xl">
            Formal training in Artificial Intelligence, Systems Architecture, Algorithms, and Mathematics.
          </p>
        </div>

        {/* Academic Card */}
        <div className="max-w-4xl mx-auto bg-brand-surface/70 border border-brand-border rounded-3xl p-6 sm:p-10 backdrop-blur-md relative overflow-hidden shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-violet/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Institution & Degree */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-brand-text">
                    {EDUCATION.institution}
                  </h3>
                  <p className="text-xs font-mono text-brand-textMuted flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                    {EDUCATION.location}
                  </p>
                </div>
              </div>

              <div className="space-y-1 pl-1">
                <p className="text-base sm:text-lg font-heading font-bold text-gradient-blue">
                  {EDUCATION.degree}
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-brand-textMuted">
                  <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                  <span>{EDUCATION.graduation}</span>
                </div>
              </div>

              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-brand-elevated border border-brand-border text-xs font-mono text-brand-emerald">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>GATE 2026 Qualified Candidate</span>
                </div>
              </div>
            </div>

            {/* Technical Illustration / Coursework Badges */}
            <div className="md:col-span-5 space-y-3 bg-brand-elevated/60 border border-brand-border rounded-2xl p-5">
              <span className="text-xs font-mono text-brand-textMuted uppercase tracking-wider block flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-brand-blue" />
                RELEVANT CORE COURSEWORK:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {EDUCATION.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 rounded-lg bg-brand-surface text-[11px] font-mono text-brand-text border border-brand-border/80"
                  >
                    {course}
                  </span>
                ))}
              </div>
              <div className="pt-2 border-t border-brand-border/60 text-[10px] font-mono text-brand-textMuted flex items-center justify-between">
                <span>CURRICULUM FOCUS</span>
                <span className="text-brand-cyan">AI & Systems Design</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
