'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Brain, Terminal, FileBox, CheckCircle2, XCircle, Copy, Check } from 'lucide-react';

const roles = [
  {
    id: 'advisor',
    title: 'Advisor（顾问）',
    icon: Brain,
    description: '用能力最强的模型做规划、审查和关键决策。只负责「想清楚」，不改代码（除非必要）。',
    color: 'amber'
  },
  {
    id: 'relay-kit',
    title: 'relay-kit',
    icon: FileBox,
    description: '自动生成结构化交接文件、收集受控上下文、追踪任务进度。把流程固化为文件而非散落在聊天记录里。',
    color: 'purple'
  },
  {
    id: 'executor',
    title: 'Executor（执行者）',
    icon: Terminal,
    description: '用小模型小步执行具体实现。边界明确——卡住了就停，不乱猜、不越界。',
    color: 'green'
  }
];

const comparisons = [
  {
    step: '开始',
    bare: '聊天框输入需求，AI 直接写代码',
    relay: 'Advisor 先输出目标、范围、非目标、风险'
  },
  {
    step: '执行',
    bare: 'AI 一路写下去，跑偏了靠人工纠正',
    relay: 'Executor 拿到的是一份边界明确的任务清单'
  },
  {
    step: '卡住',
    bare: 'AI 开始猜测替代方案，用户反复追问',
    relay: '自动生成求助包（含 diff + 日志），交给 Advisor 决策'
  },
  {
    step: '完成',
    bare: '复制粘贴到项目，靠肉眼 diff 检查',
    relay: 'REVIEW_REQUEST → Advisor 审查 → 通过 / 修改 / 重做'
  }
];

