
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, MapPin, Download, AlertTriangle, ShieldAlert } from 'lucide-react';
import { Content } from '../types';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: Content['caseStudy'];
  isRtl: boolean;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ isOpen, onClose, content, isRtl }) => {
  const [showRestrictedToast, setShowRestrictedToast] = useState(false);

  const handleDownloadAttempt = () => {
    setShowRestrictedToast(true);
    setTimeout(() => setShowRestrictedToast(false), 3000);
  };

  // Use Portal to render outside the DOM hierarchy to avoid z-index/transform clipping issues
  // This ensures the modal is always centered on the screen regardless of scroll position
  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // Added 'top-0 left-0 w-screen h-screen' explicitly to ensure it covers viewport
          className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className={`bg-[#050505] border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl relative shadow-2xl ${isRtl ? 'text-right font-arabic' : 'text-left font-sans'}`}
            dir={isRtl ? 'rtl' : 'ltr'}
          >
            {/* Header Image Area */}
            <div className="relative h-48 md:h-64 bg-slate-900 overflow-hidden group">
                {/* Realistic Dark Map Background (Dynamic from Constants) */}
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                    style={{ 
                        backgroundImage: `url("${content.image}")`,
                        filter: 'grayscale(100%) contrast(1.2) brightness(0.6)'
                    }} 
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />

                <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="absolute bottom-6 left-6 md:left-12 z-10">
                    <div className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                        {content.label}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">{content.title}</h2>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-8 md:p-12 space-y-12">
                
                {/* Stats Row */}
                <div className="flex flex-wrap gap-8 p-6 bg-white/[0.03] rounded-xl border border-white/5">
                    <div>
                        <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Impact</div>
                        <div className="text-2xl font-bold text-white font-mono">40% Growth</div>
                    </div>
                    <div>
                        <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Tech Stack</div>
                        <div className="text-2xl font-bold text-white font-mono">GeoJSON / React</div>
                    </div>
                    <div>
                        <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Duration</div>
                        <div className="text-2xl font-bold text-white font-mono">3 Weeks</div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-red-400 font-bold text-lg">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            {content.details.problem.title}
                        </div>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            {content.details.problem.text}
                        </p>
                    </div>

                    <div className="space-y-4">
                         <div className="flex items-center gap-3 text-cyan-400 font-bold text-lg">
                            <div className="w-2 h-2 rounded-full bg-cyan-500" />
                            {content.details.solution.title}
                        </div>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            {content.details.solution.text}
                        </p>
                    </div>

                    <div className="space-y-4">
                         <div className="flex items-center gap-3 text-emerald-400 font-bold text-lg">
                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                            {content.details.result.title}
                        </div>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            {content.details.result.text}
                        </p>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-slate-500 text-sm italic">"Precision in location is precision in business."</p>
                    
                    {/* The Cyberpunk Restricted Button */}
                    <button 
                        onClick={handleDownloadAttempt}
                        className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/50 rounded-sm text-xs font-bold font-mono tracking-widest text-slate-300 hover:text-red-400 transition-all duration-300 group"
                    >
                        <Download size={14} className="group-hover:animate-bounce" />
                        {isRtl ? 'تحميل التقرير الكامل (PDF)' : 'DOWNLOAD FULL REPORT'}
                    </button>
                </div>

            </div>
          </motion.div>

          {/* Restricted Access Toast */}
          <AnimatePresence>
              {showRestrictedToast && (
                  <motion.div 
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 50, scale: 0.9 }}
                      className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[10000] flex items-center gap-4 px-6 py-4 bg-red-950/90 border border-red-500/50 rounded-sm shadow-[0_0_30px_rgba(220,38,38,0.4)] backdrop-blur-xl"
                  >
                      <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center border border-red-500">
                          <ShieldAlert size={18} className="text-red-500" />
                      </div>
                      <div className="text-left">
                          <div className="text-red-500 font-black font-mono text-xs uppercase tracking-widest mb-0.5">Access Denied</div>
                          <div className="text-white text-xs font-bold">Enterprise Credentials Required for Full Report.</div>
                      </div>
                  </motion.div>
              )}
          </AnimatePresence>

        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default CaseStudyModal;
