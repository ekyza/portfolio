import SkillCategory from "./SkillCategory";

const skillData = [
  {
    title: "Frontend Development",
    skills: [
      {
        iconClass: "bxl bx-tailwind-css",
        colorClass: "text-[#00bcff] hover:drop-shadow-[0_0_8px_#00bcff]",
        name: "Tailwind CSS",
      },
      {
        iconClass: "bxl bx-shadcn-ui",
        colorClass: "text-[#ffffff] hover:drop-shadow-[0_0_8px_#ffffff]",
        name: "ShadCN UI",
      },

      {
        iconClass: "bxl bx-react",
        colorClass: "text-[#58c4dc] hover:drop-shadow-[0_0_8px_#58c4dc]",
        name: "React",
      },
      {
        iconClass: "bxl bx-react-router",
        colorClass: "text-[#f44250] hover:drop-shadow-[0_0_8px_#f44250]",
        name: "React Router",
      },
      {
        iconClass: "bxl bx-react-query",
        colorClass: "text-[#ff4759] hover:drop-shadow-[0_0_8px_#ff4759]",
        name: "React Query",
      },
      {
        iconClass: "bxl bx-next-js",
        colorClass: "text-[#ffffff] hover:drop-shadow-[0_0_8px_#ffffff]",
        name: "Next",
      },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      {
        iconClass: "bxl bx-nodejs",
        colorClass: "text-[#80bd00] hover:drop-shadow-[0_0_8px_#80bd00]",
        name: "Node.js",
      },
      {
        iconClass: "bxl bx-express-js",
        colorClass: "text-[#ffffff] hover:drop-shadow-[0_0_8px_#ffffff]",
        name: "Express",
      },
      {
        iconClass: "bxl bx-prisma-orm",
        colorClass: "text-[#5f6cd9] hover:drop-shadow-[0_0_8px_#5f6cd9]",
        name: "Prisma ORM",
      },
      {
        iconClass: "bxl bx-socket-io",
        colorClass: "text-[#25c2a0] hover:drop-shadow-[0_0_8px_#25c2a0]",
        name: "Socket.io",
      },
      {
        iconClass: "bxl bx-laravel",
        colorClass: "text-[#ff3426] hover:drop-shadow-[0_0_8px_#ff3426]",
        name: "Laravel",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        iconClass: "bxl bx-postgresql",
        colorClass: "text-[#336791] hover:drop-shadow-[0_0_8px_#336791]",
        name: "PostgreSQL",
      },
      {
        iconClass: "bxl bx-my-sql",
        colorClass: "text-[#f29221] hover:drop-shadow-[0_0_8px_#f29221]",
        name: "MySQL",
      },
      {
        iconClass: "bxl bx-neon-tech",
        colorClass: "text-[#67f75a] hover:drop-shadow-[0_0_8px_#67f75a]",
        name: "Neon",
      },
      {
        iconClass: "bxl bx-supabase",
        colorClass: "text-[#3ecf8e] hover:drop-shadow-[0_0_8px_#3ecf8e]",
        name: "Supabase",
      },
      {
        iconClass: "bxl bx-firebase",
        colorClass: "text-[#de3308] hover:drop-shadow-[0_0_8px_#de3308]",
        name: "Firebase",
      },
      {
        iconClass: "bxl bx-mongodb",
        colorClass: "text-[#00ed64] hover:drop-shadow-[0_0_8px_#00ed64]",
        name: "MongoDB",
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        iconClass: "bxl bx-npm",
        colorClass: "text-[#cd3e3d] hover:drop-shadow-[0_0_8px_#cd3e3d]",
        name: "NPM",
      },
      {
        iconClass: "bxl bx-vite-js",
        colorClass: "text-[#9499db] hover:drop-shadow-[0_0_8px_#9499db]",
        name: "Vite",
      },
      {
        iconClass: "bxl bx-docker",
        colorClass: "text-[#1d63ed] hover:drop-shadow-[0_0_8px_#1d63ed]",
        name: "Docker",
      },
      {
        iconClass: "bxl bx-github",
        colorClass: "text-[#ffffff] hover:drop-shadow-[0_0_8px_#ffffff]",
        name: "Github",
      },
      {
        iconClass: "bxl bx-vercel",
        colorClass: "text-[#ffffff] hover:drop-shadow-[0_0_8px_#ffffff]",
        name: "Vercel",
      },
      {
        iconClass: "bxl bx-netlify",
        colorClass: "text-[#2ab6b4] hover:drop-shadow-[0_0_8px_#2ab6b4]",
        name: "Netlify",
      },
    ],
  },
];

export default function SkillSection() {
  return (
    <section id="skill" className="flex flex-col gap-8">
      <div className="pt-4 flex items-center gap-2">
        <i className="bx bx-bracket-curly text-xl text-text"></i>

        <p className="my-0.5 font-primary text-lg font-bold text-text">Skills</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {skillData.map(({ title, skills }, index) => (
          <SkillCategory key={index} title={title} skills={skills} />
        ))}
      </div>
    </section>
  );
}