export default function AIWorkflow() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('npm install -g relay-kit');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-workflow" className="py-32 px-6 md:px-12 relative border-t border-border bg-background">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center"
        >
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-6">
            Workflow Architecture
          </h2>
          <p className="text-3xl md:text-5xl font-display leading-tight text-balance max-w-4xl mx-auto mb-8">
            AI 工作流
          </p>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            我用 Advisor → Executor 协作模式写代码——不是把需求扔进聊天框等结果，而是像软件团队一样拆分角色、交接任务、审查质量。
            <span className="inline-block md:ml-2 text-sm mt-3 md:mt-0 text-muted-foreground/80">
              灵感来源：Anthropic <a href="https://claude.com/blog/the-advisor-strategy" target="_blank" rel="noreferrer" className="underline decoration-border hover:decoration-foreground hover:text-foreground transition-colors underline-offset-4">The Advisor Strategy</a>
            </span>
          </p>
        </motion.div>

        {/* Roles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-32">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 rounded-3xl border border-border/40 bg-background/40 backdrop-blur-sm hover:bg-foreground/[0.02] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-background border border-border shadow-sm flex items-center justify-center mb-6 text-foreground group-hover:scale-110 transition-transform duration-300 ease-out">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display mb-4">{role.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {role.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 overflow-hidden rounded-3xl border border-border bg-[#F8FAFC] relative shadow-sm"
        >
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-60 pointer-events-none" />
          <div className="overflow-x-auto w-full py-12 px-6 flex justify-center custom-scrollbar relative z-10">
            <div className="relative min-w-[1200px] h-[760px] diagram-wrapper" style={{ zoom: 0.85 }}>
              {/* SVG Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-[5]">
                <defs>
                  <marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748B" />
                  </marker>
                  <marker id="arr-amber" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#F59E0B" />
                  </marker>
                  <marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#EF4444" />
                  </marker>
                  <marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#3B82F6" />
                  </marker>
                </defs>

                <path d="M 200 400 L 230 400 Q 250 400 250 380 L 250 148 Q 250 128 270 128 L 297 128" fill="none" stroke="#64748B" strokeWidth="2" markerEnd="url(#arr-gray)" />
                <path d="M 370 156 L 370 277" fill="none" stroke="#64748B" strokeWidth="2" markerEnd="url(#arr-gray)" />
                <path d="M 370 336 L 370 437" fill="none" stroke="#64748B" strokeWidth="2" markerEnd="url(#arr-gray)" />
                <path d="M 370 496 L 370 648 Q 370 668 390 668 L 547 668" fill="none" stroke="#64748B" strokeWidth="2" markerEnd="url(#arr-gray)" />
                <path d="M 690 668 L 850 668 Q 870 668 870 648 L 870 499" fill="none" stroke="#64748B" strokeWidth="2" markerEnd="url(#arr-gray)" />
                <path d="M 870 440 L 870 159" fill="none" stroke="#64748B" strokeWidth="2" markerEnd="url(#arr-gray)" />
                
                <path d="M 870 100 L 870 40 Q 870 20 850 20 L 150 20 Q 130 20 130 40 L 130 369" fill="none" stroke="#F59E0B" strokeWidth="2" markerEnd="url(#arr-amber)" />
                <path d="M 940 128 L 1017 128" fill="none" stroke="#F59E0B" strokeWidth="2" markerEnd="url(#arr-amber)" />
                <path d="M 1090 156 L 1090 200 Q 1090 220 1070 220 L 890 220 Q 870 220 870 200 L 870 159" fill="none" stroke="#F59E0B" strokeWidth="2" markerEnd="url(#arr-amber)" />

                <path d="M 800 128 L 765 128 Q 745 128 745 148 L 745 600 Q 745 620 725 620 L 620 620 Q 600 620 600 637" fill="none" stroke="#EF4444" strokeWidth="2" strokeDasharray="6,4" markerEnd="url(#arr-red)" />
                
                <path d="M 640 640 L 640 499" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="6,4" markerEnd="url(#arr-blue)" />
                <path d="M 550 468 L 510 468 Q 490 468 490 448 L 490 435 Q 490 415 470 415 L 203 415" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="6,4" markerEnd="url(#arr-blue)" />
                <path d="M 130 428 L 130 665 Q 130 685 150 685 L 547 685" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="6,4" markerEnd="url(#arr-blue)" />
              </svg>

              {/* Clusters */}
              <div className="absolute z-[1] border-[1.5px] rounded-2xl bg-[#FFF9F2] border-[#FDBA74]" style={{ left: 270, top: 50, width: 910, height: 140 }}>
                <div className="absolute top-4 left-5 text-sm font-semibold tracking-wide flex items-center gap-1.5 text-[#D97706]">🧠 Advisor (顾问)</div>
              </div>
              <div className="absolute z-[1] border-[1.5px] rounded-2xl bg-[#FCF7FF] border-[#D8B4FE]" style={{ left: 270, top: 230, width: 910, height: 296 }}>
                <div className="absolute top-4 left-5 text-sm font-semibold tracking-wide flex items-center gap-1.5 text-[#7E22CE]">📋 relay-kit 交接 · 追踪 · 规范</div>
              </div>
              <div className="absolute z-[1] border-[1.5px] rounded-2xl bg-[#F4FCF6] border-[#86EFAC]" style={{ left: 270, top: 566, width: 910, height: 154 }}>
                <div className="absolute top-4 left-5 text-sm font-semibold tracking-wide flex items-center gap-1.5 text-[#15803D]">⚡ Executor (执行者)</div>
              </div>

              {/* Nodes */}
              <div className="absolute z-10 w-[140px] h-[56px] rounded-xl flex items-center justify-center text-center text-sm leading-tight shadow-sm border-[2.5px] bg-[#EAF4FF] border-[#1D4ED8] text-[#0F172A] font-semibold" style={{ left: 60, top: 372 }}>👤 人类决策者</div>

              <div className="absolute z-10 w-[140px] h-[56px] rounded-xl flex flex-col items-center justify-center text-center text-sm leading-tight shadow-sm border-2 bg-[#FFF4E5] border-[#F59E0B] text-[#7C2D12] font-medium" style={{ left: 300, top: 100 }}>
                <span>/relay:plan</span><span>规划任务</span>
              </div>
              <div className="absolute z-10 w-[140px] h-[56px] rounded-xl flex flex-col items-center justify-center text-center text-sm leading-tight shadow-sm border-2 bg-[#FFF4E5] border-[#F59E0B] text-[#7C2D12] font-medium" style={{ left: 800, top: 100 }}>
                <span>/relay:review</span><span>审查代码</span>
              </div>
              <div className="absolute z-10 w-[140px] h-[56px] rounded-xl flex flex-col items-center justify-center text-center text-sm leading-tight shadow-sm border-2 bg-[#FFF4E5] border-[#F59E0B] text-[#7C2D12] font-medium" style={{ left: 1020, top: 100 }}>
                <span>/relay:fix</span><span>直接修复</span>
              </div>

              <div className="absolute z-10 w-[140px] h-[56px] rounded-xl flex flex-col items-center justify-center text-center text-sm leading-tight shadow-sm border-2 bg-[#F6ECFF] border-[#9333EA] text-[#581C87] font-medium" style={{ left: 300, top: 280 }}>
                <span>relay openspec</span><span>管理 change</span>
              </div>
              <div className="absolute z-10 w-[140px] h-[56px] rounded-xl flex flex-col items-center justify-center text-center text-sm leading-tight shadow-sm border-2 bg-[#F6ECFF] border-[#9333EA] text-[#581C87] font-medium" style={{ left: 300, top: 440 }}>
                <span>relay start</span><span>EXECUTOR_TASK</span>
              </div>
              <div className="absolute z-10 w-[140px] h-[56px] rounded-xl flex flex-col items-center justify-center text-center text-sm leading-tight shadow-sm border-2 bg-[#F6ECFF] border-[#9333EA] text-[#581C87] font-medium" style={{ left: 550, top: 440 }}>
                <span>relay ask</span><span>ASK_ADVISOR</span>
              </div>
              <div className="absolute z-10 w-[140px] h-[56px] rounded-xl flex flex-col items-center justify-center text-center text-sm leading-tight shadow-sm border-2 bg-[#F6ECFF] border-[#9333EA] text-[#581C87] font-medium" style={{ left: 800, top: 440 }}>
                <span>relay review</span><span>REVIEW_REQUEST</span>
              </div>

              <div className="absolute z-10 w-[140px] h-[56px] rounded-xl flex flex-col items-center justify-center text-center text-sm leading-tight shadow-sm border-2 bg-[#EAFBF1] border-[#16A34A] text-[#14532D] font-medium" style={{ left: 550, top: 640 }}>
                <span>/relay:run</span><span>小步执行</span>
              </div>

              {/* Labels */}
              <div className="absolute z-20 bg-white/95 backdrop-blur-[4px] px-2.5 py-1 rounded-xl text-[13px] font-medium border border-[#E2E8F0] text-[#475569] shadow-sm transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap" style={{ left: 260, top: 264 }}>需求</div>
              <div className="absolute z-20 bg-white/95 backdrop-blur-[4px] px-2.5 py-1 rounded-xl text-[13px] font-medium border border-[#E2E8F0] text-[#475569] shadow-sm transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap" style={{ left: 370, top: 218 }}>产出 spec</div>
              <div className="absolute z-20 bg-white/95 backdrop-blur-[4px] px-2.5 py-1 rounded-xl text-[13px] font-medium border border-[#E2E8F0] text-[#475569] shadow-sm transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap" style={{ left: 370, top: 388 }}>生成任务</div>
              <div className="absolute z-20 bg-white/95 backdrop-blur-[4px] px-2.5 py-1 rounded-xl text-[13px] font-medium border border-[#E2E8F0] text-[#475569] shadow-sm transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap" style={{ left: 470, top: 668 }}>委派执行</div>
              <div className="absolute z-20 bg-white/95 backdrop-blur-[4px] px-2.5 py-1 rounded-xl text-[13px] font-medium border border-[#E2E8F0] text-[#475569] shadow-sm transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap" style={{ left: 780, top: 668 }}>完成</div>
              <div className="absolute z-20 bg-white/95 backdrop-blur-[4px] px-2.5 py-1 rounded-xl text-[13px] font-medium border border-[#E2E8F0] text-[#475569] shadow-sm transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap" style={{ left: 870, top: 340 }}>发起审查</div>

              <div className="absolute z-20 bg-white/95 backdrop-blur-[4px] px-2.5 py-1 rounded-xl text-[13px] font-medium border border-[#FDE68A] text-[#B45309] shadow-sm transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap" style={{ left: 500, top: 20 }}>通过</div>
              <div className="absolute z-20 bg-white/95 backdrop-blur-[4px] px-2.5 py-1 rounded-xl text-[13px] font-medium border border-[#FDE68A] text-[#B45309] shadow-sm transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap" style={{ left: 980, top: 128 }}>小改</div>
              <div className="absolute z-20 bg-white/95 backdrop-blur-[4px] px-2.5 py-1 rounded-xl text-[13px] font-medium border border-[#FDE68A] text-[#B45309] shadow-sm transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap" style={{ left: 980, top: 220 }}>回提审</div>

              <div className="absolute z-20 bg-white/95 backdrop-blur-[4px] px-2.5 py-1 rounded-xl text-[13px] font-medium border border-[#FECACA] text-[#B91C1C] shadow-sm transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap" style={{ left: 745, top: 384 }}>需修改</div>

              <div className="absolute z-20 bg-white/95 backdrop-blur-[4px] px-2.5 py-1 rounded-xl text-[13px] font-medium border border-[#BFDBFE] text-[#1D4ED8] shadow-sm transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap" style={{ left: 640, top: 568 }}>卡住</div>
              <div className="absolute z-20 bg-white/95 backdrop-blur-[4px] px-2.5 py-1 rounded-xl text-[13px] font-medium border border-[#BFDBFE] text-[#1D4ED8] shadow-sm transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap" style={{ left: 440, top: 415 }}>求助</div>
              <div className="absolute z-20 bg-white/95 backdrop-blur-[4px] px-2.5 py-1 rounded-xl text-[13px] font-medium border border-[#BFDBFE] text-[#1D4ED8] shadow-sm transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap" style={{ left: 200, top: 685 }}>指示</div>
            </div>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="mb-24"
        >
          <div className="flex flex-col gap-4 max-w-5xl mx-auto">
            <div className="hidden md:grid grid-cols-[100px_1fr_1fr] gap-8 px-8 py-3 border-b border-border/40 text-xs font-mono text-muted uppercase tracking-wider">
              <div>环节</div>
              <div>裸用 AI</div>
              <div className="text-foreground font-medium">接力工作流</div>
            </div>
            
            {comparisons.map((row, i) => (
              <div key={i} className="group grid grid-cols-1 md:grid-cols-[100px_1fr_1fr] gap-6 md:gap-8 p-6 md:px-8 md:py-6 rounded-2xl border border-border/50 bg-background/50 hover:bg-foreground/[0.02] shadow-sm hover:shadow-md transition-all duration-300 items-center">
                <div className="font-mono flex text-sm text-muted">
                  <span className="md:hidden mr-3 uppercase text-xs mt-0.5">环节</span>
                  {row.step}
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="font-mono text-xs text-muted uppercase md:hidden w-16 shrink-0 mt-1">裸用</div>
                  <XCircle className="w-5 h-5 text-red-500/50 shrink-0 mt-0.5 hidden sm:block" strokeWidth={1.5} />
                  <span className="text-sm leading-relaxed text-muted line-through decoration-red-500/30 decoration-1">{row.bare}</span>
                </div>
                
                <div className="flex items-start gap-3 relative">
                  <div className="font-mono text-xs text-foreground uppercase md:hidden w-16 shrink-0 mt-1 flex items-center">
                    接力
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500/70 shrink-0 mt-0.5 hidden sm:block" strokeWidth={1.5} />
                  <span className="text-sm leading-relaxed text-foreground font-medium">{row.relay}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="text-center"
        >
          <div className="inline-flex flex-col md:flex-row items-center md:items-stretch text-left rounded-3xl bg-background border border-border shadow-sm overflow-hidden w-full max-w-4xl mx-auto">
            <div className="p-8 md:p-10 flex-1 flex flex-col justify-center border-b md:border-b-0 md:border-r border-border bg-foreground/[0.01]">
              <div className="flex items-center gap-3 mb-4">
                <FileBox className="w-6 h-6 text-foreground" />
                <h4 className="text-xl font-display">relay-kit</h4>
              </div>
              <p className="text-sm text-muted mb-6 leading-relaxed max-w-md">
                为了把这个 Advisor → Executor 协作模式从「概念」变成「每次都能复用的」，我写了一个开源 CLI 工具。内置 OpenSpec 规范引擎，自动脱敏安全上下文，零外部依赖。
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <a 
                  href="https://github.com/wloops/relay-kit" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-foreground text-background rounded-xl text-sm font-medium hover:scale-105 transition-transform"
                >
                  View on GitHub
                </a>
              </div>
            </div>
            <div className="p-8 md:p-10 flex-1 bg-[#0A0A0A] text-gray-300 flex flex-col justify-center w-full">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/20 shadow-[inset_0_0_0_1px_rgba(239,68,68,0.2)]"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 shadow-[inset_0_0_0_1px_rgba(234,179,8,0.2)]"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 shadow-[inset_0_0_0_1px_rgba(34,197,94,0.2)]"></div>
              </div>
              <div className="font-mono text-sm space-y-3">
                <div className="flex items-start group/cmd relative pr-8">
                  <span className="text-green-400 mr-3">❯</span>
                  <span className="font-medium text-gray-100 select-all">npm install -g relay-kit</span>
                  <button 
                    onClick={handleCopy}
                    className="absolute right-0 top-0 text-gray-500 hover:text-gray-300 opacity-0 group-hover/cmd:opacity-100 transition-all cursor-pointer"
                    aria-label="Copy command"
                    title="Copy to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <div className="text-gray-500">✔ installed relay-kit@0.3.0</div>
                
                <div className="flex items-start">
                  <span className="text-green-400 mr-3">❯</span>
                  <span className="font-medium text-gray-100">relay init</span>
                </div>
                <div className="text-gray-500">✔ OpenSpec mode</div>
                <div className="text-gray-500">✔ Skills → .claude  .agents</div>
                
                <div className="flex items-start">
                  <span className="text-green-400 mr-3">❯</span>
                  <span className="font-medium text-gray-100 whitespace-nowrap">relay openspec new-change add-login</span>
                </div>
                <div className="text-gray-500">✔ Created openspec/changes/add-login</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
