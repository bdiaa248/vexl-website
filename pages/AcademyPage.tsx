
import React from 'react';
import PageTransition from '../components/PageTransition';
import Academy from '../components/Academy';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';
import { Content, Language } from '../types';

interface AcademyPageProps {
  content: Content;
  lang: Language;
}

const AcademyPage: React.FC<AcademyPageProps> = ({ content, lang }) => {
  const title = lang === 'en' ? "Academy" : "الأكاديمية";
  const description = lang === 'en'
    ? "Join VEXL Academy. An elite, invite-only program for the top 1% of GeoAI engineers. Master Python for GIS and advanced spatial analysis."
    : "انضم لأكاديمية VEXL. برنامج للنخبة فقط (بالدعوة) لأفضل 1% من مهندسي الـ GeoAI. احترف البايثون للـ GIS والتحليل المكاني المتقدم.";

  return (
    <PageTransition>
      <SEO 
        title={title}
        description={description}
        lang={lang}
        keywords={[
          "GIS Training Egypt", "GeoAI Course", "Python for GIS", 
          "كورس GIS متقدم", "تدريب نظم معلومات جغرافية", "منحة VEXL",
          "Elite Engineering Squad"
        ]}
      />
      <div className="pt-32 pb-20">
         <div className="container mx-auto px-6 md:px-12 mb-8 text-center md:text-left">
            <span className="text-cyan-700 dark:text-cyan-500 font-mono text-xs font-bold tracking-widest uppercase">
                {lang === 'en' ? "Cohort 04 Loading..." : "الدفعة 04 قيد التحميل..."}
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-slate-500 mt-2 tracking-tighter">
                THE ACADEMY
            </h1>
        </div>
        
        <Academy content={content.academy} fullContent={content} lang={lang} />
        
        {/* ADDED FAQ SECTION */}
        <div className="mt-12 md:mt-24">
            <FAQ items={content.academy.faq.items} title={content.academy.faq.title} lang={lang} />
        </div>

      </div>
    </PageTransition>
  );
};

export default AcademyPage;
