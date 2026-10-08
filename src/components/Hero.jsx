import { useState } from 'react';
import { ArrowDown, FileText, Mail, Check, Copy, Code2, Terminal, Play, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero({ onOpenResume }) {
  const [activeTab, setActiveTab] = useState('developer.js');
  const [copied, setCopied] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState(null);

  const codeSnippets = {
    'developer.js': `const developer = {
  name: "MATHAN .M",
  role: "Full-Stack Developer",
  location: "Madurai, India",
  education: "B.Com CA (2026)",
  stack: ["React.js", "Node.js", "Express", "MongoDB"],
  openToWork: true
};`,
    'skills.json': `{
  "frontend": ["React.js", "JavaScript", "HTML5", "CSS3"],
  "backend": ["Node.js", "Express.js", "PHP"],
  "database": ["MongoDB", "MySQL"],
  "tools": ["Git", "GitHub", "VS Code"],
  "aspirations": "Building clean, scalable web apps"
}`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunSnippet = () => {
    if (activeTab === 'developer.js') {
      setConsoleOutput('✓ Loaded developer profile: MATHAN .M [Ready for Full-Stack / MERN Roles]');
    } else {
      setConsoleOutput('✓ Stack verified: 4 Frontend, 3 Backend, 2 Database, 3 Tools loaded');
    }
    setTimeout(() => {
      setConsoleOutput(null);
    }, 4000);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-grid-pattern overflow-hidden"
    >
      {/* Soft radial ambient glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-sky-500/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[280px] bg-indigo-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center relative z-10">
        {/* Left Column: Text and CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/25 text-emerald-400 text-xs font-mono-code mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-subtle" />
            <span className="font-medium">Open to opportunities</span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400">Class of 2026</span>
          </div>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm font-mono-code text-sky-400 font-semibold tracking-wider uppercase mb-3 flex items-center gap-2">
            <span>&lt;developer&gt;</span>
            <span>Hi, I'm MATHAN .M</span>
            <span>&lt;/developer&gt;</span>
          </p>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-white leading-[1.12] mb-6">
            Building modern web experiences with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400">
              React &amp; full-stack
            </span>{' '}
            technologies.
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed mb-8 font-normal">
            Fresh 2026 B.Com Computer Applications graduate focused on building practical,
            responsive and user-friendly web applications. Actively developing component-driven UIs and MERN stack systems.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-zinc-950 bg-sky-400 hover:bg-sky-300 transition-all duration-200 shadow-lg shadow-sky-400/20 hover:shadow-sky-400/30 cursor-pointer active:scale-98"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenResume}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-zinc-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer active:scale-98"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              <span>View Resume</span>
            </button>
          </div>

          {/* Secondary Links */}
          <div className="flex flex-wrap items-center gap-5 pt-6 border-t border-white/[0.08] w-full max-w-lg">
            <span className="text-xs font-mono-code text-zinc-500 uppercase tracking-wider">Connect:</span>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Mathan-dev2006"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-zinc-400" />
                <span>GitHub</span>
              </a>
              <span className="text-zinc-700">•</span>
              <a
                href="https://www.linkedin.com/in/mathandev2006"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-zinc-400" />
                <span>LinkedIn</span>
              </a>
              <span className="text-zinc-700">•</span>
              <a
                href="mailto:mathandev2006@gmail.com"
                className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: High-Fidelity Code Editor Widget */}
        <div className="lg:col-span-5 w-full">
          <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl shadow-black/90 border border-white/[0.12] bg-[#0c0c11]">
            {/* Window Top Controls */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#09090d] border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
                <span className="text-[11px] font-mono-code text-zinc-400 ml-2 hidden sm:inline">
                  profile.config.js
                </span>
              </div>

              {/* Action buttons on editor bar */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleRunSnippet}
                  title="Run code snippet"
                  className="inline-flex items-center gap-1 text-[11px] font-mono-code text-emerald-400 hover:text-emerald-300 px-2 py-1 rounded bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 transition-colors cursor-pointer"
                >
                  <Play className="w-3 h-3" />
                  <span>Run</span>
                </button>

                <button
                  onClick={handleCopyCode}
                  aria-label="Copy code snippet"
                  className="inline-flex items-center gap-1 text-[11px] font-mono-code text-zinc-300 hover:text-white px-2 py-1 rounded bg-white/[0.05] hover:bg-white/[0.1] border border-white/5 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* File Tabs */}
            <div className="flex items-center bg-[#101017] border-b border-white/[0.06] overflow-x-auto text-xs font-mono-code">
              <button
                onClick={() => setActiveTab('developer.js')}
                className={`flex items-center gap-2 px-4 py-2.5 border-r border-white/[0.06] transition-colors cursor-pointer ${
                  activeTab === 'developer.js'
                    ? 'bg-[#151520] text-sky-300 border-t-2 border-t-sky-400 font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Code2 className="w-3.5 h-3.5 text-amber-400" />
                <span>developer.js</span>
              </button>

              <button
                onClick={() => setActiveTab('skills.json')}
                className={`flex items-center gap-2 px-4 py-2.5 border-r border-white/[0.06] transition-colors cursor-pointer ${
                  activeTab === 'skills.json'
                    ? 'bg-[#151520] text-sky-300 border-t-2 border-t-sky-400 font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-sky-400" />
                <span>skills.json</span>
              </button>
            </div>

            {/* Code Body */}
            <div className="p-4 sm:p-5 bg-[#0b0b10] font-mono-code text-xs sm:text-sm text-zinc-200 overflow-x-auto leading-relaxed min-h-[200px]">
              <pre className="m-0 select-text">
                <code>
                  {activeTab === 'developer.js' ? (
                    <>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-sky-300 font-semibold">developer</span> = &#123;
                      {'\n'}  <span className="text-zinc-400">name:</span> <span className="text-emerald-300">"MATHAN .M"</span>,
                      {'\n'}  <span className="text-zinc-400">role:</span> <span className="text-emerald-300">"Full-Stack Developer"</span>,
                      {'\n'}  <span className="text-zinc-400">location:</span> <span className="text-emerald-300">"Madurai, India"</span>,
                      {'\n'}  <span className="text-zinc-400">education:</span> <span className="text-emerald-300">"B.Com CA (2026)"</span>,
                      {'\n'}  <span className="text-zinc-400">stack:</span> [<span className="text-emerald-300">"React.js"</span>, <span className="text-emerald-300">"Node.js"</span>, <span className="text-emerald-300">"Express"</span>, <span className="text-emerald-300">"MongoDB"</span>],
                      {'\n'}  <span className="text-zinc-400">openToWork:</span> <span className="text-sky-400 font-bold">true</span>
                      {'\n'}&#125;;
                    </>
                  ) : (
                    <>
                      &#123;
                      {'\n'}  <span className="text-purple-400">"frontend"</span>: [<span className="text-emerald-300">"React.js"</span>, <span className="text-emerald-300">"JavaScript"</span>, <span className="text-emerald-300">"HTML5"</span>, <span className="text-emerald-300">"CSS3"</span>],
                      {'\n'}  <span className="text-purple-400">"backend"</span>: [<span className="text-emerald-300">"Node.js"</span>, <span className="text-emerald-300">"Express.js"</span>, <span className="text-emerald-300">"PHP"</span>],
                      {'\n'}  <span className="text-purple-400">"database"</span>: [<span className="text-emerald-300">"MongoDB"</span>, <span className="text-emerald-300">"MySQL"</span>],
                      {'\n'}  <span className="text-purple-400">"tools"</span>: [<span className="text-emerald-300">"Git"</span>, <span className="text-emerald-300">"GitHub"</span>, <span className="text-emerald-300">"VS Code"</span>]
                      {'\n'}&#125;
                    </>
                  )}
                </code>
              </pre>
            </div>

            {/* Simulated Terminal / Output Drawer */}
            {consoleOutput && (
              <div className="px-4 py-2.5 bg-[#08080c] border-t border-emerald-500/20 text-xs font-mono-code text-emerald-400 flex items-center gap-2 animate-in fade-in duration-150">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{consoleOutput}</span>
              </div>
            )}

            {/* Editor Footer Status Bar */}
            <div className="px-4 py-2 bg-[#09090d] border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono-code text-zinc-500">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Interactive Node</span>
                </span>
                <span>UTF-8</span>
              </div>
              <span className="text-zinc-400">ES6+ Modules</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
