"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Award, Heart, Camera, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function AboutPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-accent text-[11px] tracking-[5px] uppercase text-gold mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-5xl md:text-7xl text-warm-white"
          >
            About Us
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-black">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <div
                  className="aspect-[4/5] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80')",
                  }}
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/30 flex items-center justify-center bg-black z-10">
                  <div className="text-center">
                    <span className="font-display text-3xl text-gold block">12+</span>
                    <span className="text-[9px] font-accent tracking-[2px] uppercase text-warm-white/40">
                      Years
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="font-accent text-[11px] tracking-[5px] uppercase text-gold mb-4">
                The Beginning
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-warm-white mb-6">
                A Passion Turned into Purpose
              </h2>
              <div className="space-y-4 text-warm-white/50 leading-relaxed">
                <p>
                  What started as a childhood fascination with capturing moments
                  has evolved into one of the most sought-after photography
                  studios in the region. RK Photography was born from a simple
                  belief: every moment deserves to be remembered beautifully.
                </p>
                <p>
                  Founded in 2012, we&apos;ve grown from a one-person passion
                  project into a full-service creative studio, serving over 500
                  families and brands. Our journey has been fueled by an
                  unwavering commitment to artistic excellence and client
                  satisfaction.
                </p>
                <p>
                  Today, we blend cinematic storytelling with cutting-edge
                  technology to create visual narratives that stand the test of
                  time. Each project is approached with fresh eyes, deep
                  empathy, and relentless attention to detail.
                </p>
              </div>
              <div className="gold-line mt-8" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-black-light">
        <div className="container-luxury">
          <SectionHeading
            subtitle="Our Values"
            title="What Drives Us"
            description="These core values guide every frame we capture and every client relationship we build."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart size={28} />,
                title: "Passion",
                description:
                  "Photography isn't just our profession — it's our calling. We pour heart and soul into every project.",
              },
              {
                icon: <Camera size={28} />,
                title: "Artistry",
                description:
                  "We push creative boundaries to deliver images that are not just photographs, but works of art.",
              },
              {
                icon: <Users size={28} />,
                title: "Connection",
                description:
                  "Building genuine relationships with our clients allows us to capture authentic, meaningful moments.",
              },
              {
                icon: <Award size={28} />,
                title: "Excellence",
                description:
                  "We never settle for good enough. Every detail is refined until it exceeds expectations.",
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-8 glass hover:border-gold/20 transition-all duration-500 card-premium"
              >
                <div className="w-14 h-14 mx-auto mb-5 border border-gold/30 flex items-center justify-center text-gold">
                  {value.icon}
                </div>
                <h3 className="font-display text-xl text-warm-white mb-3">
                  {value.title}
                </h3>
                <p className="text-warm-white/40 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-black border-y border-white/5">
        <div className="container-luxury">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={500} suffix="+" label="Projects Completed" />
            <AnimatedCounter end={12} suffix="+" label="Years Experience" />
            <AnimatedCounter end={50} suffix="K+" label="Photos Delivered" />
            <AnimatedCounter end={15} suffix="+" label="Awards Won" />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-black">
        <div className="container-luxury">
          <SectionHeading
            subtitle="The Creatives"
            title="Meet Our Team"
            description="A passionate team of visual artists dedicated to capturing your most precious moments."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Raj Kumar",
                role: "Lead Photographer & Founder",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
              },
              {
                name: "Priya Sharma",
                role: "Senior Photographer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
              },
              {
                name: "Arjun Patel",
                role: "Cinematographer & Editor",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
              },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <h3 className="font-display text-xl text-warm-white">
                  {member.name}
                </h3>
                <p className="text-gold text-[11px] font-accent tracking-[2px] uppercase mt-1">
                  {member.role}
                </p>
              </motion.div>
            ))}
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
              Let&apos;s Work Together
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-warm-white mb-6">
              Ready to Create Magic?
            </h2>
            <Link href="/booking" className="btn-gold">
              Book a Session <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
