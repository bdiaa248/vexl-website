
import React from 'react';
import { motion } from 'framer-motion';
import { Content, Language } from '../types';
import { Target, Users, Zap } from 'lucide-react';
import CountUp from './CountUp';

interface AboutProps {
  content: Content['about'];
  lang: Language;
}

const About: React.FC<AboutProps> = ({ content, lang }) => {
  const isRtl = lang === 'ar';

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#02040a] relative border-b border-slate-300 dark:border-white/5 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Text Content */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`lg:w-1/2 space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}
            >
                <div className="flex items-center gap-4 text-cyan-700 dark:text-cyan-500 font-mono text-xs font-bold tracking-[0.2em] uppercase">
                    <div className="w-8 h-px bg-cyan-700 dark:bg-cyan-500" />
                    {content.label}
                </div>
                
                {/* High Contrast Title */}
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
                    {content.title}
                </h2>
                
                {/* Darker Body Text for Readability */}
                <p className="text-lg text-slate-700 dark:text-slate-400 font-medium leading-relaxed">
                    {content.description}
                </p>

                {/* Decoration */}
                <div className={`flex gap-2 opacity-100 pt-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                    <div className="w-2 h-2 bg-slate-900 dark:bg-slate-700 rounded-full" />
                    <div className="w-2 h-2 bg-slate-900 dark:bg-slate-700 rounded-full" />
                    <div className="w-2 h-2 bg-slate-900 dark:bg-slate-700 rounded-full" />
                </div>
            </motion.div>

            {/* Stats / Visuals */}
            <motion.div 
                initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
                {content.stats.map((stat, idx) => (
                    <div key={idx} className="p-6 rounded-lg border border-slate-300 dark:border-white/5 bg-slate-50 dark:bg-transparent shadow-md hover:shadow-lg dark:shadow-none transition-all group text-center sm:text-left">
                        <div className="mb-4 text-cyan-700 dark:text-cyan-500 opacity-100 group-hover:scale-110 transition-all duration-300 inline-block">
                           {idx === 0 && <Users size={28} />}
                           {idx === 1 && <Target size={28} />}
                           {idx === 2 && <Zap size={28} />}
                        </div>
                        <div className="text-3xl font-black text-slate-900 dark:text-white mb-1 font-mono">
                            <CountUp value={stat.value} />
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-500 uppercase tracking-wider font-bold">{stat.label}</div>
                    </div>
                ))}

                {/* Abstract Line Art */}
                <div className="hidden sm:block col-span-3 h-px bg-slate-300 dark:bg-white/10 mt-8" />
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
