import type { SkillGroup } from "@/types/portfolio";

interface SkillGroupsProps {
  groups: SkillGroup[];
  dark: boolean;
  layout?: "wide" | "sidebar";
}

export default function SkillGroups({
  groups,
  dark,
  layout = "wide",
}: SkillGroupsProps) {
  const iconColor = dark ? "text-teal-400" : "text-gray-700";
  const gridClass =
    layout === "sidebar"
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
      : "grid-cols-1 md:grid-cols-2 xl:grid-cols-4";

  return (
    <div className={`grid gap-3 pt-3 ${gridClass}`}>
      {groups.map((group) => {
        const wideGroupClass =
          group.skills.length > 5 && layout === "wide" ? "xl:col-span-2" : "";

        return (
          <div
            key={group.title}
            className={`rounded-lg border border-white/60 bg-white/55 p-3 shadow-sm dark:border-white/10 dark:bg-gray-900/35 ${wideGroupClass}`}
          >
            <h3
              className={`text-lg font-medium ${
                dark ? "text-teal-400" : "text-gray-700"
              }`}
            >
              {group.title}
            </h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(64px,1fr))] gap-2 pt-3">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex min-h-20 flex-col items-center justify-center rounded-lg p-2 text-center transition hover:bg-teal-500/10"
                >
                  <skill.icon size={30} className={iconColor} />
                  <span
                    className={`mt-1 text-xs font-medium leading-snug ${
                      dark ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
