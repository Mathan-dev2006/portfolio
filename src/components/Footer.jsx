import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] bg-[#070709] relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Tagline */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-white/[0.05] border border-white/10 flex items-center justify-center font-mono-code text-xs font-semibold text-sky-400">
              M
            </span>
            <span className="font-bold text-white tracking-tight">MATHAN .M</span>
          </div>
          <span className="hidden sm:inline text-zinc-700">•</span>
          <p className="text-xs text-zinc-400 font-mono-code">
            Built with React &amp; curiosity.
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Mathan-dev2006"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/mathandev2006"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:mathandev2006@gmail.com"
            aria-label="Email Mathan"
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Copyright & Back to top */}
        <div className="flex items-center gap-4 text-xs text-zinc-500 font-mono-code">
          <span>&copy; 2026 MATHAN .M</span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="p-2 text-zinc-400 hover:text-white rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
