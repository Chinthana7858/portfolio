import {
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaReact,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiBlender,
  SiCanva,
  SiDart,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiJavascript,
  SiJupyter,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNetlify,
  SiPostman,
  SiScikitlearn,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { RiSoundcloudLine } from "react-icons/ri";
import type {
  SkillGroup,
  TextListItem,
  TimelineEntry,
} from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    title: "Front-End Development",
    skills: [
      { name: "React Js", icon: FaReact },
      { name: "React Native", icon: FaReact },
      { name: "Flutter", icon: SiFlutter },
      { name: "Next Js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
    ],
  },
  {
    title: "Back-End Development",
    skills: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "REST API", icon: RiSoundcloudLine },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Dart", icon: SiDart },
    ],
  },
  {
    title: "Toolbox",
    skills: [
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "scikit-learn", icon: SiScikitlearn },
      { name: "Jupyter", icon: SiJupyter },
      { name: "Netlify", icon: SiNetlify },
      { name: "Vercel", icon: SiVercel },
      { name: "Figma", icon: SiFigma },
      { name: "Adobe Photoshop", icon: SiAdobephotoshop },
      { name: "Blender", icon: SiBlender },
      { name: "Canva", icon: SiCanva },
    ],
  },
];

export const timelineEntries: TimelineEntry[] = [
   {
    title: "Venturit Inc",
    lines: [
      "Application Developer - 2025 August - Present"
    ],
  },
  {
    title: "Hasthiya IT",
    lines: [
      "Associate Software Engineer - 2024 June - January",
      "Software Engineer (Intern) - 2024 January - June",
    ],
  },
  {
    title: "University of Moratuwa, Sri Lanka",
    lines: ["B.Sc (Hons) Information Technology"],
  },
  {
    title: "Bandaranayake College, Gampaha",
    lines: [
      "Physical science stream",
      "Advanced level examination (2019)",
      "Combined Mathematics - A",
      "Physics - B",
      "Chemistry - B",
    ],
  },
  {
    title: "Other courses",
    lines: [
      "Certificate in Software Engineering (NIBM)",
      "React - the complete guide 2023 (Udemy)",
      "Web design for beginners (Open UOM)",
      "Cambridge English: Key (KET)",
    ],
  },
];

export const achievements: TextListItem[] = [
  {
    lines: ["President's Scout Award - Sri Lanka Scout Association (2017)"],
  },
  {
    lines: ["Colors Award - Bandaranayake College Gampaha (2018)"],
  },
];

export const volunteerExperience: TextListItem[] = [
  {
    title: "FIT Moments - University of Moratuwa",
    lines: ["Member of Photography and videography pillar (2023-2024)"],
  },
  {
    title: "Treasurer - Scout Group, Bandaranayake College",
    lines: [
      "(2017): Involved in organizing all-island scouting competitions and various scouting events by guiding over 400 scouts.",
    ],
  },
  {
    title: "Vice captain - Hiking Team, Bandaranayake College",
    lines: [
      "(2016-2017): Represented school hiking team for five consecutive years and led the team for 2 years. We won several competitions and were awarded as the best explorer.",
    ],
  },
];
