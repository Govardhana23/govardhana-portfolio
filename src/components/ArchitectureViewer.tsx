import React, { useState } from 'react';
import { 
  Globe, 
  Server, 
  Route, 
  Database, 
  Search, 
  Cpu, 
  RefreshCw, 
  ShieldCheck, 
  Send, 
  FileText, 
  Package, 
  ArrowDown, 
  ArrowRight, 
  Check, 
  Info,
  ChevronDown,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { SPECMATCH_DATA } from '../data/portfolioData';

export const ArchitectureViewer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'main' | 'datasheet-pipeline' | 'distributor-pipeline'>('main');
  const [selectedNode, setSelectedNode] = useState<string>('router');

  const mainSteps = SPECMATCH_DATA.architectureSteps;

  return (
    <div className="bg-[#090B10] border border-brand-border rounded-2xl p-6 sm:p-8 space-y-8 relative overflow-hidden shadow-2xl">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Header & Pipeline Mode Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-brand-border/80">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-blue/15 text-brand-blue border border-brand-blue/30 font-bold uppercase tracking-wider">
              INTERACTIVE SYSTEM ARCHITECTURE
            </span>
            <span className="text-xs font-mono text-brand-textMuted">SpecMatch AI Core</span>
          </div>
          <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-brand-text">
            Evidence-Grounded Engineering Pipeline
          </h3>
          <p className="text-xs sm:text-sm text-brand-textMuted mt-0.5">
            Select a system component or pipeline mode below to inspect data schemas, protocols, and routing semantics.
          </p>
        </div>

        {/* View Mode Switcher Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-brand-surface border border-brand-border self-start lg:self-auto">
          <button
            onClick={() => setActiveTab('main')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'main'
                ? 'bg-brand-blue text-white shadow-sm'
                : 'text-brand-textMuted hover:text-brand-text'
            }`}
          >
            End-to-End Query Flow
          </button>
          <button
            onClick={() => setActiveTab('datasheet-pipeline')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'datasheet-pipeline'
                ? 'bg-brand-blue text-white shadow-sm'
                : 'text-brand-textMuted hover:text-brand-text'
            }`}
          >
            Datasheet Ingestion
          </button>
          <button
            onClick={() => setActiveTab('distributor-pipeline')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'distributor-pipeline'
                ? 'bg-brand-blue text-white shadow-sm'
                : 'text-brand-textMuted hover:text-brand-text'
            }`}
          >
            Distributor Data Feeds
          </button>
        </div>
      </div>

      {/* VIEW 1: MAIN QUERY FLOW */}
      {activeTab === 'main' && (
        <div className="space-y-6">
          {/* Visual Architecture Flow Sequence */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
            
            {/* Step 1: Client Browser */}
            <div
              onClick={() => setSelectedNode('browser')}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                selectedNode === 'browser'
                  ? 'bg-brand-elevated border-brand-blue shadow-lg shadow-brand-blue/20 ring-1 ring-brand-blue'
                  : 'bg-brand-surface/80 border-brand-border hover:border-brand-borderLight'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Globe className="w-5 h-5 text-brand-blue" />
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-brand-surface text-brand-blue border border-brand-border">
                  CLIENT
                </span>
              </div>
              <h4 className="font-heading font-bold text-xs sm:text-sm text-brand-text">
                Next.js 15 Client
              </h4>
              <p className="text-[11px] text-brand-textMuted mt-1 line-clamp-2">
                SSE Copilot Chat, Catalog, Ingestion Portal
              </p>
            </div>

            {/* Step 2: FastAPI Backend */}
            <div
              onClick={() => setSelectedNode('api-gateway')}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                selectedNode === 'api-gateway'
                  ? 'bg-brand-elevated border-brand-blue shadow-lg shadow-brand-blue/20 ring-1 ring-brand-blue'
                  : 'bg-brand-surface/80 border-brand-border hover:border-brand-borderLight'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Server className="w-5 h-5 text-brand-cyan" />
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-brand-surface text-brand-cyan border border-brand-border">
                  GATEWAY
                </span>
              </div>
              <h4 className="font-heading font-bold text-xs sm:text-sm text-brand-text">
                FastAPI Backend
              </h4>
              <p className="text-[11px] text-brand-textMuted mt-1 line-clamp-2">
                Pydantic v2 validation, SSE streaming, Auth
              </p>
            </div>

            {/* Step 3: Intelligent Query Router */}
            <div
              onClick={() => setSelectedNode('router')}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                selectedNode === 'router'
                  ? 'bg-brand-elevated border-brand-blue shadow-lg shadow-brand-blue/20 ring-1 ring-brand-blue'
                  : 'bg-brand-surface/80 border-brand-border hover:border-brand-borderLight'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Route className="w-5 h-5 text-brand-violet" />
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-brand-surface text-brand-violet border border-brand-border">
                  ROUTER
                </span>
              </div>
              <h4 className="font-heading font-bold text-xs sm:text-sm text-brand-text">
                Query Router
              </h4>
              <p className="text-[11px] text-brand-textMuted mt-1 line-clamp-2">
                Deterministic dispatch across 5 execution paths
              </p>
            </div>

            {/* Step 4: Core Intelligence */}
            <div
              onClick={() => setSelectedNode('intelligence')}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                selectedNode === 'intelligence'
                  ? 'bg-brand-elevated border-brand-blue shadow-lg shadow-brand-blue/20 ring-1 ring-brand-blue'
                  : 'bg-brand-surface/80 border-brand-border hover:border-brand-borderLight'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Cpu className="w-5 h-5 text-brand-amber" />
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-brand-surface text-brand-amber border border-brand-border">
                  CORE ENGINES
                </span>
              </div>
              <h4 className="font-heading font-bold text-xs sm:text-sm text-brand-text">
                Multi-Engine Layer
              </h4>
              <p className="text-[11px] text-brand-textMuted mt-1 line-clamp-2">
                SQL + Qdrant Hybrid RAG + LLM + Workers
              </p>
            </div>

            {/* Step 5: Guardrails & Output */}
            <div
              onClick={() => setSelectedNode('guardrails')}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                selectedNode === 'guardrails'
                  ? 'bg-brand-elevated border-brand-blue shadow-lg shadow-brand-blue/20 ring-1 ring-brand-blue'
                  : 'bg-brand-surface/80 border-brand-border hover:border-brand-borderLight'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <ShieldCheck className="w-5 h-5 text-brand-emerald" />
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-brand-surface text-brand-emerald border border-brand-border">
                  VALIDATION
                </span>
              </div>
              <h4 className="font-heading font-bold text-xs sm:text-sm text-brand-text">
                Evidence Guardrails
              </h4>
              <p className="text-[11px] text-brand-textMuted mt-1 line-clamp-2">
                Citation verification & repair loop
              </p>
            </div>

          </div>

          {/* Interactive Inspection Detail Drawer */}
          {selectedNode && (
            <div className="p-5 sm:p-6 rounded-xl bg-brand-surface border border-brand-border transition-all">
              {(() => {
                const node = mainSteps.find((s) => s.id === selectedNode) || mainSteps[2];
                return (
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-brand-border/60">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-brand-blue tracking-wider block">
                          LAYER: {node.layer}
                        </span>
                        <h4 className="font-heading font-bold text-base sm:text-lg text-brand-text">
                          {node.title} — {node.subtitle}
                        </h4>
                      </div>
                      <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-brand-elevated text-brand-cyan border border-brand-border self-start sm:self-auto">
                        Tech: {node.tech}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-brand-textMuted leading-relaxed">
                      {node.details}
                    </p>

                    {/* Specialized Subsystems Display when Intelligence is selected */}
                    {node.subsystems && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {node.subsystems.map((sub, i) => (
                          <div key={i} className="p-3.5 rounded-lg bg-brand-elevated/60 border border-brand-border space-y-1">
                            <span className="text-xs font-heading font-bold text-brand-text block">
                              {sub.name}
                            </span>
                            <p className="text-[11px] text-brand-textMuted">
                              {sub.details}
                            </p>
                            <span className="text-[10px] font-mono text-brand-blue block pt-1">
                              Stack: {sub.tech}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Specialized Router Execution Paths when Router is selected */}
                    {node.id === 'router' && (
                      <div className="space-y-2 pt-2">
                        <span className="text-[11px] font-mono text-brand-text uppercase tracking-wider block">
                          Deterministic Execution Paths:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
                          <div className="p-2.5 rounded bg-brand-elevated/70 border border-brand-border">
                            <span className="text-brand-blue font-mono font-bold block">Catalog Query</span>
                            <span className="text-brand-textMuted text-[11px]">→ SQL structured search on normalized MPN index</span>
                          </div>
                          <div className="p-2.5 rounded bg-brand-elevated/70 border border-brand-border">
                            <span className="text-brand-cyan font-mono font-bold block">Pricing / Availability</span>
                            <span className="text-brand-textMuted text-[11px]">→ Verified distributor offers / API quantity breaks</span>
                          </div>
                          <div className="p-2.5 rounded bg-brand-elevated/70 border border-brand-border">
                            <span className="text-brand-violet font-mono font-bold block">Replacement Match</span>
                            <span className="text-brand-textMuted text-[11px]">→ Deterministic specification parameter matcher</span>
                          </div>
                          <div className="p-2.5 rounded bg-brand-elevated/70 border border-brand-border">
                            <span className="text-brand-amber font-mono font-bold block">Datasheet / Comparison</span>
                            <span className="text-brand-textMuted text-[11px]">→ Qdrant Hybrid RAG (Dense BGE + Sparse BM25 + RRF)</span>
                          </div>
                          <div className="p-2.5 rounded bg-brand-elevated/70 border border-brand-border">
                            <span className="text-brand-emerald font-mono font-bold block">Help & Usage</span>
                            <span className="text-brand-textMuted text-[11px]">→ Fast static guidance without LLM overhead</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      )}

      {/* VIEW 2: DATASHEET INGESTION PIPELINE */}
      {activeTab === 'datasheet-pipeline' && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-brand-surface/60 border border-brand-border flex items-start gap-3 text-xs text-brand-textMuted">
            <Info className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
            <p>
              <strong className="text-brand-text">Manufacturer Datasheet Pipeline:</strong> Ingests high-density technical manufacturer PDFs, extracts structural sections and tables, generates dual embeddings, and indexes them in Qdrant with page-level provenance.
            </p>
          </div>

          {/* Sequential Ingestion Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            <div className="p-4 rounded-xl bg-brand-surface border border-brand-border space-y-2">
              <span className="text-[10px] font-mono text-brand-blue block">STEP 01</span>
              <h5 className="font-heading font-bold text-xs text-brand-text">PDF Upload</h5>
              <p className="text-[11px] text-brand-textMuted">Manufacturer PDF uploaded via Next.js portal or automated ingestion queue.</p>
            </div>
            <div className="p-4 rounded-xl bg-brand-surface border border-brand-border space-y-2">
              <span className="text-[10px] font-mono text-brand-blue block">STEP 02</span>
              <h5 className="font-heading font-bold text-xs text-brand-text">PyMuPDF Parse</h5>
              <p className="text-[11px] text-brand-textMuted">High-fidelity text & tabular stream extraction with coordinate bounding boxes.</p>
            </div>
            <div className="p-4 rounded-xl bg-brand-surface border border-brand-border space-y-2">
              <span className="text-[10px] font-mono text-brand-blue block">STEP 03</span>
              <h5 className="font-heading font-bold text-xs text-brand-text">Section Extract</h5>
              <p className="text-[11px] text-brand-textMuted">Hierarchical parsing into Pinouts, Electrical Ratings, and Operating Conditions.</p>
            </div>
            <div className="p-4 rounded-xl bg-brand-surface border border-brand-border space-y-2">
              <span className="text-[10px] font-mono text-brand-blue block">STEP 04</span>
              <h5 className="font-heading font-bold text-xs text-brand-text">Chunking</h5>
              <p className="text-[11px] text-brand-textMuted">Overlap chunking maintaining strict page-level metadata & MPN provenance.</p>
            </div>
            <div className="p-4 rounded-xl bg-brand-surface border border-brand-border space-y-2">
              <span className="text-[10px] font-mono text-brand-blue block">STEP 05</span>
              <h5 className="font-heading font-bold text-xs text-brand-text">Dual Embeddings</h5>
              <p className="text-[11px] text-brand-textMuted">Dense FastEmbed BGE vectors + BM25 sparse lexical tokens.</p>
            </div>
            <div className="p-4 rounded-xl bg-brand-surface border border-brand-emerald/40 space-y-2">
              <span className="text-[10px] font-mono text-brand-emerald block">STEP 06</span>
              <h5 className="font-heading font-bold text-xs text-brand-text">Qdrant Index</h5>
              <p className="text-[11px] text-brand-textMuted">Persisted into vector collections with per-component partition isolation.</p>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: DISTRIBUTOR DATA INGESTION PIPELINE */}
      {activeTab === 'distributor-pipeline' && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-brand-surface/60 border border-brand-border flex items-start gap-3 text-xs text-brand-textMuted">
            <Info className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
            <div>
              <p className="text-brand-text font-medium">Distributor Data & Inventory Pipeline:</p>
              <p className="mt-1">
                SpecMatch AI supports two sourcing intake paths: automated API synchronization (Digi-Key, Mouser, Nexar) when credentials are provided, alongside direct operator imports of CSV, TSV, JSON, and JSONL distributor offer feeds.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Implemented Operator Import Pipeline */}
            <div className="p-5 rounded-xl bg-brand-surface border border-brand-emerald/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/30 font-bold">
                  VERIFIED IMPLEMENTATION
                </span>
                <span className="text-xs font-mono text-brand-emerald">ACTIVE IN REPO</span>
              </div>
              <h4 className="font-heading font-bold text-sm text-brand-text">
                Operator-Imported Distributor Offer Feeds
              </h4>
              <p className="text-xs text-brand-textMuted leading-relaxed">
                Supports batch ingesting distributor catalog snapshots via CSV, TSV, JSON, and JSONL formats with strict schema normalization, quantity-break tier parsing, and currency standardization.
              </p>
              <div className="p-3 rounded-lg bg-brand-elevated font-mono text-[11px] text-brand-textMuted space-y-1">
                <p>✓ CSV / TSV / JSON / JSONL importer</p>
                <p>✓ Price breaks: 1, 10, 100, 1000+ units</p>
                <p>✓ Packaging type (Tape & Reel, Bulk, Tube)</p>
                <p>✓ Lead times and warehouse location tagging</p>
              </div>
            </div>

            {/* Live API Integration Status */}
            <div className="p-5 rounded-xl bg-brand-surface border border-brand-border space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-surface text-brand-textMuted border border-brand-border font-bold">
                  OPTIONAL CREDENTIAL INTEGRATION
                </span>
                <span className="text-xs font-mono text-brand-amber">REQUIRES API KEYS</span>
              </div>
              <h4 className="font-heading font-bold text-sm text-brand-text">
                Digi-Key / Mouser / Nexar API Connectors
              </h4>
              <p className="text-xs text-brand-textMuted leading-relaxed">
                Connectors implemented with Tenacity retry backoffs and server-side secret handling. Automatically activates real-time price & stock lookups when valid distributor developer credentials are configured in environment variables.
              </p>
              <div className="p-3 rounded-lg bg-brand-elevated font-mono text-[11px] text-brand-textMuted space-y-1">
                <p>• Digi-Key v3 API OAuth2 client</p>
                <p>• Mouser Search API client</p>
                <p>• Nexar GraphQL component integration</p>
                <p>• Rate-limit throttler & caching layer</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
