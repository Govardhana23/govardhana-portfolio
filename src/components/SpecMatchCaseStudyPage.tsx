import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  Database, 
  FileText, 
  Server, 
  Terminal, 
  CheckCircle2, 
  ExternalLink,
  Zap,
  Info,
  Clock,
  RefreshCw,
  GitBranch,
  Table
} from 'lucide-react';
import { SPECMATCH_DATA } from '../data/portfolioData';
import { ArchitectureViewer } from './ArchitectureViewer';
import { EvaluationDashboard } from './EvaluationDashboard';
import { CopilotInteractiveDemo } from './CopilotInteractiveDemo';

interface SpecMatchCaseStudyPageProps {
  onBackToHome: () => void;
}

export const SpecMatchCaseStudyPage: React.FC<SpecMatchCaseStudyPageProps> = ({
  onBackToHome,
}) => {
  const data = SPECMATCH_DATA;
  const [activeCatalogTab, setActiveCatalogTab] = useState<'ne555' | 'lm358' | 'tl072' | 'l7805'>('ne555');

  const catalogItems = {
    ne555: {
      mpn: 'NE555P',
      manufacturer: 'Texas Instruments',
      category: 'Clock/Timing — Precision Timers',
      package: 'DIP-8 / SOIC-8',
      lifecycle: 'ACTIVE',
      specs: [
        { label: 'Supply Voltage (Vcc)', value: '4.5 V to 16 V (18 V max)' },
        { label: 'Max Output Current', value: '200 mA' },
        { label: 'Operating Temp Range', value: '0°C to 70°C' },
        { label: 'Timing Capability', value: 'Microseconds to Hours' }
      ],
      stock: '184,200 units',
      priceTier1k: '$0.185 / unit',
      provenance: 'TI-NE555-Datasheet.pdf (Section 6.3)'
    },
    lm358: {
      mpn: 'LM358DR',
      manufacturer: 'Texas Instruments',
      category: 'Operational Amplifiers — Dual Low Power',
      package: 'SOIC-8',
      lifecycle: 'ACTIVE',
      specs: [
        { label: 'Supply Voltage', value: '3 V to 32 V (Dual ±1.5V to ±16V)' },
        { label: 'Input Bias Current', value: '20 nA typical (100 nA max)' },
        { label: 'Unity Gain Bandwidth', value: '1.2 MHz' },
        { label: 'Low Supply Current', value: '300 µA / amplifier' }
      ],
      stock: '310,000 units',
      priceTier1k: '$0.124 / unit',
      provenance: 'TI-LM358-Datasheet.pdf (Section 6.5)'
    },
    tl072: {
      mpn: 'TL072CP',
      manufacturer: 'Texas Instruments',
      category: 'Operational Amplifiers — Low-Noise JFET-Input',
      package: 'PDIP-8',
      lifecycle: 'ACTIVE',
      specs: [
        { label: 'Supply Voltage', value: '±5 V to ±15 V' },
        { label: 'Input Bias Current', value: '65 pA typical (7 nA max at 70°C)' },
        { label: 'Total Harmonic Distortion', value: '0.003% typical' },
        { label: 'Slew Rate', value: '13 V/µs' }
      ],
      stock: '95,400 units',
      priceTier1k: '$0.245 / unit',
      provenance: 'TI-TL072-Datasheet.pdf (Section 6.5)'
    },
    l7805: {
      mpn: 'L7805CV',
      manufacturer: 'STMicroelectronics',
      category: 'Linear Voltage Regulators — Positive 5V',
      package: 'TO-220',
      lifecycle: 'ACTIVE',
      specs: [
        { label: 'Output Voltage', value: '5.0 V (±2% tolerance)' },
        { label: 'Output Current (Max)', value: '1.5 A' },
        { label: 'Input Voltage (Max)', value: '35 V (7V min for regulation)' },
        { label: 'Thermal Overload Protection', value: 'Internal thermal shutdown' }
      ],
      stock: '42,850 units',
      priceTier1k: '$0.384 / unit',
      provenance: 'ST-L7805-Datasheet.pdf (Table 4)'
    }
  };

  const currentItem = catalogItems[activeCatalogTab];

  return (
    <div className="min-h-screen pt-24 pb-32 bg-[#08090D] text-brand-text grid-pattern selection:bg-brand-blue selection:text-white">
      
      {/* Top Floating Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-brand-surface border border-brand-border text-xs font-mono text-brand-textMuted hover:text-brand-text hover:border-brand-borderLight transition-all"
        >
          <ArrowLeft className="w-4 h-4 text-brand-blue" />
          <span>Back to Portfolio Home</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* 1. CINEMATIC PRODUCT HERO */}
        <div className="relative rounded-3xl bg-gradient-to-b from-brand-surface/90 via-brand-surface/50 to-transparent border border-brand-border p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-brand-blue/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-brand-violet/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-blue/20 text-brand-blue border border-brand-blue/40 tracking-wider">
                ENTERPRISE CASE STUDY
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-surface text-brand-cyan border border-brand-border">
                RAG ARCHITECTURE
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-surface text-brand-emerald border border-brand-border">
                EVALUATION GATE: PASS (100% FAITHFUL)
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-brand-text tracking-tight leading-[1.05]">
                SpecMatch <span className="text-gradient">AI.</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-gradient-blue font-heading">
                "Engineering Decisions. Backed by Evidence."
              </p>
            </div>

            <p className="text-base sm:text-lg text-brand-textMuted leading-relaxed max-w-3xl">
              {data.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-brand-textMuted">
              <span className="px-3 py-1.5 rounded-lg bg-brand-surface border border-brand-border text-brand-text">
                Next.js 15.5.28 • React 19.1.1
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-brand-surface border border-brand-border text-brand-text">
                FastAPI • Python 3.12+
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-brand-surface border border-brand-border text-brand-text">
                Qdrant Hybrid • BGE Embeddings
              </span>
            </div>
          </div>
        </div>

        {/* 2. PROBLEM STATEMENT & MOTIVATION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 bg-brand-surface/70 border border-brand-border rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue">
              <Info className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-heading font-bold text-brand-text">
              The Problem in Electronic Sourcing
            </h3>
            <p className="text-sm text-brand-textMuted leading-relaxed">
              {data.problemStatement}
            </p>
            <div className="p-4 rounded-xl bg-brand-elevated/70 border border-brand-border font-mono text-xs text-brand-amber space-y-1">
              <p>⚠ Hallucinations in LLMs cause burnt PCBs.</p>
              <p>⚠ Generic AI invents voltage limits or pinouts.</p>
              <p>⚠ SpecMatch AI enforces 100% evidence-strict retrieval.</p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-brand-surface/70 border border-brand-border rounded-2xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 border border-brand-emerald/30 flex items-center justify-center text-brand-emerald">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-brand-text">
                  The SpecMatch AI Solution
                </h3>
                <p className="text-xs font-mono text-brand-textMuted">Zero-hallucination architectural guarantees</p>
              </div>
            </div>

            <p className="text-sm text-brand-textMuted leading-relaxed">
              Instead of answering from fuzzy parameter weights, SpecMatch AI combines <strong>Qdrant dense and BM25 sparse vectors</strong> with a deterministic query router and post-generation citation guardrails. If a claim lacks page-level provenance, it is either repaired via fallback or refused.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-brand-elevated border border-brand-border space-y-1">
                <span className="font-heading font-bold text-brand-text block">Dense + Sparse Hybrid</span>
                <p className="text-brand-textMuted">FastEmbed BGE vectors capture conceptual meaning while BM25 captures exact MPN part alphanumeric strings.</p>
              </div>
              <div className="p-3 rounded-xl bg-brand-elevated border border-brand-border space-y-1">
                <span className="font-heading font-bold text-brand-text block">Traceable Page Citations</span>
                <p className="text-brand-textMuted">Answers reference exact page numbers and tables (e.g. Table 6.3, p. 4) linking back to original manufacturer PDF sheets.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. INTERACTIVE SYSTEM ARCHITECTURE */}
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-mono text-brand-blue uppercase tracking-wider font-bold">
              SYSTEM DESIGN & DATA TOPOLOGY
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-brand-text">
              Interactive System Architecture
            </h2>
            <p className="text-sm text-brand-textMuted max-w-2xl">
              Inspect the end-to-end flow from browser client requests to deterministic routing, vector retrieval, and citation verification.
            </p>
          </div>

          <ArchitectureViewer />
        </div>

        {/* 4. REAL-CORPUS EVALUATION BENCHMARKS */}
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-mono text-brand-emerald uppercase tracking-wider font-bold">
              RIGOROUS TEST SUITE RESULTS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-brand-text">
              Real-Corpus Golden Dataset Evaluation
            </h2>
            <p className="text-sm text-brand-textMuted max-w-2xl">
              SpecMatch AI runs automated evaluation gates measuring Faithfulness, Context Recall, Context Precision, and Correctness against live indexed datasheets.
            </p>
          </div>

          <EvaluationDashboard />
        </div>

        {/* 5. INTERACTIVE COPILOT CHAT SIMULATOR */}
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider font-bold">
              LIVE SIMULATION & AUDIT TRAIL
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-brand-text">
              Interactive Copilot Demonstration
            </h2>
            <p className="text-sm text-brand-textMuted max-w-2xl">
              Test verified sample queries to observe streamed tokens, sub-millisecond route classification, and page-level evidence citations.
            </p>
          </div>

          <CopilotInteractiveDemo />
        </div>

        {/* 6. NORMALIZED COMPONENT CATALOG PREVIEW */}
        <div className="space-y-6 bg-brand-surface/60 border border-brand-border rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-brand-border/60">
            <div>
              <span className="text-[10px] font-mono text-brand-blue uppercase tracking-wider block">
                STRUCTURED INVENTORY EXPLORER
              </span>
              <h3 className="text-xl font-heading font-bold text-brand-text">
                Normalized Component Catalog Explorer
              </h3>
              <p className="text-xs text-brand-textMuted mt-0.5">
                Unified catalog schemas joining manufacturer parameters with distributor offers.
              </p>
            </div>

            {/* Component Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-brand-elevated border border-brand-border text-xs">
              {(['ne555', 'lm358', 'tl072', 'l7805'] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveCatalogTab(key)}
                  className={`px-3 py-1.5 rounded-lg font-mono font-medium transition-all ${
                    activeCatalogTab === key
                      ? 'bg-brand-blue text-white shadow-sm'
                      : 'text-brand-textMuted hover:text-brand-text'
                  }`}
                >
                  {catalogItems[key].mpn}
                </button>
              ))}
            </div>
          </div>

          {/* Active Item Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-4 space-y-3">
              <div className="p-4 rounded-xl bg-brand-elevated border border-brand-border space-y-2">
                <span className="text-[10px] font-mono text-brand-emerald block">LIFECYCLE: {currentItem.lifecycle}</span>
                <h4 className="text-lg font-heading font-bold text-brand-text">{currentItem.mpn}</h4>
                <p className="text-xs text-brand-textMuted">{currentItem.manufacturer} • {currentItem.category}</p>
                <div className="pt-2 border-t border-brand-border/60 text-xs font-mono space-y-1">
                  <div className="flex justify-between">
                    <span className="text-brand-textMuted">Package:</span>
                    <span className="text-brand-text">{currentItem.package}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-textMuted">Available Stock:</span>
                    <span className="text-brand-emerald">{currentItem.stock}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-textMuted">1k Unit Price:</span>
                    <span className="text-brand-cyan">{currentItem.priceTier1k}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-mono text-brand-textMuted uppercase tracking-wider block">
                VERIFIED DATASHEET ELECTRICAL SPECIFICATIONS:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentItem.specs.map((spec, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-brand-elevated/70 border border-brand-border text-xs">
                    <span className="text-brand-textMuted font-mono text-[11px] block">{spec.label}</span>
                    <span className="text-brand-text font-mono font-bold text-sm block mt-1">{spec.value}</span>
                  </div>
                ))}
              </div>
              <div className="p-3 rounded-lg bg-brand-elevated border border-brand-border/60 font-mono text-xs text-brand-textMuted flex items-center justify-between">
                <span>Provenance Source:</span>
                <span className="text-brand-cyan font-bold">{currentItem.provenance}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 7. COMPLETE TECHNOLOGY MATRIX */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono text-brand-blue uppercase tracking-wider font-bold">
              FULL-STACK SPECIFICATION
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-brand-text">
              Production Technology Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            {Object.entries(data.techStack).map(([layer, tools]) => (
              <div key={layer} className="p-5 rounded-2xl bg-brand-surface border border-brand-border space-y-3">
                <span className="font-heading font-bold text-sm text-brand-text uppercase tracking-wider block border-b border-brand-border/60 pb-2">
                  {layer.replace(/([A-Z])/g, ' $1').trim()}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {tools.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-brand-elevated text-brand-text font-mono text-[11px] border border-brand-border">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 8. ENGINEERING DECISIONS & CHALLENGES */}
        <div className="bg-brand-surface/70 border border-brand-border rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-violet/10 border border-brand-violet/30 flex items-center justify-center text-brand-violet">
              <GitBranch className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-brand-text">
                Engineering Trade-Offs & Architectural Decisions
              </h3>
              <p className="text-xs font-mono text-brand-textMuted">Design choices made during implementation</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-brand-textMuted leading-relaxed">
            <div className="p-4 rounded-xl bg-brand-elevated border border-brand-border space-y-2">
              <span className="font-heading font-bold text-sm text-brand-text block">1. Dense vs Sparse Fusion</span>
              <p>
                Dense embeddings alone frequently confused alphanumeric part numbers (e.g. NE555 vs LM555). We introduced Qdrant BM25 sparse keyword indices fused via Reciprocal Rank Fusion (RRF), ensuring 100% MPN retrieval accuracy.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-brand-elevated border border-brand-border space-y-2">
              <span className="font-heading font-bold text-sm text-brand-text block">2. PyMuPDF Structural Tables</span>
              <p>
                Standard OCR and naive text extractors scramble electrical limits tables. PyMuPDF was combined with structural HTML and coordinate tracking to maintain rows, columns, min/typ/max headers, and units intact.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-brand-elevated border border-brand-border space-y-2">
              <span className="font-heading font-bold text-sm text-brand-text block">3. Grounding Repair Loop</span>
              <p>
                A regex and token verification filter checks every numerical claim in the generated text against retrieved context window spans. If an ungrounded specification appears, an automated repair loop reprompts the model before streaming.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Return CTA */}
        <div className="text-center pt-8">
          <button
            onClick={onBackToHome}
            className="px-8 py-3.5 rounded-xl font-heading font-semibold text-sm text-white bg-gradient-to-r from-brand-blue to-brand-violet hover:opacity-95 shadow-xl shadow-brand-blue/20 transition-all inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio Home</span>
          </button>
        </div>

      </div>
    </div>
  );
};
