
import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal, ShieldCheck, Loader2, FileCode, Cpu, User, AlertCircle, Mail } from 'lucide-react';
import { Content, Language } from '../types';
import emailjs from '@emailjs/browser';

interface VettingModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: Content['vetting'];
  isRtl: boolean;
}

const VettingModal: React.FC<VettingModalProps> = ({ isOpen, onClose, content, isRtl }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '', // Added Email to State
    university: '',
    project: '',
    why: '',
    skill: 'Novice' 
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // If SSR or document not found
  if (typeof document === 'undefined') return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('submitting');
    
    const env = (import.meta as any).env;

    // Using VITE_EMAILJS_VETTING_TEMPLATE_ID specifically for this form
    emailjs.sendForm(
      env.VITE_EMAILJS_SERVICE_ID,
      env.VITE_EMAILJS_VETTING_TEMPLATE_ID, 
      formRef.current,
      env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
        setStatus('success');
        // Reset form including email
        setFormState({ name: '', email: '', university: '', project: '', why: '', skill: 'Novice' });
    }, (error) => {
        console.error('VETTING FAILED...', error);
        setStatus('error');
        // Reset status after 3 seconds to allow retry
        setTimeout(() => setStatus('idle'), 4000);
    });
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className={`w-full max-w-2xl bg-[#050505] border border-cyan-900/30 rounded-lg overflow-hidden relative shadow-[0_0_50px_rgba(6,182,212,0.1)] ${isRtl ? 'text-right font-arabic' : 'text-left font-sans'}`}
            dir={isRtl ? 'rtl' : 'ltr'}
          >
            {/* Cyberpunk Scanner Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 animate-[scan_3s_linear_infinite]" />
            
            {/* Header */}
            <div className="p-6 border-b border-cyan-900/30 bg-cyan-950/10 flex items-center justify-between">
                <div className="flex items-center gap-3 text-cyan-500 font-mono text-xs font-bold uppercase tracking-widest">
                    <Terminal size={16} />
                    {isRtl ? 'بروتوكول آمن' : 'SECURE PROTOCOL'}
                </div>
                <button 
                    onClick={onClose} 
                    className="text-slate-500 hover:text-cyan-400 transition-colors"
                >
                    <X size={20} />
                </button>
            </div>

            <div className="p-8 md:p-12 relative min-h-[500px]">
                {/* Background Noise */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50 pointer-events-none" />

                <AnimatePresence mode="wait">
                    {status === 'success' ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center h-full text-center space-y-8 py-12"
                        >
                            <div className="w-24 h-24 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center relative">
                                <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-ping" />
                                <ShieldCheck size={48} className="text-cyan-500" />
                            </div>
                            
                            <div className="space-y-4">
                                <h2 className="text-3xl font-black text-white tracking-tight">{content.successTitle}</h2>
                                <p className="text-slate-400 max-w-md mx-auto leading-relaxed font-mono text-sm">
                                    {content.successDesc}
                                </p>
                            </div>

                            <div className="px-4 py-2 bg-cyan-950/30 border border-cyan-500/20 rounded text-[10px] text-cyan-400 font-mono tracking-widest uppercase animate-pulse">
                                {isRtl ? 'إرسال مشفر' : 'TRANSMISSION ENCRYPTED'}
                            </div>
                        </motion.div>
                    ) : status === 'error' ? (
                        <motion.div
                            key="error"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center justify-center h-full text-center space-y-8 py-12"
                        >
                            <div className="w-24 h-24 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center relative">
                                <AlertCircle size={48} className="text-red-500" />
                            </div>
                            
                            <div className="space-y-4">
                                <h2 className="text-3xl font-black text-white tracking-tight">Transmission Failed</h2>
                                <p className="text-slate-400 max-w-md mx-auto leading-relaxed font-mono text-sm">
                                    Secure link unstable. Retrying connection protocol...
                                </p>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="mb-10 text-center md:text-left">
                                <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">{content.title}</h2>
                                <p className="text-slate-400 text-sm font-mono">{content.subtitle}</p>
                            </div>

                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                {/* HIDDEN INPUT FOR SKILL SELECTION */}
                                <input type="hidden" name="skill_level" value={formState.skill} />

                                {/* Row 1: Name & Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs text-cyan-600 font-bold uppercase tracking-wider block">{content.fields.name}</label>
                                        <div className="relative">
                                            <User size={16} className={`absolute top-3 text-slate-600 ${isRtl ? 'right-3' : 'left-3'}`} />
                                            <input 
                                                required
                                                type="text" 
                                                name="user_name"
                                                value={formState.name}
                                                onChange={e => setFormState({...formState, name: e.target.value})}
                                                className={`w-full bg-black/40 border border-slate-800 focus:border-cyan-500 text-white py-2.5 rounded text-sm transition-colors outline-none placeholder-slate-700 ${isRtl ? 'pr-10' : 'pl-10'}`}
                                                placeholder={isRtl ? 'الاسم' : 'John Doe'}
                                            />
                                        </div>
                                    </div>

                                    {/* Added Email Field */}
                                    <div className="space-y-2">
                                        <label className="text-xs text-cyan-600 font-bold uppercase tracking-wider block">
                                            {isRtl ? 'البريد الإلكتروني' : 'Email Address'}
                                        </label>
                                        <div className="relative">
                                            <Mail size={16} className={`absolute top-3 text-slate-600 ${isRtl ? 'right-3' : 'left-3'}`} />
                                            <input 
                                                required
                                                type="email" 
                                                name="user_email" 
                                                value={formState.email}
                                                onChange={e => setFormState({...formState, email: e.target.value})}
                                                className={`w-full bg-black/40 border border-slate-800 focus:border-cyan-500 text-white py-2.5 rounded text-sm transition-colors outline-none placeholder-slate-700 ${isRtl ? 'pr-10' : 'pl-10'}`}
                                                placeholder="student@example.com"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Row 2: University & Project Link */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs text-cyan-600 font-bold uppercase tracking-wider block">{content.fields.university}</label>
                                        <input 
                                            required
                                            type="text" 
                                            name="university"
                                            value={formState.university}
                                            onChange={e => setFormState({...formState, university: e.target.value})}
                                            className="w-full bg-black/40 border border-slate-800 focus:border-cyan-500 text-white py-2.5 px-4 rounded text-sm transition-colors outline-none placeholder-slate-700"
                                            placeholder={isRtl ? 'جامعة القاهرة - سنة رابعة' : 'Cairo University'}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs text-cyan-600 font-bold uppercase tracking-wider block">{content.fields.project}</label>
                                        <div className="relative">
                                            <FileCode size={16} className={`absolute top-3 text-slate-600 ${isRtl ? 'right-3' : 'left-3'}`} />
                                            <input 
                                                required
                                                type="url" 
                                                name="project_link"
                                                value={formState.project}
                                                onChange={e => setFormState({...formState, project: e.target.value})}
                                                className={`w-full bg-black/40 border border-slate-800 focus:border-cyan-500 text-white py-2.5 rounded text-sm transition-colors outline-none placeholder-slate-700 ${isRtl ? 'pr-10' : 'pl-10'}`}
                                                placeholder="https://github.com/..."
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                     <label className="text-xs text-cyan-600 font-bold uppercase tracking-wider block">{content.fields.skill}</label>
                                     <div className="grid grid-cols-3 gap-3">
                                        {content.skillOptions.map((opt) => (
                                            <div 
                                                key={opt}
                                                onClick={() => setFormState({...formState, skill: opt})}
                                                className={`cursor-pointer border rounded py-2 px-2 text-center text-xs font-bold uppercase transition-all
                                                    ${formState.skill === opt 
                                                        ? 'bg-cyan-900/40 border-cyan-500 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]' 
                                                        : 'bg-black/40 border-slate-800 text-slate-500 hover:border-slate-600'}`}
                                            >
                                                {opt}
                                            </div>
                                        ))}
                                     </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs text-cyan-600 font-bold uppercase tracking-wider block">{content.fields.why}</label>
                                    <textarea 
                                        required
                                        rows={3}
                                        name="mission_statement" 
                                        value={formState.why}
                                        onChange={e => setFormState({...formState, why: e.target.value})}
                                        className="w-full bg-black/40 border border-slate-800 focus:border-cyan-500 text-white py-3 px-4 rounded text-sm transition-colors outline-none placeholder-slate-700 resize-none"
                                        placeholder={isRtl ? 'لماذا تريد الانضمام؟' : 'Brief us on your mission...'}
                                    />
                                </div>

                                <button 
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full py-4 bg-cyan-700 hover:bg-cyan-600 text-white font-bold text-sm tracking-widest uppercase transition-all duration-300 rounded-sm shadow-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                                >
                                    {status === 'submitting' ? (
                                        <>
                                            <Loader2 size={16} className="animate-spin" />
                                            {isRtl ? 'جاري المعالجة...' : 'PROCESSING DOSSIER...'}
                                        </>
                                    ) : (
                                        <>
                                            <Cpu size={16} className="group-hover:animate-pulse" />
                                            {content.submit}
                                        </>
                                    )}
                                </button>

                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            
            {/* Footer */}
            <div className="p-4 bg-black/60 border-t border-cyan-900/20 flex justify-between text-[10px] font-mono text-slate-600 uppercase">
                <span>VEXL ACADEMY // RECRUITMENT</span>
                <span>ID: {Math.floor(Math.random() * 9000) + 1000}</span>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default VettingModal;
