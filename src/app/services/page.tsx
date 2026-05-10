import type { Metadata } from "next";
import { ServicesPageClient } from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our premium photography and videography services — weddings, pre-wedding, maternity, product, cinematic films, and more.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
