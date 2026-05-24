"use client";

import PageHeading from "@/Components/PageHeading";
import PageShell from "@/Components/PageShell";
import ProjectCard from "@/Components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsClient() {
  return (
    <PageShell bottomSpacerClassName="h-28">
      {({ dark }) => (
          <div className="basis-2/3">
            <div className="text-start">
              <PageHeading className="pb-10">Projects</PageHeading>
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    dark={dark}
                  />
                ))}
              </div>
            </div>
          </div>
      )}
    </PageShell>
  );
}
