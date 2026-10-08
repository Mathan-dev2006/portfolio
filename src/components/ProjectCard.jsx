import { useState } from 'react';
import { ArrowUpRight, ExternalLink, Sparkles, ShoppingBag, UserCheck, CheckCircle2, Star } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, onSelectProject }) {
  const [isHovered, setIsHovered] = useState(false);

  // High-fidelity UI Mockups per project
  const renderProjectVisual = () => {
    if (project.id === 'sneakers-shop') {
      return (
        <div className="w-full h-56 bg-gradient-to-br from-[#12131c] via-[#0e0f14] to-[#09090c] relative overflow-hidden flex flex-col justify-between p-4 border-b border-white/[0.08]">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

          {/* Browser Address Bar */}
          <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-black/40 border border-white/[0.08] backdrop-blur-sm relative z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <div className="text-[10px] font-mono-code text-zinc-400 bg-white/[0.04] px-3 py-0.5 rounded-md border border-white/5">
              https://sneakers-shop-react.local
            </div>
            <ShoppingBag className="w-3.5 h-3.5 text-sky-400" />
          </div>

          {/* Mock Interactive Store Showcase */}
          <div className="glass-panel rounded-xl p-3.5 border border-white/[0.12] shadow-xl relative z-10 transition-transform duration-300 group-hover:scale-[1.02]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-[11px] font-mono-code">
                <span className="px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 font-semibold border border-sky-500/20">
                  Men's Running
                </span>
                <span className="text-zinc-500">Filter: Active</span>
              </div>
              <span className="text-[10px] font-mono-code text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Cart (2 items)
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 border border-sky-500/30 flex items-center justify-center text-sky-300 font-mono-code text-xs font-bold shrink-0 shadow-inner">
                AIR-90
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-white truncate">Nike Air Velocity Pro</h4>
                  <span className="text-xs font-bold text-sky-400 font-mono-code">$149.00</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-zinc-400 mt-0.5">
                  <div className="flex text-amber-400">
                    <Star className="w-2.5 h-2.5 fill-amber-400" />
                    <Star className="w-2.5 h-2.5 fill-amber-400" />
                    <Star className="w-2.5 h-2.5 fill-amber-400" />
                    <Star className="w-2.5 h-2.5 fill-amber-400" />
                    <Star className="w-2.5 h-2.5 fill-amber-400" />
                  </div>
                  <span>4.9 (128 reviews)</span>
                </div>
                <div className="flex items-center justify-between mt-2 pt-1 border-t border-white/[0.05]">
                  <span className="text-[9px] font-mono-code text-zinc-400">Sizes: 8, 9, 10, 11</span>
                  <span className="text-[9px] font-mono-code text-sky-300 bg-sky-500/10 px-1.5 py-0.5 rounded">
                    + Added to Cart
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 'personal-portfolio') {
      return (
        <div className="w-full h-56 bg-gradient-to-br from-[#10141c] via-[#0c0f16] to-[#09090c] relative overflow-hidden flex flex-col justify-between p-4 border-b border-white/[0.08]">
          <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

          {/* Browser Address Bar */}
          <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-black/40 border border-white/[0.08] backdrop-blur-sm relative z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <div className="text-[10px] font-mono-code text-zinc-400 bg-white/[0.04] px-3 py-0.5 rounded-md border border-white/5">
              https://mathan-dev.portfolio
            </div>
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse-subtle" />
          </div>

          {/* Mock Portfolio Viewport */}
          <div className="glass-panel rounded-xl p-3.5 border border-white/[0.12] shadow-xl relative z-10 transition-transform duration-300 group-hover:scale-[1.02]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-sky-500/20 text-sky-400 flex items-center justify-center text-[10px] font-mono-code font-bold">
                  M
                </span>
                <span className="text-xs font-bold text-white">MATHAN .M</span>
              </div>
              <span className="text-[10px] font-mono-code text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                100% Score
              </span>
            </div>

            <div className="space-y-1.5 text-[11px] font-mono-code bg-[#08080c] p-2.5 rounded-lg border border-white/5">
              <div className="text-zinc-400 flex items-center justify-between">
                <span>Core Framework:</span>
                <span className="text-sky-300 font-semibold">React 19 + Vite 8</span>
              </div>
              <div className="text-zinc-400 flex items-center justify-between">
                <span>Aesthetics:</span>
                <span className="text-zinc-200">Editorial Dark / Tailwind</span>
              </div>
              <div className="text-zinc-400 flex items-center justify-between">
                <span>Accessibility:</span>
                <span className="text-emerald-400">WCAG 2.1 AA Compliant</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Default: AI Resume Analyzer
    return (
      <div className="w-full h-56 bg-gradient-to-br from-[#16121f] via-[#100d18] to-[#09090c] relative overflow-hidden flex flex-col justify-between p-4 border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

        {/* Browser Address Bar */}
        <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-black/40 border border-white/[0.08] backdrop-blur-sm relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500/80" />
            <span className="w-2 h-2 rounded-full bg-amber-500/80" />
            <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
          </div>
          <div className="text-[10px] font-mono-code text-zinc-400 bg-white/[0.04] px-3 py-0.5 rounded-md border border-white/5">
            https://ai-resume-analyzer.concept
          </div>
          <UserCheck className="w-3.5 h-3.5 text-purple-400" />
        </div>

        {/* Mock Analytics Dashboard */}
        <div className="glass-panel rounded-xl p-3.5 border border-white/[0.12] shadow-xl relative z-10 transition-transform duration-300 group-hover:scale-[1.02]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white">ATS Analysis Summary</span>
            <span className="text-[11px] font-mono-code font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              92 / 100
            </span>
          </div>

          <div className="space-y-2">
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono-code text-zinc-400 mb-1">
                <span>Frontend Keyword Alignment</span>
                <span className="text-sky-300">94% match</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-400 to-sky-400 rounded-full w-[94%]" />
              </div>
            </div>

            <div className="flex flex-wrap gap-1 pt-1">
              <span className="text-[9px] font-mono-code text-emerald-300 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                ✓ React Hooks
              </span>
              <span className="text-[9px] font-mono-code text-emerald-300 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                ✓ State Management
              </span>
              <span className="text-[9px] font-mono-code text-sky-300 bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20">
                + Node.js API
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group glass-panel rounded-2xl overflow-hidden border border-white/[0.08] hover:border-sky-500/35 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-sky-500/[0.08] flex flex-col justify-between"
    >
      <div>
        {/* Visual Mockup Preview */}
        {renderProjectVisual()}

        {/* Card Content Body */}
        <div className="p-6 sm:p-7">
          {/* Metadata Top Bar */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono-code text-sky-400 font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs font-mono-code text-zinc-400 bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-white/[0.06]">
              {project.year}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-200 transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight
              className={`w-4 h-4 text-sky-400 transition-transform duration-200 ${
                isHovered ? 'translate-x-0.5 -translate-y-0.5 opacity-100' : 'opacity-50'
              }`}
            />
          </h3>

          {/* Tagline */}
          <p className="text-xs font-medium text-sky-400/80 mb-3 font-mono-code">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-normal">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono-code text-zinc-300 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] group-hover:border-white/15 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Key Features Bullets */}
          <div className="space-y-2 mb-2 text-xs text-zinc-300">
            {project.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-6 py-4 bg-[#09090d] border-t border-white/[0.06] flex items-center justify-between">
        <button
          onClick={() => onSelectProject(project)}
          className="text-xs font-bold text-sky-300 hover:text-white inline-flex items-center gap-1.5 cursor-pointer focus:outline-none transition-colors"
        >
          <span>View Detailed Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="p-1.5 text-zinc-400 hover:text-white rounded-md hover:bg-white/[0.06] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} Live Demo`}
              className="p-1.5 text-zinc-400 hover:text-sky-300 rounded-md hover:bg-white/[0.06] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <span
              title="Demo URL ready for local deployment"
              className="text-[10px] font-mono-code text-zinc-400 bg-white/[0.03] border border-white/5 px-2 py-0.5 rounded cursor-help"
            >
              Production Ready
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
