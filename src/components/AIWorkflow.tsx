import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const steps = [
  {
    id: '01',
    title: 'Portfolio Structure',
    body: '梳理作品集逻辑，提炼品牌经理视角的内容主线。',
  },
  {
    id: '02',
    title: 'Strategy Translation',
    body: '将品牌策略分析报告转化为网页化的信息结构，让分析逻辑更易浏览和理解。',
  },
  {
    id: '03',
    title: 'Visual Direction',
    body: '用 AI 探索网站视觉方向，包括白底、玫红、留白、卡片、细线和交互氛围。',
  },
  {
    id: '04',
    title: 'Web Generation & Iteration',
    body: '通过 React + TypeScript + Tailwind + Framer Motion 将作品集与策略报告转化为可浏览的网站页面，并根据截图、素材和参考网站持续优化。',
  },
];

function AIWorkflow() {
  return (
    <section id="ai-workflow" className="section-pad bg-white">
      <div className="section-shell">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">AI Workflow / AI 辅助品牌表达</p>
              <h2 className="cn-title">AI 不是炫技，而是把抽象策略更快可视化。</h2>
            </div>
            <p className="body-copy max-w-4xl lg:pt-12">
              我将 AI 作为品牌和视觉前期探索工具，用于快速生成视觉方向、验证人物状态、产品场景、CMF 氛围和网页表达方式。AI 不替代品牌判断，而是帮助我更快地把抽象策略可视化，提高沟通效率和决策效率。
            </p>
          </div>
        </FadeIn>

        <motion.div
          className="mt-16 grid border-t border-line"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className="grid gap-8 border-b border-line py-8 md:grid-cols-[120px_0.7fr_1fr]"
              variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
            >
              <p className="text-3xl font-bold text-accent">{step.id}</p>
              <h3 className="text-2xl font-bold text-ink">{step.title}</h3>
              <p className="text-base leading-8 text-[#555555]">{step.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default AIWorkflow;
