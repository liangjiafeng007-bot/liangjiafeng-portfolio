import { AnimatePresence, motion } from 'framer-motion';
import type { HeroItem } from '../data/heroItems';
import FallbackImage from './FallbackImage';
import HeroVideo from './HeroVideo';

type HeroShowcaseProps = {
  item: HeroItem;
  onNavigate: (targetId: string) => void;
};

function HeroShowcase({ item, onNavigate }: HeroShowcaseProps) {
  return (
    <div className="pointer-events-none relative mx-auto w-[min(68vw,920px)]">
      <div className="mb-4 flex items-end justify-between border-b border-line pb-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">{item.label}</p>
          <p className="mt-1 text-[12px] uppercase tracking-[0.14em] text-muted">{item.title}</p>
        </div>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            data-active-hero-item={item.id}
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="pointer-events-auto relative z-10 cursor-grab active:cursor-grabbing"
            drag
            dragConstraints={{ left: -260, right: 260, top: -160, bottom: 160 }}
            dragMomentum={false}
            dragElastic={0.18}
            whileHover={{ scale: 1.006 }}
            whileDrag={{ scale: 1.025, rotate: 0.35 }}
            style={{ touchAction: 'none' }}
          >
            {item.type === 'video' ? (
              <HeroVideo
                videoSrc={item.video}
                fallbackVideos={item.fallbackVideos}
                posterSrc={item.poster}
                showMeta={false}
                placeholder={item.fallback}
              />
            ) : (
              <button type="button" className="block w-full cursor-pointer text-left" onClick={() => onNavigate(item.targetId)}>
                <div className="aspect-video w-full overflow-hidden border border-line bg-white shadow-[0_28px_90px_rgba(17,17,17,0.10)]">
                  <FallbackImage
                    src={item.image ?? ''}
                    fallbackSrcs={item.fallbackImages}
                    alt={item.title}
                    className="h-full w-full bg-[#F1F1EF]"
                    imageClassName="h-full w-full bg-white object-contain"
                    placeholder={item.fallback}
                  />
                </div>
              </button>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute -bottom-12 left-[8%] right-[8%] h-16 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(17,17,17,0.16),rgba(17,17,17,0.04)_45%,rgba(17,17,17,0)_72%)] blur-sm" />
        <div className="pointer-events-none absolute -bottom-20 left-[16%] right-[16%] h-20 bg-gradient-to-b from-[#D8D8D2]/40 to-transparent opacity-50 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.35),transparent)]" />
      </div>

      <div className="pointer-events-auto mt-12 flex items-center justify-between gap-4">
        <p className="text-[12px] leading-6 text-muted">以动态影像与作品入口承接品牌视觉、产品场景与内容传播。</p>
        <button
          type="button"
          className="shrink-0 text-[12px] font-semibold uppercase tracking-[0.16em] text-accent transition hover:translate-x-1"
          onClick={() => onNavigate(item.targetId)}
        >
          View Section →
        </button>
      </div>
    </div>
  );
}

export default HeroShowcase;
