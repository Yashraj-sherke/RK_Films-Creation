import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with RK Photography. Send us a message, call us, or visit our studio. We'd love to hear about your project.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
