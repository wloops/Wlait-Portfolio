'use client';

import { motion } from 'motion/react';

const experiences = [
  {
    role: '全栈工程师（前端负责人）',
    company: '湖南货比网络科技有限公司',
    period: '2025.03 - 2026.02',
    description: '主导 Monorepo 与低代码体系落地，完成 React 配置端 + Vue3 渲染端双引擎设计。独立承担 Java/Spring Boot 后端开发，并通过 Node.js BFF 打通 AI 能力链路，落地智能匹配、OCR 纠错等场景。负责全链路部署建设。',
  },
  {
    role: '研发工程师',
    company: '北京江南天安科技有限公司（广州分公司）',
    period: '2021.07 - 2025.02',
    description: '主导核心系统从 JSP 向 Vue3 的平滑迁移，完成前端工程化体系建设。负责高频数据可视化场景的性能优化，解决 DOM 节点暴涨与内存泄漏问题。参与全栈安全能力建设。',
  },
  {
    role: '前端开发工程师',
    company: '广州点乐信息科技有限公司',
    period: '2019.09 - 2021.06',
    description: '负责管理后台、H5 与微信小程序前端开发，沉淀高复用业务组件，提升双端协作效率。负责移动端性能优化与弱网兜底处理，提升交易链路稳定性与页面首屏体验。',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-2xl font-bold mb-8">Experience</h2>
        
        <div className="flex flex-col gap-8">
          {experiences.map((exp) => (
            <div key={exp.company} className="flex flex-col sm:flex-row gap-2 sm:gap-8">
              <div className="sm:w-32 shrink-0 text-sm text-muted-foreground pt-1">
                {exp.period}
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{exp.role}</h3>
                <div className="text-sm text-muted-foreground mb-2">{exp.company}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
