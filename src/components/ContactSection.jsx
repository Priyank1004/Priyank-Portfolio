import FadeUp from "./FadeUp";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 relative z-20"
      style={{ background: "rgba(22,27,34,0.3)", borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <FadeUp className="max-w-3xl mx-auto px-6 md:px-12 text-center">
        <span className="text-xs font-semibold tracking-[0.1em] uppercase text-[#d0bcff] mb-4 block">What's Next?</span>
        <h2
          className="text-[48px] md:text-[64px] font-bold text-white mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.04em" }}
        >
          Get In Touch
        </h2>
        <p className="text-[18px] leading-relaxed text-[#94A3B8] mb-10">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a
          href="mailto:hello@example.com"
          className="inline-block px-8 py-4 rounded-full text-white font-semibold tracking-widest uppercase text-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(77,142,255,0.4)]"
          style={{ background: "linear-gradient(135deg,#4d8eff 0%,#571bc1 100%)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          Say Hello
        </a>
      </FadeUp>
    </section>
  );
}
