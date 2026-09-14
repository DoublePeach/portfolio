/** 荣誉条目类型定义 */
export type HonorTag =
  | "国家级"
  | "省级"
  | "校级"
  | "竞赛"
  | "软著"
  | "认证"
  | "创新创业";

export type HonorItem = {
  id: string;
  title: string;
  date: string;
  tags: HonorTag[];
  description: string;
  image?: string;
  level?: string;
};

/** 全部荣誉标签（筛选器用） */
export const HONOR_TAGS: Array<HonorTag | "全部"> = [
  "全部",
  "国家级",
  "省级",
  "校级",
  "竞赛",
  "软著",
  "认证",
  "创新创业",
];

/**
 * 校园荣誉与证书数据（不含奖学金）
 * 来源：获奖图片、华为认证、荣誉证明整理
 */
export const honors: HonorItem[] = [
  {
    id: "huabei-2022",
    title: "2022 华北五省及港澳台大学生计算机应用大赛 · 本科组一等奖",
    date: "2022.11",
    tags: ["国家级", "竞赛"],
    level: "国一",
    description:
      "大二与团队共同参赛，作品创意突出并晋级国赛，获本科组一等奖，也是后续敢做完整项目的关键信心来源。",
    image: "/honors/huabei-2022-first.jpg",
  },
  {
    id: "challenge-national",
    title: "第五届全国高校计算机能力挑战赛 · Java 程序设计 · 全国决赛二等奖",
    date: "2023.12",
    tags: ["国家级", "竞赛"],
    level: "国二",
    description:
      "Java 组全国决赛二等奖，考察语言基础与算法能力，大部分题目 AC。",
    image: "/honors/challenge-national-second.jpg",
  },
  {
    id: "challenge-province",
    title: "第五届全国高校计算机能力挑战赛 · Java 程序设计 · 省赛一等奖",
    date: "2023.09",
    tags: ["省级", "竞赛"],
    level: "省一",
    description: "省赛 Java 组一等奖，为冲刺全国决赛打下基础。",
    image: "/honors/challenge-province-first.jpg",
  },
  {
    id: "huabei-2023",
    title: "2023 华北五省及港澳台大学生计算机应用大赛 · 省赛三等奖",
    date: "2023.10",
    tags: ["省级", "竞赛"],
    level: "省三",
    description: "再次参赛，形成从想法到落地的项目节奏。",
    image: "/honors/huabei-2023-third.jpg",
  },
  {
    id: "mcm-2023",
    title: "2023 年全国大学生数学建模竞赛 · 优秀奖",
    date: "2023.11",
    tags: ["国家级", "竞赛"],
    level: "优秀奖",
    description:
      "三天高强度建模：问题分析、假设、模型筛选、MATLAB 实现与论文成稿。",
    image: "/honors/mcm-2023.jpg",
  },
  {
    id: "design-2024",
    title: "第十七届中国大学生计算机设计大赛 · 山西省级赛三等奖",
    date: "2024.06",
    tags: ["省级", "竞赛"],
    level: "省三",
    description: "计算机设计大赛省级赛获奖，持续打磨作品表达与工程落地。",
    image: "/honors/design-2024-third.jpg",
  },
  {
    id: "design-2023",
    title: "第十六届中国大学生计算机设计大赛 · 山西省级赛优秀奖",
    date: "2023.06",
    tags: ["省级", "竞赛"],
    level: "优秀奖",
    description: "省级赛优秀奖，积累作品叙事与展示经验。",
    image: "/honors/design-2023-excellent.jpg",
  },
  {
    id: "shuangti-2023",
    title: "第三届「渝晋鲁·双体杯」三校大学生计算机应用大赛 · 三等奖",
    date: "2023.11",
    tags: ["省级", "竞赛"],
    level: "三等奖",
    description: "三省三校联合赛事，参赛作品「易亩智能」。",
    image: "/honors/shuangti-2023-third.jpg",
  },
  {
    id: "shuangti-2022",
    title: "第二届「渝晋鲁·双体杯」计算机应用大赛 · 优秀奖",
    date: "2022.12",
    tags: ["省级", "竞赛"],
    level: "优秀奖",
    description: "双体杯系列赛事早期参赛经历，锻炼跨校交流与作品呈现。",
    image: "/honors/shuangti-2022-excellent.jpg",
  },
  {
    id: "campus-contest",
    title: "校内专业竞赛 · 一等奖 2 次 / 二等奖 3 次 / 三等奖 2 次",
    date: "2021-2024",
    tags: ["校级", "竞赛"],
    level: "校级多次",
    description: "大学期间持续参与校内专业竞赛，累计多次获得等级奖。",
  },
  {
    id: "innovation-2024",
    title: "山西省大学生创新创业训练计划 · 省级立项",
    date: "2024.08",
    tags: ["省级", "创新创业"],
    level: "省级立项",
    description: "完成从创意到省级立项材料的完整闭环。",
    image: "/honors/innovation-2024.jpg",
  },
  {
    id: "soft-1",
    title: "软件著作权 · 物联网亿亩良田种植监控系统 V1.0",
    date: "2023.04",
    tags: ["软著"],
    level: "软著",
    description: "参赛与实践作品完成软著登记。",
    image: "/honors/software-copyright-2023.jpg",
  },
  {
    id: "soft-2",
    title: "软件著作权 · MFRC 射频识别营销信息检测平台 V1.0",
    date: "2024.07",
    tags: ["软著"],
    level: "软著",
    description: "射频识别相关信息检测平台完成软著登记。",
    image: "/honors/copyright-pending.jpg",
  },
  {
    id: "soft-3",
    title: "软件著作权 · 智充驿站运营服务信息管理系统 V1.0",
    date: "2024.07",
    tags: ["软著"],
    level: "软著",
    description: "智充驿站运营服务管理系统完成软著登记。",
    image: "/honors/copyright-pending.jpg",
  },
  {
    id: "huawei-hcia",
    title: "华为认证工程师 · HCIA-AI",
    date: "2025",
    tags: ["认证"],
    level: "HCIA-AI",
    description: "系统学习人工智能技术链与应用实践路径。",
    image: "/honors/huawei-hcia-ai.jpg",
  },
  {
    id: "huawei-agent",
    title: "华为 · AI Agent 技术与应用微认证",
    date: "2025",
    tags: ["认证"],
    level: "微认证",
    description: "聚焦 Agent 技术原理与落地应用场景。",
    image: "/honors/huawei-ai-agent.jpg",
  },
  {
    id: "huawei-coding",
    title: "华为 · AI for Coding 微认证",
    date: "2025",
    tags: ["认证"],
    level: "微认证",
    description: "覆盖 AI 辅助编程与智能研发提效实践。",
    image: "/honors/huawei-ai-coding.jpg",
  },
  {
    id: "huawei-tech-chain",
    title: "华为 · 人工智能技术链与实践微认证",
    date: "2025",
    tags: ["认证"],
    level: "微认证",
    description: "贯通人工智能技术链关键环节与工程实践。",
    image: "/honors/huawei-ai-tech-chain.jpg",
  },
  {
    id: "damo-trainer",
    title: "达摩院 · 人工智能训练师（高级）",
    date: "2025.10",
    tags: ["认证"],
    level: "高级",
    description: "覆盖数据、训练与应用落地能力。",
    image: "/honors/damo-ai-trainer.jpg",
  },
  {
    id: "aliyun-apsara",
    title: "阿里云 Apsara Clouder 专项技能认证",
    date: "2023.04",
    tags: ["认证"],
    level: "认证",
    description: "夯实云与工程基础能力。",
    image: "/honors/aliyun-apsara.jpg",
  },
  {
    id: "feishu-agent",
    title: "飞书生态 AI Agent 开发者高级认证",
    date: "2025",
    tags: ["认证"],
    level: "高级",
    description: "对应企业 IM 场景下的 Agent 落地与集成能力。",
  },
];
