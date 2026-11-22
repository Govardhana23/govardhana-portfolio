import React from 'react';
import { 
  ArrowUpRight, 
  Cpu, 
  Database, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  FileText, 
  CheckCircle2, 
  Activity,
  Terminal,
  ExternalLink,
  Zap
} from 'lucide-react';
import { SPECMATCH_DATA } from '../data/portfolioData';

interface SpecMatchFeatureCardProps {
  onOpenCaseStudy: () => void;
}

export const SpecMatchFeatureCard: React.FC<SpecMatchFeatureCardProps> = ({
  onOpenCaseStudy,
}) => {
  const data = SPECMATCH_DATA;

  return (
    <div className="relative group rounded-3xl p-1 bg-gradient-to-b from-brand-blue/30 via-brand-violet/20 to-brand-border/60 shadow-2xl transition-all duration-300 hover:shadow-brand-blue/15">
      <div className="bg-[#0B0D14] rounded-[22px] p-6 sm:p-10 lg:p-12 relative overflow-hidden space-y-8">
        
        {/* Ambient background glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-brand-blue/15 rounded-full blur-[130px] pointer-events-none group-hover:bg-brand-blue/25 transition-all duration-700" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-brand-violet/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Top Badges & Meta */}
        <div className="flex flex-wrap items-center justify-between gap-3 relative z-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-blue/20 text-brand-blue border border-brand-blue/40 tracking-wider flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              FLAGSHIP PROJECT
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-surface text-brand-cyan border border-brand-border">
              ENTERPRISE AI
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-surface text-brand-violet border border-brand-border hidden sm:inline-block">
              B2B COMPONENT SOURCING
            </span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 text-xs font-mono text-brand-emerald">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>REAL-CORPUS EVALUATION: PASS</span>
          </div>
        </div>

        {/* Title, Tagline & Description Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          <div className="lg:col-span-7 space-y-4">
            <div>
              <h3 className="text-3xl sm:text-5xl font-extrabold font-heading text-brand-text tracking-tight group-hover:text-brand-text transition-colors">
                {data.title}
              </h3>
              <p className="text-lg sm:text-xl font-semibold text-gradient-blue font-heading mt-1">
                "{data.tagline}"
              </p>
            </div>

            <p className="text-sm sm:text-base text-brand-textMuted leading-relaxed">
              {data.description}
            </p>

            {/* Key Architectural Contributions */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono text-brand-textMuted uppercase tracking-wider block">
                CORE TECHNICAL CONTRIBUTIONS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-brand-surface border border-brand-border flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-brand-text/90">Hybrid RAG: FastEmbed BGE + Qdrant BM25 with RRF & Cross-Encoder</span>
                </div>
                <div className="p-2.5 rounded-xl bg-brand-surface border border-brand-border flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <span className="text-brand-text/90">Strict Evidence Guardrails: 100% faithfulness with page provenance</span>
                </div>
                <div className="p-2.5 rounded-xl bg-brand-surface border border-brand-border flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-violet shrink-0 mt-0.5" />
                  <span className="text-brand-text/90">Automated Datasheet Intelligence: PyMuPDF parsing & RabbitMQ async workers</span>
                </div>
                <div className="p-2.5 rounded-xl bg-brand-surface border border-brand-border flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                  <span className="text-brand-text/90">Full-Stack Cloud: Next.js 15, FastAPI, PostgreSQL, Docker & Kubernetes</span>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenCaseStudy}
                className="px-6 py-3 rounded-xl font-heading font-semibold text-sm text-white bg-gradient-to-r from-brand-blue via-brand-blue to-brand-violet hover:opacity-95 shadow-lg shadow-brand-blue/30 transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <span>Explore Full Case Study</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <span className="text-xs font-mono text-brand-textMuted flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-brand-blue" />
                Next.js 15.5.28 • FastAPI • Python 3.12+
              </span>
            </div>
          </div>

          {/* Right Column: Mini Product Preview Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl bg-brand-surface/90 border border-brand-border p-5 space-y-4 shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-3 border-b border-brand-border/60">
                <span className="text-xs font-mono text-brand-text font-bold flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-brand-blue" />
                  COPILOT RUNTIME SNAPSHOT
                </span>
                <span className="text-[10px] font-mono text-brand-emerald flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse"></span>
                  EVAL: 100% FAITHFUL
                </span>
              </div>

              {/* Sample Query Mockup */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-brand-elevated border border-brand-border text-brand-text">
                  <span className="text-[10px] text-brand-textMuted block">INPUT QUERY:</span>
                  <p className="text-brand-cyan mt-0.5">"What is the supply voltage range of the NE555?"</p>
                </div>

                <div className="p-3 rounded-xl bg-[#08090D] border border-brand-border space-y-2">
                  <div className="flex items-center justify-between text-[10px] text-brand-textMuted">
                    <span>EVIDENCE RETRIEVED</span>
                    <span className="text-brand-emerald">TI-NE555-p4</span>
                  </div>
                  <p className="text-brand-text text-[11px] leading-relaxed font-sans">
                    "Recommended VCC: 4.5 V to 16 V (up to 18 V absolute max). Verified against TI datasheet Table 6.3."
                  </p>
                </div>
              </div>

              {/* Quick Evaluation Metrics Badges */}
              <div className="grid grid-cols-2 gap-2 pt-1 text-center">
                <div className="p-2 rounded-lg bg-brand-elevated/70 border border-brand-border">
                  <span className="text-[10px] font-mono text-brand-textMuted block">FAITHFULNESS</span>
                  <span className="text-sm font-mono font-bold text-brand-emerald">100% (1.000)</span>
                </div>
                <div className="p-2 rounded-lg bg-brand-elevated/70 border border-brand-border">
                  <span className="text-[10px] font-mono text-brand-textMuted block">CORRECTNESS</span>
                  <span className="text-sm font-mono font-bold text-brand-emerald">100% (1.000)</span>
                </div>
              </div>

              <button
                onClick={onOpenCaseStudy}
                className="w-full py-2.5 rounded-xl bg-brand-elevated border border-brand-border hover:border-brand-blue/40 text-brand-blue hover:text-white text-xs font-semibold font-heading transition-all flex items-center justify-center gap-1.5"
              >
                <span>Launch Interactive Architecture & Benchmarks</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
