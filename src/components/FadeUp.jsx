import { useFadeUp } from "../hooks/useFadeUp";

export default function FadeUp({ children, delay = 0, className = "" }) {
  const { ref, visible } = useFadeUp();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}
