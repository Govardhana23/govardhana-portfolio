import React, { useState, useEffect } from 'react';
import { 
  ArrowDown, 
  ArrowUpRight, 
  Code2, 
  Sparkles, 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  Layers 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Hero3DVisual } from './Hero3DVisual';

interface HeroSectionProps {
  onExploreWork: () => void;
  onConnect: () => void;
  onOpenSpecMatch: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWork,
  onConnect,
  onOpenSpecMatch,
}) => {
  // Animated Role Rotator
  const roles = PERSONAL_INFO.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, 70);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }, 40);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex, roles]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden grid-pattern"
    >
      {/* Radial spotlight glow gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-brand-blue/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-brand-violet/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Expressive Typography & Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Top Engineering Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-surface/90 border border-brand-border/90 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-emerald"></span>
              </span>
              <span className="text-[11px] font-mono font-medium tracking-wider text-brand-emerald">
                {PERSONAL_INFO.status}
              </span>
              <span className="text-brand-border">•</span>
              <span className="text-[11px] font-mono text-brand-textMuted flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                Chennai, IN
              </span>
            </div>

            {/* Introductory Label */}
            <div className="space-y-1">
              <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-brand-blue uppercase font-semibold">
                HELLO, WORLD. I'M
              </p>
              
              {/* Massive Main Heading */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight text-brand-text leading-[1.08]">
                GOVARDHANA <br />
                <span className="text-gradient">GUHANESH.</span>
              </h1>
            </div>

            {/* Dynamic Animated Role Banner */}
            <div className="flex items-center gap-2 text-sm sm:text-base font-mono font-semibold text-brand-cyan tracking-wider">
              <span className="text-brand-violet">{'>'}</span>
              <span className="min-h-[1.5rem] inline-block">
                {displayedText}
                <span className="animate-pulse text-brand-blue">|</span>
              </span>
            </div>

            {/* Hero Tagline & Supporting Statement */}
            <div className="space-y-2 max-w-2xl">
              <p className="text-xl sm:text-2xl font-semibold text-brand-text/90 font-heading">
                {PERSONAL_INFO.tagline}
              </p>
              <p className="text-sm sm:text-base text-brand-textMuted leading-relaxed">
                {PERSONAL_INFO.supportingStatement}
              </p>
            </div>

            {/* Short Introduction Paragraph */}
            <p className="text-sm text-brand-textMuted/90 leading-relaxed max-w-xl border-l-2 border-brand-blue/40 pl-3.5 py-0.5">
              {PERSONAL_INFO.bioShort}
            </p>

            {/* CTAs and Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              {/* Primary CTA */}
              <button
                onClick={onExploreWork}
                className="group px-6 py-3 rounded-xl font-heading font-semibold text-sm text-white bg-gradient-to-r from-brand-blue via-brand-blue to-brand-violet hover:opacity-95 shadow-lg shadow-brand-blue/25 hover:shadow-brand-blue/40 transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onConnect}
                className="px-5 py-3 rounded-xl font-heading font-semibold text-sm text-brand-text bg-brand-surface border border-brand-border hover:border-brand-borderLight hover:bg-brand-elevated transition-all duration-300 flex items-center gap-2"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-brand-blue" />
              </button>

              {/* Social Pills */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-brand-surface/90 border border-brand-border hover:border-brand-blue/50 text-brand-textMuted hover:text-white transition-all hover:scale-105"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-brand-surface/90 border border-brand-border hover:border-brand-blue/50 text-brand-textMuted hover:text-white transition-all hover:scale-105"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-brand-surface/90 border border-brand-border hover:border-brand-blue/50 text-brand-textMuted hover:text-white transition-all hover:scale-105 font-mono text-xs font-bold"
                  title="LeetCode Profile (150+ Solved)"
                  aria-label="LeetCode Profile"
                >
                  <Code2 className="w-4 h-4 text-brand-amber" />
                </a>
              </div>
            </div>

            {/* Quick Flagship Teaser Pill */}
            <div className="pt-2">
              <button
                onClick={onOpenSpecMatch}
                className="group flex items-center gap-3 p-2.5 pr-4 rounded-xl bg-brand-surface/60 border border-brand-border hover:border-brand-blue/40 transition-all text-left max-w-lg"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-brand-blue font-bold">
                      FLAGSHIP ARCHITECTURE
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 font-mono">
                      GATE PASS 100%
                    </span>
                  </div>
                  <p className="text-xs text-brand-text font-medium truncate">
                    SpecMatch AI — Production-Grade B2B Sourcing Copilot
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-brand-textMuted group-hover:text-brand-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive 3D Digital Object & Neural Canvas */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full relative">
              {/* Top sci-fi badge header */}
              <div className="absolute top-2 left-4 z-20 flex items-center gap-2 px-3 py-1 rounded-md bg-brand-surface/80 border border-brand-border backdrop-blur-md text-[10px] font-mono text-brand-textMuted">
                <Terminal className="w-3 h-3 text-brand-blue" />
                <span></span>
              </div>

              {/* 3D Scene Component */}
              <Hero3DVisual />

              {/* Bottom quick spec pill */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20 w-11/12 max-w-xs bg-brand-surface/90 border border-brand-border/80 rounded-xl p-3 backdrop-blur-md shadow-xl flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] font-mono text-brand-textMuted block">CURRENT FOCUS</span>
                  <span className="text-brand-text font-medium font-heading">Enterprise AI & RAG</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-brand-emerald block">SYSTEM HEALTH</span>
                  <span className="text-brand-emerald font-mono font-bold flex items-center gap-1 justify-end">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-ping"></span>
                    ONLINE
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-center text-center">
          <button
            onClick={onExploreWork}
            className="group flex flex-col items-center gap-2 text-brand-textMuted hover:text-brand-blue transition-colors focus:outline-none"
            aria-label="Scroll to content"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">DISCOVER ARCHITECTURE</span>
            <div className="w-5 h-9 rounded-full border border-brand-border flex items-start justify-center p-1 group-hover:border-brand-blue/50 transition-colors">
              <span className="w-1 h-2 bg-brand-blue rounded-full animate-bounce"></span>
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};
