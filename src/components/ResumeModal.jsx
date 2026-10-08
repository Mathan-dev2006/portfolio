import { useEffect } from 'react';
import { X, Printer, Download, MapPin, Mail, GraduationCap, Code } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      onClick={onClose}
    >
      <div
        className="glass-panel rounded-2xl w-full max-w-3xl max-h-[92vh] overflow-y-auto border border-white/[0.14] bg-[#0d0d12] shadow-2xl relative my-auto print:max-h-none print:shadow-none print:border-none print:bg-white print:text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar - Hidden on print */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0d0d12]/95 backdrop-blur-md border-b border-white/[0.08] print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono-code text-sky-400 font-semibold uppercase tracking-wider">
              Verified Curriculum Vitae
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-xs font-mono-code text-emerald-400">Class of 2026</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-zinc-200 hover:text-white bg-sky-500/15 hover:bg-sky-500/25 border border-sky-500/30 transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-sky-400" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close resume dialog"
              className="p-1.5 text-zinc-400 hover:text-white rounded-lg bg-white/[0.04] hover:bg-white/[0.08] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Sheet */}
        <div className="p-6 sm:p-10 space-y-8 print:p-0 print:space-y-6">
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-6 print:border-zinc-300 print:pb-4">
            <h1 id="resume-title" className="text-2xl sm:text-3xl font-extrabold text-white print:text-black mb-1">
              MATHAN .M
            </h1>
            <p className="text-base text-sky-400 print:text-zinc-800 font-semibold mb-3">
              Full-Stack / MERN Developer • 2026 Graduate
            </p>

            <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs font-mono-code text-zinc-400 print:text-zinc-700">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" /> Madurai, Tamil Nadu, India
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-zinc-500" /> mathandev2006@gmail.com
              </span>
              <a
                href="https://github.com/Mathan-dev2006"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-sky-300"
              >
                <GithubIcon className="w-3.5 h-3.5 text-zinc-500" /> github.com/Mathan-dev2006
              </a>
              <a
                href="https://www.linkedin.com/in/mathandev2006"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-sky-300"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-zinc-500" /> linkedin.com/in/mathandev2006
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono-code text-sky-400 print:text-black uppercase tracking-wider font-bold">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 print:text-zinc-800 leading-relaxed">
              2026 B.Com Computer Applications graduate with solid programming fundamentals and hands-on experience building full-stack web applications using React.js, Node.js, Express, and MongoDB. Proven capability in translating functional requirements into responsive, interactive user experiences with clean code principles.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono-code text-sky-400 print:text-black uppercase tracking-wider font-bold">
              Education
            </h2>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] print:border-zinc-300 print:bg-white">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <div className="text-sm font-bold text-white print:text-black">
                  Bachelor of Commerce in Computer Applications (B.Com CA)
                </div>
                <span className="text-xs font-mono-code text-sky-400 print:text-zinc-600 font-bold">
                  Graduated: 2026
                </span>
              </div>
              <div className="text-xs text-zinc-400 print:text-zinc-700">
                Nadar Mahajan Sangam S. Vellaichami Nadar College • Kamaraj University
              </div>
              <div className="text-xs text-zinc-500 print:text-zinc-600 mt-1">Madurai, Tamil Nadu, India</div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono-code text-sky-400 print:text-black uppercase tracking-wider font-bold">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] print:border-zinc-300 print:bg-white">
                <div className="text-zinc-400 print:text-zinc-600 font-mono-code mb-1 font-semibold">
                  Frontend
                </div>
                <div className="text-zinc-200 print:text-black font-medium">
                  React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS
                </div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] print:border-zinc-300 print:bg-white">
                <div className="text-zinc-400 print:text-zinc-600 font-mono-code mb-1 font-semibold">
                  Backend
                </div>
                <div className="text-zinc-200 print:text-black font-medium">
                  Node.js, Express.js, PHP, REST APIs
                </div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] print:border-zinc-300 print:bg-white">
                <div className="text-zinc-400 print:text-zinc-600 font-mono-code mb-1 font-semibold">
                  Databases
                </div>
                <div className="text-zinc-200 print:text-black font-medium">
                  MongoDB, MySQL
                </div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] print:border-zinc-300 print:bg-white">
                <div className="text-zinc-400 print:text-zinc-600 font-mono-code mb-1 font-semibold">
                  Tools &amp; Workflow
                </div>
                <div className="text-zinc-200 print:text-black font-medium">
                  Git, GitHub, VS Code, Vite
                </div>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono-code text-sky-400 print:text-black uppercase tracking-wider font-bold">
              Featured Projects
            </h2>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] print:border-zinc-300 print:bg-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <div className="text-sm font-bold text-white print:text-black">
                    Sneakers Shop — E-Commerce Application
                  </div>
                  <span className="text-[11px] font-mono-code text-zinc-400 print:text-zinc-600">
                    React.js, JavaScript, CSS, LocalStorage
                  </span>
                </div>
                <p className="text-xs text-zinc-300 print:text-zinc-800 leading-relaxed">
                  Engineered complete shopping experience with real-time product filtering (Men/Women), instant inventory search, dynamic shopping cart with quantity controls, and persistent state management using browser Local Storage.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] print:border-zinc-300 print:bg-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <div className="text-sm font-bold text-white print:text-black">
                    Personal Developer Portfolio
                  </div>
                  <span className="text-[11px] font-mono-code text-zinc-400 print:text-zinc-600">
                    React.js, Vite, Tailwind CSS
                  </span>
                </div>
                <p className="text-xs text-zinc-300 print:text-zinc-800 leading-relaxed">
                  Designed and developed high-performance developer portfolio featuring interactive code playground, deep project case study modals, learning journey timeline, accessible navigation, and validated contact channels.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] print:border-zinc-300 print:bg-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <div className="text-sm font-bold text-white print:text-black">
                    AI Resume Analyzer (Concept &amp; Prototype)
                  </div>
                  <span className="text-[11px] font-mono-code text-zinc-400 print:text-zinc-600">
                    React.js, Node.js, CSS
                  </span>
                </div>
                <p className="text-xs text-zinc-300 print:text-zinc-800 leading-relaxed">
                  Engineered interface prototype for resume ATS optimization, skill gap detection, and quantifiable formatting evaluations for entry-level candidates.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info - Hidden on print */}
        <div className="px-6 py-4 bg-[#0a0a0e] border-t border-white/[0.08] flex items-center justify-between text-xs text-zinc-400 font-mono-code print:hidden">
          <span>Official 2026 Developer Profile • MATHAN .M</span>
          <button
            onClick={handlePrint}
            className="text-sky-400 hover:text-sky-300 flex items-center gap-1 cursor-pointer font-semibold"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
}
