'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { projects } from '@/lib/data';

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-2xl font-bold mb-8">Projects</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <Link 
              href={`/projects/${project.id}`} 
              key={project.id}
              className="group block p-4 -m-4 rounded-lg hover:bg-black/5 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-foreground group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-xs text-muted-foreground bg-black/5 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
