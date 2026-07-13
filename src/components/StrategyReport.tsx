import { motion } from 'framer-motion';
import StrategyChapter from './StrategyChapter';

const strategyImage = (id: string) => `/assets/strategy/strateg-${id}.jpg`;
const strategyFallbackImages = (id: string) => [
  `/assets/strategy-optimized/strateg-${id}.webp`,
  `/assets/strategy/strateg-${id}.png`,
  `/assets/strategy/strateg-${id}.jpeg`,
];

const reportChapters = [
  {
    id: '01',
    english: 'Report Cover',
    title: '策略报告封面',
    caption: '以报告原图呈现蓝宝中国市场品牌升级策略分析的核心命题与报告基调。',
  },
  {
    id: '02',
    english: 'Project Background',
    title: '项目背景与问题诊断',
    caption: '梳理授权模式下的品牌认知、产品同质化、内容表达与购买理由问题。',
  },
  {
    id: '03',
    english: 'Market Opportunity',
    title: '外部环境与市场机会',
    caption: '分析中国音频市场与内容电商环境中可被蓝宝承接的场景化机会。',
  },
  {
    id: '04',
    english: 'PEST Analysis',
    title: 'PEST 外部环境判断',
    caption: '从政策平台、经济、社会用户与技术环境判断品牌升级的外部条件。',
  },
  {
    id: '05',
    english: "Porter's Five Forces",
    title: '波特五力分析',
    caption: '判断行业竞争强度、进入威胁、替代品、供应链与买方议价压力。',
  },
  {
    id: '06',
    english: 'SWOT Analysis',
    title: 'SWOT 核心判断',
    caption: '提炼蓝宝中国市场的优势、劣势、机会与威胁，明确策略推导基础。',
  },
  {
    id: '07',
    english: 'TOWS Strategy',
    title: 'TOWS 策略推导',
    caption: '将 SWOT 判断转化为可执行的品牌升级动作与经营路径。',
  },
  {
    id: '08',
    english: 'Competitor & User Insight',
    title: '竞品分析与用户洞察',
    caption: '对比不同音频品牌竞争位置，拆解目标用户场景与购买动机。',
  },
  {
    id: '09',
    english: 'STP Positioning',
    title: 'STP 品牌定位',
    caption: '从市场细分、目标用户与定位表达，建立蓝宝场景化音频品牌位置。',
  },
  {
    id: '10',
    english: 'Brand House',
    title: '品牌屋',
    caption: '呈现品牌愿景、使命、定位、口号、战略支柱与品牌基石。',
  },
  {
    id: '11',
    english: 'Product Matrix',
    title: '产品矩阵与选品开品策略',
    caption: '建立产品矩阵、选品标准与商业优先级，避免单纯扩充 SKU。',
  },
  {
    id: '12',
    english: 'CMF & Content Strategy',
    title: 'CMF 与内容传播策略',
    caption: '通过 CMF、视觉体系与内容转化链路，让品牌价值落到产品和传播中。',
  },
  {
    id: '13',
    english: 'Business Model Canvas',
    title: 'BLAUPUNKT 商业画布',
    caption: '以商业画布梳理伙伴、活动、资源、价值主张、渠道、成本与收入结构。',
  },
  {
    id: '14',
    english: 'Strategy Summary',
    title: '项目总结与落地',
    caption: '总结蓝宝音频从授权 Logo 到品牌化经营的关键路径与落地重点。',
  },
];

function StrategyReport() {
  return (
    <section id="strategy" className="bg-white py-24 lg:py-36">
      <div className="section-shell">
        <motion.header
          className="mx-auto max-w-[1560px] pb-20 pt-3 md:pb-28 lg:pb-36"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="eyebrow">Strategy Report</p>

          <div className="mt-16 max-w-[920px] md:mt-28">
            <h2 className="max-w-[760px] text-[clamp(2.4rem,5.2vw,5.2rem)] font-semibold leading-[1.08] text-ink">
              从授权 Logo 到品牌化经营
            </h2>
            <p className="mt-8 max-w-[780px] text-[clamp(0.98rem,1.25vw,1.18rem)] font-normal leading-[2] text-[#6f6f6f]">
              基于蓝宝在中国市场的品牌处境、授权模式、ODM 产品现状，以及外部竞争、用户场景与内容电商环境，梳理蓝宝音频从“依赖 Logo 授权”走向“品牌化经营”的升级路径，并建立品牌策略、产品品牌化、CMF、视觉体系、内容转化与商业承接协同推进的品牌经营逻辑。
            </p>
          </div>

          <div className="mt-16 grid max-w-[1120px] border-y border-line md:mt-24 md:grid-cols-3">
            <div className="border-b border-line py-7 md:border-b-0 md:border-r md:pr-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">Report</p>
              <p className="mt-4 text-base font-semibold leading-7 text-ink">蓝宝中国市场品牌升级策略分析</p>
            </div>
            <div className="border-b border-line py-7 md:border-b-0 md:border-r md:px-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">Discipline</p>
              <p className="mt-4 text-base font-semibold leading-8 text-ink">
                Brand Strategy
                <br />
                Market Analysis
                <br />
                Product Branding
              </p>
            </div>
            <div className="py-7 md:pl-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">Year</p>
              <p className="mt-4 text-base font-semibold leading-7 text-ink">2026</p>
            </div>
          </div>
        </motion.header>

        <div className="mx-auto grid max-w-[1560px] gap-20 md:gap-28 lg:gap-36">
          {reportChapters.map((chapter) => (
            <StrategyChapter
              key={chapter.id}
              chapter={chapter}
              image={strategyImage(chapter.id)}
              fallbackSrcs={strategyFallbackImages(chapter.id)}
              caption={chapter.caption}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StrategyReport;
