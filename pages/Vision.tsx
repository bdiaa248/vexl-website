
import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import About from '../components/About';
import CountUp from '../components/CountUp';
import CaseStudyModal from '../components/CaseStudyModal';
import SEO from '../components/SEO';
import { Content, Language } from '../types';
import { Compass, Database, Globe2, Clock, GraduationCap, Briefcase, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface VisionProps {
  content: Content;
  lang: Language;
}

const Vision: React.FC<VisionProps> = ({ content, lang }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const philosophy = content.philosophy;
  const impact = content.impact;
  const isRtl = lang === 'ar';

  const title = lang === 'en' ? "Vision & Philosophy" : "الرؤية والفلسفة";
  const description = lang === 'en' 
    ? "Discover VEXL's philosophy: The Spatial Truth. We believe geography is the invisible engine of the economy and aim to predict where businesses will thrive."
    : "اكتشف فلسفة VEXL: الحقيقة المكانية. نحن نؤمن أن الجغرافيا هي المحرك الخفي للاقتصاد ونهدف للتنبؤ بأماكن ازدهار الأعمال.";

  return (
    <PageTransition>
      <SEO 
        title={title}
        description={description}
        lang={lang}
        keywords={["Spatial Truth", "Economic Gravity", "GIS Philosophy", "Digital Twin Egypt"]}
      />
      <div className={`min-h-screen ${isRtl ? 'font-arabic text-right' : 'font-sans text-left'}`} dir={isRtl ? 'rtl' : 'ltr'}>
        
        {/* PART 1: VISION (Uses the About Component Structure) */}
        <section id="vision" className="pt-24">
             <About content={content.about} lang={lang} />
        </section>

        {/* PART 2: PHILOSOPHY (Dark Grid Design) */}
        <section id="philosophy" className="py-24 bg-[#02040a] text-white relative overflow-hidden">
            {/* Abstract Grid Background */}
            <div className="absolute inset-0 perspective-[1000px] pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 transform-gpu rotate-x-12 scale-150" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-24 mt-12">
                    <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, type: "spring" }}
                        className="w-20 h-20 mx-auto border border-white/20 rounded-full flex items-center justify-center mb-8 relative"
                    >
                        <Compass size={40} className="text-white animate-spin-slow duration-[10000ms]" />
                        <div className="absolute inset-0 rounded-full border border-white/10 scale-125 animate-ping opacity-20" />
                    </motion.div>

                    <motion.h2 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-black tracking-tight mb-8"
                    >
                        {philosophy.title}
                    </motion.h2>

                    <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed"
                    >
                        {philosophy.intro}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {philosophy.pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.8 }}
                            className="group relative p-8 md:p-12 border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg hover:bg-white/[0.05] transition-colors overflow-hidden"
                        >
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
                            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-500 transition-all duration-500 group-hover:w-full" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* PART 3: IMPACT (Dark Map Design) */}
        <section id="impact" className="py-24 bg-[#050505] text-white relative overflow-hidden border-t border-white/5">
             {/* Background Map Effect */}
            <div className="absolute inset-0 opacity-30 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[#050505] opacity-90" />
                <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_20px_#10b981] animate-ping" />
                <div className="absolute top-[35%] left-[52%] w-1.5 h-1.5 bg-emerald-500/50 rounded-full" />
                <div className="absolute top-[32%] left-[49%] w-1.5 h-1.5 bg-emerald-500/50 rounded-full" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-4xl mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 bg-emerald-900/20 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-mono mb-6 tracking-widest uppercase"
                    >
                        {isRtl ? 'تقرير الأداء' : 'PERFORMANCE METRICS'}
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-8xl font-black tracking-tighter mb-8"
                    >
                        {impact.title}
                    </motion.h2>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed"
                    >
                        {impact.intro}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative p-8 md:p-12 border-l-2 border-slate-800 bg-gradient-to-r from-white/[0.03] to-transparent"
                    >
                        <div className="mb-6 w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-white border border-slate-700">
                            <GraduationCap size={24} />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">{impact.academic.title}</h2>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            {impact.academic.desc}
                        </p>
                        <div className="text-4xl md:text-5xl font-black text-white font-mono flex items-baseline gap-2">
                            <CountUp value={impact.academic.stat} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative p-8 md:p-12 border-l-2 border-emerald-600 bg-gradient-to-r from-emerald-900/[0.1] to-transparent"
                    >
                        <div className="mb-6 w-12 h-12 bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-400 border border-emerald-500/30">
                            <Briefcase size={24} />
                        </div>
                        <h2 className="text-3xl font-bold mb-4 text-emerald-400">{impact.commercial.title}</h2>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            {impact.commercial.desc}
                        </p>
                        <div className="text-2xl md:text-3xl font-bold text-white font-mono">
                            {impact.commercial.stat}
                        </div>
                    </motion.div>
                </div>

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
                            <h3 className="text-2xl font-bold text-white mb-4">{impact.caseStudy.title}</h3>
                            <p className="text-slate-400 max-w-2xl">{impact.caseStudy.desc}</p>
                        </div>
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-colors text-sm font-bold uppercase tracking-widest rounded-sm cursor-pointer"
                        >
                            {isRtl ? 'عرض المزيد' : 'Read Report'}
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>

        <CaseStudyModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            content={content.caseStudy}
            isRtl={isRtl}
        />

      </div>
    </PageTransition>
  );
};

export default Vision;
