
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock } from 'lucide-react';
import { Content, Language } from '../types';
import VettingModal from './VettingModal';

interface AcademyProps {
  content: Content['academy'];
  // We need the full content to pass the 'vetting' section to the modal
  fullContent: Content; 
  lang: Language;
}

const Academy: React.FC<AcademyProps> = ({ content, fullContent, lang }) => {
  const [isVettingOpen, setIsVettingOpen] = useState(false);
  const isRtl = lang === 'ar';

  return (
    // FORCE DARK BACKGROUND regardless of theme to maintain cinematic look and ensure white text is visible
    // Reduced padding-y from py-32 to py-12 md:py-20 to bring content up
    <section id="academy" className="py-12 md:py-20 relative bg-[#050505] text-white rounded-3xl mx-4 md:mx-0 overflow-hidden shadow-2xl">
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        <motion.div
           // CHANGED: animate immediately instead of whileInView to ensure visibility on mobile
           initial={{ opacity: 0, scale: 0.95, y: 20 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="relative max-w-4xl mx-auto border border-white/10 bg-white/[0.05] backdrop-blur-sm p-8 md:p-24 overflow-hidden rounded-xl"
        >
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20 mb-4 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                    <ShieldCheck className="text-cyan-400" size={32} />
                </div>

                <h2 className="text-3xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg leading-tight">
                    {content.title}
                </h2>

                <p className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl">
                    {content.subtitle}
                </p>

                <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-6" />

                <div className="flex flex-col items-center gap-4">
                    <button 
                        onClick={() => setIsVettingOpen(true)}
                        className="px-10 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] rounded-sm"
                    >
                        {content.cta}
                    </button>
                    <div className="text-xs font-mono text-cyan-300/80 flex items-center gap-2">
                        <Lock size={12} />
                        {content.tagline}
                    </div>
                </div>
            </div>

        </motion.div>

        <VettingModal 
            isOpen={isVettingOpen}
            onClose={() => setIsVettingOpen(false)}
            content={fullContent.vetting}
            isRtl={isRtl}
        />

      </div>
    </section>
  );
};

export default Academy;
