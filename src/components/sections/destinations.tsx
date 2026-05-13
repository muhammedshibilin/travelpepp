'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DestinationCard } from '@/components/ui/destination-card';

const destinations = [
  {
    name: 'Kashmir',
    description: 'Experience the "Paradise on Earth" with its serene lakes, snow-capped mountains, and vibrant tulip gardens.',
    image: '/dest-kashmir.png',
  },
  {
    name: 'Kerala',
    description: 'Relax in the tranquil backwaters, lush tea gardens, and pristine beaches of "God\'s Own Country".',
    image: '/dest-kerala.png',
  },
  {
    name: 'Manali',
    description: 'Adventure awaits in the heart of the Himalayas with breathtaking views and thrilling outdoor activities.',
    image: '/dest-manali.png',
  },
  {
    name: 'Delhi',
    description: 'A vibrant blend of history and modernity, from majestic monuments to bustling luxury shopping districts.',
    image: 'https://images.unsplash.com/photo-1587474260584-1f20d4296c06?q=80&w=2000&auto=format&fit=crop',
  },
  {
    name: 'Sonamarg',
    description: 'The "Meadow of Gold" offers pristine glaciers, alpine meadows, and unforgettable mountain trails.',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2000&auto=format&fit=crop',
  },
  {
    name: 'Munnar',
    description: 'Immerse yourself in endless rolling hills of tea plantations and refreshing mountain air.',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2000&auto=format&fit=crop',
  },
];

export function Destinations() {
  return (
    <section id="destinations" className="bg-brand-silver py-32 dark:bg-brand-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-gold">
              Curated Experiences
            </span>
            <h2 className="mt-4 text-5xl font-black tracking-tighter text-brand-blue dark:text-white md:text-7xl">
              POPULAR <span className="text-brand-gold">DESTINATIONS</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-brand-black/60 dark:text-white/60">
              Discover the most breathtaking locations across India, handpicked for their unique beauty and luxury offerings.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <DestinationCard {...dest} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
