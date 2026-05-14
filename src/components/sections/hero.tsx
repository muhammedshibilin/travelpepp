'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Diamond, Landmark, Leaf, Sparkles } from 'lucide-react';

const scenes = [
  {
    id: 0,
    video: '/videos/kashmir.mp4',
    location: 'Kashmir',
    line1: 'The Ethereal',
    line2: 'CHARM OF',
    line3: 'KASHMIR',
    sub: 'Snow-crowned peaks and sapphire lakes in a dance of timeless beauty.',
  },
  {
    id: 1,
    video: '/videos/sonmarg.mp4',
    location: 'Sonamarg',
    line1: 'Celestial Valleys',
    line2: 'OF',
    line3: 'SONAMARG',
    sub: 'Where golden meadows meet the edge of heaven’s horizon.',
  },
  {
    id: 2,
    video: '/videos/delhi.mp4',
    location: 'Delhi',
    line1: 'Heart of India',
    line2: 'MAJESTIC',
    line3: 'DELHI',
    sub: 'A vibrant tapestry of history, culture, and modern luxury.',
  },
  {
    id: 3,
    video: '/videos/goa.mp4',
    location: 'Goa',
    line1: 'Sun-Kissed',
    line2: 'SHORES OF',
    line3: 'GOA',
    sub: 'Golden beaches and azure waters for the ultimate relaxation.',
  },
  {
    id: 4,
    video: '/videos/bali.mp4',
    location: 'Bali',
    line1: 'Island of',
    line2: 'THE',
    line3: 'GODS',
    sub: 'Lush terraces and spiritual sanctuaries waiting to be explored.',
  },
  {
    id: 5,
    video: '/videos/maldives.mp4',
    location: 'Maldives',
    line1: 'Tropical',
    line2: 'PURE',
    line3: 'PARADISE',
    sub: 'Crystal clear waters and overwater villas of pure luxury.',
  },
  {
    id: 6,
    video: '/videos/malysia.mp4',
    location: 'Malaysia',
    line1: 'Truly',
    line2: 'DYNAMIC',
    line3: 'ASIA',
    sub: 'A dynamic blend of rich heritage and cosmopolitan marvels.',
  },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % scenes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentScene = scenes[currentIndex];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black font-sans">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Background Video */}
          <div className="absolute inset-0">
            {currentScene.video && (
              <video
                src={currentScene.video}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
          </div>

          {/* Cinematic Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

          {/* Main Content Container - Aligned with Navbar */}
          <div className="absolute inset-0 flex flex-col justify-center z-10 pointer-events-none pt-24 md:pt-32">
            <div className="max-w-7xl mx-auto w-full px-6 relative">
              {/* Top Labels */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mb-4 md:mb-6"
              >
                <div className="flex items-center gap-3">
                  <div className="h-[2px] w-10 bg-[#D4AF37]" />
                  <span className="text-[10px] md:text-xs font-bold tracking-[0.45em] uppercase text-white/90">
                    {currentScene.location}
                  </span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="max-w-7xl"
              >
                <h1 className="font-playfair flex flex-col font-light tracking-tight text-white leading-[1] md:leading-[1.05] mb-6 md:mb-8">
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] italic mb-1 md:mb-2 drop-shadow-lg">
                    {currentScene.line1}
                  </span>
                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold text-[#D4AF37] not-italic uppercase tracking-tighter drop-shadow-xl">
                    {currentScene.line2}
                  </span>
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-bold text-[#D4AF37] not-italic uppercase tracking-tighter drop-shadow-xl">
                    {currentScene.line3}
                  </span>
                </h1>

                {/* Subtitle with border */}
                <div className="border-l-2 border-[#D4AF37]/50 pl-5 mb-8 md:mb-10">
                  <p className="text-sm md:text-base lg:text-lg font-medium text-white/90 leading-relaxed max-w-md drop-shadow-md">
                    {currentScene.sub}
                  </p>
                </div>
                
                
                {/* Professional Social Proof - Placed directly under the button */}
                <div className="flex items-center gap-5 pointer-events-auto">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-brand-silver flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full bg-brand-gold/20" />
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-black bg-[#D4AF37] flex items-center justify-center text-[10px] font-black text-black z-10 relative">
                      +10k
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-black text-white uppercase tracking-widest">Global Travelers</span>
                    <span className="text-[10px] font-medium text-[#D4AF37] uppercase tracking-widest">Verified Luxury Service</span>
                  </div>
                </div>

              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Scene dot indicators — right edge */}
      <div className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-30">
        {scenes.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
              currentIndex === i ? 'bg-[#D4AF37] scale-150' : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
