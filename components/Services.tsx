
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Lock, Cpu, BookOpen, ArrowRight } from 'lucide-react';
import { Content } from '../types';

interface ServicesProps {
  content: Content['services'];
}

const Services: React.FC<ServicesProps> = ({ content }) => {
  return (
    // Reduced padding from py-32 to py-16
    <section id="studio" className="py-16 relative bg-slate-100 dark:bg-black/50 overflow-hidden transition-colors duration-500">
        {/* Background Accent - Subtle in light mode */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-slate-300/30 dark:bg-cyan-900/20 rounded-full blur-[128px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
            
            {/* Section Header */}
            <motion.div 
                // Changed to animate for immediate visibility
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-16 flex items-center gap-4"
            >
                <div className="h-px bg-slate-400 dark:bg-white/20 flex-1" />
                <span className="text-sm font-bold font-mono text-slate-700 dark:text-slate-500 tracking-[0.3em] uppercase">
                    {content.sectionTitle}
                </span>
                <div className="h-px bg-slate-400 dark:bg-white/20 flex-1" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* 1. Academic Consultancy */}
                <motion.div
                    // Changed to animate for immediate visibility
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    // High Contrast Card: Solid White bg with Strong Border
                    className="group relative rounded-xl border border-slate-300 dark:border-cyan-500/30 bg-white dark:bg-cyan-950/[0.05] p-8 md:p-12 overflow-hidden hover:shadow-2xl dark:hover:bg-cyan-950/[0.1] transition-all duration-500 shadow-lg shadow-slate-200 dark:shadow-none"
                >
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-8">
                            <div className="bg-slate-100 dark:bg-cyan-500/10 p-4 rounded-lg border border-slate-300 dark:border-cyan-500/20 text-slate-900 dark:text-cyan-400">
                                <BookOpen size={32} />
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/20 text-teal-900 dark:text-teal-400 text-[10px] font-bold font-mono tracking-widest uppercase">
                                <div className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-500 animate-pulse" />
                                {content.academic.status}
                            </div>
                        </div>

                        <h3 className="text-3xl font-black text-slate-950 dark:text-white mb-4 tracking-tight">{content.academic.title}</h3>
                        <p className="text-slate-700 dark:text-slate-400 font-semibold leading-relaxed mb-8 border-l-4 border-slate-900 dark:border-cyan-500 pl-4">
                            {content.academic.desc}
                        </p>

                        <div className="space-y-4 mb-10 flex-grow">
                            {content.academic.items.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-slate-800 dark:text-slate-300 group-hover:text-black dark:group-hover:text-white transition-colors">
                                    <CheckCircle2 size={20} className="text-slate-900 dark:text-cyan-500 shrink-0" />
                                    <span className="text-sm font-bold">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* WhatsApp CTA Button */}
                        <a 
                            href="https://wa.me/201279298987?text=Hello%20VEXL%20Studio,%20I%20am%20interested%20in%20Academic%20Consultancy%20for%20my%20project."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 bg-slate-900 dark:bg-gradient-to-r dark:from-cyan-600 dark:to-teal-600 text-white font-black text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 hover:bg-black hover:gap-4 shadow-lg hover:shadow-xl cursor-pointer"
                        >
                            {content.academic.cta}
                            <ArrowRight size={16} />
                        </a>
                    </div>
                </motion.div>

                {/* 2. Enterprise Division */}
                <motion.div
                    // Changed to animate for immediate visibility
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="relative rounded-xl border border-slate-300 dark:border-white/5 bg-slate-200 dark:bg-white/[0.02] p-8 md:p-12 overflow-hidden flex flex-col justify-center items-center text-center shadow-inner"
                >
                    <div className="relative z-10 opacity-70 hover:opacity-100 transition-opacity">
                        <div className="bg-white dark:bg-white/5 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 border border-slate-300 dark:border-white/10 shadow-sm">
                            <Lock size={32} className="text-slate-700 dark:text-slate-500" />
                        </div>

                        <h3 className="text-3xl font-bold text-slate-700 dark:text-slate-500 mb-2 tracking-tight">{content.corporate.title}</h3>
                        
                        <div className="flex items-center justify-center gap-2 text-red-700 dark:text-red-900/50 text-xs font-mono font-bold tracking-widest uppercase mb-6">
                            <Lock size={12} />
                            {content.corporate.status}
                        </div>

                        <p className="text-slate-600 dark:text-slate-600 max-w-sm mx-auto text-sm font-bold leading-relaxed">
                            {content.corporate.desc}
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    </section>
  );
};

export default Services;
