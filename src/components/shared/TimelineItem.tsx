interface TimelineItemProps {
  company: string;
  role: string;
  date: string;
  descriptions: string;
}

export default function TimelineItem({ company, role, date, descriptions }: TimelineItemProps) {
  return (
    <div className="flex gap-8 relative">
      <div className="relative flex flex-col items-center">
        <div className="bg-primary mt-[1.375rem] rounded-full size-3 z-10"></div>

        <div className="absolute top-0 h-[calc(100%+(1.5rem*2))] w-0.5 bg-[#292929]"></div>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="max-w-full w-max font-primary text-sm font-bold text-primary leading-6 text-wrap transition-all duration-200 hover:drop-shadow-[0_0_8px_#33ce78]">
              {company}
            </p>

            <p className="font-primary text-sm font-bold text-text">{role}</p>
          </div>

          <p className="font-primary text-xs font-bold text-text">{date}</p>
        </div>

        <div className="md:col-span-2">
          <p className="font-primary text-xs text-text leading-6">{descriptions}</p>
        </div>
      </div>
    </div>
  );
}
