import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "Monkey Bird Travels",
    year: "2024",
    description:
      "Developed a multi-page travel agency website designed to showcase comprehensive travel packages, destinations, and services, enhancing online visibility and user engagement. Integrated EmailJS to facilitate seamless user interactions, improving communication and booking inquiries.",
    imageUrl: "https://i.imgur.com/DpxkFsf.jpg",
    technologies: ["Next.js", "Typescript", "Tailwind CSS", "EmailJs"],
    role: "Front-End Developer",
    url: "https://monkeybirdtravels.vercel.app/",
  },
  {
    title: "NK Builders",
    year: "2026",
    description:
      "Designed and developed a Learning Management System (LMS) to digitize school activities in Sri Lanka, enhancing efficiency in academic and administrative processes. Key features include user management, attendance tracking, document management, and a discussion forum, providing a seamless and interactive learning experience.",
    imageUrl: "https://i.imgur.com/5ensKrc.jpeg",
    technologies: ["Next.js", "Typescript", "Tailwind CSS", "EmailJs"],
     role: "Front-End Developer",
    url: "https://nkbuilders.lk",
  },
  {
    title: "Virtual School",
    year: "2023",
    description:
      "Designed and developed a Learning Management System (LMS) to digitize school activities in Sri Lanka, enhancing efficiency in academic and administrative processes. Key features include user management, attendance tracking, document management, and a discussion forum, providing a seamless and interactive learning experience.",
    imageUrl: "https://i.imgur.com/Xuv7Lrp.png",
    technologies: ["React", "Springboot", "Mongodb", "AWS S3"],
    role: "Full-Stack Developer / Team leader",
    url: "https://github.com/Chinthana7858/virtualschool",
  },
  {
    title: "IoT-based Air Quality Monitoring System",
    year: "2025",
    description:
      "Air quality monitoring system with a mobile app for real-time tracking, data visualization, and alerts. Measured temperature, humidity, eCO2, and TVOC, transmitting data via Wi-Fi to an MQTT-based server.",
    imageUrl: "https://i.imgur.com/5zzM7rt.jpg",
    technologies: ["Flutter", "MQTT", "PlatformIO", "C++", "Python"],
    role: "Mobile App Developer",
    url: "https://github.com/IN4300-Embedded-Systems-Project/B20_Group04",
  },
  {
    title: "The Travel Photographer (Personal project)",
    year: "2023",
    description:
      "Customizable web application featuring blogging capabilities, portfolio management, and an owner login system.",
    imageUrl: "https://i.imgur.com/QXSw96E.jpg",
    technologies: ["React", "Spring Boot", "Mongodb"],
    role: "Full-Stack Developer",
    url: "https://thetravelphotographer.netlify.app/",
  },
  {
    title: "Mind Healer",
    year: "2024",
    description:
      "Mobile application for diagnosing patients' mental disorders and providing solutions using artificial intelligence techniques.",
    imageUrl: "https://i.imgur.com/t7EiTjd.jpg",
    technologies: ["Flutter", "Firebase"],
    role: "Mobile App Developer",
    url: "https://github.com/Chinthana7858/mind_healer",
  },
];
