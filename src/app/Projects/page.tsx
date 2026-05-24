import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected software, web, mobile, and IoT projects by Chinthana Rajapaksha.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
