import { useContext } from "react";
import { ThemeContext } from "@/lib/ThemeContext";

export default function NeuralGradientWaveDivider() {
  const { theme } = useContext(ThemeContext);

  // Gradient colors adapt to theme
  const colorA = theme === "dark" ? "#00d4ff" : "#3b82f6"; // cyan / blue
  const colorB = theme === "dark" ? "#0077ff" : "#60a5fa";
  const colorC = theme === "dark" ? "#00c0ff" : "#93c5fd"; // lighter highlight

  return (
    <div className="relative w-full h-32 overflow-hidden">
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Back layer - soft fade */}
        <path
          d="M0,288L80,272C160,256,320,224,480,208C640,192,800,192,960,208C1120,224,1280,256,1360,272L1440,288L1440,320L0,320Z"
          fill="url(#neuralGradientBack)"
        />
        {/* Mid layer - subtle highlight */}
        <path
          d="M0,256L60,245.3C120,235,240,213,360,197.3C480,181,600,171,720,186.7C840,203,960,245,1080,261.3C1200,277,1320,267,1380,261.3L1440,256L1440,320L0,320Z"
          fill="url(#neuralGradientMid)"
          fillOpacity="0.6"
        />
        {/* Front layer - fine glowing crest */}
        <path
          d="M0,288L40,282.7C80,277,160,267,240,261.3C320,256,400,256,480,261.3C560,267,640,277,720,277.3C800,277,880,267,960,266.7C1040,267,1120,277,1200,282.7C1280,288,1360,288,1400,288L1440,288L1440,320L0,320Z"
          fill="url(#neuralGradientFront)"
          fillOpacity="0.9"
        />

        <defs>
          {/* Deep background gradient */}
          <linearGradient id="neuralGradientBack" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={colorA} stopOpacity="0.08" />
            <stop offset="100%" stopColor={colorB} stopOpacity="0.02" />
          </linearGradient>

          {/* Mid-layer gradient */}
          <linearGradient id="neuralGradientMid" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={colorA} stopOpacity="0.2" />
            <stop offset="100%" stopColor={colorB} stopOpacity="0.1" />
          </linearGradient>

          {/* Foreground bright highlight */}
          <linearGradient id="neuralGradientFront" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={colorC} stopOpacity="0.4" />
            <stop offset="100%" stopColor={colorB} stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Optional faint glow under the crest */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent" />
    </div>
  );
}
