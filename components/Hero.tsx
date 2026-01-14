
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Content, Language } from '../types';

interface HeroProps {
  content: Content['hero'];
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ content, lang }) => {
  const isRtl = lang === 'ar';

  return (
    <section id="hub" className="relative h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none">
      
      {/* Content */}
      <div className={`relative z-20 container mx-auto px-6 md:px-12 flex flex-col justify-center h-full pointer-events-auto items-start ${isRtl ? 'text-right' : 'text-left'}`}>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-2 mb-4 w-full"
        >
          <div className="flex items-center gap-2 text-slate-900 dark:text-cyan-400 text-sm font-bold font-mono tracking-widest uppercase">
             <div className="w-2.5 h-2.5 bg-slate-900 dark:bg-cyan-500 rounded-full animate-pulse shadow-sm" />
             VEXL INTELLIGENCE
          </div>
        </motion.div>

        {/* Headline: Absolute Black in Light Mode */}
        <motion.h1 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="text-6xl md:text-7xl lg:text-8xl font-black text-[#0f172a] dark:text-white tracking-tighter leading-[1.05] mb-8 max-w-4xl drop-shadow-sm dark:drop-shadow-none"
        >
          {content.headline}
        </motion.h1>

        {/* Subline: Dark Grey in Light Mode */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 max-w-xl font-semibold leading-relaxed mb-12"
        >
          {content.subline}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className={`flex flex-col sm:flex-row gap-5 ${isRtl ? 'flex-row-reverse' : ''}`}
        >
          {/* Primary Button: NOW LINKS TO STUDIO (Consultation/Projects) */}
          <Link to="/studio" className="relative overflow-hidden group px-8 py-4 bg-slate-900 dark:bg-cyan-900/30 text-white border-2 border-slate-900 dark:border-cyan-500/30 font-bold text-sm tracking-wide transition-all duration-300 hover:bg-slate-700 dark:hover:bg-cyan-500/20 hover:shadow-xl flex items-center justify-center gap-3 cursor-pointer rounded-sm shadow-lg">
            <span className="relative z-10">{content.ctaPrimary}</span>
            <ArrowRight size={18} className={`relative z-10 transition-transform duration-300 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
          </Link>
          
          {/* Secondary Button: NOW LINKS TO ACADEMY (Vetting/Training) */}
          <Link to="/academy" className="px-8 py-4 bg-white dark:bg-transparent backdrop-blur-md text-slate-900 dark:text-slate-300 border-2 border-slate-300 dark:border-white/10 hover:border-slate-900 dark:hover:border-white/30 font-bold text-sm tracking-wide transition-colors duration-300 cursor-pointer flex items-center justify-center rounded-sm shadow-md hover:shadow-lg">
            {content.ctaSecondary}
          </Link>
        </motion.div>

      </div>

      {/* Scroll Indicator - Dark in light mode */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-slate-900 dark:text-slate-600 animate-bounce"
      >
        <ChevronDown size={32} className="stroke-[3px]" />
      </motion.div>

      {/* Decorative Grid Lines - High visibility grey in light mode */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-300 dark:bg-cyan-900/30 z-20" />
      <div className={`absolute top-0 ${isRtl ? 'left-20' : 'right-20'} w-[1px] h-full bg-slate-300 dark:bg-cyan-900/10 z-10 hidden md:block`} />
    </section>
  );
};

export default Hero;
