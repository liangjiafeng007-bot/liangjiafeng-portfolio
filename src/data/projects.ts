export type ProjectDetail = {
  background: string;
  problem: string;
  judgment: string;
  actions: string[];
  outputs: string[];
  value: string;
};

export type Project = {
  id: string;
  name: string;
  tags: string[];
  summary: string;
  contributions: string[];
  cover: string;
  gallery: string[];
  detail: ProjectDetail;
};

const page = (num: number) =>
  `/assets/portfolio/pages/portfolio-page-${String(num).padStart(2, '0')}.png`;

export const projects: Project[] = [
  {
    id: '01',
    name: 'BLAUPUNKT 蓝宝中国品牌策略与视觉体系',
    tags: ['Brand Strategy', 'Visual System', 'Product Branding'],
    summary: '从授权 Logo 到品牌化经营，建立蓝宝中国市场的品牌定位、视觉体系与产品品牌化路径。',
    cover: page(6),
    gallery: [page(4), page(6), page(7), page(8), page(9), page(10)],
    contributions: [
      '判断授权品牌在中国市场的问题：品牌认知弱、定位不清、产品同质化、内容难转化。',
      '建立“德国品牌背书 + 生活化场景 + 产品感知 + 高质价比”的表达路径。',
      '统一色彩、人物状态、场景表达、产品露出与内容视觉规范。',
      '让品牌从“卖 Logo、卖产品”转向更有认知和购买理由的品牌化经营。',
    ],
    detail: {
      background:
        '蓝宝以授权模式进入中国市场，在多品类并行与 ODM 产品同质化环境下，需要重新建立音频品类的品牌表达路径。',
      problem: '用户对品牌有熟悉感但不清楚购买理由，产品视觉、内容和场景表达分散。',
      judgment:
        '蓝宝不能只强调德国百年品牌，而要把品牌资产转化为用户能看见、理解并愿意购买的产品价值。',
      actions: ['重梳品牌定位', '建立视觉体系', '统一人物与场景表达', '将产品卖点转化为内容语言'],
      outputs: ['品牌视觉规范', '产品视觉资产', '电商与社媒内容方向', '跨渠道表达标准'],
      value: '帮助蓝宝从授权 Logo 经营转向更完整的品牌化经营。',
    },
  },
  {
    id: '02',
    name: 'BLAUPUNKT CMF 策略与产品品牌化升级',
    tags: ['CMF Strategy', 'ODM Upgrade', 'Product Branding'],
    summary: '在不大改结构和成本受限的条件下，通过色彩、材质、工艺和细节控制提升产品识别度与品牌感。',
    cover: page(13),
    gallery: [page(13), page(14), page(15), page(16), page(17), page(18)],
    contributions: [
      '从选品阶段介入，判断 ODM 产品改造潜力。',
      '建立低饱和、高质感、跨品类统一的 CMF 方向。',
      '通过织物、金属、硅胶、喷涂、按键、挂绳、Logo 等细节提升完成度。',
      '让产品从“通用品”转向“品牌产品”。',
    ],
    detail: {
      background: '授权与 ODM 模式下，产品容易陷入有产品、无品牌感的问题。',
      problem: '结构改造空间有限，成本约束明显，但用户第一眼感知仍需要提升。',
      judgment: 'CMF 不只是设计语言，而是低成本提升产品识别度、质感和品牌资产的重要工具。',
      actions: ['选品判断', 'CMF 方向定义', '细节工艺控制', '量产打样与修正'],
      outputs: ['跨品类 CMF 方向', '产品细节升级方案', '量产前置验证', '品牌化产品矩阵'],
      value: '在有限成本内建立可复制的产品品牌化升级方法。',
    },
  },
  {
    id: '03',
    name: 'BLAUPUNKT AI 视觉验证流程',
    tags: ['AI Design', 'Visual Exploration', 'Decision Support'],
    summary: '将 AI 纳入前期视觉探索，用于快速验证产品风格、人物状态、场景情绪和品牌调性。',
    cover: page(11),
    gallery: [page(11), page(12)],
    contributions: [
      'AI 负责方向探索，不替代最终设计。',
      '快速生成多风格视觉参考，提高前期判断效率。',
      '帮助团队在执行前统一视觉方向。',
      '将视觉决策从经验驱动转向可视化判断驱动。',
    ],
    detail: {
      background: '传统视觉方向探索依赖设计想象和效果图，前期反复试错成本较高。',
      problem: '视觉方向不明确时，团队很难提前判断人物状态、场景情绪和产品调性是否匹配。',
      judgment: 'AI 的价值在于辅助判断与扩大探索空间，不替代品牌判断和最终落地控制。',
      actions: ['生成多方向视觉参考', '对比人物状态与场景气质', '筛选可落地方向', '回到品牌标准校准'],
      outputs: ['AI 视觉探索图', '方向对比依据', '执行前视觉共识', '品牌一致性判断标准'],
      value: '提升前期决策效率，让视觉判断从经验驱动转向可视化判断驱动。',
    },
  },
  {
    id: '04',
    name: 'Nanna 兔品牌 IP 与内容传播',
    tags: ['IP Design', 'Social Content', 'Brand Asset'],
    summary: '为理性、硬件属性较强的消费电子品牌建立人格化内容入口，降低用户互动门槛。',
    cover: page(20),
    gallery: [page(19), page(20), page(21), page(22), page(23)],
    contributions: [
      '设计 Nanna 兔作为品牌内容中的人格化资产。',
      '应用于社媒、直播、短视频、节日海报、会员物料和周边。',
      '让品牌从单纯产品展示转向更有记忆点和互动感的内容表达。',
      '提升内容统一性和可复用性。',
    ],
    detail: {
      background: '消费电子品牌长期偏理性参数表达，用户互动门槛高。',
      problem: '品牌内容缺少能被记住、能互动、能持续复用的人格化入口。',
      judgment: 'IP 不是装饰，而是品牌与用户的轻量沟通媒介。',
      actions: ['建立 IP 角色设定', '延展表情与节日物料', '接入社媒与直播场景', '沉淀内容资产'],
      outputs: ['Nanna 兔 IP', '社媒内容模板', '直播和会员物料', '周边与互动场景'],
      value: '降低品牌冷感，让产品沟通更亲和，也让内容资产更易复用。',
    },
  },
  {
    id: '05',
    name: 'SoundTrip 产品品牌化与商业转化',
    tags: ['Product Branding', 'E-commerce', 'Conversion'],
    summary: '围绕便携音响产品建立从产品感知、CMF升级、视觉表达、达人传播到电商承接的转化链路。',
    cover: page(26),
    gallery: [page(26), page(27), page(28)],
    contributions: [
      '通过产品差异化、CMF和场景视觉提升产品第一感知。',
      '梳理达人 Brief、直播内容与电商详情页承接。',
      '单品 60 天 GMV 达 184 万+，成交 5900+ 单。',
      '验证品牌化表达对商业转化的支持价值。',
    ],
    detail: {
      background: 'SoundTrip 基于 ODM 产品基础，需要从产品感知升级到销售转化闭环。',
      problem: '仅靠参数和货架曝光难以建立记忆点，也难以解释为什么值得买。',
      judgment: '商业转化需要由产品力、CMF、视觉表达、达人种草和电商承接共同完成。',
      actions: ['CMF 升级', '品牌化视觉表达', '内容种草拆解', '直播与详情页承接'],
      outputs: ['产品视觉资产', '达人 Brief', '电商详情页逻辑', '直播转化路径'],
      value: '在未进行广告投放与付费推广的情况下，验证品牌化表达对自然销售增长的支持价值。',
    },
  },
  {
    id: '06',
    name: 'REAL YOUNG 饰品耳机品牌视觉升级',
    tags: ['Brand Upgrade', 'Fashion Tech', 'Visual Identity'],
    summary: '将耳机从单纯音频产品转向女性饰品化表达，强化时尚感、悦己感和品牌识别。',
    cover: page(29),
    gallery: [page(29), page(30), page(31)],
    contributions: ['重构品牌主张', '建立饰品化视觉方向', '强化女性用户情绪价值', '统一品牌视觉表达'],
    detail: {
      background: 'REAL YOUNG 需要摆脱普通音频产品表达，转向更贴近饰品与自我认同的品牌语言。',
      problem: '原有表达在数码与时尚之间摇摆，品牌核心和视觉语言不够统一。',
      judgment: '耳机可以作为佩戴属性和个人风格的一部分，而不只是工具。',
      actions: ['定义品牌主张', '建立东方气质与现代时尚视觉', '强化柔和光影与克制留白', '重构详情表达'],
      outputs: ['品牌视觉升级方向', 'KV 与详情页表达', '产品视觉资产', '品牌口号表达'],
      value: '让产品从工具属性转向饰品属性、情绪表达和自我认同。',
    },
  },
  {
    id: '07',
    name: '青少年学习耳机品牌方向',
    tags: ['Youth Brand', 'Product Positioning', 'Campaign Visual'],
    summary: '围绕学习、专注、舒适和成长场景，建立青少年学习耳机的品牌表达方向。',
    cover: page(32),
    gallery: [page(32), page(33), page(34)],
    contributions: ['从学习工具转向学习状态品牌', '兼顾家长理性与孩子感性', '建立青春视觉语言', '推动电商转化表达'],
    detail: {
      background: '学习耳机天然带有工具和压力属性，需要重新包装为更积极的学习陪伴。',
      problem: '只强调功能容易让孩子抗拒，也难以驱动家长信任。',
      judgment: '应以青少年的视觉语言做触达，用专业产品质感驱动父母决策。',
      actions: ['定义学习状态品牌', '建立轻户外与轻社交场景', '梳理电商信息结构', '强化礼赠与陪伴表达'],
      outputs: ['品牌定位方向', 'Campaign 视觉', '电商详情页结构', '场景化内容资产'],
      value: '让产品从“要求你学习”转向“帮助你自然进入学习状态”。',
    },
  },
  {
    id: '08',
    name: 'Kodak / 其他视觉与电商项目',
    tags: ['E-commerce Visual', 'Packaging', 'Campaign'],
    summary: '围绕品牌色、产品卖点和平台转化需求，完成电商视觉、包装和传播物料设计。',
    cover: page(35),
    gallery: [page(35), page(36), page(37), page(38)],
    contributions: ['延展既有品牌资产', '规范品牌色与版式语言', '强化产品卖点呈现', '提升电商视觉一致性'],
    detail: {
      background: '不同品牌和品类需要在既有资产框架下完成电商视觉延展。',
      problem: '平台物料容易为了卖点堆叠而损失品牌识别与统一性。',
      judgment: '成熟品牌视觉不是重新发明，而是在框架内延展、规范和用好。',
      actions: ['梳理品牌视觉资产', '规范色彩和版式', '完成详情页与活动物料', '适配不同平台转化需求'],
      outputs: ['电商视觉图', '包装与传播物料', '品牌延展规范', '跨品类视觉资产'],
      value: '在保证品牌识别的前提下提升设计与商业落地效率。',
    },
  },
];
