import { useContext } from "react";
import { ThemeContext } from "../../lib/ThemeContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import NeuralGlowDivider from "@/components/visuals/NeuralGlowDivider";

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  const bgClass =
    theme === "dark"
      ? "bg-gray-900 text-gray-400"
      : "bg-gray-100 text-gray-800";
  const borderClass = theme === "dark" ? "border-gray-700" : "border-gray-300";
  const hoverColor =
    theme === "dark" ? "hover:text-blue-400" : "hover:text-blue-600";

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className={`relative ${bgClass} mt-12 overflow-hidden`}>
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
        {/* Branding */}
        <div>
          <h2
            className={`text-xl font-semibold cursor-pointer ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
            onClick={() => handleScroll("home")}
          >
            MyPortfolio
          </h2>
          <p
            className={`text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Building ideas with code.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex justify-center space-x-6">
          {["home", "about", "projects", "blog", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className={`transition-colors ${hoverColor}`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end space-x-5">
          <button
          onClick={scrollToTop}
          className={`px-3 py-1 rounded-full transition-colors ${
            theme === "dark"
              ? "bg-gray-700 hover:bg-gray-600 text-white"
              : "bg-gray-300 hover:bg-gray-200 text-gray-900"
          }`}
        >
          ↑ Top
        </button>
        </div>
      </div>

      {/* Divider */}
      <div className={`border-t ${borderClass}`}></div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm space-y-3 md:space-y-0">
        <p>© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
      </div>

      {/* ⚡ Neural Glow Divider at the VERY BOTTOM */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <NeuralGlowDivider />
      </div>
    </footer>
  );
}
