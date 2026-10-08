import { FileText, Download, ArrowUpRight } from 'lucide-react';

export default function ResumeCTA({ onOpenResume }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] relative bg-[#0a0a0d]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/[0.09] shadow-2xl relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-sky-500/[0.07] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20 text-xs font-mono-code mb-4">
              <FileText className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              Want to know more about my work?
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              View my resume to explore my education, skills and project experience in detail. Formatted for clear technical evaluation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-zinc-950 bg-sky-400 hover:bg-sky-300 shadow-lg shadow-sky-400/20 hover:shadow-sky-400/30 transition-all duration-200 cursor-pointer"
              >
                <span>View Resume</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-zinc-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
