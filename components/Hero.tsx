'use client';

import { motion } from 'motion/react';
import { Github, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="px-6 pt-20 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="text-3xl font-bold mb-4">刘文龙 / Wlait</h1>
        
        <p className="text-lg text-muted-foreground mb-6">
          AI & Full-Stack Developer.
        </p>
        
        <div className="prose prose-neutral dark:prose-invert text-muted-foreground leading-relaxed space-y-4">
          <p>
            7 年全栈研发经验，具备从产品界面到后端服务、再到 AI 应用集成的完整交付能力。
          </p>
          <p>
            专注于中后台、低代码、性能优化与工程化架构落地。
            喜欢构建干净、快速且易于维护的系统。
          </p>
        </div>

        <div className="flex gap-4 mt-8">
          <a href="https://github.com/wlait" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="mailto:hello@wlait.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
