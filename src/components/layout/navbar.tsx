'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar, Menu, X, ChevronDown, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navLinks = [
  { name: 'Home', href: '#' },
  { 
    name: 'Destinations', 
    href: '#destinations',
    dropdown: [
      { name: 'Europe', href: '#europe' },
      { name: 'Asia', href: '#asia' },
      { name: 'Middle East', href: '#middle-east' },
      { name: 'Africa', href: '#africa' },
    ]
  },
  { name: 'Packages', href: '#packages' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        isScrolled 
          ? 'bg-white/80 dark:bg-brand-black/80 backdrop-blur-xl shadow-2xl py-3 border-b border-brand-silver/10' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Logo variant={isScrolled ? 'dark' : 'light'} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.dropdown ? (
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger className={cn(
                    "flex items-center gap-1.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:text-brand-gold outline-none",
                    isScrolled ? "text-brand-black dark:text-brand-silver" : "text-white/90"
                  )}>
                    {link.name}
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    align="center" 
                    className="w-56 bg-white/95 dark:bg-brand-black/95 backdrop-blur-2xl border-brand-silver/10 p-2 shadow-2xl animate-in fade-in zoom-in duration-300"
                  >
                    {link.dropdown.map((sub) => (
                      <DropdownMenuItem key={sub.name} className="p-0">
                        <Link 
                          href={sub.href} 
                          className="flex items-center w-full px-4 py-3 cursor-pointer rounded-lg hover:bg-brand-blue/5 hover:text-brand-blue dark:hover:text-brand-gold transition-all duration-200 font-medium"
                        >
                          {sub.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setActiveSection(link.name)}
                  className={cn(
                    "text-sm font-semibold tracking-wide transition-all duration-300 relative py-2",
                    isScrolled 
                      ? activeSection === link.name ? "text-brand-blue" : "text-brand-black dark:text-brand-silver" 
                      : activeSection === link.name ? "text-brand-gold" : "text-white/90"
                  )}
                >
                  {link.name}
                  {activeSection === link.name && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-gold rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-brand-gold/40 rounded-full transition-all duration-300 group-hover:w-full" />
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <Link 
            href="https://wa.me/918547069562" 
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center gap-2 text-sm font-bold transition-all duration-300 hover:scale-105",
              isScrolled 
                ? "text-brand-blue" 
                : "text-white"
            )}
          >
            <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                <Phone className="w-4 h-4 text-green-500" />
            </div>
            +91 85470 69562
          </Link>
          <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white dark:bg-brand-gold dark:text-brand-black px-8 h-12 rounded-full font-bold shadow-xl shadow-brand-blue/20 dark:shadow-brand-gold/10 transition-all duration-300 hover:-translate-y-1 active:scale-95 group">
            <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            Book Tour
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300",
            isScrolled 
                ? "bg-brand-blue/5 text-brand-black dark:text-brand-silver" 
                : "bg-white/10 text-white backdrop-blur-md"
          )}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-brand-black/60 backdrop-blur-sm z-[-1]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-brand-black shadow-2xl z-50 p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="text-2xl font-black text-brand-blue dark:text-brand-gold">MENU</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-brand-silver/20 rounded-full">
                    <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => {
                        setActiveSection(link.name);
                        setIsMobileMenuOpen(false);
                      }}
                      className={cn(
                        "text-2xl font-bold transition-all",
                        activeSection === link.name ? "text-brand-blue pl-4 border-l-4 border-brand-gold" : "text-brand-black/60 dark:text-brand-silver/60"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-4">
                <Button 
                  onClick={() => window.open('https://wa.me/918547069562', '_blank')}
                  className="w-full h-14 rounded-2xl bg-brand-blue text-white font-bold text-lg"
                >
                  WhatsApp Us
                </Button>
                <Button className="w-full h-14 rounded-2xl bg-brand-gold text-brand-black font-extrabold text-lg">
                  Book A Tour
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
