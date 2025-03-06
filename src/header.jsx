import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="bg-gradient-to-r from-blue-800 via-blue-700 to-teal-600 text-white p-4 shadow-lg sticky top-0 z-50"
      initial={{ opacity: 0, y: -50 }} // Fade-in and slide down effect
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className="container mx-auto flex justify-between items-center">
        {/* Animated Title */}
        <motion.h1
          className="text-2xl font-bold tracking-wide hover:text-teal-200 transition-all cursor-pointer"
          whileHover={{ scale: 1.1 }} // Slightly enlarges on hover
          transition={{ type: "spring", stiffness: 300 }}
        >
          Mohd Abdullah Siddiqui's Portfolio
        </motion.h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {["About", "Skills", "Projects"].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }} // Staggered fade-in animation
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }} // Adds a slight delay for each item
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-teal-300 transition-all text-lg"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
