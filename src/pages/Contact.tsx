import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        py-24 px-6
        bg-white
        dark:bg-slate-950
        text-gray-900 dark:text-white
        transition-colors duration-700
      "
    >
      {/* Outer container — SAME as Blog */}
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-semibold text-sm mb-2">
            Contact
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Let’s{" "}
            <span className="text-cyan-600 dark:text-cyan-400">Connect</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Open to discussion, collaboration, and opportunities related to
            software development and project-based work.
          </p>
        </motion.div>

        {/* Content Card */}
        <motion.div
          className="
            w-full max-w-3xl mx-auto
            p-8 rounded-xl
            border border-gray-200 dark:border-slate-700
            bg-gray-50 dark:bg-slate-900/60
            backdrop-blur-sm
            shadow-md
            dark:shadow-[0_0_20px_rgba(14,165,233,0.05)]
            transition-all duration-500
          "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6 text-cyan-600 dark:text-cyan-400">
            Get in touch
          </h3>

          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            {/* Email */}
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-600 dark:text-cyan-400 text-xl" />
              <div>
                <p className="font-semibold">Email</p>
                <a
                  href="mailto:oououmar01@gmail.com"
                  className="hover:underline"
                >
                  oououmar01@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-cyan-600 dark:text-cyan-400 text-xl" />
              <div>
                <p className="font-semibold">Location</p>
                <p>Available worldwide (remote)</p>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-slate-700" />

            {/* Social */}
            <div>
              <p className="font-semibold mb-3">Online presence</p>
              <div className="flex gap-5 text-xl text-gray-500 dark:text-gray-400">
                <a
                  href="https://github.com/OInfinity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition"
                  aria-label="GitHub profile"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/oumar-ouonogo-5a7b03331"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="mt-8 p-4 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-100 dark:bg-slate-800/60">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
                Availability:
              </span>{" "}
              Open to internships, junior roles, and project-based collaborations
              where learning, responsibility, and building real systems are
              central.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
