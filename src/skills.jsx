import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

const skills = [
  { name: "HTML", icon: "fa-brands fa-html5", color: "#E34F26",
    description: "HyperText Markup Language — the standard language for structuring and presenting content on the web." },
  { name: "CSS", icon: "fa-brands fa-css3-alt", color: "#1572B6",
    description: "Cascading Style Sheets — controls appearance, layout, and responsive design of web pages." },
  { name: "JavaScript", icon: "fa-brands fa-js", color: "#F7DF1E",
    description: "A high-level language powering interactivity, async flows, and application logic in web apps." },
  { name: "React", icon: "fa-brands fa-react", color: "#61DBFB",
    description: "Component-based library for building fast, maintainable UIs with hooks and state." },
  { name: "Node.js", icon: "fa-brands fa-node", color: "#8CC84B",
    description: "JavaScript runtime for building scalable server-side applications and tools." },
  { name: "Python", icon: "fa-brands fa-python", color: "#3776AB",
    description: "Versatile language used for backend, automation, data science, and ML/AI." },
  { name: "Bootstrap", icon: "fa-brands fa-bootstrap", color: "#563D7C",
    description: "Component library and grid system for rapid responsive UI development." },
  { name: "Java", icon: "fa-brands fa-java", color: "#007396",
    description: "Object-oriented language used in enterprise systems and Android apps." },
  { name: "MongoDB", icon: "fa-solid fa-leaf", color: "#47A248",
    description: "NoSQL document database designed for flexibility, horizontal scaling, and rapid iteration." },
  { name: "Git", icon: "fa-brands fa-git-alt", color: "#F05032",
    description: "Distributed version control system for tracking changes and collaborating on code." },
  { name: "GitHub", icon: "fa-brands fa-github", color: "#ffffff",
    description: "Platform for hosting Git repos, code review, CI/CD and collaboration." },
  { name: "Express.js", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", isDevicon: true,
    description: "Minimal Node.js framework for building APIs and server-side applications." },
  { name: "SQL", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", isDevicon: true,
    description: "Structured Query Language — managing, querying and joining relational data." },
  { name: "Tailwind CSS", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", isDevicon: true,
    description: "Utility-first CSS framework for composing modern, responsive UIs quickly." }
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setActiveSkill(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <motion.section
      id="skills"
      className="py-12 bg-gradient-to-r from-[#0d0d0d] via-[#111] to-[#1a1a1a] rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-bold text-center text-gray-100 mb-8"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45 }}
      >
        Skills
      </motion.h2>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {skills.map((skill) => (
          <motion.button
            key={skill.name}
            onClick={() => setActiveSkill(skill)}
            className="relative p-5 bg-[#121212] rounded-2xl border border-transparent hover:border-[var(--accent,#34d399)]/20
                       shadow-md hover:shadow-lg transition-all duration-200 flex flex-col items-center justify-center h-40 focus:outline-none"
            whileHover={{ y: -4 }}
            aria-label={`Open ${skill.name} details`}
          >
            {/* icon */}
            <div className="flex items-center justify-center mb-3">
              {skill.isDevicon ? (
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#1e1e1e]">
                  <img src={skill.iconSrc} alt={skill.name} className="w-10 h-10" />
                </div>
              ) : (
                <span className="text-4xl" style={{ color: skill.color }}>
                  <i className={skill.icon}></i>
                </span>
              )}
            </div>

            {/* name */}
            <div className="text-center">
              <p className="text-gray-200 font-semibold">{skill.name}</p>
              <p className="text-xs text-gray-500 mt-1">Click to open</p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Centered modal */}
      <AnimatePresence>
        {activeSkill && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setActiveSkill(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* modal card */}
            <motion.div
              className="relative w-[min(92vw,720px)] mx-4 bg-[#0b0b0b] border border-gray-800 rounded-2xl p-6 shadow-2xl"
              initial={{ scale: 0.96, y: 14, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 14, opacity: 0 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveSkill(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 p-2 rounded-md transition"
                aria-label="Close details"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              <div className="flex items-center gap-4">
                {/* modal icon */}
                <div>
                  {activeSkill.isDevicon ? (
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#141414]">
                      <img src={activeSkill.iconSrc} alt={activeSkill.name} className="w-9 h-9" />
                    </div>
                  ) : (
                    <span className="text-4xl" style={{ color: activeSkill.color }}>
                      <i className={activeSkill.icon}></i>
                    </span>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-100">{activeSkill.name}</h3>
                  <p className="mt-3 text-gray-300 leading-relaxed">{activeSkill.description}</p>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setActiveSkill(null)}
                  className="px-4 py-2 rounded-xl bg-[var(--accent,#34d399)] text-black font-semibold hover:brightness-95 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Skills;
