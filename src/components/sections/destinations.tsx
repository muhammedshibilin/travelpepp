'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

type Category = 'all' | 'domestic' | 'international';

interface Destination {
  name: string;
  country: string;
  tagline: string;
  description: string;
  image: string;
  category: 'domestic' | 'international';
}

const destinations: Destination[] = [
  // ── Domestic ──────────────────────────────────────────────────────────────
  {
    name: 'Kashmir',
    country: 'India',
    tagline: 'Paradise on Earth',
    description: 'Snow-crowned peaks, sapphire lakes, and a silence that speaks to the soul.',
    image: '/dest-kashmir.png',
    category: 'domestic',
  },
  {
    name: 'Leh Ladakh',
    country: 'India',
    tagline: 'Roof of the World',
    description: 'Barren moonscapes, Buddhist monasteries, and skies blazing with a million stars.',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2000&auto=format&fit=crop',
    category: 'domestic',
  },
  {
    name: 'Himachal Pradesh',
    country: 'India',
    tagline: 'Land of Gods',
    description: 'Apple orchards, cedar forests, and mountain towns perched above the clouds.',
    image: '/dest-manali.png',
    category: 'domestic',
  },
  {
    name: 'Uttarakhand',
    country: 'India',
    tagline: 'Devbhoomi',
    description: 'Sacred Himalayan temples, roaring rivers, and meadows of boundless spiritual peace.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000&auto=format&fit=crop',
    category: 'domestic',
  },
  {
    name: 'Meghalaya',
    country: 'India',
    tagline: 'Abode of Clouds',
    description: 'Living root bridges, emerald waterfalls, and valleys veiled in mystical mist.',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2000&auto=format&fit=crop',
    category: 'domestic',
  },
  {
    name: 'Rajasthan',
    country: 'India',
    tagline: 'Land of Kings',
    description: 'Majestic forts, golden desert dunes, and the timeless grandeur of Rajput heritage.',
    image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=2000&auto=format&fit=crop',
    category: 'domestic',
  },
  {
    name: 'Kerala',
    country: 'India',
    tagline: "God's Own Country",
    description: 'Timeless backwaters, lush spice trails, and golden sunsets over tranquil shores.',
    image: '/dest-kerala.png',
    category: 'domestic',
  },
  {
    name: 'Goa',
    country: 'India',
    tagline: 'Sun, Sand & Soul',
    description: 'Turquoise shores, vibrant nightlife, and Portuguese heritage at every corner.',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2000&auto=format&fit=crop',
    category: 'domestic',
  },
  {
    name: 'Andaman & Nicobar',
    country: 'India',
    tagline: 'Emerald Islands',
    description: 'Crystal-clear lagoons, vibrant coral reefs, and pristine beaches untouched by time.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2000&auto=format&fit=crop',
    category: 'domestic',
  },
  {
    name: 'Delhi & Agra',
    country: 'India',
    tagline: 'Heart of India',
    description: 'The eternal Taj Mahal, Mughal grandeur, and the vibrant pulse of modern India.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2000&auto=format&fit=crop',
    category: 'domestic',
  },
  {
    name: 'Sikkim',
    country: 'India',
    tagline: 'Himalayan Jewel',
    description: 'Rhododendron forests, ancient monasteries, and Kanchenjunga on the horizon.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop',
    category: 'domestic',
  },
  {
    name: 'Lakshadweep',
    country: 'India',
    tagline: 'Tropical Utopia',
    description: 'Untouched coral atolls, lagoons of impossible blue, and absolute island serenity.',
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=2000&auto=format&fit=crop',
    category: 'domestic',
  },
  {
    name: 'Punjab',
    country: 'India',
    tagline: 'Land of Five Rivers',
    description: "The Golden Temple's divine glow, rich harvest fields, and legendary Punjabi hospitality.",
    image: 'https://images.unsplash.com/photo-1609948543911-7aa0d1df5d20?q=80&w=2000&auto=format&fit=crop',
    category: 'domestic',
  },
  {
    name: 'Sonamarg',
    country: 'India',
    tagline: 'Meadow of Gold',
    description: 'Pristine glaciers and alpine meadows draped in eternal golden morning light.',
    image: '/hero-bg.png',
    category: 'domestic',
  },
  // ── International ────────────────────────────────────────────────────────
  {
    name: 'Malaysia',
    country: 'Malaysia',
    tagline: 'Truly Asia',
    description: 'Twin towers, tropical rainforests, and a melting pot of vibrant Asian cultures.',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f11?q=80&w=2000&auto=format&fit=crop',
    category: 'international',
  },
  {
    name: 'Singapore',
    country: 'Singapore',
    tagline: 'Lion City',
    description: 'Futuristic gardens, Michelin-starred hawker stalls, and seamless luxury at scale.',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2000&auto=format&fit=crop',
    category: 'international',
  },
  {
    name: 'Thailand',
    country: 'Thailand',
    tagline: 'Land of Smiles',
    description: 'Ancient temples, exotic cuisine, and island escapes that live rent-free in memory.',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2000&auto=format&fit=crop',
    category: 'international',
  },
  {
    name: 'Vietnam',
    country: 'Vietnam',
    tagline: 'Rising Dragon',
    description: 'Emerald Ha Long Bay, lantern-lit Hoi An streets, and flavours that defy description.',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2000&auto=format&fit=crop',
    category: 'international',
  },
  {
    name: 'Bali',
    country: 'Indonesia',
    tagline: 'Island of Gods',
    description: 'Terraced rice paddies, sacred temples, and serene spa retreats in the tropics.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2000&auto=format&fit=crop',
    category: 'international',
  },
  {
    name: 'Maldives',
    country: 'Maldives',
    tagline: 'Ocean Paradise',
    description: 'Overwater villas, crystal lagoons, and coral reefs teeming with vivid marine life.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000&auto=format&fit=crop',
    category: 'international',
  },
  {
    name: 'Kazakhstan',
    country: 'Kazakhstan',
    tagline: 'Heart of Eurasia',
    description: 'Vast steppes, alpine lakes of electric blue, and a frontier that feels like the edge of the world.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000&auto=format&fit=crop',
    category: 'international',
  },
];

