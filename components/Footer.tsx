'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-32 px-6 md:px-12 bg-foreground text-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-background/60 mb-12">
              Let&apos;s Connect
            </h2>
            <h3 className="text-5xl md:text-8xl font-display leading-[0.9] mb-16 text-balance">
              Start a <br />
              <span className="italic font-light text-background/80">conversation.</span>
            </h3>
            
            <Link 
              href="mailto:wloops@foxmail.com"
              className="inline-flex items-center gap-6 group"
            >
              <span className="text-2xl md:text-4xl font-sans group-hover:text-background/60 transition-colors border-b border-transparent group-hover:border-background/60 pb-1">
                wloops@foxmail.com
              </span>
              <div className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center group-hover:bg-background group-hover:text-foreground transition-all duration-300">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-background/20">
          <div className="font-display text-2xl italic tracking-tight">
            Wlait.
          </div>
          
          <div className="flex gap-8">
            <Link href="https://github.com" target="_blank" className="font-mono text-xs text-background/60 hover:text-background transition-colors uppercase tracking-widest">
              GitHub
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="font-mono text-xs text-background/60 hover:text-background transition-colors uppercase tracking-widest">
              LinkedIn
            </Link>
            <Link href="https://twitter.com" target="_blank" className="font-mono text-xs text-background/60 hover:text-background transition-colors uppercase tracking-widest">
              Twitter
            </Link>
          </div>
          
          <div className="text-background/60 text-xs font-mono">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
