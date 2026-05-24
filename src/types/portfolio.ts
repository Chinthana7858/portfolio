import type { IconType } from "react-icons";

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: IconType;
  external?: boolean;
}

export interface ActionLink {
  href: string;
  label: string;
  variant: "primary" | "secondary";
}

export interface Highlight {
  label: string;
  value: string;
}

export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export interface TimelineEntry {
  title: string;
  lines: string[];
}

export interface TextListItem {
  title?: string;
  lines: string[];
}

export interface Project {
  title: string;
  year: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  role: string;
  url?: string;
}

export interface ContactDetail {
  label: string;
  value: string;
  href?: string;
}
