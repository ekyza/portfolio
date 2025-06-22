import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Navbar from "./components/Navbar";
import AboutMeSection from "./components/section/about_me/AboutMeSection";
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

      <ScrollToTopButton showScrollTop={showScrollTop} />

      <Footer />

      <Analytics />

      <SpeedInsights />
    </div>
  );
}