// ── Filter config ──────────────────────────────────────────────────────────────
const FILTERS: { label: string; value: Category }[] = [
  { label: 'All Destinations', value: 'all' },
  { label: '🇮🇳 Domestic', value: 'domestic' },
  { label: '✈️ International', value: 'international' },
];

// ── Card ───────────────────────────────────────────────────────────────────────
function DestCard({ dest, index }: { dest: Destination; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
      className="group relative h-[440px] overflow-hidden rounded-[2rem] bg-black shadow-2xl cursor-pointer"
      onClick={() => window.open('https://wa.me/918547069562', '_blank')}
    >
      <Image
        src={dest.image}
        alt={dest.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Category badge */}
      <div className="absolute top-6 right-6 rounded-full bg-black/30 backdrop-blur-md border border-white/15 px-4 py-1.5">
        <span className="text-[9px] font-black uppercase tracking-[0.35em] text-white/80">
          {dest.category === 'domestic' ? '🇮🇳 India' : '✈️ International'}
        </span>
      </div>

      {/* Text content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-px w-6 bg-[#D4AF37]" />
          <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-[#D4AF37]">
            {dest.tagline}
          </span>
        </div>

        <h3 className="text-3xl font-black text-white uppercase tracking-tight leading-none mb-1">
          {dest.name}
        </h3>
        <span className="text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-4 block">
          {dest.country}
        </span>

        <p className="text-sm text-white/60 leading-relaxed max-w-xs mb-6 opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          {dest.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-2.5 text-xs font-bold text-black opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
            Book via WhatsApp
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-500 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37]">
            <ArrowUpRight className="h-4 w-4 text-white group-hover:text-black transition-colors" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────
export function Destinations({ limit }: { limit?: number } = {}) {
  const [active, setActive] = useState<Category>('all');

  let filtered =
    active === 'all' ? destinations : destinations.filter((d) => d.category === active);
  
  if (limit) {
    filtered = filtered.slice(0, limit);
  }

  return (
    <section id="destinations" className="bg-brand-silver py-32 dark:bg-brand-black overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-gold">
            Experiences Beyond
          </span>
          <h2 className="mt-4 text-5xl font-black tracking-tighter text-brand-blue dark:text-white md:text-7xl uppercase">
            OUR <span className="text-brand-gold">DESTINATIONS</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-brand-black/60 dark:text-white/60">
            From snowy Kashmir peaks to the tropical Maldives — we craft extraordinary journeys across India and beyond.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-3 mb-16 flex-wrap"
        >
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-7 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                active === f.value
                  ? 'bg-brand-blue text-white dark:bg-brand-gold dark:text-brand-black shadow-xl scale-105'
                  : 'bg-white/70 dark:bg-white/5 text-brand-black/60 dark:text-white/50 border border-black/10 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 hover:scale-105'
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((dest, i) => (
              <DestCard key={dest.name} dest={dest} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        {limit && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <Link
              href="/destinations"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-brand-black dark:bg-white text-white dark:text-brand-black font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all duration-300 shadow-xl"
            >
              View All Destinations →
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
