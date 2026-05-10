"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";

export function ServicesPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
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
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-5xl md:text-7xl text-warm-white"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-4 text-warm-white/50 max-w-md mx-auto"
          >
            Premium photography & videography crafted for every occasion
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-black">
        <div className="container-luxury">
          <div className="space-y-0">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
              >
                <Link href={`/services/${service.id}`}>
                  <div
                    className={`group grid grid-cols-1 lg:grid-cols-2 gap-0 border-b border-white/5 hover:bg-white/[0.02] transition-all duration-500 ${
                      i % 2 === 1 ? "lg:direction-rtl" : ""
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`relative h-64 lg:h-96 overflow-hidden ${
                        i % 2 === 1 ? "lg:order-2" : ""
                      }`}
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{
                          backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=70')`,
                        }}
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      <div className="absolute top-6 left-6 text-4xl">
                        {service.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center p-8 lg:p-16">
                      <p className="font-accent text-[11px] tracking-[4px] uppercase text-gold mb-3">
                        {service.tagline}
                      </p>
                      <h2 className="font-display text-3xl md:text-4xl text-warm-white group-hover:text-gold transition-colors duration-300 mb-4">
                        {service.title}
                      </h2>
                      <p className="text-warm-white/50 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-display text-2xl text-gold">
                          {service.startingPrice}
                          <span className="text-sm text-warm-white/30 ml-2">
                            onwards
                          </span>
                        </span>
                        <span className="flex items-center gap-2 text-gold text-[12px] font-accent tracking-[1px] uppercase group-hover:gap-4 transition-all duration-300">
                          Learn More <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
