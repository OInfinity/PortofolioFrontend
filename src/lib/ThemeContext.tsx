import { createContext, useState, useEffect, useCallback } from "react";
import type { ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// 1️⃣ Create context with a safe default
// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

// 2️⃣ Helper to safely get the initial theme
function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark"; // SSR / non-browser safety

  const stored = localStorage.getItem("theme") as Theme | null;
  if (stored === "light" || stored === "dark") return stored;

  // Check system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

// 3️⃣ Provider component
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  // Memoized toggle (prevents unnecessary re-renders)
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  // Keep DOM and localStorage in sync
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Watch for system theme changes (optional enhancement)
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => {
      if (!localStorage.getItem("theme")) {
        setTheme(media.matches ? "dark" : "light");
      }
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
