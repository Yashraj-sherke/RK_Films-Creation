"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Calendar,
  User,
  Mail,
  Phone,
  MapPin,
  DollarSign,
  FileText,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/data";

export function BookingPageClient() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", eventType: "",
    eventDate: "", location: "", budget: "", notes: "",
  });

  const updateField = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-black px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 mx-auto mb-6 border border-gold rounded-full flex items-center justify-center">
            <CheckCircle size={36} className="text-gold" />
          </div>
          <h1 className="font-display text-4xl text-warm-white mb-4">
            Booking Received!
          </h1>
          <p className="text-warm-white/50 mb-2">
            Thank you, <span className="text-gold">{form.name}</span>. We&apos;ve
            received your inquiry.
          </p>
          <p className="text-warm-white/40 text-sm mb-8">
            Our team will contact you within 24 hours to confirm your session.
          </p>
          <Link href="/" className="btn-gold">Back to Home</Link>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black-medium via-black to-black" />
        <div className="relative z-10 text-center px-6">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-accent text-[11px] tracking-[5px] uppercase text-gold mb-4">
            Start Your Journey
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="font-display text-5xl md:text-7xl text-warm-white">
            Book a Session
          </motion.h1>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-black">
        <div className="container-luxury max-w-3xl">
          {/* Progress */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-12">
            {[1, 2].map((s) => (
              <div key={s} className="flex items-center gap-2 sm:gap-3">
                <div className={`w-8 h-8 flex items-center justify-center text-sm font-accent ${
                  step >= s ? "bg-gold text-black" : "border border-white/20 text-warm-white/40"
                }`}>{s}</div>
                <span className={`text-[11px] font-accent tracking-[1px] uppercase hidden sm:block ${
                  step >= s ? "text-gold" : "text-warm-white/30"
                }`}>{s === 1 ? "Event Details" : "Your Info"}</span>
                {s < 2 && <div className="w-12 h-[1px] bg-white/10" />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                className="space-y-6">
                <h2 className="font-display text-2xl text-warm-white mb-6">
                  Tell Us About Your Event
                </h2>
                <div>
                  <label className="block text-[11px] font-accent tracking-[2px] uppercase text-warm-white/40 mb-2">
                    Event Type *
                  </label>
                  <select required value={form.eventType}
                    onChange={(e) => updateField("eventType", e.target.value)}
                    className="form-input">
                    <option value="" className="bg-black">Select event type</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.id} className="bg-black">{s.title}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-accent tracking-[2px] uppercase text-warm-white/40 mb-2">
                      Event Date *
                    </label>
                    <input type="date" required value={form.eventDate}
                      onChange={(e) => updateField("eventDate", e.target.value)}
                      className="form-input" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-accent tracking-[2px] uppercase text-warm-white/40 mb-2">
                      Location *
                    </label>
                    <input type="text" required value={form.location} placeholder="City or venue"
                      onChange={(e) => updateField("location", e.target.value)}
                      className="form-input" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-accent tracking-[2px] uppercase text-warm-white/40 mb-2">
                    Estimated Budget
                  </label>
                  <select value={form.budget}
                    onChange={(e) => updateField("budget", e.target.value)}
                    className="form-input">
                    <option value="" className="bg-black">Select budget range</option>
                    <option value="under-25k" className="bg-black">Under ₹25,000</option>
                    <option value="25k-50k" className="bg-black">₹25,000 - ₹50,000</option>
                    <option value="50k-1l" className="bg-black">₹50,000 - ₹1,00,000</option>
                    <option value="1l-2l" className="bg-black">₹1,00,000 - ₹2,00,000</option>
                    <option value="above-2l" className="bg-black">Above ₹2,00,000</option>
                  </select>
                </div>
                <button type="button" onClick={() => setStep(2)} className="btn-gold">
                  Next Step <ArrowRight size={14} />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                className="space-y-6">
                <h2 className="font-display text-2xl text-warm-white mb-6">
                  Your Contact Details
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-accent tracking-[2px] uppercase text-warm-white/40 mb-2">
                      Full Name *
                    </label>
                    <input type="text" required value={form.name} placeholder="Your name"
                      onChange={(e) => updateField("name", e.target.value)}
                      className="form-input" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-accent tracking-[2px] uppercase text-warm-white/40 mb-2">
                      Phone *
                    </label>
                    <input type="tel" required value={form.phone} placeholder="+91 98765 43210"
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="form-input" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-accent tracking-[2px] uppercase text-warm-white/40 mb-2">
                    Email *
                  </label>
                  <input type="email" required value={form.email} placeholder="your@email.com"
                    onChange={(e) => updateField("email", e.target.value)}
                    className="form-input" />
                </div>
                <div>
                  <label className="block text-[11px] font-accent tracking-[2px] uppercase text-warm-white/40 mb-2">
                    Additional Notes
                  </label>
                  <textarea rows={4} value={form.notes} placeholder="Tell us more about your vision..."
                    onChange={(e) => updateField("notes", e.target.value)}
                    className="form-input resize-none" />
                </div>
                <div className="flex gap-4">
                  <button type="button" onClick={() => setStep(1)} className="btn-outline">Back</button>
                  <button type="submit" className="btn-gold flex-1 justify-center">
                    <Send size={14} /> Submit Booking
                  </button>
                </div>
              </motion.div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
