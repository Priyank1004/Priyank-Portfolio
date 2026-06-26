import { glassCard } from "../styles/sharedStyles";
import { STATS } from "../data/statsData";
import FadeUp from "./FadeUp";
import image from '../images/image'

export default function AboutSection() {
  return (
    <section id="about" className="py-16 relative z-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait */}
          <FadeUp className="lg:col-span-5">
            <div className="relative overflow-hidden group" style={glassCard}>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#adc6ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img
                src={image.profileImage}
                alt="Priyank Patel Portrait"
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                style={{ borderRadius: "20px" }}
              />
            </div>
          </FadeUp>

          {/* Stats + bio */}
         <FadeUp delay={0.2} className="lg:col-span-7 flex flex-col space-y-8">
  <div>
    <h2
      className="text-[32px] md:text-[48px] font-bold text-white mb-4"
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        letterSpacing: "-0.02em",
      }}
    >
      Building Modern Web Experiences
    </h2>

    <p className="text-[18px] leading-relaxed text-[#94A3B8] text-justify">
      I'm a Web Developer with 4+ years of experience building responsive,
      high-performance websites and web applications. I specialize in
      ReactJS, WordPress, JavaScript, Tailwind CSS, and Node.js, with
      expertise in creating scalable digital solutions, integrating APIs,
      optimizing Core Web Vitals, and delivering seamless user experiences
      across desktop and mobile platforms. I enjoy solving complex problems,
      writing clean and maintainable code, and collaborating with teams to
      turn ideas into practical and impactful digital products.
    </p>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {STATS.map(({ value, label, color }) => (
      <div
        key={label}
        className="p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(77,142,255,0.2)]"
        style={glassCard}
      >
        <span
          className={`text-[48px] font-bold leading-none mb-1 ${color}`}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {value}
        </span>
        <span className="text-[12px] font-semibold tracking-[0.1em] text-[#94A3B8] uppercase">
          {label}
        </span>
      </div>
    ))}
  </div>
</FadeUp>
        </div>
      </div>
    </section>
  );
}
