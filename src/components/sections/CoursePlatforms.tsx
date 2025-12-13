import { useContext, useMemo } from "react";
import { ThemeContext } from "../../lib/ThemeContext";

interface Platform {
  name: string;
  comment?: string;
  color?: string;
}

const platforms: Platform[] = [
  { name: "Udemy", comment: "Learn anything online", color: "#EC5252" },
  { name: "Coursera", comment: "Courses from top universities", color: "#FF6F61" },
  { name: "edX", comment: "Free online courses", color: "#1F7FC6" },
  { name: "Pluralsight", comment: "Tech & creative skills", color: "#F15A22" },
  { name: "Dunaújvárosi Egyetem", comment: "My university", color: "#6B7280" },
  { name: "FreeCodeCamp", comment: "Learn to code for free", color: "#006400" },
  { name: "Khan Academy", comment: "Free educational resources", color: "#FFCC00" },
  { name: "Codecademy", comment: "Interactive coding lessons", color: "#0047AB" },
  { name: "LinkedIn Learning", comment: "Professional development", color: "#0077B5" },
];

export default function CoursePlatforms() {
  const { theme } = useContext(ThemeContext);

  // duplicate list for smooth looping
  const scrollingPlatforms = useMemo(() => [...platforms, ...platforms], []);

  const bgColor =
    theme === "dark"
      ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
      : "bg-gradient-to-r from-gray-50 via-white to-gray-50";

  return (
  <div className={`relative py-10 overflow-x-hidden overflow-y-visible ${bgColor}`}>
    {/* Left & right fade edges */}
    <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent pointer-events-none z-10" />
    <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent pointer-events-none z-10" />

    {/* Scrolling line */}
    <div className="w-full relative z-20">
      <div
        className="flex animate-marquee space-x-12 font-semibold text-lg overflow-visible"
        style={{
          willChange: "transform",
          transform: "translate3d(0,0,0)",
        }}
      >
          {scrollingPlatforms.map((p, idx) => (
            <span
              key={idx}
              className="inline-block cursor-pointer relative flex-shrink-0 group transition-transform duration-300 hover:scale-110"
              style={{ color: p.color || "" }}
            >
              {p.name}

              {p.comment && (
                <span
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 
                             opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap 
                             z-50"
                >
                  {/* Tooltip bubble */}
                  <span
                    className={`relative px-2 py-1 rounded shadow-md ${
                      theme === "dark"
                        ? "bg-gray-700 text-white border-b-gray-700"
                        : "bg-gray-200 text-gray-900 border-b-gray-200"
                    }`}
                  >
                    {p.comment}

                    {/* Triangle pointer */}
                    <span
                      className={`absolute left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 
                        ${
                          theme === "dark"
                            ? "border-l-transparent border-r-transparent border-b-gray-700"
                            : "border-l-transparent border-r-transparent border-b-gray-200"
                        } bottom-full`}
                    ></span>
                  </span>
                </span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 20s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
}

/*
 
import { useContext, useMemo, useRef, useState } from "react";
import { ThemeContext } from "../../lib/ThemeContext";

interface Platform {
  name: string;
  comment?: string;
  color?: string;
}

const platforms: Platform[] = [
  { name: "Udemy", comment: "Learn anything online", color: "#EC5252" },
  { name: "Coursera", comment: "Courses from top universities", color: "#FF6F61" },
  { name: "edX", comment: "Free online courses", color: "#1F7FC6" },
  { name: "Pluralsight", comment: "Tech & creative skills", color: "#F15A22" },
  { name: "Dunaújvárosi Egyetem", comment: "My university", color: "#6B7280" },
  { name: "FreeCodeCamp", comment: "Learn to code for free", color: "#006400" },
  { name: "Khan Academy", comment: "Free educational resources", color: "#FFCC00" },
  { name: "Codecademy", comment: "Interactive coding lessons", color: "#0047AB" },
  { name: "LinkedIn Learning", comment: "Professional development", color: "#0077B5" },
];

export default function CoursePlatforms() {
  const { theme } = useContext(ThemeContext);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fixed overlay tooltip state (viewport coords)
  const [tooltip, setTooltip] = useState<{
    text: string;
    x: number;   // center x in viewport
    top: number; // y at top of section
  } | null>(null);

  const scrollingPlatforms = useMemo(() => [...platforms, ...platforms], []);

  const bgColor =
    theme === "dark"
      ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
      : "bg-gradient-to-r from-gray-50 via-white to-gray-50";

  // Show tooltip centered over the hovered item, but pinned to the top of the section
  const handleEnterOrMove = (e: React.MouseEvent<HTMLSpanElement>, text?: string) => {
    if (!text) return;
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();
    const x = rect.left + rect.width / 2;               // horizontal center of hovered item
    const top = (containerRect?.top ?? 0) + 8;          // a few px from the section top
    setTooltip({ text, x, top });
  };

  const handleLeave = () => setTooltip(null);

  return (
    <div
      ref={containerRef}
      className={`relative py-8 overflow-x-hidden overflow-y-visible ${bgColor}`}
    >
      // Fixed overlay tooltip (renders above everything, no clipping) 
      {tooltip && (
        <div
          className="fixed z-[9999] pointer-events-none"
          style={{ left: tooltip.x, top: tooltip.top, transform: "translateX(-50%)" }}
        >
          <div
            className={`relative px-3 py-1.5 rounded-lg text-sm shadow-lg ${
              theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900"
            }`}
          >
            {tooltip.text}
            // Triangle pointer — pointing down to the row 
            <span
              className={`absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 ${
                theme === "dark"
                  ? "border-l-transparent border-r-transparent border-t-gray-700"
                  : "border-l-transparent border-r-transparent border-t-gray-200"
              }`}
            />
          </div>
        </div>
      )}

      // Fade edges 
      <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent pointer-events-none z-10" />

      //Scrolling line 
      <div className="w-full relative z-20">
        <div
          className="flex animate-marquee space-x-12 font-semibold text-lg overflow-visible"
          style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}
        >
          {scrollingPlatforms.map((p, idx) => (
            <span
              key={idx}
              onMouseEnter={(e) => handleEnterOrMove(e, p.comment)}
              onMouseMove={(e) => handleEnterOrMove(e, p.comment)}
              onMouseLeave={handleLeave}
              className="inline-block cursor-pointer relative flex-shrink-0 transition-transform duration-300 hover:scale-110"
              style={{ color: p.color || "" }}
            >
              {p.name}
            </span>
          ))}
        </div>
      </div>

      // Keyframes 
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 20s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
}

 */