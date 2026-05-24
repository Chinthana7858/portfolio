import type { SocialLink } from "@/types/portfolio";

interface SocialLinksProps {
  links: SocialLink[];
  dark: boolean;
}

export default function SocialLinks({ links, dark }: SocialLinksProps) {
  return (
    <div
      className={`flex justify-start gap-6 py-5 text-5xl ${
        dark ? "text-white" : "text-slate-500"
      }`}
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          aria-label={link.label}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
        >
          <link.icon size={40} />
        </a>
      ))}
    </div>
  );
}
