'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const skills = [
  { category: '前端开发', items: ['Vue3', 'React', 'TypeScript', 'Next.js', 'uni-app', 'Pinia/Vuex/Zustand', '前端工程化'] },
  { category: '后端架构', items: ['Python (FastAPI)', 'Node.js (Express/BFF)', 'Java (Spring Boot)', 'RESTful API', 'JWT'] },
  { category: 'AI / RAG', items: ['LLM 接入', 'Prompt 工程', 'OCR 结构化提取', 'Embedding', '向量检索', 'LangChain/LangGraph'] },
  { category: '数据与基础设施', items: ['MySQL', 'PostgreSQL', 'pgvector', 'Docker', 'Nginx', 'Redis', 'GitLab CI/CD'] },
  { category: '工程与性能', items: ['Monorepo (pnpm+Turborepo)', '低代码引擎', 'ECharts', '大屏性能优化', '长列表/内存治理'] },
];

export default function Skills() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 bg-foreground text-background relative overflow-hidden">
      {/* Subtle background text parallax */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-display font-bold text-background/5 whitespace-nowrap pointer-events-none select-none z-0"
      >
        SKILLS & EXPERTISE
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-background/60 sticky top-32">
              Capabilities
            </h2>
          </div>
          
          <div className="lg:col-span-3">
            <div className="flex flex-col border-t border-background/20">
              {skills.map((skillGroup, index) => (
                <motion.div 
                  key={skillGroup.category}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col md:flex-row items-start md:items-center py-12 border-b border-background/20 gap-8 hover:bg-background/[0.02] transition-colors duration-500 -mx-6 px-6 md:-mx-12 md:px-12"
                >
                  <h3 className="font-display text-3xl md:text-4xl md:w-1/3 group-hover:translate-x-2 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                    {skillGroup.category}
                  </h3>
                  <div className="md:w-2/3 flex flex-wrap gap-x-8 gap-y-4">
                    {skillGroup.items.map((item) => (
                      <span key={item} className="text-background/80 font-sans text-lg relative overflow-hidden group/item">
                        <span className="relative z-10 group-hover/item:text-background transition-colors duration-300">{item}</span>
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-background/30 origin-left scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 ease-out" />
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
