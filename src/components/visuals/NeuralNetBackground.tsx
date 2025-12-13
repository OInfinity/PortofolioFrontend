import { useEffect, useRef, useContext } from "react";
import { ThemeContext } from "@/lib/ThemeContext";

interface Node {
  x: number;
  y: number;
  r: number;
  dx: number;
  dy: number;
  pulse: number;
}

export default function NeuralNetBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas to fit window
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    window.addEventListener("resize", resize);

    // Track mouse position
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = 0;
      mouse.y = 0;
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Create nodes (neurons)
    const NODE_COUNT = 120;
    const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.6,
      dy: (Math.random() - 0.5) * 0.6,
      pulse: Math.random() * 100,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connecting lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const alpha = 1 - dist / 150;
            const lineColor =
              theme === "dark"
                ? `rgba(0, 200, 255, ${alpha * 0.5})`
                : `rgba(0, 120, 255, ${alpha * 0.4})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        node.x += node.dx;
        node.y += node.dy;

        if (node.x < 0 || node.x > canvas.width) node.dx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.dy *= -1;

        // Mouse interaction (repel effect)
        if (mouse.x && mouse.y) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            node.x += (dx / dist) * 1.5;
            node.y += (dy / dist) * 1.5;
          }
        }

        // Pulse animation
        node.pulse += 0.05;
        const pulse = Math.sin(node.pulse) * 0.5;

        // Glow effect
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.r * 5
        );

        if (theme === "dark") {
          gradient.addColorStop(0, "rgba(0,200,255,0.9)");
          gradient.addColorStop(1, "rgba(0,200,255,0)");
        } else {
          gradient.addColorStop(0, "rgba(0,100,255,0.9)");
          gradient.addColorStop(1, "rgba(0,100,255,0)");
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r + pulse, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      aria-hidden="true"
    />
  );
}
