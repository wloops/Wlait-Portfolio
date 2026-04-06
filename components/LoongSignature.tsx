'use client';

import { motion } from 'motion/react';

export default function LoongSignature({ className = "w-14 h-10" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 80" 
      className={className}
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <motion.path
        d="M 18 10 C 16 25, 16 45, 20 45 C 25 45, 27 35, 31 35 C 25 35, 25 45, 31 45 C 37 45, 37 35, 31 35 C 34 38, 38 38, 41 35 C 35 35, 35 45, 41 45 C 47 45, 47 35, 41 35 C 44 38, 48 38, 51 35 C 51 40, 51 45, 51 45 C 51 35, 56 33, 59 35 C 61 37, 61 42, 61 45 C 63 45, 67 35, 71 35 C 65 35, 65 45, 71 45 C 77 45, 77 35, 71 35 C 71 45, 71 65, 65 65 C 59 65, 59 55, 69 50 C 75 47, 81 44, 87 41"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
      />
    </svg>
  );
}
