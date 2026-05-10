import type { Metadata } from "next";
import { FAQPageClient } from "./FAQPageClient";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about our photography services, booking process, pricing, and delivery.",
};

export default function FAQPage() {
  return <FAQPageClient />;
}
