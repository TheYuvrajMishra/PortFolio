// App.tsx
import { useEffect, useRef } from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Gallery from "./Components/Gallery";
import TextMarquee from "./Components/TextMarquee";
import About from "./Components 2/About";
import Skill from "./Components 2/Skill";
import Projects from "./Components 2/Projects";
import Contact from "./Components 2/Contact";
import Footer from "./Components 2/Footer";
import MouseTrailer from "./Components/MouseTrailer";

export default function App(){
  const smokeyRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;

      if (smokeyRef.current) {
        smokeyRef.current.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
      }
      if (gridRef.current) {
        gridRef.current.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed w-full h-screen overflow-x-hidden bg-black">
      {/* Grid background */}
      <div
        ref={gridRef}
        className="fixed inset-0 bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:40px_40px] transition-transform duration-100"
        />
      {/* Smokey layer
      <div
      ref={smokeyRef}
      className="absolute inset-0 bg-[url('/smoke.png')] bg-cover opacity-20 blur-xl transition-transform duration-100"
      /> */}

      {/* Foreground content (Navbar + Hero Text) */}
      <div className="relative z-10 h-full w-full">
      <MouseTrailer/>
        <Navbar />
        <HeroSection />
        <TextMarquee/>
        <Gallery/>
        <About/>
        <Skill/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}
