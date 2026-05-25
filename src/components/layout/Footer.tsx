import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Heart,
} from "lucide-react";

function IconInstagram({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function IconYoutube({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.93 29 29 0 0 0 .46-5.42 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

function IconFacebook({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const footerServices = [
  { label: "Wedding Photography", href: "/services/wedding" },
  { label: "Pre-Wedding Shoot", href: "/services/pre-wedding" },
  { label: "Maternity Shoot", href: "/services/maternity" },
  { label: "Product Photography", href: "/services/product" },
  { label: "Cinematic Films", href: "/services/cinematic" },
  { label: "Event Coverage", href: "/services/event" },
];

const footerLinks = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

const socialLinks = [
  { icon: IconInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: IconYoutube, href: "https://youtube.com", label: "YouTube" },
  { icon: IconFacebook, href: "https://facebook.com", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="relative bg-black-light border-t border-white/5 footer-texture pt-10 pb-10">
      {/* CTA Banner */}
      <div className="relative overflow-hidden pb-12 md:pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-gold/10" />
        <div className="container-luxury pt-28 pb-28 md:pt-32 md:pb-32 lg:pt-36 lg:pb-36 text-center relative z-10 flex flex-col items-center">
          <p className="font-accent text-[11px] tracking-[5px] uppercase text-gold mb-5 mx-auto max-w-3xl text-center cta-fade-up-1">
            Ready to Create Something Beautiful?
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-warm-white mb-6 text-center max-w-4xl mx-auto cta-fade-up-2">
            Let&apos;s Tell Your Story
          </h2>
          <p className="text-warm-white/50 max-w-2xl mx-auto mb-12 font-light text-center cta-fade-up-3">
            Every love story deserves to be captured beautifully. Book your
            session and let&apos;s create timeless memories together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 cta-fade-up-4">
            <Link href="/booking" className="btn-gold">
              Book a Session
              <ArrowUpRight size={16} />
            </Link>
            <Link href="/portfolio" className="btn-outline">
              View Portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-luxury py-16 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 items-start">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="h-10 flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-gold/60 flex items-center justify-center shrink-0">
                <span className="font-display text-gold text-lg font-bold">
                  RK
                </span>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-display text-lg tracking-[3px] leading-tight">
                  RK PHOTOGRAPHY
                </h3>
                <p className="text-[9px] tracking-[4px] text-warm-white/40 uppercase font-accent leading-tight mt-0.5">
                  Since 2018
                </p>
              </div>
            </div>
            <p className="text-warm-white/40 text-sm leading-relaxed mb-6 max-w-sm">
              Crafting timeless visual stories with passion, precision, and a
              touch of cinematic magic. Every frame tells your unique story.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-warm-white/40 hover:text-gold hover:border-gold/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="h-10 flex flex-col justify-center mb-6">
              <h4 className="font-accent text-[11px] tracking-[3px] uppercase text-gold mb-3">
                Services
              </h4>
              <div className="h-px w-12 bg-gradient-to-r from-gold/60 to-transparent" />
            </div>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-warm-white/40 hover:text-gold transition-colors duration-200"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <div className="h-10 flex flex-col justify-center mb-6">
              <h4 className="font-accent text-[11px] tracking-[3px] uppercase text-gold mb-3">
                Quick Links
              </h4>
              <div className="h-px w-12 bg-gradient-to-r from-gold/60 to-transparent" />
            </div>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-white/40 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="h-10 flex flex-col justify-center mb-6">
              <h4 className="font-accent text-[11px] tracking-[3px] uppercase text-gold mb-3">
                Get in Touch
              </h4>
              <div className="h-px w-12 bg-gradient-to-r from-gold/60 to-transparent" />
            </div>
            <div className="space-y-4">
              <a
                href="tel:+917509208934"
                className="flex items-center gap-3 text-sm text-warm-white/40 hover:text-gold transition-colors"
              >
                <Phone size={14} className="shrink-0" />
                +91 7509208934
              </a>
              <a
                href="mailto:hello@rkphotography.com"
                className="flex items-center gap-3 text-sm text-warm-white/40 hover:text-gold transition-colors"
              >
                <Mail size={14} className="shrink-0" />
                hello@rkphotography.com
              </a>
              <div className="flex items-start gap-3 text-sm text-warm-white/40">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>Umranala,Chhindwara,MadhyaPradesh, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-luxury py-6 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-warm-white/30 font-accent tracking-[1px] text-center md:text-left">
            © {new Date().getFullYear()} RK Photography. All rights reserved.
          </p>
          <p className="text-[11px] text-warm-white/30 font-accent tracking-[1px] flex items-center gap-1">
            Crafted with <Heart size={10} className="text-gold" /> for
            storytellers
          </p>
        </div>
      </div>
    </footer>
  );
}
