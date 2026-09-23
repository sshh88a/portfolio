/* ============================================================
 * 数据文件 —— 内容来源：profile_demo.md
 * 新增项目：向 PROJECTS 数组追加一条对象即可。
 * 图片为占位生成图，替换方式：把真实截图放入 assets/ 后改 image 路径
 * ============================================================ */

const PROFILE = {
  name: "小恒",
  email: "zhheng@example.com",
  wechat: "zhheng",
  links: [
    { label: "GitHub", url: "https://github.com/xiaohe-dev" },
    { label: "个人主页", url: "https://zhheng.dev" },
    { label: "简历 PDF", url: "#" }, // TODO 放入 assets/resume.pdf 后改此路径
  ],
};

/* 技能方向：分类 + 条目 */
const SKILLS = [
  { icon: "🤖", group: "AI 应用", items: ["大语言模型 API", "RAG 检索增强", "向量检索", "Python"] },
  { icon: "💻", group: "开发语言", items: ["Python", "Java", "TypeScript", "HTML / CSS"] },
  { icon: "🎨", group: "前端与可视化", items: ["Vue", "微信小程序", "ECharts", "Canvas / SVG"] },
];

/* 项目列表（按完成时间倒序）；featured: true 使用通栏大图版式
 * 项目截图位于 image/ 文件夹，与项目同名；更换截图直接替换对应文件即可 */
const PROJECTS = [
  {
    title: "课语通",
    category: "AI 应用",
    tags: ["AI应用"],
    start: "2026.04", // TODO 按实际开始时间修改
    date: "2026.07",
    tech: ["Python", "FastAPI", "RAG", "Streamlit"],
    intro:
      "基于大语言模型的课程问答助手。用户上传课程资料后，系统自动建立知识索引，根据课程内容回答问题，并提供引用出处和知识点小测，帮助学生快速复习和整理课程重点。",
    featured: true,
    hue: 265,
    image: "image/课语通.png",
  },
  {
    title: "城市脉搏",
    category: "数据可视化",
    tags: ["数据可视化"],
    start: "2025.12", // TODO 按实际开始时间修改
    date: "2026.03",
    tech: ["TypeScript", "Canvas", "SVG", "ECharts"],
    intro:
      "城市实时交通与天气数据可视化大屏，集中展示交通、天气和城市运行信息。通过多数据源轮询聚合数据，结合 SVG 图表、Canvas 粒子地图和响应式布局实现大屏可视化展示。",
    featured: true,
    hue: 200,
    image: "image/城市脉搏.png",
  },
  {
    title: "拾光集市",
    category: "全栈项目",
    tags: ["Web应用"],
    start: "2025.05", // TODO 按实际开始时间修改
    date: "2025.09",
    tech: ["Java", "Spring Boot", "MySQL", "Vue"],
    intro:
      "面向校园场景的二手交易平台，提供商品发布、关键词检索、站内私信和信用评分等功能。从需求梳理、界面设计到主要接口开发均独立完成，上线测试后累计注册用户超过 300 人。",
    hue: 330,
    image: "image/拾光集市.png",
  },
  {
    title: "轻记账",
    category: "微信小程序",
    tags: ["移动应用"],
    start: "2025.01", // TODO 按实际开始时间修改
    date: "2025.04",
    tech: ["TypeScript", "微信小程序", "云开发", "ECharts"],
    intro:
      "面向日常生活场景的极简记账微信小程序，重点解决快速记录和查看个人收支的问题。支持语音快捷记账、月度收支统计和预算提醒，使用微信云开发完成数据存储与后端能力。",
    hue: 155,
    image: "image/轻记账.png",
  },
];
