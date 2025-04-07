import { useEffect, useRef, useState } from "react";

export default function MouseTrailer() {
  const trailerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    let mouseX = 0;
    let mouseY = 0;
    let trailerX = 0;
    let trailerY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Show trailer on first mouse move (if not already visible)
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      if (trailerRef.current) {
        trailerRef.current.style.transform = ` scale(0)`;
        trailerRef.current.style.opacity = "0";
      }
    };

    const handleMouseEnter = () => {
      if (trailerRef.current) {
        trailerRef.current.style.opacity = "1";
        trailerRef.current.style.transform = `translate(${trailerX - 10}px, ${trailerY - 10}px) scale(1)`;
      }
    };

    const animate = () => {
      trailerX += (mouseX - trailerX) * 0.15;
      trailerY += (mouseY - trailerY) * 0.15;

      const dx = mouseX - trailerX;
      const dy = mouseY - trailerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const scale = 1 + Math.min(distance / 100, 0.5);

      if (trailerRef.current) {
        trailerRef.current.style.transform = `translate(${trailerX - 10}px, ${trailerY - 10}px) scale(${scale})`;
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [visible]);

  if (window.innerWidth <= 768) return null;

  return (
    <div
      ref={trailerRef}
      className="fixed z-[9999] top-0 left-0 w-5 h-5 rounded-full bg-white mix-blend-difference pointer-events-none hidden md:block"
      style={{
        opacity: 0,
        transform: "translate(-50%, -50%) scale(0)",
        transition: "transform 0.1s ease, opacity 0.1s ease",
      }}
    />
  );
}
