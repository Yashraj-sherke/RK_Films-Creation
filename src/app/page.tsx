"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Play,
  Camera,
  Star,
  Quote,
  ArrowRight,
  ChevronRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import {
  services,
  testimonials,
  pricingPlans,
  processSteps,
  stats,
} from "@/lib/data";

/* ============================
   HERO SECTION
   ============================ */
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const particles = useMemo(() => {
    const mulberry32 = (seed: number) => {
      let t = seed;
      return () => {
        t += 0x6d2b79f5;
        let r = Math.imul(t ^ (t >>> 15), 1 | t);
        r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
        return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
      };
    };

    const rand = mulberry32(1337);
    return Array.from({ length: 20 }, () => {
      const left = rand() * 100;
      const top = 60 + rand() * 40;
      const yTravel = -(100 + rand() * 300);
      const xTravel = (rand() - 0.5) * 80;
      const duration = 4 + rand() * 6;
      const delay = rand() * 5;

      return {
        left: `${left}%`,
        top: `${top}%`,
        yTravel,
        xTravel,
        duration,
        delay,
      };
    });
  }, []);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background with parallax + zoom */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80')",
          }}
        />
      </motion.div>

      {/* Cinematic vignette */}
      <div className="absolute inset-0 z-10 pointer-events-none vignette" />

      {/* Floating gold particles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/40"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, particle.yTravel],
              x: [0, particle.xTravel],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 h-full flex flex-col items-center justify-center text-center container-luxury"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-[1px] w-8 bg-gold/50" />
          <p className="font-accent text-[11px] md:text-[12px] tracking-[4px] md:tracking-[6px] uppercase text-gold">
            Premium Photography & Cinematography
          </p>
          <div className="h-[1px] w-8 bg-gold/50" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] md:leading-[0.9] text-warm-white max-w-5xl"
        >
          We Capture
          <span className="block animated-gradient-text">Timeless</span>
          Moments
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 md:mt-8 max-w-lg text-warm-white/60 text-sm md:text-base lg:text-lg font-light leading-relaxed"
        >
          Every frame tells a story. Every story deserves to be told
          beautifully. Let us craft your visual legacy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link href="/booking" className="btn-gold">
            Book a Shoot
            <ArrowUpRight size={16} />
          </Link>
          <Link href="/portfolio" className="btn-outline">
            <Play size={14} />
            View Portfolio
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-accent tracking-[3px] uppercase text-warm-white/40">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border border-warm-white/20 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </motion.div>

      {/* Cinematic letterbox bars */}
      <div className="absolute top-0 left-0 right-0 h-[3%] bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[3%] bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
    </section>
  );
}

/* ============================
   MARQUEE SECTION
   ============================ */
