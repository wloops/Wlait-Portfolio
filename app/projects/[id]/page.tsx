import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import * as motion from 'motion/react-client';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background pb-32">
      <div className="fixed inset-0 bg-dot-grid pointer-events-none z-50" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center px-6 py-6 md:px-12 mix-blend-multiply bg-background/80 backdrop-blur-md border-b border-border/50">
        <Link href="/#projects" className="group flex items-center gap-3 font-mono text-xs uppercase tracking-widest hover:text-muted transition-colors">
          <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-foreground transition-colors">
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
          </div>
          <span>Back to Projects</span>
        </Link>
      </nav>

      <article className="pt-40 px-6 md:px-12 max-w-5xl mx-auto relative z-10">
        {/* Header Section */}
        <header className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="font-mono text-xs text-muted border border-border px-4 py-1.5 rounded-full">
              {project.year}
            </span>
            <span className="font-mono text-xs text-muted border border-border px-4 py-1.5 rounded-full">
              {project.role}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight mb-12 text-balance"
          >
            {project.title}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {project.tags.map(tag => (
              <span key={tag} className="text-xs font-mono text-foreground/80 bg-black/[0.03] border border-black/[0.05] px-3 py-1.5 rounded-md uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Action Links */}
          {('demoUrl' in project || 'githubUrl' in project) && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4 mb-12"
            >
              {'demoUrl' in project && project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest border border-foreground bg-foreground text-background px-6 py-3 rounded-full hover:bg-transparent hover:text-foreground transition-all duration-300">
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
              {'githubUrl' in project && project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest border border-border px-6 py-3 rounded-full hover:border-foreground transition-all duration-300">
                  <Github className="w-3 h-3" />
                  <span>Source Code</span>
                </a>
              )}
            </motion.div>
          )}
        </header>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] mb-32 overflow-hidden rounded-xl bg-black/5 border border-border/50 shadow-sm"
        >
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column: Overview */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-8 sticky top-32">
              Overview
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-sans text-balance first-letter:text-5xl first-letter:font-display first-letter:mr-2 first-letter:float-left first-letter:leading-none">
              {project.overview}
            </p>
          </motion.div>

          {/* Right Column: Challenges & Solutions */}
          <div className="lg:col-span-7 flex flex-col gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-8 border-b border-border pb-4">
                Challenges
              </h2>
              <ul className="flex flex-col gap-8">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex gap-6 items-start group">
                    <span className="font-mono text-xs text-muted/50 mt-1.5 group-hover:text-foreground transition-colors">0{index + 1}</span>
                    <p className="text-base md:text-lg leading-relaxed text-foreground/80">{challenge}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-8 border-b border-border pb-4">
                Solutions
              </h2>
              <ul className="flex flex-col gap-8">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex gap-6 items-start group">
                    <span className="font-mono text-xs text-muted/50 mt-1.5 group-hover:text-foreground transition-colors">0{index + 1}</span>
                    <p className="text-base md:text-lg leading-relaxed text-foreground/80">{solution}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Architecture Image */}
        {'architectureImage' in project && project.architectureImage && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-32 lg:mt-40"
          >
            <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-8 border-b border-border pb-4">
              Architecture Design
            </h2>
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden bg-black/5 border border-border/50 shadow-sm group">
              <Image 
                src={project.architectureImage} 
                alt={`${project.title} Architecture`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        )}
      </article>
    </main>
  );
}
