
import React from 'react';
import { motion } from 'framer-motion';
import { Content } from '../types';
import { Landmark, Building2, Cross } from 'lucide-react';

interface AlliancesProps {
  content: Content['alliances'];
}

const LogoSimulator: React.FC<{ name: string; type: 'university' | 'corporate' }> = ({ name, type }) => {
    const isCairo = name.includes('Cairo') || name.includes('القاهرة');
    const isAinShams = name.includes('Ain') || name.includes('عين');
    const isAlex = name.includes('Alex') || name.includes('الإسكندرية');
    
    return (
        <div className="flex flex-col items-center gap-3 group cursor-pointer">
            {/* Logo Container */}
            <div className="w-20 h-20 rounded-full flex items-center justify-center border-2 transition-all duration-500 
                bg-white dark:bg-transparent
                border-slate-200 dark:border-white/10 
                text-slate-400 dark:text-slate-600
                
                group-hover:border-cyan-500 dark:group-hover:border-cyan-400 
                group-hover:bg-cyan-50 dark:group-hover:bg-cyan-500/10 
                group-hover:text-cyan-600 dark:group-hover:text-cyan-400
                group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] dark:group-hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]
                group-hover:scale-110
            ">
                
                {/* Simulated Iconography */}
                {isCairo && <Landmark size={36} className="transition-transform duration-500" />}
                {isAinShams && (
                    <div className="relative">
                        <Landmark size={36} className="transition-transform duration-500" />
                        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-current rounded-full" />
                    </div>
                )}
                {isAlex && <Building2 size={36} className="transition-transform duration-500" />}
                {/* Unified Corporate to Cyan as well for VEXL Network Consistency */}
                {type === 'corporate' && <Cross size={36} className="transition-transform duration-500" />}

            </div>
            
            {/* Label */}
            <span className="text-[10px] md:text-xs font-bold font-mono uppercase tracking-widest 
                text-slate-400 dark:text-slate-600 
                group-hover:text-cyan-700 dark:group-hover:text-cyan-400 
                transition-colors text-center max-w-[120px] leading-tight"
            >
                {name}
            </span>
        </div>
    )
}

const Alliances: React.FC<AlliancesProps> = ({ content }) => {
  // Duplicate list 4 times for seamless loop
  const logos = [
      ...content.logos, 
      ...content.logos, 
      ...content.logos, 
      ...content.logos
  ];

  return (
    <section id="network" className="py-24 bg-slate-50 dark:bg-[#0a0a0a] border-y border-slate-300 dark:border-white/5 relative overflow-hidden">
        
        {/* Title Tag */}
        <div className="container mx-auto px-6 md:px-12 mb-16 flex items-center justify-center gap-4">
             <div className="h-px bg-slate-400 dark:bg-white/10 w-20" />
             <span className="text-xs font-bold font-mono text-slate-600 dark:text-slate-500 tracking-[0.3em] uppercase">
                {content.title}
            </span>
            <div className="h-px bg-slate-400 dark:bg-white/10 w-20" />
        </div>

        {/* Marquee Container */}
        {/* Added py-12 here to give vertical breathing room for the hover glow effect so it doesn't get clipped */}
        <div className="relative w-full flex overflow-hidden mask-linear-fade py-12">
             {/* Fade Edges */}
             <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-slate-50 dark:from-[#0a0a0a] to-transparent z-10" />
             <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-slate-50 dark:from-[#0a0a0a] to-transparent z-10" />

            <motion.div 
                className="flex items-center gap-24 md:gap-40 whitespace-nowrap px-16"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ 
                    repeat: Infinity, 
                    ease: "linear", 
                    duration: 50
                }}
            >
                {logos.map((logo, index) => (
                    <LogoSimulator key={index} name={logo.name} type={logo.type} />
                ))}
            </motion.div>
        </div>
    </section>
  );
};

export default Alliances;
