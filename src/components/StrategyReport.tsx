import { motion } from 'framer-motion';
import StrategyChapter from './StrategyChapter';

const strategyImage = (id: string) => `/assets/strategy/strateg-${id}.jpg`;

const reportChapters = [
  {
    id: '01',
    english: 'Project Background',
    title: '项目背景与问题诊断',
    caption: '以报告原图呈现项目背景、授权模式与品牌问题判断。',
  },
  {
    id: '02',
    english: 'Market Opportunity',
    title: '外部环境与市场机会',
    caption: '以报告原图呈现中国音频市场与内容电商环境中的机会。',
  },
  {
    id: '03',
    english: 'PEST Analysis',
    title: 'PEST Analysis',
    caption: '以报告原图呈现政策、经济、社会与技术环境判断。',
  },
  {
    id: '04',
    english: 'Porter’s Five Forces',
    title: 'Porter’s Five Forces',
    caption: '以报告原图呈现行业竞争强度与品牌切入边界。',
  },
  {
    id: '05',
    english: 'SWOT + TOWS',
    title: 'SWOT + TOWS',
    caption: '以报告原图呈现蓝宝中国市场的核心优势、短板、机会与威胁。',
  },
  {
    id: '06',
    english: 'TOWS Strategy',
    title: 'TOWS 策略',
    caption: '以报告原图呈现从诊断到策略动作的推导路径。',
  },
  {
    id: '07',
    english: 'Competitor & User Insight',
    title: '竞品分析与用户洞察',
    caption: '以报告原图呈现竞品格局、用户类型与品牌位置选择。',
  },
  {
    id: '08',
    english: 'STP Positioning',
    title: 'STP 品牌定位',
    caption: '以报告原图呈现市场细分、目标人群与品牌定位表达。',
  },
  {
    id: '09',
    english: 'Brand House',
    title: '品牌屋',
    caption: '以报告原图呈现品牌愿景、使命、定位、支柱与基石。',
  },
  {
    id: '10',
    english: 'Product Matrix',
    title: '产品矩阵与选品开品策略',
    caption: '以报告原图呈现产品矩阵、开品标准与商业优先级。',
  },
  {
    id: '11',
    english: 'CMF & Content Strategy',
    title: 'CMF 与内容传播策略',
    caption: '以报告原图呈现 CMF、视觉与内容转化的协同路径。',
  },
  {
    id: '12',
    english: 'Business Model Canvas',
    title: 'BLAUPUNKT 商业画布',
    caption: '以报告原图呈现价值主张、渠道、资源与收入结构。',
  },
  {
    id: '13',
    english: 'Strategy Summary',
    title: '项目总结与落地',
    caption: '以报告原图呈现品牌升级的落地路径与执行重点。',
  },
  {
    id: '14',
    english: 'Report Closing',
    title: '策略报告总结页',
    caption: '以报告原图呈现策略分析的收束页面。',
  },
];

function StrategyReport() {
  return (
    <section id="strategy" className="bg-white py-24 lg:py-36">
      <div className="section-shell">
        <motion.header
          className="mx-auto max-w-[1560px] pb-16 md:pb-24 lg:pb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="eyebrow">Strategy Report</p>
          <p className="mt-14 max-w-[1240px] text-[clamp(1.35rem,5vw,2.5rem)] font-medium leading-[1.42] text-[#777777] md:mt-28 md:leading-[1.38]">
            基于蓝宝在中国市场的品牌处境、授权模式、ODM 产品现状、外部竞争、用户场景与内容电商环境，梳理蓝宝音频如何从单纯依赖品牌 Logo，转向以品牌策略、产品品牌化、CMF、视觉体系、内容转化和商业承接驱动的品牌化经营。
          </p>

          <div className="mt-12 grid border-y border-line md:mt-20 md:grid-cols-3">
            <div className="border-b border-line py-8 md:border-b-0 md:border-r md:pr-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">Report</p>
              <p className="mt-4 text-lg font-semibold leading-7 text-ink">蓝宝中国市场品牌升级策略分析</p>
            </div>
            <div className="border-b border-line py-8 md:border-b-0 md:border-r md:px-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">Discipline</p>
              <p className="mt-4 text-lg font-semibold leading-8 text-ink">
                Brand Strategy
                <br />
                Market Analysis
                <br />
                Product Branding
              </p>
            </div>
            <div className="py-8 md:pl-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">Year</p>
              <p className="mt-4 text-lg font-semibold leading-7 text-ink">2026</p>
            </div>
          </div>
        </motion.header>

        <div className="mx-auto grid max-w-[1560px] gap-20 md:gap-28 lg:gap-36">
          {reportChapters.map((chapter) => (
            <StrategyChapter key={chapter.id} chapter={chapter} image={strategyImage(chapter.id)} caption={chapter.caption} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StrategyReport;
