export type HeroItem = {
  id: string;
  label: string;
  title: string;
  targetId: string;
  type: 'video' | 'image';
  image?: string;
  fallbackImages?: string[];
  video?: string;
  fallbackVideos?: string[];
  poster?: string;
  fallback: string;
};

export const defaultHeroItemId = 'tvc';

export const heroItems: HeroItem[] = [
  {
    id: 'tvc',
    label: 'FEATURED TVC',
    title: 'BLAUPUNKT Brand Film',
    targetId: 'portfolio-02',
    type: 'video',
    video: '/assets/video/blaupunkt-tvc.mp4',
    fallbackVideos: ['/assets/video/blaupunkt-tvc.mp4.mp4'],
    poster: '/assets/video/blaupunkt-tvc-poster.jpg',
    image: '/assets/video/blaupunkt-tvc-poster.jpg',
    fallbackImages: ['/assets/video/blaupunkt-tvc-poster.png'],
    fallback: 'BLAUPUNKT TVC\nVideo Coming Soon',
  },
  {
    id: 'resume',
    label: '01 RESUME',
    title: '简历',
    targetId: 'resume',
    type: 'image',
    image: '/assets/resume/resume-01.jpg',
    fallbackImages: ['/assets/portfolio/pages/portfolio-page-02.png'],
    fallback: 'Resume\nComing Soon',
  },
  {
    id: 'portfolio-01',
    label: '02 PORTFOLIO 01',
    title: '个人核心能力与个人定位',
    targetId: 'portfolio-01',
    type: 'image',
    image: '/assets/portfolio/p01.jpg',
    fallbackImages: ['/assets/portfolio/pages/portfolio-page-03.png'],
    fallback: 'Portfolio 01\nComing Soon',
  },
  {
    id: 'portfolio-02',
    label: '03 PORTFOLIO 02',
    title: 'BLAUPUNKT 品牌策略与视觉体系',
    targetId: 'portfolio-02',
    type: 'image',
    image: '/assets/portfolio/p02.jpg',
    fallbackImages: ['/assets/portfolio/pages/portfolio-page-06.png'],
    fallback: 'Portfolio 02\nComing Soon',
  },
  {
    id: 'portfolio-03',
    label: '04 PORTFOLIO 03',
    title: '产品品牌化与 CMF 升级',
    targetId: 'portfolio-03',
    type: 'image',
    image: '/assets/portfolio/p03.jpg',
    fallbackImages: ['/assets/portfolio/pages/portfolio-page-13.png'],
    fallback: 'Portfolio 03\nComing Soon',
  },
  {
    id: 'portfolio-04',
    label: '05 PORTFOLIO 04',
    title: 'IP 与内容传播',
    targetId: 'portfolio-04',
    type: 'image',
    image: '/assets/portfolio/p04.jpg',
    fallbackImages: ['/assets/portfolio/pages/portfolio-page-20.png'],
    fallback: 'Portfolio 04\nComing Soon',
  },
  {
    id: 'portfolio-05',
    label: '06 PORTFOLIO 05',
    title: '商业转化 / TVC / 项目成果',
    targetId: 'portfolio-05',
    type: 'image',
    image: '/assets/portfolio/p05.jpg',
    fallbackImages: ['/assets/portfolio/pages/portfolio-page-26.png'],
    fallback: 'Portfolio 05\nComing Soon',
  },
  {
    id: 'portfolio-06',
    label: '07 PORTFOLIO 06',
    title: '其他项目 / 视觉与品牌案例',
    targetId: 'portfolio-06',
    type: 'image',
    image: '/assets/portfolio/p06.jpg',
    fallbackImages: ['/assets/portfolio/pages/portfolio-page-35.png'],
    fallback: 'Portfolio 06\nComing Soon',
  },
  {
    id: 'strategy',
    label: '08 STRATEGY',
    title: '蓝宝中国市场品牌升级策略分析',
    targetId: 'strategy',
    type: 'image',
    image: '/assets/strategy/strateg-01.jpg',
    fallback: 'Strategy Report\nComing Soon',
  },
  {
    id: 'brand-manual',
    label: '09 BRAND MANUAL',
    title: '蓝宝品牌手册',
    targetId: 'brand-manual',
    type: 'image',
    image: '/assets/brand-manual/brand-manual-01.jpg',
    fallbackImages: ['/assets/brand-manual/brand-manual-01.png'],
    fallback: 'BLAUPUNKT Brand Manual\nComing Soon',
  },
];
