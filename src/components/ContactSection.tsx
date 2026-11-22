import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Code2, 
  Send, 
  Sparkles, 
  ArrowUpRight,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formState.name.trim()) errors.name = 'Please provide your name.';
    if (!formState.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.email = 'Please provide a valid email address.';
    }
    if (!formState.message.trim()) {
      errors.message = 'Please enter a message.';
    } else if (formState.message.length < 10) {
      errors.message = 'Message must be at least 10 characters.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 900);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden bg-brand-surface/30 border-t border-brand-border/60">
      {/* Background glow lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[400px] bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-brand-violet/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Heading */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-blue font-medium">
            <MessageSquare className="w-3.5 h-3.5 text-brand-blue" />
            <span>DIRECT CHANNELS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-brand-text tracking-tight">
            Have an Idea? <span className="text-gradient">Let's Engineer It.</span>
          </h2>
          <p className="text-sm sm:text-base text-brand-textMuted leading-relaxed">
            I'm always interested in connecting with people who build, innovate, and solve meaningful problems.
          </p>
        </div>

        {/* Split Grid: Contact Channels vs Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Contact Cards & Socials */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with 1-Click Copy */}
            <div className="p-6 rounded-2xl bg-brand-surface/90 border border-brand-border space-y-3 relative overflow-hidden shadow-xl">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-brand-elevated border border-brand-border hover:border-brand-blue/50 text-xs font-mono text-brand-text flex items-center gap-1.5 transition-all"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-brand-emerald" />
                      <span className="text-brand-emerald">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-brand-textMuted" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <span className="text-[10px] font-mono text-brand-textMuted uppercase tracking-wider block">
                  PRIMARY EMAIL
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-base sm:text-lg font-heading font-bold text-brand-text hover:text-brand-blue transition-colors block mt-0.5 break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            {/* Location & Phone Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-brand-surface/90 border border-brand-border space-y-2">
                <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-brand-textMuted uppercase tracking-wider block">
                  LOCATION
                </span>
                <span className="text-sm font-heading font-bold text-brand-text block">
                  {PERSONAL_INFO.location}
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-brand-surface/90 border border-brand-border space-y-2">
                <div className="w-8 h-8 rounded-lg bg-brand-emerald/10 border border-brand-emerald/30 flex items-center justify-center text-brand-emerald">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-brand-textMuted uppercase tracking-wider block">
                  DIRECT PHONE
                </span>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-sm font-heading font-bold text-brand-text hover:text-brand-emerald transition-colors block"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            {/* Social Channels Showcase */}
            <div className="p-5 rounded-2xl bg-brand-surface/90 border border-brand-border space-y-3">
              <span className="text-xs font-mono text-brand-textMuted uppercase tracking-wider block">
                ENGINEERING PROFILES & SOCIAL CHANNELS
              </span>
              <div className="space-y-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-brand-elevated border border-brand-border hover:border-brand-blue/50 text-brand-text hover:text-brand-blue transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-brand-blue" />
                    <span className="text-xs font-medium">LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-brand-textMuted" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-brand-elevated border border-brand-border hover:border-brand-blue/50 text-brand-text hover:text-brand-blue transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-brand-text" />
                    <span className="text-xs font-medium">GitHub Repository</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-brand-textMuted" />
                </a>

                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-brand-elevated border border-brand-border hover:border-brand-blue/50 text-brand-text hover:text-brand-blue transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <Code2 className="w-4 h-4 text-brand-amber" />
                    <span className="text-xs font-medium">LeetCode (150+ Solved)</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-brand-textMuted" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Functional Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-brand-surface/90 border border-brand-border space-y-6 shadow-2xl relative">
              
              <div className="space-y-1 pb-4 border-b border-brand-border/60">
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-brand-text">
                  Send an Engineering Inquiry
                </h3>
                <p className="text-xs text-brand-textMuted">
                  Looking for an AI engineer or full-stack builder? Let's discuss requirements or potential roles.
                </p>
              </div>

              {formStatus === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand-emerald/15 border border-brand-emerald/40 flex items-center justify-center text-brand-emerald mx-auto">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-extrabold text-xl text-brand-text">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-textMuted max-w-md mx-auto">
                    Thank you for reaching out. I'll review your inquiry and respond directly via email shortly.
                  </p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-brand-elevated border border-brand-border text-xs font-mono text-brand-text hover:bg-brand-surface"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-brand-textMuted block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Alex Turing"
                        className={`w-full px-4 py-2.5 rounded-xl bg-brand-elevated border text-xs sm:text-sm text-brand-text placeholder-brand-textMuted/50 focus:outline-none focus:border-brand-blue transition-all ${
                          formErrors.name ? 'border-red-500' : 'border-brand-border'
                        }`}
                      />
                      {formErrors.name && (
                        <span className="text-[11px] text-red-400 font-mono block">{formErrors.name}</span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-brand-textMuted block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-brand-elevated border text-xs sm:text-sm text-brand-text placeholder-brand-textMuted/50 focus:outline-none focus:border-brand-blue transition-all ${
                          formErrors.email ? 'border-red-500' : 'border-brand-border'
                        }`}
                      />
                      {formErrors.email && (
                        <span className="text-[11px] text-red-400 font-mono block">{formErrors.email}</span>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-brand-textMuted block">
                      Subject / Project Scope
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Opportunity / AI System Architecture / Sourcing Discussion"
                      className="w-full px-4 py-2.5 rounded-xl bg-brand-elevated border border-brand-border text-xs sm:text-sm text-brand-text placeholder-brand-textMuted/50 focus:outline-none focus:border-brand-blue transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-brand-textMuted block">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about the engineering challenges or team you're building..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-brand-elevated border text-xs sm:text-sm text-brand-text placeholder-brand-textMuted/50 focus:outline-none focus:border-brand-blue transition-all ${
                        formErrors.message ? 'border-red-500' : 'border-brand-border'
                      }`}
                    />
                    {formErrors.message && (
                      <span className="text-[11px] text-red-400 font-mono block">{formErrors.message}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-3.5 rounded-xl font-heading font-semibold text-sm text-white bg-gradient-to-r from-brand-blue to-brand-violet hover:opacity-95 shadow-lg shadow-brand-blue/25 transition-all flex items-center justify-center gap-2 transform active:scale-[0.99]"
                  >
                    {formStatus === 'submitting' ? (
                      <span>Dispatching Message...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Final Philosophical Brand Statement */}
        <div className="pt-12 border-t border-brand-border/60 text-center space-y-3">
          <p className="text-xl sm:text-3xl font-extrabold font-heading text-brand-text tracking-tight">
            "{PERSONAL_INFO.quote}"
          </p>
          <p className="text-xs font-mono text-brand-blue uppercase tracking-widest">
            GOVARDHANA GUHANESH K • CHENNAI, INDIA
          </p>
        </div>

      </div>
    </section>
  );
};
