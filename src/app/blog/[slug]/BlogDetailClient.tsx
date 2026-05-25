'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft,
  Clock,
  User,
  Calendar,
  ArrowUpRight,
  Share2,
  ChevronRight,
} from 'lucide-react';
import { useRef } from 'react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
}

/* ─── Related posts data ─── */
const relatedPostsMap: Record<string, { slug: string; title: string; image: string; category: string; date: string }[]> = {
  'wedding-photography-tips': [
    { slug: 'pre-wedding-locations', title: 'Top Pre-Wedding Shoot Locations in Maharashtra', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80', category: 'Pre-Wedding', date: 'May 10, 2026' },
    { slug: 'choosing-photographer', title: 'How to Choose the Right Photographer for Your Event', image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&q=80', category: 'Guides', date: 'April 28, 2026' },
    { slug: 'camera-gear-2026', title: 'Best Camera Gear & Lenses for Professional Photography in 2026', image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80', category: 'Gear & Tech', date: 'March 12, 2026' },
  ],
  'pre-wedding-locations': [
    { slug: 'wedding-photography-tips', title: '10 Essential Wedding Photography Tips for Your Perfect Day', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', category: 'Wedding', date: 'May 18, 2026' },
    { slug: 'choosing-photographer', title: 'How to Choose the Right Photographer for Your Event', image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&q=80', category: 'Guides', date: 'April 28, 2026' },
    { slug: 'maternity-shoot-guide', title: 'The Ultimate Guide to a Beautiful Maternity Photoshoot', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80', category: 'Maternity', date: 'April 15, 2026' },
  ],
  'choosing-photographer': [
    { slug: 'wedding-photography-tips', title: '10 Essential Wedding Photography Tips for Your Perfect Day', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', category: 'Wedding', date: 'May 18, 2026' },
    { slug: 'product-photography-ecommerce', title: 'Product Photography That Sells: An E-Commerce Guide', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80', category: 'Product', date: 'March 30, 2026' },
    { slug: 'camera-gear-2026', title: 'Best Camera Gear & Lenses for Professional Photography in 2026', image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80', category: 'Gear & Tech', date: 'March 12, 2026' },
  ],
  'maternity-shoot-guide': [
    { slug: 'wedding-photography-tips', title: '10 Essential Wedding Photography Tips for Your Perfect Day', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', category: 'Wedding', date: 'May 18, 2026' },
    { slug: 'pre-wedding-locations', title: 'Top Pre-Wedding Shoot Locations in Maharashtra', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80', category: 'Pre-Wedding', date: 'May 10, 2026' },
    { slug: 'choosing-photographer', title: 'How to Choose the Right Photographer for Your Event', image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&q=80', category: 'Guides', date: 'April 28, 2026' },
  ],
  'product-photography-ecommerce': [
    { slug: 'choosing-photographer', title: 'How to Choose the Right Photographer for Your Event', image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&q=80', category: 'Guides', date: 'April 28, 2026' },
    { slug: 'camera-gear-2026', title: 'Best Camera Gear & Lenses for Professional Photography in 2026', image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80', category: 'Gear & Tech', date: 'March 12, 2026' },
    { slug: 'wedding-photography-tips', title: '10 Essential Wedding Photography Tips for Your Perfect Day', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', category: 'Wedding', date: 'May 18, 2026' },
  ],
  'camera-gear-2026': [
    { slug: 'product-photography-ecommerce', title: 'Product Photography That Sells: An E-Commerce Guide', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80', category: 'Product', date: 'March 30, 2026' },
    { slug: 'choosing-photographer', title: 'How to Choose the Right Photographer for Your Event', image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&q=80', category: 'Guides', date: 'April 28, 2026' },
    { slug: 'wedding-photography-tips', title: '10 Essential Wedding Photography Tips for Your Perfect Day', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', category: 'Wedding', date: 'May 18, 2026' },
  ],
};

/* ─── Rich article content per slug ─── */
function getArticleContent(slug: string) {
  const content: Record<string, React.ReactNode> = {
    'wedding-photography-tips': (
      <>
        <p className="text-lg leading-relaxed text-white/80 mb-8">
          Your wedding day is one of the most significant milestones of your life, and the photographs taken that day will be treasured for generations. As a professional wedding photographer with over a decade of experience, I&apos;ve captured hundreds of celebrations — and I&apos;ve learned that the difference between good and extraordinary wedding photos often comes down to preparation, communication, and a keen eye for fleeting moments.
        </p>

        <h2 className="font-display text-2xl md:text-3xl text-white mt-12 mb-6">1. Embrace the Golden Hour</h2>
        <p className="text-lg leading-relaxed text-white/80 mb-8">
          The hour just after sunrise and just before sunset offers the most flattering, warm, and diffused light. Plan your couple portraits around this magical window. The soft golden tones naturally enhance skin, create beautiful rim lighting, and add a cinematic warmth that studio lights simply cannot replicate. Talk to your wedding planner to carve out 20–30 minutes during golden hour exclusively for portraits.
        </p>

        <h2 className="font-display text-2xl md:text-3xl text-white mt-12 mb-6">2. Tell a Story Through Candid Moments</h2>
        <p className="text-lg leading-relaxed text-white/80 mb-8">
          While posed shots are important for family albums, the real magic lies in the unscripted moments — the father wiping away a tear during the vidai, the bridesmaids laughing uncontrollably, or the couple stealing a quiet glance amidst the chaos. Train yourself to anticipate emotions, use a longer lens (70–200mm) to capture them without intrusion, and always keep one camera body ready for candids.
        </p>

        <blockquote className="border-l-4 border-[var(--gold)] pl-6 my-10 italic text-white/70 text-lg">
          &ldquo;The best wedding photographs are the ones that make you feel the love, laughter, and tears all over again — not just see them.&rdquo;
        </blockquote>

        <h2 className="font-display text-2xl md:text-3xl text-white mt-12 mb-6">3. Essential Tips for Flawless Results</h2>
        <ul className="space-y-4 mb-8">
          {[
            'Scout the venue at least one day before the wedding to identify the best backdrops, lighting angles, and potential obstacles.',
            'Always shoot in RAW format for maximum post-processing flexibility.',
            'Carry backup gear — a second camera body, extra batteries, and multiple memory cards are non-negotiable.',
            'Build a shot list with the couple beforehand, but remain flexible for spontaneous moments.',
            'Communicate with the videography team so you don\'t step into each other\'s frames.',
            'Use off-camera flash or reflectors for reception lighting to avoid harsh, unflattering on-camera flash.',
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-3 text-white/80 text-lg">
              <span className="text-[var(--gold)] font-bold mt-1">✦</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-display text-2xl md:text-3xl text-white mt-12 mb-6">Conclusion</h2>
        <p className="text-lg leading-relaxed text-white/80 mb-8">
          Great wedding photography blends technical skill with emotional intelligence. By mastering light, anticipating moments, and building a genuine connection with the couple, you can create an album that doesn&apos;t just document the day — it immortalizes the feelings. Whether you&apos;re a couple planning your big day or an aspiring photographer, these tips will help ensure every frame is worth a thousand words.
        </p>
      </>
    ),

    'pre-wedding-locations': (
      <>
        <p className="text-lg leading-relaxed text-white/80 mb-8">
          A pre-wedding photoshoot is your chance to celebrate your love story in a setting that reflects your personality as a couple. Maharashtra, with its stunning diversity of landscapes — from ancient hilltop forts to serene coastal stretches — offers some of the most breathtaking backdrops in India. Here are the locations that consistently deliver magical results.
        </p>

        <h2 className="font-display text-2xl md:text-3xl text-white mt-12 mb-6">Sinhagad Fort, Pune</h2>
        <p className="text-lg leading-relaxed text-white/80 mb-8">
          Perched at 4,300 feet, Sinhagad offers dramatic stone ramparts, misty valleys, and sweeping panoramas. During the monsoon season (July–September), the fort is cloaked in clouds and lush greenery, creating an ethereal, almost otherworldly atmosphere. The ancient stone walls and arched gateways provide a rustic, timeless quality that contrasts beautifully with modern styling.
        </p>

        <h2 className="font-display text-2xl md:text-3xl text-white mt-12 mb-6">Alibaug & Kashid Beach</h2>
        <p className="text-lg leading-relaxed text-white/80 mb-8">
          For couples who love the ocean, the Konkan coast delivers pristine white-sand beaches, crashing waves, and golden sunsets that rival any tropical destination. Kashid Beach, in particular, is less crowded than Goa and features dramatic rocky outcrops that add depth and texture to every frame. Pair a flowing gown with windswept hair against the sunset for truly cinematic shots.
        </p>

        <blockquote className="border-l-4 border-[var(--gold)] pl-6 my-10 italic text-white/70 text-lg">
          &ldquo;The location sets the stage, but it&apos;s the chemistry between the couple that makes a pre-wedding shoot truly unforgettable.&rdquo;
        </blockquote>

        <h2 className="font-display text-2xl md:text-3xl text-white mt-12 mb-6">More Must-Visit Locations</h2>
        <ul className="space-y-4 mb-8">
          {[
            'Lavasa — Italy-inspired lakeside town with colourful buildings and waterfront promenades.',
            'Lonavala & Khandala — Lush green valleys, waterfalls, and heritage bungalows during monsoon.',
            'Aga Khan Palace, Pune — Mughal architecture, manicured gardens, and historical grandeur.',
            'Malshej Ghat — Dramatic cliff edges with clouds rolling below; perfect for adventurous couples.',
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-3 text-white/80 text-lg">
              <span className="text-[var(--gold)] font-bold mt-1">✦</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-display text-2xl md:text-3xl text-white mt-12 mb-6">Conclusion</h2>
        <p className="text-lg leading-relaxed text-white/80 mb-8">
          Choosing the right location is half the battle. The other half is timing — early mornings and late afternoons yield the softest light. Coordinate your outfits with the colour palette of your chosen location, and work with a photographer who knows the terrain. With the right planning, your pre-wedding album will feel like a cinematic love story brought to life.
        </p>
      </>
    ),

    'choosing-photographer': (
      <>
        <p className="text-lg leading-relaxed text-white/80 mb-8">
          Whether it&apos;s a wedding, a brand launch, or a milestone celebration, your photographer is the one person responsible for preserving memories that will outlast the event itself. Yet many people make this decision based on price alone, which often leads to disappointment. Here&apos;s a comprehensive guide to hiring the right photographer — one whose vision aligns with yours.
        </p>

        <h2 className="font-display text-2xl md:text-3xl text-white mt-12 mb-6">Define Your Style First</h2>
        <p className="text-lg leading-relaxed text-white/80 mb-8">
          Before you start browsing portfolios, get clear on the aesthetic you want. Do you prefer dark and moody edits, bright and airy tones, or bold and vibrant colors? Browse Pinterest, Instagram, and wedding blogs to collect reference images. When you meet potential photographers, share these references — it&apos;ll help both of you determine if the fit is right. A photographer who specialises in documentary-style candids may not be the best choice if you want highly stylized, editorial shots.
        </p>

        <h2 className="font-display text-2xl md:text-3xl text-white mt-12 mb-6">Questions You Must Ask</h2>
        <ul className="space-y-4 mb-8">
          {[
            'Can I see a full gallery from a single event — not just the highlight reel?',
            'What\'s your backup plan if you fall ill or your equipment fails?',
            'How many hours of coverage are included, and what\'s the overtime rate?',
            'When will I receive the final edited photos, and in what format?',
            'Do you carry professional liability insurance?',
            'Will you be the one shooting, or will you send an associate?',
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-3 text-white/80 text-lg">
              <span className="text-[var(--gold)] font-bold mt-1">✦</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>

        <blockquote className="border-l-4 border-[var(--gold)] pl-6 my-10 italic text-white/70 text-lg">
          &ldquo;A great photographer doesn&apos;t just take pictures — they make you feel comfortable enough to be your authentic self in front of the camera.&rdquo;
        </blockquote>

        <h2 className="font-display text-2xl md:text-3xl text-white mt-12 mb-6">Red Flags to Watch For</h2>
        <p className="text-lg leading-relaxed text-white/80 mb-8">
          Be cautious of photographers who refuse to share a full event gallery (they may be cherry-picking their best shots), those who don&apos;t use contracts, or those with no backup equipment. A professional photographer will always be transparent about deliverables, timelines, and cancellation policies. Trust your gut — if the communication feels off before the event, it likely won&apos;t improve on the day.
        </p>

        <h2 className="font-display text-2xl md:text-3xl text-white mt-12 mb-6">Conclusion</h2>
        <p className="text-lg leading-relaxed text-white/80 mb-8">
          Investing in the right photographer is investing in your memories. Take your time, do your research, meet at least three photographers in person, and choose someone whose work genuinely moves you. The right partnership will result in images that you&apos;ll proudly display for a lifetime.
        </p>
      </>
    ),

    'maternity-shoot-guide': (
      <>
        <p className="text-lg leading-relaxed text-white/80 mb-8">
          A maternity photoshoot is a celebration of one of life&apos;s most beautiful transformations. It&apos;s a chance to honor the strength, grace, and anticipation that come with bringing new life into the world. Whether you prefer an intimate indoor session or an outdoor golden-hour shoot, the key is creating an environment where you feel confident, comfortable, and radiant.
        </p>

        <h2 className="font-display text-2xl md:text-3xl text-white mt-12 mb-6">When to Schedule Your Shoot</h2>
        <p className="text-lg leading-relaxed text-white/80 mb-8">
          The ideal window for a maternity photoshoot is between 28 and 36 weeks. At this stage, your bump is beautifully rounded and prominent, while you&apos;re still comfortable enough to move, pose, and enjoy the session. Book your photographer early — at least 4–6 weeks in advance — to secure your preferred date and allow time for wardrobe planning.
        </p>

        <h2 className="font-display text-2xl md:text-3xl text-white mt-12 mb-6">Styling Tips That Make a Difference</h2>
        <ul className="space-y-4 mb-8">
          {[
            'Choose form-fitting fabrics that highlight your silhouette — jersey, chiffon, and silk photograph beautifully.',
            'Solid colours and earth tones (ivory, dusty rose, sage, gold) create a timeless, elegant look.',
            'Flowing gowns and drapes add movement and drama to outdoor shoots.',
            'Keep accessories minimal — the focus should be on you and your bump.',
            'Professional hair and makeup make a noticeable difference in how polished the final images look.',
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-3 text-white/80 text-lg">
              <span className="text-[var(--gold)] font-bold mt-1">✦</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>

        <blockquote className="border-l-4 border-[var(--gold)] pl-6 my-10 italic text-white/70 text-lg">
          &ldquo;Maternity photography isn&apos;t just about the bump — it&apos;s about capturing the quiet strength and tender anticipation of becoming a parent.&rdquo;
        </blockquote>

        <h2 className="font-display text-2xl md:text-3xl text-white mt-12 mb-6">Including Your Partner & Family</h2>
        <p className="text-lg leading-relaxed text-white/80 mb-8">
          Some of the most emotional maternity photos include the partner — hands cradling the bump together, a gentle forehead kiss, or simply walking hand-in-hand. If you have older children, include them too; their curiosity and excitement make for incredibly heartwarming images. These shots add depth and context to the story you&apos;re telling.
        </p>

        <h2 className="font-display text-2xl md:text-3xl text-white mt-12 mb-6">Conclusion</h2>
        <p className="text-lg leading-relaxed text-white/80 mb-8">
          A maternity photoshoot is a gift to your future self and your child. Years from now, these images will remind you of the love, hope, and excitement you felt while waiting for your little one. Embrace every curve, every emotion, and trust your photographer to capture the beauty of this extraordinary chapter.
        </p>
      </>
    ),

    'product-photography-ecommerce': (
      <>
        <p className="text-lg leading-relaxed text-white/80 mb-8">
          In the world of e-commerce, your product photos are your storefront. Customers can&apos;t touch, feel, or try your products — they rely entirely on visuals to make purchasing decisions. Studies show that 75% of online shoppers consider product photography the most influential factor when deciding whether to buy. Here&apos;s how to create images that convert browsers into buyers.
        </p>

        <h2 className="font-display text-2xl md:text-3xl text-white mt-12 mb-6">Mastering Lighting for Product Shots</h2>
        <p className="text-lg leading-relaxed text-white/80 mb-8">
          Lighting is the single most important element in product photography. For clean, professional white-background shots, use a two-light softbox setup to eliminate harsh shadows. Position your key light at 45 degrees to the product and use a fill light or reflector on the opposite side to open up shadows. For lifestyle shots, natural window light can create a warm, aspirational mood — just avoid direct sunlight, which creates unflattering hard shadows.
        </p>

        <h2 className="font-display text-2xl md:text-3xl text-white mt-12 mb-6">Styling & Composition Essentials</h2>
        <ul className="space-y-4 mb-8">
          {[
            'Use a consistent background (white, grey, or branded) across your entire catalogue for a cohesive look.',
            'Show scale by including familiar objects or using the product in context (lifestyle imagery).',
            'Capture multiple angles — front, back, side, close-up detail, and in-use shots.',
            'Use a tripod for razor-sharp consistency and to maintain the same framing across products.',
            'Clean and style your product meticulously — fingerprints, dust, and wrinkles are magnified in photos.',
            'For reflective products (jewellery, glass), use a light tent or sweep to control reflections.',
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-3 text-white/80 text-lg">
              <span className="text-[var(--gold)] font-bold mt-1">✦</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>

        <blockquote className="border-l-4 border-[var(--gold)] pl-6 my-10 italic text-white/70 text-lg">
          &ldquo;Your product photo is your first impression — and on the internet, you rarely get a second one.&rdquo;
        </blockquote>

        <h2 className="font-display text-2xl md:text-3xl text-white mt-12 mb-6">Post-Processing for E-Commerce</h2>
        <p className="text-lg leading-relaxed text-white/80 mb-8">
          Editing is where good product photos become great. Colour-correct to ensure what the customer sees on screen matches the real product — colour accuracy builds trust. Batch-process your edits for consistency, and export at the resolution and aspect ratio your platform requires. For Amazon and Shopify, ensure your main image has a pure white background (#FFFFFF) to meet listing guidelines.
        </p>

        <h2 className="font-display text-2xl md:text-3xl text-white mt-12 mb-6">Conclusion</h2>
        <p className="text-lg leading-relaxed text-white/80 mb-8">
          Product photography is both an art and a science. Invest in proper lighting, develop a consistent style guide, and never underestimate the power of post-processing. When your images look professional, your brand looks professional — and that translates directly into higher conversion rates and fewer returns.
        </p>
      </>
    ),

    'camera-gear-2026': (
      <>
        <p className="text-lg leading-relaxed text-white/80 mb-8">
          The camera industry has never been more exciting. Mirrorless technology has matured dramatically, computational photography is pushing boundaries, and lens manufacturers are delivering optics that were science fiction a decade ago. Whether you&apos;re upgrading your kit or building one from scratch, here&apos;s our curated guide to the best professional camera gear available in 2026.
        </p>

        <h2 className="font-display text-2xl md:text-3xl text-white mt-12 mb-6">Top Camera Bodies</h2>
        <p className="text-lg leading-relaxed text-white/80 mb-8">
          The Sony A7R VI leads the pack with its 72MP sensor, 10fps burst shooting, and AI-driven autofocus that tracks eyes, animals, and vehicles with uncanny precision. For Canon shooters, the EOS R5 Mark II delivers stunning 8K video, exceptional dynamic range, and dual card slots for redundancy. Nikon&apos;s Z8 remains a phenomenal value proposition — offering Z9-level performance in a more compact body with a mechanical shutter option.
        </p>

        <h2 className="font-display text-2xl md:text-3xl text-white mt-12 mb-6">Must-Have Lenses</h2>
        <ul className="space-y-4 mb-8">
          {[
            '24-70mm f/2.8 — The workhorse zoom. Perfect for weddings, events, and editorial work. Every serious photographer needs one.',
            '70-200mm f/2.8 — The portrait and ceremony king. Provides flattering compression and buttery background blur.',
            '35mm f/1.4 — The street and documentary favourite. Wide enough for environmental context, fast enough for low light.',
            '85mm f/1.4 — The portrait prime. Renders skin beautifully and produces creamy, dreamy bokeh.',
            '100mm f/2.8 Macro — Essential for product detail shots, jewellery, and fine art close-ups.',
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-3 text-white/80 text-lg">
              <span className="text-[var(--gold)] font-bold mt-1">✦</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>

        <blockquote className="border-l-4 border-[var(--gold)] pl-6 my-10 italic text-white/70 text-lg">
          &ldquo;The best camera is the one you know inside out. Invest in learning your gear as much as you invest in buying it.&rdquo;
        </blockquote>

        <h2 className="font-display text-2xl md:text-3xl text-white mt-12 mb-6">Lighting & Accessories</h2>
        <p className="text-lg leading-relaxed text-white/80 mb-8">
          Beyond camera bodies and lenses, lighting can elevate your work dramatically. The Godox AD600 Pro remains the gold standard for off-camera flash — powerful, portable, and compatible with virtually every trigger system. Pair it with a large octabox for soft, wrap-around light. Don&apos;t overlook accessories: fast CFexpress cards (minimum 512GB), a reliable carbon-fibre tripod, and calibrated monitors for editing are all essential investments.
        </p>

        <h2 className="font-display text-2xl md:text-3xl text-white mt-12 mb-6">Conclusion</h2>
        <p className="text-lg leading-relaxed text-white/80 mb-8">
          Gear doesn&apos;t make the photographer, but the right tools remove friction and let your creativity flow. Prioritize bodies and lenses that suit your specific niche, invest in quality lighting, and always allocate budget for accessories that improve your workflow. The best investment, however, remains education — a skilled photographer with modest gear will always outperform an amateur with top-of-the-line equipment.
        </p>
      </>
    ),
  };

  return content[slug] || content['wedding-photography-tips'];
}

/* ─── Animation variants ─── */
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

export default function BlogDetailClient({ post }: { post: BlogPost }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  const related = relatedPostsMap[post.slug] || relatedPostsMap['wedding-photography-tips']!;

  return (
    <main className="bg-black min-h-screen">
      {/* ─── Breadcrumb ─── */}
      <motion.nav
        {...fadeUp}
        className="bg-black/80 backdrop-blur-xl border-b border-white/5 pt-24 pb-4"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-2 text-sm">
          <Link
            href="/blog"
            className="text-white/50 hover:text-[var(--gold)] transition-colors font-accent flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            Blog
          </Link>
          <ChevronRight className="w-3 h-3 text-white/30" />
          <span className="text-[var(--gold)] font-accent">{post.category}</span>
          <ChevronRight className="w-3 h-3 text-white/30" />
          <span className="text-white/50 font-accent truncate max-w-[200px]">
            {post.title}
          </span>
        </div>
      </motion.nav>

      {/* ─── Hero Section ─── */}
      <section ref={heroRef} className="relative h-[85vh] min-h-[600px] overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 lg:p-24">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-1.5 bg-[var(--gold)] text-black text-xs font-accent font-bold tracking-widest uppercase rounded-full mb-6"
            >
              {post.category}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8"
            >
              {post.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 text-white/60 text-sm font-accent"
            >
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 text-[var(--gold)]" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[var(--gold)]" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[var(--gold)]" />
                {post.readTime}
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Article Body ─── */}
      <section className="relative z-10 bg-black">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          {/* Share buttons */}
          <motion.div
            {...fadeUp}
            className="flex items-center gap-3 mb-12 pb-8 border-b border-white/10"
          >
            <Share2 className="w-4 h-4 text-[var(--gold)]" />
            <span className="text-white/40 text-sm font-accent mr-2">Share</span>
            {['Twitter', 'Facebook', 'LinkedIn', 'WhatsApp'].map((platform) => (
              <button
                key={platform}
                className="px-3 py-1.5 rounded-full border border-white/10 text-white/50 text-xs font-accent hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300"
              >
                {platform}
              </button>
            ))}
          </motion.div>

          {/* Article content */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {getArticleContent(post.slug)}
          </motion.article>

          {/* Tags / Share bottom */}
          <motion.div
            {...fadeUp}
            className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex flex-wrap gap-2">
              {[post.category, 'Photography', 'RK Photography'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full border border-white/10 text-white/40 text-xs font-accent"
                >
                  #{tag.replace(/\s+/g, '')}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Share2 className="w-4 h-4 text-white/30" />
              <span className="text-white/30 text-sm font-accent">Share this article</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Related Posts ─── */}
      <section className="bg-[var(--black-light)] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="font-accent text-[var(--gold)] text-sm tracking-[0.3em] uppercase block mb-4">
              Continue Reading
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-white">
              Related Articles
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((rPost, i) => (
              <motion.div
                key={rPost.slug}
                {...stagger}
                transition={{ ...stagger.transition, delay: i * 0.15 }}
              >
                <Link
                  href={`/blog/${rPost.slug}`}
                  className="group block rounded-2xl overflow-hidden bg-black/40 border border-white/5 hover:border-[var(--gold)]/30 transition-all duration-500"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={rPost.image}
                      alt={rPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-[var(--gold)] text-black text-xs font-accent font-bold tracking-wider uppercase rounded-full">
                      {rPost.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-white/40 text-xs font-accent mb-2">{rPost.date}</p>
                    <h3 className="font-display text-lg text-white group-hover:text-[var(--gold)] transition-colors duration-300 leading-snug">
                      {rPost.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 mt-4 text-[var(--gold)] text-sm font-accent group-hover:gap-2 transition-all duration-300">
                      Read More <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--gold)]/5 rounded-full blur-[150px]" />

        <motion.div
          {...fadeUp}
          className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        >
          <span className="font-accent text-[var(--gold)] text-sm tracking-[0.3em] uppercase block mb-6">
            Let&apos;s Create Together
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
            Ready to Book Your Session?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Transform your special moments into timeless art. Get in touch to discuss your vision and let&apos;s craft something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/booking" className="btn-gold px-8 py-4 text-sm tracking-wider">
              BOOK A SESSION
            </Link>
            <Link
              href="/portfolio"
              className="btn-outline px-8 py-4 text-sm tracking-wider flex items-center gap-2"
            >
              VIEW PORTFOLIO <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
