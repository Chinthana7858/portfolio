import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Portfolio of Chinthana Rajapaksha, a software developer focused on full-stack development and database design.",
};

export default function Home() {
  return <HomeClient />;
}
