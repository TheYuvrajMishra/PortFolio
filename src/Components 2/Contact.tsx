import { Mail, Linkedin, Github, Instagram } from "lucide-react";
export default function Contact() {
  return (
    <div id="contact">
      <section
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

        {/* Contact Form using Formspree */}
        <form
          action="https://formspree.io/f/xeoapekb"
          method="POST"
          className="max-w-xl mx-auto w-full flex flex-col gap-5 text-left text-white"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="px-5 py-3 rounded-md bg-gray-800/20 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="px-5 py-3 rounded-md bg-gray-800/20 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="px-5 py-3 rounded-md bg-gray-800/20 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <button
            type="submit"
            className="px-8 py-3 cursor-pointer text-white border border-dashed border-white/20 font-semibold text-lg shadow-lg transform transition-all duration-300 hover:bg-yellow-400/20 hover:border-dotted hover:border-yellow-400"
          >
            <Mail className="inline w-5 h-5 mr-2" />
            Send Message
          </button>
        </form>

        {/* Social Media Links with Icons */}
        <div className="mt-8 flex justify-center gap-6 text-white text-sm md:text-base">
  <a
    href="https://www.linkedin.com/in/the-yuvraj-mishra/"
    className="flex items-center gap-1.5 hover:text-yellow-400 transition-all"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin className="w-4 h-4" />
    LinkedIn
  </a>
  <a
    href="https://github.com/TheYuvrajMishra"
    className="flex items-center gap-1.5 hover:text-yellow-400 transition-all"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Github className="w-4 h-4" />
    GitHub
  </a>
  <a
    href="https://instagram.com/_.ultraviolent._/"
    className="flex items-center gap-1.5 hover:text-yellow-400 transition-all"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Instagram className="w-4 h-4" />
    Instagram
  </a>
</div>

      </section>
    </div>
  );
}
