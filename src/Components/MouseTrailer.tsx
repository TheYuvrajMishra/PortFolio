import { useEffect, useRef } from "react";

export default function MouseTrailer() {
  const trailerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile || !trailerRef.current) return;

    let mouseX = 0;
    let mouseY = 0;
    let trailerX = 0;
    let trailerY = 0;
    let isVisible = false;

    const showTrailer = () => {
      if (trailerRef.current && !isVisible) {
        trailerRef.current.style.opacity = "1";
        trailerRef.current.style.transform = `translate(${trailerX - 10}px, ${trailerY - 10}px) scale(1)`;
        isVisible = true;
      }
    };

    const hideTrailer = () => {
      if (trailerRef.current) {
        trailerRef.current.style.opacity = "0";
        trailerRef.current.style.transform = `scale(0)`;
        isVisible = false;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      showTrailer();
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
    document.addEventListener("mouseleave", hideTrailer);
    document.addEventListener("mouseenter", showTrailer);

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", hideTrailer);
      document.removeEventListener("mouseenter", showTrailer);
    };
  }, []);

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
