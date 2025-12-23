import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import {
  Github,
  ExternalLink,
  Star,
  Video,
  FileText,
  Layout,
  Play,
  X,
} from "lucide-react";

// video lives in same folder
import demoVideo from "./FSD.mp4";

interface Project {
  id: number;
  name: string;
  description: string;
  highlights?: string[];
  tech: string[];
  featured?: boolean;
  github?: string;
  demo?: string;
  videoPreview?: string;
  images?: string[];
}

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeGallery, setActiveGallery] = useState<string[] | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // ESC to close focus mode
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveVideo(null);
        setActiveGallery(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      name: "Video Platform",
      description:
        "A full-stack video-sharing platform inspired by YouTube. Designed and built end-to-end, including authentication, REST APIs, video uploads, and deployment.",
      highlights: [
        "JWT-based authentication & protected routes",
        "REST API design with Node.js",
        "Frontend–backend integration & deployment",
      ],
      tech: ["React", "TypeScript", "Node.js", "REST APIs"],
      featured: true,
      github: "https://github.com/OInfinity/",
      demo: "https://www.ifweb.space",
      videoPreview: demoVideo,
    },
    {
      id: 2,
      name: "Personal Blogging Platform",
      description:
        "A full-stack blogging platform built to publish, search, and manage written content with a clean frontend and structured backend architecture.",
      highlights: [
        "Searchable blog posts with dynamic routing",
        "NestJS controller/service architecture",
        "Prisma ORM and relational database modeling",
      ],
      tech: ["React", "TypeScript", "NestJS", "Prisma", "PostgreSQL"],
      demo: "https://blog-frontend-three-blue.vercel.app",
      github: "https://github.com/OInfinity/BlogFrontend",
      images: [
        "/blog/blog-1.png",
        "/blog/blog-2.png",
        "/blog/blog-3.png",
      ],
    },
    {
      id: 3,
      name: "Current Portfolio",
      description:
        "My personal portfolio website designed to showcase projects through clear storytelling, motion, and focused user experience.",
      highlights: [
        "Component-driven UI with Framer Motion",
        "Product-focused UX and interaction design",
        "Responsive layout with performance in mind",
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/OInfinity/PortofolioFrontend",
    },
  ];

  const projectIcons: Record<string, ReactNode> = {
    "Video Platform": <Video className="w-10 h-10 text-white" />,
    "Personal Blogging Platform": (
      <FileText className="w-10 h-10 text-white" />
    ),
    "Personal Portfolio": <Layout className="w-10 h-10 text-white" />,
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      {/* ===================== PROJECTS ===================== */}
      <section
        id="projects"
        className="relative py-24 px-6 bg-background text-foreground overflow-hidden"
      >
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
              A selection of real projects focused on system design, product
              thinking, and user experience.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <motion.article
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl p-6 flex flex-col justify-between
                           border border-border
                           bg-[linear-gradient(135deg,hsl(var(--card)),hsl(var(--background)))]
                           dark:bg-[linear-gradient(135deg,#141420,#0A0A14)]
                           hover:border-[#00F5FF]/30 transition-all"
              >
                {/* Preview */}
                <div
                  onClick={() => {
                    if (project.videoPreview && project.featured) {
                      setActiveVideo(project.videoPreview);
                    }
                    if (project.images) {
                      setGalleryIndex(0);
                      setActiveGallery(project.images);
                    }
                  }}
                  className={`relative mb-6 rounded-xl overflow-hidden
                    ${project.featured || project.images ? "cursor-pointer" : ""}
                    ${project.featured ? "h-48" : "h-36"}
                  `}
                >
                  {/* VIDEO PREVIEW */}
                  {project.videoPreview ? (
                    <video
                      src={project.videoPreview}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover aspect-video"
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />
                  ) : project.images ? (
                    /* IMAGE PREVIEW */
                    <img
                      src={project.images[0]}
                      alt={project.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    /* FALLBACK ICON */
                    <div className="h-full flex items-center justify-center bg-gradient-to-br from-[#00F5FF]/30 to-[#FF00FF]/30">
                      <div className="p-4 rounded-xl bg-black/30 backdrop-blur">
                        {projectIcons[project.name]}
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition pointer-events-none" />

                  {project.featured && (
                    <>
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="rounded-full bg-black/50 p-4 group-hover:scale-110 transition">
                          <Play className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      <div className="absolute top-3 right-3 bg-[#FF00FF] text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 uppercase z-10">
                        <Star className="w-3 h-3" fill="white" />
                        Flagship
                      </div>

                      <span className="absolute bottom-2 left-2 text-[10px] px-2 py-1 rounded bg-black/50 text-white z-10">
                        Click to focus
                      </span>
                    </>
                  )}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    {project.name}
                  </h3>

                  {project.featured && (
                    <p className="text-xs text-[#FF00FF] mb-2">
                      End-to-end full-stack project
                    </p>
                  )}

                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {project.highlights && (
                    <ul className="text-xs text-muted-foreground mb-4 space-y-1">
                      {project.highlights.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-1 rounded-full border border-[#00F5FF]/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-md bg-[#00F5FF]/20 text-[#00F5FF] hover:bg-[#00F5FF]/30 transition flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-[#00F5FF] transition"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== BLOG GALLERY ===================== */}
      {activeGallery && (
        <div
          onClick={() => setActiveGallery(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-5xl mx-6 flex flex-col items-center"
          >
            <motion.img
              key={galleryIndex}
              src={activeGallery[galleryIndex]}
              alt=""
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full rounded-xl bg-black shadow-2xl select-none"
            />

            <button
              onClick={() => setActiveGallery(null)}
              className="absolute -top-10 right-0 text-white/80 hover:text-white flex items-center gap-1"
            >
              <X className="w-4 h-4" />
              Close
            </button>

            <button
              onClick={() =>
                setGalleryIndex((i) =>
                  i === 0 ? activeGallery.length - 1 : i - 1
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 transition"
            >
              &#8249;
            </button>

            <button
              onClick={() =>
                setGalleryIndex((i) =>
                  i === activeGallery.length - 1 ? 0 : i + 1
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 transition"
            >
              &#8250;
            </button>

            <div className="mt-4 flex gap-2">
              {activeGallery.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setGalleryIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition ${
                    i === galleryIndex
                      ? "bg-white scale-110"
                      : "bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>

            <div className="mt-6 flex gap-3 overflow-x-auto max-w-full pb-2">
              {activeGallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setGalleryIndex(i)}
                  className={`relative rounded-md overflow-hidden border transition ${
                    i === galleryIndex
                      ? "border-[#00F5FF]"
                      : "border-white/20 hover:border-white/50"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="h-16 w-28 object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {/* ===================== VIDEO FOCUS MODE ===================== */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-5xl mx-6"
          >
            <video
              src={activeVideo}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full rounded-xl aspect-video bg-black shadow-2xl"
            />

            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white/80 hover:text-white flex items-center gap-1"
            >
              <X className="w-4 h-4" />
              Close
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Projects;
