'use client';

import { motion } from 'motion/react';

export default function Logo({ className = "w-14 h-10" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 70 50" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <motion.path 
        d="M 2 25 Q 5 15 8 20 Q 12 45 16 25 Q 20 45 24 25 C 28 25, 38 0, 33 40 C 33 45, 43 45, 43 35 C 38 35, 38 45, 43 45 Q 43 40 43 35 C 43 45, 48 45, 51 35 Q 51 35 51 40 C 51 45, 55 45, 57 35 C 57 15, 57 15, 57 40 C 57 45, 63 45, 65 35 M 50 22 L 52 22 M 53 25 L 61 25" 
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
      />
    </svg>
  );
}
