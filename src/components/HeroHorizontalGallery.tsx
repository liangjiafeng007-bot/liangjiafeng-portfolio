import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { PointerEvent } from 'react';
import FallbackImage from './FallbackImage';

type GalleryItem = {
  id: string;
  titleCn: string;
  type: 'video' | 'image';
  image?: string;
  fallbackImages?: string[];
  video?: string;
  poster?: string;
  targetId: string;
  size: 'large' | 'medium' | 'small';
};

const galleryItems: GalleryItem[] = [
  {
    id: 'tvc',
    titleCn: '蓝宝 TVC 品牌内容视频',
    type: 'video',
    video: '/assets/video/blaupunkt-tvc.mp4',
    poster: '/assets/video/blaupunkt-tvc-poster.jpg',
    fallbackImages: ['/assets/video/blaupunkt-tvc-poster.png'],
    targetId: 'portfolio-tvc',
    size: 'large',
  },
  {
    id: 'portfolio-01',
    titleCn: '个人能力',
    type: 'image',
    image: '/assets/portfolio/p01.jpg',
    fallbackImages: ['/assets/portfolio/pages/portfolio-page-03.png'],
    targetId: 'portfolio-01',
    size: 'medium',
  },
  {
    id: 'portfolio-02',
    titleCn: '蓝宝品牌视觉',
    type: 'image',
    image: '/assets/portfolio/p02.jpg',
    fallbackImages: ['/assets/portfolio/pages/portfolio-page-06.png'],
    targetId: 'portfolio-02',
    size: 'large',
  },
  {
    id: 'portfolio-03',
    titleCn: '产品品牌化与 CMF',
    type: 'image',
    image: '/assets/portfolio/p03.jpg',
    fallbackImages: ['/assets/portfolio/pages/portfolio-page-13.png'],
    targetId: 'portfolio-03',
    size: 'medium',
  },
  {
    id: 'portfolio-04',
    titleCn: 'IP 与内容传播',
    type: 'image',
    image: '/assets/portfolio/p04.jpg',
    fallbackImages: ['/assets/portfolio/pages/portfolio-page-20.png'],
    targetId: 'portfolio-04',
    size: 'small',
  },
  {
    id: 'portfolio-05',
    titleCn: '商业转化',
    type: 'image',
    image: '/assets/portfolio/p05.jpg',
    fallbackImages: ['/assets/portfolio/pages/portfolio-page-26.png'],
    targetId: 'portfolio-05',
    size: 'medium',
  },
  {
    id: 'portfolio-06',
    titleCn: '其他项目',
    type: 'image',
    image: '/assets/brand-manual/brand-manual-15.jpg',
    fallbackImages: ['/assets/brand-manual/brand-manual-15.png', '/assets/portfolio/pages/portfolio-page-35.png'],
    targetId: 'portfolio-06',
    size: 'large',
  },
  {
    id: 'resume',
    titleCn: '个人简历',
    type: 'image',
    image: '/assets/resume/resume-01.jpg',
    fallbackImages: ['/assets/portfolio/pages/portfolio-page-02.png'],
    targetId: 'resume',
    size: 'small',
  },
  {
    id: 'strategy',
    titleCn: '品牌策略分析',
    type: 'image',
    image: '/assets/strategy/strateg-12.jpg',
    targetId: 'strategy',
    size: 'large',
  },
  {
    id: 'brand-manual',
    titleCn: '蓝宝品牌手册',
    type: 'image',
    image: '/assets/brand-manual/brand-manual-15.jpg',
    fallbackImages: ['/assets/brand-manual/brand-manual-15.png', '/assets/brand-manual/brand-manual-17.png', '/assets/brand-manual/brand-manual-01.png'],
    targetId: 'brand-manual',
    size: 'medium',
  },
];

const duplicatedItems = [...galleryItems, ...galleryItems];

