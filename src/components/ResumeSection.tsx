import { motion } from 'framer-motion';
import ImageShowcase from './ImageShowcase';

function ResumeSection() {
  return (
    <section id="resume" className="bg-white py-24 lg:py-36">
      <div className="section-shell">
        <motion.div
          className="mx-auto max-w-[1500px] border-b border-line pb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="eyebrow">Resume</p>
          <h2 className="mt-5 text-4xl font-bold leading-tight text-ink md:text-6xl">个人简历</h2>
          <p className="mt-6 text-base leading-8 text-[#4A4A4A]">
            品牌经理 / 品牌视觉策略负责人 / 产品品牌化
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 max-w-[1500px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ImageShowcase
            src="/assets/portfolio/pages/portfolio-page-02.png"
            alt="梁嘉峰个人简历"
            className="w-full border border-line bg-white shadow-[0_24px_80px_rgba(17,17,17,0.06)]"
            imageClassName="h-auto w-full object-contain"
            placeholder="请把简历图片放到 public/assets/resume/resume-01.jpg"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default ResumeSection;
