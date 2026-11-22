import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  ArrowUpRight, 
  CheckCircle2, 
  Cpu, 
  Eye, 
  Radio, 
  FileText, 
  TrendingUp, 
  ExternalLink,
  ChevronRight,
  Zap,
  ShieldCheck
} from 'lucide-react';
import { SPECMATCH_DATA, OTHER_PROJECTS } from '../data/portfolioData';
import { SpecMatchFeatureCard } from './SpecMatchFeatureCard';
import { Project } from '../types';

interface ProjectsSectionProps {
  onOpenSpecMatch: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenSpecMatch,
}) => {
  const [selectedProjectModal, setSelectedProjectModal] = useState<Project | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'gold-chain-appraisal':
        return <Eye className="w-5 h-5 text-brand-amber" />;
      case 'smart-pothole-detection':
        return <Radio className="w-5 h-5 text-brand-emerald" />;
      case 'fake-news-detection':
        return <FileText className="w-5 h-5 text-brand-blue" />;
      default:
        return <Cpu className="w-5 h-5 text-brand-blue" />;
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-blue/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-blue font-medium">
              <Layers className="w-3.5 h-3.5 text-brand-blue" />
              <span>ENGINEERING PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-brand-text tracking-tight">
              Featured <span className="text-gradient">Projects.</span>
            </h2>
            <p className="text-sm sm:text-base text-brand-textMuted max-w-2xl">
              Production architectures, applied machine learning systems, and computer vision pipelines built for real-world impact.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-brand-textMuted">
            <span className="w-2 h-2 rounded-full bg-brand-emerald"></span>
            <span>4 Complete Implementations</span>
          </div>
        </div>

        {/* 1. FLAGSHIP PROJECT: SPECMATCH AI OVERSIZED CARD */}
        <div className="space-y-3">
          <SpecMatchFeatureCard onOpenCaseStudy={onOpenSpecMatch} />
        </div>

        {/* Divider / Label for Other Engineering Systems */}
        <div className="pt-6 border-t border-brand-border/60">
          <div className="flex items-center justify-between pb-6">
            <span className="text-xs font-mono text-brand-textMuted uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4 text-brand-violet" />
              SPECIALIZED APPLIED AI & SYSTEMS WORK
            </span>
            <span className="text-xs font-mono text-brand-blue">
              Computer Vision • IoT • NLP
            </span>
          </div>

          {/* 2. SOPHISTICATED 3-PROJECT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {OTHER_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="group bg-brand-surface/70 border border-brand-border rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-brand-borderLight hover:bg-brand-elevated/40 transition-all duration-300 relative overflow-hidden shadow-xl"
              >
                {/* Subtle top card glow accent */}
                <div
                  className="absolute top-0 right-0 w-36 h-36 rounded-full blur-2xl opacity-15 pointer-events-none group-hover:opacity-30 transition-opacity"
                  style={{ backgroundColor: proj.accentColor }}
                />

                <div className="space-y-5">
                  {/* Top Meta & Category */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-10 h-10 rounded-xl bg-brand-elevated border border-brand-border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {getProjectIcon(proj.id)}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-elevated text-brand-textMuted border border-brand-border truncate">
                      {proj.category.split('|')[0]}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-text group-hover:text-brand-blue transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs font-medium text-brand-textMuted mt-1 line-clamp-2">
                      {proj.tagline}
                    </p>
                  </div>

                  {/* Concise Description */}
                  <p className="text-xs sm:text-sm text-brand-textMuted/90 leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Real Metrics Badges */}
                  {proj.metrics && (
                    <div className="grid grid-cols-2 gap-2 pt-1 font-mono">
                      {proj.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl bg-brand-elevated/80 border border-brand-border">
                          <span className="text-[10px] text-brand-textMuted block truncate">
                            {m.label}
                          </span>
                          <span className="text-xs sm:text-sm font-extrabold text-brand-text block mt-0.5" style={{ color: proj.accentColor }}>
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Key Contributions Checklist */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-mono text-brand-textMuted uppercase tracking-wider block">
                      KEY CONTRIBUTIONS:
                    </span>
                    {proj.highlights.slice(0, 3).map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-brand-textMuted">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Pills */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {proj.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-brand-surface text-[10px] font-mono text-brand-textMuted border border-brand-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-6 mt-6 border-t border-brand-border/60 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProjectModal(proj)}
                    className="text-xs font-heading font-semibold text-brand-blue hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-[10px] font-mono text-brand-textMuted">
                    Verified Build
                  </span>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal for Extended Project Specifications */}
      {selectedProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0B0D14] border border-brand-border rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-brand-border">
              <div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-elevated text-brand-blue border border-brand-border">
                  {selectedProjectModal.category}
                </span>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-text mt-2">
                  {selectedProjectModal.title}
                </h3>
                <p className="text-xs text-brand-textMuted mt-0.5">
                  {selectedProjectModal.tagline}
                </p>
              </div>
              <button
                onClick={() => setSelectedProjectModal(null)}
                className="p-1.5 rounded-lg bg-brand-surface text-brand-textMuted hover:text-white border border-brand-border"
              >
                ✕
              </button>
            </div>

            {/* Description */}
            <p className="text-sm text-brand-textMuted leading-relaxed">
              {selectedProjectModal.description}
            </p>

            {/* Metrics */}
            {selectedProjectModal.metrics && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedProjectModal.metrics.map((m, i) => (
                  <div key={i} className="p-3 rounded-xl bg-brand-surface border border-brand-border">
                    <span className="text-[10px] font-mono text-brand-textMuted block">{m.label}</span>
                    <span className="text-lg font-mono font-bold text-brand-text block mt-0.5" style={{ color: selectedProjectModal.accentColor }}>
                      {m.value}
                    </span>
                    {m.note && <span className="text-[10px] text-brand-textMuted/70 block mt-0.5">{m.note}</span>}
                  </div>
                ))}
              </div>
            )}

            {/* Complete Highlights */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-brand-text uppercase tracking-wider">
                All Engineering Highlights & Contributions:
              </h4>
              <div className="space-y-2 text-xs text-brand-textMuted">
                {selectedProjectModal.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-2 rounded-lg bg-brand-surface border border-brand-border/60">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete Tech Stack */}
            <div className="space-y-2 pt-2 border-t border-brand-border/60">
              <span className="text-[10px] font-mono text-brand-textMuted uppercase tracking-wider block">
                TECHNOLOGY IMPLEMENTATION:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedProjectModal.technologies.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-lg bg-brand-elevated text-xs font-mono text-brand-text border border-brand-border">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Close Button */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedProjectModal(null)}
                className="px-5 py-2 rounded-xl bg-brand-surface border border-brand-border text-xs font-semibold text-brand-text hover:bg-brand-elevated transition-colors"
              >
                Close Specifications
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
