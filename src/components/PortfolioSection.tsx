import { motion } from 'framer-motion';
import { Fragment } from 'react';
import ImageShowcase from './ImageShowcase';

type PortfolioImage =
  | string
  | {
      src: string;
      fallbackSrcs?: string[];
    };

const pageName = (num: number) => `portfolio-page-${String(num).padStart(2, '0')}`;
const originalPage = (num: number) => `/assets/portfolio/pages/${pageName(num)}.png`;
const optimizedJpegPage = (num: number) => `/assets/portfolio/pages-optimized/${pageName(num)}.jpg`;
const page = (num: number): PortfolioImage => ({
  src: optimizedJpegPage(num),
  fallbackSrcs: [originalPage(num)],
});
const portfolio06Page = (num: number): PortfolioImage => ({
  src: optimizedJpegPage(num),
  fallbackSrcs: [originalPage(num)],
});

const portfolioSections = [
  {
    id: '01',
    title: '个人核心能力 / 个人定位',
    intro: '用作品集原图呈现个人定位、核心能力和品牌经理视角。',
    images: [page(3), page(4), page(5)],
  },
  {
    id: '02',
    title: 'BLAUPUNKT 蓝宝品牌策略与视觉体系',
    intro: '从品牌定位、视觉策略、内容表达和 AI 验证呈现蓝宝品牌视觉资产构建。',
    images: [page(6), page(7), page(8), page(9), page(10), page(11), page(12)],
  },
  {
    id: '03',
    title: '产品品牌化与 CMF 升级',
    intro: '通过 CMF、产品定义和细节控制，呈现 ODM 产品向品牌产品的升级路径。',
    images: [page(13), page(14), page(15), page(16), page(17), page(18)],
  },
  {
    id: '04',
    title: 'IP 与内容传播',
    intro: '以 Nanna 兔 IP 为核心，呈现品牌人格化资产和内容传播体系。',
    images: [page(19), page(20), page(21), page(22), page(23), page(24), page(25)],
  },
  {
    id: '05',
    title: '商业转化 / TVC / 项目成果',
    intro: '以 SoundTrip 为例，呈现产品感知、内容种草、渠道验证和商业转化结果。',
    images: [page(26), page(27), page(28)],
  },
  {
    id: '06',
    title: '其他项目 / 视觉与品牌案例',
    intro: '呈现 REAL YOUNG、青少年学习耳机、Kodak 与其他视觉品牌案例。',
    images: [
      portfolio06Page(29),
      portfolio06Page(30),
      portfolio06Page(31),
      portfolio06Page(32),
      portfolio06Page(33),
      portfolio06Page(34),
      portfolio06Page(35),
      portfolio06Page(36),
      portfolio06Page(37),
      portfolio06Page(38),
      portfolio06Page(39),
    ],
  },
];

function FeaturedTvcSection() {
  return (
    <motion.article
      id="portfolio-tvc"
      className="scroll-mt-24 border-t border-line pt-14"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="mx-auto grid max-w-[1500px] gap-5 md:grid-cols-[80px_minmax(0,1fr)]">
        <p className="pt-1 text-3xl font-bold leading-none text-accent">TVC</p>
        <div className="max-w-[1120px]">
          <p className="eyebrow text-accent">Featured TVC</p>
          <h3 className="mt-3 text-3xl font-bold leading-tight text-ink md:text-5xl">BLAUPUNKT Brand Film</h3>
          <p className="mt-3 text-xl font-semibold leading-8 text-ink">蓝宝 TVC 品牌内容视频</p>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#5F5F5F]">
            以动态影像承接蓝宝品牌视觉、产品场景与内容传播，作为品牌视觉体系与内容资产的一部分，强化用户对品牌调性、场景感和产品感知的第一印象。
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1400px]">
        <div className="overflow-hidden border border-line bg-white shadow-[0_24px_80px_rgba(17,17,17,0.06)]">
          <video
            src="/assets/video/blaupunkt-tvc.mp4"
            poster="/assets/video/blaupunkt-tvc-poster.jpg"
            controls
            playsInline
            preload="metadata"
            className="block aspect-video w-full bg-[#F1F1EF] object-contain"
          />
        </div>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Brand Film / Visual System / Product Communication
        </p>
      </div>
    </motion.article>
  );
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-paper py-24 lg:py-36">
      <div className="section-shell">
        <motion.div
          className="mx-auto max-w-[1500px] border-b border-line pb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="eyebrow">Portfolio</p>
          <h2 className="mt-5 text-4xl font-bold leading-tight text-ink md:text-6xl">作品集</h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#4A4A4A]">
            按照原作品集 01-06 章节展示，图片为主体，文字仅作为浏览索引。
          </p>
        </motion.div>

        <div className="mt-20 space-y-32">
          {portfolioSections.map((section) => (
            <Fragment key={section.id}>
              <motion.article
                id={`portfolio-${section.id}`}
                className="scroll-mt-24 border-t border-line pt-14 first:border-t-0 first:pt-0"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="mx-auto grid max-w-[1500px] gap-5 md:grid-cols-[80px_minmax(0,1fr)]">
                  <p className="pt-1 text-3xl font-bold leading-none text-accent">{section.id}</p>
                  <div className="max-w-[1120px]">
                    <h3 className="text-3xl font-bold leading-tight text-ink md:text-5xl">{section.title}</h3>
                    <p className="mt-5 max-w-3xl text-sm leading-7 text-[#5F5F5F]">{section.intro}</p>
                  </div>
                </div>

                <div className="mx-auto mt-12 grid max-w-[1500px] gap-16 lg:gap-20">
                  {section.images.map((image, index) => {
                    const imageSrc = typeof image === 'string' ? image : image.src;
                    const fallbackSrcs = typeof image === 'string' ? [] : image.fallbackSrcs;
                    const shouldPreload = index === 0;

                    return (
                      <motion.div
                        key={imageSrc}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.08 }}
                        transition={{ duration: 0.8, delay: Math.min(index * 0.03, 0.18), ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        <ImageShowcase
                          src={imageSrc}
                          fallbackSrcs={fallbackSrcs}
                          alt={`${section.id} ${section.title} ${index + 1}`}
                          className="w-full border border-line bg-white shadow-[0_24px_80px_rgba(17,17,17,0.06)]"
                          imageClassName="h-auto w-full object-contain"
                          loading={shouldPreload ? 'eager' : 'lazy'}
                          fetchPriority={index === 0 ? 'high' : 'auto'}
                          width={5160}
                          height={2900}
                          placeholder="Portfolio Image Placeholder"
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </motion.article>
              {section.id === '01' ? <FeaturedTvcSection /> : null}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
