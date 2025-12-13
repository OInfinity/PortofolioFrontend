import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { ThemeContext } from "../../lib/ThemeContext";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  handleScroll: (id: string) => void;
  activeSection: string;
}

const sections = ["home", "about", "projects", "blog", "contact"];

export default function Sidebar({ isOpen, onClose, handleScroll, activeSection }: SidebarProps) {
  const { theme } = useContext(ThemeContext);

  const bgClass = theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900";
  const borderClass = theme === "dark" ? "border-gray-700" : "border-gray-300";
  const hoverClass = theme === "dark" ? "hover:text-blue-400" : "hover:text-blue-600";

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full z-50 transform transition-transform duration-300 ease-in-out ${bgClass} ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Container is scrollable */}
      <div className="flex flex-col h-full overflow-y-auto">
        {/* Header with logo + close button */}
        <div className={`flex items-center justify-between px-6 py-4 border-b ${borderClass} flex-shrink-0`}>
          <h2
            className="text-xl font-bold cursor-pointer"
            onClick={() => handleScroll("home")}
          >
            MyPortfolio
          </h2>
          <button
            onClick={onClose}
            className={`transition ${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Nav links (scrollable area) */}
        <div className="flex flex-col space-y-8 mt-12 px-6 pb-10">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => {
                handleScroll(sec);
                onClose();
              }}
              className={`text-2xl font-semibold text-left transition ${
                activeSection === sec
                  ? "text-blue-500"
                  : hoverClass
              }`}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
