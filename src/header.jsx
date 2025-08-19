import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="bg-[#0d0d0d] border-b border-gray-800 text-gray-100 p-4 shadow-lg sticky top-0 z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className="w-full flex justify-between items-center px-4 md:px-12">
        {/* Logo / Title */}
        <motion.h1
          className="text-xl md:text-2xl font-semibold tracking-wide cursor-pointer hover:text-[var(--accent)] transition-colors"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Mohd Abdullah Siddiqui
        </motion.h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-gray-400">
          {["About", "Skills", "Projects"].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="relative text-sm md:text-base hover:text-[var(--accent)] transition-colors after:block after:h-[2px] after:bg-[var(--accent)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
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
