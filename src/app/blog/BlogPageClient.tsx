"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";

const blogPosts = [
  {
    slug: "wedding-photography-tips",
    title: "10 Tips for Stunning Wedding Photography",
    excerpt: "Discover the secrets behind capturing magical wedding moments that couples will treasure forever.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    date: "May 5, 2026",
    readTime: "5 min read",
    author: "Raj Kumar",
    category: "Tips",
  },
  {
    slug: "pre-wedding-locations",
    title: "Best Pre-Wedding Shoot Locations in India",
    excerpt: "From the palaces of Rajasthan to the beaches of Goa — the most photogenic spots for your love story.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    date: "Apr 28, 2026",
    readTime: "7 min read",
    author: "Priya Sharma",
    category: "Inspiration",
  },
  {
    slug: "choosing-photographer",
    title: "How to Choose the Right Photographer for Your Event",
    excerpt: "A comprehensive guide to finding the perfect photographer who matches your style and vision.",
    image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80",
    date: "Apr 15, 2026",
    readTime: "6 min read",
    author: "Raj Kumar",
    category: "Guide",
  },
  {
    slug: "maternity-shoot-guide",
    title: "The Complete Guide to Maternity Photography",
    excerpt: "Everything you need to know about planning and enjoying your maternity photo session.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    date: "Apr 2, 2026",
    readTime: "8 min read",
    author: "Priya Sharma",
    category: "Guide",
  },
  {
    slug: "product-photography-ecommerce",
    title: "Product Photography That Drives E-Commerce Sales",
    excerpt: "Learn how professional product images can increase your conversion rates by up to 40%.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    date: "Mar 20, 2026",
    readTime: "4 min read",
    author: "Arjun Patel",
    category: "Business",
  },
  {
    slug: "camera-gear-2026",
    title: "Our Favorite Camera Gear for 2026",
    excerpt: "A look at the professional equipment we use to create stunning cinematic visuals.",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80",
    date: "Mar 10, 2026",
    readTime: "6 min read",
    author: "Arjun Patel",
    category: "Gear",
  },
];

export function BlogPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black-medium to-black" />
        <div className="relative z-10 text-center px-6">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-accent text-[11px] tracking-[5px] uppercase text-gold mb-4">
            Stories & Insights
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="font-display text-5xl md:text-7xl text-warm-white">
            Blog
          </motion.h1>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-black">
        <div className="container-luxury">
          {/* Featured */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="mb-16">
            <Link href={`/blog/${blogPosts[0].slug}`}>
              <div className="group grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/5 hover:border-gold/20 transition-all">
                <div className="relative h-64 lg:h-[400px] overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${blogPosts[0].image}')` }} />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12 bg-black-medium">
                  <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-[10px] font-accent tracking-[2px] uppercase w-fit mb-4">
                    {blogPosts[0].category}
                  </span>
                  <h2 className="font-display text-3xl text-warm-white group-hover:text-gold transition-colors mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-warm-white/50 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-warm-white/30 text-xs">
                    <span className="flex items-center gap-1"><User size={12} /> {blogPosts[0].author}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {blogPosts[0].readTime}</span>
                    <span>{blogPosts[0].date}</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, i) => (
              <motion.div key={post.slug} initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}>
                <Link href={`/blog/${post.slug}`}>
                  <div className="group border border-white/5 hover:border-gold/20 transition-all bg-black-medium h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url('${post.image}')` }} />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="inline-block px-2 py-0.5 bg-gold/10 text-gold text-[9px] font-accent tracking-[2px] uppercase mb-3">
                        {post.category}
                      </span>
                      <h3 className="font-display text-lg text-warm-white group-hover:text-gold transition-colors mb-2">
                        {post.title}
                      </h3>
                      <p className="text-warm-white/40 text-sm line-clamp-2 mb-4 flex-1">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-warm-white/30 text-xs">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1 text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                          Read <ArrowRight size={10} />
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
