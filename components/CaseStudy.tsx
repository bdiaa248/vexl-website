
import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, ArrowRight, MapPin } from 'lucide-react';
import { Content, Language } from '../types';
import CountUp from './CountUp';

interface CaseStudyProps {
  content: Content['caseStudy'];
  lang: Language;
  onOpenModal: () => void;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ content, lang, onOpenModal }) => {
  const isRtl = lang === 'ar';

  const pins = [
    { top: '30%', left: '40%', delay: 0 },
    { top: '45%', left: '60%', delay: 0.5 },
    { top: '25%', left: '70%', delay: 1.2 },
    { top: '60%', left: '30%', delay: 0.8 },
    { top: '70%', left: '55%', delay: 1.5 },
    { top: '50%', left: '20%', delay: 2.0 },
  ];

  return (
    // ENFORCE DARK THEME HERE: bg-[#02040a] and text-white
    <section className="py-24 bg-[#02040a] relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative"
          >
             <div className="aspect-[4/3] rounded-sm overflow-hidden border border-white/10 relative group bg-slate-900 cursor-pointer shadow-2xl shadow-black/50" onClick={onOpenModal}>
                
                <div 
                    className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105"
                    style={{
                        backgroundImage: `url("${content.image}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'grayscale(100%) brightness(0.4) contrast(1.2)' 
                    }}
                />

                {/* Abstract UI Layer */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
                    
                    {pins.map((pin, idx) => (
                        <div 
                            key={idx}
                            className="absolute w-2 h-2 bg-teal-500/50 rounded-full"
                            style={{ top: pin.top, left: pin.left }}
                        >
                             <div 
                                className="absolute inset-0 bg-teal-400 rounded-full animate-ping opacity-75" 
                                style={{ animationDelay: `${pin.delay}s`, animationDuration: '3s' }} 
                             />
                        </div>
                    ))}

                    <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]">
                        <path 
                            d="M 100 300 Q 250 250 450 180" 
                            fill="none" 
                            stroke="#06b6d4" 
                            strokeWidth="2" 
                            strokeDasharray="4 4" 
                            className="opacity-80"
                        />
                    </svg>

                    <div className="absolute top-[300px] left-[100px] -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]" />
                    </div>

                    <div className="absolute top-[180px] left-[450px] -translate-x-1/2 -translate-y-1/2 z-20">
                         <div className="relative group/pin">
                            <div className="w-12 h-12 bg-cyan-500/20 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                            <div className="w-6 h-6 bg-cyan-500/40 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            
                            <div className="relative z-10 text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,1)] transform -translate-y-2 group-hover/pin:-translate-y-4 transition-transform duration-300">
                                <MapPin size={32} fill="currentColor" />
                            </div>

                            <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 bg-cyan-950/90 border border-cyan-500/50 px-3 py-1 rounded text-[10px] text-cyan-300 font-mono whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity duration-300">
                                0.8 KM AWAY
                            </div>
                         </div>
                    </div>

                    <div className="absolute top-6 left-6 flex justify-between">
                        <div className="bg-black/60 backdrop-blur-md border border-cyan-500/30 px-3 py-1.5 rounded-sm text-[10px] text-cyan-400 font-mono flex items-center gap-2">
                             <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse shadow-[0_0_8px_#2dd4bf]" />
                             LIVE TRACKING
                        </div>
                    </div>

                    <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-xl border-l-2 border-cyan-500 p-4 w-40 shadow-2xl">
                        <div className="text-[9px] text-slate-500 uppercase tracking-wider mb-1">Estimated Arrival</div>
                        <div className="text-xl font-bold text-white font-mono flex items-baseline gap-1">
                             <CountUp value="12" /> <span className="text-sm text-slate-400">MIN</span>
                        </div>
                    </div>
                </div>
             </div>
          </motion.div>

          {/* Text Side - Explicitly using text-white to ignore global Light Mode */}
          <motion.div 
             initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, amount: 0.1 }}
             transition={{ duration: 1 }}
             className={`w-full lg:w-1/2 space-y-8 ${isRtl ? 'text-right' : 'text-left'}`}
          >
            <div className="text-cyan-500 font-mono text-xs tracking-widest uppercase font-bold">
                {content.label}
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                {content.title}
            </h2>
            
            <p className="text-lg text-slate-300 font-medium leading-relaxed max-w-lg">
                {content.desc}
            </p>

            <div className={`flex items-center gap-4 pt-4 border-t border-white/10 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="p-3 bg-white/5 rounded-sm text-cyan-400">
                    <Navigation size={24} />
                </div>
                <div>
                    <div className="text-sm text-slate-400 uppercase tracking-wide font-bold">Outcome</div>
                    <div className="text-white font-bold text-xl">{content.metric}</div>
                </div>
            </div>

            <button 
                onClick={onOpenModal}
                className="group flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-400 transition-colors uppercase tracking-widest mt-4"
            >
                {content.cta}
                <ArrowRight size={16} className={`transition-transform duration-300 ${isRtl ? 'rotate-180 group-hover:-translate-x-2' : 'group-hover:translate-x-2'}`} />
            </button>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudy;
