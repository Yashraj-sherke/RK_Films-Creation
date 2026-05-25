import type { Metadata } from "next";
import { BookingPageClient } from "./BookingPageClient";

export const metadata: Metadata = {
  title: "Book a Session",
  description:
    "Book your premium photography or videography session with RK Photography. Fill out our simple form and we'll craft a custom experience for you.",
};

export default function BookingPage() {
  return <BookingPageClient />;
}
