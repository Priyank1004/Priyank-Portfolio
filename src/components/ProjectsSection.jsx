import { useState } from "react";
import { PROJECTS, FILTER_OPTIONS } from "../data/projectsData";
import FadeUp from "./FadeUp";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const isVisible = (project) =>
    activeFilter === "all" || project.categories.includes(activeFilter);

  return (
    <section id="projects" className="py-16 relative z-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Header */}
        <FadeUp className="mb-8 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-[32px] md:text-[48px] font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}>
              Featured Projects
            </h2>
            <p className="text-[#94A3B8] max-w-2xl">A selection of recent work showcasing complex problem solving and modern tech stacks.</p>
          </div>
        </FadeUp>

        {/* Filter Bar */}
        <FadeUp className="mb-12 flex flex-wrap gap-3">
          {FILTER_OPTIONS.map(({ label, value }) => {
            const isActive = activeFilter === value;
            return (
              <button
                key={value}
                onClick={() => setActiveFilter(value)}
                className="px-6 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300"
                style={{
                  background: isActive ? "#4d8eff" : "rgba(255,255,255,0.05)",
                  color: isActive ? "#fff" : "#94A3B8",
                  border: isActive ? "1px solid transparent" : "1px solid rgba(255,255,255,0.1)",
                  boxShadow: isActive ? "0 0 15px rgba(77,142,255,0.4)" : "none",
                }}
              >
                {label}
              </button>
            );
          })}
        </FadeUp>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} visible={isVisible(project)} />
          ))}
        </div>
      </div>
    </section>
  );
}
