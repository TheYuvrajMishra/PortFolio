import { FaDesktop, FaFileExport, FaKeyboard, FaRegWindowMaximize, FaBorderAll, FaGithub } from 'react-icons/fa';

export default function Projects() {
  const projectList = [
    {
      title: "ZyrixCraft",
      desc: "Impressive UI/UX and a futuristic design built with React and Tailwind.",
      icon: <FaFileExport size={24} className="text-yellow-400" />,
      link: "https://TheYuvrajMishra.github.io/ZyrixCraft", 
    },
    {
      title: "SmartInterestAI",
      desc: "Futuristic UI/UX and intuitive design built with React and Tailwind.",
      icon: <FaDesktop size={24} className="text-yellow-400" />,
      link: "https://meharjot0710.github.io/SmartInterest-AI-frontend",
    },
    {
      title: "User-Dashboard",
      desc: "A user-friendly dashboard with a sleek UI and advanced features.",
      icon: <FaKeyboard size={24} className="text-yellow-400" />,
      link: "https://github.com/TheYuvrajMishra/UserDashboard",
    },
    {
      title: "Advanced Time Manager With AI",
      desc: "Notion like time management tool with a sleek UI and AI integration.",
      icon: <FaRegWindowMaximize size={24} className="text-yellow-400" />,
      link: "https://github.com/TheYuvrajMishra/time-manager",
    },
    {
      title: "Camera Music (Python)",
      desc: "A Python project that uses OpenCV to capture images and play music.",
      icon: <FaBorderAll size={24} className="text-yellow-400" />,
      link: "https://github.com/TheYuvrajMishra/music", 
    },
    {
      title: "More ",
      desc: "Visit My Github Profile",
      icon: <FaGithub size={24} className="text-yellow-400" />,
      link: "https://github.com/TheYuvrajMishra", 
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
