'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DestinationCardProps {
  name: string;
  description: string;
  image: string;
  className?: string;
}

export function DestinationCard({ name, description, image, className }: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "group relative h-[500px] w-full overflow-hidden rounded-[2.5rem] bg-brand-black shadow-2xl",
        className
      )}
    >
      {/* Background Image with Zoom Effect */}
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      
      {/* Dynamic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
            Must Visit
          </span>
          <h3 className="mb-3 text-4xl font-black tracking-tight text-white uppercase">
            {name}
          </h3>
          <p className="mb-8 max-w-sm text-sm font-medium leading-relaxed text-white/70 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
            {description}
          </p>
        </motion.div>

        <div className="flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-brand-black shadow-xl transition-all hover:bg-brand-gold"
          >
            Explore Tours
            <ArrowUpRight className="h-4 w-4" />
          </motion.button>
          
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-500 group-hover:bg-brand-gold group-hover:border-brand-gold">
            <ArrowUpRight className="h-6 w-6 text-white group-hover:text-brand-black" />
          </div>
        </div>
      </div>
      
      {/* Glassmorphic Badge */}
      <div className="absolute right-8 top-8 rounded-2xl bg-white/10 px-4 py-2 backdrop-blur-xl border border-white/10">
        <span className="text-[10px] font-black uppercase tracking-widest text-white">Luxury Package</span>
      </div>
    </motion.div>
  );
}
