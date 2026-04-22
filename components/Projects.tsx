'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/lib/data';

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-6">
            Selected Works
          </h2>
          <p className="text-2xl md:text-4xl font-display leading-tight text-balance max-w-3xl">
            精选项目展示。摒弃冗余，专注于核心架构与极致的交互细节。
          </p>
        </motion.div>

        <div className="flex flex-col border-t border-border">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link 
                href={`/projects/${project.id}`} 
                className="group flex flex-col md:flex-row items-start md:items-center justify-between py-12 border-b border-border hover:bg-foreground/[0.02] transition-colors duration-500 -mx-6 px-6 md:-mx-12 md:px-12 relative overflow-hidden"
              >
                {/* Hover Background Reveal */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/[0.01] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                
                <div className="flex items-start gap-6 md:gap-12 lg:gap-16 md:w-5/12 lg:w-1/2 mb-6 md:mb-0 relative z-10">
                  <span className="font-mono text-xs text-muted pt-1.5 group-hover:text-foreground transition-colors duration-300 shrink-0">{project.id}</span>
                  <div>
                    {((project as any).type || (project as any).status) && (
                      <div className="mb-3 flex items-center gap-2 flex-wrap">
                        {(project as any).type && (
                          <span className={`px-2.5 py-1 text-[10px] font-mono tracking-wider rounded-md border ${
                            (project as any).type === 'Personal Project' 
                              ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' 
                              : 'bg-foreground/5 text-muted border-border/50'
                          }`}>
                            {(project as any).type}
                          </span>
                        )}
                        {(project as any).status && (
                          <span className="px-2.5 py-1 text-[10px] font-mono tracking-wider rounded-md border bg-amber-500/10 text-amber-500 border-amber-500/20">
                            {(project as any).status}
                          </span>
                        )}
                      </div>
                    )}
                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl leading-snug group-hover:translate-x-4 transition-transform duration-500 ease-[0.16,1,0.3,1] text-balance">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <div className="md:w-7/12 lg:w-1/2 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
                  <div className="max-w-md">
                    <p className="text-muted text-sm leading-relaxed mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech?.map(tag => (
                        <span key={tag} className="text-xs font-mono text-muted uppercase tracking-wider group-hover:border-foreground/20 transition-colors duration-300 border border-transparent px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background group-hover:scale-110 transition-all duration-500 ease-[0.16,1,0.3,1] shrink-0 -rotate-45 group-hover:rotate-0">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
