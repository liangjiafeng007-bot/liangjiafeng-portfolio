import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import { capabilities } from '../data/capabilities';

function Capabilities() {
  return (
    <section id="capabilities" className="section-pad bg-paper">
      <div className="section-shell">
        <FadeIn>
          <div className="grid gap-10 border-b border-line pb-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Capabilities / 核心能力</p>
              <h2 className="cn-title">品牌经理视角下的能力结构。</h2>
            </div>
            <p className="body-copy max-w-4xl lg:pt-12">
              从市场判断、品牌定位到产品品牌化、视觉体系和内容转化，我的价值不在单点执行，而在把上下游判断连接成可落地的品牌经营方法。
            </p>
          </div>
        </FadeIn>

        <motion.div
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {capabilities.map((item) => (
            <motion.article
              key={item.id}
              className="group border border-line bg-white p-7 transition hover:-translate-y-1 hover:border-accent/40"
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            >
              <p className="text-lg font-bold text-accent">{item.id}</p>
              <h3 className="mt-8 text-2xl font-bold leading-tight text-ink">{item.title}</h3>
              <p className="mt-2 text-lg font-semibold text-[#4A4A4A]">{item.cnTitle}</p>
              <p className="mt-6 text-sm leading-7 text-muted">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Capabilities;
