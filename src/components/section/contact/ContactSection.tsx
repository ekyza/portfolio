export default function ContactSection() {
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
      href: "https://drive.google.com/file/d/1316cDUX3fq7_cGt6IgIvWDChfAp_SEnG/view?usp=drive_link",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];

  return (
    <section id="contact" className="py-24 flex flex-col gap-8">
      <p className="font-primary text-3xl text-text text-center">Get In Touch</p>

      <p className="md:mx-auto md:w-1/2 font-primary text-sm text-text text-center">
        Say hello 👋 Whether it`s a question, a project, or just a hello — I`m just one message away.
      </p>

      <div className="flex justify-center items-center flex-wrap gap-4">
        {contacts.map(({ label, icon, href, target, rel }) => (
          <a
            key={label}
            href={href}
            {...(target ? { target } : {})}
            {...(rel ? { rel } : {})}
            className="bg-text py-2 px-3 rounded-md flex items-center gap-2 font-primary text-xs font-bold text-background transition-all duration-200 hover:drop-shadow-[0_0_8px_#fefefe]"
          >
            <i className={`${icon} text-lg`}></i> {label}
          </a>
        ))}
      </div>
    </section>
  );
}
