"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle, Star, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { services } from "@/lib/data";

type Service = (typeof services)[number];

export function ServiceDetailClient({ service }: { service: Service }) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const galleryImages = service.gallery || [];

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const nextImage = () => {
    if (lightbox !== null) setLightbox((lightbox + 1) % galleryImages.length);
  };
  const prevImage = () => {
    if (lightbox !== null)
      setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${service.image}')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 container-luxury pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-accent text-[11px] tracking-[5px] uppercase text-gold mb-4">
              {service.tagline}
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-warm-white mb-4">
              {service.title}
            </h1>
            <p className="text-warm-white/50 max-w-xl text-lg">
              {service.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/booking" className="btn-gold">
                Book This Service <ArrowUpRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description & Features */}
      <section className="section-padding bg-black">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-accent text-[11px] tracking-[5px] uppercase text-gold mb-4">
                About This Service
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-warm-white mb-6">
                {service.title}
              </h2>
              <p className="text-warm-white/50 leading-relaxed text-base">
                {service.longDescription}
              </p>

              <div className="mt-8 p-6 glass border-glow">
                <p className="font-accent text-[11px] tracking-[3px] uppercase text-gold mb-2">
                  Starting From
                </p>
                <div className="font-display text-4xl animated-gradient-text inline-block">
                  {service.startingPrice}
                </div>
                <p className="text-warm-white/30 text-sm mt-1">
                  Custom packages available
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-accent text-[11px] tracking-[5px] uppercase text-gold mb-6">
                What&apos;s Included
              </p>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-4 text-warm-white/70"
                  >
                    <CheckCircle
                      size={18}
                      className="text-gold shrink-0"
                    />
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-gold fill-gold"
                  />
                ))}
                <span className="text-warm-white/40 text-sm ml-2">
                  5.0 from 50+ reviews
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cinematic Gallery */}
      {galleryImages.length > 0 && (
        <section className="section-padding bg-black-light noise-bg">
          <div className="container-luxury">
            <SectionHeading
              subtitle="Visual Stories"
              title={`${service.shortTitle} Gallery`}
              description={`A curated selection of our finest ${service.shortTitle.toLowerCase()} work. Every image tells a unique story.`}
            />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {galleryImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative overflow-hidden group cursor-pointer card-premium ${
                    i === 0 ? "row-span-2 col-span-1" : ""
                  }`}
                  onClick={() => openLightbox(i)}
                >
                  <div
                    className={`relative overflow-hidden ${
                      i === 0 ? "aspect-[3/4] md:aspect-[3/5]" : "aspect-[4/3]"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${service.title} gallery ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-[10px] font-accent tracking-[3px] uppercase text-gold">
                        {service.shortTitle}
                      </p>
                      <p className="font-display text-lg text-warm-white">
                        Shot {i + 1}
                      </p>
                    </div>
                    <div className="absolute top-3 right-3 w-8 h-8 bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white">
                      <Maximize2 size={14} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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
              key={galleryImages[lightbox]}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={galleryImages[lightbox]}
              alt={`${service.title} gallery`}
              className="max-w-[90vw] max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-[10px] font-accent tracking-[3px] uppercase text-gold">
                {service.shortTitle} Gallery
              </p>
              <p className="font-display text-lg text-white">
                {service.title}
              </p>
              <p className="text-white/30 text-xs mt-1">
                {lightbox + 1} / {galleryImages.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-24 bg-black-light light-sweep">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-accent text-[11px] tracking-[5px] uppercase text-gold mb-4">
              Ready to Begin?
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-warm-white mb-6">
              Book Your {service.shortTitle} Session
            </h2>
            <p className="text-warm-white/50 max-w-md mx-auto mb-10">
              Let&apos;s create something extraordinary together. Get in touch
              to discuss your vision.
            </p>
            <Link href="/booking" className="btn-gold">
              Book Now <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
