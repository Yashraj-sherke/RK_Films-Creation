import type { Metadata } from "next";
import { Playfair_Display, Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "RK Photography — Premium Cinematic Photography & Videography",
    template: "%s | RK Photography",
  },
  description:
    "Award-winning photography studio specializing in weddings, pre-wedding, maternity, product, and cinematic shoots. Book your luxury photography experience today.",
  keywords: [
    "photography",
    "wedding photography",
    "cinematic photography",
    "pre-wedding shoot",
    "maternity shoot",
    "product photography",
    "professional photographer",
    "luxury photography",
  ],
  authors: [{ name: "RK Photography" }],
  openGraph: {
    title: "RK Photography — Premium Cinematic Photography & Videography",
    description:
      "Award-winning photography studio specializing in weddings, pre-wedding, maternity, product, and cinematic shoots.",
    type: "website",
    locale: "en_IN",
    siteName: "RK Photography",
  },
  twitter: {
    card: "summary_large_image",
    title: "RK Photography — Premium Cinematic Photography",
    description:
      "Award-winning photography studio. Book your luxury photography experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${poppins.variable}`}
    >
      <body className="bg-black text-warm-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
