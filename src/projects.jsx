import { motion } from "framer-motion";
const images = import.meta.glob("./assets/*.png", { eager: true });

const projects = [
  {
    name: "Quiz Time",
    image: images["./assets/quiz.png"].default,
    link: "https://stunning-nasturtium-4f9818.netlify.app/",
    description:
      "Developed an interactive multiple-choice quiz game using HTML, CSS, and JavaScript. The game dynamically presents 10 questions, tracks answers in real-time, and provides a detailed score summary, showcasing skills in web development, UI design, and JavaScript logic.",
  },
  {
    name: "Odyssey",
    image: images["./assets/odyssey.png"].default,
    link: "https://odyssey-htgn.onrender.com/listings",
    description:
      "Designed and developed a dynamic web application for travelers to share and review hotels and rental properties they have visited, helping others make informed decisions based on community feedback. Implemented features using HTML, CSS, JavaScript, and Express, adhering to the MVC pattern for organized and scalable development. Integrated Bootstrap for a responsive and visually appealing design, and used Font Awesome for icons to enhance the user interface. Leveraged MongoDB as the database to efficiently manage user data, property information, and reviews.",
  },
  {
    name: "Weather App",
    image: images["./assets/weather.png"].default,
    link: "https://github.com/Noah948/Weather-App",
    description:
      "Built a responsive weather app using HTML, CSS, JavaScript, and Bootstrap, integrating the OpenWeather API for real-time data. Users can search for any city to view current weather conditions like temperature, humidity, wind speed, and descriptions. The Bootstrap framework enhances design and ensures a seamless, user-friendly experience across devices.",
  },
  {
    name: "Simon Says Game",
    image: images["./assets/simon.png"].default,
    link: "https://noah948.github.io/Simon-Say-Game/",
    description:
      "Created a fun and interactive Simon Says game using HTML, CSS, and JavaScript. The game challenges players to remember and repeat an increasingly complex sequence of colors, testing memory and reflexes in an engaging way.",
  },
  {
    name: "Student Management System",
    image: images["./assets/sms.png"].default,
    description:
      "Developed using Django, HTML, and CSS, this application provides an intuitive interface for managing student records, including enrollment, grades, attendance, and personal details. It streamlines administrative tasks, enhances data organization, and improves overall efficiency in managing students within a school environment.",
  },
];


const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="container mx-auto my-12 p-6 bg-gradient-to-br from-blue-50 via-white to-teal-50 rounded-lg shadow-lg"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.h2
        className="text-3xl font-bold mb-6 text-center text-blue-800"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-container relative w-full h-80 block"
          >
            <div className="project-card">
              {/* Front (Image) */}
              <div className="project-card-face project-card-front">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Back (Project Name and Description) */}
              <div className="project-card-face project-card-back bg-gradient-to-r from-blue-800 via-blue-700 to-teal-600 flex flex-col justify-center items-center p-4 text-white text-center">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
