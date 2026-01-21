import { useState } from "react";

const projects = [
  {
    name: "Undersocpol",
    imgSrc: "/images/undersocpol/preview.png",
    role: "Web Developer - (Project-Based)",
    descriptions:
      "Undersocpol is a web-based platform developed to address the limited availability of accessible digital spaces for publishing social and political opinions in Indonesia, where traditional print media impose complex and selective publication processes. The platform provides a centralized and user-friendly environment for opinion writing and dissemination. Its development involved building a frontend application for article creation and reading, developing backend services through RESTful APIs to manage users and content, designing a relational database to ensure data consistency, and integrating cloud-based storage to support image uploads within articles, thereby improving content accessibility, data management, and media handling.",
    techStack: [
      {
        iconClass: "bxl bx-tailwind-css",
        colorClass: "text-[#00bcff] hover:drop-shadow-[0_0_8px_#00bcff]",
        name: "Tailwind CSS",
      },
      {
        iconClass: "bxl bx-nodejs",
        colorClass: "text-[#80bd00] hover:drop-shadow-[0_0_8px_#80bd00]",
        name: "Node.js",
      },
      {
        iconClass: "bxl bx-next-js",
        colorClass: "text-[#000000] dark:text-[#ffffff] hover:drop-shadow-[0_0_8px_#000000] dark:hover:drop-shadow-[0_0_8px_#ffffff]",
        name: "Next",
      },
      {
        iconClass: "bxl bx-react-query",
        colorClass: "text-[#ff4759] hover:drop-shadow-[0_0_8px_#ff4759]",
        name: "React Query",
      },
      {
        iconClass: "bxl bx-express-js",
        colorClass: "text-[#000000] dark:text-[#ffffff] hover:drop-shadow-[0_0_8px_#000000] dark:hover:drop-shadow-[0_0_8px_#ffffff]",
        name: "Express",
      },
      {
        iconClass: "bxl bx-prisma-orm",
        colorClass: "text-[#5f6cd9] hover:drop-shadow-[0_0_8px_#5f6cd9]",
        name: "Prisma ORM",
      },
      {
        iconClass: "bxl bx-supabase",
        colorClass: "text-[#3ecf8e] hover:drop-shadow-[0_0_8px_#3ecf8e]",
        name: "Supabase",
      },
      {
        iconClass: "bx bx-cloud",
        colorClass: "text-[#00bcff] hover:drop-shadow-[0_0_8px_#00bcff]",
        name: "Cloudinary",
      },
    ],
  },
];

export default function ProjectsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="flex flex-col gap-8">
      <div className="pt-4 flex items-center gap-2">
        <i className="bxr bx-folder-open text-xl text-text dark:text-dark-text"></i>

        <p className="mt-0.5 font-primary text-lg font-bold text-text dark:text-dark-text">Projects</p>
      </div>

      <div className="relative grid md:grid-cols-2 gap-8">
        {projects.map(({ name, imgSrc, role, descriptions, techStack }, index) => {
          return (
            <div key={index} className="p-4 border border-border dark:border-dark-border rounded-3xl flex flex-col gap-4">
              <img src={imgSrc} alt="Preview" className="border border-border dark:border-dark-border rounded-xl" />

              <div className="flex flex-col gap-1">
                <a
                  href="https://undersocpol.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="max-w-full w-max font-primary text-base font-bold text-primary dark:text-dark-primary leading-6 text-wrap transition-all duration-200 hover:drop-shadow-[0_0_8px_#28a964] dark:hover:drop-shadow-[0_0_8px_#33ce78]"
                >
                  {name}
                </a>

                <div className="flex flex-col gap-4">
                  <p className="font-primary text-xs text-text dark:text-dark-text">{role}</p>

                  <div className="flex items-center gap-2 flex-wrap">
                    {techStack.map(({ colorClass, iconClass, name }, index) => {
                      return (
                        <div className="py-1 px-3 border border-border dark:border-dark-border rounded-2xl flex items-center gap-2">
                          <i key={index} className={`${iconClass} text-xs ${colorClass} transition-all duration-200`}></i>

                          <p className="font-primary text-[0.5rem] text-text dark:text-dark-text">{name}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <p
                className={`font-primary text-sm text-text dark:text-dark-text leading-6 transition-all duration-300 ${
                  expandedIndex === index ? "" : "line-clamp-4"
                }`}
              >
                {descriptions}
              </p>

              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-max font-primary text-xs text-primary dark:text-dark-primary hover:underline transition-all"
              >
                {expandedIndex === index ? "Read less" : "Read more"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
