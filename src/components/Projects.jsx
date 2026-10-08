import { useState } from 'react';
import { projectsData, projectCategories } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] relative bg-[#0a0a0d]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="section-label mb-3">03 — Selected Projects</div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Practical Applications & Prototypes
            </h2>
            <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
              Built with focus on user experience, state management, and responsive layouts. Each project includes an in-depth case study breakdown.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 font-semibold shadow-sm'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-white/[0.06] hover:bg-white/[0.06]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={(proj) => setActiveProject(proj)}
            />
          ))}
        </div>

        {/* Active Case Study Modal */}
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </div>
    </section>
  );
}
