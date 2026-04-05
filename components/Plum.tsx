'use client';

import { useEffect, useRef } from 'react';

export default function Plum() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let size = { width: window.innerWidth, height: window.innerHeight };
    let steps: (() => void)[] = [];
    let prevSteps: (() => void)[] = [];
    let raf: number;

    const dpr = window.devicePixelRatio || 1;

    const initCanvas = () => {
      size = { width: window.innerWidth, height: window.innerHeight };
      canvas.width = size.width * dpr;
      canvas.height = size.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${size.width}px`;
      canvas.style.height = `${size.height}px`;
    };

    const step = (x: number, y: number, rad: number, depth: number = 0) => {
      const length = Math.random() * 6;
      const nx = x + Math.cos(rad) * length;
      const ny = y + Math.sin(rad) * length;

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(nx, ny);
      ctx.stroke();

      // Stop if out of bounds
      if (nx < -100 || nx > size.width + 100 || ny < -100 || ny > size.height + 100) return;

      // Branching probability: higher chance to branch initially, then drops to 50%
      const rate = depth <= 5 ? 0.8 : 0.5;

      // Left branch
      if (Math.random() < rate) {
        steps.push(() => step(nx, ny, rad - Math.random() * 0.3, depth + 1));
      }
      // Right branch
      if (Math.random() < rate) {
        steps.push(() => step(nx, ny, rad + Math.random() * 0.3, depth + 1));
      }
    };

    const frame = () => {
      prevSteps = steps;
      steps = [];
      if (!prevSteps.length) {
        cancelAnimationFrame(raf);
        return;
      }
      // Execute all pending drawing steps for this frame
      prevSteps.forEach(i => i());
      raf = requestAnimationFrame(frame);
    };

    const randomMiddle = () => Math.random() * 0.6 + 0.2;

    const start = () => {
      cancelAnimationFrame(raf);
      ctx.clearRect(0, 0, size.width, size.height);
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(156, 163, 175, 0.25)'; // Subtle gray color for branches
      prevSteps = [];
      
      // Start from the edges (left, right, top, bottom)
      steps = [
        () => step(size.width * randomMiddle(), size.height, -Math.PI / 2), // bottom -> up
        () => step(0, size.height * randomMiddle(), 0), // left -> right
        () => step(size.width, size.height * randomMiddle(), Math.PI), // right -> left
        () => step(size.width * randomMiddle(), 0, Math.PI / 2), // top -> down
      ];
      
      // Randomly drop some starting points to make it more organic and less crowded
      steps = steps.filter(() => Math.random() > 0.3);
      
      // Ensure at least one branch starts
      if (steps.length === 0) {
        steps.push(() => step(size.width * randomMiddle(), size.height, -Math.PI / 2));
      }

      raf = requestAnimationFrame(frame);
    };

    initCanvas();
    start();

    // Handle window resize
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        initCanvas();
        start();
      }, 200);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        // Fade out the branches in the center so they don't obscure the main content
        maskImage: 'radial-gradient(circle at center, transparent 10%, black 80%)',
        WebkitMaskImage: 'radial-gradient(circle at center, transparent 10%, black 80%)'
      }}
    />
  );
}
