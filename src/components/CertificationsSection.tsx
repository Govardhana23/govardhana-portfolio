import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  FileCheck, 
  ShieldCheck 
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-brand-surface/20 border-b border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-blue font-medium">
              <FileCheck className="w-3.5 h-3.5 text-brand-blue" />
              <span>INDUSTRY CERTIFICATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-brand-text tracking-tight">
              Verified <span className="text-gradient">Credentials.</span>
            </h2>
          </div>
          <span className="text-xs font-mono text-brand-textMuted">
            Accredited learning & evaluation records
          </span>
        </div>

        {/* Compact Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="p-5 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-blue/30 hover:bg-brand-elevated/40 transition-all space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-brand-elevated border border-brand-border flex items-center justify-center text-brand-blue">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 flex items-center gap-1 font-bold">
                    <CheckCircle2 className="w-3 h-3" /> VERIFIED
                  </span>
                </div>

                <h4 className="font-heading font-bold text-sm text-brand-text leading-snug">
                  {cert.title}
                </h4>
              </div>

              <div className="pt-2 border-t border-brand-border/60">
                <span className="text-[11px] font-mono text-brand-textMuted block">
                  ISSUED BY:
                </span>
                <span className="text-xs font-semibold text-brand-cyan block mt-0.5">
                  {cert.issuer}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