const sizeClasses: Record<GalleryItem['size'], string> = {
  large: 'w-[82vw] min-w-[280px] max-w-[380px] md:w-[clamp(560px,38vw,720px)] md:max-w-none',
  medium: 'w-[80vw] min-w-[270px] max-w-[360px] md:w-[clamp(460px,30vw,600px)] md:max-w-none',
  small: 'w-[76vw] min-w-[260px] max-w-[340px] md:w-[clamp(360px,24vw,480px)] md:max-w-none',
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

function HeroVideoCard({ item, priority }: { item: GalleryItem; priority: boolean }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <video
        src={item.video}
        poster={item.poster}
        controls
        playsInline
        preload="metadata"
        className="block aspect-video w-full bg-[#F1F1EF] object-contain"
        onClick={(event) => event.stopPropagation()}
      />
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-[#F1F1EF]">
      <FallbackImage
        src={item.poster}
        fallbackSrcs={item.fallbackImages}
        alt={item.titleCn}
        className="aspect-video w-full bg-[#F1F1EF]"
        imageClassName="block aspect-video w-full bg-white object-cover"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        width={960}
        height={540}
        placeholder={'BLAUPUNKT TVC\nVideo Coming Soon'}
      />
      <button
        type="button"
        aria-label="播放蓝宝 TVC"
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-full bg-white/88 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink shadow-[0_16px_44px_rgba(17,17,17,0.18)] backdrop-blur transition duration-300 hover:scale-105 hover:text-accent"
        onPointerDown={(event) => {
          event.stopPropagation();
          setPlaying(true);
        }}
        onClick={(event) => {
          event.stopPropagation();
          setPlaying(true);
        }}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-white">
          <Play size={15} fill="currentColor" />
        </span>
        <span className="hidden sm:inline">PLAY FILM / 播放视频</span>
      </button>
    </div>
  );
}

function HeroHorizontalGallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const dragMovedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const isPausedRef = useRef(false);
  const resumeTimerRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const pauseAuto = () => {
    isPausedRef.current = true;
    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  };

  const resumeAuto = (delay = 1200) => {
    if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = window.setTimeout(() => {
      isPausedRef.current = false;
      resumeTimerRef.current = null;
    }, delay);
  };

  useEffect(() => {
    let lastTime = 0;
    const speed = 0.018;

    const tick = (time: number) => {
      const scroller = scrollerRef.current;
      if (scroller && !isPausedRef.current && !isDraggingRef.current) {
        const delta = lastTime ? time - lastTime : 16;
        scroller.scrollLeft += delta * speed;

        const loopPoint = scroller.scrollWidth / 2;
        if (loopPoint > 0 && scroller.scrollLeft >= loopPoint) {
          scroller.scrollLeft -= loopPoint;
        }
      }

      lastTime = time;
      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const endDrag = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
    resumeAuto(1500);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    pauseAuto();
    isDraggingRef.current = true;
    dragMovedRef.current = false;
    dragStartXRef.current = event.clientX;
    dragStartScrollRef.current = scrollerRef.current?.scrollLeft ?? 0;
    setIsDragging(event.pointerType === 'mouse');
    if (event.pointerType === 'mouse') {
      event.currentTarget.setPointerCapture(event.pointerId);
    }
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const distance = event.clientX - dragStartXRef.current;
    if (Math.abs(distance) > 6) dragMovedRef.current = true;
    if (event.pointerType === 'mouse' && scrollerRef.current) {
      scrollerRef.current.scrollLeft = dragStartScrollRef.current - distance;
    }
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    endDrag();
  };

  return (
    <div
      ref={scrollerRef}
      data-hero-gallery
      className={`hero-horizontal-gallery relative z-0 mt-10 overflow-x-auto overflow-y-hidden px-6 pb-8 pt-4 [-webkit-overflow-scrolling:touch] [scroll-snap-type:x_mandatory] md:absolute md:inset-x-0 md:bottom-[13vh] md:mt-0 md:px-0 md:pb-4 md:pt-8 md:[scroll-snap-type:none] ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      onMouseEnter={pauseAuto}
      onMouseLeave={() => {
        if (!isDraggingRef.current) resumeAuto(1200);
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={endDrag}
      onPointerLeave={endDrag}
    >
      <div className="flex w-max items-end gap-5 pr-6 md:gap-14 md:pr-14">
        {duplicatedItems.map((item, index) => {
          const priority = index < 2;

          return (
            <motion.div
              key={`${item.id}-${index}`}
              role="button"
              tabIndex={0}
              data-target-id={item.targetId}
              className={`group block shrink-0 scroll-ml-6 text-left [scroll-snap-align:start] ${sizeClasses[item.size]}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: Math.min(index * 0.035, 0.3), ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -8, scale: 1.025 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                if (dragMovedRef.current) {
                  dragMovedRef.current = false;
                  return;
                }
                scrollToSection(item.targetId);
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  scrollToSection(item.targetId);
                }
              }}
            >
              <div className="overflow-hidden border border-line bg-white shadow-[0_20px_70px_rgba(17,17,17,0.06)] transition duration-500 group-hover:shadow-[0_30px_90px_rgba(17,17,17,0.12)]">
                {item.type === 'video' ? (
                  <HeroVideoCard item={item} priority={priority} />
                ) : (
                  <FallbackImage
                    src={item.image}
                    fallbackSrcs={item.fallbackImages}
                    alt={item.titleCn}
                    className="w-full bg-[#F1F1EF]"
                    imageClassName="block h-auto w-full bg-white object-contain"
                    loading={priority ? 'eager' : 'lazy'}
                    fetchPriority={priority ? 'high' : 'auto'}
                    width={1200}
                    height={675}
                    placeholder={`${item.titleCn}\nComing Soon`}
                  />
                )}
              </div>

              <p className="mt-4 whitespace-normal break-words text-[15px] font-medium leading-6 text-[#222222] md:mt-5 md:text-[16px]">
                {item.titleCn}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default HeroHorizontalGallery;
