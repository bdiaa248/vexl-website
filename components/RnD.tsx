
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Content } from '../types';
import { Lock, Fingerprint, X, Terminal, AlertTriangle } from 'lucide-react';

interface RnDProps {
  content: Content['rnd'];
}

const RnD: React.FC<RnDProps> = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);

  // FORCE DARK MODE: bg-black and text-white overrides
  return (
    <section className="py-24 bg-black relative overflow-hidden border-y border-white/5 text-white">
      {/* Static Noise Overlay */}
      <div className="bg-noise z-10" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            
            <div className="space-y-4 w-full md:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-900/10 border border-red-900/40 text-red-500 text-[10px] font-mono tracking-widest uppercase animate-pulse">
                    <Lock size={10} />
                    {content.status}
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                    {content.title}
                </h2>
                <p className="text-slate-400 font-mono text-sm max-w-md">
                    {content.desc}
                </p>
            </div>

            {/* Clickable Card */}
            <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(true)}
                className="w-full md:w-1/2 cursor-pointer relative z-30"
            >
                <div className="p-10 md:p-12 border border-white/10 bg-white/[0.03] backdrop-blur-sm relative overflow-hidden group rounded-lg transition-colors hover:bg-white/[0.05] hover:border-red-500/30 min-h-[250px] flex flex-col justify-center">
                    {/* Scanner Line */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.5)] animate-[scan_2s_linear_infinite]" />
                    
                    <div className="font-mono text-xs text-red-500/70 mb-8 flex justify-between absolute top-6 left-6 right-6">
                        <span>PROJECT: RETAIL_NEXUS</span>
                        <span className="flex items-center gap-2"><Lock size={10} /> DECRYPT</span>
                    </div>
                    
                    <div className="space-y-4 relative blur-[3px] group-hover:blur-[5px] transition-all duration-500 opacity-40 mt-6">
                        <div className="h-2 bg-white/20 w-full rounded-full" />
                        <div className="h-2 bg-white/20 w-3/4 rounded-full" />
                        <div className="h-2 bg-white/20 w-5/6 rounded-full" />
                        <div className="h-2 bg-white/20 w-full rounded-full" />
                    </div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-[2px] transition-opacity duration-300 gap-6 p-6">
                        <div className="p-4 rounded-full border border-red-500/30 bg-red-500/5 text-red-500 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(220,38,38,0.1)]">
                            <Fingerprint size={32} />
                        </div>
                        <p className="text-red-400 font-mono text-center text-sm md:text-base px-2 font-bold tracking-widest border-y border-red-500/20 py-4 max-w-[90%] leading-loose group-hover:text-red-300 transition-colors">
                            "{content.redacted}"
                        </p>
                    </div>
                </div>
            </motion.div>

        </div>
      </div>

      {isOpen && createPortal(
        <AnimatePresence mode="wait">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center px-4 bg-black/95 backdrop-blur-xl"
                onClick={() => setIsOpen(false)}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    className="w-full max-w-2xl bg-[#050505] border border-red-900/50 rounded-sm relative overflow-hidden shadow-[0_0_100px_rgba(220,38,38,0.15)] text-left"
                >
                    <div className="flex items-center justify-between px-6 py-4 border-b border-red-900/30 bg-red-950/10">
                        <div className="flex items-center gap-3 text-red-500 font-mono text-xs uppercase tracking-widest">
                            <Terminal size={14} />
                            Classified Transmission
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-red-500/50 hover:text-red-500 transition-colors p-2 hover:bg-red-500/10 rounded-full">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="p-8 md:p-16 relative min-h-[300px] flex flex-col justify-center">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
                        
                        <div className="relative z-10 flex flex-col items-center text-center gap-8">
                            <motion.div 
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-20 h-20 rounded-full border-2 border-red-500/50 flex items-center justify-center text-red-500 bg-red-500/5 shadow-[0_0_30px_rgba(220,38,38,0.2)]"
                            >
                                <AlertTriangle size={40} />
                            </motion.div>

                            <div className="space-y-6 max-w-lg">
                                <h3 className="text-xl font-mono text-red-700 tracking-widest uppercase">
                                    Subject: Project Retail Nexus
                                </h3>
                                
                                <div className="h-px w-full bg-gradient-to-r from-transparent via-red-900/50 to-transparent" />
                                
                                <p className="text-2xl md:text-3xl text-white font-bold leading-normal tracking-tight drop-shadow-[0_2px_10px_rgba(220,38,38,0.5)]">
                                    "{content.redacted}"
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-red-950/20 py-3 text-center border-t border-red-900/30 flex justify-between px-6 font-mono text-[10px] text-red-500/40 uppercase tracking-widest">
                        <span>// CONFIDENTIAL</span>
                        <span className="animate-pulse">EYES ONLY</span>
                        <span>VEXL LABS</span>
                    </div>

                </motion.div>
            </motion.div>
        </AnimatePresence>,
        document.body
      )}

    </section>
  );
};

export default RnD;
