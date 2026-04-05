'use client';

import { motion } from 'motion/react';

const skills = [
  { category: '前端开发', items: ['Vue3', 'React', 'TypeScript', 'Next.js', 'uni-app', 'Pinia/Vuex/Zustand', '前端工程化'] },
  { category: '后端架构', items: ['Python (FastAPI)', 'Node.js (Express/BFF)', 'Java (Spring Boot)', 'RESTful API', 'JWT'] },
  { category: 'AI / RAG', items: ['LLM 接入', 'Prompt 工程', 'OCR 结构化提取', 'Embedding', '向量检索', 'LangChain/LangGraph'] },
  { category: '数据与基础设施', items: ['MySQL', 'PostgreSQL', 'pgvector', 'Docker', 'Nginx', 'Redis', 'GitLab CI/CD'] },
  { category: '工程与性能', items: ['Monorepo (pnpm+Turborepo)', '低代码引擎', 'ECharts', '大屏性能优化', '长列表/内存治理'] },
];

export default function Skills() {
  return (
    <section className="py-32 px-6 md:px-12 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col md:flex-row items-start md:items-center py-12 border-b border-background/20 gap-8"
                >
                  <h3 className="font-display text-3xl md:text-4xl md:w-1/3">
                    {skillGroup.category}
                  </h3>
                  <div className="md:w-2/3 flex flex-wrap gap-x-8 gap-y-4">
                    {skillGroup.items.map((item) => (
                      <span key={item} className="text-background/80 font-sans text-lg">
                        {item}
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
