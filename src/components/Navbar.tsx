import { useEffect, useState } from "react";

import useTheme from "../hooks/useTheme";

import HamburgerMenu from "./HamburgerMenu";

const navLinks = [
  { href: "#about-me", label: "About Me" },
  { href: "#project", label: "Project" },
  { href: "#experience", label: "Experience" },
  { href: "#skill", label: "Skill" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, setIsDark } = useTheme();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="px-4">
      <nav className="py-4 md:px-4 mx-auto border-b border-border dark:border-dark-border max-w-5xl flex items-center justify-between">
        <a href="/" className="font-primary text-lg font-bold text-text dark:text-dark-text">
          <span className="text-primary dark:text-dark-primary">{"{"}</span>ekyza.<span className="text-primary dark:text-dark-primary">{"}"}</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="font-primary text-sm font-bold text-text dark:text-dark-text">
              {label}
            </a>
          ))}

          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="mode-toggle"
            className="bg-primary dark:bg-dark-primary p-1 rounded-full flex justify-center items-center hover:cursor-pointer transition-colors duration-300"
          >
            <i
              className={`bx bxs-${isDark ? "moon-star" : "sun"} text-base text-background dark:text-dark-background transition-all duration-500 transform ${
                isDark ? "rotate-0 opacity-100" : "rotate-180 opacity-100"
              }`}
            ></i>
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="mode-toggle"
            className="bg-primary dark:bg-dark-primary p-1 rounded-full flex justify-center items-center hover:cursor-pointer transition-colors duration-300"
          >
            <i
              className={`bx bxs-${isDark ? "moon-star" : "sun"} text-base text-background dark:text-dark-background transition-all duration-500 transform ${
                isDark ? "rotate-0 opacity-100" : "rotate-180 opacity-100"
              }`}
            ></i>
          </button>

          <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </nav>

      {isOpen && (
        <>
          <div className="fixed top-18 inset-0 bg-background/75 dark:bg-dark-background/75 z-10" onClick={() => setIsOpen(false)} />

          <div className="fixed top-[4.438rem] left-0 bg-background dark:bg-dark-background py-4 px-6 border-b border-border dark:border-dark-border w-full flex flex-col gap-8 z-50">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} onClick={() => setIsOpen(false)} className="font-primary text-sm font-bold text-text dark:text-dark-text">
                {label}
              </a>
            ))}
          </div>
        </>
      )}
    </header>
  );
}
