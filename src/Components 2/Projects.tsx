import { FaDesktop, FaFileExport, FaKeyboard, FaRegWindowMaximize, FaBorderAll, FaGithub } from 'react-icons/fa';

export default function Projects() {
  const projectList = [
    {
      title: "SmartInterestAI",
      desc: "Futuristic UI/UX and intuitive design built with React and Tailwind.",
      icon: <FaDesktop size={24} className="text-yellow-400" />,
      link: "https://github.com/meharjot0710/SmartInterest-AI-frontend", // Replace with actual link
    },
    {
      title: "Monthly Compliance Report",
      desc: "Static UI for compliance reports – export-ready layout. (HTML)",
      icon: <FaFileExport size={24} className="text-yellow-400" />,
      link: "https://github.com/TheYuvrajMishra/Monthly-Compliance-Report", // Replace with actual link
    },
    {
      title: "Typing Faster",
      desc: "WPM tracker with sleek animations and a minimalist interface.",
      icon: <FaKeyboard size={24} className="text-yellow-400" />,
      link: "https://github.com/TheYuvrajMishra/Typing-Faster", // Replace with actual link
    },
    {
      title: "Finhub Landing Page",
      desc: "Modern landing page using black/yellow theme and glassmorphism.",
      icon: <FaRegWindowMaximize size={24} className="text-yellow-400" />,
      link: "https://github.com/TheYuvrajMishra/Finhub", // Replace with actual link
    },
    {
      title: "Pattern Background",
      desc: "Reusable HTML/CSS background design using gradients and shapes.",
      icon: <FaBorderAll size={24} className="text-yellow-400" />,
      link: "https://github.com/TheYuvrajMishra/Pattern-Background", // Replace with actual link
    },
    {
      title: "More ",
      desc: "Visit My Github Profile",
      icon: <FaGithub size={24} className="text-yellow-400" />,
      link: "https://github.com/TheYuvrajMishra", // Link to GitHub profile
    }
  ];

  return (
    <div id='projects'>
      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 md:px-6 bg-gradient-to-b from-gray-900/30 to-transparent"
        data-aos="fade-up"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6 md:mb-8">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {projectList.map(({ title, desc, icon, link }) => (
            <a
              key={title}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-dashed border-gray-700 p-4 md:p-6 rounded-lg transition duration-300 ease-in-out bg-transparent hover:backdrop-blur-lg hover:border-gray-500 hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-center mb-3">
                {icon}
                <h3 className="text-xl md:text-2xl font-semibold text-white ml-3">
                  {title}
                </h3>
              </div>
              <p className="text-gray-300 text-sm md:text-base">{desc}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
