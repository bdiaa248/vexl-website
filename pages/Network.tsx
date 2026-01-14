
import React from 'react';
import PageTransition from '../components/PageTransition';
import Alliances from '../components/Alliances';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';
import { Content, Language } from '../types';

interface NetworkProps {
  content: Content;
  lang: Language;
}

const Network: React.FC<NetworkProps> = ({ content, lang }) => {
  const title = lang === 'en' ? "Global Network" : "الشبكة العالمية";
  const description = lang === 'en'
    ? "VEXL's strategic alliances with top universities and enterprises in the Middle East. See our impact and client testimonials."
    : "تحالفات VEXL الاستراتيجية مع كبرى الجامعات والمؤسسات في الشرق الأوسط. تعرف على أثرنا وآراء عملائنا.";

  return (
    <PageTransition>
      <SEO 
        title={title}
        description={description}
        lang={lang}
        keywords={["VEXL Partners", "GIS Clients", "Cairo University GIS", "Ain Shams University"]}
      />
      <div className="pt-24">
         <div className="container mx-auto px-6 md:px-12 py-12">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-slate-500 mb-4 tracking-tight">
                GLOBAL NETWORK
            </h1>
             <p className="text-slate-700 dark:text-slate-400 max-w-xl font-medium text-lg">
                {lang === 'en' ? "Connecting academia with industry leaders." : "ربط الأكاديمية بقادة الصناعة."}
            </p>
        </div>
        <Alliances content={content.alliances} />
        <Testimonials content={content.testimonials} lang={lang} />
      </div>
    </PageTransition>
  );
};

export default Network;
