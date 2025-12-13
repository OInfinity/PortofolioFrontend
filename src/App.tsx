import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Admin from "./pages/Admin";
import FloatingChat from "./features/chat/components/Chatbot";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
              <FloatingChat />
            </>
          }
        />

        {/* Admin Route - no navbar/footer */}
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

