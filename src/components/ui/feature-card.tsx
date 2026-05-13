'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function FeatureCard({ title, description, icon: Icon, className }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={cn(
        "group relative flex flex-col p-8 rounded-3xl bg-white dark:bg-brand-black border border-brand-silver/10 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-brand-gold/10",
        className
      )}
    >
      {/* Icon Container */}
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-2xl bg-brand-silver/50 dark:bg-white/5 flex items-center justify-center text-brand-blue dark:text-brand-gold transition-all duration-500 group-hover:bg-brand-gold group-hover:text-brand-black group-hover:rotate-6 group-hover:scale-110">
          <Icon className="w-8 h-8" />
        </div>
        
        {/* Decorative Background Element */}
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-gold/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-black tracking-tight text-brand-blue dark:text-white uppercase mb-3">
        {title}
      </h3>
      <p className="text-sm font-medium leading-relaxed text-brand-black/50 dark:text-white/50">
        {description}
      </p>

      {/* Subtle Bottom Line Animation */}
      <div className="absolute bottom-0 left-8 right-8 h-1 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
    </motion.div>
  );
}
