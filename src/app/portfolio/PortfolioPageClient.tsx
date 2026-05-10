"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { portfolioCategories } from "@/lib/data";

const portfolioItems = [
  { id: 1, src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80", category: "Weddings", title: "Royal Celebration", orientation: "portrait" },
  { id: 2, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80", category: "Pre-Wedding", title: "Sunset Romance", orientation: "landscape" },
  { id: 3, src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80", category: "Maternity", title: "Radiant Glow", orientation: "portrait" },
  { id: 4, src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80", category: "Product", title: "Minimal Elegance", orientation: "landscape" },
  { id: 5, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80", category: "Weddings", title: "Eternal Vows", orientation: "landscape" },
  { id: 6, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", category: "Weddings", title: "Golden Hour", orientation: "portrait" },
  { id: 7, src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80", category: "Events", title: "Grand Gala", orientation: "landscape" },
  { id: 8, src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80", category: "Weddings", title: "Sacred Bond", orientation: "portrait" },
  { id: 9, src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80", category: "Fashion", title: "Haute Couture", orientation: "portrait" },
  { id: 10, src: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?w=800&q=80", category: "Cinematic", title: "Film Noir", orientation: "landscape" },
  { id: 11, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80", category: "Product", title: "Studio Light", orientation: "landscape" },
  { id: 12, src: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800&q=80", category: "Pre-Wedding", title: "Beach Love", orientation: "landscape" },
];

export function PortfolioPageClient() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const nextImage = () => {
    if (lightbox !== null) setLightbox((lightbox + 1) % filtered.length);
  };
  const prevImage = () => {
    if (lightbox !== null)
      setLightbox((lightbox - 1 + filtered.length) % filtered.length);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-accent text-[11px] tracking-[5px] uppercase text-gold mb-4"
          >
            Our Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-5xl md:text-7xl text-warm-white"
          >
            Portfolio
          </motion.h1>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-black border-b border-white/5 sticky top-0 z-30">
        <div className="container-luxury">
          <div className="flex flex-wrap justify-center gap-2">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 font-accent text-[11px] tracking-[2px] uppercase transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-gold text-black"
                    : "text-warm-white/50 hover:text-gold border border-white/10 hover:border-gold/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="section-padding bg-black">
        <div className="container-luxury">
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="break-inside-avoid relative group cursor-pointer overflow-hidden"
                  onClick={() => openLightbox(i)}
                >
                  <div
                    className={`relative overflow-hidden ${
                      item.orientation === "portrait"
                        ? "aspect-[3/4]"
                        : "aspect-[4/3]"
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-[10px] font-accent tracking-[3px] uppercase text-gold">
                        {item.category}
                      </p>
                      <h3 className="font-display text-xl text-warm-white">
                        {item.title}
                      </h3>
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white">
                      <Maximize2 size={14} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/60 hover:text-white z-10"
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 md:left-8 text-white/40 hover:text-white z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={36} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 md:right-8 text-white/40 hover:text-white z-10"
              aria-label="Next"
            >
              <ChevronRight size={36} />
            </button>
            <motion.img
              key={filtered[lightbox].id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={filtered[lightbox].src}
              alt={filtered[lightbox].title}
              className="max-w-[90vw] max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-[10px] font-accent tracking-[3px] uppercase text-gold">
                {filtered[lightbox].category}
              </p>
              <p className="font-display text-lg text-white">
                {filtered[lightbox].title}
              </p>
              <p className="text-white/30 text-xs mt-1">
                {lightbox + 1} / {filtered.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
