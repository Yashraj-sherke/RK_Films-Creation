"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Wedding Shoot", href: "/services/wedding" },
      { label: "Pre-Wedding Shoot", href: "/services/pre-wedding" },
      { label: "Post-Wedding Shoot", href: "/services/post-wedding" },
      { label: "Birthday Shoot", href: "/services/birthday" },
      { label: "Maternity Shoot", href: "/services/maternity" },
      { label: "Product Shoot", href: "/services/product" },
      { label: "Ad Shoot", href: "/services/ad-shoot" },
      { label: "Cinematic Shoot", href: "/services/cinematic" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-strong py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-luxury flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-gold/60 flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                <span className="font-display text-gold text-lg font-bold">
                  RK
                </span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-display text-lg tracking-[3px] text-warm-white group-hover:text-gold transition-colors duration-300">
                  RK PHOTOGRAPHY
                </h1>
                <p className="text-[9px] tracking-[4px] text-warm-white/40 uppercase font-accent">
                  Cinematic Visuals
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() =>
                  link.submenu ? setActiveSubmenu(link.label) : null
                }
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-[13px] font-accent font-medium tracking-[1px] uppercase text-warm-white/70 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                  {link.submenu && <ChevronDown size={12} />}
                </Link>

                {/* Desktop Submenu */}
                {link.submenu && (
                  <AnimatePresence>
                    {activeSubmenu === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2 w-56"
                      >
                        <div className="glass-strong rounded-sm overflow-hidden shadow-2xl">
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="block px-5 py-3 text-[12px] font-accent tracking-[0.5px] text-warm-white/60 hover:text-gold hover:bg-white/5 transition-all duration-200 border-b border-white/5 last:border-0"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/booking"
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-gold text-black font-accent font-semibold text-[12px] tracking-[1.5px] uppercase hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
            >
              <Phone size={13} />
              Book Now
            </Link>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden relative z-10 p-2 text-warm-white hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-1 pt-20 overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="block py-3 font-display text-2xl tracking-[3px] text-warm-white/80 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.submenu && (
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 px-6 pb-2">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setIsMobileOpen(false)}
                          className="text-[11px] font-accent tracking-[1px] text-warm-white/40 hover:text-gold transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-6"
              >
                <Link
                  href="/booking"
                  onClick={() => setIsMobileOpen(false)}
                  className="btn-gold"
                >
                  Book a Shoot
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
