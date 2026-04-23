'use client';

import { useState } from 'react';
import { ExternalLink, Info, X } from 'lucide-react';

export default function DemoLink({ url, projectId }: { url: string; projectId: string }) {
  const [open, setOpen] = useState(false);

  let credentials = null;
  if (projectId === '01') {
    credentials = {
      username: 'admin@example.com',
      password: '123456'
    };
  } else if (projectId === '02') {
    credentials = {
      username: 'testUser',
      password: '2026auth20+'
    };
  }

  const handleOpenDemo = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
    setOpen(false);
  };

  if (!credentials) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest border border-foreground bg-foreground text-background px-6 py-3 rounded-full hover:bg-transparent hover:text-foreground transition-all duration-300">
        <span>Live Demo</span>
        <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    );
  }

  return (
    <>
      <button 
        onClick={() => setOpen(true)}
        className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest border border-foreground bg-foreground text-background px-6 py-3 rounded-full hover:bg-transparent hover:text-foreground transition-all duration-300 cursor-pointer"
      >
        <span>Live Demo</span>
        <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 opacity-100 transition-opacity">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          
          {/* Modal */}
          <div className="relative w-full max-w-sm bg-background border border-border shadow-2xl rounded-2xl p-6 md:p-8 flex flex-col gap-6 animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 p-2 text-muted hover:text-foreground transition-colors rounded-full hover:bg-foreground/5 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-blue-500/10 p-2 rounded-full border border-blue-500/20">
                  <Info className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="text-xl font-display tracking-tight text-foreground">
                  测试账号
                </h3>
              </div>
              <p className="text-sm font-sans text-muted/80 leading-relaxed">
                正在前往 Live Demo，您可以使用以下测试账号进行体验：
              </p>
            </div>

            <div className="bg-foreground/[0.03] rounded-xl p-5 font-mono text-sm flex flex-col gap-4 border border-foreground/10">
              <div className="flex justify-between items-center gap-4">
                <span className="text-muted/70 text-xs tracking-widest uppercase">Account</span>
                <span className="text-foreground tracking-wide font-medium text-right select-all">{credentials.username}</span>
              </div>
              <div className="h-px w-full bg-border/50" />
              <div className="flex justify-between items-center gap-4">
                <span className="text-muted/70 text-xs tracking-widest uppercase">Password</span>
                <span className="text-foreground tracking-wide font-medium text-right select-all">{credentials.password}</span>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-2">
              <button 
                onClick={() => setOpen(false)}
                className="px-5 py-2.5 text-xs font-mono uppercase tracking-wider rounded-full hover:bg-foreground/5 transition-colors text-muted cursor-pointer"
              >
                取消
              </button>
              <button 
                onClick={handleOpenDemo}
                className="px-6 py-2.5 text-xs font-mono uppercase tracking-wider rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-foreground/10"
              >
                前往演示
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
