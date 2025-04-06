export default function Skill() {
  type SkillCategory =
    | "Frontend"
    | "Backend / Language"
    | "Styling / UI"
    | "Tools & Platforms";

  const skills: Record<SkillCategory, string[]> = {
    Frontend: ["ReactJS", "TypeScript", "Next.js", "Framer Motion"],
    "Backend / Language": ["Python", "JavaScript", "Node.js", "MongoDB", "MySQL"],
    "Styling / UI": ["Tailwind CSS", "Bootstrap", "Material-UI", "Figma", "Shadcn/UI"],
    "Tools & Platforms": ["GitHub", "VS Code", "Firebase", "Netlify", "Vercel", "Linux / Ubuntu"],
  };

  const icons: Record<SkillCategory, string> = {
    Frontend: "🧠",
    "Backend / Language": "💻",
    "Styling / UI": "🎨",
    "Tools & Platforms": "🛠️",
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 md:px-10 bg-black/5"
      data-aos="fade-up"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-16  tracking-wide">
        Technical Skills
      </h2>

      <div className="space-y-20">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="text-yellow-400 text-2xl">{icons[category as SkillCategory]}</span>
              {category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
              {skillList.map((skill) => (
                <div
                  key={skill}
                  className="py-4 px-0 border-dashed bg-white/5 border border-gray-700 rounded-2xl text-white shadow-sm hover:shadow-yellow-400/40 hover:border-yellow-400 hover:bg-yellow-500/10 transition hover:-translate-1 duration-300 ease-in-out backdrop-blur-md cursor-pointer text-sm md:text-base font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
