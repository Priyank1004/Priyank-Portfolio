import { glassCard } from "../styles/sharedStyles";
import FadeUp from "./FadeUp";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="absolute bottom-0 w-full h-48 pointer-events-none z-10" style={{ background: "linear-gradient(to top,#0f131d,transparent)" }} />

      <div className="relative z-20 max-w-[1200px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <FadeUp>
          <div className="flex flex-col space-y-6">
            <div>
              <span
                className="text-[#4edea3] text-xs font-semibold tracking-[0.1em] uppercase mb-4 block"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Portfolio 2026
              </span>
              <h1
                className="text-[56px] md:text-[80px] font-bold text-white mb-2 leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.04em" }}
              >
                Hi, I'm <br />
                <span
                  style={{
                    background: "linear-gradient(to right,#4d8eff,#d0bcff)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Priyank Patel
                </span>
              </h1>
              <h2
                className="text-[32px] text-[#94A3B8] font-semibold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Web Developer • Front-End • WordPress
              </h2>
            </div>

            <p className="text-[18px] leading-relaxed text-[#94A3B8] max-w-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
              Crafting high-performance digital experiences. 4+ years of expertise in building scalable applications with React, JavaScript, Tailwind CSS, Node.js, and WordPress.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full text-white text-xs font-semibold tracking-widest uppercase flex items-center gap-2 transition-all hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg,#4d8eff 0%,#571bc1 100%)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                View Projects
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full text-white text-xs font-semibold tracking-widest uppercase transition-all hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                Contact Me
              </a>
            </div>

            <div className="flex items-center space-x-6 pt-8 text-[#94A3B8]">
              <a href="#" className="hover:text-[#4edea3] transition-colors"><span className="material-symbols-outlined text-[24px]">code</span></a>
              <a href="#" className="hover:text-[#adc6ff] transition-colors"><span className="material-symbols-outlined text-[24px]">link</span></a>
              <a href="#" className="hover:text-[#d0bcff] transition-colors"><span className="material-symbols-outlined text-[24px]">mail</span></a>
            </div>
          </div>
        </FadeUp>

        {/* Right floating graphic */}
        <FadeUp delay={0.2} className="hidden lg:flex justify-center items-center relative">
          <div className="relative w-full aspect-square max-w-[500px]">
            <div className="absolute inset-0 bg-[#adc6ff]/10 rounded-full blur-3xl mix-blend-screen animate-pulse" />
            <div className="absolute inset-10 bg-[#d0bcff]/10 rounded-full blur-2xl mix-blend-screen" />
            <div
              className="absolute top-1/4 -left-4 w-32 h-32 flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-500"
              style={glassCard}
            >
              <span className="material-symbols-outlined text-5xl text-[#adc6ff]">javascript</span>
            </div>
            <div
              className="absolute bottom-1/4 -right-4 w-40 h-40 flex items-center justify-center -rotate-6 hover:rotate-0 transition-transform duration-500 z-20"
              style={glassCard}
            >
              <span className="material-symbols-outlined text-6xl text-[#4edea3]">data_object</span>
            </div>
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 flex items-center justify-center z-10"
              style={{ ...glassCard, boxShadow: "0 0 40px rgba(77,142,255,0.2)" }}
            >
              <span
                className="material-symbols-outlined text-7xl"
                style={{ background: "linear-gradient(to right,#4d8eff,#d0bcff)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}
              >
                developer_mode
              </span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
