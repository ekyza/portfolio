const contacts = [
  {
    label: "Email",
    icon: "bx bx-envelope",
    href: "mailto:ekyza.dev@gmail.com",
  },
  {
    label: "LinkedIn",
    icon: "bxl bx-linkedin-square",
    href: "https://www.linkedin.com/in/eky-zakariah-40b404257/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    label: "Resume",
    icon: "bx bx-file-detail",
    href: "https://drive.google.com/file/d/19QDT00Bcv3mmjCsjslOwFuDN8MYkgU77/view?usp=sharing",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 flex flex-col gap-8">
      <p className="font-primary text-3xl text-text dark:text-dark-text text-center">
        Get In{" "}
        <span className="text-primary dark:text-dark-primary transition-all duration-200 hover:drop-shadow-[0_0_8px_#28a964] dark:hover:drop-shadow-[0_0_8px_#33ce78]">
          Touch
        </span>
      </p>

      <p className="md:mx-auto md:max-w-3/5 font-primary text-base text-text dark:text-dark-text text-center">
        Say hello 👋 Whether it`s a question, a project, or just a hello — I`m just one message away.
      </p>

      <div className="flex justify-center items-center flex-wrap gap-4">
        {contacts.map(({ label, icon, href, target, rel }) => (
          <a
            key={label}
            href={href}
            {...(target && { target })}
            {...(rel && { rel })}
            className="bg-primary dark:bg-dark-primary py-2 px-3 rounded-md flex items-center gap-2 font-primary text-sm font-bold text-background dark:text-dark-background transition-all duration-200 hover:drop-shadow-[0_0_8px_#28a964] dark:hover:drop-shadow-[0_0_8px_#33ce78]"
          >
            <i className={`${icon} text-lg`}></i> {label}
          </a>
        ))}
      </div>
    </section>
  );
}
