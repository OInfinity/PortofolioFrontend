import { useContext } from "react";
import { ThemeContext } from "@/lib/ThemeContext";
import NeuralNetBackground from "@/components/visuals/NeuralNetBackground";
import NeuralGlowDivider from "@/components/visuals/NeuralGlowDivider";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaEnvelope, FaGithub } from "react-icons/fa";

export default function Hero() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-between min-h-[calc(100vh-5rem)] pt-20 pb-12 overflow-hidden
                 bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-500 scroll-smooth"
    >
      {/* Neural Network Background */}
      <NeuralNetBackground />

      {/* Overlay gradient */}
      <div
        className={`absolute inset-0 transition-colors duration-700 mix-blend-overlay ${
          theme === "dark"
            ? "bg-gradient-to-b from-black/70 to-gray-900/30"
            : "bg-gradient-to-b from-white/80 to-gray-100/40"
        }`}
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center flex-grow">
        {/* Badge */}
        <motion.div
          className="inline-block mt-6 mb-3 sm:mb-4 px-5 py-2 rounded-full text-sm font-medium
                     border border-sky-600 dark:border-[#00E5FF]
                     text-sky-700 dark:text-[#00E5FF]
                     bg-sky-100/60 dark:bg-[#00E5FF]/10
                     shadow-sm dark:shadow-[0_0_15px_#00E5FF80]
                     backdrop-blur-sm transition-colors duration-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to the Future
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="font-extrabold tracking-tight
                     text-[2.75rem] sm:text-[4rem] lg:text-[5.5rem]
                     bg-gradient-to-r 
                     from-sky-700 via-blue-600 to-purple-600 
                     dark:from-white dark:via-[#67E8F9] dark:to-[#A855F7]
                     bg-clip-text text-transparent transition-colors duration-500"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Tonton
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          className="mt-3 font-light text-sky-700 dark:text-[#67E8F9]
                     text-[1.125rem] sm:text-[1.375rem] lg:text-[1.75rem] transition-colors duration-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Computer Science Engineer | Software & Network Innovator
        </motion.h2>

        {/* Mission Statement */}
        <motion.p
          className="mt-3 text-gray-600 dark:text-[#9CA3AF]
                     text-[1rem] sm:text-[1.125rem] max-w-2xl mx-auto font-normal transition-colors duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          I build modern web interfaces and network-driven applications through project-based learning.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <button
            className="px-7 py-2.5 text-base font-semibold rounded-lg
                       bg-sky-600 text-white shadow-lg hover:bg-sky-700
                       dark:bg-[#06B6D4] dark:text-black dark:hover:bg-[#22D3EE]
                       transition-all duration-300"
          >
            Explore My Work
          </button>

          <button
            className="px-7 py-2.5 text-base font-semibold rounded-lg
                       border border-sky-600 text-sky-700 hover:bg-sky-100
                       dark:border-[#06B6D4] dark:text-[#06B6D4] dark:hover:bg-[#06B6D4]/10
                       backdrop-blur-md transition-all duration-300"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          className="mt-8 flex justify-center gap-8 text-[22px]
                     text-gray-500 dark:text-[#9CA3AF] transition-colors duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
        >
          <a href="#" className="hover:text-sky-600 dark:hover:text-[#06B6D4] transition"><FaGithub /></a>
          <a href="#" className="hover:text-sky-600 dark:hover:text-[#06B6D4] transition"><FaLinkedin /></a>
          <a href="#" className="hover:text-sky-600 dark:hover:text-[#06B6D4] transition"><FaTwitter /></a>
          <a href="#" className="hover:text-sky-600 dark:hover:text-[#06B6D4] transition"><FaEnvelope /></a>
        </motion.div>
      </div>

      {/* ↓ Scroll Down (moved lower and clickable) */}
      <a href="#about" 
         className="mt-8 group"
      >
        <motion.div
          className="text-sky-600 dark:text-[#22D3EE] text-[36px] animate-bounce transition-colors duration-500 group-hover:translate-y-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          ↓
        </motion.div>
      </a>

      {/* Neural Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <NeuralGlowDivider />
      </div>
    </section>
  );
}
