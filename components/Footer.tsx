
import React from 'react';
import { Link } from 'react-router-dom';
import { Content, Language } from '../types';

interface FooterProps {
  content: Content['footer'];
  lang: Language;
  showLogo?: boolean;
}

// Custom Link Component for Premium Hover Effect
const FooterLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link 
    to={to} 
    className="relative w-fit group"
  >
    <span className="relative z-10 transition-colors duration-300 text-slate-600 dark:text-slate-500 group-hover:text-cyan-800 dark:group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
      {children}
    </span>
    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-cyan-700 dark:bg-cyan-400 transition-all duration-300 group-hover:w-full ease-out" />
  </Link>
);

// Custom External Link Component
const ExternalLink: React.FC<{ href: string; label: string }> = ({ href, label }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noreferrer" 
        className="relative group w-fit"
    >
        <span className="text-slate-600 dark:text-slate-600 font-bold font-mono text-xs hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors duration-300 group-hover:drop-shadow-[0_0_5px_rgba(6,182,212,0.4)]">
            {label}
        </span>
        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-cyan-700 dark:bg-cyan-400 transition-all duration-300 group-hover:w-full ease-out" />
    </a>
)

const Footer: React.FC<FooterProps> = ({ content, lang }) => {
  return (
    <footer id="footer" className="bg-slate-100 dark:bg-black pt-32 pb-16 border-t border-slate-300 dark:border-white/5 relative z-10 transition-colors duration-500 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/5 dark:bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-24">
            
            {/* Logo & Slogan */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                 <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-cyan-100 dark:to-slate-400 tracking-[0.25em] font-sans opacity-100 dark:opacity-40 dark:hover:opacity-100 transition-opacity duration-500 cursor-default drop-shadow-none dark:drop-shadow-[0_0_15px_rgba(6,182,212,0.2)] mb-4">
                    VEXL
                </h2>
                <p className="text-slate-600 dark:text-slate-500 text-lg md:text-xl font-bold tracking-[0.3em] uppercase mix-blend-normal dark:mix-blend-plus-lighter">
                    {content.phrase}
                </p>
            </div>

            {/* Quick Links Directory */}
            <div className="hidden md:flex gap-16 text-xs tracking-widest uppercase font-mono font-bold">
                <div className="flex flex-col gap-4">
                    <span className="text-cyan-700 dark:text-cyan-500 mb-2 pointer-events-none select-none">// DIRECTORY</span>
                    <FooterLink to="/">The Hub</FooterLink>
                    <FooterLink to="/vision#philosophy">Philosophy</FooterLink>
                    <FooterLink to="/studio">Studio</FooterLink>
                    <FooterLink to="/academy">Academy</FooterLink>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-cyan-700 dark:text-cyan-500 mb-2 pointer-events-none select-none">// ECOSYSTEM</span>
                    <FooterLink to="/network">Network</FooterLink>
                    <FooterLink to="/vision#impact">Impact</FooterLink>
                    <FooterLink to="/contact">Contact</FooterLink>
                </div>
            </div>
        </div>

        <div className="w-full h-px bg-slate-300 dark:bg-white/5 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full text-xs text-slate-600 dark:text-slate-600 font-mono gap-6 font-bold">
            <div className="flex gap-6 items-center">
                <span className="text-slate-800 dark:text-slate-600">{content.copyright}</span>
                <span className="hidden md:inline text-slate-400">|</span>
                <Link to="/privacy" className="hover:text-black dark:hover:text-slate-300 transition-colors cursor-pointer">PRIVACY</Link>
                <Link to="/terms" className="hover:text-black dark:hover:text-slate-300 transition-colors cursor-pointer">TERMS</Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
                <ExternalLink href="https://www.linkedin.com/company/vexl-studio" label="LINKEDIN" />
                <ExternalLink href="https://www.instagram.com/vexl_gis/" label="INSTAGRAM" />
                <ExternalLink href="https://wa.me/201279298987" label="WHATSAPP" />
                <ExternalLink href="mailto:vexl.gis@gmail.com" label="EMAIL" />
                <ExternalLink href="tel:+201279298987" label="01279298987" />
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
