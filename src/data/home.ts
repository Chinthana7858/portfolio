import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { FaSquareWhatsapp } from "react-icons/fa6";
import type { ActionLink, Highlight, SocialLink } from "@/types/portfolio";

export const homeProfile = {
  name: "Chinthana Rajapaksha",
  roles: ["Problem Solver_", "Designer_", "Software Developer_"],
  intro:
    "I am an enthusiastic undergraduate with a passion for solving complex problems using an engineering approach. My ability to quickly adapt to new technologies allows me to leverage my full potential and skills to achieve successful outcomes. I am particularly interested in software development, with a focus on full-stack development, and database design. My academic background has equipped me with a strong foundation in both theoretical and practical aspects of these areas, and I am eager to apply my knowledge to real-world projects. I thrive in dynamic environments where I can continuously learn and grow, and I am committed to contributing to innovative solutions in the field of software engineering.",
  portrait: {
    src: "https://i.imgur.com/TGxPsM1.jpg",
    alt: "Portrait of Chinthana Rajapaksha",
  },
};

export const homeActions: ActionLink[] = [
  {
    href: "/Projects",
    label: "View projects",
    variant: "primary",
  },
  {
    href: "/Contact",
    label: "Contact me",
    variant: "secondary",
  },
];

export const homeHighlights: Highlight[] = [
  { value: "Full-stack", label: "Development" },
  { value: "Mobile", label: "Development" }
];

export const socialLinks: SocialLink[] = [
  {
    href: "https://linkedin.com/in/prchinthana",
    label: "LinkedIn profile",
    icon: AiFillLinkedin,
  },
  {
    href: "https://github.com/Chinthana7858",
    label: "GitHub profile",
    icon: AiFillGithub,
  },
  {
    href: "mailto:chinthanaprabhashitha@gmail.com",
    label: "Send an email",
    icon: BiLogoGmail,
  },
  {
    href: "https://wa.me/94711700404",
    label: "WhatsApp",
    icon: FaSquareWhatsapp,
    external: true,
  },
];
