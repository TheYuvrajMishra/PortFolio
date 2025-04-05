export default function Contact() {
  return (
    <div id="contact">
      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 md:px-6 bg-gradient-to-b from-transparent to-gray-900/50 text-center"
        data-aos="fade-up"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6 md:mb-8 tracking-wide uppercase">
          Let’s Connect
        </h2>

        {/* Subheading */}
        <p className="text-gray-300 mb-8 text-lg md:text-xl font-light">
          Shoot me a message or connect on social media.
        </p>
        
        {/* Email Button */}
        <a
          href="mailto:yuvraj17mishra11@email.com"
          className="inline-block px-10 py-5 mb-8 text-white border border-white/20 font-semibold text-lg rounded-full shadow-lg transform transition-all duration-300 hover:bg-yellow-400 hover:text-black"
        >
          📧 yuvraj17mishra11@email.com
        </a>
        
        {/* Social Media Links */}
        <div className="mt-4 md:mt-6 flex justify-center gap-10 text-white text-lg md:text-xl">
          <a
            href="https://www.linkedin.com/in/the-yuvraj-mishra/"
            className="transform hover:text-yellow-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/TheYuvrajMishra"
            className="transform hover:text-yellow-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://instagram.com/_.ultraviolent._/"
            className="transform hover:text-yellow-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </section>
    </div>
  );
}
