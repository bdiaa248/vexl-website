
import { Content, Language } from './types';

export const CONTENT: Record<Language, Content> = {
  en: {
    nav: {
      vision: "Vision",
      studio: "Studio",
      academy: "Academy",
      community: "Community",
      contact: "Contact"
    },
    hero: {
      headline: "Visualize Your Reality.",
      subline: "Decoding the World Through Data.",
      ctaPrimary: "Student Services", 
      ctaSecondary: "Join Academy"    
    },
    about: {
      label: "WHO WE ARE",
      title: "The Architects of Spatial Intelligence",
      description: "VEXL is a specialized institution bridging the gap between academic theory and market reality. We provide elite engineering support, turning complex geospatial data into masterpiece visualizations and actionable insights.",
      stats: [
        { value: "500+", label: "Engineers Mentored" },
        { value: "3", label: "Partner Universities" },
        { value: "100%", label: "Thesis Success" }
      ]
    },
    philosophy: {
        title: "Beyond Coordinates.",
        intro: "For decades, maps answered the question: 'Where is it?' At VEXL, we answer the question that matters most: 'What is it worth?' We believe that geography is not just a backdrop for human activity; it is the invisible engine of the economy.",
        pillars: [
            {
                title: "The Spatial Truth",
                desc: "Data doesn't lie. Satellite imagery reveals the pulse of a city—wealth, movement, and decay—better than any financial report. We trust the pixel over the opinion."
            },
            {
                title: "Economic Gravity",
                desc: "Just as planets have gravity, locations have economic pull. Our mission is to measure this force, predicting where businesses will thrive and where they will fade."
            },
            {
                title: "The Time Dimension",
                desc: "A map is a snapshot of the past. VEXL adds the dimension of 'Time'. We don't just show you the map of today; using AI, we show you the map of tomorrow."
            }
        ]
    },
    impact: {
        title: "Measurable Change.",
        intro: "Impact is not a buzzword; it's our metric for success. VEXL operates on two fronts: Empowering the next generation of Geo-Scientists and securing the future of Enterprise Investments.",
        academic: {
            title: "Academic Impact",
            desc: "Bridging the Gap. Universities teach theory. VEXL teaches reality. Through our Academy and Studio, we have empowered students to master modern GIS tools, transforming graduation projects into market-ready solutions.",
            stat: "+50 Engineered Projects"
        },
        commercial: {
            title: "Commercial Impact",
            desc: "Risk Elimination. Every wrong location decision costs millions. By digitizing site selection, VEXL aims to reduce commercial real estate failure rates in Egypt by 20% by 2030.",
            stat: "Precision in Every Pixel"
        },
        caseStudy: {
            title: "Project: Nour Pharmacies Optimization",
            desc: "Using spatial accessibility analysis, we helped identifying coverage gaps, proving that data-driven expansion creates direct ROI."
        }
    },
    services: {
      sectionTitle: "VEXL STUDIO SERVICES",
      academic: {
        title: "ACADEMIC CONSULTANCY",
        status: "OPEN FOR COMMISSION",
        desc: "Premium engineering support for researchers and final-year students. We don't just execute; we mentor you to build industry-standard projects.",
        items: [
          "Advanced Cartography & Visualization",
          "Spatial Analysis Consultation",
          "Graduation Project Mentorship Program",
          "Thesis Data Modeling"
        ],
        cta: "Request Consultation"
      },
      corporate: {
        title: "ENTERPRISE DIVISION",
        status: "RESTRICTED",
        desc: "B2B Spatial Intelligence. Currently dedicated to long-term strategic partners only."
      }
    },
    studio: {
        academicFaq: {
            title: "Academic Protocols",
            items: [
                {
                    q: "Do you sell ready-made projects?",
                    a: "No. We are an engineering consultancy, not a project shop. We execute the complex technical layers (Analysis, Modeling) and mentor you to own and defend your work."
                },
                {
                    q: "I am worried about the defense panel.",
                    a: "Fear not. Our package includes a 'Simulated Defense' session and a technical dossier with expected questions and model answers."
                },
                {
                    q: "What software do you use?",
                    a: "Industry standards only: ArcGIS Pro, QGIS, Python (GeoPandas), and Web GIS frameworks for interactive dashboards."
                },
                {
                    q: "How is the cost determined?",
                    a: "Based on scope (Data size, Analysis complexity, Output type). Submit a 'Consultation Request' for a precise technical and financial proposal."
                }
            ]
        },
        corporateFaq: {
            title: "Enterprise Protocols",
            items: [
                {
                    q: "How do you handle data privacy?",
                    a: "Strict NDA protocols. Data is processed on secure, isolated environments and purged 14 days after delivery. We respect full data sovereignty."
                },
                {
                    q: "Do you offer real-time monitoring?",
                    a: "Yes. We engineer custom Web GIS Dashboards that connect to your live databases for real-time fleet or asset tracking."
                },
                {
                    q: "What industries do you serve?",
                    a: "Retail Expansion, Logistics & Supply Chain, Real Estate Valuation, and Urban Planning."
                }
            ]
        }
    },
    alliances: {
      title: "STRATEGIC ALLIANCES",
      logos: [
        { name: "Cairo University", type: 'university' },
        { name: "Ain Shams University", type: 'university' },
        { name: "Alexandria University", type: 'university' },
        { name: "Nour Pharmacies", type: 'corporate' }
      ]
    },
    testimonials: {
      sectionTitle: "IMPACT REPORT",
      title: "Voices from the Grid",
      subtitle: "Feedback from our ecosystem.",
      items: [
        {
          name: "Omar Khaled",
          role: "GIS Student @ Cairo Uni",
          rating: 5,
          text: "The Mentorship Program saved my graduation project. They didn't just give me the maps; they taught me how to defend my analysis in front of the panel.",
          lang: 'ar'
        },
        {
          name: "Dr. Ahmed Nour",
          role: "CEO, Nour Chains",
          rating: 4.5,
          text: "Professional execution. The smart locator tool solved a major logistics issue for our branches. The UI is sleek, though we hope for faster updates next time. Highly recommended.",
          lang: 'en'
        },
        {
          name: "Sarah Magdy",
          role: "MSc Researcher",
          rating: 5,
          text: "I struggled with the Spatial Analysis model for months. VEXL Studio solved the logic in 3 days. Worth every penny for the peace of mind.",
          lang: 'mix'
        },
        {
          name: "M. Hassan",
          role: "Senior Backend Dev",
          rating: 4,
          text: "Impressive data visualization techniques. They treat maps like art. Looking forward to seeing the R&D division go live.",
          lang: 'en'
        }
      ]
    },
    caseStudy: {
      label: "CASE STUDY // NOUR PHARMACIES",
      title: "Smart Branch Locator",
      desc: "Customer routing tool powered by GPS & spatial logic. Mobile-first execution.",
      metric: "Optimized Delivery Routes & ROI",
      cta: "Read Full Case Study",
      image: "/my-map.jpg",
      
      details: {
        problem: {
          title: "The Problem",
          text: "Customers were struggling to find the nearest pharmacy branch that had specific medication in stock, leading to lost sales and customer frustration."
        },
        solution: {
          title: "The VEXL Solution",
          text: "We engineered a custom Geolocation API integrated with their inventory system. A user-friendly map interface now guides customers to the exact location with real-time stock availability."
        },
        result: {
          title: "The Result",
          text: "40% increase in foot traffic to remote branches and a significant reduction in call center inquiries regarding location."
        }
      }
    },
    academy: {
      title: "VEXL Academy",
      subtitle: "Building the next generation of GeoAI Engineers.",
      cta: "Apply to Join",
      tagline: "Invite Only. Elite Squad.",
      faq: {
          title: "Academy FAQ",
          items: [
              {
                  q: "Do I need prior coding experience?",
                  a: "Not for the Foundation Track. We start from zero. For the Advanced GeoAI Track, basic Python knowledge is recommended."
              },
              {
                  q: "Is this a recorded course?",
                  a: "No. VEXL Academy relies on 'Live Mentorship'. You work on real-world projects under the supervision of senior engineers, not just watching tutorials."
              },
              {
                  q: "What certificates do I get?",
                  a: "You receive a 'Project Portfolio' validation. In the tech industry, a working GitHub repository is worth 10x more than a paper certificate."
              },
              {
                  q: "How do I join?",
                  a: "Admissions are selective. Submit your dossier via the 'Join Protocol'. We review applicants based on passion and logical thinking, not just grades."
              }
          ]
      }
    },
    vetting: {
        title: "COHORT 04 // VETTING PROTOCOL",
        subtitle: "Complete the dossier below. Only elite candidates will receive a callback.",
        fields: {
            name: "Full Name",
            university: "University / Year",
            project: "Best Project Link (Drive/GitHub)",
            why: "Why VEXL? (Your Mission)",
            skill: "GIS & Python Proficiency"
        },
        skillOptions: ["Novice", "Intermediate", "Elite"],
        submit: "Submit Dossier",
        successTitle: "Application Received",
        successDesc: "Status: Under Review. We will analyze your qualifications and contact you if you meet the protocol."
    },
    rnd: {
      title: "VEXL LABS // R&D",
      desc: "Next-Gen Retail Intelligence Systems.",
      status: "STATUS: TOP SECRET",
      redacted: "We are cooking something revolutionary for the Retail Industry. Stay Tuned."
    },
    legal: {
        privacy: {
            title: "Privacy Policy",
            lastUpdated: "Last Updated: October 2024",
            sections: [
                {
                    heading: "1. Introduction",
                    content: ["Welcome to VEXL. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you."]
                },
                {
                    heading: "2. The Data We Collect",
                    content: [
                        "We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:",
                        "Identity Data: includes first name, last name, or 'Codename' as submitted in our forms.",
                        "Contact Data: includes email address and phone number.",
                        "Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting and location, and operating system.",
                        "Usage Data: includes information about how you use our website, products, and services (including Student Services and V-Score demos)."
                    ]
                },
                {
                    heading: "3. How We Use Your Data",
                    content: [
                        "We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:",
                        "To process your requests for academic services or enterprise solutions.",
                        "To communicate with you via our secure uplink (contact forms).",
                        "To improve our website, services, marketing, and customer relationships.",
                        "Note: We do not sell your data to third parties."
                    ]
                },
                {
                    heading: "4. Third-Party Links & Tools",
                    content: ["Our website may include links to third-party websites, plug-ins (like EmailJS), and applications (like Google Maps/Earth Engine). Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements."]
                },
                {
                    heading: "5. Data Security",
                    content: ["We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. Access to your personal data is limited to those employees, agents, contractors, and other third parties who have a business need to know."]
                },
                {
                    heading: "6. Contact Us",
                    content: ["If you have any questions about this privacy policy or our privacy practices, please contact us at: vexl.gis@gmail.com"]
                }
            ]
        },
        terms: {
            title: "Terms of Service",
            lastUpdated: "Last Updated: October 2024",
            sections: [
                {
                    heading: "1. Agreement to Terms",
                    content: ["By accessing our website and using our services (VEXL Studio, VEXL Academy, or VEXL Enterprise), you agree to be bound by these Terms of Service. If you do not agree to these terms, you are prohibited from using this site."]
                },
                {
                    heading: "2. Intellectual Property Rights",
                    content: [
                        "VEXL Content: All content, features, and functionality (including but not limited to the V-Score Algorithm, design, code, 'Prediction in Every Pixel' slogan, and logos) are owned by VEXL and are protected by international copyright, trademark, and intellectual property laws.",
                        "Student Projects: While students retain ownership of their raw data, the methodologies, templates, and analytical frameworks provided by VEXL Studio remain the intellectual property of VEXL. You may not reverse-engineer or resell our methodologies."
                    ]
                },
                {
                    heading: "3. Services & Payments",
                    content: [
                        "Academic Services: Quotes provided for graduation projects or research support are estimates. A deposit is required to commence work. Deposits are non-refundable once work has begun.",
                        "Enterprise Solutions: Access to V-Score and R&D labs is subject to separate Enterprise Agreements (SLA)."
                    ]
                },
                {
                    heading: "4. Disclaimer of Warranties",
                    content: [
                        "The services provided by VEXL, including V-Score predictions and spatial analysis, are for informational purposes only. While we use advanced AI and remote sensing technologies to ensure accuracy:",
                        "VEXL does not guarantee financial results or specific investment returns.",
                        "We are not financial advisors. Any business decision made based on our data is solely at your own risk. VEXL shall not be liable for any direct, indirect, or consequential loss or damage arising from the use of our data."
                    ]
                },
                {
                    heading: "5. Prohibited Activities",
                    content: [
                        "You agree not to use the site for any purpose that is unlawful or prohibited by these terms, including:",
                        "Attempting to decompile or reverse engineer any software contained on the VEXL website.",
                        "Using 'bots' or 'scrapers' to extract data from our maps or dashboards without permission."
                    ]
                },
                {
                    heading: "6. Governing Law",
                    content: ["These terms and conditions are governed by and construed in accordance with the laws of Egypt, and you irrevocably submit to the exclusive jurisdiction of the courts in that location."]
                },
                {
                    heading: "7. Changes to Terms",
                    content: ["VEXL reserves the right to modify these terms at any time. Your continued use of the website following any changes indicates your acceptance of the new terms."]
                }
            ]
        }
    },
    footer: {
      phrase: "Prediction in Every Pixel.",
      copyright: "VEXL © 2026."
    }
  },
  ar: {
    nav: {
      vision: "الرؤية",
      studio: "الاستوديو",
      academy: "الأكاديمية",
      community: "المجتمع",
      contact: "تواصل"
    },
    hero: {
      headline: "رؤية واقعك.",
      subline: "فك شفرة العالم من خلال البيانات.",
      ctaPrimary: "خدمات الطلاب",
      ctaSecondary: "انضم للأكاديمية"
    },
    about: {
      label: "من نحن",
      title: "مهندسو الذكاء المكاني",
      description: "نحن في VEXL لسنا مجرد مؤسسة؛ نحن تحالف من المهندسين وعلماء البيانات. نقدم دعماً هندسياً للنخبة، ونحول البيانات الجغرافية المعقدة إلى لوحات فنية وحلول واقعية.",
      stats: [
        { value: "+500", label: "مهندس تم توجيهه" },
        { value: "3", label: "جامعات شريكة" },
        { value: "100%", label: "نسبة نجاح المشاريع" }
      ]
    },
    philosophy: {
        title: "ما وراء الإحداثيات.",
        intro: "لعقود من الزمن، أجابت الخرائط على سؤال: 'أين؟'. في VEXL، نجيب على السؤال الأهم: 'ما هي القيمة؟'. نحن نؤمن أن الجغرافيا ليست مجرد خلفية للنشاط البشري؛ بل هي المحرك الخفي للاقتصاد.",
        pillars: [
            {
                title: "الحقيقة المكانية",
                desc: "البيانات لا تكذب. صور الأقمار الصناعية تكشف نبض المدينة—الثراء، الحركة، والاضمحلال—أفضل من أي تقرير مالي. نحن نثق في البكسل أكثر من الرأي."
            },
            {
                title: "الجاذبية الاقتصادية",
                desc: "كما للكواكب جاذبية، للمواقع جاذبية اقتصادية. مهمتنا هي قياس هذه القوة، والتنبؤ أين ستزدهر الشركات وأين ستتلاشى."
            },
            {
                title: "البعد الزمني",
                desc: "الخريطة هي لقطة للماضي. VEXL تضيف بعد 'الزمن'. نحن لا نعرض لك خريطة اليوم فقط؛ باستخدام الذكاء الاصطناعي، نعرض لك خريطة الغد."
            }
        ]
    },
    impact: {
        title: "تغيير ملموس.",
        intro: "الأثر ليس مجرد كلمة رنانة؛ إنه مقياس نجاحنا. تعمل VEXL على جبهتين: تمكين الجيل القادم من علماء البيانات الجغرافية وتأمين مستقبل الاستثمارات المؤسسية.",
        academic: {
            title: "الأثر الأكاديمي",
            desc: "سد الفجوة. الجامعات تدرس النظريات، وVEXL تدرس الواقع. من خلال أكاديميتنا والاستوديو، قمنا بتمكين الطلاب من إتقان أدوات نظم المعلومات الجغرافية الحديثة، وتحويل مشاريع التخرج إلى حلول جاهزة للسوق.",
            stat: "+50 مشروع هندسي"
        },
        commercial: {
            title: "الأثر التجاري",
            desc: "القضاء على المخاطر. كل قرار موقع خاطئ يكلف الملايين. من خلال رقمنة اختيار المواقع، تهدف VEXL إلى تقليل معدلات فشل العقارات التجارية في مصر بنسبة 20% بحلول عام 2030.",
            stat: "الدقة في كل بكسل"
        },
        caseStudy: {
            title: "مشروع: تحسين صيدليات نور",
            desc: "باستخدام تحليل الوصول المكاني، ساعدنا في تحديد فجوات التغطية، مما أثبت أن التوسع القائم على البيانات يخلق عائداً مباشراً على الاستثمار."
        }
    },
    services: {
      sectionTitle: "خدمات استوديو VEXL",
      academic: {
        title: "الاستشارات الأكاديمية",
        status: "متاح للتعاقد",
        desc: "دعم هندسي احترافي للباحثين وطلاب السنوات النهائية. نحن لا ننفذ المشروع فحسب، بل نقدم برنامج إرشاد متكامل لتتقن مشروعك.",
        items: [
          "تصميم الخرائط المتقدم (Advanced Cartography)",
          "استشارات التحليل المكاني (Spatial Analysis)",
          "برنامج إرشاد مشاريع التخرج (Mentorship)",
          "نمذجة البيانات للرسائل العلمية"
        ],
        cta: "اطلب استشارة"
      },
      corporate: {
        title: "قطاع الأعمال",
        status: "نطاق مقيد",
        desc: "حلول الذكاء المكاني للشركات. متاح حالياً للشركاء الاستراتيجيين فقط."
      }
    },
    studio: {
        academicFaq: {
            title: "أسئلة الطلاب الشائعة",
            items: [
                {
                    q: "هل بتبيعوا مشاريع جاهزة؟",
                    a: "لا. نحن مكتب استشاري هندسي ولسنا 'دكان مشاريع'. نقوم بتنفيذ الجوانب التقنية المعقدة (التحليل، النمذجة) وندربك لتكون أنت صاحب المشروع وتناقشه بطلاقة."
                },
                {
                    q: "أنا قلقان جداً من مناقشة المشروع.",
                    a: "لا تقلق. خدمتنا تشمل جلسة 'محاكاة للمناقشة' (Simulated Defense) وملف فني يحتوي على الأسئلة المتوقعة من الدكاترة وإجاباتها النموذجية."
                },
                {
                    q: "إيه البرامج اللي بتشتغلوا بيها؟",
                    a: "نستخدم معايير السوق العالمية: ArcGIS Pro, QGIS, Python (GeoPandas)، وأطر عمل Web GIS للوحات المعلومات التفاعلية."
                },
                {
                    q: "إزاي بتحددوا التكلفة؟",
                    a: "بناءً على النطاق (حجم البيانات، تعقيد التحليل، نوع المخرجات). قدم 'طلب استشارة' وسنرسل لك عرضاً فنياً ومالياً دقيقاً."
                }
            ]
        },
        corporateFaq: {
            title: "بروتوكولات الشركات",
            items: [
                {
                    q: "كيف تضمنون سرية بياناتنا؟",
                    a: "نلتزم ببروتوكولات عدم الإفصاح (NDA) الصارمة. تتم معالجة البيانات في بيئات معزولة وآمنة، ويتم مسحها نهائياً بعد التسليم بـ 14 يوماً."
                },
                {
                    q: "هل تقدمون حلول متابعة لحظية؟",
                    a: "نعم. نقوم ببرمجة لوحات تحكم Web GIS مخصصة تتصل بقواعد بياناتك لعرض وتتبع الأصول أو الأسطول لحظياً."
                },
                {
                    q: "ما هي القطاعات التي تخدمونها؟",
                    a: "التوسع في قطاع التجزئة (Retail)، الخدمات اللوجستية، التقييم العقاري، والتخطيط العمراني."
                }
            ]
        }
    },
    alliances: {
      title: "التحالفات الاستراتيجية",
      logos: [
        { name: "جامعة القاهرة", type: 'university' },
        { name: "جامعة عين شمس", type: 'university' },
        { name: "جامعة الإسكندرية", type: 'university' },
        { name: "صيدليات نور", type: 'corporate' }
      ]
    },
    testimonials: {
      sectionTitle: "تقرير الأثر",
      title: "أصوات من الشبكة",
      subtitle: "آراء وتجارب منظومتنا.",
      items: [
        {
          name: "عمر خالد",
          role: "GIS Student @ Cairo Uni",
          rating: 5,
          text: "برنامج الإرشاد أنقذ مشروع تخرجي. المهندسين مش بس سلموني الخرائط، دول دربوني إزاي أناقش وأدافع عن تحليلاتي قدام اللجنة.",
          lang: 'ar'
        },
        {
          name: "د. أحمد نور",
          role: "CEO, Nour Chains",
          rating: 4.5,
          text: "Professional execution. The smart locator tool solved a major logistics issue for our branches. The UI is sleek, though we hope for faster updates next time. Highly recommended.",
          lang: 'en'
        },
        {
          name: "سارة مجدي",
          role: "باحثة ماجستير",
          rating: 5,
          text: "كنت تايهة في موديل التحليل المكاني بقالي شهور. استوديو VEXL حل اللوجيك في 3 أيام. بجد يستاهلوا كل جنيه.",
          lang: 'mix'
        },
        {
          name: "م. حسن",
          role: "Senior Backend Dev",
          rating: 4,
          text: "Impressive data visualization techniques. They treat maps like art. Looking forward to seeing the R&D division go live.",
          lang: 'en'
        }
      ]
    },
    caseStudy: {
      label: "دراسة حالة // صيدليات نور",
      title: "محدد الفروع الذكي",
      desc: "أداة توجيه عملاء مدعومة بالمنطق المكاني. تنفيذ متقن.",
      metric: "تحسين مسارات التوصيل و ROI",
      cta: "اقرأ التقرير الكامل",
      image: "/my-map.jpg",

      details: {
        problem: {
          title: "المشكلة",
          text: "كان العملاء يواجهون صعوبة في العثور على أقرب فرع يتوفر فيه دواء معين، مما أدى إلى ضياع المبيعات وإحباط العملاء."
        },
        solution: {
          title: "حلول VEXL",
          text: "قمنا ببرمجة واجهة Geolocation API مخصصة وربطها بنظام المخزون. واجهة خرائط سهلة الاستخدام توجه العملاء الآن للموقع الدقيق مع توفر المخزون لحظياً."
        },
        result: {
          title: "النتيجة",
          text: "زيادة بنسبة 40% في زيارات الفروع البعيدة وانخفاض كبير في استفسارات مركز الاتصال بخصوص الموقع."
        }
      }
    },
    academy: {
      title: "أكاديمية VEXL",
      subtitle: "بناء الجيل القادم من مهندسي GeoAI.",
      cta: "تقدم للانضمام",
      tagline: "بدعوة فقط. نخبة.",
      faq: {
          title: "أسئلة شائعة",
          items: [
              {
                  q: "هل محتاج خبرة برمجة سابقة؟",
                  a: "ليس لمسار التأسيس. نبدأ معك من الصفر. أما مسار الـ GeoAI المتقدم، فيفضل وجود معرفة بسيطة بلغة بايثون."
              },
              {
                  q: "هل الكورس مسجل فيديوهات فقط؟",
                  a: "لا. أكاديمية VEXL تعتمد على 'الإرشاد المباشر'. أنت تعمل على مشاريع حقيقية من السوق تحت إشراف مهندسين كبار، ولا تكتفي بمشاهدة الفيديوهات."
              },
              {
                  q: "إيه الشهادات اللي بحصل عليها؟",
                  a: "تحصل على اعتماد لـ 'معرض أعمالك' (Portfolio). في سوق التكنولوجيا، الكود والمشاريع المرفوعة على GitHub لها قيمة تفوق الشهادات الورقية بـ 10 أضعاف."
              },
              {
                  q: "إزاي انضم للأكاديمية؟",
                  a: "القبول يتم بانتقائية. قدم ملفك عبر زر 'Join Protocol'. نراجع المتقدمين بناءً على الشغف والتفكير المنطقي، وليس الدرجات فقط."
              }
          ]
      }
    },
    vetting: {
        title: "الدفعة 04 // بروتوكول الفحص",
        subtitle: "أكمل الملف أدناه. سيتم التواصل مع المرشحين النخبة فقط.",
        fields: {
            name: "الاسم الكامل",
            university: "الجامعة / السنة",
            project: "رابط أفضل مشروع (Drive/GitHub)",
            why: "لماذا VEXL؟ (مهمتك)",
            skill: "مستوى الـ GIS & Python"
        },
        skillOptions: ["مبتدئ", "متوسط", "نخبة"],
        submit: "إرسال الملف",
        successTitle: "تم استلام الطلب",
        successDesc: "الحالة: قيد المراجعة. سنقوم بتحليل مؤهلاتك والتواصل معك إذا كنت تستوفي البروتوكول."
    },
    rnd: {
      title: "معامل VEXL // R&D",
      desc: "أنظمة ذكاء التجزئة للجيل القادم.",
      status: "الحالة: سري للغاية",
      redacted: "نحن نطبخ شيئاً ثورياً لقطاع التجزئة. ترقبوا."
    },
    legal: {
        privacy: {
            title: "سياسة الخصوصية",
            lastUpdated: "آخر تحديث: أكتوبر 2024",
            sections: [
                {
                    heading: "١. مقدمة",
                    content: ["مرحباً بك في VEXL. نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. ستوضح لك سياسة الخصوصية هذه كيفية تعاملنا مع بياناتك عند زيارة موقعنا (بغض النظر عن مكان الزيارة) وإخبارك بحقوق الخصوصية وكيف يحميك القانون."]
                },
                {
                    heading: "٢. البيانات التي نجمعها",
                    content: [
                        "قد نقوم بجمع واستخدام وتخزين أنواع مختلفة من البيانات الشخصية التي قمنا بتجميعها كالتالي:",
                        "بيانات الهوية: تشمل الاسم الأول، الاسم الأخير، أو 'الاسم الرمزي' كما تم إدخاله في النماذج.",
                        "بيانات الاتصال: تشمل البريد الإلكتروني ورقم الهاتف.",
                        "البيانات التقنية: تشمل عنوان بروتوكول الإنترنت (IP)، نوع المتصفح وإصداره، إعدادات المنطقة الزمنية والموقع، ونظام التشغيل.",
                        "بيانات الاستخدام: تشمل معلومات حول كيفية استخدامك لموقعنا ومنتجاتنا وخدماتنا (بما في ذلك خدمات الطلاب وعروض V-Score)."
                    ]
                },
                {
                    heading: "٣. كيف نستخدم بياناتك",
                    content: [
                        "لن نستخدم بياناتك الشخصية إلا عندما يسمح لنا القانون بذلك. في الغالب، سنستخدم بياناتك في الحالات التالية:",
                        "لمعالج طلباتك للخدمات الأكاديمية أو حلول الشركات.",
                        "للتواصل معك عبر رابطنا الآمن (نماذج الاتصال).",
                        "لتحسين موقعنا وخدماتنا وعلاقات العملاء.",
                        "ملاحظة: نحن لا نبيع بياناتك لأطراف ثالثة."
                    ]
                },
                {
                    heading: "٤. روابط وأدوات الأطراف الثالثة",
                    content: ["قد يحتوي موقعنا على روابط لمواقع خارجية، وإضافات (مثل EmailJS)، وتطبيقات (مثل Google Maps/Earth Engine). النقر على تلك الروابط قد يسمح للأطراف الثالثة بجمع أو مشاركة بيانات عنك. نحن لا نتحكم في هذه المواقع ولسنا مسؤولين عن بيانات الخصوصية الخاصة بها."]
                },
                {
                    heading: "٥. أمن البيانات",
                    content: ["لقد وضعنا تدابير أمنية مناسبة لمنع فقدان بياناتك الشخصية عن طريق الخطأ، أو استخدامها أو الوصول إليها بطريقة غير مصرح بها. يقتصر الوصول إلى بياناتك الشخصية على الموظفين والوكلاء والمقاولين الذين لديهم حاجة عمل للمعرفة."]
                },
                {
                    heading: "٦. اتصل بنا",
                    content: ["إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على: vexl.gis@gmail.com"]
                }
            ]
        },
        terms: {
            title: "شروط الخدمة",
            lastUpdated: "آخر تحديث: أكتوبر 2024",
            sections: [
                {
                    heading: "١. الموافقة على الشروط",
                    content: ["من خلال الوصول إلى موقعنا واستخدام خدماتنا (VEXL Studio أو VEXL Academy أو VEXL Enterprise)، فإنك توافق على الالتزام بشروط الخدمة هذه. إذا كنت لا توافق على هذه الشروط، يُحظر عليك استخدام هذا الموقع."]
                },
                {
                    heading: "٢. حقوق الملكية الفكرية",
                    content: [
                        "محتوى VEXL: جميع المحتويات والميزات (بما في ذلك خوارزمية V-Score، والتصميم، والكود، وشعار 'التنبؤ في كل بكسل') مملوكة لشركة VEXL ومحمية بموجب قوانين حقوق النشر والعلامات التجارية والملكية الفكرية الدولية.",
                        "مشاريع الطلاب: بينما يحتفظ الطلاب بملكية بياناتهم الخام، تظل المنهجيات والقوالب وأطر التحليل المقدمة من VEXL Studio ملكية فكرية لشركة VEXL. لا يجوز لك إعادة هندسة أو بيع منهجياتنا."]
                },
                {
                    heading: "٣. الخدمات والمدفوعات",
                    content: [
                        "الخدمات الأكاديمية: الأسعار المقدمة لمشاريع التخرج أو الدعم البحثي هي تقديرات. يلزم دفع مقدم لبدء العمل. الودائع غير قابلة للاسترداد بمجرد بدء العمل.",
                        "حلول الشركات: يخضع الوصول إلى V-Score ومعامل البحث والتطوير لاتفاقيات مؤسسية منفصلة (SLA)."
                    ]
                },
                {
                    heading: "٤. إخلاء المسؤولية",
                    content: [
                        "الخدمات المقدمة من VEXL، بما في ذلك تنبؤات V-Score والتحليل المكاني، هي لأغراض إعلامية فقط. بينما نستخدم تقنيات الذكاء الاصطناعي المتقدمة والاستشعار عن بعد لضمان الدقة:",
                        "لا تضمن VEXL نتائج مالية أو عوائد استثمارية محددة.",
                        "نحن لسنا مستشارين ماليين. أي قرار تجاري يتم اتخاذه بناءً على بياناتنا يكون على مسؤوليتك الخاصة فقط. لن تكون VEXL مسؤولة عن أي خسارة مباشرة أو غير مباشرة أو تبعية تنشأ عن استخدام بياناتنا."
                    ]
                },
                {
                    heading: "٥. الأنشطة المحظورة",
                    content: [
                        "أنت توافق على عدم استخدام الموقع لأي غرض غير قانوني أو محظور بموجب هذه الشروط، بما في ذلك:",
                        "محاولة فك تشفير أو إعادة هندسة أي برنامج موجود على موقع VEXL.",
                        "استخدام 'البوتات' أو 'الكاشطات' (Scrapers) لاستخراج البيانات من خرائطنا أو لوحات المعلومات دون إذن."
                    ]
                },
                {
                    heading: "٦. القانون الحاكم",
                    content: ["تخضع هذه الشروط والأحكام وتفسر وفقاً لقوانين جمهورية مصر العربية، وأنت تخضع بشكل لا رجعة فيه للاختصاص القضائي الحصري للمحاكم في هذا الموقع."]
                },
                {
                    heading: "٧. تغيير الشروط",
                    content: ["تحتفظ VEXL بالحق في تعديل هذه الشروط في أي وقت. استمرارك في استخدام الموقع بعد أي تغييرات يشير إلى قبولك للشروط الجديدة."]
                }
            ]
        }
    },
    footer: {
      phrase: "التنبؤ في كل بكسل.",
      copyright: "VEXL © 2026."
    }
  }
};
