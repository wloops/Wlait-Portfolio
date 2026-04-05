import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

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
      <div className="fixed inset-0 bg-noise pointer-events-none mix-blend-multiply z-50" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center px-6 py-6 md:px-12 mix-blend-multiply bg-background/80 backdrop-blur-md border-b border-border/50">
        <Link href="/#projects" className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:opacity-60 transition-opacity">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>
      </nav>

      <article className="pt-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <header className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-xs text-muted border border-border px-4 py-2 rounded-full">
              {project.year}
            </span>
            <span className="font-mono text-xs text-muted border border-border px-4 py-2 rounded-full">
              {project.role}
            </span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-12">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-3 mb-12">
            {project.tags.map(tag => (
              <span key={tag} className="text-sm font-mono text-foreground bg-black/5 px-4 py-2 rounded-md">
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          {('demoUrl' in project || 'githubUrl' in project) && (
            <div className="flex flex-wrap gap-4 mb-12">
              {'demoUrl' in project && project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono border border-foreground bg-foreground text-background px-6 py-3 rounded-full hover:bg-transparent hover:text-foreground transition-colors">
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {'githubUrl' in project && project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono border border-border px-6 py-3 rounded-full hover:border-foreground transition-colors">
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          )}
        </header>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] mb-24 overflow-hidden rounded-lg bg-black/5">
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Column: Overview */}
          <div className="lg:col-span-5">
            <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-6 sticky top-32">
              Overview
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/80 font-sans text-balance">
              {project.overview}
            </p>
          </div>

          {/* Right Column: Challenges & Solutions */}
          <div className="lg:col-span-7 flex flex-col gap-16">
            <div>
              <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-8 border-b border-border pb-4">
                Challenges
              </h2>
              <ul className="flex flex-col gap-6">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    <span className="font-mono text-xs text-muted mt-1.5">0{index + 1}</span>
                    <p className="text-base md:text-lg leading-relaxed text-foreground/80">{challenge}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-8 border-b border-border pb-4">
                Solutions
              </h2>
              <ul className="flex flex-col gap-6">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    <span className="font-mono text-xs text-muted mt-1.5">0{index + 1}</span>
                    <p className="text-base md:text-lg leading-relaxed text-foreground/80">{solution}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Architecture Image */}
        {'architectureImage' in project && project.architectureImage && (
          <div className="mt-24 lg:mt-32">
            <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-8 border-b border-border pb-4">
              Architecture Design
            </h2>
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden bg-black/5 border border-border/50">
              <Image 
                src={project.architectureImage} 
                alt={`${project.title} Architecture`}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        )}
      </article>
    </main>
  );
}
