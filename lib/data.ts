export const projects = [
  {
    id: '01',
    title: 'AI 知识库问答平台（RAG + Agent 工作台）',
    description: '面向企业知识管理场景，搭建 AI 知识库问答平台，支持文档上传解析、文本清洗、切片、向量索引构建、语义检索、引用溯源、会话持久化与前后端一体化展示。',
    contributions: [
      '架构设计：基于 Python FastAPI + SQLAlchemy + PostgreSQL 设计核心模块，完成知识库与会话上下文绑定。',
      'RAG 链路：实现文档上传 → 解析 → 清洗 → 切片 → Embedding → pgvector 检索 → LLM 回答的完整链路。',
      '幻觉控制与溯源：设计 citations 返回结构附带摘要片段；引入 top1 相似度阈值兜底策略，检索不足时拒答。',
      '全栈开发：基于 Next.js + TypeScript 设计产品级前端原型，覆盖工作台、知识库、文档管理与 Debug 面板。'
    ],
    tech: ['LLM', 'RAG', 'Agent', 'AI 集成'],
    images: [
      'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/PixPin_2026-03-30_00-46-58.png',
      'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/PixPin_2026-03-30_01-02-13.png',
      'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/PixPin_2026-03-30_01-02-51.png'
    ],
    architectureImages: [
      {
        src: 'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/PixPin_2026-03-29_23-23-24.png',
        title: '主链路架构图',
        description: ''
      },
      {
        src: 'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/PixPin_2026-03-30_00-40-14.png',
        title: 'RAG 检索增强生成链路',
        description: '详细描述了从文档解析、向量化存储到 LLM 问答的完整数据流。'
      },
      {
        src: 'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/PixPin_2026-03-30_00-54-11.png',
        title: '共享状态 / 数据流图',
        description: 'state 里放的是“会影响后续决策和可观测性”的信息，比如用户问题、改写问题、召回 chunk、相关度判断结果、最终答案、引用结构、会话 id'
      },
      {
        src: 'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/PixPin_2026-03-30_01-04-31.png',
        title: '提示词设计',
        description: ''
      },
      {
        src: 'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/PixPin_2026-03-30_00-59-09.png',
        title: 'AI 代码规范与验收闭环图',
        description: ''
      },
      {
        src: 'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/PixPin_2026-03-30_01-09-41.png',
        title: '多 Agent 演进图',
        description: ''
      }
    ],
    githubUrl: 'https://github.com/wloops',
    demoUrl: 'https://rag.restflux.online'
  },
  {
    id: '02',
    title: 'HOBY全流程供应链数据服务平台',
    description: '面向政企的大型 B2B 供应链服务平台，涵盖多级仓储、BOM 管理、商品矩阵及全链路订单资金流转。',
    contributions: [
      '低代码双引擎：从 0 到 1 设计 React 配置端 + Vue 3 渲染端体系，标准 CRUD 页面交付周期从 2 天缩短至 0.5 天。',
      '核心引擎开发：实现表单/表格/动作引擎，100% Schema 驱动，中后台硬编码量降低约 80%。',
      'AI 能力集成：设计前端 Web Worker 预解析与 Node.js BFF 流式处理的大文件导入方案，结合 DeepSeek API 实现字段智能匹配与纠错。',
      '全栈闭环：独立承担 Java 后端动态 Schema 组装接口开发，完成 Docker + Nginx 容器化线上部署。'
    ],
    tech: ['React', 'Vue 3', 'Node.js', 'DeepSeek API', 'JSON Schema'],
    images: [],
    architectureImages: [
      {
        src: 'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/PixPin_2026-03-30_00-09-43.png',
        title: '低代码引擎架构设计',
        description: '详细描述了低代码引擎的整体架构设计，包括前端配置端与渲染端的交互，以及核心引擎的实现。'
      },
      {
        src: 'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/PixPin_2026-03-30_00-10-44.png',
        title: '低代码核心运行流程（简易）',
        description: '展示了核心引擎的运行流程，从 JSON Schema 配置输入到最终页面渲染的过程。'
      },
      {
        src: 'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/PixPin_2026-03-30_00-12-28.png',
        title: '动态禁用规则引擎解析流程图（难点之一）',
        description: '针对复杂的动态禁用规则引擎，设计了基于树形结构的规则解析流程，支持多层嵌套与逻辑组合，确保在复杂业务场景下的正确性与性能。'
      },
      {
        src: 'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/20260330001439275.png',
        title: '动态禁用规则引擎运行时递归评估流程图',
        description: ''
      }
    ]
  },
  {
    id: '03',
    title: '密码安全态势感知平台（数据可视化大屏）',
    description: '面向政企安全运营的监控中枢，具备海量高频威胁数据实时展示等高可用要求，提升企业对密码安全的整体认知和防护能力。',
    contributions: [
      '低代码大屏引擎：设计拖拽编排 + JSON Schema 驱动的可视化配置引擎，单张大屏交付周期从 2 周缩短至 3 天。',
      '性能与内存治理：基于 WebSocket 长连接与 ECharts 增量渲染，解决 DOM 节点膨胀与卡顿；首屏加载优化至 1.5s 内，交互延迟控制在 100ms 内。',
      '自适应架构：引入动态缩放算法，代码零侵入实现 4K/8K 及异形拼接大屏的像素级精准还原。'
    ],
    tech: ['WebSocket', 'ECharts', 'JSON Schema', '性能调优'],
    images: [
      'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/3cd3855875cf68262351dd4100b3da0a.jpg',
      'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/24c7df905c15623b755458a934e5f0c8.jpg',
      'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/3f22e1eb6876e1a4b81b09904a310b11.jpg',
      'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/f61426fdfbdc099c2656785c6bb9d2e8.jpg'
    ],
    architectureImages: [
      {
        src: 'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/0d30d8cd779b704101c263b96a1b25dd.jpg',
        title: '平台监控数据总结',
        description: ''
      }
    ]
  },
  {
    id: '04',
    title: '密码服务平台',
    description: '面向行内业务系统提供统一密码能力与安全接入的核心系统。',
    contributions: [
      '架构演进：主导核心系统从 JSP / FreeMarker 向 Vue 2 / Vue 3 的平滑迁移，完成前端工程化体系建设与历史技术债治理。',
      '全栈安全：参与全栈安全能力建设，落地国密算法（SM2/SM4）前端接入。',
      '效能提升：基于 Python 开发自动化验证工具，大幅提升前后端联调效率。'
    ],
    tech: ['Vue 2', 'Webpack', '国密算法', 'GitLab CI/CD'],
    images: [],
    architectureImages: []
  }
];
