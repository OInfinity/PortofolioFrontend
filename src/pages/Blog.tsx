import { useContext } from "react";
import { ThemeContext } from "@/lib/ThemeContext";

export default function Blog() {
  const { theme } = useContext(ThemeContext);
{/* Topic: Notes on keeping interfaces clean without sacrificing speed or clarity. */}
  const posts = [
    {
      title: "Why Most Performance Problems Aren’t Technical",
      summary:
        "How product decisions, unclear requirements, and UX choices often impact performance more than code does...",
      link: "https://blog-frontend-three-blue.vercel.app/post/why-most-performance-problems-aren-t-technical",
    },
    {
      title: "Understanding Technical Debt Beyond the Buzzword",
      summary:
        "What technical debt really means, when it’s acceptable, and how teams should manage it consciously...",
      link: "https://blog-frontend-three-blue.vercel.app/post/understanding-technical-debt-beyond-the-buzzword",
    },
    {
      title: "Building for Today While Preparing for Tomorrow",
      summary:
        "Strategies for making pragmatic decisions that don’t block future change or improvement...",
      link: "https://blog-frontend-three-blue.vercel.app/post/building-for-today-while-preparing-for-tomorrow",
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
            <div key={index} className="py-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {post.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-3 max-w-3xl">
                {post.summary}
              </p>

              <a
                href={post.link}
                className="inline-flex items-center text-sm font-medium
                           text-cyan-600 dark:text-cyan-400
                           hover:underline"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
