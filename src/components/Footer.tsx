import React, { useState, useEffect } from 'react';
import { 
  ArrowUp, 
  Code2, 
  Terminal, 
  Heart, 
  Cpu,
  Clock
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [chennaiTime, setChennaiTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Asia/Kolkata timezone
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setChennaiTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-brand-border py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-brand-border/40">
          
          {/* Left: Branding & Status */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-brand-blue to-brand-violet p-[1px]">
              <div className="w-full h-full bg-brand-surface rounded-[7px] flex items-center justify-center font-heading font-extrabold text-sm text-brand-text">
                GK
              </div>
            </div>
            <div>
              <span className="font-heading font-bold text-sm text-brand-text block">
                {PERSONAL_INFO.name}
              </span>
              <div className="flex items-center gap-2 text-xs font-mono text-brand-textMuted justify-center sm:justify-start">
                <span className="flex items-center gap-1 text-brand-emerald">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse"></span>
                  OPERATIONAL
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-brand-blue" />
                  Chennai: {chennaiTime || '15:26:32 IST'}
                </span>
              </div>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-blue/50 text-brand-textMuted hover:text-white transition-all"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-blue/50 text-brand-textMuted hover:text-white transition-all"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-blue/50 text-brand-textMuted hover:text-white transition-all"
              title="LeetCode (150+ Solved)"
            >
              <Code2 className="w-4 h-4 text-brand-amber" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-brand-elevated border border-brand-border hover:border-brand-blue text-brand-text transition-all ml-2"
              title="Return to Top"
            >
              <ArrowUp className="w-4 h-4 text-brand-blue" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Tag */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-brand-textMuted text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Govardhana Guhanesh K. Designed with precision & code.
          </p>
          <div className="flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-brand-blue" />
            <span>Built with React 19, TypeScript, Tailwind CSS & Three.js</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
