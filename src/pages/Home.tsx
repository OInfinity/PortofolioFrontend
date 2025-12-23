import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/pages/Projects";
import Blog from "@/pages/Blog";
import Skills from "@/components/sections/CoreTechnologies ";
import Contact from "@/pages/Contact";
// import CoursePlatforms from "@/components/sections/CoursePlatforms";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-500">
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="blog">
        <Blog />
      </section>
      
      <section id="contact">
        <Contact />
      </section>

      {/* <section id="coursePlatforms">
        <CoursePlatforms />
      </section> */}
    </main>
  );
}
