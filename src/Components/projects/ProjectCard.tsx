import Image from "next/image";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  dark: boolean;
}

export default function ProjectCard({ project, dark }: ProjectCardProps) {
  const card = (
    <div
      className={`h-full rounded-lg border p-5 shadow-lg ${
        dark ? "bg-gray-800" : "bg-gray-100"
      }`}
    >
      <Image
        src={project.imageUrl}
        alt={project.title}
        width={900}
        height={560}
        sizes="(min-width: 768px) 50vw, 100vw"
        className="mb-5 aspect-[16/10] w-full rounded-lg object-cover"
      />
      <h3
        className={`mb-2 text-2xl font-semibold ${
          dark ? "text-teal-400" : "text-teal-600"
        }`}
      >
        {project.title}
      </h3>
      <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
        {project.year}
      </p>
      <p className={`text-base ${dark ? "text-gray-200" : "text-gray-700"}`}>
        {project.description}
      </p>
      <div className="mt-4">
        <h4
          className={`text-lg font-medium ${
            dark ? "text-teal-400" : "text-teal-600"
          }`}
        >
          Technologies Used:
        </h4>
        <ul
          className={`list-disc pl-5 ${
            dark ? "text-gray-200" : "text-gray-700"
          }`}
        >
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h4
          className={`text-lg font-medium ${
            dark ? "text-teal-400" : "text-teal-600"
          }`}
        >
          Role:
        </h4>
        <p className={dark ? "text-gray-200" : "text-gray-700"}>
          {project.role}
        </p>
      </div>
    </div>
  );

  return project.url ? (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition-transform duration-200 hover:scale-105"
    >
      {card}
    </a>
  ) : (
    card
  );
}
