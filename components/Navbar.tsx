'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 max-w-3xl mx-auto bg-background/80 backdrop-blur-sm"
    >
      <Link href="/" className="text-xl font-bold hover:opacity-60 transition-opacity">
        Wlait
      </Link>
      
      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        <Link href="#projects" className="hover:text-foreground transition-colors">
          Projects
        </Link>
        <Link href="#experience" className="hover:text-foreground transition-colors">
          Experience
        </Link>
        <Link href="mailto:hello@wlait.com" className="hover:text-foreground transition-colors">
          Contact
        </Link>
      </div>
    </motion.nav>
  );
}
