import { useEffect, useState } from "react";

import HamburgerMenu from "./HamburgerMenu";

const navLinks = [
  { href: "#about-me", label: "About Me" },
  { href: "#experience", label: "Experience" },
  { href: "#skill", label: "Skill" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="px-4">
      <nav className="py-4 md:px-4 mx-auto border-b border-[#292929] max-w-screen-lg flex items-center justify-between">
        <a href="/" className="font-primary text-lg font-bold text-text">
          <span className="text-primary">{"{"}</span>ekyza.<span className="text-primary">{"}"}</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="font-primary text-sm font-bold text-text">
              {label}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </nav>

      {isOpen && (
        <>
          <div className="fixed top-[4.5rem] inset-0 bg-background/75 z-10" onClick={() => setIsOpen(false)} />

          <div className="fixed top-[4.438rem] left-0 bg-background py-4 px-6 border-b border-[#292929] w-full flex flex-col gap-8 z-50">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} onClick={() => setIsOpen(false)} className="font-primary text-sm font-bold text-text">
                {label}
              </a>
            ))}
          </div>
        </>
      )}
    </header>
  );
}
