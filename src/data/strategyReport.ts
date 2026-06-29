export type StrategyCard = {
  title: string;
  body: string;
  accent?: string;
};

export type StrategyChapter = {
  id: string;
  title: string;
  english: string;
  conclusion: string;
  cards: StrategyCard[];
  footnote?: string;
};

export const strategyIntro = {
  title: 'Strategy Report',
  cnTitle: '蓝宝中国市场品牌升级策略分析',
  subtitle:
    '从授权 Logo 到品牌化经营：基于中国音频市场、授权模式、ODM 产品现状、用户场景与内容电商环境的品牌升级路径。',
  summary:
    '蓝宝不是没有品牌历史，而是在国内授权模式下，品牌资产没有被充分转化为中国用户可感知的产品价值。策略重点不是继续强调“德国品牌”，而是建立一套从选品、产品定义、CMF、视觉体系到内容承接的品牌化表达路径，让品牌价值落到产品外观、使用场景、内容表达和购买理由中。',
};

export const strategyChapters: StrategyChapter[] = [
  {
    id: '01',
    english: 'Project Background',
    title: '项目背景与问题诊断',
    conclusion:
      '蓝宝有德国百年品牌背书，也有一定全球认知基础，但在国内授权模式下，用户看到的往往只是一个“熟悉但不清楚”的品牌。音频品类中，蓝宝面临品牌认知弱、产品公模感强、内容表达分散、购买理由不足的问题。',
    cards: [
      { title: '品牌', body: '百年品牌存在，但国内用户认知弱，容易被理解为贴牌。' },
      { title: '产品', body: 'ODM / 授权产品来源分散，公模感强。' },
      { title: '类目', body: '小家电类目已有验证，但音频类目认知不足。' },
      { title: '竞争', body: '高端品牌强，白牌低价多，用户选择丰富。' },
      { title: '内容', body: '产品卖点分散，用户难理解。' },
      { title: '对应策略', body: '从“卖标”转向品牌化经营，建立选品、开品、视觉和内容标准。', accent: 'accent' },
    ],
  },
  {
    id: '02',
    english: 'Market Opportunity',
    title: '外部环境与市场机会',
    conclusion:
      '音频竞争正在从参数转向感性。参数只是基础，真正影响用户决策的是使用场景、真实测评、价格是否值得、品牌是否可信和内容是否能让用户理解产品价值。',
    cards: [
      { title: '内容电商成熟', body: '小红书、抖音、直播和达人测评影响购买决策。' },
      { title: '消费更理性', body: '用户关注质价比，不愿为单纯 Logo 支付高溢价。' },
      { title: '场景需求增长', body: '户外、桌面、睡眠、通勤、礼赠等细分场景明确。' },
      { title: '技术门槛降低', body: '蓝牙、防水、降噪、AI 音频等技术逐渐成熟。' },
    ],
    footnote:
      '蓝宝音频不应继续做泛音频产品，而应优先选择具备场景表达空间、CMF 改造空间和内容转化空间的产品。',
  },
  {
    id: '03',
    english: 'PEST Analysis',
    title: '外部环境判断',
    conclusion:
      '蓝宝不能只做 Logo 授权和货架销售，而要建立产品标准、内容表达标准和用户信任机制。',
    cards: [
      { title: '政策 / 平台环境', body: '内容平台与电商平台更重视可信表达、真实测评和用户口碑。' },
      { title: '经济环境', body: '用户理性消费增强，更看重质价比和是否真的值得。' },
      { title: '社会 / 用户环境', body: '用户按场景购买音频产品，情绪价值和生活方式表达变得重要。' },
      { title: '技术环境', body: '技术成熟降低硬件门槛，也加剧同质化。' },
    ],
    footnote: '蓝宝必须通过 CMF、品牌视觉、内容和场景体验建立差异。',
  },
  {
    id: '04',
    english: 'Porter’s Five Forces',
    title: '波特五力分析',
    conclusion:
      '蓝宝不宜打参数战或价格战，而应聚焦中端，通过产品质感、品牌视觉和场景化内容建立差异化价值。',
    cards: [
      { title: '行业内竞争', body: '高', accent: 'accent' },
      { title: '潜在进入者威胁', body: '中高' },
      { title: '替代品威胁', body: '中高' },
      { title: '供应商议价能力', body: '中' },
      { title: '买方议价能力', body: '高', accent: 'accent' },
    ],
    footnote: '竞争壁垒最终来自品牌认知、产品体验和用户信任。',
  },
  {
    id: '05',
    english: 'SWOT + TOWS',
    title: '核心判断',
    conclusion:
      '蓝宝需要利用德国品牌背书与供应链基础，借助内容电商和达人种草补足音频认知，并建立选品、开品、CMF、视觉、内容和售后标准。',
    cards: [
      { title: '优势', body: '百年德国品牌背书；小家电类目已有市场验证；具备供应链、选品和开品基础。' },
      { title: '劣势', body: '国内音频认知弱；授权模式容易变成“卖标”；多品类表达分散，公模感强。' },
      { title: '机会', body: '内容电商增长；户外露营、桌面经济、睡眠疗愈、礼赠场景增长。' },
      { title: '威胁', body: 'JBL / Bose / Sony 占据高端心智；小米 / 漫步者压缩价格空间；白牌拉低价格预期。' },
      { title: 'TOWS 动作', body: '用 CMF、品牌视觉、产品质感和德国品牌背书，建立中端差异化价值。', accent: 'accent' },
    ],
  },
  {
    id: '06',
    english: 'Competitor & User Insight',
    title: '竞品分析与用户洞察',
    conclusion:
      '蓝宝不适合直接挑战专业音频头部品牌，也不适合进入白牌低价竞争。更合理的位置，是在中高端价位带中建立“德国品牌背书 + 产品质感 + 场景化内容”的差异。',
    cards: [
      { title: '高端专业音频', body: 'JBL / Bose / Sony / B&O，心智强、技术强、溢价高。' },
      { title: '性价比品牌', body: '小米 / 漫步者 / 韶音，以价格和功能效率形成压力。' },
      { title: '睡眠 / 场景品牌', body: '声阔 / 南卡 / 猫王等，围绕细分场景占位。' },
      { title: '用户类型', body: '年轻生活方式用户、桌面 / 家居音频用户、户外露营用户、睡眠 / 疗愈用户。' },
    ],
  },
  {
    id: '07',
    english: 'STP Positioning',
    title: '品牌定位',
    conclusion:
      '目标用户不是专业音频发烧友，而是关注颜值、质感、品牌感和性价比的 25-40 岁城市消费用户。',
    cards: [
      { title: 'S 市场细分', body: '按使用场景和购买动机拆分：通勤、AI 办公、桌面家居、户外露营、睡眠疗愈、学习考研、派对玩乐、礼赠企业等。' },
      { title: 'T 目标市场', body: '不只追求低价，也愿意为品牌信任、产品质感和情绪价值支付。' },
      { title: 'P 品牌定位', body: '以德系品质感为基础的场景化音频品牌。', accent: 'accent' },
      { title: '定位表达', body: '源自德国百年声学，专注生活的品质音频陪伴者。' },
    ],
  },
  {
    id: '08',
    english: 'Brand House',
    title: '品牌屋',
    conclusion:
      '品牌屋把愿景、使命、定位、口号、用户价值、战略支柱和品牌基石统一到一套可执行的经营逻辑中。',
    cards: [
      { title: '品牌愿景', body: '成为用户日常生活状态中的品质音频陪伴者。' },
      { title: '品牌使命', body: '百年声学，以声常伴。' },
      { title: '品牌口号', body: '轻松愉悦，乐享生活。' },
      { title: '战略支柱', body: '产品策略、视觉策略、CMF 策略、内容策略协同推进。', accent: 'accent' },
      { title: '品牌基石', body: '设计驱动产品逻辑 / 统一品牌资产 / 本土化产品开发 / 内容与渠道协同。' },
    ],
  },
  {
    id: '09',
    english: 'Product Matrix',
    title: '产品矩阵与选品开品策略',
    conclusion:
      '产品策略重点不是扩充 SKU，而是建立选品标准，优先选择符合品牌气质、具备 CMF 空间、适合传播转化的产品。',
    cards: [
      { title: '判断标准', body: '品牌匹配、用户场景、改造空间、渠道适配、商业可能。' },
      { title: '引流款', body: '基础耳机、便携音响。' },
      { title: '核心款', body: 'SoundTrip、桌面音响。', accent: 'accent' },
      { title: '形象款', body: 'HiFi、设计感音响、黑胶产品。' },
      { title: '场景款 / 礼赠款', body: '睡眠耳机、AI 翻译耳机、桌面音响、礼盒、套装、定制产品。' },
    ],
  },
  {
    id: '10',
    english: 'CMF & Content Strategy',
    title: 'CMF 与内容传播策略',
    conclusion: 'CMF 解决“看起来像不像品牌”，内容解决“为什么值得买”。',
    cards: [
      { title: 'CMF 路径', body: '选品判断、色彩统一、材质优化、工艺细节、量产跟进。' },
      { title: '吸引', body: '小红书、抖音、达人内容建立第一印象。' },
      { title: '理解 / 比较', body: '短视频、详情页、测评内容解释产品价值，并强化质价比、品牌感和卖点。' },
      { title: '购买 / 分享', body: '直播间、商品页、客服提供购买理由，晒单、评论、UGC 沉淀口碑。', accent: 'accent' },
    ],
  },
  {
    id: '11',
    english: 'Business Model Canvas',
    title: '商业画布',
    conclusion: '价值主张重点是德国品牌背书 × 场景化音频体验 × 高质价比。',
    cards: [
      { title: 'Key Partner', body: '供应链、达人、平台、电商渠道、内容团队。' },
      { title: 'Key Activity', body: '选品、产品定义、CMF、内容生产、电商承接。' },
      { title: 'Value Proposition', body: '德国品牌背书 × 场景化音频体验 × 高质价比。', accent: 'accent' },
      { title: 'Channels', body: '电商详情页、直播、短视频、达人内容、小红书、抖音。' },
      { title: 'Revenue Streams', body: '音频产品销售、礼赠套装、B 端定制与多场景 SKU。' },
    ],
  },
  {
    id: '12',
    english: 'Strategy Summary',
    title: '项目总结与落地',
    conclusion:
      '蓝宝在中国做音频，不能继续用贴牌逻辑做品牌生意。德国背书是真实资产，小家电类目跑通的路径有经验可以借鉴，市场里的场景机会也是存在的，缺的是一套把这些要素真正串起来的品牌化经营方法。',
    cards: [
      { title: '选品开品', body: '建立判断标准，选择具备品牌气质、CMF 空间和内容转化空间的产品。' },
      { title: 'CMF 升级', body: '用低成本方式提升产品第一感知、差异化与跨品类识别。' },
      { title: '视觉体系', body: '统一品牌色、人物状态、场景表达、产品露出和内容视觉规范。' },
      { title: '内容转化', body: '让用户真正明白：蓝宝值得买，而且值得这个价。', accent: 'accent' },
    ],
  },
];
