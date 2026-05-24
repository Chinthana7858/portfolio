import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Chinthana Rajapaksha for software development opportunities, collaboration, or project discussions.",
};

export default function ContactPage() {
  return <ContactClient />;
}
