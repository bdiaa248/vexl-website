
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQItem } from '../types';
import { Plus, Minus, Terminal } from 'lucide-react';

interface FAQProps {
  items: FAQItem[];
  title: string;
  lang: 'en' | 'ar';
}

const FAQ: React.FC<FAQProps> = ({ items, title, lang }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isRtl = lang === 'ar';

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`w-full max-w-4xl mx-auto py-16 px-6 ${isRtl ? 'font-arabic text-right' : 'font-sans text-left'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-10 border-b border-slate-300 dark:border-white/10 pb-4">
        <div className="w-8 h-8 bg-slate-100 dark:bg-cyan-950/20 border border-slate-300 dark:border-cyan-500/30 flex items-center justify-center rounded-sm">
             <Terminal size={16} className="text-slate-900 dark:text-cyan-500" />
        </div>
        <h3 className="text-sm font-bold font-mono uppercase tracking-[0.2em] text-slate-600 dark:text-cyan-500">
            {title}
        </h3>
      </div>

      <div className="space-y-4">
        {items.map((item, idx) => (
          <div 
            key={idx}
            className={`border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.02] rounded-lg transition-all duration-300 ${activeIndex === idx ? 'border-slate-400 dark:border-cyan-500/50 shadow-md dark:shadow-[0_0_15px_rgba(6,182,212,0.1)]' : 'hover:border-slate-300 dark:hover:border-white/20'}`}
          >
            <button
              onClick={() => toggleIndex(idx)}
              className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
            >
              <span className={`text-base md:text-lg font-bold text-slate-800 dark:text-slate-200 transition-colors ${activeIndex === idx ? 'text-slate-900 dark:text-cyan-400' : ''}`}>
                {item.q}
              </span>
              <div className={`p-1 rounded-full border transition-all duration-300 ${activeIndex === idx ? 'bg-slate-900 dark:bg-cyan-500 border-slate-900 dark:border-cyan-500 text-white' : 'border-slate-300 dark:border-white/20 text-slate-400'}`}>
                {activeIndex === idx ? <Minus size={14} /> : <Plus size={14} />}
              </div>
            </button>
            
            <AnimatePresence>
              {activeIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 font-medium leading-relaxed border-t border-dashed border-slate-200 dark:border-white/5 mx-6 mt-2">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

    </div>
  );
};

export default FAQ;
