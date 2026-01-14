
import React from 'react';
import PageTransition from '../components/PageTransition';
import { Content, Language } from '../types';
import CountUp from '../components/CountUp';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, ChevronRight } from 'lucide-react';

interface ImpactProps {
  content: Content;
  lang: Language;
}

const Impact: React.FC<ImpactProps> = ({ content, lang }) => {
  const data = content.impact;
  const isRtl = lang === 'ar';

  return (
    <PageTransition>
      {/* Dark Theme Only */}
      <div className={`min-h-screen bg-[#02040a] text-white pt-24 pb-20 relative overflow-hidden ${isRtl ? 'font-arabic text-right' : 'font-sans text-left'}`} dir={isRtl ? 'rtl' : 'ltr'}>
        
        {/* Background Map Effect */}
        <div className="absolute inset-0 opacity-30 z-0">
             <div className="absolute inset-0 bg-[#050505] opacity-90" />
             {/* Simulating map points with CSS - Cairo/Delta region representation */}
             <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_20px_#10b981] animate-ping" />
             <div className="absolute top-[35%] left-[52%] w-1.5 h-1.5 bg-emerald-500/50 rounded-full" />
             <div className="absolute top-[32%] left-[49%] w-1.5 h-1.5 bg-emerald-500/50 rounded-full" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
            
            {/* Header */}
            <div className="max-w-4xl mb-24 pt-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-block px-3 py-1 bg-emerald-900/20 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-mono mb-6 tracking-widest uppercase"
                >
                    {isRtl ? 'تقرير الأداء' : 'PERFORMANCE METRICS'}
                </motion.div>
                
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-8xl font-black tracking-tighter mb-8"
                >
                    {data.title}
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed"
                >
                    {data.intro}
                </motion.p>
            </div>

            {/* Two Main Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                
                {/* Academic Impact */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative p-8 md:p-12 border-l-2 border-slate-800 bg-gradient-to-r from-white/[0.03] to-transparent"
                >
                    <div className="mb-6 w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-white border border-slate-700">
                        <GraduationCap size={24} />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{data.academic.title}</h2>
                    <p className="text-slate-400 mb-8 leading-relaxed">
                        {data.academic.desc}
                    </p>
                    <div className="text-4xl md:text-5xl font-black text-white font-mono flex items-baseline gap-2">
                        <CountUp value={data.academic.stat} />
                    </div>
                </motion.div>

                {/* Commercial Impact */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative p-8 md:p-12 border-l-2 border-emerald-600 bg-gradient-to-r from-emerald-900/[0.1] to-transparent"
                >
                     <div className="mb-6 w-12 h-12 bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-400 border border-emerald-500/30">
                        <Briefcase size={24} />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-emerald-400">{data.commercial.title}</h2>
                    <p className="text-slate-400 mb-8 leading-relaxed">
                        {data.commercial.desc}
                    </p>
                    <div className="text-2xl md:text-3xl font-bold text-white font-mono">
                        {data.commercial.stat}
                    </div>
                </motion.div>
            </div>

            {/* Spotlight Case Study */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-white/10 rounded-xl p-8 md:p-12 bg-slate-900/50 relative overflow-hidden"
            >
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                    <ChevronRight size={100} />
                 </div>

                 <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div>
                        <div className="text-xs font-mono text-emerald-500 uppercase tracking-widest mb-2">Spotlight Case Study</div>
                        <h3 className="text-2xl font-bold text-white mb-4">{data.caseStudy.title}</h3>
                        <p className="text-slate-400 max-w-2xl">{data.caseStudy.desc}</p>
                    </div>
                    <button className="px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-colors text-sm font-bold uppercase tracking-widest rounded-sm">
                        {isRtl ? 'عرض المزيد' : 'Read Report'}
                    </button>
                 </div>
            </motion.div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Impact;
