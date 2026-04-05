'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'AI 知识库问答平台',
    description: '面向企业知识管理场景，搭建支持文档上传解析、文本清洗、切片、向量索引构建、语义检索、引用溯源的完整 RAG 链路。',
    tags: ['FastAPI', 'Next.js', 'PostgreSQL', 'pgvector', 'RAG'],
    link: '#',
  },
  {
    id: '02',
    title: 'HOBY 全流程供应链平台',
    description: '面向政府及企业的大型 B2B 供应链服务平台。从 0 到 1 设计 React 配置端 + Vue 3 渲染端的双引擎低代码体系，大幅提升交付效率。',
    tags: ['React', 'Vue3', 'Node.js BFF', 'Java', '低代码'],
    link: '#',
  },
  {
    id: '03',
    title: '密码安全态势感知大屏',
    description: '面向政企安全运营的监控中枢。设计拖拽编排 + JSON Schema 驱动的可视化页面配置引擎，并解决海量实时数据场景下的性能瓶颈。',
    tags: ['Vue3', 'ECharts', 'WebSocket', '大屏优化'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-6">
            Selected Works
          </h2>
          <p className="text-2xl md:text-4xl font-display leading-tight text-balance max-w-3xl">
            精选项目展示。摒弃冗余，专注于核心架构与极致的交互细节。
          </p>
        </div>

        <div className="flex flex-col border-t border-border">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link 
                href={project.link} 
                className="group flex flex-col md:flex-row items-start md:items-center justify-between py-12 border-b border-border hover:bg-black/[0.02] transition-colors -mx-6 px-6 md:-mx-12 md:px-12"
              >
                <div className="flex items-start gap-8 md:gap-16 md:w-1/2 mb-6 md:mb-0">
                  <span className="font-mono text-xs text-muted pt-2">{project.id}</span>
                  <div>
                    <h3 className="font-display text-4xl md:text-5xl group-hover:translate-x-4 transition-transform duration-500 ease-out">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <div className="md:w-1/2 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                  <div className="max-w-sm">
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono text-muted uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300 shrink-0 -rotate-45 group-hover:rotate-0">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
