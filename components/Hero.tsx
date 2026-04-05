'use client';

import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const phrases = [
  "AI Applications.",
  "Intelligent Systems.",
  "Digital Elegance.",
  "Robust Architecture."
];

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[index];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      } else {
        setText(currentPhrase.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <span className="inline-flex items-center">
      <span>{text}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[0.05em] h-[0.8em] bg-muted ml-2 md:ml-4 align-baseline"
      />
    </span>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between px-6 md:px-12 pt-32 pb-12">
      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex items-center gap-4"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-40"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground"></span>
          </span>
          <p className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-muted">
            刘文龙 Wlait <span className="mx-2 opacity-50">/</span> AI & Full-Stack Developer
          </p>
        </motion.div>
        
        <div className="overflow-hidden relative z-30 text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw]">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display leading-[1.1] tracking-tight text-foreground whitespace-nowrap pb-[0.2em]"
          >
            Engineering
          </motion.h1>
        </div>
        <div className="overflow-hidden relative z-20 text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] -mt-[0.3em]">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display leading-[1.1] tracking-tight text-foreground flex items-center gap-4 md:gap-8 whitespace-nowrap pb-[0.2em]"
          >
            <span className="italic text-muted font-light"><Typewriter /></span>
          </motion.h1>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-border pt-8 relative z-10"
      >
        <div className="md:col-span-2 flex flex-col gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-muted">Introduction</span>
          <p className="max-w-xl text-foreground/80 text-base md:text-lg leading-relaxed text-balance font-sans">
            7 年全栈研发经验，具备从产品界面到后端服务、再到 AI 应用集成的完整交付能力。专注于中后台、低代码、性能优化与工程化架构落地。
          </p>
        </div>
        
        <div className="md:col-span-1 flex items-start md:justify-end">
          <div className="flex items-center gap-4 group cursor-pointer">
            <span className="font-mono text-xs uppercase tracking-widest text-muted group-hover:text-foreground transition-colors">
              向下滚动
            </span>
            <motion.div 
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-foreground transition-colors"
            >
              <ArrowDown className="w-4 h-4 text-foreground" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
