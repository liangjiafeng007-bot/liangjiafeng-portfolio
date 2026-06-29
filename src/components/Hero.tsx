import { motion } from 'framer-motion';
import HeroHorizontalGallery from './HeroHorizontalGallery';

function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-[#FAFAF8] pb-8 md:min-h-[100vh] md:pb-0">
      <div className="pointer-events-none mx-6 pt-20 md:absolute md:left-[clamp(24px,4vw,72px)] md:top-24 md:mx-0 md:pt-0">
        <div className="h-px w-16 bg-accent" />
      </div>

      <motion.div
        className="relative z-10 mx-6 mt-16 max-w-[520px] text-[12px] leading-6 text-muted md:absolute md:left-[clamp(24px,5vw,88px)] md:top-[clamp(116px,15vh,168px)] md:mx-0 md:mt-0 md:text-[13px]"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#666666]">LIANG JIAFENG</p>
        <h1 className="mt-3 text-[clamp(22px,2vw,30px)] font-semibold leading-tight text-accent">梁嘉峰</h1>
        <p className="mt-4 text-[#777777]">品牌经理 / 品牌视觉策略负责人</p>
        <p className="mt-1 text-[#8A8A8A]">Brand Strategy x Visual System x Product Branding</p>
        <p className="mt-6 max-w-full text-[13px] leading-7 text-[#6F6F6F] md:mt-8 md:max-w-[500px]">
          聚焦消费品牌升级与产品品牌化。
          <br />
          从市场洞察、品牌定位、产品定义到 CMF 策略、视觉体系与内容传播，
          <br />
          推动产品从“通用品”向“品牌货”转化。
        </p>
      </motion.div>

      <HeroHorizontalGallery />

      <motion.div
        className="relative z-10 mx-6 mt-10 text-[13px] leading-6 text-muted md:absolute md:bottom-[clamp(28px,5vw,72px)] md:left-[clamp(24px,5vw,88px)] md:mx-0 md:mt-0"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <a href="mailto:jiafeng.liang@qq.com" className="block transition hover:text-accent">
          Email: jiafeng.liang@qq.com
        </a>
        <a href="tel:137-630-50090" className="block transition hover:text-accent">
          Tel: 137-630-50090
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
