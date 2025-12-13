import { useEffect, useRef, useState } from "react";
import "../styles/chatbot.css";;
import ChatWindow from "./ChatWindow";

export default function Chatbot() {
  const [chatOpen, setChatOpen] = useState(false);

  const timeoutsRef = useRef<number[]>([]);
  const intervalsRef = useRef<number[]>([]);

  const addTimeout = (id: number) => timeoutsRef.current.push(id);
  const addInterval = (id: number) => intervalsRef.current.push(id);

  useEffect(() => {
    const emoji = document.getElementById("chatbot-emoji") as HTMLElement | null;
    const overlay = document.getElementById("chatbot-overlay") as HTMLElement | null;
    const text = document.getElementById("chatbot-text") as HTMLElement | null;
    if (!emoji || !overlay || !text) return;

    const messages = [
      "👋 Hi! Need help or have a question?",
    ];

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const id = window.setTimeout(() => resolve(), ms);
        addTimeout(id);
      });

    const typeText = (message: string, element: HTMLElement, speed: number) =>
      new Promise<void>((resolve) => {
        let i = 0;
        element.textContent = "";
        const id = window.setInterval(() => {
          if (i < message.length) {
            element.textContent += message.charAt(i);
            i++;
          } else {
            window.clearInterval(id);
            resolve();
          }
        }, speed);
        addInterval(id);
      });

    const cleanupTimers = () => {
      timeoutsRef.current.forEach((t) => window.clearTimeout(t));
      intervalsRef.current.forEach((i) => window.clearInterval(i));
      timeoutsRef.current = [];
      intervalsRef.current = [];
    };

    const skipIntro = () => {
      cleanupTimers();
      text.style.opacity = "0";
      overlay.style.opacity = "0";
      overlay.style.pointerEvents = "none";
      emoji.style.bottom = "20px";
      emoji.style.right = "20px";
      emoji.style.transform = "translate(0,0)";
      // Remove listener after skipping
      window.removeEventListener("click", skipIntro);
      window.removeEventListener("touchstart", skipIntro);
    };

    const runAnimation = async () => {
      await wait(500);
      emoji.style.bottom = "50%";
      emoji.style.right = "50%";
      emoji.style.transform = "translate(50%, 50%)";
      overlay.style.opacity = "1";
      overlay.style.pointerEvents = "auto";

      await wait(1000);
      text.style.opacity = "1";

      for (let i = 0; i < messages.length; i++) {
        await typeText(messages[i], text, 80);
        await wait(1000);
        text.classList.add("fade-out");
        await wait(400);
        text.textContent = "";
        text.classList.remove("fade-out");
        await wait(200);
      }

      text.style.opacity = "0";
      overlay.style.opacity = "0";
      overlay.style.pointerEvents = "none";
      await wait(500);
      emoji.style.bottom = "20px";
      emoji.style.right = "20px";
      emoji.style.transform = "translate(0,0)";
    };

    // Run intro only once
    runAnimation();

    // Allow skip by clicking or touching anywhere
    window.addEventListener("click", skipIntro);
    window.addEventListener("touchstart", skipIntro);

    const handleEmojiClick = () => setChatOpen((prev) => !prev);
    emoji.addEventListener("click", handleEmojiClick);

    return () => {
      emoji.removeEventListener("click", handleEmojiClick);
      window.removeEventListener("click", skipIntro);
      window.removeEventListener("touchstart", skipIntro);
      cleanupTimers();
    };
  }, []);

  return (
    <>
      <div id="chatbot-emoji" className="chatbot-emoji">👨🏽‍🎓</div>

      <div id="chatbot-overlay" className="chatbot-overlay">
        <div id="chatbot-text" className="chatbot-text"></div>
      </div>

      <ChatWindow open={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}
