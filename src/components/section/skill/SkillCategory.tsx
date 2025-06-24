import SkillItem from "./SkillItem";

type Skill = {
  iconClass: string;
  colorClass: string;
  name: string;
};

type SkillCategoryProps = {
  title: string;
  skills: Skill[];
};

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="flex flex-col items-center gap-8">
      <p className="w-max font-primary text-base font-bold text-primary dark:text-dark-primary transition-all duration-200 hover:drop-shadow-[0_0_8px_#28a964] dark:hover:drop-shadow-[0_0_8px_#33ce78] text-center">
        {title}
      </p>

      <div className="w-full grid grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <SkillItem key={index} {...skill} />
        ))}
      </div>
    </div>
  );
}
