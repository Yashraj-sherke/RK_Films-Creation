import type { Metadata } from "next";
import { BlogPageClient } from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Photography tips, behind-the-scenes stories, and inspiration from RK Photography. Stay updated with the latest trends.",
};

export default function BlogPage() {
  return <BlogPageClient />;
}
