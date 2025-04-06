
import { useEffect, useRef } from "react";

export default function MouseTrailer() {
  const trailerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let trailerX = 0;
    let trailerY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      trailerX += (mouseX - trailerX) * 0.1;
      trailerY += (mouseY - trailerY) * 0.1;

      if (trailerRef.current) {
        trailerRef.current.style.transform = `translate(${trailerX - 10}px, ${trailerY - 10}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate(); // start the loop

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={trailerRef}
      className="fixed z-[9999] top-0 left-0 w-5 h-5 rounded-full bg-yellow-400 mix-blend-difference pointer-events-none"
      style={{
        transition: "transform 0.1s linear",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
