'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Phone, 
  Star, 
  CheckCircle, 
  MapPin, 
  Users, 
  ShieldCheck 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
  { label: 'Destinations', value: '50+', icon: MapPin },
  { label: 'Happy Travelers', value: '10k+', icon: Users },
  { label: 'Verified Agency', value: '100%', icon: ShieldCheck },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const headingWords = "Explore India With TravelPepp".split(" ");

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Cinematic Background with Parallax */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <Image
          src="/hero-india.png"
          alt="Cinematic India Travel"
          fill
          className="object-cover scale-110"
          priority
        />
        {/* Multi-layered Gradients for Luxury Look */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-transparent to-brand-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/60 via-transparent to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Main Content */}
          <div className="text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 backdrop-blur-md border border-brand-gold/20 mb-8"
            >
              <Star className="w-4 h-4 text-brand-gold fill-brand-gold" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-gold">Your Luxury Gateway to India</span>
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-[0.85] uppercase">
              {headingWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
                  className={cn(
                    "inline-block mr-4",
                    word === "TravelPepp" ? "text-brand-gold" : "text-white"
                  )}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="max-w-xl text-lg md:text-2xl text-white/70 mb-10 font-medium leading-relaxed"
            >
              Premium Tour Experiences Across <span className="text-white font-bold">Kashmir</span>, <span className="text-white font-bold">Kerala</span>, <span className="text-white font-bold">Manali</span> & <span className="text-white font-bold">South India</span>.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <Button size="lg" className="h-16 px-10 rounded-full bg-brand-gold text-brand-black hover:bg-white hover:scale-105 transition-all duration-300 font-bold text-lg group shadow-2xl shadow-brand-gold/20">
                Explore Tours
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => window.open('https://wa.me/918547069562', '_blank')}
                variant="outline" size="lg" className="h-16 px-10 rounded-full border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-brand-blue transition-all duration-300 font-bold text-lg group"
              >
                <Phone className="mr-2 w-5 h-5" />
                WhatsApp Booking
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-12 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-gold" />
                <span className="text-xs font-bold text-white/60 tracking-wider uppercase">Verified Agency</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-gold" />
                <span className="text-xs font-bold text-white/60 tracking-wider uppercase">24/7 Premium Support</span>
              </div>
            </motion.div>
          </div>

          {/* Floating Statistics Cards */}
          <div className="hidden lg:flex relative h-[600px] items-center justify-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, x: i % 2 === 0 ? 50 : -50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 1 + (i * 0.2), duration: 1, ease: "easeOut" }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={cn(
                  "absolute p-6 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl w-56 flex flex-col items-center text-center",
                  i === 0 && "top-0 right-0",
                  i === 1 && "bottom-20 right-20",
                  i === 2 && "top-40 -left-10"
                )}
              >
                <div className="w-12 h-12 bg-brand-gold rounded-2xl flex items-center justify-center text-brand-black mb-4 shadow-lg">
                  <stat.icon className="w-6 h-6" />
                </div>
                <span className="text-3xl font-black text-white tracking-tighter mb-1">{stat.value}</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">{stat.label}</span>
                
                {/* Floating Micro-elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: i }}
                  className="absolute -top-2 -right-2 w-4 h-4 bg-brand-gold rounded-full blur-[2px] opacity-50" 
                />
              </motion.div>
            ))}

            {/* Central Visual Element */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="w-80 h-80 rounded-full border border-brand-gold/30 flex items-center justify-center relative"
            >
              <div className="absolute inset-0 rounded-full border-t-2 border-brand-gold animate-spin-slow" />
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-brand-gold/20 to-transparent blur-3xl" />
              <div className="relative z-10 w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center text-brand-black shadow-2xl">
                <Star className="w-10 h-10 fill-brand-black" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] font-black tracking-[0.5em] uppercase text-white/40">Discover More</span>
        <div className="w-px h-16 bg-gradient-to-b from-brand-gold via-brand-gold/20 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 64] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
