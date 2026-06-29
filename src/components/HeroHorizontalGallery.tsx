import { motion } from 'framer-motion';
import { useState } from 'react';
import FallbackImage from './FallbackImage';

type GalleryItem = {
  id: string;
  label: string;
  titleEn: string;
  titleCn: string;
  descriptionCn: string;
  type: 'video' | 'image';
  image?: string;
  fallbackImages?: string[];
  video?: string;
  fallbackVideos?: string[];
  poster?: string;
  targetId: string;
  size: 'large' | 'medium' | 'small';
};

const galleryItems: GalleryItem[] = [
  {
    id: 'tvc',
    label: 'FEATURED TVC',
    titleEn: 'BLAUPUNKT Brand Film',
    titleCn: '蓝宝 TVC 品牌内容视频',
    descriptionCn: '以动态影像承接品牌视觉、产品场景与内容传播。',
    type: 'video',
    video: '/assets/video/blaupunkt-tvc.mp4',
    fallbackVideos: ['/assets/video/blaupunkt-tvc.mp4.mp4'],
    poster: '/assets/video/blaupunkt-tvc-poster.jpg',
    fallbackImages: ['/assets/video/blaupunkt-tvc-poster.png'],
    targetId: 'portfolio-02',
    size: 'large',
  },
  {
    id: 'portfolio-01',
    label: '01 PORTFOLIO',
    titleEn: 'Personal Positioning',
    titleCn: '个人核心能力与个人定位',
    descriptionCn: '展示品牌经理视角下的个人定位、核心能力和品牌方法。',
    type: 'image',
    image: '/assets/portfolio/p01.jpg',
    fallbackImages: ['/assets/portfolio/pages/portfolio-page-03.png'],
    targetId: 'portfolio-01',
    size: 'medium',
  },
  {
    id: 'portfolio-02',
    label: '02 PORTFOLIO',
    titleEn: 'BLAUPUNKT Brand System',
    titleCn: '蓝宝品牌策略与视觉体系',
    descriptionCn: '从品牌策略、视觉系统到产品表达，建立蓝宝中国市场的品牌化路径。',
    type: 'image',
    image: '/assets/portfolio/p02.jpg',
    fallbackImages: ['/assets/portfolio/pages/portfolio-page-06.png'],
    targetId: 'portfolio-02',
    size: 'large',
  },
  {
    id: 'portfolio-03',
    label: '03 PORTFOLIO',
    titleEn: 'Product Branding & CMF',
    titleCn: '产品品牌化与 CMF 升级',
    descriptionCn: '通过色彩、材质、工艺和细节控制，提升 ODM 产品的品牌识别。',
    type: 'image',
    image: '/assets/portfolio/p03.jpg',
    fallbackImages: ['/assets/portfolio/pages/portfolio-page-13.png'],
    targetId: 'portfolio-03',
    size: 'medium',
  },
  {
    id: 'portfolio-04',
    label: '04 PORTFOLIO',
    titleEn: 'IP & Content Communication',
    titleCn: 'IP 与内容传播',
    descriptionCn: '以品牌 IP 和内容表达降低沟通门槛，增强品牌记忆点。',
    type: 'image',
    image: '/assets/portfolio/p04.jpg',
    fallbackImages: ['/assets/portfolio/pages/portfolio-page-20.png'],
    targetId: 'portfolio-04',
    size: 'small',
  },
  {
    id: 'portfolio-05',
    label: '05 PORTFOLIO',
    titleEn: 'Conversion & Brand Assets',
    titleCn: '商业转化 / TVC / 项目成果',
    descriptionCn: '将品牌视觉、产品卖点和内容表达转化为电商与传播资产。',
    type: 'image',
    image: '/assets/portfolio/p05.jpg',
    fallbackImages: ['/assets/portfolio/pages/portfolio-page-26.png'],
    targetId: 'portfolio-05',
    size: 'medium',
  },
  {
    id: 'portfolio-06',
    label: '06 PORTFOLIO',
    titleEn: 'Other Brand Cases',
    titleCn: '其他项目 / 视觉与品牌案例',
    descriptionCn: '展示不同品牌和视觉项目中的策略表达与设计落地。',
    type: 'image',
    image: '/assets/brand-manual/brand-manual-15.jpg',
    fallbackImages: ['/assets/brand-manual/brand-manual-15.png', '/assets/portfolio/pages/portfolio-page-35.png'],
    targetId: 'portfolio-06',
    size: 'large',
  },
  {
    id: 'resume',
    label: 'RESUME',
    titleEn: 'Personal Resume',
    titleCn: '个人简历',
    descriptionCn: '以简历形式呈现品牌经理、品牌视觉策略和产品品牌化经历。',
    type: 'image',
    image: '/assets/resume/resume-01.jpg',
    fallbackImages: ['/assets/portfolio/pages/portfolio-page-02.png'],
    targetId: 'resume',
    size: 'small',
  },
  {
    id: 'strategy',
    label: 'STRATEGY REPORT',
    titleEn: 'BLAUPUNKT China Strategy',
    titleCn: '蓝宝中国市场品牌升级策略分析',
    descriptionCn: '基于市场、竞争、用户和内容电商环境，梳理蓝宝品牌升级路径。',
    type: 'image',
    image: '/assets/strategy/strateg-12.jpg',
    targetId: 'strategy',
    size: 'large',
  },
  {
    id: 'brand-manual',
    label: 'BRAND MANUAL',
    titleEn: 'BLAUPUNKT Brand Manual',
    titleCn: '蓝宝品牌手册',
    descriptionCn: '展示品牌视觉规范、CMF 规范、内容表达标准与品牌资产沉淀。',
    type: 'image',
    image: '/assets/brand-manual/brand-manual-15.jpg',
    fallbackImages: ['/assets/brand-manual/brand-manual-15.png', '/assets/brand-manual/brand-manual-17.png', '/assets/brand-manual/brand-manual-01.png'],
    targetId: 'brand-manual',
    size: 'medium',
  },
];

