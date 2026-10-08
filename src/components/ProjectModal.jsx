import { useEffect, useRef } from 'react';
import { X, ExternalLink, CheckCircle2, ArrowRight, Lightbulb, AlertTriangle, Layers, BookOpen, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    // Initial focus on close button
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="glass-panel rounded-2xl w-full max-w-4xl max-h-[92vh] overflow-y-auto border border-white/[0.14] bg-[#0d0d12] shadow-2xl relative my-auto flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0d0d12]/95 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono-code text-sky-400 font-bold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-xs font-mono-code text-zinc-400">{project.year}</span>
          </div>

          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close case study dialog"
            className="p-2 text-zinc-400 hover:text-white rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 transition-colors cursor-pointer focus:ring-2 focus:ring-sky-400 focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Title & Tagline */}
          <div>
            <h2 id="case-study-title" className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-sky-300 font-medium">{project.tagline}</p>
          </div>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-4 pt-1 pb-4 border-b border-white/[0.08]">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code on GitHub</span>
              </a>
            )}

            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-zinc-950 bg-sky-400 hover:bg-sky-300 transition-colors shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Live Project</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono-code text-zinc-400 bg-white/[0.03] border border-white/5">
                <span>Deployment preview ready locally</span>
              </span>
            )}
          </div>

          {/* Technology Pills */}
          <div>
            <h3 className="text-xs font-mono-code text-zinc-400 uppercase tracking-wider mb-3">
              Technologies &amp; Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono-code text-sky-300 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Overview Section */}
          {caseStudy?.overview && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono-code text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-sky-400" />
                <span>Project Overview</span>
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {caseStudy.overview}
              </p>
            </div>
          )}

          {/* Problem & Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudy?.problem && (
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <h4 className="text-xs font-mono-code text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>The Problem Solved</span>
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {caseStudy.problem}
                </p>
              </div>
            )}

            {caseStudy?.approach && (
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <h4 className="text-xs font-mono-code text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-sky-400" />
                  <span>Engineering Approach</span>
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {caseStudy.approach}
                </p>
              </div>
            )}
          </div>

          {/* Features List */}
          <div>
            <h3 className="text-xs font-mono-code text-zinc-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Key Features &amp; Architecture</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-300">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Development Process */}
          {caseStudy?.developmentProcess && (
            <div>
              <h3 className="text-xs font-mono-code text-zinc-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>Development Process</span>
              </h3>
              <ol className="space-y-2.5">
                {caseStudy.developmentProcess.map((step, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs sm:text-sm text-zinc-300"
                  >
                    <span className="font-mono-code text-sky-400 font-bold shrink-0">
                      0{idx + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Challenges & What I Learned */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/[0.08]">
            <div>
              <h4 className="text-xs font-mono-code text-zinc-400 uppercase tracking-wider mb-2">
                Challenges Faced
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/[0.05]">
                {caseStudy?.challenges || 'Project details will be added.'}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono-code text-zinc-400 uppercase tracking-wider mb-2">
                What I Learned
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/[0.05]">
                {caseStudy?.whatILearned || 'Project details will be added.'}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Sticky Footer */}
        <div className="sticky bottom-0 z-20 px-6 py-4 bg-[#0d0d12]/95 backdrop-blur-md border-t border-white/[0.08] flex items-center justify-between">
          <span className="text-xs text-zinc-500 font-mono-code hidden sm:inline">
            Press ESC or click outside to dismiss
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-zinc-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] transition-colors cursor-pointer"
          >
            Back to Projects
          </button>
        </div>
      </div>
    </div>
  );
}
