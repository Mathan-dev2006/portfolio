import { useState } from 'react';
import { skillCategories } from '../data/skills';
import {
  Atom,
  FileCode2,
  Palette,
  LayoutTemplate,
  Server,
  Layers,
  CodeXml,
  Database,
  Table2,
  GitBranch,
  GitPullRequest,
  Terminal,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const ICON_MAP = {
  Atom,
  FileCode2,
  Palette,
  LayoutTemplate,
  Server,
  Layers,
  CodeXml,
  Database,
  Table2,
  GitBranch,
  GitPullRequest,
  Terminal
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] relative bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="section-label mb-3">02 — Technical Skills</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Core Toolkit &amp; Practical Capabilities
            </h2>
            <p className="text-zinc-400 max-w-xl text-sm sm:text-base leading-relaxed">
              Honest overview of verified languages, libraries, and tools. No arbitrary percentage bars—each competency is tied to practical project implementations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm'
                  : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-white/[0.06] hover:bg-white/[0.06]'
              }`}
            >
              All Domains (12)
            </button>
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === category.id
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-white/[0.06] hover:bg-white/[0.06]'
                }`}
              >
                {category.title.split(' ')[0]} ({category.skills.length})
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/[0.08] flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.07]">
                  <div>
                    <span className="text-[11px] font-mono-code text-sky-400 uppercase tracking-wider block mb-1">
                      {category.badge}
                    </span>
                    <h3 className="text-lg font-bold text-white">{category.title}</h3>
                  </div>
                  <span className="text-xs text-zinc-400 font-mono-code bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/5">
                    {category.skills.length} competencies
                  </span>
                </div>

                <p className="text-xs text-zinc-300 mb-6 font-normal leading-relaxed">{category.description}</p>

                {/* Individual Skill Cards */}
                <div className="space-y-4">
                  {category.skills.map((skill) => {
                    const IconComponent = ICON_MAP[skill.icon] || Sparkles;
                    return (
                      <div
                        key={skill.name}
                        className="group p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-sky-500/30 transition-all duration-200 shadow-sm"
                      >
                        <div className="flex items-start gap-3.5">
                          <div className="w-10 h-10 rounded-xl bg-white/[0.04] group-hover:bg-sky-500/10 border border-white/10 group-hover:border-sky-500/30 flex items-center justify-center text-zinc-300 group-hover:text-sky-300 transition-colors shrink-0 mt-0.5">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1.5 gap-2">
                              <h4 className="text-sm font-bold text-white group-hover:text-sky-200 transition-colors truncate">
                                {skill.name}
                              </h4>
                              <span className="text-[10px] font-mono-code text-zinc-300 px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08] shrink-0">
                                {skill.level}
                              </span>
                            </div>
                            <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                              {skill.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {skill.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[10px] font-mono-code text-zinc-400 px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.05]"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
