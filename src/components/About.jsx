import { GraduationCap, MapPin, Code, Sparkles, CheckCircle2 } from 'lucide-react';

export default function About() {
  const verifiedTech = [
    { name: 'React.js', role: 'Component Architecture' },
    { name: 'JavaScript (ES6+)', role: 'Core Logic & Asynchronous' },
    { name: 'Node.js', role: 'Server Runtime' },
    { name: 'Express.js', role: 'RESTful API Routing' },
    { name: 'MongoDB', role: 'Document Database' },
    { name: 'PHP & MySQL', role: 'Academic Web Foundation' },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] relative bg-[#0a0a0d]">
      {/* Subtle Grid Accent */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="section-label mb-3">01 — About Me</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Practical skills, fresh perspective.
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left: Professional Story */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed">
            <p className="text-white text-xl sm:text-2xl font-medium leading-snug">
              I'm a 2026 B.Com Computer Applications graduate from Madurai with a strong focus on modern full-stack web engineering.
            </p>

            <p>
              My academic background at{' '}
              <span className="text-zinc-100 font-medium">Nadar Mahajan Sangam S. Vellaichami Nadar College (Kamaraj University)</span>{' '}
              provided a solid foundation in computer applications, programming logic, and relational database systems.
            </p>

            <p>
              Driven by a desire to build real products that solve everyday user challenges, I dedicated myself to modern JavaScript, component-driven UI with React, and server-side engineering. I enjoy turning wireframes and requirements into functional, responsive web applications through deliberate practice and hands-on projects like the <span className="text-sky-300 font-medium">Sneakers Shop</span>.
            </p>

            <p className="text-zinc-400 text-sm sm:text-base">
              My goal is to join a progressive development team where I can contribute clean code, learn from senior engineers, and continuously elevate my engineering standards.
            </p>

            {/* Academic highlights pill */}
            <div className="pt-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                <GraduationCap className="w-5 h-5 text-sky-400 shrink-0" />
                <div className="text-xs">
                  <div className="text-white font-medium">B.Com Computer Applications</div>
                  <div className="text-zinc-400">Class of 2026 • Kamaraj University</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="text-xs">
                  <div className="text-white font-medium">Madurai, Tamil Nadu, India</div>
                  <div className="text-zinc-400">Open to On-Site / Hybrid / Remote</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual Developer Profile Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/[0.09] shadow-xl relative overflow-hidden">
              {/* Top Card Badge */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Verified Stack Profile</h3>
                    <p className="text-xs text-zinc-400">Junior Developer • Actively Building</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono-code px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  2026 Grad
                </span>
              </div>

              {/* Verified Technologies List */}
              <div className="space-y-3 mb-6">
                <div className="text-xs font-mono-code text-zinc-400 uppercase tracking-wider mb-2">
                  Primary Technical Stack
                </div>
                {verifiedTech.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.04] transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-zinc-200">{tech.name}</span>
                    </div>
                    <span className="text-[11px] text-zinc-500 font-mono-code">{tech.role}</span>
                  </div>
                ))}
              </div>

              {/* Developer Mindset Quote Box */}
              <div className="p-3.5 rounded-xl bg-sky-500/[0.04] border border-sky-500/15 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <p className="text-xs text-zinc-300 leading-relaxed">
                  "Committed to writing readable, maintainable code, adhering to modern standards, and continuously learning."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
