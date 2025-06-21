import TimelineItem from "../../shared/TimelineItem";

const experiences = [
  {
    company: "Greenlabs Indonesia",
    role: "Backend Engineer",
    date: "Mar 2025 - Present",
    descriptions:
      "Responsible for developing and maintaining backend applications and services to support laboratory service booking and management. This includes designing and implementing RESTful APIs, creating efficient relational database structures to support core business workflows, collaborating closely with frontend developers to ensure seamless API integration, and implementing security best practices to safeguard sensitive user and operational data, also handled deployment automation using CI/CD pipelines to enable faster, more consistent, and reliable delivery of new features and updates.",
  },
  {
    company: "Badan Kepegawaian dan Pengembangan Sumber Daya Manusia Kabupaten Malang",
    role: "Fullstack Developer - Intern",
    date: "Jul 2025 - Aug 2025",
    descriptions:
      "Responsible for enhancing security and usability of the BKPSDM authentication system by integrating human verification mechanisms on the login page using Laravel. Designed and developed APIs and user interfaces for a credit score feature to support efficient personnel data management. Actively collaborated within a team of developers, contributing to code reviews and technical discussions to ensure high-quality and maintainable code.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="flex flex-col gap-8 overflow-y-hidden">
      <div className="pt-4 flex items-center gap-2">
        <i className="bxr bx-briefcase-alt-2 text-xl text-text"></i>

        <p className="font-primary text-lg font-bold text-text">Experience</p>
      </div>

      <div className="relative flex flex-col gap-12">
        {experiences.map((experience, index) => (
          <TimelineItem key={index} {...experience} />
        ))}
      </div>
    </section>
  );
}
