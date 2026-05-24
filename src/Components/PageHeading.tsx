import type { ReactNode } from "react";

interface PageHeadingProps {
  children: ReactNode;
  className?: string;
  eyebrow?: string;
}

export default function PageHeading({
  children,
  className = "",
  eyebrow,
}: PageHeadingProps) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-amber-600 dark:text-amber-300">
          {eyebrow}
        </p>
      )}
      <h2 className="pb-1 text-4xl font-semibold text-teal-600 dark:text-teal-400 md:text-6xl">
        {children}
      </h2>
      <div className="mt-3 h-1 w-20 rounded-full bg-amber-500 dark:bg-amber-300" />
    </div>
  );
}
