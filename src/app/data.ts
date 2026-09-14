/** 作品集主数据：工作、教育、技能、项目、博客精选 */
export const data = {
  work: [
    {
      company: "索菲亚家居集团",
      href: "https://www.sogal.com",
      badges: [] as string[],
      title: "大模型应用开发工程师",
      logoUrl: "/logos/sfy-logo.jpg",
      start: "2025.07",
      description:
        "深度参与集团总部 AI Agent 智能体业务落地与数智化底座建设。深入运营/研发/运维现场识别高价值场景，负责 Agent 从 PoC、MVP 到生产上线与持续迭代；对接飞书/企微开放平台与 OA/SRM/WMS/TMS/OPP 等业务系统；参与 IAM 统一身份认证中心研发与 ToA 接口治理，推动企业知识治理与智能化产品转型。",
    },
    {
      company: "上海宜云健康",
      href: "https://blog.tovin.xyz",
      badges: ["实习"],
      title: "AI 应用全栈开发",
      logoUrl: "/logos/yiyun-logo.jpg",
      start: "2025.04",
      end: "2025.07",
      description:
        "四周内独立完成两款医疗 AI 产品 MVP《回声助手》《职考宝典》从 0 到 1 上线，其中一款嵌入主营业务 APP 并完成商业化验证；基于 Dify / n8n 搭建到期提醒、公众号图文推送等自动化；标准化封装企业/三方工具，将 Agent 无缝接入企业微信。",
    },
    {
      company: "阿里云智能",
      href: "https://www.aliyun.com",
      badges: ["实习"],
      title: "Java 后端开发 · 政企专有云产研",
      logoUrl: "/logos/aliyun-logo.jpg",
      start: "2024.10",
      end: "2025.04",
      description:
        "参与 BizWorks 云原生 TPaaS 底座内核迭代：基于 KubeVela/OAM 完成应用元数据向 K8s 资源适配转换；负责应用版本、多环境管理与部署回滚逻辑；对接 CI/CD 支撑专有云应用全生命周期管理，熟悉云原生 PaaS 协作与稳定性边界场景。",
    },
    {
      company: "用友网络科技",
      href: "https://www.yonyou.com",
      badges: ["实习"],
      title: "Java 全栈开发 · 集成开发部",
      logoUrl: "/logos/yonyou-logo.jpg",
      start: "2024.03",
      end: "2024.07",
      description:
        "参与格盟国际财务共享、晋能控股装备制造业财一体化等 ToB 定制项目。基于用友 BIP / YonBuilder 完成单据页与标准产品后端扩展；独立负责单据审批、费用分摊等模块，落地 40+ 客户定制需求，交付准时率 100%。",
    },
  ],
  education: [
    {
      school: "晋中信息学院",
      href: "https://www.jzxy.edu.cn",
      degree: "软件工程 · 统招全日制本科",
      logoUrl: "/logos/edu-logo.jpg",
      start: "2021.09",
      end: "2025.07",
      description:
        "华北五省计算机应用大赛国一、全国高校计算机能力挑战赛 Java 全国决赛二等奖；3 项软件著作权；山西省大学生创新创业训练计划省级立项。飞书生态 AI Agent 高级认证、华为 HCIA-AI 及多项微认证、达摩院人工智能训练师（高级）。完整列表见「校园荣誉」弹窗。",
    },
  ],
  skills: [
    { src: "https://cdn.simpleicons.org/python", alt: "Python", href: "https://www.python.org" },
    { src: "https://cdn.simpleicons.org/fastapi", alt: "FastAPI", href: "https://fastapi.tiangolo.com" },
    { src: "https://cdn.simpleicons.org/langchain", alt: "LangChain", href: "https://www.langchain.com" },
    { src: "https://cdn.simpleicons.org/openjdk", alt: "Java", href: "https://www.java.com" },
    { src: "https://cdn.simpleicons.org/spring", alt: "Spring", href: "https://spring.io" },
    { src: "https://cdn.simpleicons.org/redis", alt: "Redis", href: "https://redis.io" },
    { src: "https://cdn.simpleicons.org/mysql", alt: "MySQL", href: "https://www.mysql.com" },
    { src: "https://cdn.simpleicons.org/milvus", alt: "Milvus", href: "https://milvus.io" },
    { src: "https://cdn.simpleicons.org/neo4j", alt: "Neo4j", href: "https://neo4j.com" },
    { src: "https://cdn.simpleicons.org/docker", alt: "Docker", href: "https://www.docker.com" },
    { src: "https://cdn.simpleicons.org/kubernetes", alt: "Kubernetes", href: "https://kubernetes.io" },
    { src: "https://cdn.simpleicons.org/nextdotjs", alt: "Next.js", href: "https://nextjs.org" },
    { src: "https://cdn.simpleicons.org/typescript", alt: "TypeScript", href: "https://www.typescriptlang.org" },
    { src: "https://cdn.simpleicons.org/git", alt: "Git", href: "https://git-scm.com" },
  ],
  projects: [
    {
      title: "Multi-Agent 产品智能导购系统",
      href: "https://blog.tovin.xyz/archives/ai-2025-agent-practice-review",
      description:
        "面向直营门店与经销商的多智能体导购助手。Dispatcher + Supervisor 混合调度，按业务域收敛单据作业、业务信息、沟通策略等子 Agent；LangGraph 编排 + DeepAgents Harness + FastMCP 统一工具层，对接 ERP/WMS/OPP 等 10+ 系统；填单耗时 5 分钟→约 20 秒，错误率下降 80%，模型成本下降约 40%。",
      tags: ["LangGraph", "FastMCP", "Milvus", "LangFuse", "飞书"],
      image: "/projects/multi-agent.jpg",
    },
    {
      title: "Agentic RAG 多模态企业知识库",
      href: "https://blog.tovin.xyz",
      description:
        "向量 RAG + GraphRAG 混合路由：简单语义走 Milvus 混合检索（HNSW + BM25 + RRF），复杂多跳走 Neo4j GraphRAG；多模态图文双路索引与 OCR 跨页表格合并；Redis 分层会话记忆 + RAGAS 双层评测，持续降低幻觉与运维成本。",
      tags: ["GraphRAG", "Neo4j", "Milvus", "RAGAS", "多模态"],
      image: "/projects/rag.jpg",
    },
    {
      title: "飞书统一协同中台 & 智慧办公",
      href: "https://blog.tovin.xyz",
      description:
        "IT Help 智能服务台一键转工单、多业务域 RAG 知识工程、统一审批待办中心（聚合 12 类跨系统待办）；推动 10+ 系统 ToA 改造与 Agent Skills 封装，迁移原 RPA 场景至飞书 Agent 生态，一线重复咨询下降约 45%。",
      tags: ["飞书 Aily", "RAG", "OpenAPI", "智能工单"],
      image: "/projects/feishu.jpg",
    },
    {
      title: "IAM 集团统一登录鉴权中心",
      href: "https://blog.tovin.xyz/archives/iam-blog",
      description:
        "从 0-1 参与建设：OAuth2/OIDC/CAS 与自研协议，对接飞书/企微身份源；Redis 会话、RocketMQ 账号事件、ES 审计；支撑 8 部门 30+ 系统统一认证，为 Agent 工具调用沉淀统一权限底座。",
      tags: ["Spring Cloud", "OAuth2", "Redis", "RocketMQ"],
      image: "/projects/iam.jpg",
    },
    {
      title: "回声助手 & 职考宝典",
      href: "https://blog.tovin.xyz",
      description:
        "医疗场景 AI 产品 MVP：FastAPI + LangChain 全栈交付，嵌入宜云健康主营业务并完成商业化验证；企微集成与 Dify 自动化运营，四周完成从 0 到 1 上线。",
      tags: ["FastAPI", "LangChain", "Dify", "企微"],
      image: "/projects/medical.jpg",
    },
    {
      title: "易亩智能 · 物联网农牧一体化",
      href: "https://gitee.com/Doublepeach/yimu-intelligent-backend",
      description:
        "基于物联网的农牧一体化平台（参赛与软著作品「亿亩良田种植监控系统」）。覆盖传感采集、监控看板与业务后台；荣获华北五省国一、双体杯等多项赛事奖项，并登记软件著作权。",
      tags: ["物联网", "Java", "监控系统", "软著"],
      image: "/projects/yimu.jpg",
    },
    {
      title: "IU 云盘 · 分布式网盘",
      href: "https://blog.tovin.xyz",
      description:
        "面向 C 端的分布式云盘：大文件切块上传、断点续传、秒传、文件夹上传下载；QQ 快捷登录、分享、回收站；FastDFS 分布式存储与多格式在线预览；MQ 异步解耦 + Redis/Lua 幂等。",
      tags: ["FastDFS", "Redis", "MQ", "Java"],
      image: "/projects/cloud.jpg",
    },
    {
      title: "乐学时签 · 学习状态检测",
      href: "https://blog.tovin.xyz",
      description:
        "基于数据分析的学习状态检测系统，支撑学习打卡与状态可视化，曾作为校园实践与创新创业方向作品展示。",
      tags: ["数据分析", "Web", "校园实践"],
      image: "/projects/legacy-5.jpg",
    },
  ],
  posts: [
    {
      title: "AI 应用开发的 2025 主流方案复盘：Agent 时代的工程实践",
      href: "https://blog.tovin.xyz/archives/ai-2025-agent-practice-review",
      description: "从调 API / Prompt 到 Multi-Agent、MCP 与评估体系：场景理解与系统设计才是高效落地的核心。",
    },
    {
      title: "IAM Skill 封装及飞书机器人对接：Agent 开发范式实践",
      href: "https://blog.tovin.xyz/archives/iam-blog",
      description: "通用 API + 可配置映射 + LLM 驱动：把业务能力封装为可复用 Skill，低侵入对接飞书机器人。",
    },
    {
      title: "在 OCI ARM 上部署 Hermes Agent：从零到一折腾实录",
      href: "https://blog.tovin.xyz/archives/DxXZH9GR",
      description: "Docker Compose 部署 Agent、Navidrome 与 Monolith MCP，强调隔离与可迁移的工程结构。",
    },
  ],
};
