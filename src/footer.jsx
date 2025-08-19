import { motion } from "framer-motion";
import '@fortawesome/fontawesome-free/css/all.min.css';

const socials = [
  { href: "https://www.linkedin.com/in/mohd-abdullah-siddiqui-49b504325/", icon: "fab fa-linkedin", label: "LinkedIn" },
  { href: "https://www.instagram.com/_mohammad_abdullah_siddiqui_/profilecard", icon: "fab fa-instagram", label: "Instagram" },
  { href: "https://www.facebook.com/mohammed.a.siddiqui.982", icon: "fab fa-facebook", label: "Facebook" },
  { href: "https://www.github.com/Noah948", icon: "fab fa-github", label: "GitHub" }
];

const Footer = () => (
  <motion.footer
    className="bg-[#0d0d0d] text-gray-300 border-t border-gray-800"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <div className="max-w-6xl mx-auto px-4 md:px-12 py-8">
      {/* Socials */}
      <div className="flex justify-center space-x-6 mb-4">
        {socials.map((s) => (
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="text-gray-400 hover:text-[var(--accent,#34d399)]"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <i className={`${s.icon} text-2xl`}></i>
          </motion.a>
        ))}
      </div>

      {/* Copy */}
      <motion.p
        className="text-center text-sm text-gray-500 hover:text-gray-300 transition-colors"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
      >
        © {new Date().getFullYear()} Mohd Abdullah Siddiqui. All rights reserved.
      </motion.p>
    </div>
  </motion.footer>
);

export default Footer;
