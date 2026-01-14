
import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { AlertTriangle, Home } from 'lucide-react';
import PageTransition from '../components/PageTransition';

interface NotFoundProps {
  lang: Language;
}

const NotFound: React.FC<NotFoundProps> = ({ lang }) => {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
        <div className="text-center z-10 p-6">
            <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/30 animate-pulse">
                    <AlertTriangle size={48} className="text-red-500" />
                </div>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black text-slate-900 dark:text-white tracking-widest mb-4">
                404
            </h1>
            
            <div className="h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-red-500 to-transparent mb-6" />
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-mono mb-10 tracking-widest uppercase">
                {lang === 'en' ? 'Signal Lost // Coordinates Not Found' : 'فقدان الإشارة // الإحداثيات غير موجودة'}
            </p>

            <Link 
                to="/" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black font-bold tracking-widest uppercase rounded-sm hover:scale-105 transition-transform shadow-lg"
            >
                <Home size={18} />
                {lang === 'en' ? 'Return to Base' : 'العودة للقاعدة'}
            </Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
