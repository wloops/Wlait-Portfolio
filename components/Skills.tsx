'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const skills = [
  { category: 'AI & Multi-Agent', items: ['LLM 模型接入', 'Agent 工作流编排', 'LangGraph', 'MCP 协议扩展', 'RAG / 混合检索', 'Agent Skills'] },
  { category: '前端生态与架构', items: ['React / Next.js', 'Vue 3', 'TypeScript', 'Tailwind CSS', '状态管理 (Zustand/Pinia)', '低代码渲染引擎'] },
  { category: '服务端与数据库', items: ['PostgreSQL & pgvector', 'Python (FastAPI)', 'Java (Spring Boot)', 'Redis', 'RESTful API设计', 'Celery'] },
  { category: '产品架构与体验', items: ['业务边界与需求拆解', '复杂交互工作流编排', 'B端/SaaS 产品设计', 'AI 创新场景落地', 'MVP 最小可行性验证'] },
  { category: '工程与基础设施', items: ['Docker', 'Nginx', 'Vite / Webpack', 'GitLab CI/CD', 'Monorepo (Turborepo)'] },
  { category: '数据与大屏性能', items: ['ECharts', 'WebSocket', '长列表/DOM 内存治理', '增量渲染调优', '超大屏精确适配'] },
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
                  <div className="md:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                    {skillGroup.items.map((item) => (
                      <span key={item} className="text-background/80 font-sans text-base md:text-lg relative overflow-hidden group/item">
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
