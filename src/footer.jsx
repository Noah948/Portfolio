import { motion } from "framer-motion";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => (
  <motion.footer
    className="bg-gradient-to-r from-blue-800 via-blue-700 to-teal-600 text-white text-center py-6"
    initial={{ opacity: 0, y: 50 }} // Slide-up effect from below
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    {/* Social Media Icons with Motion */}
    <div className="flex justify-center space-x-6 mb-4">
      {[
        { href: "https://www.linkedin.com/in/mohd-abdullah-siddiqui-49b504325/", icon: "fab fa-linkedin", label: "LinkedIn" },
        { href: "https://www.instagram.com/_mohammad_abdullah_siddiqui_/profilecard", icon: "fab fa-instagram", label: "Instagram" },
        { href: "https://www.facebook.com/mohammed.a.siddiqui.982", icon: "fab fa-facebook", label: "Facebook" },
        { href: "https://www.github.com/Noah948", icon: "fab fa-github", label: "GitHub" }
      ].map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-teal-300 transition-transform transform hover:scale-125"
          aria-label={social.label}
          whileHover={{ scale: 1.2, rotate: 10 }} // Hover animation
          whileTap={{ scale: 0.9 }} // Press animation
          transition={{ duration: 0.2 }}
        >
          <i className={`${social.icon} text-2xl`}></i>
        </motion.a>
      ))}
    </div>

    {/* Footer Text Animation */}
    <motion.p
      className="hover:text-teal-300 transition-all"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      &copy; 2025 Mohd Abdullah Siddiqui. All rights reserved.
    </motion.p>
  </motion.footer>
);

export default Footer;
