'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

type ArchImage = { src: string; title: string; description?: string };

export default function ArchitectureGrid({ images }: { images: ArchImage[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  if (!images || images.length === 0) return null;

  const slides = images.map(img => ({
    src: img.src,
    title: img.title,
    description: img.description || undefined
  }));

  return (
    <div className="mt-24 lg:mt-32">
      <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-8 border-b border-border pb-4">
        Architecture & Design
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((arch, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col bg-foreground/[0.02] border border-border/50 rounded-2xl overflow-hidden hover:bg-foreground/[0.04] transition-colors"
          >
            <div 
              className="relative w-full aspect-[16/9] bg-foreground/5 cursor-pointer overflow-hidden"
              onClick={() => setSelectedIndex(idx)}
            >
              <Image 
                src={arch.src} 
                alt={arch.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 bg-background/80 backdrop-blur-sm text-foreground p-2 rounded-full transition-opacity duration-300 transform scale-90 group-hover:scale-100 shadow-lg">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-display mb-2">{arch.title}</h3>
              {arch.description && (
                <p className="text-muted text-sm leading-relaxed">{arch.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={selectedIndex >= 0}
        close={() => setSelectedIndex(-1)}
        index={selectedIndex >= 0 ? selectedIndex : 0}
        slides={slides}
        plugins={[Captions]}
        carousel={{ finite: images.length <= 1 }}
        render={{
          buttonPrev: images.length <= 1 ? () => null : undefined,
          buttonNext: images.length <= 1 ? () => null : undefined,
        }}
      />
    </div>
  );
}
