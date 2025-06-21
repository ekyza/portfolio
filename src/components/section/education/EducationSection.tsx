import TimelineItem from "../../shared/TimelineItem";

const educations = [
  {
    company: "University of Muhammadiyah Malang",
    role: "Informatics Student - Software Engineering Focus",
    date: "2021 - Present",
    descriptions:
      "Pursuing a Bachelor's degree in Informatics with a focus on Software Engineering. Coursework includes software development, data structures, algorithms, databases, and web application development. Actively involved in academic projects centered around building information systems and collaborative development, with a strong foundation in modern software engineering practices.",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="flex flex-col gap-8 overflow-y-hidden">
      <div className="pt-4 flex items-center gap-2">
        <i className="bxr bx-education text-xl text-text"></i>

        <p className="font-primary text-lg font-bold text-text">Education</p>
      </div>

      <div className="relative flex flex-col gap-12">
        {educations.map((edu, index) => (
          <TimelineItem key={index} {...edu} />
        ))}
      </div>
    </section>
  );
}
