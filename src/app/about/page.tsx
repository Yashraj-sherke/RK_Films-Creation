import type { Metadata } from "next";
import { AboutPageClient } from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind RK Photography. Learn about our story, our passion for visual storytelling, and what makes us different.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
