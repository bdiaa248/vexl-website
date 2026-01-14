
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Language } from './types';
import { CONTENT } from './constants';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Scene from './components/Scene';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import NexusChat from './components/NexusChat'; // Import VEXL NEXUS

// Pages
import Home from './pages/Home';
import Studio from './pages/Studio';
import AcademyPage from './pages/AcademyPage';
import Network from './pages/Network';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Vision from './pages/Vision';

const AnimatedRoutes: React.FC<{ lang: Language; content: any }> = ({ lang, content }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home content={content} lang={lang} />} />
        <Route path="/vision" element={<Vision content={content} lang={lang} />} />
        <Route path="/studio" element={<Studio content={content} lang={lang} />} />
        <Route path="/academy" element={<AcademyPage content={content} lang={lang} />} />
        <Route path="/network" element={<Network content={content} lang={lang} />} />
        <Route path="/contact" element={<Contact lang={lang} content={content} />} />
        
        <Route path="/privacy" element={<PrivacyPolicy content={content} lang={lang} />} />
        <Route path="/terms" element={<TermsOfService content={content} lang={lang} />} />
        <Route path="*" element={<NotFound lang={lang} />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [isLoading, setIsLoading] = useState(true);
  
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme as 'light' | 'dark';
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    }
    return 'dark'; 
  });

  const content = CONTENT[lang];
  const isRtl = lang === 'ar';

  useEffect(() => {
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
      setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
        <ScrollToTop />
        <CustomCursor /> 
        
        <div className={`min-h-screen bg-slate-50 dark:bg-[#02040a] text-slate-900 dark:text-white selection:bg-cyan-500/30 selection:text-white relative overflow-x-hidden transition-colors duration-500 ${isRtl ? 'font-arabic' : 'font-sans'}`} dir={isRtl ? 'rtl' : 'ltr'}>
        
        {/* 1. Global Backgrounds */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
             <div className="aurora-blob w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-900/5 top-[-200px] right-[-100px]" />
             <div className="aurora-blob w-[700px] h-[700px] bg-purple-500/10 dark:bg-blue-900/5 bottom-[-200px] left-[10%] animation-delay-2000" />
        </div>

        <div className="cyber-grid" />
        
        <div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none">
            <Scene theme={theme} />
        </div>

        {/* 2. Loading Screen */}
        <AnimatePresence>
            {isLoading && (
            <motion.div
                key="loading-screen"
                className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-auto"
            >
                {/* Background - This fades out independently */}
                <motion.div 
                    className="absolute inset-0 bg-[#02040a]"
                    exit={{ opacity: 0 }} 
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_60%)]" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center w-full">
                    {/* Logo - NO EXIT ANIMATION. It stays to morph. */}
                    <div className="flex items-center gap-4 mb-12 relative">
                        <motion.div 
                            layoutId="vexl-logo-bar"
                            className="w-1.5 h-16 md:h-20 bg-gradient-to-b from-cyan-400 to-cyan-700 rounded-sm shadow-[0_0_20px_rgba(6,182,212,0.5)]" 
                            transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] }}
                        />
                        <motion.h1 
                            layoutId="vexl-logo-text"
                            className="text-6xl md:text-8xl font-black text-white tracking-[0.2em] font-sans"
                            transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] }}
                        >
                            VEXL
                        </motion.h1>
                    </div>

                    {/* Progress Bar Container - This fades out */}
                    <motion.div 
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center gap-2"
                    >
                        <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden mb-4 relative">
                            <motion.div 
                                className="absolute top-0 left-0 h-full bg-cyan-500 shadow-[0_0_15px_#06b6d4]"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2.2, ease: "easeInOut" }}
                            />
                        </div>
                        
                        <div className="flex justify-between w-64 text-[10px] font-mono text-cyan-500 uppercase tracking-widest font-bold">
                            <span>System Init</span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                ...
                            </motion.span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            )}
        </AnimatePresence>

        {/* 3. Main Layout */}
        <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar lang={lang} setLang={setLang} theme={theme} toggleTheme={toggleTheme} content={content.nav} isLoading={isLoading} />
            
            {/* VEXL NEXUS Chatbot */}
            {!isLoading && <NexusChat lang={lang} />}

            <main className="flex-grow">
                <AnimatedRoutes lang={lang} content={content} />
            </main>

            <Footer content={content.footer} lang={lang} showLogo={!isLoading} />
        </div>

        </div>
    </Router>
  );
};

export default App;
