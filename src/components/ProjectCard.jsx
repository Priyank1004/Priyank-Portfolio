import { useState } from "react";
import { glassCard } from "../styles/sharedStyles";

export default function ProjectCard({ project, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden transition-all duration-500"
      style={{
        ...glassCard,
        display: visible ? "block" : "none",
        transform: hovered ? "scale(1.02) translateY(-8px)" : "scale(1) translateY(0)",
        boxShadow: hovered ? `0 0 40px ${project.accentColor}4D` : "none",
        borderColor: hovered ? `${project.accentColor}80` : "rgba(255,255,255,0.08)",
        transition: "all 0.5s ease",
      }}
    >
      {/* Image */}
      <div className="overflow-hidden aspect-video relative border-b border-white/8 bg-[#1c1f2a]">
        <img
          src={project.image}
          alt={project.alt}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{
            transform: hovered ? "scale(1.05)" : "scale(1)",
            opacity: hovered ? 1 : 0.8,
            mixBlendMode: hovered ? "normal" : "luminosity",
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(15,19,29,0.9),transparent)" }} />
      </div>

      {/* Content */}
      <div className="p-8 relative z-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(({ label, color, bg, border }) => (
            <span
              key={label}
              className="text-[12px] font-mono px-2 py-1 rounded"
              style={{ color, background: bg, border: `1px solid ${border}` }}
            >
              {label}
            </span>
          ))}
        </div>
        <h3
          className="text-[28px] font-semibold mb-3 transition-colors"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: hovered ? project.accentColor : "#F9FAFB",
          }}
        >
          {project.title}
        </h3>
        <p className="text-[#94A3B8] mb-6 line-clamp-2">{project.desc}</p>
        <a
          href={project.projectLink}
          target="_blank"
          className="inline-flex items-center gap-2 font-semibold tracking-widest uppercase text-xs transition-colors hover:text-white"
          style={{ color: project.ctaColor }}
        >
          {project.cta}
          <span
            className="material-symbols-outlined text-[18px] transition-transform"
            style={{ transform: hovered ? "translateX(4px)" : "none" }}
          >
            arrow_forward
          </span>
        </a>
      </div>
    </div>
  );
}
