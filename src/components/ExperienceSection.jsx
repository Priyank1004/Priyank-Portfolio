import { glassCard } from "../styles/sharedStyles";
import { EXPERIENCE, COMPETENCIES } from "../data/experienceData";
import FadeUp from "./FadeUp";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 relative z-20" style={{ background: "rgba(15,19,29,0.5)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Timeline */}
        <FadeUp>
          <h2 className="text-[32px] md:text-[48px] font-bold text-white mb-10" style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}>
            Experience
          </h2>
          <div className="relative border-l border-white/8 pl-8 space-y-12">
            {EXPERIENCE.map(({ period, role, company, desc, active }) => (
              <div key={role} className="relative">
                <div
                  className="absolute -left-[41px] top-1 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{
                    background: active ? "rgba(173,198,255,0.2)" : "rgba(49,53,64,1)",
                    border: active ? "1px solid #adc6ff" : "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {active && <div className="w-2 h-2 rounded-full bg-[#adc6ff]" />}
                </div>
                <span className="text-xs font-semibold tracking-widest text-[#adc6ff] uppercase block mb-2">{period}</span>
                <h3 className="text-[24px] font-semibold text-white mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{role}</h3>
                <p className="text-[#94A3B8] mb-4">{company}</p>
                <p className="text-[#94A3B8] text-sm leading-relaxed text-justify">{desc}</p>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Education + Competencies */}
        <FadeUp delay={0.2}>
          <h2 className="text-[32px] md:text-[48px] font-bold text-white mb-10" style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}>
            Education & Competencies
          </h2>
          <div className="p-8 mb-8" style={glassCard}>
            <span className="text-xs font-semibold tracking-widest text-[#4edea3] uppercase block mb-2">2018 - 2020</span>
            <h3 className="text-[24px] font-semibold text-white mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Matsre Of Computer Application</h3>
            <p className="text-[#94A3B8]">Ganpat University</p>
          </div>

          <h3 className="text-[24px] font-semibold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Core Competencies</h3>
          <div className="flex flex-wrap gap-3">
            {COMPETENCIES.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-sm text-[#94A3B8] hover:text-[#adc6ff] transition-colors cursor-default"
                style={glassCard}
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
