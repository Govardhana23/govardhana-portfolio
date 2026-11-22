import React, { useState, useEffect } from 'react';
import { 
  Send, 
  Sparkles, 
  Terminal, 
  ShieldCheck, 
  FileText, 
  Clock, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Info,
  ChevronRight,
  Database
} from 'lucide-react';
import { SPECMATCH_DATA } from '../data/portfolioData';

export const CopilotInteractiveDemo: React.FC = () => {
  const queries = SPECMATCH_DATA.interactiveQueries;
  const [selectedQueryId, setSelectedQueryId] = useState<string>('q1');
  const [isStreaming, setIsStreaming] = useState<boolean>(false);
  const [streamedText, setStreamedText] = useState<string>('');
  const [activeQuery, setActiveQuery] = useState(queries[0]);

  const handleSelectQuery = (id: string) => {
    const q = queries.find((item) => item.id === id);
    if (!q) return;
    setSelectedQueryId(id);
    setActiveQuery(q);
    setIsStreaming(true);
    setStreamedText('');

    let currentLength = 0;
    const fullText = q.answer;

    const interval = setInterval(() => {
      currentLength += Math.floor(Math.random() * 8) + 4;
      if (currentLength >= fullText.length) {
        setStreamedText(fullText);
        setIsStreaming(false);
        clearInterval(interval);
      } else {
        setStreamedText(fullText.slice(0, currentLength));
      }
    }, 20);
  };

  useEffect(() => {
    // Initial stream for first query
    handleSelectQuery('q1');
  }, []);

  return (
    <div className="bg-[#08090D] border border-brand-border rounded-2xl overflow-hidden shadow-2xl space-y-0">
      
      {/* Copilot Header */}
      <div className="bg-brand-surface/90 px-4 sm:px-6 py-3.5 border-b border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-blue to-brand-violet p-[1px]">
            <div className="w-full h-full bg-brand-surface rounded-[7px] flex items-center justify-center text-brand-blue">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-xs sm:text-sm text-brand-text">
                SpecMatch Copilot Runtime
              </span>
              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/30 font-bold">
                GROUNDING ACTIVE
              </span>
            </div>
            <span className="text-[10px] font-mono text-brand-textMuted block">
              Evidence-Strict Retrieval Engine • FastEmbed BGE + Qdrant BM25
            </span>
          </div>
        </div>

        {/* Portfolio Demonstration Notice */}
        <div className="text-[10px] font-mono text-brand-amber/90 bg-brand-amber/10 px-2.5 py-1 rounded-md border border-brand-amber/30 flex items-center gap-1.5 self-start sm:self-auto">
          <Info className="w-3 h-3 shrink-0" />
          <span>Interactive Portfolio Demonstration</span>
        </div>
      </div>

      {/* Main Terminal Window Area */}
      <div className="p-4 sm:p-6 space-y-6">
        
        {/* Sample Prompt Selector Buttons */}
        <div className="space-y-2">
          <span className="text-[11px] font-mono text-brand-textMuted uppercase tracking-wider block">
            Select a verified engineering test prompt:
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
            {queries.map((q) => (
              <button
                key={q.id}
                onClick={() => handleSelectQuery(q.id)}
                className={`p-3 rounded-xl text-left border transition-all text-xs flex flex-col justify-between gap-2 ${
                  selectedQueryId === q.id
                    ? 'bg-brand-elevated border-brand-blue shadow-md text-brand-text'
                    : 'bg-brand-surface/70 border-brand-border text-brand-textMuted hover:text-brand-text hover:border-brand-borderLight'
                }`}
              >
                <span className="font-medium font-heading line-clamp-2">
                  "{q.question}"
                </span>
                <div className="flex items-center justify-between text-[10px] font-mono text-brand-textMuted pt-1 border-t border-brand-border/40">
                  <span className="text-brand-blue">{q.mpn}</span>
                  <span>{q.route.split('/')[0]}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Simulated Chat Dialogue Bubble */}
        <div className="space-y-4 pt-2">
          {/* User Query Bubble */}
          <div className="flex items-start gap-3 justify-end">
            <div className="bg-brand-elevated border border-brand-border rounded-2xl rounded-tr-sm px-4 py-3 max-w-xl text-xs sm:text-sm text-brand-text">
              <p className="font-medium">"{activeQuery.question}"</p>
            </div>
            <div className="w-7 h-7 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-[11px] font-mono font-bold text-brand-text shrink-0">
              U
            </div>
          </div>

          {/* AI Copilot Answer Bubble */}
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center text-brand-blue shrink-0 mt-1">
              <Sparkles className="w-3.5 h-3.5" />
            </div>

            <div className="bg-brand-surface border border-brand-border rounded-2xl rounded-tl-sm p-4 sm:p-5 max-w-3xl space-y-4 text-xs sm:text-sm text-brand-text flex-1">
              
              {/* Telemetry Trace Badge Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-brand-border/60 text-[10px] font-mono text-brand-textMuted">
                <div className="flex items-center gap-2">
                  <span className="text-brand-blue font-bold">ROUTE:</span>
                  <span className="px-1.5 py-0.5 rounded bg-brand-elevated text-brand-text">
                    {activeQuery.route}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-brand-cyan" />
                    Latency: {activeQuery.latency}
                  </span>
                  <span className="flex items-center gap-1 text-brand-emerald">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Grounding: 100% PASS
                  </span>
                </div>
              </div>

              {/* Streaming Output Body */}
              <div className="leading-relaxed whitespace-pre-line font-sans text-brand-text/95">
                {streamedText}
                {isStreaming && (
                  <span className="inline-block w-1.5 h-4 bg-brand-blue ml-1 animate-pulse align-middle" />
                )}
              </div>

              {/* Verified Citations Panel */}
              <div className="pt-3 border-t border-brand-border/60 space-y-2">
                <span className="text-[10px] font-mono text-brand-textMuted uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3 h-3 text-brand-blue" />
                  Verified Evidence Citations:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {activeQuery.citations.map((cite, i) => (
                    <div
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-brand-elevated border border-brand-border font-mono text-[11px] text-brand-cyan flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-brand-emerald" />
                      <span>{cite}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Terminal Footer Indicator */}
      <div className="bg-[#050608] px-4 py-2.5 border-t border-brand-border/60 flex items-center justify-between text-[10px] font-mono text-brand-textMuted">
        <div className="flex items-center gap-2">
          <Terminal className="w-3 h-3 text-brand-blue" />
          <span>SPECMATCH_RAG_GATEWAY // SSE_STREAM_VERIFIED</span>
        </div>
        <span className="text-brand-emerald">FAITHFULNESS: 1.0000 (100%)</span>
      </div>

    </div>
  );
};
