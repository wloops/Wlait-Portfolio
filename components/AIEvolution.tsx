'use client';

import { motion } from 'motion/react';
import { Terminal, BrainCircuit, FileCode2 } from 'lucide-react';

const stages = [
  {
    id: '01',
    title: 'Chat & Copilot',
    subtitle: '单点辅助',
    icon: Terminal,
    description: '把 AI 当作高级搜索引擎和代码补全工具。',
    practice: '使用 ChatGPT / GitHub Copilot 进行代码片段生成、正则编写、报错排查和基础的单测生成。',
    status: '局限：缺乏全局上下文，AI 只能解决局部问题。',
    active: false,
  },
  {
    id: '02',
    title: 'Context-Aware',
    subtitle: '上下文感知',
    icon: BrainCircuit,
    description: '把 AI 当作结对编程的副手（AI IDE 时代）。',
    practice: '深度使用 Cursor / Windsurf。通过 @Codebase 引入全局上下文，让 AI 理解目录结构和依赖关系，完成跨文件的业务开发。',
    status: '突破：从“写代码”向“Review 代码”转变。',
    active: false,
  },
  {
    id: '03',
    title: 'Spec-Driven & Agentic',
    subtitle: 'Spec 驱动与全栈闭环',
    icon: FileCode2,
    description: '把 AI 当作执行团队，自己作为 Tech Lead 和架构师。',
    practice: '面向 Spec 编程。先输出详尽的 PRD、架构图、数据流图和 API 契约，然后交由 AI Agent 自动完成全栈代码生成。',
    status: '核心：精力回归需求拆解、架构设计与工程质量验收。',
    active: true,
  }
];

export default function AIEvolution() {
  return (
    <section id="ai-workflow" className="py-32 px-6 md:px-12 relative border-t border-border bg-foreground/[0.01]">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-6">
            AI-Driven Engineering
          </h2>
          <p className="text-2xl md:text-4xl font-display leading-tight text-balance max-w-3xl">
            AI 研发工作流演进。从单点辅助到 Spec 驱动，重塑工程化生产力。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`relative p-8 rounded-2xl border ${stage.active ? 'bg-foreground/[0.03] border-foreground/20 shadow-sm' : 'bg-transparent border-border/50'} flex flex-col h-full overflow-hidden group hover:border-foreground/20 transition-colors duration-500`}
              >
                {stage.active && (
                  <div className="absolute top-0 right-0 bg-foreground text-background text-[10px] font-mono px-3 py-1.5 uppercase tracking-widest rounded-bl-lg z-10">
                    Current Stage
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-500 ${stage.active ? 'bg-foreground text-background' : 'bg-foreground/5 text-foreground/60 group-hover:bg-foreground/10 group-hover:text-foreground'}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-muted/50">{stage.id}</span>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-display mb-1">{stage.title}</h3>
                  <p className="text-sm font-mono text-muted mb-8">{stage.subtitle}</p>
                  
                  <div className="space-y-4 text-sm text-foreground/80 leading-relaxed">
                    <p><strong className="font-medium text-foreground">状态：</strong>{stage.description}</p>
                    <p><strong className="font-medium text-foreground">实践：</strong>{stage.practice}</p>
                  </div>
                </div>

                <div className={`mt-8 pt-6 border-t transition-colors duration-500 ${stage.active ? 'border-foreground/10 text-foreground' : 'border-border text-muted group-hover:text-foreground/80'} text-sm font-medium`}>
                  {stage.status}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
