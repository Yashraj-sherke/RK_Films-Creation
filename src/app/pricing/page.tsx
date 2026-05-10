import type { Metadata } from "next";
import { PricingPageClient } from "./PricingPageClient";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for our photography and videography services. Choose from Essential, Premium, or Luxury packages.",
};

export default function PricingPage() {
  return <PricingPageClient />;
}
