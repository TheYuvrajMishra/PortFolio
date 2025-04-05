export default function HeroSection() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-[100vh] flex flex-col justify-center items-center text-center px-4 pt-24 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://source.unsplash.com/random/1600x900?technology')", // You can change this to your custom background
        }}
        id="home"
        data-aos="fade-up"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <h2 className="text-4xl md:text-6xl font-bold text-white z-10 mb-4">
          I don’t just build websites —
        </h2>
        <h3 className="text-yellow-400 text-3xl md:text-5xl font-bold animate-pulse z-10">
          I create digital art.
        </h3>
        <p className="mt-6 max-w-xl text-gray-300 text-sm md:text-lg z-10">
          Self-taught designer & developer from Kolkata, India. Passionate about building beautiful, performant websites.
        </p>
        <a
          href="#contact"
          className="mt-8 px-8 py-4 bg-yellow-400 text-black font-semibold rounded-full hover:scale-110 transition-transform duration-300 z-10"
        >
          Let's Connect
        </a>
      </section>
    </div>
  );
}
