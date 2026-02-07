import TimelineItem from "../../shared/TimelineItem";

const educations = [
  {
    company: "University of Muhammadiyah Malang",
    role: "Informatics Student - Software Engineering Focus",
    date: "Sep 2021 - Feb 2026",
    descriptions:
      "Pursuing a Bachelor's degree in Informatics with a focus on Software Engineering. Coursework includes software development, data structures, algorithms, databases, and web application development. Actively involved in academic projects centered around building information systems and collaborative development, with a strong foundation in modern software engineering practices.",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="flex flex-col gap-8 overflow-y-hidden">
      <div className="pt-4 flex items-center gap-2">
        <i className="bxr bx-education text-xl text-text dark:text-dark-text"></i>

        <p className="mt-0.5 font-primary text-lg font-bold text-text dark:text-dark-text">Education</p>
      </div>

      <div className="relative flex flex-col gap-12">
        {educations.map((education, index) => (
          <TimelineItem key={index} {...education} />
        ))}
      </div>
    </section>
  );
}
