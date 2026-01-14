
import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import Services from '../components/Services';
import CaseStudy from '../components/CaseStudy';
import RnD from '../components/RnD';
import CaseStudyModal from '../components/CaseStudyModal';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';
import { Content, Language } from '../types';

interface StudioProps {
  content: Content;
  lang: Language;
}

const Studio: React.FC<StudioProps> = ({ content, lang }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isRtl = lang === 'ar';

  const title = lang === 'en' ? "Studio Services & Projects" : "خدمات الاستوديو والمشاريع";
  const description = lang === 'en'
    ? "VEXL Studio offers elite engineering support for GIS graduation projects, thesis data modeling, and enterprise location intelligence solutions."
    : "يقدم استوديو VEXL دعماً هندسياً للنخبة لمشاريع تخرج نظم المعلومات الجغرافية، ونمذجة بيانات الرسائل العلمية، وحلول ذكاء الموقع للشركات.";

  return (
    <PageTransition>
      <SEO 
        title={title}
        description={description}
        lang={lang}
        keywords={[
          "Graduation Projects GIS", "Thesis Data Modeling", "GIS Mentorship", 
          "مشاريع تخرج مساحة", "خرائط نظم معلومات جغرافية", "تحليل مكاني للرسائل", 
          "Remote Sensing Projects", "Smart City Planning"
        ]}
      />
      <div className="pt-24">
        {/* Header for Sub-page */}
        <div className="container mx-auto px-6 md:px-12 py-12">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-slate-500 mb-4 tracking-tight">
                VEXL STUDIO
            </h1>
            <p className="text-slate-700 dark:text-slate-400 max-w-xl font-medium text-lg">
                {lang === 'en' ? "Engineering the future of location intelligence for enterprises." : "هندسة مستقبل الذكاء المكاني للمؤسسات."}
            </p>
        </div>

        <Services content={content.services} />
        
        {/* UPDATED: Split FAQ Sections */}
        <div className="bg-slate-50 dark:bg-[#02040a] border-t border-slate-300 dark:border-white/5 space-y-0">
            {/* 1. Academic FAQ */}
            <div className="border-b border-slate-200 dark:border-white/5">
                <FAQ items={content.studio.academicFaq.items} title={content.studio.academicFaq.title} lang={lang} />
            </div>

            {/* 2. Corporate FAQ */}
            <div>
                 <FAQ items={content.studio.corporateFaq.items} title={content.studio.corporateFaq.title} lang={lang} />
            </div>
        </div>

        <CaseStudy 
            content={content.caseStudy} 
            lang={lang} 
            onOpenModal={() => setIsModalOpen(true)}
        />
        
        <RnD content={content.rnd} />

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

export default Studio;
