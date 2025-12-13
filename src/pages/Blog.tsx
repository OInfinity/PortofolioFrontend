import { useContext } from "react";
import { ThemeContext } from "@/lib/ThemeContext";

export default function Blog() {
  const { theme } = useContext(ThemeContext);

  const posts = [
    {
      title: "Design Decisions Behind My Portfolio Interface",
      summary:
        "A breakdown of the layout, visual hierarchy, and trade-offs made while building this portfolio.",
      link: "#",
    },
    {
      title: "Lessons Learned While Deploying a Full-Stack Application",
      summary:
        "What worked, what didn’t, and what I improved while deploying a real project.",
      link: "#",
    },
    {
      title: "Balancing Visual Design and Performance in Web Projects",
      summary:
        "Notes on keeping interfaces clean without sacrificing speed or clarity.",
      link: "#",
    },
  ];

  return (
    <section
      id="blog"
      className={`py-24 px-6 transition-colors duration-500
        ${
          theme === "dark"
            ? "bg-slate-950 text-gray-200"
            : "bg-gray-100 text-gray-900"
        }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-semibold text-sm mb-2">
            Writing
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Notes from Building
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Short technical notes and reflections based on projects I’ve built
            and deployed.
          </p>
        </div>

        {/* Posts */}
        <div className="divide-y divide-gray-300/20 dark:divide-white/10">
          {posts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              className="block py-8 transition-colors group"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2
                             text-gray-900 dark:text-gray-100
                             group-hover:text-cyan-500">
                {post.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-3 max-w-3xl">
                {post.summary}
              </p>

              <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                Read note →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
