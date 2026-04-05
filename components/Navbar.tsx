'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Logo from './Logo';
import { Github, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-multiply"
    >
      <Link href="/" className="hover:opacity-60 transition-opacity" aria-label="Home">
        <Logo className="w-14 h-10 text-foreground" />
      </Link>
      
      <div className="flex items-center gap-6 md:gap-8 font-mono text-xs uppercase tracking-widest">
        <div className="hidden md:flex items-center gap-8 mr-4">
          <Link href="/#projects" className="text-foreground hover:text-muted transition-colors">
            Projects
          </Link>
          <Link href="/#experience" className="text-foreground hover:text-muted transition-colors">
            Experience
          </Link>
        </div>
        
        <div className="flex items-center gap-5 border-l border-border pl-6 md:pl-4">
          <Link href="https://github.com/wlait" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-muted transition-colors" aria-label="GitHub">
            <Github className="w-4 h-4" />
          </Link>
          <Link href="mailto:hello@wlait.com" className="text-foreground hover:text-muted transition-colors" aria-label="Email">
            <Mail className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
