'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PackageCard } from '@/components/ui/package-card';

const packages = [
  {
    name: 'Luxury Kashmir Escape',
    destination: 'Kashmir',
    duration: '5 Nights / 6 Days',
    price: '899',
    rating: 4.9,
    inclusions: ['Luxury Stay', 'Shikara Ride', 'Private Car', 'Meals', 'Guided Tours'],
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2000&auto=format&fit=crop',
  },
  {
    name: 'Royal Kerala Houseboat',
    destination: 'Kerala',
    duration: '4 Nights / 5 Days',
    price: '749',
    rating: 4.8,
    inclusions: ['Premium Houseboat', 'Spa Sessions', 'Authentic Meals', 'Beach Resort'],
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2000&auto=format&fit=crop',
  },
  {
    name: 'Himalayan Adventure',
    destination: 'Manali & Rohtang',
    duration: '6 Nights / 7 Days',
    price: '999',
    rating: 5.0,
    inclusions: ['Cottage Stay', 'Paragliding', 'Skiing', 'Campfire', 'Local Sightseeing'],
    image: 'https://images.unsplash.com/photo-1587474260584-1f20d4296c06?q=80&w=2000&auto=format&fit=crop',
  },
];

export function Packages() {
  return (
    <section id="packages" className="py-32 bg-white dark:bg-brand-black/95 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-gold mb-4 block">
              Exclusive Offers
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-brand-blue dark:text-white uppercase leading-[0.9]">
              BEST SELLING <br />
              <span className="text-brand-gold">TOUR PACKAGES</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg font-medium text-brand-black/50 dark:text-white/50 max-w-sm"
          >
            Choose from our most popular meticulously crafted itineraries designed for ultimate comfort and discovery.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <PackageCard {...pkg} />
            </motion.div>
          ))}
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-20 text-center"
        >
            <button className="text-sm font-black uppercase tracking-[0.3em] text-brand-blue dark:text-brand-gold border-b-2 border-brand-gold pb-2 hover:text-brand-black dark:hover:text-white transition-all">
                View All Packages
            </button>
        </motion.div>
      </div>
    </section>
  );
}
