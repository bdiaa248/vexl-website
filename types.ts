
export type Language = 'en' | 'ar';

export interface FAQItem {
  q: string;
  a: string;
}

export interface Content {
  nav: {
    vision: string;
    studio: string;
    academy: string;
    community: string;
    contact: string;
  };
  hero: {
    headline: string;
    subline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    label: string;
    title: string;
    description: string;
    stats: { value: string; label: string }[];
  };
  philosophy: {
    title: string;
    intro: string;
    pillars: {
      title: string;
      desc: string;
    }[];
  };
  impact: {
    title: string;
    intro: string;
    academic: {
      title: string;
      desc: string;
      stat: string;
    };
    commercial: {
      title: string;
      desc: string;
      stat: string;
    };
    caseStudy: {
      title: string;
      desc: string;
    };
  };
  services: {
    sectionTitle: string;
    academic: {
      title: string;
      status: string;
      desc: string;
      items: string[];
      cta: string;
    };
    corporate: {
      title: string;
      status: string;
      desc: string;
    };
  };
  // UPDATED: Studio specific content wrapper for split FAQs
  studio: {
    academicFaq: {
        title: string;
        items: FAQItem[];
    };
    corporateFaq: {
        title: string;
        items: FAQItem[];
    };
  };
  alliances: {
    title: string;
    logos: { name: string; type: 'university' | 'corporate' }[];
  };
  testimonials: {
    sectionTitle: string;
    title: string;
    subtitle: string;
    items: {
      name: string;
      role: string;
      rating: number;
      text: string;
      lang: 'ar' | 'en' | 'mix';
    }[];
  };
  caseStudy: {
    label: string;
    title: string;
    desc: string;
    metric: string;
    cta: string;
    image: string;
    details: {
      problem: { title: string; text: string };
      solution: { title: string; text: string };
      result: { title: string; text: string };
    };
  };
  academy: {
    title: string;
    subtitle: string;
    cta: string;
    tagline: string;
    // FAQ for Academy
    faq: {
        title: string;
        items: FAQItem[];
    };
  };
  // Vetting Modal Content
  vetting: {
    title: string;
    subtitle: string;
    fields: {
      name: string;
      university: string;
      project: string;
      why: string;
      skill: string;
    };
    skillOptions: string[];
    submit: string;
    successTitle: string;
    successDesc: string;
  };
  rnd: {
    title: string;
    desc: string;
    status: string;
    redacted: string;
  };
  legal: {
    privacy: {
      title: string;
      lastUpdated: string;
      sections: { heading: string; content: string[] }[];
    };
    terms: {
      title: string;
      lastUpdated: string;
      sections: { heading: string; content: string[] }[];
    };
  };
  footer: {
    phrase: string;
    copyright: string;
  };
}
