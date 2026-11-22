import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  ArrowLeft,
  ChevronRight,
  ExternalLink,
  Terminal
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  currentRoute: 'home' | 'specmatch-case-study';
  setCurrentRoute: (route: 'home' | 'specmatch-case-study') => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  setCurrentRoute,
  darkMode,
  setDarkMode,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Subtle web audio feedback synthesizer
  const playClickSound = (freq = 440) => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch {
      // AudioContext unavailable
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      if (currentRoute === 'home') {
        const sections = ['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact'];
        const scrollPosition = window.scrollY + 220;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentRoute]);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    playClickSound(620);
    setMobileMenuOpen(false);

    if (currentRoute !== 'home') {
      setCurrentRoute('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-bg/80 backdrop-blur-xl border-b border-brand-border py-3 shadow-2xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand Monogram */}
          <div className="flex items-center gap-3">
            <button
              onClick={(e) => handleNavClick('home', e)}
              className="group flex items-center gap-2.5 focus:outline-none"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-brand-blue via-brand-violet to-brand-cyan p-[1px] transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-brand-surface rounded-[7px] flex items-center justify-center font-heading font-extrabold text-sm text-brand-text tracking-tighter">
                  GK
                </div>
              </div>
              <div className="text-left hidden sm:block">
                <span className="font-heading font-bold text-sm tracking-wide text-brand-text group-hover:text-brand-blue transition-colors block">
                  GOVARDHANA GUHANESH
                </span>
                <span className="text-[10px] font-mono text-brand-textMuted tracking-wider uppercase block">
                  AI & Software Engineer
                </span>
              </div>
            </button>

            {/* If in Case Study Route, show breadcrumb */}
            {currentRoute === 'specmatch-case-study' && (
              <div className="flex items-center gap-2 pl-3 border-l border-brand-border text-xs font-mono">
                <button
                  onClick={() => {
                    playClickSound(400);
                    setCurrentRoute('home');
                  }}
                  className="flex items-center gap-1 text-brand-blue hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Portfolio</span>
                </button>
                <ChevronRight className="w-3.5 h-3.5 text-brand-textMuted" />
                <span className="text-brand-text font-medium truncate max-w-[120px] sm:max-w-none">
                  SpecMatch AI Case Study
                </span>
              </div>
            )}
          </div>

          {/* Desktop Navigation Links */}
          {currentRoute === 'home' && (
            <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 bg-brand-surface/70 px-3 py-1.5 rounded-full border border-brand-border/80 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(link.id, e)}
                    className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 relative ${
                      isActive
                        ? 'text-white bg-brand-elevated shadow-sm border border-brand-borderLight font-semibold'
                        : 'text-brand-textMuted hover:text-brand-text hover:bg-brand-elevated/40'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-brand-blue rounded-full"></span>
                    )}
                  </a>
                );
              })}
            </nav>
          )}

          {/* Action Tools & Status Indicator */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Status indicator (Pulsing live badge) */}
            <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 text-[11px] font-mono text-brand-emerald">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald"></span>
              </span>
              <span>OPEN FOR ROLES</span>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={() => {
                const next = !soundEnabled;
                setSoundEnabled(next);
                if (next) playClickSound(580);
              }}
              title={soundEnabled ? 'Mute Interface Clicks' : 'Enable Subtle UI Audio'}
              className="p-2 rounded-lg bg-brand-surface/80 border border-brand-border text-brand-textMuted hover:text-brand-text transition-colors"
              aria-label="Toggle Sound"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-brand-blue" />
              ) : (
                <VolumeX className="w-4 h-4 opacity-70" />
              )}
            </button>

            {/* Theme Switcher */}
            <button
              onClick={() => {
                playClickSound(520);
                setDarkMode(!darkMode);
              }}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-2 rounded-lg bg-brand-surface/80 border border-brand-border text-brand-textMuted hover:text-brand-text transition-colors"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-brand-amber" /> : <Moon className="w-4 h-4 text-brand-blue" />}
            </button>

            {/* Flagship CTA Button */}
            {currentRoute === 'home' ? (
              <button
                onClick={(e) => handleNavClick('contact', e)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-brand-blue to-brand-violet hover:opacity-95 text-white shadow-md shadow-brand-blue/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Let's Connect</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  playClickSound(440);
                  setCurrentRoute('home');
                }}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-brand-surface border border-brand-border hover:bg-brand-elevated text-brand-text transition-all"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Home</span>
              </button>
            )}

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-brand-surface border border-brand-border text-brand-text focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-surface/98 backdrop-blur-2xl border-b border-brand-border px-4 py-5 space-y-2 mt-2 shadow-2xl transition-all">
          <div className="flex items-center justify-between pb-3 border-b border-brand-border/60">
            <span className="text-xs font-mono text-brand-textMuted uppercase tracking-wider">Navigation Menu</span>
            <div className="flex items-center gap-2 px-2 py-0.5 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 text-[10px] font-mono text-brand-emerald">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald"></span>
              <span>OPEN TO OPPORTUNITIES</span>
            </div>
          </div>

          {currentRoute === 'home' ? (
            navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(link.id, e)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-brand-elevated text-brand-blue font-semibold'
                    : 'text-brand-text hover:bg-brand-elevated/50'
                }`}
              >
                {link.label}
              </a>
            ))
          ) : (
            <button
              onClick={() => {
                setCurrentRoute('home');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-brand-blue bg-brand-elevated flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Portfolio Home</span>
            </button>
          )}

          <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between">
            <span className="text-xs text-brand-textMuted font-mono">Theme / UI Sound</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="px-2.5 py-1 text-xs rounded bg-brand-elevated border border-brand-border flex items-center gap-1.5"
              >
                {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-brand-blue" /> : <VolumeX className="w-3.5 h-3.5" />}
                <span>{soundEnabled ? 'Sound ON' : 'Sound OFF'}</span>
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="px-2.5 py-1 text-xs rounded bg-brand-elevated border border-brand-border flex items-center gap-1.5"
              >
                {darkMode ? <Sun className="w-3.5 h-3.5 text-brand-amber" /> : <Moon className="w-3.5 h-3.5 text-brand-blue" />}
                <span>{darkMode ? 'Light' : 'Dark'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
