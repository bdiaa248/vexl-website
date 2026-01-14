
import React from 'react';
import { motion } from 'framer-motion';
import { Star, StarHalf, Quote } from 'lucide-react';
import { Content, Language } from '../types';

interface TestimonialsProps {
  content: Content['testimonials'];
  lang: Language;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
        <div className="flex gap-1">
            {[...Array(fullStars)].map((_, i) => (
                <Star key={i} size={14} className="fill-cyan-700 dark:fill-cyan-500 text-cyan-700 dark:text-cyan-500" />
            ))}
            {hasHalfStar && <StarHalf size={14} className="fill-cyan-700 dark:fill-cyan-500 text-cyan-700 dark:text-cyan-500" /> }
            {[...Array(5 - Math.ceil(rating))].map((_, i) => (
                <Star key={i + fullStars} size={14} className="text-slate-400 dark:text-slate-700" />
            ))}
        </div>
    );
};

const Testimonials: React.FC<TestimonialsProps> = ({ content, lang }) => {
  const isRtl = lang === 'ar';

  return (
    <section id="impact" className="py-32 relative bg-slate-50 dark:bg-[#02040a] transition-colors duration-500">
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
            {/* Header */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 flex flex-col items-center text-center space-y-4"
            >
                <div className="text-xs font-mono text-cyan-700 dark:text-cyan-500 tracking-[0.3em] uppercase font-bold">
                    {content.sectionTitle}
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                    {content.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 font-medium max-w-xl">
                    {content.subtitle}
                </p>
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.items.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        // Strong border in Light Mode, Glass in Dark Mode
                        className="p-8 rounded-xl group bg-white dark:bg-white/[0.02] border border-slate-300 dark:border-white/5 hover:border-slate-400 dark:hover:border-cyan-500/20 shadow-md hover:shadow-lg dark:shadow-none transition-all duration-300"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-4">
                                {/* Profile Placeholder */}
                                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-gradient-to-br dark:from-slate-800 dark:to-black border border-slate-300 dark:border-white/10 flex items-center justify-center font-bold text-slate-700 dark:text-slate-500">
                                    {item.name.charAt(0)}
                                </div>
                                <div className="text-left">
                                    <div className="text-slate-900 dark:text-white font-bold text-sm">{item.name}</div>
                                    <div className="text-xs text-slate-500 font-mono uppercase tracking-wider font-semibold">{item.role}</div>
                                </div>
                            </div>
                            <StarRating rating={item.rating} />
                        </div>

                        <div className="relative">
                            <Quote size={24} className={`absolute -top-2 ${isRtl ? '-right-2' : '-left-2'} text-slate-200 dark:text-white/5`} />
                            <p className={`text-slate-700 dark:text-slate-300 text-sm font-medium leading-relaxed relative z-10 ${item.lang === 'ar' ? 'font-arabic text-right' : item.lang === 'mix' ? 'font-arabic text-right' : 'font-sans'}`} dir={item.lang === 'en' ? 'ltr' : 'rtl'}>
                                "{item.text}"
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
    </section>
  );
};

export default Testimonials;
