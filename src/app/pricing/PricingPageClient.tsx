"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowUpRight, HelpCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pricingPlans, faqs } from "@/lib/data";
import { useState } from "react";

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-display text-lg text-warm-white group-hover:text-gold transition-colors pr-4">
          {question}
        </span>
        <span
          className={`text-gold transition-transform duration-300 shrink-0 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-warm-white/50 leading-relaxed text-sm">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

export function PricingPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black-medium via-black to-black" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-accent text-[11px] tracking-[5px] uppercase text-gold mb-4"
          >
            Investment
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-5xl md:text-7xl text-warm-white"
          >
            Pricing Plans
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-4 text-warm-white/50 max-w-md mx-auto"
          >
            Simple, transparent pricing for exceptional photography
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-black">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative p-8 md:p-10 border transition-all duration-500 hover:border-gold/30 h-full flex flex-col ${
                  plan.popular
                    ? "border-gold/40 bg-gold/[0.03] md:-mt-4 md:mb-0 md:py-12 pt-10"
                    : "border-white/5 bg-black-medium"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-black text-[10px] font-accent font-bold tracking-[2px] uppercase">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <p className="font-accent text-[11px] tracking-[3px] uppercase text-gold mb-2">
                    {plan.name}
                  </p>
                  <p className="text-warm-white/40 text-xs mb-6">
                    {plan.subtitle}
                  </p>
                  <div className="font-display text-5xl text-warm-white mb-1">
                    {plan.price}
                  </div>
                  <p className="text-warm-white/30 text-xs">{plan.period}</p>
                </div>
                <ul className="space-y-3 mb-10 flex-1">
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
                  className={`block text-center py-3.5 font-accent text-[12px] tracking-[1.5px] uppercase transition-all duration-300 mt-auto ${
                    plan.popular
                      ? "bg-gold text-black hover:bg-gold-light hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
                      : "border border-white/20 text-warm-white hover:border-gold hover:text-gold"
                  }`}
                >
                  Choose {plan.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10 text-warm-white/30 text-sm"
          >
            Need a custom package?{" "}
            <Link href="/contact" className="text-gold hover:underline">
              Contact us
            </Link>{" "}
            for a tailored quote.
          </motion.p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-black-light">
        <div className="container-luxury max-w-3xl">
          <SectionHeading
            subtitle="Have Questions?"
            title="Frequently Asked Questions"
          />
          <div>
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <HelpCircle size={32} className="text-gold mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-warm-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-warm-white/50 max-w-md mx-auto mb-8">
              We&apos;d love to hear from you. Reach out and let&apos;s discuss
              your photography needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-gold">
                Contact Us <ArrowUpRight size={16} />
              </Link>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
