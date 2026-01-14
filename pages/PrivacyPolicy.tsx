
import React from 'react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { Content, Language } from '../types';

interface PrivacyPolicyProps {
  content: Content;
  lang: Language;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ content, lang }) => {
  const data = content.legal.privacy;
  const isRtl = lang === 'ar';
  
  const title = lang === 'en' ? "Privacy Policy" : "سياسة الخصوصية";

  return (
    <PageTransition>
      <SEO 
        title={title}
        description="VEXL Privacy Policy. How we handle your data."
        lang={lang}
      />
      <div className={`pt-32 pb-20 min-h-screen bg-slate-50 dark:bg-[#02040a] relative overflow-hidden transition-colors duration-500 ${isRtl ? 'font-arabic text-right' : 'font-sans text-left'}`} dir={isRtl ? 'rtl' : 'ltr'}>
        
        {/* Background Overlay */}
        <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-cyan-900/10 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
            
            {/* Header */}
            <div className="mb-16 border-b border-slate-300 dark:border-white/10 pb-8">
                <div className="text-cyan-700 dark:text-cyan-500 font-mono text-xs font-bold tracking-[0.2em] uppercase mb-4">
                    VEXL // LEGAL
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                    {data.title}
                </h1>
                <p className="text-slate-500 font-mono text-xs uppercase tracking-widest font-bold">
                    {data.lastUpdated}
                </p>
            </div>

            {/* Content Blocks */}
            <div className="space-y-12">
                {data.sections.map((section, idx) => (
                    <div key={idx} className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200">
                            {section.heading}
                        </h2>
                        <div className="space-y-4">
                            {section.content.map((paragraph, pIdx) => (
                                <p key={pIdx} className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default PrivacyPolicy;
