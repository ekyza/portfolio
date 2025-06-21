import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import AboutMeSection from "./components/section/about_me/AboutMeSection";
import ExperienceSection from "./components/section/experience/ExperienceSection";
import EducationSection from "./components/section/education/EducationSection";
import SkillSection from "./components/section/skill/SkillSection";
import ContactSection from "./components/section/contact/ContactSection";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 73);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-background min-h-screen antialiased">
      <Navbar />

      <main className="py-4 px-6 mx-auto max-w-screen-lg">
        <AboutMeSection />

        <div className="flex flex-col gap-12">
          <ExperienceSection />

          <EducationSection />

          <SkillSection />

          <ContactSection />
        </div>
      </main>

      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-12 md:bottom-32 right-6 md:right-32 z-50 bg-primary rounded-full flex justify-center items-center p-1 transition-all duration-500 ease-in-out transform ${
            showScrollTop ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"
          } cursor-pointer
        `}
      >
        <i className="bx bx-arrow-up-stroke text-4xl text-background"></i>
      </button>

      <footer className="py-24 px-4">
        <p className="font-primary font-bold text-xs text-text text-center">Designed and Developed by Eky Zakariah</p>
      </footer>
    </div>
  );
}
