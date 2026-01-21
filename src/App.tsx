import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import ThemeContextProvider from "./contexts/ThemeContext";

import ScrolledPage from "./components/ScrolledPage";
import Navbar from "./components/Navbar";
import AboutMeSection from "./components/section/about_me/AboutMeSection";
import ProjectsSection from "./components/section/projects/ProjectsSection";
import ExperienceSection from "./components/section/experience/ExperienceSection";
import EducationSection from "./components/section/education/EducationSection";
import SkillSection from "./components/section/skill/SkillSection";
import ContactSection from "./components/section/contact/ContactSection";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 73);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeContextProvider>
      <ScrolledPage>
        <div className="bg-background dark:bg-dark-background min-h-screen antialiased transition-colors duration-500 ease-in-out">
          <Navbar />

          <main className="py-4 px-6 mx-auto max-w-5xl">
            <AboutMeSection />

            <div className="flex flex-col gap-12">
              <ProjectsSection />

              <ExperienceSection />

              <EducationSection />

              <SkillSection />

              <ContactSection />
            </div>
          </main>

          <ScrollToTopButton showScrollTop={showScrollTop} />

          <Footer />

          <Analytics />

          <SpeedInsights />
        </div>
      </ScrolledPage>
    </ThemeContextProvider>
  );
}
