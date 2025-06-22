type SkillItemProps = {
  iconClass: string;
  colorClass: string;
  name: string;
};

export default function SkillItem({ iconClass, colorClass, name }: SkillItemProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <i className={`${iconClass} text-3xl ${colorClass} transition-all duration-200`}></i>

      <p className="font-primary font-bold text-xs text-text text-center">{name}</p>
    </div>
  );
}
