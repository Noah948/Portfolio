import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

const skills = [
  { name: "HTML", icon: "fa-brands fa-html5", color: "#E34F26" },
  { name: "CSS", icon: "fa-brands fa-css3-alt", color: "#1572B6" },
  { name: "JavaScript", icon: "fa-brands fa-js", color: "#F7DF1E" },
  { name: "React", icon: "fa-brands fa-react", color: "#61DBFB" },
  { name: "Node.js", icon: "fa-brands fa-node", color: "#8CC84B" },
  { name: "Python", icon: "fa-brands fa-python", color: "#3776AB" },
  { name: "Bootstrap", icon: "fa-brands fa-bootstrap", color: "#563D7C" },
  { name: "Java", icon: "fa-brands fa-java", color: "#007396" },
  { name: "MongoDB", icon: "fa-solid fa-leaf", color: "#47A248" },
  { name: "Git", icon: "fa-brands fa-git-alt", color: "#F05032" },
  { name: "GitHub", icon: "fa-brands fa-github", color: "#181717" },
  { 
    name: "Express.js", 
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", 
    color: "#404D59", 
    isDevicon: true 
  },
  {
    name: "SQL",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "#4479A1",
    isDevicon: true
  },
  {
    name: "Tailwind CSS",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    color: "9FAEFF",
    isDevicon: true
  }
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="bg-gradient-to-r from-teal-50 via-white to-blue-50 py-12"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.h2
        className="text-3xl font-bold text-center text-blue-800 mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="flex justify-center flex-wrap gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center text-center group"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{ scale: 1.1 }}
          >
            {skill.isDevicon ? (
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full"
                style={{ backgroundColor: skill.color }}
              >
                <img
                  src={skill.iconSrc}
                  alt={skill.name}
                  className="w-10 h-10"
                />
              </div>
            ) : (
              <span className="text-5xl transition-transform duration-300" style={{ color: skill.color }}>
                <i className={skill.icon}></i>
              </span>
            )}
            <p className="mt-4 text-gray-800 group-hover:text-blue-800 font-semibold transition-all">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
