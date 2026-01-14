
import React from 'react';
import PageTransition from '../components/PageTransition';
import { Content, Language } from '../types';
import { Compass, Database, Globe2, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface PhilosophyProps {
  content: Content;
  lang: Language;
}

const Philosophy: React.FC<PhilosophyProps> = ({ content, lang }) => {
  const data = content.philosophy;
  const isRtl = lang === 'ar';

  return (
    <PageTransition>
      {/* Force Dark Mode Only */}
      <div className={`min-h-screen bg-[#02040a] text-white pt-24 pb-20 relative overflow-hidden ${isRtl ? 'font-arabic text-right' : 'font-sans text-left'}`} dir={isRtl ? 'rtl' : 'ltr'}>
        
        {/* Abstract Grid Background */}
        <div className="absolute inset-0 perspective-[1000px] pointer-events-none">
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 transform-gpu rotate-x-12 scale-150" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
            
            {/* Header Section */}
            <div className="max-w-4xl mx-auto text-center mb-24 mt-12">
                <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="w-20 h-20 mx-auto border border-white/20 rounded-full flex items-center justify-center mb-8 relative"
                >
                    <Compass size={40} className="text-white animate-spin-slow duration-[10000ms]" />
                    <div className="absolute inset-0 rounded-full border border-white/10 scale-125 animate-ping opacity-20" />
                </motion.div>

                <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-7xl font-black tracking-tight mb-8"
                >
                    {data.title}
                </motion.h1>

                <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed"
                >
                    {data.intro}
                </motion.p>
            </div>

            {/* The 3 Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.pillars.map((pillar, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2, duration: 0.8 }}
                        className="group relative p-8 md:p-12 border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg hover:bg-white/[0.05] transition-colors overflow-hidden"
                    >
                        {/* Hover Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative z-10">
                            <div className="mb-6 text-cyan-400">
                                {idx === 0 && <Database size={32} />}
                                {idx === 1 && <Globe2 size={32} />}
                                {idx === 2 && <Clock size={32} />}
                            </div>

                            <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                                {pillar.title}
                            </h3>
                            
                            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                {pillar.desc}
                            </p>
                        </div>

                        {/* Decor Line */}
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-500 transition-all duration-500 group-hover:w-full" />
                    </motion.div>
                ))}
            </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Philosophy;
