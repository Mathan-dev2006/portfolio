import { useState } from 'react';
import { journeyData } from '../data/journey';
import { Calendar, GraduationCap, Code2, Rocket, ChevronRight, Check, Sparkles } from 'lucide-react';

export default function Journey() {
  const [selectedMilestone, setSelectedMilestone] = useState(0);

  const getMilestoneIcon = (type) => {
    if (type.includes('Education')) return GraduationCap;
    if (type.includes('Project')) return Rocket;
    return Code2;
  };

  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] relative bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="section-label mb-3">04 — Learning &amp; Journey</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            Academic Foundation &amp; Applied Engineering
          </h2>
          <p className="text-zinc-400 max-w-xl text-sm sm:text-base leading-relaxed">
            An authentic, verified timeline of academic achievements, self-directed learning, and hands-on software development.
          </p>
        </div>

        {/* Desktop View: Dual Column */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          {/* Milestone List Left */}
          <div className="col-span-5 space-y-4">
            {journeyData.map((item, index) => {
              const Icon = getMilestoneIcon(item.type);
              const isSelected = selectedMilestone === index;

              return (
                <div
                  key={index}
                  onClick={() => setSelectedMilestone(index)}
                  className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer text-left ${
                    isSelected
                      ? 'bg-[#15151f] border-sky-500/40 shadow-xl shadow-sky-500/[0.05]'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-mono-code text-sky-400 font-bold px-2.5 py-1 rounded bg-sky-500/10 border border-sky-500/20">
                      {item.year}
                    </span>
                    <span className="text-[11px] font-mono-code text-zinc-500">{item.highlight}</span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1 flex items-center gap-2">
                    <Icon className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>{item.title}</span>
                  </h3>

                  <p className="text-xs text-zinc-400 line-clamp-1">{item.subtitle}</p>

                  <div className="mt-3 flex items-center justify-between text-xs text-zinc-500 pt-2 border-t border-white/[0.04]">
                    <span>{item.location}</span>
                    <ChevronRight
                      className={`w-4 h-4 text-sky-400 transition-transform duration-200 ${
                        isSelected ? 'translate-x-1 text-sky-300' : 'opacity-40'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Breakdown */}
          <div className="col-span-7">
            {journeyData[selectedMilestone] && (
              <div className="glass-panel rounded-2xl p-7 sm:p-8 border border-white/[0.1] shadow-2xl bg-[#0e0e14]">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-white/[0.08]">
                  <div>
                    <span className="text-xs font-mono-code text-sky-400 font-semibold uppercase tracking-wider block mb-1">
                      {journeyData[selectedMilestone].type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {journeyData[selectedMilestone].title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono-code text-zinc-300 bg-white/[0.05] px-3 py-1.5 rounded-lg border border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span>{journeyData[selectedMilestone].year}</span>
                  </div>
                </div>

                <div className="text-sm text-sky-300 font-medium mb-4">
                  {journeyData[selectedMilestone].subtitle} •{' '}
                  <span className="text-zinc-400 font-normal">
                    {journeyData[selectedMilestone].location}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                  {journeyData[selectedMilestone].description}
                </p>

                {/* Key Takeaways */}
                <div>
                  <h4 className="text-xs font-mono-code text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                    <span>Verified Outcomes &amp; Skills Acquired</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {journeyData[selectedMilestone].takeaways.map((takeaway, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs sm:text-sm text-zinc-300"
                      >
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile & Tablet View: Stacked Accordion for Instant Scannability */}
        <div className="lg:hidden space-y-4">
          {journeyData.map((item, index) => {
            const Icon = getMilestoneIcon(item.type);
            const isExpanded = selectedMilestone === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isExpanded
                    ? 'bg-[#121219] border-sky-500/40 shadow-xl'
                    : 'bg-white/[0.02] border-white/[0.06]'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => setSelectedMilestone(isExpanded ? -1 : index)}
                  className="w-full p-5 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono-code text-sky-400 font-bold px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                        {item.year}
                      </span>
                      <span className="text-[11px] font-mono-code text-zinc-500 truncate">
                        {item.highlight}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white flex items-center gap-2 mb-1">
                      <Icon className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>{item.title}</span>
                    </h3>

                    <p className="text-xs text-zinc-400 line-clamp-1">{item.subtitle}</p>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 text-sky-400 shrink-0 mt-2 transition-transform duration-200 ${
                      isExpanded ? 'rotate-90 text-sky-300' : 'opacity-50'
                    }`}
                  />
                </button>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-white/[0.06] text-xs sm:text-sm text-zinc-300 space-y-4 animate-in fade-in duration-150">
                    <p className="leading-relaxed">{item.description}</p>
                    <div className="space-y-2">
                      <div className="text-[11px] font-mono-code text-zinc-400 uppercase tracking-wider">
                        Key Takeaways:
                      </div>
                      {item.takeaways.map((takeaway, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05]"
                        >
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-xs leading-relaxed">{takeaway}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
