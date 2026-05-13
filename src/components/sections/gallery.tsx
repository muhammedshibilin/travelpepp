'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200&auto=format&fit=crop',
    title: 'Serene Kashmir',
    span: 'col-span-1 row-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200&auto=format&fit=crop',
    title: 'Kerala Backwaters',
    span: 'col-span-2 row-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    title: 'Royal Rajasthan',
    span: 'col-span-1 row-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1587474260584-1f20d4296c06?q=80&w=1200&auto=format&fit=crop',
    title: 'Majestic India',
    span: 'col-span-1 row-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop',
    title: 'Golden Goa',
    span: 'col-span-1 row-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop',
    title: 'Spiritual Varanasi',
    span: 'col-span-2 row-span-1',
  },
];

function GalleryItem({ url, title, span, index }: { url: string; title: string; span: string; index: number }) {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
      className={cn(
        "relative group overflow-hidden rounded-[2rem] bg-brand-black cursor-pointer shadow-2xl",
        span
      )}
    >
      <motion.div style={{ y }} className="relative h-full w-full">
        <Image
          src={url}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </motion.div>
      
      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
      <div className="absolute inset-0 border-2 border-brand-gold/0 transition-all duration-500 group-hover:border-brand-gold/40 m-4 rounded-[1.5rem]" />

      <div className="absolute bottom-8 left-8 right-8">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold mb-1 block opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          Cinematic
        </span>
        <h4 className="text-2xl font-black text-white uppercase tracking-tighter opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 delay-100">
          {title}
        </h4>
      </div>

      {/* Glass Badge */}
      <div className="absolute top-8 left-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="text-[8px] font-black uppercase tracking-widest text-white">View Moment</span>
      </div>
    </motion.div>
  );
}

export function Gallery() {
  return (
    <section className="py-32 bg-white dark:bg-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-gold mb-4 block">
              Immersive Moments
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-brand-blue dark:text-white uppercase leading-[0.9]">
              OUR TRAVEL <span className="text-brand-gold">GALLERY</span>
            </h2>
            <p className="mt-6 text-lg font-medium text-brand-black/50 dark:text-white/50 max-w-2xl mx-auto">
              Visual stories from the most breathtaking corners of India. Every frame captured to inspire your next great adventure.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {images.map((img, index) => (
            <GalleryItem key={index} {...img} index={index} />
          ))}
        </div>

        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-20 flex justify-center"
        >
            <button className="h-16 px-12 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-blue dark:text-brand-gold dark:border-brand-gold/20 font-black uppercase tracking-[0.2em] text-sm hover:bg-brand-blue hover:text-white dark:hover:bg-brand-gold dark:hover:text-brand-black transition-all duration-300">
                Launch Full Gallery
            </button>
        </motion.div>
      </div>
    </section>
  );
}
