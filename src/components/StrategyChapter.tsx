import { motion } from 'framer-motion';
import ImageShowcase from './ImageShowcase';

type StrategyChapterItem = {
  id: string;
  title: string;
  english: string;
};

type StrategyChapterProps = {
  chapter: StrategyChapterItem;
  image: string;
  fallbackSrcs?: string[];
  caption: string;
};

function StrategyChapter({ chapter, image, fallbackSrcs = [], caption }: StrategyChapterProps) {
  return (
    <motion.article
      id={`strategy-${chapter.id}`}
      className="scroll-mt-24 border-t border-line pt-8 first:border-t-0 first:pt-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="mb-8 grid gap-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
        <div className="max-w-[880px]">
          <h3 className="text-[clamp(1.45rem,1.7vw,2rem)] font-semibold leading-tight text-ink">{chapter.title}</h3>
          <p className="mt-3 max-w-2xl text-[13px] leading-6 text-[#666666]">{caption}</p>
        </div>
        <div className="flex shrink-0 items-start gap-4 md:min-w-[320px] md:justify-end md:gap-5 md:text-right">
          <p className="text-[clamp(1.35rem,1.55vw,1.8rem)] font-semibold leading-none text-accent">{chapter.id}</p>
          <p className="pt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">{chapter.english}</p>
        </div>
      </div>

      <ImageShowcase
        src={image}
        fallbackSrcs={fallbackSrcs}
        alt={`${chapter.id} ${chapter.title}`}
        className="w-full border border-line bg-white shadow-[0_24px_80px_rgba(17,17,17,0.06)]"
        imageClassName="h-auto w-full object-contain"
        placeholder="请把策略报告图片复制到 public/assets/strategy/"
      />
    </motion.article>
  );
}

export default StrategyChapter;
