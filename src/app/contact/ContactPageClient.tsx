"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";

export function ContactPageClient() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: "", email: "", phone: "", subject: "", message: "" });
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
                "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')",
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
            Let&apos;s Connect
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-5xl md:text-7xl text-warm-white"
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-black">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-accent text-[11px] tracking-[5px] uppercase text-gold mb-4">
                Send a Message
              </p>
              <h2 className="font-display text-3xl text-warm-white mb-8">
                We&apos;d Love to Hear From You
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass p-10 text-center"
                >
                  <CheckCircle size={48} className="text-gold mx-auto mb-4" />
                  <h3 className="font-display text-2xl text-warm-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-warm-white/50">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-accent tracking-[2px] uppercase text-warm-white/40 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="form-input"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-accent tracking-[2px] uppercase text-warm-white/40 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="form-input"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-accent tracking-[2px] uppercase text-warm-white/40 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({ ...formState, phone: e.target.value })
                        }
                        className="form-input"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-accent tracking-[2px] uppercase text-warm-white/40 mb-2">
                        Subject *
                      </label>
                      <select
                        required
                        value={formState.subject}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            subject: e.target.value,
                          })
                        }
                        className="form-input"
                      >
                        <option value="" className="bg-black">
                          Select a topic
                        </option>
                        <option value="wedding" className="bg-black">
                          Wedding Photography
                        </option>
                        <option value="pre-wedding" className="bg-black">
                          Pre-Wedding Shoot
                        </option>
                        <option value="product" className="bg-black">
                          Product Photography
                        </option>
                        <option value="other" className="bg-black">
                          Other Inquiry
                        </option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-accent tracking-[2px] uppercase text-warm-white/40 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="form-input resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button type="submit" className="btn-gold w-full sm:w-auto">
                    <Send size={14} />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <p className="font-accent text-[11px] tracking-[5px] uppercase text-gold mb-6">
                  Contact Info
                </p>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Phone size={18} />,
                      label: "Phone",
                      value: "+91 7509208934",
                      href: "tel:+917509208934",
                    },
                    {
                      icon: <Mail size={18} />,
                      label: "Email",
                      value: "hello@rkphotography.com",
                      href: "mailto:hello@rkphotography.com",
                    },
                    {
                      icon: <MapPin size={18} />,
                      label: "Studio",
                      value: "123, Creative Lane, Bandra West, Mumbai 400050",
                      href: "#",
                    },
                    {
                      icon: <Clock size={18} />,
                      label: "Hours",
                      value: "Mon - Sat: 10 AM - 7 PM",
                      href: "#",
                    },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-black transition-all">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[11px] font-accent tracking-[2px] uppercase text-warm-white/40 mb-1">
                          {item.label}
                        </p>
                        <p className="text-warm-white group-hover:text-gold transition-colors text-sm">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="font-accent text-[11px] tracking-[5px] uppercase text-gold mb-4">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="5" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>, label: "Instagram" },
                    { icon: <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.93 29 29 0 0 0 .46-5.42 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>, label: "YouTube" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href="#"
                      className="w-10 h-10 border border-white/10 flex items-center justify-center text-warm-white/40 hover:text-gold hover:border-gold/50 transition-all"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="aspect-video min-h-[220px] bg-black-medium border border-white/5 flex items-center justify-center rounded-sm">
                <div className="text-center px-4">
                  <MapPin size={32} className="text-gold/30 mx-auto mb-3" />
                  <p className="text-warm-white/30 text-sm">
                    Interactive map loads here
                  </p>
                  <p className="text-warm-white/20 text-xs mt-1">
                    Mumbai, Maharashtra
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
