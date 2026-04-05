'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-multiply"
    >
      <Link href="/" className="text-lg font-display italic tracking-tight hover:opacity-60 transition-opacity">
        Wlait.
      </Link>
      
      <div className="flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
        <Link href="#projects" className="text-foreground hover:text-muted transition-colors">
          作品
        </Link>
        <Link href="#experience" className="text-foreground hover:text-muted transition-colors">
          经历
        </Link>
        <Link href="mailto:hello@wlait.com" className="text-foreground hover:text-muted transition-colors">
          联系
        </Link>
      </div>
    </motion.nav>
  );
}
