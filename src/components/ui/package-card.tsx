'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Clock, MapPin, Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface PackageCardProps {
  name: string;
  destination: string;
  duration: string;
  price: string;
  rating: number;
  inclusions: string[];
  image: string;
  className?: string;
}

export function PackageCard({
  name,
  destination,
  duration,
  price,
  rating,
  inclusions,
  image,
  className
}: PackageCardProps) {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl bg-white dark:bg-brand-black border border-brand-silver/10 shadow-xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)]",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative h-72 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
        
        {/* Rating Badge */}
        <div className="absolute left-6 top-6 flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-md border border-white/20">
          <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
          <span className="text-xs font-bold text-white">{rating}</span>
        </div>

        {/* Price Badge */}
        <div className="absolute bottom-6 right-6">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Starting from</span>
            <span className="text-2xl font-black text-brand-gold">${price}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-8">
        <div className="mb-4 flex items-center gap-2 text-brand-gold">
          <MapPin className="h-4 w-4" />
          <span className="text-xs font-bold uppercase tracking-widest">{destination}</span>
        </div>

        <h3 className="mb-3 text-2xl font-black tracking-tight text-brand-blue dark:text-white uppercase leading-tight">
          {name}
        </h3>

        <div className="mb-6 flex items-center gap-4 text-sm font-semibold text-brand-black/60 dark:text-white/60">
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {duration}
          </div>
        </div>

        {/* Inclusions */}
        <div className="mb-8 flex flex-wrap gap-x-4 gap-y-2">
          {inclusions.slice(0, 3).map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs font-bold text-brand-black/40 dark:text-white/40 uppercase tracking-tighter">
              <Check className="h-3 w-3 text-brand-gold" />
              {item}
            </div>
          ))}
          {inclusions.length > 3 && (
            <span className="text-[10px] font-bold text-brand-gold">+{inclusions.length - 3} More</span>
          )}
        </div>

        <div className="mt-auto pt-6 border-t border-brand-silver/10">
          <Button className="w-full h-14 rounded-2xl bg-brand-blue text-white hover:bg-brand-gold hover:text-brand-black transition-all duration-300 font-bold group">
            Book This Tour
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 -z-10 bg-brand-gold/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}
