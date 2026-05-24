import type { ReactNode } from "react";
import type { IconType } from "react-icons";

interface SectionHeadingProps {
  children: ReactNode;
  icon?: IconType;
}

export default function SectionHeading({ children, icon: Icon }: SectionHeadingProps) {
  return (
    <h3 className="flex items-center gap-3 pt-10 text-2xl font-medium text-teal-600 dark:text-teal-400">
      {Icon && (
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/70 text-amber-600 shadow-sm ring-1 ring-teal-600/10 dark:bg-gray-800/70 dark:text-amber-300 dark:ring-white/10">
          <Icon size={20} />
        </span>
      )}
      {children}
    </h3>
  );
}
