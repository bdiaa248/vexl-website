
import React, { useEffect } from 'react';
import { Language } from '../types';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  lang: Language;
  image?: string;
  url?: string;
  schema?: object; // For JSON-LD Structured Data
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords, 
  lang, 
  image = "/og-image.jpg", 
  url = "https://vexl-studio.com",
  schema
}) => {
  const siteTitle = "VEXL | The Architects of Spatial Intelligence";
  const fullTitle = title === "Home" ? siteTitle : `${title} | VEXL`;
  
  // Default keywords if none provided
  const defaultKeywords = [
    "GeoAI", "GIS", "Mapping", "Spatial Intelligence", 
    "Cairo University", "Graduation Projects", "مشاريع تخرج GIS", 
    "نظم معلومات جغرافية", "تحليل مكاني", "Remote Sensing",
    "Smart City Planning", "Location Intelligence"
  ];

  const allKeywords = keywords ? [...keywords, ...defaultKeywords] : defaultKeywords;

  // Handle html attributes manually as React 19 hoists title/meta but managing <html> attributes is best done via effect in SPA.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    <>
      {/* React 19 automatically hoists these to document.head */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords.join(", ")} />
      <meta name="author" content="VEXL Studio" />
      <meta name="application-name" content="VEXL" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="VEXL" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={lang === 'ar' ? 'ar_EG' : 'en_US'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </>
  );
};

export default SEO;
