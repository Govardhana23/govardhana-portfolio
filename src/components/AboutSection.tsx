import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Code2, 
  Award, 
  CheckCircle2, 
  Cpu, 
  MapPin, 
  GraduationCap, 
  Sparkles, 
  Zap, 
  Activity, 
  TrendingUp,
  Brain,
  ShieldAlert
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  // Animated Counters
  const [leetcodeCount, setLeetcodeCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 150;
    const duration = 1800;
    const increment = end / (duration / 25);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setLeetcodeCount(end);
        clearInterval(timer);
      } else {
        setLeetcodeCount(Math.floor(start));
      }
    }, 25);

    return () => clearInterval(timer);
  }, []);

  const highlights = [
    {
      metric: `${leetcodeCount}+`,
      title: 'LeetCode Problems Solved',
      desc: 'Algorithmic mastery across trees, dynamic programming & graphs',
      icon: <Code2 className="w-4 h-4 text-brand-amber" />,
      tag: 'Algorithms'
    },
    {
      metric: 'Top 10',
      title: 'iMobilothon 5.0 Finalist',
      desc: 'National smart infrastructure & telemetry innovation challenge',
      icon: <Award className="w-4 h-4 text-brand-blue" />,
      tag: 'National'
    },
    {
      metric: '1st Prize',
      title: 'Samartha 2K25',
      desc: 'Champion for end-to-end applied AI technology architecture',
      icon: <Sparkles className="w-4 h-4 text-brand-violet" />,
      tag: 'Champion'
    },
    {
      metric: 'Qualified',
      title: 'GATE 2026 Qualified',
      desc: 'Graduate Aptitude Test in Engineering — Computer Science & Systems',
      icon: <CheckCircle2 className="w-4 h-4 text-brand-emerald" />,
      tag: 'GATE Exam'
    },
    {
      metric: '1st Prize',
      title: 'Innovathon 4.0',
      desc: 'Premier hackathon innovation challenge winner for functional prototype',
      icon: <Zap className="w-4 h-4 text-brand-cyan" />,
      tag: 'Innovation'
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden bg-brand-surface/40 border-y border-brand-border/60">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-violet/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-blue font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></span>
            <span>ENGINEERING IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-brand-text tracking-tight">
            Beyond the <span className="text-gradient">Code.</span>
          </h2>
          <p className="text-sm sm:text-base text-brand-textMuted max-w-xl">
            The philosophy, background, and analytical discipline shaping my software and AI architectures.
          </p>
        </div>

        {/* Split-Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Authentic Bio & Philosophy Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-brand-surface/70 border border-brand-border rounded-2xl p-6 sm:p-8 backdrop-blur-md space-y-5">
              
              <div className="flex items-center gap-3 pb-4 border-b border-brand-border/70">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-brand-text">
                    Govardhana Guhanesh K
                  </h3>
                  <p className="text-xs font-mono text-brand-textMuted flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                    Chennai, India • AI & Data Science (B.Tech)
                  </p>
                </div>
              </div>

              {/* Exact bio text paragraphs */}
              <div className="space-y-4 text-sm sm:text-[15px] text-brand-textMuted leading-relaxed">
                <p>
                  I'm <strong className="text-brand-text font-medium">Govardhana Guhanesh K</strong>, an Artificial Intelligence and Data Science undergraduate based in Chennai, India.
                </p>
                <p>
                  My interests lie at the intersection of software engineering and artificial intelligence. I enjoy transforming complex problems into practical software solutions, developing backend systems, experimenting with machine learning, and building applications that create measurable impact.
                </p>
                <p>
                  From developing computer vision applications to designing intelligent infrastructure monitoring systems and building enterprise AI platforms, I believe great engineering combines <strong className="text-brand-blue font-medium">technical depth</strong>, <strong className="text-brand-violet font-medium">thoughtful design</strong>, and <strong className="text-brand-cyan font-medium">real-world usefulness</strong>.
                </p>
                <p className="text-brand-text/90 italic border-l-2 border-brand-blue/50 pl-3">
                  "I'm continuously learning, experimenting, and challenging myself to build better technology."
                </p>
              </div>

              {/* Core Tenets */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-brand-border/70 text-center">
                <div className="p-2.5 rounded-xl bg-brand-elevated/40 border border-brand-border/60">
                  <span className="text-[10px] font-mono text-brand-textMuted uppercase block">THOUGHT</span>
                  <span className="text-xs font-heading font-bold text-brand-text">Deep Analysis</span>
                </div>
                <div className="p-2.5 rounded-xl bg-brand-elevated/40 border border-brand-border/60">
                  <span className="text-[10px] font-mono text-brand-textMuted uppercase block">BUILD</span>
                  <span className="text-xs font-heading font-bold text-brand-blue">Evidence-Driven</span>
                </div>
                <div className="p-2.5 rounded-xl bg-brand-elevated/40 border border-brand-border/60">
                  <span className="text-[10px] font-mono text-brand-textMuted uppercase block">IMPACT</span>
                  <span className="text-xs font-heading font-bold text-brand-violet">Real-World Utility</span>
                </div>
              </div>

            </div>

            {/* Quick Status / Education pill */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-brand-surface border border-brand-border text-xs">
              <div className="flex items-center gap-2.5">
                <GraduationCap className="w-4 h-4 text-brand-blue" />
                <span className="text-brand-textMuted">Sri Sairam Institute of Technology</span>
              </div>
              <span className="font-mono text-brand-text font-medium">Graduation: June 2027</span>
            </div>
          </div>

          {/* Right Column: Personal Highlights & Engineering Telemetry */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-mono text-brand-textMuted uppercase tracking-wider flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-brand-emerald" />
                KEY COMPETITIVE HIGHLIGHTS
              </span>
              <span className="text-[11px] font-mono text-brand-blue">
                Verified Records
              </span>
            </div>

            {/* Highlight Cards Grid */}
            <div className="space-y-3">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="group p-4 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-borderLight hover:bg-brand-elevated/60 transition-all duration-200 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-elevated border border-brand-border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-heading font-bold text-sm text-brand-text group-hover:text-brand-blue transition-colors">
                        {item.title}
                      </h4>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-brand-elevated text-brand-cyan border border-brand-border font-medium shrink-0">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs text-brand-textMuted mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-sm font-mono font-extrabold text-gradient-blue block">
                      {item.metric}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Engineering Terminal Snippet */}
            <div className="mt-4 rounded-xl bg-[#08090D] border border-brand-border/90 p-4 font-mono text-xs shadow-2xl">
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-brand-border/40">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                  <span className="text-[10px] text-brand-textMuted/70 ml-2">govardhana@eng-node-1:~</span>
                </div>
                <span className="text-[10px] text-brand-emerald">SYS_STABLE: 99.98%</span>
              </div>
              <div className="space-y-1 text-brand-textMuted">
                <p>
                  <span className="text-brand-blue">const</span> engineer = {'{'}
                </p>
                <p className="pl-4">
                  focus: <span className="text-brand-cyan">'AI/ML Systems & Scalable Backends'</span>,
                </p>
                <p className="pl-4">
                  corePrinciples: [<span className="text-brand-violet">'Zero-Hallucination RAG'</span>, <span className="text-brand-violet">'High-Throughput APIs'</span>, <span className="text-brand-violet">'Evidence Grounding'</span>],
                </p>
                <p className="pl-4">
                  status: <span className="text-brand-emerald">'Ready for High-Impact Software Engineering Roles'</span>
                </p>
                <p>{'};'}</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
