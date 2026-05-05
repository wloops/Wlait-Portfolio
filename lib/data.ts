export const projects = [
  {
    id: '01',
    title: '企业级 AI 知识库问答平台（RAG）',
    type: 'Enterprise Project',
    description: '面向企业知识管理场景，搭建基于 LangGraph 编排的 Hybrid / Workflow RAG 知识库平台，支持文档异步入库、多路检索、流式问答、引用溯源与调试分析。',
    contributions: [
      'RAG 工作流（Workflow RAG）：基于 LangGraph 重构问答链路，将问题改写、多路召回、重排、相关性判断、答案生成与引用构建拆分为独立节点，提升系统健壮性与可观测性。',
      '混合检索与重排（Hybrid Search）：构建 Dense (pgvector) + Sparse (BM25) 双路召回，引入 Rerank 模型语义重排，解决垂直领域专有名词召回率低、单路检索不稳定的问题。',
      '阈值控制与溯源：设计相关性阈值兜底与拒答策略，并实现细粒度 Citations（溯源至文档 Chunk 与摘要），提升答案可信度与可解释性。',
      '前后端架构：基于 Python (FastAPI) + SQLAlchemy 开发后端核心业务，基于 React (Next.js) + TypeScript 搭建智能问答工作台、知识库管理页面与调试面板。'
    ],
    tech: [
      'LangGraph',
      'LLM',
      'RAG',
      'Hybrid Search',
      'FastAPI',
      'Next.js',
      'PostgreSQL',
      'pgvector',
      'Redis',
      'Celery'
    ],
    images: [
      'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/PixPin_2026-03-30_00-46-58.png',
      'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/PixPin_2026-03-30_01-02-13.png',
      'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/PixPin_2026-03-30_01-02-51.png'
    ],
    architectureImages: [
      {
        src: 'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/PixPin_2026-04-11_00-39-57.png',
        title: 'RAG 整体架构图',
        description: '展示系统整体分层与模块协作关系：前端由 Next.js 承载交互，FastAPI 作为统一接入层，对内拆分为 LangGraph 在线问答链路与 Redis + Celery 异步建库链路，底层统一连接 PostgreSQL、pgvector 与文件存储。'
      },
      {
        src: 'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/PixPin_2026-04-11_00-17-46.png',
        title: 'RAG 聊天问答链路图',
        description: '展示一次问答请求的完整流转：结合会话历史完成问题改写，执行 Dense + BM25 + RRF 的混合检索，再通过 Rerank 与相关性守卫筛选证据，最后生成答案、构建引用并输出调试信息。'
      },
      {
        src: 'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/PixPin_2026-04-11_00-21-12.png',
        title: 'RAG 异步建库图',
        description: '展示文档上传后的异步处理流程：接口负责保存记录与入队，Redis + Celery 驱动 Worker 完成文件保存、解析清洗、切片、Embedding、Chunk 入库与 BM25 索引构建，并支持失败记录与任务重试。'
      },
      {
        src: 'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/PixPin_2026-03-30_00-54-11.png',
        title: '共享状态 / 数据流图',
        description: 'state 里放的是“会影响后续决策和可观测性”的信息，比如用户问题、改写问题、召回 chunk、相关度判断结果、最终答案、引用结构、会话 id'
      },
      {
        src: 'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/PixPin_2026-03-30_01-04-31.png',
        title: '提示词设计',
        description: '展示问答链路中的提示词分层设计，包括问题改写、回答生成、拒答约束与引用输出规范，核心目标是降低幻觉、统一回答格式并增强面向知识库场景的可控性。'
      },
      {
        src: 'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/PixPin_2026-03-30_00-59-09.png',
        title: 'AI 代码规范与验收闭环图',
        description: '展示从需求拆解、代码生成、规范约束、结果校验到最终验收的闭环流程，用于说明项目中如何把 AI 辅助开发与工程质量控制结合起来，而不是只停留在生成代码层面。'
      },
      {
        src: 'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/PixPin_2026-03-30_01-09-41.png',
        title: '多 Agent 演进图',
        description: '展示系统从单链路问答向多 Agent 协作能力演进的思路，包括任务拆分、角色分工、状态共享与后续扩展方向，用于说明当前能力边界及未来可演进空间。'
      }
    ],
    githubUrl: 'https://github.com/wloops/ai-rag-agent-api',
    demoUrl: 'https://rag.wlait.com'
  },
  {
    id: '02',
    title: '文鉴 · AdmitKit',
    type: 'Personal Project',
    status: '🎓 留学文书 AI 辅写',
    description: '一款面向 PhD 与 Research Master 申请者的 SOP (Statement of Purpose) AI 辅助写作工具。定位为写作辅助而非代写，提供“结构化梳理 → 大纲 → 草稿 → 优化 → 诊断 → 去 AI 味”的完整工作流。',
    contributions: [
      '核心智能工作流：基于服务端接口，实现从 6 步专业问卷到结构化大纲，再到带有智能占位符的草稿生成的完整写作辅助链路。',
      '四维深度诊断与优化：实现逻辑、证据、完整性、人类化四维评分模型；支持“更学术”、“更具体”等指令微调，结合原始问卷数据补充量化细节。',
      '防套路“去 AI 味”引擎：自研 AI 惯用词（如 delve, crucial）与死板句式检测机制，提供直观的实时高亮与一键批量替换功能，帮助用户恢复真实人设。',
      '前后端分离架构：前端跨专业配置 5 类专业与 2 种学位模式，基于 React 18 + TS + Tailwind v4 构建交互式编辑器；后端基于 FastAPI 对接 DeepSeek API 实现复杂分析。'
    ],
    tech: ['React 18', 'TypeScript', 'FastAPI', 'DeepSeek API', 'Tailwind CSS v4', 'Vite', 'React Router'],
    demoUrl: 'https://admitkit.restflux.cn',
    images: [
      'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/20260421204834297.png',
      'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/20260421205003028.png',
      'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/20260421205038933.png',
      'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/20260421212523240.png',
      'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/20260421212619334.png',
      'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/20260421212740099.png',
      'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/20260421212924214.png',
      'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/20260421213736578.png'
    ],
    architectureImages: [
      {
        src: 'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/20260423152308475.png',
        title: '系统架构图',
        description: '这张图用于说明 AdmitKit 的整体系统边界和关键依赖关系。前端基于 React + Vite 构建，负责承载登录、文书创建、结果编辑与历史管理；后端使用 FastAPI 统一处理认证校验、文书生成、积分计费、支付联动和导出请求；底层通过 Supabase 管理用户、文书、版本、订单与积分数据，并接入 DeepSeek 提供生成、诊断与翻译能力。'
      },
      {
        src: 'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/20260423152528310.png',
        title: '核心流程图',
        description: '这张图展示的是用户从注册登录到最终导出文书的主工作流。用户先在控制台进入 SOP 或 PS 创建流程，填写结构化问卷并生成大纲，在确认大纲后生成草稿，再进入诊断、优化、翻译和导出阶段，最后回到文书管理页持续迭代。'
      },
      {
        src: 'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/20260423152623150.png',
        title: '支付流程',
        description: '这张附图用于补充展示 AdmitKit 的积分购买链路。用户从定价页或购买弹窗发起订单，请求在后端创建后会进入微信支付或支付宝网关；支付完成后，一方面前端可以轮询订单状态，另一方面支付平台也会通过异步回调通知后端，最终由系统完成积分发放并刷新控制台余额。'
      }
    ]
  },
  {
    id: '03',
    title: 'Astra AI · 多 Agent 协同编排与任务执行平台',
    type: 'Personal Project',
    status: '🚀 V2.0 架构升级',
    description: 'Astra AI 是一个基于主控 Agent 的多 Agent 协同编排平台。系统通过场景模板、阶段流程、角色技能库与外部工具接入，将复杂任务拆解为可调度、可追踪、可扩展的多 Agent 工作流。当前版本以“智能研讨”作为首个落地场景：由 AI 主持人读取项目上下文，动态调度产品、架构、测试等专家角色，完成议题澄清、独立评审、争议识别、结论收敛与结构化交付。后续同一套编排框架可扩展到市场调研、竞品分析、方案生成、代码审查、项目复盘等复杂任务执行场景。',
    contributions: [
      '主控 Agent 与场景化调度：设计主控 Agent 作为任务入口与流程调度核心，负责理解用户目标、识别场景、加载配置，并根据不同任务类型动态组织多 Agent 协作流程。当前已落地智能研讨场景，后续可扩展为市场调研、竞品分析、报告生成等任务流。',
      '分阶段工作流编排：基于 LangGraph 构建阶段化执行流程，将复杂任务拆分为多个可追踪节点。在智能研讨场景中，流程包括议题澄清、独立评审、争议识别、交叉辩论、结论确认与交付物生成；在其他场景中，也可以替换为并行调研、资料汇总、结果校验等流程。',
      '可插拔角色与 Skill 配置：将专家角色、职责边界、提示词、评价标准和可调用工具抽象为独立 Skill 配置。系统可以按场景动态拉起不同角色，例如产品经理、架构师、测试工程师，也可以扩展为市场分析师、竞品研究员、法务、财务等领域 Agent。',
      '工具与知识接入能力：支持接入外部工具与知识库（如通过 MCP 协议），允许 Agent 动态调用 API、读取私域文档或检索企业数据库，打破模型的信息孤岛，让工作流基于真实有效的业务数据执行。',
      '结构化交付物生成：系统不仅输出对话过程，还会根据场景生成结构化结果。在智能研讨场景中输出会议纪要、关键争议、最终结论和行动项；在市场调研场景中可输出调研报告、竞品矩阵、机会洞察和执行建议。'
    ],
    tech: ['LANGGRAPH', 'MULTI-AGENT', 'ORCHESTRATION', 'MCP', 'FASTAPI', 'REACT', 'LLM GATEWAY'],
    demoUrl: 'https://astra.wlait.com',
    images: [
      'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/20260506001955296.png',
      'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/20260506002051702.png',
      'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/20260506002143359.png',
      'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/20260506002210696.png',
      'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/20260506002259249.png'
    ],
    architectureImages: [
      {
        src: 'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/20260506003913601.png',
        title: 'Astra AI 整体系统架构',
        description: '展示 Astra AI 从业务入口、主控 Agent 编排、执行模式、角色 Skill、模型与工具接入，到结构化交付物沉淀的整体架构。该架构以主控 Agent / Orchestrator 为核心，通过场景入口与配置中心加载任务上下文，并基于 LangGraph 驱动不同类型的多 Agent 协作流程。'
      },
      {
        src: 'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/20260506003938066.png',
        title: '智能研讨场景核心流程',
        description: '展示当前 MVP 中“智能研讨”场景的阶段化执行过程：用户选择项目与场景，输入议题与约束后，主控 Agent 规划研讨流程，并调度多角色专家独立评审、识别争议、展开交叉辩论，最终收敛结论并生成结构化交付物。'
      },
      {
        src: 'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/20260506004004088.png',
        title: '多 Agent 并行任务执行扩展流程',
        description: '展示 Astra AI 如何从“智能研讨”扩展到市场调研等复杂任务场景。主控 Agent 会先拆解任务目标，再分配给市场分析师、竞品研究员、用户洞察 Agent、资料整合 Agent 等角色并行执行，随后进行结果汇总、交叉校验、洞察生成与结构化报告输出。'
      }
    ]
  },
  {
    id: '04',
    title: 'HOBY全流程供应链数据服务平台',
    type: 'Enterprise Project',
    description: '面向政府及企业客户的大型 B2B 供应链数据服务平台，覆盖买方采购、商品中心、卖方销售、仓储台账等核心业务场景。项目以 Vue3 低代码渲染引擎为核心，通过 JSON Schema 驱动表单、表格与动作逻辑，同时由 Java(Spring Boot) 提供动态 Schema 下发、复杂服务端校验与核心业务接口支撑，最终配合 Docker / Nginx 完成交付上线。',
    contributions: [
      'Vue3 低代码渲染引擎：从 0 到 1 搭建低代码渲染端，通过 JSON Schema 动态驱动表单与表格逻辑，将标准 CRUD 页面交付周期从 2 天缩减至 0.5 天。',
      '动作总线与复杂联动：实现表单条件联动、表格 100% Schema 驱动，通过动作总线配置 20+ 种交互动作，大幅降低业务侧硬编码量。',
      'Java 后端开发与全栈闭环：基于 Java (Spring Boot) 独立承担核心业务接口开发；实现动态 JSON Schema 的组装下发与复杂的服务端业务校验，并配合 Docker / Nginx 完成全栈交付与线上高可用部署。'
    ],
    tech: [
      'Vue 3',
      'TypeScript',
      'Vite',
      'JSON Schema',
      'Ant Design Vue',
      'vxe-table',
      'Java',
      'Spring Boot',
      'Docker',
      'Nginx'
    ],
    images: [],
    architectureImages: [
      {
        src: 'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/PixPin_2026-04-11_00-51-11.png',
        title: 'Hoby 平台全景图',
        description: ''
      },
      {
        src: 'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/PixPin_2026-04-11_00-53-16.png',
        title: 'Schema 渲染与动作总线闭环图',
        description: ''
      },
      {
        src: 'https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/PixPin_2026-04-13_11-58-19.png',
        title: '运行时控制体系（动作总线与动态规则引擎）',
        description: '展示了由动作总线与动态规则引擎构成的核心运行时控制体系。低代码的真正难点在于复杂交互的稳定运转：页面行为由 Schema 和动作协议驱动，动作总线需统一分发受联动、校验、状态影响的多种执行路径（如弹窗、跳转、提交）；动态规则引擎则在运行时实时评估多条件规则以控制字段与按钮的可用性。通过将规则计算、动作分发与状态回写收敛至统一运行时，实现了“动作执行 → 状态回写 → 规则重算”的稳定闭环。'
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
    id: '05',
    title: '密码安全态势感知平台（数据可视化大屏）',
    type: 'Enterprise Project',
    description: '面向政企安全运营的监控中枢，旨在通过监测密码使用情况和密码安全事件，具备海量高频威胁数据实时展示等高可用要求，提升企业对密码安全的整体认知和防护能力。',
    contributions: [
      '可视化大屏引擎：设计拖拽编排 + JSON Schema 驱动的大屏配置引擎，单页交付周期从 2 周缩短至 3 天。',
      '数据渲染与内存治理：通过 WebSocket、防抖队列及 ECharts 增量渲染，解决高频刷新下的 DOM 膨胀与卡顿，首屏加载（LCP）优化至 1.5s 内。',
      '超大屏自适应：结合 autofit.js 动态算法，零代码侵入实现 4K/8K 及异形拼接屏的精准还原。'
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
    id: '06',
    title: '密码服务平台',
    type: 'Enterprise Project',
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
