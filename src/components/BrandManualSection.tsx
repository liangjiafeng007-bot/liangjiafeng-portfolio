import { motion } from 'framer-motion';
import ImageShowcase from './ImageShowcase';

const brandManualImages = Array.from({ length: 28 }, (_, index) => {
  const number = String(index + 1).padStart(2, '0');
  return {
    id: number,
    src: `/assets/brand-manual/brand-manual-${number}.jpg`,
    fallbackSrcs: [`/assets/brand-manual/brand-manual-${number}.png`],
  };
});

function BrandManualSection() {
  return (
    <section id="brand-manual" className="bg-white py-24 lg:py-36">
      <div className="section-shell">
        <motion.div
          className="mx-auto max-w-[1500px] border-b border-line pb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="eyebrow">Brand Manual</p>
          <h2 className="mt-5 text-4xl font-bold leading-tight text-ink md:text-6xl">蓝宝品牌手册</h2>
          <p className="mt-6 max-w-4xl text-base leading-8 text-[#4A4A4A]">
            BLAUPUNKT 品牌手册内容用于展示品牌视觉规范、CMF 规范、内容表达标准与品牌资产沉淀。
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-[1500px] gap-16 lg:gap-20">
          {brandManualImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: Math.min(index * 0.04, 0.18), ease: [0.25, 0.1, 0.25, 1] }}
            >
              <ImageShowcase
                src={image.src}
                fallbackSrcs={image.fallbackSrcs}
                alt={`BLAUPUNKT Brand Manual ${image.id}`}
                className="w-full border border-line bg-white shadow-[0_24px_80px_rgba(17,17,17,0.06)]"
                imageClassName="h-auto w-full object-contain"
                width={5160}
                height={2900}
                placeholder={'BLAUPUNKT Brand Manual\nComing Soon'}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandManualSection;
