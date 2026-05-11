import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import AIWorkflow from '@/components/AIWorkflow';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScrollManager from '@/components/ScrollManager';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <ScrollManager />
      <div className="fixed inset-0 bg-dot-grid pointer-events-none" />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <AIWorkflow />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