const duplicatedItems = [...galleryItems, ...galleryItems];

const sizeClasses: Record<GalleryItem['size'], string> = {
  large: 'w-[clamp(460px,32vw,580px)]',
  medium: 'w-[clamp(360px,25vw,460px)]',
  small: 'w-[clamp(280px,20vw,340px)]',
};

function scrollToSection(targetId: string) {
  const target =
    document.getElementById(targetId) ??
    (targetId.startsWith('portfolio-') ? document.getElementById('portfolio') : null);

  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${target.id}`);
  }
}

function HeroVideoCard({ item }: { item: GalleryItem }) {
  const sources = [item.video, ...(item.fallbackVideos ?? [])].filter(Boolean) as string[];
  const [sourceIndex, setSourceIndex] = useState(0);
  const [videoFailed, setVideoFailed] = useState(sources.length === 0);

  if (videoFailed || sources.length === 0) {
    return (
      <FallbackImage
        src={item.poster}
        fallbackSrcs={item.fallbackImages}
        alt={item.titleCn}
        className="aspect-video w-full bg-[#F1F1EF]"
        imageClassName="block aspect-video w-full bg-white object-cover"
        placeholder={'BLAUPUNKT TVC\nVideo Coming Soon'}
      />
    );
  }

  return (
    <video
      src={sources[sourceIndex]}
      poster={item.poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="block aspect-video w-full bg-white object-cover"
      onError={() => {
        if (sourceIndex < sources.length - 1) {
          setSourceIndex((index) => index + 1);
          return;
        }
        setVideoFailed(true);
      }}
    />
  );
}

function HeroHorizontalGallery() {
  return (
    <div className="hero-marquee absolute inset-x-0 bottom-[15vh] overflow-hidden pb-4 pt-8">
      <style>
        {`
          @keyframes heroMarquee {
            from { transform: translate3d(-50%, 0, 0); }
            to { transform: translate3d(0, 0, 0); }
          }

          .hero-marquee-track {
            animation: heroMarquee 46s linear infinite;
          }

          .hero-marquee:hover .hero-marquee-track {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="hero-marquee-track flex w-max items-end gap-12 will-change-transform">
        {duplicatedItems.map((item, index) => (
          <motion.button
            key={`${item.id}-${index}`}
            type="button"
            className={`group block shrink-0 cursor-pointer text-left ${sizeClasses[item.size]}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: Math.min(index * 0.035, 0.3), ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ y: -8, scale: 1.035 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection(item.targetId)}
          >
            <div className="overflow-hidden border border-line bg-white shadow-[0_20px_70px_rgba(17,17,17,0.06)] transition duration-500 group-hover:shadow-[0_30px_90px_rgba(17,17,17,0.12)]">
              {item.type === 'video' ? (
                <HeroVideoCard item={item} />
              ) : (
                <FallbackImage
                  src={item.image}
                  fallbackSrcs={item.fallbackImages}
                  alt={item.titleCn}
                  className="w-full bg-[#F1F1EF]"
                  imageClassName="block h-auto w-full bg-white object-contain"
                  placeholder={`${item.titleEn}\nComing Soon`}
                />
              )}
            </div>

            <div className="mt-5 max-w-[520px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent transition group-hover:text-accent">
                {item.label}
              </p>
              <p className="mt-2 text-[15px] font-semibold leading-tight text-[#222222]">{item.titleEn}</p>
              <p className="mt-1 text-[14px] font-medium leading-6 text-[#555555]">{item.titleCn}</p>
              <p className="mt-2 line-clamp-2 text-[12px] leading-6 text-muted">{item.descriptionCn}</p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default HeroHorizontalGallery;
