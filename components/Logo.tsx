'use client';

import { motion } from 'motion/react';

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <motion.path 
        d="M 18 45 C 18 65, 22 75, 30 75 C 38 75, 40 55, 42 45 C 44 55, 46 75, 54 75 C 62 75, 68 35, 70 20 C 72 5, 78 5, 78 20 C 78 35, 82 75, 90 75" 
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
      />
    </svg>
  );
}
