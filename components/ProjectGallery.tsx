'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2, Play } from 'lucide-react';
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

const isVideo = (url: string) => /\.(mp4|webm|ogg)$/i.test(url);

export default function ProjectGallery({ media }: { media: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!media || media.length === 0) return null;

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const slides = media.map(url => {
    if (isVideo(url)) {
      return {
        type: "video" as const,
        sources: [{ src: url, type: "video/mp4" }],
      };
    }
    return { src: url };
  });

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-full mb-24"
    >
      {/* Main Viewer */}
      <div 
        className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden bg-foreground/5 border border-border/50 shadow-sm group cursor-pointer"
        onClick={() => setIsLightboxOpen(true)}
      >
         {isVideo(media[currentIndex]) ? (
           <video src={media[currentIndex]} className="w-full h-full object-cover" autoPlay muted loop playsInline />
         ) : (
           <Image src={media[currentIndex]} alt="Project Media" fill className="object-cover" priority referrerPolicy="no-referrer" />
         )}
         
         {/* Overlay controls */}
         <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 bg-background/80 backdrop-blur-sm text-foreground p-3 rounded-full transition-opacity duration-300 transform scale-90 group-hover:scale-100 shadow-lg">
              <Maximize2 className="w-6 h-6" />
            </div>
         </div>

         {/* Prev/Next Buttons */}
         {media.length > 1 && (
           <>
             <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/50 backdrop-blur-md text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background/80 shadow-md">
               <ChevronLeft className="w-5 h-5" />
             </button>
             <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/50 backdrop-blur-md text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background/80 shadow-md">
               <ChevronRight className="w-5 h-5" />
             </button>
           </>
         )}
      </div>

      {/* Thumbnails */}
      {media.length > 1 && (
        <div className="flex gap-4 mt-6 overflow-x-auto pb-4 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {media.map((item, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentIndex(idx)}
              className={`relative w-32 aspect-video shrink-0 rounded-lg overflow-hidden border-2 transition-all snap-start ${currentIndex === idx ? 'border-foreground opacity-100 scale-100' : 'border-transparent opacity-50 hover:opacity-100 scale-95 hover:scale-100'}`}
            >
              {isVideo(item) ? (
                <>
                  <video src={item} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                </>
              ) : (
                <Image src={item} alt={`Thumbnail ${idx}`} fill className="object-cover" referrerPolicy="no-referrer" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        index={currentIndex}
        slides={slides}
        plugins={[Video]}
        carousel={{ finite: media.length <= 1 }}
        render={{
          buttonPrev: media.length <= 1 ? () => null : undefined,
          buttonNext: media.length <= 1 ? () => null : undefined,
        }}
      />
    </motion.div>
  );
}
