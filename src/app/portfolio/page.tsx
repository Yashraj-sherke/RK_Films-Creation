import type { Metadata } from "next";
import { PortfolioPageClient } from "./PortfolioPageClient";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our curated collection of wedding, pre-wedding, maternity, product, and cinematic photography. Every image tells a story.",
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
