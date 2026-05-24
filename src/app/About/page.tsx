import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Skills, education, experience, achievements, and volunteer work of Chinthana Rajapaksha.",
};

export default function AboutPage() {
  return <AboutClient />;
}
