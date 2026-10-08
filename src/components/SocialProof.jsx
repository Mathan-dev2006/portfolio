import { ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function SocialProof() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] relative bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* GitHub Card */}
          <a
            href="https://github.com/Mathan-dev2006"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1 block no-underline"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] group-hover:bg-sky-500/10 border border-white/10 group-hover:border-sky-500/25 flex items-center justify-center text-white group-hover:text-sky-400 transition-colors">
                <GithubIcon className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-sky-400 transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>

            <span className="text-xs font-mono-code text-sky-400 uppercase tracking-wider block mb-1">
              Source Code &amp; Repositories
            </span>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-200 transition-colors">
              Explore my code
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Browse public project repositories, commits, code structure, and development experiments on GitHub.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-mono-code text-zinc-300 group-hover:text-sky-300">
              <span>github.com/Mathan-dev2006</span>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/mathandev2006"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1 block no-underline"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] group-hover:bg-sky-500/10 border border-white/10 group-hover:border-sky-500/25 flex items-center justify-center text-white group-hover:text-sky-400 transition-colors">
                <LinkedinIcon className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-sky-400 transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>

            <span className="text-xs font-mono-code text-sky-400 uppercase tracking-wider block mb-1">
              Professional Network
            </span>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-200 transition-colors">
              Connect with me
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Connect on LinkedIn for entry-level opportunities, engineering collaborations, and professional networking.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-mono-code text-zinc-300 group-hover:text-sky-300">
              <span>linkedin.com/in/mathandev2006</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
