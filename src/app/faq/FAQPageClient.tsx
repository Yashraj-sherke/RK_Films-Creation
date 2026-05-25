"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/data";

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-white/5"
    >
      <button onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group">
        <span className="font-display text-lg text-warm-white group-hover:text-gold transition-colors pr-4">
          {question}
        </span>
        <span className={`text-gold text-xl transition-transform duration-300 shrink-0 ${isOpen ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      <motion.div initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden">
        <p className="pb-6 text-warm-white/50 leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
}

export function FAQPageClient() {
  return (
    <>
      <section className="relative h-[50vh] min-h-87.5 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-black-medium to-black" />
        <div className="relative z-10 text-center px-6">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-accent text-[11px] tracking-[5px] uppercase text-gold mb-4">
            Questions & Answers
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="font-display text-5xl md:text-7xl text-warm-white">
            FAQ
          </motion.h1>
        </div>
      </section>

      <section className="section-padding bg-black">
        <div className="container-luxury max-w-3xl">
          <SectionHeading
            subtitle="Questions & Answers"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our photography services, packages, and process."
          />
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} index={i} />
          ))}
        </div>
      </section>

      <section className="py-24 bg-black-light">
        <div className="container-luxury text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl text-warm-white mb-4">Still Have Questions?</h2>
            <p className="text-warm-white/50 max-w-md mx-auto mb-8">
              We&apos;re here to help. Contact us and we&apos;ll get back to you within 24 hours.
            </p>
            <Link href="/contact" className="btn-gold">
              Contact Us <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
