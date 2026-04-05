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
    <section className="px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-2xl font-bold mb-8">Skills</h2>
        
        <div className="flex flex-col gap-6">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="flex flex-col sm:flex-row gap-2 sm:gap-8">
              <div className="sm:w-32 shrink-0 font-medium text-foreground">
                {skillGroup.category}
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span key={item} className="text-sm text-muted-foreground bg-black/5 px-2 py-1 rounded">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
