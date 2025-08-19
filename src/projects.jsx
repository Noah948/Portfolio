import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    name: "Odyssey",
    description:
      "A traveler-based website where users can add hotels they’ve visited and share reviews. Others can explore hotels and reviews to make informed travel decisions. Built with HTML, CSS, JavaScript, Express (MVC), Bootstrap, Font Awesome, and MongoDB.",
    link: "https://odyssey-htgn.onrender.com/listings",
    icon: "https://res.cloudinary.com/da0lsiq9d/image/upload/v1735289441/sunset_bf9a7a.png",
  },
  {
    name:"Quiz Time",
    description: "An interactive multiple-choice quiz application that dynamically presents 10 questions from different categories. Users can select answers, track their progress in real-time, and receive a detailed score summary at the end. Designed with HTML, CSS, and JavaScript, the app provides an engaging and responsive user experience.",
    link:"https://stunning-nasturtium-4f9818.netlify.app/",
    icon:"https://res.cloudinary.com/da0lsiq9d/image/upload/v1755598644/icon2_jeqlsq.png"
  },
  {
    name: "Weather App",
    description:
      "A responsive weather application that integrates the OpenWeather API to display real-time weather details like temperature, humidity, wind speed, and conditions. Designed with HTML, CSS, JavaScript, and Bootstrap.",
    link: "https://noah948.github.io/Weather-App/",
    icon: "https://res.cloudinary.com/da0lsiq9d/image/upload/v1755593871/weather-2021-12-07_vne1xz.avif",
  },
  {
    name: "Student Management System",
    description:
      "A Django-based web app that manages student records including enrollment, grades, attendance, and personal details. Provides an intuitive interface to streamline administrative tasks for schools and colleges. Built with Django, HTML, and CSS.",
    link: "https://github.com/Noah948/Student-Management-System",
    icon: "https://res.cloudinary.com/da0lsiq9d/image/upload/v1755594116/Pngtree_vector_male_student_icon_4252845_ysufv9.png",
  },
  {
    name: "Gemino",
    description:
      "An AI-powered chatbot built with the Google Gemini API. Features smooth animations, code block formatting for replies, and a user-friendly interface to enhance the chat experience. Built with React, Vite, and Bulma CSS.",
    link: "https://gemino-swart.vercel.app/",
    icon: "https://res.cloudinary.com/da0lsiq9d/image/upload/v1755594466/ChatGPT_Image_Aug_19_2025_02_37_06_PM_rzov93.png",
  },
  {
    name: "Simon-Say Game",
    description:
      "A fun memory-based game where players repeat an increasing sequence of colors and sounds. Built using HTML, CSS, and JavaScript to provide an interactive gaming experience.",
    link: "https://noah948.github.io/Simon-Say-Game/",
    icon: "https://res.cloudinary.com/da0lsiq9d/image/upload/v1755594734/ChatGPT_Image_Aug_19_2025_02_42_03_PM_k4bnwf.png",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <motion.section
      id="projects"
      className="container mx-auto my-16 p-8 bg-gradient-to-br from-[#0d0d0d] via-[#111] to-[#1a1a1a] rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <motion.h2
        className="text-3xl font-semibold text-center text-gray-100 mb-10"
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        Projects
      </motion.h2>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            className="relative bg-[#121212] border border-gray-800 rounded-2xl p-8 flex flex-col items-center justify-between text-center transition-all"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12, duration: 0.55 }}
            whileHover={{ y: -6 }}
          >
            {/* Project icon */}
            <img
              src={project.icon}
              alt={project.name}
              className="w-20 h-20 object-contain mb-4"
              loading="lazy"
            />

            {/* Project name */}
            <h3 className="text-2xl font-semibold text-gray-100 mb-6 tracking-tight">
              {project.name}
            </h3>

            {/* Buttons row */}
            <div className="flex gap-4 w-full justify-center">
              <button
                onClick={() => setSelected(project)}
                className="px-5 py-2 rounded-lg bg-transparent border border-gray-700 text-gray-200 hover:bg-[#0e0e0e] hover:border-[var(--accent,#34d399)]/40 transition"
                aria-label={`Open details for ${project.name}`}
              >
                Details
              </button>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg bg-[var(--accent,#34d399)] text-black font-semibold hover:brightness-95 transition"
                >
                  Visit
                </a>
              ) : (
                <button
                  disabled
                  className="px-5 py-2 rounded-lg bg-gray-800 text-gray-500 cursor-not-allowed"
                  aria-hidden
                >
                  Visit
                </button>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/65 backdrop-blur-sm"
              onClick={() => setSelected(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${selected.name} details`}
              className="relative w-[min(92vw,640px)] mx-4 bg-[#0b0b0b] border border-gray-800 rounded-2xl p-6 shadow-2xl"
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 18, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 p-2 rounded"
                aria-label="Close details"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              <div className="flex items-start gap-4">
                {/* Show project icon in modal */}
                <img
                  src={selected.icon}
                  alt={selected.name}
                  className="w-16 h-16 object-contain"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-100">{selected.name}</h3>
                  <p className="mt-3 text-gray-300 leading-relaxed">
                    {selected.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                {selected.link && (
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[var(--accent,#34d399)] text-black font-semibold hover:brightness-95 transition"
                  >
                    Visit
                  </a>
                )}
                <button
                  onClick={() => setSelected(null)}
                  className="px-4 py-2 rounded-lg border border-gray-700 text-gray-200 hover:bg-gray-800 transition"
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

export default Projects;
