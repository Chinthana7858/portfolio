import type { TextListItem } from "@/types/portfolio";

interface TextListSectionProps {
  items: TextListItem[];
  dark: boolean;
}

export default function TextListSection({ items, dark }: TextListSectionProps) {
  return (
    <ul className={`list-disc pl-5 ${dark ? "text-white" : "text-gray-700"}`}>
      {items.map((item) => (
        <li key={`${item.title ?? ""}${item.lines[0]}`}>
          {item.title && (
            <>
              <strong>{item.title}</strong>
              <br />
            </>
          )}
          {item.lines.map((line, index) => (
            <span key={line}>
              {line}
              {index < item.lines.length - 1 && <br />}
            </span>
          ))}
        </li>
      ))}
    </ul>
  );
}
