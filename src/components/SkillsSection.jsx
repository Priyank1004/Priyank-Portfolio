import { glassCard } from "../styles/sharedStyles";
import { SKILLS } from "../data/skillsData";
import FadeUp from "./FadeUp";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 relative z-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <FadeUp>
          <h2
            className="text-[32px] md:text-[48px] font-bold text-white mb-12 text-center"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
          >
            Technical Arsenal
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SKILLS.map(({ icon, color, title, desc }) => (
              <div
                key={title}
                className="p-6 text-center flex flex-col items-center space-y-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(77,142,255,0.2)]"
                style={glassCard}
              >
                <span className="material-symbols-outlined text-4xl" style={{ color }}>{icon}</span>
                <h3 className="text-[20px] font-semibold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{title}</h3>
                <p className="text-[#94A3B8] text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
