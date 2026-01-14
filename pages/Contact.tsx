
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Globe, ShieldCheck, ArrowRight, Loader2, Check, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { Content, Language } from '../types';

interface ContactProps {
  content?: Content;
  lang: Language;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formState, setFormState] = useState({ name: '', email: '', org: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isHovered, setIsHovered] = useState(false);

  const isRtl = lang === 'ar';

  const title = lang === 'en' ? "Contact Secure Uplink" : "اتصل بنا";
  const description = lang === 'en'
    ? "Establish a secure uplink with VEXL. Contact us for enterprise location intelligence solutions or academic support."
    : "تواصل مع VEXL عبر رابط آمن. استفسر عن حلول ذكاء الموقع للمؤسسات أو الدعم الأكاديمي.";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('loading');
    const env = (import.meta as any).env;
    
    emailjs.sendForm(
      env.VITE_EMAILJS_SERVICE_ID,
      env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
        setStatus('success');
        setFormState({ name: '', email: '', org: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
    }, () => {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
    });
  };

  return (
    <PageTransition>
      <SEO 
        title={title}
        description={description}
        lang={lang}
      />
      {/* 
         FIX: Changed `justify-center` to `justify-start lg:justify-center` 
         to prevent top content clipping on mobile when content is tall.
         Also changed `overflow-hidden` to `overflow-x-hidden` to allow vertical scroll.
      */}
      <div className="pt-32 pb-20 min-h-screen relative overflow-x-hidden flex flex-col justify-start lg:justify-center transition-colors duration-500">
        
        {/* Background Decor */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-900/10 rounded-full blur-[128px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left Side: Intel & Map */}
            <div className={`space-y-10 ${isRtl ? 'lg:order-2 text-right' : 'lg:order-1 text-left'}`}>
                <div>
                    <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-500 font-mono text-xs tracking-[0.2em] uppercase mb-4 font-bold">
                        <div className="w-2 h-2 bg-cyan-600 dark:bg-cyan-500 rounded-full animate-pulse" />
                        SECURE UPLINK STATION
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
                        Establish <br/> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-slate-600 dark:from-cyan-400 dark:to-slate-400">Connection.</span>
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg font-medium leading-relaxed max-w-md">
                        Whether you require enterprise location intelligence or academic access, our channel is open. 
                    </p>
                </div>

                {/* Map Visualization */}
                <div className="relative h-64 w-full bg-slate-100 dark:bg-slate-900/50 rounded-lg border border-slate-300 dark:border-white/10 overflow-hidden group shadow-inner">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent w-full h-[2px] animate-[scan_3s_linear_infinite]" />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center space-y-2">
                             <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-500/20 border border-cyan-500 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                                <Globe size={24} className="text-cyan-600 dark:text-cyan-400" />
                             </div>
                             <div className="text-xs font-mono text-cyan-700 dark:text-cyan-300 tracking-widest uppercase font-bold">HQ Signal Active</div>
                             <div className="text-[10px] font-mono text-slate-500">30.0444° N, 31.2357° E</div>
                        </div>
                    </div>

                    {/* Corner Markers */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-cyan-500" />
                    <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-cyan-500" />
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-cyan-500" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-cyan-500" />
                </div>

                {/* Contact Details with Glow Effects */}
                <div className="space-y-4">
                    <div className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-cyan-50 dark:hover:bg-cyan-900/10 border border-transparent hover:border-cyan-500/20 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] group cursor-pointer ${isRtl ? 'flex-row-reverse text-right' : 'text-left'}`}>
                        <div className="p-3 bg-slate-200 dark:bg-white/5 rounded-full text-cyan-700 dark:text-cyan-400 border border-slate-300 dark:border-white/10 group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all duration-300">
                            <Mail size={20} />
                        </div>
                        <div>
                            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1 font-bold group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">Encrypted Mail</div>
                            <div className="text-slate-800 dark:text-white font-mono font-bold group-hover:text-cyan-800 dark:group-hover:text-cyan-300 transition-colors">vexl.gis@gmail.com</div>
                        </div>
                    </div>
                    
                    <div className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-cyan-50 dark:hover:bg-cyan-900/10 border border-transparent hover:border-cyan-500/20 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] group cursor-pointer ${isRtl ? 'flex-row-reverse text-right' : 'text-left'}`}>
                         <div className="p-3 bg-slate-200 dark:bg-white/5 rounded-full text-cyan-700 dark:text-cyan-400 border border-slate-300 dark:border-white/10 group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all duration-300">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1 font-bold group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">Base of Operations</div>
                            <div className="text-slate-800 dark:text-white font-mono font-bold group-hover:text-cyan-800 dark:group-hover:text-cyan-300 transition-colors">Smart Village, Cairo, EG</div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Right Side: The Interface (Form) */}
            <div className={`lg:order-2 ${isRtl ? 'lg:order-1' : ''}`}>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white dark:bg-black/20 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-slate-200 dark:border-white/10 relative overflow-hidden shadow-xl"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-transparent opacity-50" />
                    
                    <AnimatePresence mode="wait">
                        {status === 'success' ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center justify-center text-center space-y-6 py-12"
                            >
                                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/30">
                                    <Check size={40} className="text-green-500" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Transmission Complete</h3>
                                    <p className="text-slate-600 dark:text-slate-400">Our agents will establish contact shortly.</p>
                                </div>
                            </motion.div>
                        ) : status === 'error' ? (
                             <motion.div
                                key="error"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center justify-center text-center space-y-6 py-12"
                            >
                                <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/30">
                                    <AlertCircle size={40} className="text-red-500" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Transmission Failed</h3>
                                    <p className="text-slate-600 dark:text-slate-400">Secure link unstable. Please try again.</p>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.form 
                                ref={formRef}
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="space-y-8" 
                                onSubmit={handleSubmit}
                            >
                                <h3 className={`text-2xl font-bold text-slate-900 dark:text-white mb-8 ${isRtl ? 'text-right' : 'text-left'}`}>
                                    {lang === 'en' ? 'Transmit Request' : 'إرسال طلب'}
                                </h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="group relative">
                                        <input 
                                            type="text" 
                                            name="user_name"
                                            required
                                            disabled={status === 'loading'}
                                            value={formState.name}
                                            onChange={(e) => setFormState({...formState, name: e.target.value})}
                                            className={`w-full bg-transparent border-b-2 border-slate-300 dark:border-slate-700 py-3 text-slate-900 dark:text-white placeholder-transparent focus:outline-none focus:border-cyan-500 focus:shadow-[0_4px_12px_-2px_rgba(6,182,212,0.2)] transition-all duration-300 peer disabled:opacity-50 font-medium ${isRtl ? 'text-right' : 'text-left'}`}
                                            placeholder="Name"
                                            id="name"
                                        />
                                        <label 
                                            htmlFor="name"
                                            className={`absolute left-0 -top-3.5 text-slate-500 dark:text-slate-400 text-xs font-bold transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-cyan-600 dark:peer-focus:text-cyan-400 peer-focus:text-xs ${isRtl ? 'right-0 left-auto' : 'left-0'}`}
                                        >
                                            {lang === 'en' ? 'Codename / Name' : 'الاسم'}
                                        </label>
                                    </div>

                                    <div className="group relative">
                                        <input 
                                            type="email"
                                            name="user_email" 
                                            required
                                            disabled={status === 'loading'}
                                            value={formState.email}
                                            onChange={(e) => setFormState({...formState, email: e.target.value})}
                                            className={`w-full bg-transparent border-b-2 border-slate-300 dark:border-slate-700 py-3 text-slate-900 dark:text-white placeholder-transparent focus:outline-none focus:border-cyan-500 focus:shadow-[0_4px_12px_-2px_rgba(6,182,212,0.2)] transition-all duration-300 peer disabled:opacity-50 font-medium ${isRtl ? 'text-right' : 'text-left'}`}
                                            placeholder="Email"
                                            id="email"
                                        />
                                        <label 
                                            htmlFor="email"
                                            className={`absolute left-0 -top-3.5 text-slate-500 dark:text-slate-400 text-xs font-bold transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-cyan-600 dark:peer-focus:text-cyan-400 peer-focus:text-xs ${isRtl ? 'right-0 left-auto' : 'left-0'}`}
                                        >
                                            {lang === 'en' ? 'Frequency / Email' : 'البريد الإلكتروني'}
                                        </label>
                                    </div>
                                </div>

                                <div className="group relative">
                                    <input 
                                        type="text" 
                                        name="organization"
                                        disabled={status === 'loading'}
                                        value={formState.org}
                                        onChange={(e) => setFormState({...formState, org: e.target.value})}
                                        className={`w-full bg-transparent border-b-2 border-slate-300 dark:border-slate-700 py-3 text-slate-900 dark:text-white placeholder-transparent focus:outline-none focus:border-cyan-500 focus:shadow-[0_4px_12px_-2px_rgba(6,182,212,0.2)] transition-all duration-300 peer disabled:opacity-50 font-medium ${isRtl ? 'text-right' : 'text-left'}`}
                                        placeholder="Organization"
                                        id="org"
                                    />
                                    <label 
                                        htmlFor="org"
                                        className={`absolute left-0 -top-3.5 text-slate-500 dark:text-slate-400 text-xs font-bold transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-cyan-600 dark:peer-focus:text-cyan-400 peer-focus:text-xs ${isRtl ? 'right-0 left-auto' : 'left-0'}`}
                                    >
                                        {lang === 'en' ? 'Affiliation / Organization (Optional)' : 'المؤسسة (اختياري)'}
                                    </label>
                                </div>

                                <div className="group relative">
                                    <textarea 
                                        rows={4}
                                        name="message"
                                        required
                                        disabled={status === 'loading'}
                                        value={formState.message}
                                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                                        className={`w-full bg-transparent border-b-2 border-slate-300 dark:border-slate-700 py-3 text-slate-900 dark:text-white placeholder-transparent focus:outline-none focus:border-cyan-500 focus:shadow-[0_4px_12px_-2px_rgba(6,182,212,0.2)] transition-all duration-300 peer resize-none disabled:opacity-50 font-medium ${isRtl ? 'text-right' : 'text-left'}`}
                                        placeholder="Message"
                                        id="message"
                                    />
                                    <label 
                                        htmlFor="message"
                                        className={`absolute left-0 -top-3.5 text-slate-500 dark:text-slate-400 text-xs font-bold transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-cyan-600 dark:peer-focus:text-cyan-400 peer-focus:text-xs ${isRtl ? 'right-0 left-auto' : 'left-0'}`}
                                    >
                                        {lang === 'en' ? 'Transmission Data / Message' : 'الرسالة'}
                                    </label>
                                </div>

                                <button 
                                    type="submit"
                                    disabled={status === 'loading'}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    className="w-full py-5 bg-slate-900 dark:bg-gradient-to-r dark:from-cyan-900 dark:to-slate-900 text-white font-mono tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-3 relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed rounded-sm"
                                >
                                    <div className="absolute inset-0 bg-cyan-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    <span className="relative z-10 flex items-center gap-2 font-bold">
                                        {status === 'loading' ? (
                                            <>
                                                <Loader2 className="animate-spin" size={18} />
                                                UPLINKING...
                                            </>
                                        ) : (
                                            <>
                                                {lang === 'en' ? 'Initialize Connection' : 'بدء الاتصال'}
                                                <ArrowRight className={`transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''} ${isRtl && isHovered ? '-translate-x-2' : ''}`} size={18} />
                                            </>
                                        )}
                                    </span>
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>

                    <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 dark:text-slate-600 font-mono mt-8">
                        <ShieldCheck size={12} />
                        TLS ENCRYPTION ACTIVE // SECURE CHANNEL
                    </div>

                </motion.div>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
