export type Capability = {
  id: string;
  title: string;
  cnTitle: string;
  description: string;
};

export const capabilities: Capability[] = [
  {
    id: '01',
    title: 'Brand Strategy',
    cnTitle: '品牌策略',
    description: '市场判断、用户洞察、竞品分析、品牌定位、差异化路径。',
  },
  {
    id: '02',
    title: 'Visual System',
    cnTitle: '品牌视觉体系',
    description: '色彩、构图、人物状态、产品露出、跨渠道视觉一致性。',
  },
  {
    id: '03',
    title: 'Product Branding',
    cnTitle: '产品品牌化',
    description: '从选品、产品定义、CMF 到产品第一感知，提升 ODM 产品识别度。',
  },
  {
    id: '04',
    title: 'AI Design Validation',
    cnTitle: 'AI 辅助设计验证',
    description: '用 AI 快速探索视觉方向、验证风格可能性，提升前期决策效率。',
  },
  {
    id: '05',
    title: 'Content & Conversion',
    cnTitle: '内容转化',
    description: '将品牌定位和产品卖点转化为电商详情页、短视频、达人 Brief 和购买理由。',
  },
];
