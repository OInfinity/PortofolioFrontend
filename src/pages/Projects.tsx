import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";

interface Project {
  id: number;
  name: string;
  description: string;
  tech: string[];
  featured?: boolean;
  github?: string;
  demo?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      name: "Video Platform",
      description:
        "A full-stack video-sharing platform inspired by YouTube. Built with a focus on clean architecture, reliable API communication, authentication, and deployment. This project represents my main end-to-end software build.",
      tech: ["React", "TypeScript", "Node.js", "REST APIs"],
      featured: true,
      github: "https://github.com/yourusername/video-platform",
      demo: "https://your-video-platform.vercel.app",
    },
    {
      id: 2,
      name: "AI Robot Project",
      description:
        "An experimental project exploring AI-driven behavior and system interaction. Built to understand how decision logic, data flow, and feedback loops work together in an intelligent system.",
      tech: ["Python", "AI Logic", "System Design"],
      featured: true,
      github: "https://github.com/yourusername/ai-robot",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-background text-foreground overflow-hidden"
    >
      {/* subtle vertical glow */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,0,255,0.04),transparent)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Selected{" "}
            <span className="bg-gradient-to-r from-[#00F5FF] to-[#FF00FF] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-[#00F5FF] to-[#FF00FF]" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A small selection of projects that reflect how I approach building,
            deploying, and learning through real systems.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative rounded-2xl p-6 flex flex-col justify-between
                         border border-border
                         bg-[linear-gradient(135deg,hsl(var(--card)),hsl(var(--background)))]
                         dark:bg-[linear-gradient(135deg,#141420,#0A0A14)]
                         hover:border-[#00F5FF]/30 transition-all"
            >
              {/* Top */}
              <div className="relative mb-6 h-32 flex items-center justify-center rounded-xl overflow-hidden
                              bg-[linear-gradient(135deg,rgba(0,245,255,0.18),rgba(255,0,255,0.18))]">
                <span className="text-5xl font-bold bg-gradient-to-r from-[#00F5FF] to-[#FF00FF] bg-clip-text text-transparent">
                  {project.name[0]}
                </span>

                {project.featured && (
                  <div className="absolute top-3 right-3 bg-[#FF00FF] text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 uppercase">
                    <Star className="w-3 h-3" fill="white" />
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-bold mb-2 hover:text-[#00F5FF] transition-colors">
                  {project.name}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-1 rounded-full
                                 border border-[#00F5FF]/30 text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-[#00F5FF] transition"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-[#00F5FF] transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
