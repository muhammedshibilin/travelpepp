'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Users, 
  Map, 
  Headset, 
  Car, 
  Gem 
} from 'lucide-react';
import { FeatureCard } from '@/components/ui/feature-card';

const features = [
  {
    title: 'Verified Stays',
    description: 'We partner only with premium, hand-picked hotels and houseboats verified for safety and luxury.',
    icon: ShieldCheck,
  },
  {
    title: 'Local Travel Experts',
    description: 'Our team consists of passionate locals who know every hidden gem and secret trail in India.',
    icon: Users,
  },
  {
    title: 'Custom Itineraries',
    description: 'Tailor-made travel plans designed around your preferences, pace, and unique interests.',
    icon: Map,
  },
  {
    title: '24/7 Premium Support',
    description: 'Real-time assistance from our dedicated concierge team throughout your entire journey.',
    icon: Headset,
  },
  {
    title: 'Luxury Transportation',
    description: 'Travel in ultimate comfort with our fleet of premium vehicles and professional chauffeurs.',
    icon: Car,
  },
  {
    title: 'Affordable Premium Packages',
    description: 'Unbeatable value for high-end luxury experiences, making premium travel accessible.',
    icon: Gem,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-brand-silver/30 dark:bg-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-gold mb-4 block">
              The TravelPepp Edge
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-brand-blue dark:text-white uppercase leading-[0.9]">
              WHY CHOOSE <span className="text-brand-gold">TRAVELPEPP</span>
            </h2>
            <p className="mt-6 text-lg font-medium text-brand-black/50 dark:text-white/50 max-w-2xl mx-auto">
              We don't just plan trips; we craft lifelong memories with a commitment to excellence and personalized care.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
        
        {/* Decorative Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[120px] -z-10" />
      </div>
    </section>
  );
}
