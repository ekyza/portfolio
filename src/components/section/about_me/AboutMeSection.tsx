import SocialLink from "./SocialLink";

const socialLinks = [
  { href: "https://github.com/ekyza/", label: "github", iconClass: "bxl bx-github" },
  { href: "https://www.linkedin.com/in/eky-zakariah-40b404257/", label: "linkedin", iconClass: "bxl bx-linkedin-square" },
  { href: "https://www.instagram.com/eky.za/", label: "instgram", iconClass: "bxl bx-instagram" },
];

export default function AboutMeSection() {
  return (
    <section id="about-me" className="py-24 flex flex-col gap-8">
      <p className="font-primary text-lg text-text leading-8">
        Hi 👋 - I'm{" "}
        <span className="font-primary font-bold text-primary leading-6 transition-all duration-200 hover:drop-shadow-[0_0_8px_#33ce78]">Eky Zakariah</span>, a
        Software Engineer passionate about building efficient, user-friendly solutions. Experienced in frontend and backend development, database management,
        and CI/CD automation, with a strong focus on collaboration and continuous improvement. Currently pursuing a degree in Informatics with a concentration
        in Software Engineering.
      </p>

      <div className="flex items-center gap-8">
        <a
          href="https://drive.google.com/file/d/1316cDUX3fq7_cGt6IgIvWDChfAp_SEnG/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary py-2 px-3 rounded-md flex items-center gap-2 font-primary text-sm font-bold text-background hover:cursor-pointer transition-all duration-200 hover:drop-shadow-[0_0_8px_#33ce78]"
        >
          <i className="bx bx-arrow-to-bottom-stroke text-lg"></i> Download Resume
        </a>

        <div className="mt-2 flex items-center gap-4">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
}
