
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bot, Terminal, Sparkles, User, Mail, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Language } from '../types';

interface NexusChatProps {
  lang: Language;
}

type Message = {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  isTyping?: boolean;
};

type Option = {
    label: string;
    type: string;
    icon?: React.ReactNode;
};

const NexusChat: React.FC<NexusChatProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const isRtl = lang === 'ar';

  // --- CONTENT SCRIPT ---
  const SCRIPT = {
    en: {
      greeting: "System Online. I am VEXL Nexus. How can I assist you?",
      typing: "Analyzing request...",
      options: [
        { label: "Who are you?", type: 'identity' },
        { label: "Student Services", type: 'student' },
        { label: "Join Academy", type: 'academy' },
        { label: "Speak to Human", type: 'human' }
      ],
      humanOptions: [
        { label: "WhatsApp", type: 'whatsapp', icon: <MessageCircle size={14} /> },
        { label: "Gmail / Email", type: 'email', icon: <Mail size={14} /> }
      ],
      responses: {
        identity: "We are the Architects of Spatial Intelligence. Redirecting to Vision...",
        student: "Initiating Academic Support Protocol. We offer elite mentorship. Opening Studio...",
        academy: "VEXL Academy is restricted to elite candidates. Opening Application Protocol...",
        human: "Select your preferred secure channel:", // Intermediate response
        whatsapp: "Establishing secure uplink via WhatsApp...",
        email: "Opening mail client protocol..."
      }
    },
    ar: {
      greeting: "النظام يعمل. أنا مساعد VEXL الذكي. كيف يمكنني مساعدتك؟",
      typing: "جارِ التحليل...",
      options: [
        { label: "من أنتم؟", type: 'identity' },
        { label: "خدمات الطلاب", type: 'student' },
        { label: "الانضمام للأكاديمية", type: 'academy' },
        { label: "تحدث مع بشري", type: 'human' }
      ],
      humanOptions: [
        { label: "واتساب", type: 'whatsapp', icon: <MessageCircle size={14} /> },
        { label: "البريد الإلكتروني", type: 'email', icon: <Mail size={14} /> }
      ],
      responses: {
        identity: "نحن مهندسو الذكاء المكاني. جاري التوجيه إلى صفحة الرؤية...",
        student: "بدء بروتوكول الدعم الأكاديمي. نقدم إرشاداً للنخبة. جاري فتح الاستوديو...",
        academy: "أكاديمية VEXL مخصصة للنخبة. جاري فتح بروتوكول التقديم...",
        human: "اختر وسيلة الاتصال الآمنة:", // Intermediate response
        whatsapp: "جاري تأسيس اتصال آمن عبر واتساب...",
        email: "جاري فتح عميل البريد الإلكتروني..."
      }
    }
  };

  const currentScript = SCRIPT[lang];
  
  // Dynamic Options State
  const [currentOptions, setCurrentOptions] = useState<Option[]>(currentScript.options);

  // Initialize Chat & Reset Options on Language Change
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        { id: 'init', sender: 'bot', text: currentScript.greeting }
      ]);
    }
    // Reset options to main menu when language changes
    setCurrentOptions(currentScript.options);
  }, [lang]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const executeAction = (type: string) => {
      // Close chat shortly before or during navigation for smooth transition
      setTimeout(() => setIsOpen(false), 500); 

      switch(type) {
          case 'identity': navigate('/vision'); break;
          case 'student': navigate('/studio'); break;
          case 'academy': navigate('/academy'); break;
          case 'whatsapp': window.open('https://wa.me/201279298987', '_blank'); break;
          case 'email': window.location.href = "mailto:vexl.gis@gmail.com"; break;
          default: break;
      }
  }

  const handleOptionClick = (optionLabel: string, type: string) => {
    // 1. Add User Message
    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: optionLabel };
    setMessages(prev => [...prev, userMsg]);
    setShowOptions(false); 
    setIsTyping(true);

    // 2. Simulate Bot Thinking Delay
    setTimeout(() => {
      setIsTyping(false);
      
      const responseText = currentScript.responses[type as keyof typeof currentScript.responses];
      const botMsg: Message = { id: (Date.now() + 1).toString(), sender: 'bot', text: responseText };
      setMessages(prev => [...prev, botMsg]);
      
      // 3. Logic Branch: Check if it's the "human" intermediate step
      if (type === 'human') {
          // Switch to sub-options
          setCurrentOptions(currentScript.humanOptions);
          // Show options again quickly
          setTimeout(() => setShowOptions(true), 600);
      } else {
          // It's a leaf action (navigation or external link)
          // Wait 1.5s for user to read the message, then execute action
          setTimeout(() => {
              executeAction(type);
              
              // Reset to main menu options for next time the chat opens
              setTimeout(() => {
                setCurrentOptions(currentScript.options);
                setShowOptions(true); 
              }, 1000); 
          }, 2000);
      }

    }, 1200);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9990] w-14 h-14 bg-slate-900 dark:bg-cyan-950 border border-slate-700 dark:border-cyan-500/50 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-110 transition-all duration-300 group"
      >
        <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-ping opacity-20" />
        {isOpen ? <X size={24} /> : <Sparkles size={24} className="text-cyan-400" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`fixed bottom-24 right-6 w-[90vw] md:w-[380px] h-[500px] bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-cyan-900/50 rounded-2xl shadow-2xl z-[9990] flex flex-col overflow-hidden backdrop-blur-xl ${isRtl ? 'font-arabic' : 'font-sans'}`}
            dir={isRtl ? 'rtl' : 'ltr'}
          >
            {/* Header */}
            <div className="h-16 bg-slate-100 dark:bg-cyan-950/20 border-b border-slate-300 dark:border-cyan-900/30 flex items-center justify-between px-6 relative overflow-hidden">
                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent w-full h-full animate-[scan_4s_linear_infinite]" />
                
                <div className="flex items-center gap-3 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                        <Bot size={20} className="text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white tracking-wide">VEXL NEXUS</div>
                        <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            ONLINE
                        </div>
                    </div>
                </div>

                <div className="hidden md:block text-[9px] font-mono text-slate-400 dark:text-cyan-800/60 uppercase tracking-widest text-right">
                    <div>SYS.VER.4.0</div>
                    <div>SECURE.Encrypted</div>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-cyan-900/20 scrollbar-track-transparent">
                {messages.map((msg) => (
                    <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        {msg.sender === 'bot' && (
                             <div className="w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mr-2 mt-1 shrink-0">
                                <Terminal size={12} className="text-cyan-600 dark:text-cyan-400" />
                            </div>
                        )}
                        
                        <div className={`max-w-[80%] p-3 rounded-xl text-sm leading-relaxed shadow-sm ${
                            msg.sender === 'user' 
                                ? 'bg-slate-900 dark:bg-cyan-900/40 text-white border border-slate-700 dark:border-cyan-500/30 rounded-tr-none' 
                                : 'bg-white dark:bg-white/5 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 rounded-tl-none'
                        }`}>
                            {msg.text}
                        </div>

                         {msg.sender === 'user' && (
                             <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center ml-2 mt-1 shrink-0">
                                <User size={12} className="text-slate-600 dark:text-slate-400" />
                            </div>
                        )}
                    </motion.div>
                ))}

                {isTyping && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start items-center gap-2 text-xs text-cyan-600 dark:text-cyan-500 font-mono ml-8">
                        <span className="w-1.5 h-1.5 bg-cyan-600 dark:bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                        <span className="w-1.5 h-1.5 bg-cyan-600 dark:bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        <span className="w-1.5 h-1.5 bg-cyan-600 dark:bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                        <span className="opacity-70">{currentScript.typing}</span>
                    </motion.div>
                )}
                
                <div ref={messagesEndRef} />
            </div>

            {/* Actions Area */}
            <div className="p-4 bg-slate-100/50 dark:bg-black/40 border-t border-slate-200 dark:border-white/5 backdrop-blur-sm">
                
                {/* Main Options Grid */}
                <div className="grid grid-cols-2 gap-2">
                    <AnimatePresence mode='wait'>
                        {showOptions && !isTyping && currentOptions.map((opt, idx) => (
                            <motion.button
                                key={opt.type}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: idx * 0.1 }}
                                onClick={() => handleOptionClick(opt.label, opt.type)}
                                className="p-2.5 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:border-cyan-500 dark:hover:border-cyan-500/50 hover:bg-slate-50 dark:hover:bg-cyan-900/20 rounded-lg text-[10px] md:text-xs font-medium text-slate-700 dark:text-slate-300 text-left transition-all flex items-center gap-2 truncate"
                            >
                                {opt.icon && <span className="text-cyan-600 dark:text-cyan-500">{opt.icon}</span>}
                                {opt.label}
                            </motion.button>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NexusChat;
