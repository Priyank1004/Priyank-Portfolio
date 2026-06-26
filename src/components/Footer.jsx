export default function Footer() {
  const socialData = [
    {
      name: "GitHub",
      url: "https://github.com/Priyank1004",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/priyank-patel-750132116",
    },
    {
      name: "Twitter",
      url: "",
    },
  ];

  return (
    <footer
      className="w-full py-6 relative z-20"
      style={{
        background: "#0a0e18",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center px-6 max-w-[1200px] mx-auto gap-4">
        <div
          className="text-[32px] font-bold text-[#adc6ff]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          P.Patel
        </div>

        <div className="text-[#94A3B8] text-sm text-center">
          © 2026 Priyank Patel. Crafted with precision.
        </div>

        <div className="flex items-center space-x-6">
          {socialData.map((item) =>
            item.url ? (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94A3B8] hover:text-[#adc6ff] transition-colors text-sm"
              >
                {item.name}
              </a>
            ) : null
          )}
        </div>
      </div>
    </footer>
  );
}