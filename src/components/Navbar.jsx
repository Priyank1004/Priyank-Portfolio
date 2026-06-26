import { glassNav } from "../styles/sharedStyles";
import { NAV_LINKS, NAV_LABELS } from "../data/navData";

export default function Navbar({ mobileOpen, setMobileOpen }) {
  return (
    <nav style={glassNav} className="fixed top-0 w-full z-50 h-16 transition-all duration-300">
      <div className="flex justify-between items-center h-full px-6 md:px-12 max-w-[1200px] mx-auto">
        <a
          href="#"
          className="text-[32px] font-bold tracking-tighter text-white hover:text-[#adc6ff] transition-colors"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          P.Patel
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="text-[#94A3B8] hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-300 text-sm"
            >
              {NAV_LABELS[link]}
            </a>
          ))}
        </div>

        <a
          href="#"
          className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-full text-white text-xs font-semibold tracking-widest uppercase active:scale-95"
          style={{ background: "linear-gradient(135deg,#4d8eff 0%,#571bc1 100%)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          Resume
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden text-[#94A3B8] hover:text-white p-2"
        >
          <span className="material-symbols-outlined">{mobileOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 pb-4 flex flex-col space-y-2"
          style={{ background: "rgba(22,27,34,0.98)" }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setMobileOpen(false)}
              className="text-[#94A3B8] hover:text-white px-3 py-2 rounded-lg transition-all"
            >
              {NAV_LABELS[link]}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
