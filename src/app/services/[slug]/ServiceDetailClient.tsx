"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, CheckCircle, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { services } from "@/lib/data";

type Service = (typeof services)[number];

export function ServiceDetailClient({ service }: { service: Service }) {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 container-luxury pb-16">
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

      {/* Description */}
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

              <div className="mt-8 p-6 glass">
                <p className="font-accent text-[11px] tracking-[3px] uppercase text-gold mb-2">
                  Starting From
                </p>
                <div className="font-display text-4xl text-warm-white">
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

      {/* CTA */}
      <section className="py-24 bg-black-light">
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
