import { useState, useEffect, useContext } from "react";
import Sidebar from "./Sidebar";
import { ThemeContext } from "../../lib/ThemeContext";

// ✅ import profile image
import profileImage from "../../assets/profile.jpg";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  // Scroll spy
  useEffect(() => {
    const sections = ["home", "about", "projects", "blog", "contact"];
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (
          el &&
          el.offsetTop <= scrollPos &&
          el.offsetTop + el.offsetHeight > scrollPos
        ) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors ${
          theme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-white text-gray-900 shadow-md"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Profile Image (replaces Welcome) */}
          <button
            onClick={() => handleScroll("home")}
            className="flex items-center focus:outline-none"
            aria-label="Go to home"
          >
            <img
              src={profileImage}
              alt="Profile"
              className={`w-9 h-9 rounded-full object-cover transition-transform
                hover:scale-105
                ${
                  theme === "dark"
                    ? "ring-2 ring-gray-700"
                    : "ring-2 ring-gray-200"
                }`}
            />
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {["home", "about", "projects", "blog", "contact"].map((sec) => (
              <button
                key={sec}
                onClick={() => handleScroll(sec)}
                className={`transition ${
                  activeSection === sec
                    ? "text-blue-500 font-semibold"
                    : theme === "dark"
                    ? "hover:text-gray-300"
                    : "hover:text-gray-600"
                }`}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`ml-4 px-3 py-1 rounded-lg ${
                theme === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-900"
              }`}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`px-2 py-1 rounded-lg ${
                theme === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-900"
              }`}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            <button
              onClick={() => setIsOpen(true)}
              className="focus:outline-none text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        handleScroll={handleScroll}
        activeSection={activeSection}
      />
    </>
  );
}