function MarqueeSection() {
  const items = [
    "Wedding Photography",
    "✦",
    "Cinematic Films",
    "✦",
    "Pre-Wedding Shoots",
    "✦",
    "Product Photography",
    "✦",
    "Maternity Sessions",
    "✦",
    "Ad Films",
    "✦",
  ];

  return (
    <div className="py-6 border-y border-white/5 overflow-hidden bg-black-light">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`mx-6 font-accent text-sm tracking-[3px] uppercase ${
              item === "✦" ? "text-gold" : "text-warm-white/30"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============================
   SERVICES SECTION
   ============================ */
function ServicesSection() {
  return (
    <section className="section-padding bg-black relative noise-bg">
      <div className="container-luxury">
        <SectionHeading
          subtitle="Our Expertise"
          title="Crafted for Every Occasion"
          description="From intimate moments to grand celebrations, we bring artistry and passion to every shoot."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 8).map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link href={`/services/${service.id}`}>
                <div className="group relative overflow-hidden bg-black-medium border border-white/5 hover:border-gold/30 transition-all duration-500 h-full flex flex-col card-premium">
                  {/* Image */}
                  <div className="relative h-48 lg:h-52 overflow-hidden shrink-0">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url('${service.image}')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black-medium via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4 text-3xl">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display text-xl text-warm-white group-hover:text-gold transition-colors duration-300 mb-2">
                      {service.shortTitle}
                    </h3>
                    <p className="text-warm-white/40 text-sm leading-relaxed line-clamp-2 flex-1">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-gold text-[12px] font-accent tracking-[1px] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Explore <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="btn-outline inline-flex items-center gap-2"
          >
            View All Services <ChevronRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================
   PORTFOLIO PREVIEW
   ============================ */
function PortfolioPreview() {
  const portfolioImages = [
    {
      url: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80",
      title: "Royal Wedding",
      category: "Wedding",
    },
    {
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
      title: "Sunset Romance",
      category: "Pre-Wedding",
    },
    {
      url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
      title: "Radiant Glow",
      category: "Maternity",
    },
    {
      url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
      title: "Minimal Product",
      category: "Product",
    },
    {
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
      title: "Grand Celebration",
      category: "Wedding",
    },
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
      title: "Eternal Bond",
      category: "Wedding",
    },
  ];

  return (
    <section className="section-padding bg-black-light relative">
      <div className="container-luxury">
        <SectionHeading
          subtitle="Our Work"
          title="Selected Portfolio"
          description="A curated selection of our finest work. Each image is a testament to our passion for storytelling."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {portfolioImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer card-premium ${
                i === 0 || i === 5 ? "row-span-2" : ""
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${img.url}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className={`relative z-10 h-full flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                i === 0 || i === 5 ? "min-h-[400px] md:min-h-[564px]" : "min-h-[200px] md:min-h-[280px]"
              }`}>
                <p className="text-[10px] font-accent tracking-[3px] uppercase text-gold">
                  {img.category}
                </p>
                <h3 className="font-display text-xl text-warm-white">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/portfolio" className="btn-gold">
            View Full Portfolio <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================
   STATS SECTION
   ============================ */
function StatsSection() {
  return (
    <section className="section-padding bg-black border-y border-white/5 light-sweep">
      <div className="container-luxury">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================
   WHY CHOOSE US
   ============================ */
function WhyChooseUs() {
  const reasons = [
    {
      icon: <Camera size={28} />,
      title: "Cinematic Quality",
      description:
        "Professional-grade equipment and Hollywood-inspired techniques for breathtaking results.",
    },
    {
      icon: <Star size={28} />,
      title: "Award-Winning Team",
      description:
        "Our photographers have been recognized by industry leaders and trusted by 500+ happy clients.",
    },
    {
      icon: <Sparkles size={28} />,
      title: "Personalized Experience",
      description:
        "Every shoot is tailored to your unique story. We listen, plan, and deliver beyond expectations.",
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "Quick Turnaround",
      description:
        "Sneak peeks within 48 hours and full galleries delivered within 2-3 weeks, guaranteed.",
    },
  ];

  return (
    <section className="section-padding bg-ivory relative overflow-hidden">
      <div className="container-luxury">
        <SectionHeading
          subtitle="Why Us"
          title="The RK Difference"
          description="We don't just take photos — we craft visual stories that resonate with emotion and artistry."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-5 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                {reason.icon}
              </div>
              <h3 className="font-display text-xl text-black mb-3">
                {reason.title}
              </h3>
              <p className="text-black/50 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================
   TESTIMONIALS SECTION
   ============================ */
function TestimonialsSection() {
  return (
    <section className="section-padding bg-black relative overflow-hidden noise-bg">
      <div className="absolute top-20 right-20 text-[200px] text-white/[0.02] font-display leading-none select-none pointer-events-none">
        &ldquo;
      </div>
      <div className="container-luxury">
        <SectionHeading
          subtitle="Client Love"
          title="What Our Clients Say"
          description="The greatest compliment we receive is the trust and joy of our clients."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-8 hover:border-gold/20 transition-all duration-500 group card-premium"
            >
              <Quote
                size={24}
                className="text-gold/30 mb-4 group-hover:text-gold/60 transition-colors"
              />
              <p className="text-warm-white/60 text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold font-display text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-accent text-sm font-medium text-warm-white">
                    {t.name}
                  </p>
                  <p className="text-[11px] text-warm-white/40">{t.event}</p>
                </div>
              </div>
              <div className="flex gap-1 mt-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={12}
                    className="text-gold fill-gold"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================
   PROCESS SECTION
   ============================ */
function ProcessSection() {
  return (
    <section className="section-padding bg-black-light relative">
      <div className="container-luxury">
        <SectionHeading
          subtitle="How It Works"
          title="Our Simple Process"
          description="From first contact to final delivery, we make the experience seamless and enjoyable."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="w-24 h-24 mx-auto mb-6 border border-gold/30 rounded-full flex items-center justify-center bg-black-light relative z-10 border-glow">
                <span className="font-display text-3xl text-gold">
                  {step.step}
                </span>
              </div>
              <h3 className="font-display text-xl text-warm-white mb-3">
                {step.title}
              </h3>
              <p className="text-warm-white/40 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================
   PRICING PREVIEW
   ============================ */
function PricingPreview() {
  return (
    <section className="section-padding bg-black relative">
      <div className="container-luxury">
        <SectionHeading
          subtitle="Investment"
          title="Transparent Pricing"
          description="Premium quality photography at competitive rates. Choose the package that fits your story."
        />

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full items-stretch justify-items-center">
            {pricingPlans.map((plan, i) => (
              <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative p-8 border transition-all duration-500 hover:border-gold/30 flex flex-col h-full w-full max-w-sm card-premium ${
                plan.popular
                  ? "border-gold/40 bg-gold/[0.03] md:scale-[1.03] shadow-[0_0_40px_rgba(201,168,76,0.08)]"
                  : "border-white/5 bg-black-medium"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gold text-black text-[10px] font-accent font-bold tracking-[2px] uppercase whitespace-nowrap z-10">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-8">
                <p className="font-accent text-[11px] tracking-[3px] uppercase text-gold mb-2">
                  {plan.name}
                </p>
                <p className="text-warm-white/40 text-xs mb-4">
                  {plan.subtitle}
                </p>
                <div className="font-display text-4xl text-warm-white">
                  {plan.price}
                </div>
                <p className="text-warm-white/30 text-xs mt-1">{plan.period}</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-warm-white/60"
                  >
                    <CheckCircle size={14} className="text-gold shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/booking"
                className={`block text-center py-3 font-accent text-[12px] tracking-[1.5px] uppercase transition-all duration-300 mt-auto ${
                  plan.popular
                    ? "bg-gold text-black hover:bg-gold-light"
                    : "border border-white/20 text-warm-white hover:border-gold hover:text-gold"
                }`}
              >
                Get Started
              </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================
   INSTAGRAM / REELS SECTION
   ============================ */
function InstagramSection() {
  return (
    <section className="pt-24 pb-32 bg-black-light border-y border-white/5">
      <div className="container-luxury text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pb-6"
        >
          <p className="font-accent text-[11px] tracking-[5px] uppercase text-gold mb-4">
            Follow Our Journey
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-warm-white mb-4">
            @rkphotography
          </h2>
          <p className="text-warm-white/40 text-sm mb-10">
            Behind the scenes, latest shoots, and daily inspiration
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 py-4">
          {[
            "photo-1519741497674-611481863552",
            "photo-1606216794074-735e91aa2c92",
            "photo-1583939003579-730e3918a45a",
            "photo-1544005313-94ddf0286df2",
            "photo-1523275335684-37898b6baf30",
            "photo-1511285560929-80b456fea0bc",
          ].map((id, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="aspect-square relative overflow-hidden group cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/${id}?w=300&q=60')`,
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 pt-4"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            Follow on Instagram <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================
   MAIN HOME PAGE
   ============================ */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <PortfolioPreview />
      <StatsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ProcessSection />
      <PricingPreview />
      <InstagramSection />
    </>
  );
}
