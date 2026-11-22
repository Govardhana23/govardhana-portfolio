import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  BrainCircuit, 
  Cloud, 
  CheckCircle, 
  BookOpen, 
  Search,
  Cpu,
  Layers,
  Terminal,
  Filter
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    'PROGRAMMING': <Code2 className="w-4 h-4 text-brand-blue" />,
    'FRONTEND': <Layout className="w-4 h-4 text-brand-cyan" />,
    'BACKEND': <Server className="w-4 h-4 text-brand-violet" />,
    'DATABASES': <Database className="w-4 h-4 text-brand-amber" />,
    'AI & MACHINE LEARNING': <BrainCircuit className="w-4 h-4 text-brand-blue" />,
    'CLOUD & DEVOPS': <Cloud className="w-4 h-4 text-brand-cyan" />,
    'TESTING & ENGINEERING': <CheckCircle className="w-4 h-4 text-brand-emerald" />,
    'CORE COMPUTER SCIENCE': <BookOpen className="w-4 h-4 text-brand-violet" />
  };

  // Filter skills
  const filteredCategories = SKILL_CATEGORIES.map((category) => {
    const matchesCategory = selectedCategory === 'ALL' || category.name === selectedCategory;
    if (!matchesCategory) return null;

    const filteredSkills = category.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.context && skill.context.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (filteredSkills.length === 0) return null;

    return {
      ...category,
      skills: filteredSkills
    };
  }).filter(Boolean) as typeof SKILL_CATEGORIES;

  const totalSkillsCount = SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand-violet/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-blue/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-blue font-medium">
              <Cpu className="w-3.5 h-3.5 text-brand-blue" />
              <span>PRODUCTION TOOLKIT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-brand-text tracking-tight">
              Technical <span className="text-gradient">Arsenal.</span>
            </h2>
            <p className="text-sm sm:text-base text-brand-textMuted max-w-2xl">
              Engineered technologies and frameworks backed by real project implementation, production RAG pipelines, and systems design.
            </p>
          </div>

          {/* Quick Search & Count */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-brand-textMuted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tools or patterns..."
                className="pl-9 pr-4 py-2 rounded-xl bg-brand-surface border border-brand-border text-xs text-brand-text placeholder-brand-textMuted/60 focus:outline-none focus:border-brand-blue w-52 sm:w-64 transition-all"
              />
            </div>
            <span className="hidden sm:inline-flex px-3 py-2 rounded-xl bg-brand-surface border border-brand-border text-xs font-mono text-brand-textMuted">
              {totalSkillsCount} Tools
            </span>
          </div>
        </div>

        {/* Category Filters Pill Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('ALL')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              selectedCategory === 'ALL'
                ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/20 font-semibold'
                : 'bg-brand-surface text-brand-textMuted hover:text-brand-text hover:bg-brand-elevated border border-brand-border'
            }`}
          >
            All Disciplines ({totalSkillsCount})
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap flex items-center gap-1.5 transition-all ${
                selectedCategory === cat.name
                  ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/20 font-semibold'
                  : 'bg-brand-surface text-brand-textMuted hover:text-brand-text hover:bg-brand-elevated border border-brand-border'
              }`}
            >
              {categoryIcons[cat.name]}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Categorized Visual Grid */}
        <div className="space-y-10">
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              className="bg-brand-surface/40 border border-brand-border/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md transition-all"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-brand-border/60 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-elevated border border-brand-border flex items-center justify-center">
                    {categoryIcons[category.name]}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-brand-text flex items-center gap-2">
                      {category.name}
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-elevated text-brand-blue border border-brand-border">
                        {category.badge}
                      </span>
                    </h3>
                    <p className="text-xs text-brand-textMuted">
                      {category.description}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-brand-textMuted self-start sm:self-auto">
                  {category.skills.length} competencies
                </span>
              </div>

              {/* Skills Card Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group p-3.5 rounded-xl bg-brand-surface/80 border border-brand-border hover:border-brand-blue/40 hover:bg-brand-elevated transition-all duration-200"
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="font-heading font-semibold text-xs sm:text-sm text-brand-text group-hover:text-brand-blue transition-colors">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-brand-elevated text-brand-textMuted group-hover:text-brand-cyan transition-colors">
                          {skill.level}
                        </span>
                      )}
                    </div>
                    {skill.context && (
                      <p className="text-[11px] text-brand-textMuted/80 line-clamp-1 group-hover:text-brand-textMuted transition-colors font-mono">
                        {skill.context}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12 bg-brand-surface/30 rounded-2xl border border-brand-border">
              <p className="text-sm text-brand-textMuted">No skills matched your search query "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('ALL');
                }}
                className="mt-3 text-xs text-brand-blue hover:underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-8 p-4 rounded-xl bg-brand-surface/50 border border-brand-border text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brand-textMuted">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-brand-emerald shrink-0" />
            <span>
              All listed technologies reflect hands-on development across production prototypes, research workflows, and verified project repos.
            </span>
          </div>
          <span className="font-mono text-[10px] text-brand-textMuted/80 shrink-0">
            NO ARBITRARY PERCENTAGES
          </span>
        </div>

      </div>
    </section>
  );
};
