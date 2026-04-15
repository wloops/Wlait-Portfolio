import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import AIEvolution from '@/components/AIEvolution';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <div className="fixed inset-0 bg-dot-grid pointer-events-none" />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <AIEvolution />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
