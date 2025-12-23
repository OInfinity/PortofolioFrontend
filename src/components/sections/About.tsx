import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg"; // Replace with your actual image

export default function About() {
  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-24 px-6 flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch justify-between gap-0">
        {/* Left Side - Profile Image */}
        <motion.div
          className="flex-shrink-0 md:w-[40%] flex items-stretch"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-full rounded-md overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 flex">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side - Bio Text */}
        <motion.div
          className="flex-1 md:w-[60%] flex flex-col justify-center px-0 md:pl-10"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Role Tag */}
          <p className="text-sm uppercase font-semibold text-cyan-600 dark:text-cyan-400 mb-2 tracking-wide">
            Currently pursuing a BSc in Computer Science Engineering
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Oumar Ouonogo
          </h1>

          {/* Bio */}
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-3">
           I build software by designing, implementing, and deploying complete applications. 
           Most of my work is centered around modern web development.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-3">
            I work on full-stack applications, handling user interfaces, 
            application logic, API communication, and deployment. This includes building frontends 
            with modern frameworks, connecting them to backend services, and ensuring that data flows 
            reliably between components over the network.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-3">
            I build depth by designing and improving systems through hands-on iteration.
          </p>
          
          {/* Focus Areas */}
          <div className="mb-3">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              Focus
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Software Development",
                "Web Applications",
              ].map((topic) => (
                <span
                  key={topic}
                  className="bg-cyan-600 text-white text-sm px-3 py-1 rounded font-medium"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Additional Interests */}
          <div className="mb-3">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              Additional Interests
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Networked Systems",
                "Cybersecurity",
                "Artificial Intelligence",
                "Systems Thinking",
              ].map((topic) => (
                <span
                  key={topic}
                  className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm px-3 py-1 rounded font-medium"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>


          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 dark:text-cyan-400 font-medium hover:underline"
          >
            Connect on LinkedIn →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
