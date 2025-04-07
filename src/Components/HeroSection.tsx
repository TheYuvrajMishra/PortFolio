import { Sparkles, Code2, Paintbrush2, Mail,PenTool, Laptop2, Rocket } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 md:px-16 py-20 bg-gradient-to-br from-black/0 via-gray-900/20 to-black/0 relative overflow-hidden"
      data-aos="fade-up"
    >
      {/* Left Content */}
      <div className="relative z-10 flex-1 space-y-8 text-center md:text-left titles">
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-snug">
            <span className="text-yellow-400 inline-flex items-center gap-2">
              <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 animate-bounce" />
              Hello, I’m Yuvraj
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-white">
            I don’t just build websites —
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-pink-400 flex justify-center md:justify-start items-center gap-2">
            <Paintbrush2 className="w-5 h-5" />I create digital art.
          </h3>
        </div>

        <p className="text-gray-300 max-w-md text-sm sm:text-base mx-auto md:mx-0">
          A self-taught designer & developer from{" "}
          <span className="text-blue-400">Kolkata, India</span>. Passionate
          about building stunning, fast websites with a soul.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full max-w-md mx-auto md:mx-0 justify-center md:justify-start">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-dashed border-grey-400/20 text-sm font-semibold bg-transparent text-white rounded-full hover:bg-yellow-300  hover:text-black transition-all duration-300 w-full sm:w-auto"
          >
            <Mail className="w-4 h-4" />
            Let’s Connect
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-dashed border-grey-400/20 text-sm font-semibold bg-white text-black rounded-full hover:bg-transparent  hover:text-white transition-all duration-300 w-full sm:w-auto"
          >
            <Code2 className="w-4 h-4" />
            View Projects
          </a>
        </div>
      </div>

      <div className="relative z-10 flex-1 flex justify-center md:justify-end mb-10 md:mb-0 orbits">
      {/* Orbit Container */}
      <div className="relative w-72 h-72 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-yellow-400/5 border border-yellow-400/30 backdrop-blur-md flex items-center justify-center md:m-20 shadow-lg shadow-yellow-500/10 overflow-visible">

        {/* Center Glow */}
        <div className="absolute w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-yellow-400 blur-2xl opacity-70 z-0" />

        {/* Center Text */}
        <div className="text-white text-center z-10 px-2">
          <div className="text-lg sm:text-xl md:text-2xl font-bold">Creative Orbit</div>
          <div className="text-[10px] sm:text-xs text-gray-300">Design • Code • Magic</div>
        </div>

        {/* Orbit Icons */}
        <div className="absolute w-full h-full top-0 left-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 orbit orbit1">
            <Sparkles className="text-yellow-300 w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="absolute top-1/2 left-1/2 orbit orbit2">
            <Code2 className="text-pink-400 w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="absolute top-1/2 left-1/2 orbit orbit3">
            <Paintbrush2 className="text-blue-400 w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="absolute top-1/2 left-1/2 orbit orbit4">
            <PenTool className="text-green-400 w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="absolute top-1/2 left-1/2 orbit orbit5">
            <Laptop2 className="text-purple-400 w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="absolute top-1/2 left-1/2 orbit orbit6">
            <Rocket className="text-red-400 w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>
      </div>

      {/* Orbit Animations Style */}
      <style>{`
  .orbit {
    position: absolute;
    top: 50%;
    left: 50%;
    animation: orbit-rotate 6s linear infinite;
    transform-origin: center;
  }

  .orbit1 { transform: rotate(0deg) translateX(110px) rotate(-0deg); animation-delay: 0s; }
  .orbit2 { transform: rotate(60deg) translateX(110px) rotate(-60deg); animation-delay: 0.4s; }
  .orbit3 { transform: rotate(120deg) translateX(110px) rotate(-120deg); animation-delay: 0.8s; }
  .orbit4 { transform: rotate(180deg) translateX(110px) rotate(-180deg); animation-delay: 1.2s; }
  .orbit5 { transform: rotate(240deg) translateX(110px) rotate(-240deg); animation-delay: 1.6s; }
  .orbit6 { transform: rotate(300deg) translateX(110px) rotate(-300deg); animation-delay: 2s; }

  @keyframes orbit-rotate {
    0%   { transform: rotate(0deg) translateX(110px) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(110px) rotate(-360deg); }
  }

  @media (max-width: 640px) {
    .orbits{
    display:none
    }
    .titles{
    margin-top:70px;
    }
  }
`}</style>


    </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
    </section>
  );
}
