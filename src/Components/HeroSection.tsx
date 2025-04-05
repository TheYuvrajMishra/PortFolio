export default function HeroSection() {
  return (
    <div id="home">
      {/* Hero Section */}
      <section
        className="h-screen flex flex-col justify-center items-center text-center px-4 pt-24 bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/random/1600x900?technology')", // Change this to your custom background if needed
        }}
        id="home"
        data-aos="fade-up"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Hero Content */}
        <div className="relative z-10 space-y-6">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            I don’t just build websites —
          </h2>
          <h3 className="text-yellow-400 text-3xl md:text-5xl font-extrabold drop-shadow-lg">
            I create digital art.
          </h3>
          <p className="mt-6 max-w-xl text-gray-300 text-sm md:text-lg mx-auto">
            Self-taught designer & developer from Kolkata, India. Passionate
            about building beautiful, performant websites.
          </p>

          {/* Call-to-action Button */}
          <a
            href="#contact"
            className="mt-10 px-10 py-4 bg-transparent border border-gray-500 text-white font-semibold rounded-full hover:border-gray-600 hover:bg-amber-50 hover:text-black transition-all duration-300 ease-in-out z-10"
          >
            {" "}
            Let's Connect{" "}
          </a>
        </div>

        {/* Parallax Effect */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black"></div>
      </section>
    </div>
  );
}
