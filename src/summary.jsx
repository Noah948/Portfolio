import { motion } from "framer-motion";
import profileImage from "./assets/image.png";

const Summary = () => {
  return (
    <motion.section
      id="about"
      className="container mx-auto my-12 p-6 bg-gradient-to-br from-blue-50 via-white to-teal-50 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Heading Animation */}
      <motion.h2
        className="text-3xl font-bold mb-6 text-center text-blue-800"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        About
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Profile Image Animation */}
        <motion.img
          src={profileImage}
          alt="Profile"
          className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full mb-6 md:mb-0 md:mr-8 shadow-md"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Text Animation */}
        <motion.div
          className="text-gray-700 text-lg leading-relaxed text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
            Hello! I am{" "}
            <span className="text-blue-800 font-semibold">
              Mohd Abdullah Siddiqui
            </span>
            , A passionate software developer with strong problem-solving skills and an efficient approach to task management. Adept at strategically dividing workloads to ensure high-quality, timely delivery. With an adaptable mindset, I develop innovative solutions while staying up-to-date with industry trends in both technology and gaming.
          </p>

          {/* Tagline */}
          <p className="mt-4 text-blue-700 font-semibold text-lg">
            MERN Stack Developer | Exploring Machine Learning with Python |
            Passionate About Scalable Web Solutions & AI Integration
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Summary;
