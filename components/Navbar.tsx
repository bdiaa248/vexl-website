
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Language, Content } from '../types';
import { Globe, Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  content: Content['nav'];
  isLoading: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, theme, toggleTheme, content, isLoading }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => location.pathname === path;

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = [
    { path: '/vision', label: content.vision },
    { path: '/studio', label: content.studio },
    { path: '/academy', label: content.academy },
    { path: '/network', label: content.community },
    { path: '/contact', label: content.contact },
  ];

  return (
    <>
      <motion.nav 
        // REMOVED y-axis animation to provide a stable target for the layoutId morph
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: isLoading ? 0.2 : 0 }} 
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 h-24 flex justify-between items-center transition-all duration-300
          ${scrolled 
              ? 'bg-white/95 dark:bg-[#030303]/85 backdrop-blur-xl border-b border-slate-300 dark:border-white/5 shadow-md shadow-slate-200/50 dark:shadow-black/50 py-0' 
              : 'bg-transparent py-4'
          }
        `}
      >
        {/* Logo Container */}
        <div className="cursor-pointer group relative z-50">
          <Link to="/" onClick={handleLogoClick}>
            <div className="relative flex items-center gap-2">
                {!isLoading && (
                  <>
                    <motion.div
                        layoutId="vexl-logo-bar"
                        // Updated to match Loader gradient for seamless morph
                        className="w-2 h-8 bg-slate-900 dark:bg-gradient-to-b dark:from-cyan-400 dark:to-cyan-700 rounded-sm shadow-none dark:shadow-[0_0_15px_rgba(6,182,212,0.8)]"
                        transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] }}
                    />
                    <motion.h1 
                        layoutId="vexl-logo-text"
                        className="text-3xl font-black tracking-[0.2em] text-slate-950 dark:text-white font-sans drop-shadow-none dark:drop-shadow-md"
                        transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] }}
                    >
                        VEXL
                    </motion.h1>
                  </>
                )}
            </div>
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="relative z-50 flex items-center gap-8">
          <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isLoading ? 0 : 1, x: isLoading ? 20 : 0 }}
              transition={{ delay: 0.8, duration: 0.8 }} 
              className="hidden lg:flex items-center bg-white dark:bg-black/20 backdrop-blur-md rounded-full border border-slate-300 dark:border-white/5 p-1.5 shadow-sm"
          >
              {navItems.map((item) => (
                  <Link 
                      key={item.path}
                      to={item.path}
                      onMouseEnter={() => setHoveredPath(item.path)}
                      onMouseLeave={() => setHoveredPath(null)}
                      className={`relative px-6 py-2.5 rounded-full text-xs font-bold tracking-[0.15em] transition-colors duration-300 ${
                          isActive(item.path) ? 'text-white dark:text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                  >
                      {hoveredPath === item.path && (
                          <motion.div
                              layoutId="nav-pill"
                              className="absolute inset-0 bg-slate-100 dark:bg-white/10 rounded-full"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                      )}
                      
                      {isActive(item.path) && (
                          <motion.div 
                              layoutId="nav-active-pill"
                              className="absolute inset-0 bg-slate-900 dark:bg-cyan-900/50 rounded-full border border-slate-900 dark:border-cyan-500/50" 
                          />
                      )}
                      
                      <span className="relative z-10">{item.label}</span>
                  </Link>
              ))}
          </motion.div>

          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: isLoading ? 0 : 1 }}
             transition={{ delay: 1 }}
             className="flex items-center gap-4"
          >
              <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full border border-slate-300 dark:border-white/10 bg-white dark:bg-black/40 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-slate-900 dark:text-slate-300 shadow-sm"
              >
                  {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              <button 
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 dark:border-white/10 bg-white dark:bg-black/40 hover:bg-slate-100 dark:hover:bg-cyan-950/30 transition-all text-xs font-bold font-mono text-slate-800 dark:text-slate-300 group cursor-pointer shadow-sm"
              >
                  <Globe size={14} className="group-hover:rotate-180 transition-transform duration-500" />
                  {lang === 'en' ? 'AR' : 'EN'}
              </button>

              <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden text-slate-900 dark:text-white p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors relative z-[60]"
              >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu Portal */}
      {createPortal(
        <AnimatePresence>
          {isMobileMenuOpen && (
              <motion.div 
                  initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                  animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
                  exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                  className="fixed inset-0 bg-white/98 dark:bg-black/95 z-[55] flex items-center justify-center lg:hidden"
              >
                  <div className="flex flex-col gap-8 text-center">
                      {navItems.map((item, idx) => (
                          <motion.div
                              key={item.path}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 + (idx * 0.1) }}
                          >
                              <Link 
                                  to={item.path} 
                                  onClick={handleLogoClick}
                                  className={`text-3xl font-black tracking-widest uppercase transition-colors ${
                                      isActive(item.path) 
                                          ? 'text-slate-900 dark:text-cyan-400' 
                                          : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                                  }`}
                              >
                                  {item.label}
                              </Link>
                          </motion.div>
                      ))}
                  </div>
              </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Navbar;
