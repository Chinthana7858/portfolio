import type { TimelineEntry } from "@/types/portfolio";

interface TimelineProps {
  entries: TimelineEntry[];
  dark: boolean;
}

export default function Timeline({ entries, dark }: TimelineProps) {
  return (
    <div className="relative mt-6 border-l border-teal-600 dark:border-teal-400">
      {entries.map((entry) => (
        <div key={entry.title} className="mb-8 ml-4">
          <div className="absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-teal-600 dark:border-gray-900 dark:bg-teal-400" />
          <h4
            className={`text-xl font-semibold ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            {entry.title}
          </h4>
          <p className={dark ? "text-white" : "text-gray-700"}>
            {entry.lines.map((line, index) => (
              <span key={line}>
                {line}
                {index < entry.lines.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}
