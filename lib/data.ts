export const projects = [
  {
    id: '01',
    title: 'AI 知识库问答平台',
    description: '面向企业知识管理场景，搭建支持文档上传解析、文本清洗、切片、向量索引构建、语义检索、引用溯源的完整 RAG 链路。',
    tags: ['FastAPI', 'Next.js', 'PostgreSQL', 'pgvector', 'RAG'],
    role: '全栈架构与开发',
    year: '2025',
    overview: '该项目旨在解决企业内部海量非结构化文档的检索与问答难题。通过构建基于大语言模型（LLM）和检索增强生成（RAG）技术的知识库问答平台，员工可以通过自然语言提问，系统自动从企业知识库中检索相关片段，并生成带有引用溯源的准确回答。',
    challenges: [
      '复杂文档解析：PDF、Word 等格式中包含大量表格、图片和复杂排版，传统解析工具容易丢失上下文。',
      '检索准确率：单纯的向量检索在特定专业术语和长尾问题上表现不佳。',
      '流式响应体验：LLM 生成速度较慢，需要通过 SSE 实现打字机效果，同时保证引用溯源数据的同步返回。'
    ],
    solutions: [
      '采用基于视觉的文档解析方案（如 Unstructured / 结合多模态模型），提取结构化文本并保留层级关系。',
      '引入混合检索（Hybrid Search）：结合 BM25 关键词检索与 pgvector 向量检索，并通过 Reranker 模型进行重排，大幅提升 Top-K 召回质量。',
      '基于 FastAPI 实现全链路异步流式接口（SSE），前端使用 Vercel AI SDK 消费流数据，实现丝滑的对话体验。'
    ],
    image: 'https://picsum.photos/seed/ai-rag/1920/1080?blur=4',
    demoUrl: 'https://example.com/demo',
    githubUrl: 'https://github.com/wlait/ai-rag-platform',
    architectureImage: 'https://picsum.photos/seed/architecture/1920/1080?blur=2'
  },
  {
    id: '02',
    title: 'HOBY 全流程供应链平台',
    description: '面向政府及企业的大型 B2B 供应链服务平台。从 0 到 1 设计 React 配置端 + Vue 3 渲染端的双引擎低代码体系，大幅提升交付效率。',
    tags: ['React', 'Vue3', 'Node.js BFF', 'Java', '低代码'],
    role: '前端负责人 / 全栈开发',
    year: '2024',
    overview: 'HOBY 供应链平台是一个复杂的 B2B 业务系统，涉及采购、仓储、物流、结算等多个环节。由于不同客户的业务流程和表单字段差异巨大，传统的定制化开发模式难以为继。因此，我们决定引入低代码架构，以配置化驱动业务交付。',
    challenges: [
      '跨技术栈渲染：历史系统基于 Vue3，而新的配置端更适合用 React 生态（如 Formily）构建，如何实现跨端渲染？',
      '复杂表单联动：供应链表单字段多达上百个，且存在复杂的联动校验逻辑。',
      '微服务接口聚合：后端微服务拆分过细，前端直接调用会导致网络请求爆炸和逻辑碎片化。'
    ],
    solutions: [
      '设计了统一的 JSON Schema 协议，React 负责生成 Schema，Vue3 侧开发了一套基于 Schema 的动态渲染引擎，实现双端解耦。',
      '引入 Node.js BFF（Backend for Frontend）层，使用 GraphQL/REST 聚合底层微服务接口，为前端提供裁剪后的聚合数据，大幅降低前端复杂度。',
      '在低代码引擎中内置表达式沙箱，支持业务人员通过简单的 JavaScript 表达式配置表单联动逻辑。'
    ],
    image: 'https://picsum.photos/seed/supply-chain/1920/1080?blur=4',
    architectureImage: 'https://picsum.photos/seed/arch2/1920/1080?blur=2'
  },
  {
    id: '03',
    title: '密码安全态势感知大屏',
    description: '面向政企安全运营的监控中枢。设计拖拽编排 + JSON Schema 驱动的可视化页面配置引擎，并解决海量实时数据场景下的性能瓶颈。',
    tags: ['Vue3', 'ECharts', 'WebSocket', '大屏优化'],
    role: '前端架构师',
    year: '2022',
    overview: '态势感知大屏是网络安全产品的“门面”，需要在一个屏幕上实时展示海量的告警、流量、资产等安全数据。客户对大屏的视觉效果、实时性和定制化能力要求极高。',
    challenges: [
      '性能瓶颈：WebSocket 每秒推送上百条告警数据，ECharts 频繁重绘导致页面卡顿、内存泄漏。',
      '定制化成本高：不同客户对大屏的布局、图表类型要求不同，每次交付都需要前端修改代码。',
      '大屏适配：需要在各种奇葩分辨率的拼接屏上完美显示，不能出现拉伸或留白。'
    ],
    solutions: [
      '性能优化：引入 RequestAnimationFrame 控制渲染帧率，使用 Web Worker 处理数据聚合逻辑，对 ECharts 实例进行池化管理，彻底解决内存泄漏。',
      '可视化编排：开发了一套大屏可视化编辑器，支持组件拖拽、缩放、数据源绑定，最终导出 JSON 配置，实现大屏的“零代码”交付。',
      '自适应方案：放弃传统的 rem/vw 方案，采用基于 Transform Scale 的等比例缩放方案，保证在任何分辨率下都能完美还原设计稿。'
    ],
    image: 'https://picsum.photos/seed/cyber-security/1920/1080?blur=4'
  }
];
