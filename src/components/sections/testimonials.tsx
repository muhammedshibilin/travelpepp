'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: 'Sophia Mitchell',
    location: 'London, UK',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    rating: 5,
    text: "The Kashmir trip was a literal dream. TravelPepp's attention to detail, from the private shikara rides to the boutique stays, was unmatched. Truly a gold standard in luxury travel.",
  },
  {
    name: 'James Wilson',
    location: 'Sydney, Australia',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    rating: 5,
    text: "Kerala backwaters were breathtaking. The luxury houseboat experience was the highlight of our journey. Seamless coordination and authentic local hospitality. Highly recommended!",
  },
  {
    name: 'Elena Rodriguez',
    location: 'Madrid, Spain',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    rating: 5,
    text: "Unbelievable experience in Manali. The custom itinerary perfectly balanced adventure and relaxation. The local guides provided insights we would never have found on our own.",
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-brand-silver/50 dark:bg-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Title & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-gold mb-4 block">
              Traveler Stories
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-brand-blue dark:text-white uppercase leading-[0.9] mb-8">
              WHAT OUR <span className="text-brand-gold">GUESTS SAY</span>
            </h2>
            <p className="text-lg font-medium text-brand-black/60 dark:text-white/60 mb-12 max-w-lg">
              Hear from our global community of travelers who have experienced the magic of India with TravelPepp.
            </p>

            <div className="flex gap-4">
              <button 
                onClick={prev}
                className="w-14 h-14 rounded-full border border-brand-blue/20 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white dark:border-brand-gold/20 dark:text-brand-gold dark:hover:bg-brand-gold dark:hover:text-brand-black transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={next}
                className="w-14 h-14 rounded-full border border-brand-blue/20 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white dark:border-brand-gold/20 dark:text-brand-gold dark:hover:bg-brand-gold dark:hover:text-brand-black transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>

          {/* Right Side: Animated Testimonial Card */}
          <div className="relative min-h-[500px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full bg-white dark:bg-brand-black border border-brand-silver/10 rounded-[3rem] p-10 md:p-16 shadow-2xl relative"
              >
                <div className="absolute top-10 right-10 opacity-10">
                  <Quote className="w-20 h-20 text-brand-blue dark:text-brand-gold" />
                </div>

                <div className="flex items-center gap-6 mb-10">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-xl border-2 border-brand-gold/20">
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-brand-blue dark:text-white uppercase tracking-tighter">
                      {testimonials[activeIndex].name}
                    </h4>
                    <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">
                      {testimonials[activeIndex].location}
                    </span>
                  </div>
                </div>

                <div className="flex gap-1 mb-8">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                  ))}
                </div>

                <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-brand-black/80 dark:text-white/80">
                  "{testimonials[activeIndex].text}"
                </p>

                {/* Progress Indicators */}
                <div className="mt-12 flex gap-2">
                  {testimonials.map((_, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-500",
                        i === activeIndex ? "w-12 bg-brand-gold" : "w-4 bg-brand-silver/30"
                      )} 
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Decorative Background Glow */}
            <div className="absolute -inset-10 bg-brand-gold/5 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
