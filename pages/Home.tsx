
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { Content, Language } from '../types';

interface HomeProps {
  content: Content;
  lang: Language;
}

const Home: React.FC<HomeProps> = ({ content, lang }) => {
  // Schema for the Organization (The "Secret Sauce" for Google Side Panel)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VEXL Studio",
    "url": "https://vexl-studio.com",
    "logo": "https://vexl-studio.com/logo.png",
    "description": lang === 'en' 
      ? "The Architects of Spatial Intelligence. Bridging the gap between academic theory and market reality in GeoAI."
      : "مهندسو الذكاء المكاني. سد الفجوة بين النظرية الأكاديمية وواقع السوق في مجال نظم المعلومات الجغرافية.",
    "sameAs": [
      "https://www.linkedin.com/company/vexl-studio",
      "https://www.instagram.com/vexl_gis/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+201279298987",
      "contactType": "customer service",
      "areaServed": ["EG", "SA", "AE"],
      "availableLanguage": ["en", "Arabic"]
    }
  };

  const description = lang === 'en'
    ? "VEXL is Egypt's premier GeoAI studio. We bridge the gap between academic theory and market reality, offering elite graduation project mentorship and enterprise location intelligence."
    : "أول استوديو GeoAI في مصر. نقدم دعماً أكاديمياً للنخبة في مشاريع تخرج نظم المعلومات الجغرافية وحلول الذكاء المكاني للشركات.";

  return (
    <PageTransition>
      <SEO 
        title="Home"
        description={description}
        lang={lang}
        schema={organizationSchema}
        keywords={[
          "GeoAI Solutions", "Spatial Analysis", "GIS Egypt", 
          "تحليل بيانات مكانية", "شركة GIS مصر", "استشارات هندسية"
        ]}
      />
      <Hero content={content.hero} lang={lang} />
      <About content={content.about} lang={lang} />
    </PageTransition>
  );
};

export default Home;
