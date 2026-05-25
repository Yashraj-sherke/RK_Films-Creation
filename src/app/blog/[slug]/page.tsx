import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogDetailClient from './BlogDetailClient';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'wedding-photography-tips',
    title: '10 Essential Wedding Photography Tips for Your Perfect Day',
    excerpt:
      'Discover the secrets behind stunning wedding photography — from golden hour portraits to candid reception moments that tell your love story.',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
    date: 'May 18, 2026',
    readTime: '8 min read',
    author: 'Rahul Kale',
    category: 'Wedding',
  },
  {
    slug: 'pre-wedding-locations',
    title: 'Top Pre-Wedding Shoot Locations in Maharashtra',
    excerpt:
      'From the forts of Pune to the beaches of Konkan, explore the most photogenic pre-wedding locations that will make your album unforgettable.',
    image:
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80',
    date: 'May 10, 2026',
    readTime: '6 min read',
    author: 'Rahul Kale',
    category: 'Pre-Wedding',
  },
  {
    slug: 'choosing-photographer',
    title: 'How to Choose the Right Photographer for Your Event',
    excerpt:
      'Hiring a photographer is one of the most important decisions for any event. Learn what to look for, questions to ask, and red flags to avoid.',
    image:
      'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1200&q=80',
    date: 'April 28, 2026',
    readTime: '7 min read',
    author: 'Rahul Kale',
    category: 'Guides',
  },
  {
    slug: 'maternity-shoot-guide',
    title: 'The Ultimate Guide to a Beautiful Maternity Photoshoot',
    excerpt:
      'Celebrate the journey of motherhood with a photoshoot that captures grace, love, and anticipation. Here is everything you need to know.',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80',
    date: 'April 15, 2026',
    readTime: '5 min read',
    author: 'Rahul Kale',
    category: 'Maternity',
  },
  {
    slug: 'product-photography-ecommerce',
    title: 'Product Photography That Sells: An E-Commerce Guide',
    excerpt:
      'Great product photos can make or break your online store. Learn lighting techniques, styling, and editing tips for scroll-stopping images.',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80',
    date: 'March 30, 2026',
    readTime: '9 min read',
    author: 'Rahul Kale',
    category: 'Product',
  },
  {
    slug: 'camera-gear-2026',
    title: 'Best Camera Gear & Lenses for Professional Photography in 2026',
    excerpt:
      'From mirrorless bodies to prime lenses and lighting rigs — our curated list of must-have gear for every serious photographer this year.',
    image:
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&q=80',
    date: 'March 12, 2026',
    readTime: '10 min read',
    author: 'Rahul Kale',
    category: 'Gear & Tech',
  },
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found | RK Photography',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | RK Photography Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogDetailClient post={post} />;
}
