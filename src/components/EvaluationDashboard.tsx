import React from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  FileText, 
  HelpCircle, 
  ExternalLink,
  Layers,
  Sparkles
} from 'lucide-react';
import { SPECMATCH_DATA } from '../data/portfolioData';

export const EvaluationDashboard: React.FC = () => {
  const evalData = SPECMATCH_DATA.evaluation;

  return (
    <div className="bg-[#090B10] border border-brand-border rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
      {/* Background glow accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-emerald/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Evaluation Run Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-border/70">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-brand-emerald/15 text-brand-emerald border border-brand-emerald/30 tracking-wider">
              {evalData.tag}
            </span>
            <span className="text-xs font-mono text-brand-textMuted flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
              {evalData.date}
            </span>
          </div>
          <h3 className="font-heading font-extrabold text-xl text-brand-text flex items-center gap-2">
            SpecMatch AI Golden-Dataset Benchmarks
          </h3>
        </div>

        {/* Evaluation Gate Pass Pill */}
        <div className="flex items-center gap-3 bg-brand-surface/90 border border-brand-border px-4 py-2 rounded-xl self-start sm:self-auto">
          <div className="w-8 h-8 rounded-lg bg-brand-emerald/15 border border-brand-emerald/40 flex items-center justify-center text-brand-emerald">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-brand-textMuted uppercase block">EVALUATION GATE</span>
            <span className="text-xs font-mono font-extrabold text-brand-emerald flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-emerald animate-ping"></span>
              STATUS: {evalData.gate} ({evalData.totalQuestions})
            </span>
          </div>
        </div>
      </div>

      {/* Primary Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        {evalData.metrics.map((metric, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-brand-surface/80 border border-brand-border hover:border-brand-blue/30 transition-all space-y-2"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-heading font-semibold text-brand-text">
                {metric.name}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 font-bold">
                {metric.value}
              </span>
            </div>

            {/* Huge Percentage Display */}
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-brand-text tracking-tight">
                {metric.percentage}
              </span>
              <span className="text-[11px] font-mono text-brand-emerald flex items-center gap-0.5">
                <CheckCircle2 className="w-3 h-3" /> PASS
              </span>
            </div>

            {/* Visual Gauge Bar */}
            <div className="w-full bg-brand-elevated h-1.5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-blue to-brand-emerald rounded-full"
                style={{ width: metric.percentage }}
              />
            </div>

            <p className="text-[11px] text-brand-textMuted font-mono leading-tight pt-1">
              {metric.description}
            </p>
          </div>
        ))}
      </div>

      {/* Explanatory Methodology Card */}
      <div className="p-4 rounded-xl bg-brand-surface/60 border border-brand-border/60 text-xs text-brand-textMuted flex items-start gap-3">
        <FileText className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="leading-relaxed">
            <strong className="text-brand-text font-medium">Evaluation Methodology:</strong> {evalData.note}
          </p>
          <p className="text-[11px] text-brand-textMuted/80 font-mono">
            * Metrics represent actual performance from the current golden-test evaluation run across indexed datasheets (TI NE555, LM358, TL072, ST L7805), not unverified universal claims.
          </p>
        </div>
      </div>
    </div>
  );
};
