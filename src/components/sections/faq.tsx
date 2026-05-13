'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "How do I book a luxury tour with TravelPepp?",
    answer: "You can book directly through our website by selecting a package or by contacting our luxury concierge team via WhatsApp or phone. We'll guide you through the customization process to ensure your itinerary is perfect."
  },
  {
    question: "Are the tours customizable?",
    answer: "Absolutely. We specialize in bespoke travel. Every itinerary can be tailored to your specific preferences, including hotel upgrades, private transportation, and unique local experiences."
  },
  {
    question: "What is included in the premium packages?",
    answer: "Our premium packages typically include 5-star accommodations, private chauffeurs, domestic flight assistance, guided tours with local experts, and 24/7 concierge support."
  },
  {
    question: "Is travel insurance provided?",
    answer: "While we don't provide insurance directly, we highly recommend comprehensive travel insurance for all our guests and can point you toward our trusted partners."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We offer flexible cancellation policies depending on the package. Typically, cancellations made 30 days prior to departure are eligible for a full refund minus administrative fees."
  }
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-brand-silver/10 last:border-0 overflow-hidden">
      <button 
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className={cn(
          "text-xl font-black uppercase tracking-tight transition-colors duration-300",
          isOpen ? "text-brand-gold" : "text-brand-blue dark:text-white"
        )}>
          {question}
        </span>
        <div className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500",
          isOpen ? "bg-brand-gold text-brand-black rotate-180" : "bg-brand-silver/30 text-brand-blue dark:bg-white/5 dark:text-white"
        )}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <p className="pb-8 text-lg font-medium text-brand-black/60 dark:text-white/60 leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-white dark:bg-brand-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-brand-gold/10 rounded-3xl flex items-center justify-center text-brand-gold mx-auto mb-8">
              <HelpCircle className="w-10 h-10" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-gold mb-4 block">
              Clear & Transparent
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-brand-blue dark:text-white uppercase leading-[0.9]">
              FREQUENTLY ASKED <span className="text-brand-gold">QUESTIONS</span>
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-brand-silver/20 dark:bg-white/5 rounded-[3rem] p-8 md:p-12 border border-brand-silver/10"
        >
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              {...faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
