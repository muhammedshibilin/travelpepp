'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Send,
  Share2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const footerLinks = {
  company: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Packages', href: '#packages' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ],
  destinations: [
    { name: 'Kashmir', href: '#kashmir' },
    { name: 'Leh Ladakh', href: '#leh-ladakh' },
    { name: 'Himachal Pradesh', href: '#himachal' },
    { name: 'Uttarakhand', href: '#uttarakhand' },
    { name: 'Kerala', href: '#kerala' },
    { name: 'Rajasthan', href: '#rajasthan' },
    { name: 'Goa', href: '#goa' },
    { name: 'Andaman & Nicobar', href: '#andaman' },
  ],
  support: [
    { name: 'Help Center', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ]
};

export function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-8 group">
              <Logo variant="light" />
            </Link>
            <p className="text-sm text-white/50 mb-8 leading-relaxed max-w-xs">
              Crafting bespoke luxury travel experiences across the most breathtaking corners of India since 2010.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Newsletter Subscription" 
                className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-sm outline-none focus:border-brand-gold transition-colors"
              />
              <button className="absolute right-2 top-2 w-10 h-10 bg-brand-gold rounded-xl flex items-center justify-center text-brand-black hover:scale-105 transition-transform">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm font-medium text-white/50 hover:text-white hover:translate-x-1 transition-all inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold mb-8">Popular Destinations</h4>
            <ul className="space-y-4">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm font-medium text-white/50 hover:text-white hover:translate-x-1 transition-all inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-white/30 uppercase tracking-widest">Phone</span>
                  <a href="tel:+918547069562" className="text-sm font-medium text-white hover:text-brand-gold transition-colors">+91 85470 69562</a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-white/30 uppercase tracking-widest">Email</span>
                  <a href="mailto:travelpepp@gmail.com" className="text-sm font-medium text-white hover:text-brand-gold transition-colors">travelpepp@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-white/30 uppercase tracking-widest">Office</span>
                  <span className="text-sm font-medium text-white leading-relaxed">
                    123 Luxury Avenue, <br />
                    New Delhi, India 110001
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-xs font-medium text-white/30">
            © 2026 TravelPepp Luxury Travels. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link 
              href="https://www.instagram.com/travelpepp/" 
              target="_blank"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-brand-gold hover:text-brand-gold transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
            </Link>
            <Link 
              href="https://www.facebook.com/travelpepp/" 
              target="_blank"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-brand-gold hover:text-brand-gold transition-all"
            >
              <FacebookIcon className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="flex items-center gap-8">
            {footerLinks.support.slice(1, 3).map((link) => (
                <Link key={link.name} href={link.href} className="text-[10px] font-bold uppercase tracking-widest text-white/30 hover:text-white transition-colors">
                    {link.name}
                </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
