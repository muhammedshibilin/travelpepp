'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Calendar, ShieldCheck, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-brand-black">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-india.png"
          alt="Luxury Travel Final CTA"
          fill
          className="object-cover opacity-40 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/20 backdrop-blur-md border border-brand-gold/30 mb-8 animate-pulse">
            <Calendar className="w-4 h-4 text-brand-gold" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-gold">Booking Open for Summer 2026</span>
          </div>

          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase mb-8 leading-[0.9]">
            READY TO START YOUR <br />
            <span className="text-brand-gold">LUXURY JOURNEY?</span>
          </h2>

          <p className="max-w-2xl mx-auto text-xl text-white/70 mb-12 font-medium leading-relaxed">
            Join thousands of luxury travelers who have discovered the magic of India with TravelPepp. Your bespoke adventure is just one click away.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button size="lg" className="h-20 px-12 rounded-full bg-brand-gold text-brand-black hover:bg-white hover:scale-105 transition-all duration-300 font-black text-xl group shadow-2xl shadow-brand-gold/30">
              Book Your Tour Now
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            
            <div className="flex flex-col items-center sm:items-start gap-4">
                <Button 
                    onClick={() => window.open('https://wa.me/918547069562', '_blank')}
                    variant="outline" size="lg" className="h-20 px-10 rounded-full border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-brand-blue transition-all duration-300 font-bold text-lg group"
                >
                    <MessageCircle className="mr-2 w-6 h-6 text-green-400" />
                    WhatsApp Inquiry
                </Button>
                <div className="flex items-center gap-2 px-4">
                    <Phone className="w-4 h-4 text-brand-gold" />
                    <a href="tel:+918547069562" className="text-white font-black tracking-widest hover:text-brand-gold transition-colors">+91 85470 69562</a>
                </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-12 pt-12 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                <ShieldCheck className="w-6 h-6 text-brand-gold" />
              </div>
              <div className="text-left">
                <span className="block text-white font-bold uppercase tracking-widest text-xs">Verified Safe</span>
                <span className="text-white/40 text-[10px] uppercase font-medium">100% Secure Booking</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                <Star className="w-6 h-6 text-brand-gold fill-brand-gold" />
              </div>
              <div className="text-left">
                <span className="block text-white font-bold uppercase tracking-widest text-xs">5-Star Rated</span>
                <span className="text-white/40 text-[10px] uppercase font-medium">By 10,000+ Guests</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                <Calendar className="w-6 h-6 text-brand-gold" />
              </div>
              <div className="text-left">
                <span className="block text-white font-bold uppercase tracking-widest text-xs">Easy Cancel</span>
                <span className="text-white/40 text-[10px] uppercase font-medium">Flexible Itineraries</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Particles/Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-gold/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-blue/20 rounded-full blur-[100px] animate-pulse delay-700" />
    </section>
  );
}
