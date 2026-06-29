import { motion } from 'framer-motion';
import type { Project } from '../data/projects';
import ImageShowcase from './ImageShowcase';

type ProjectCardProps = {
  project: Project;
};

const projectDisplay: Record<string, { name: string; summary: string }> = {
  '01': {
    name: 'BLAUPUNKT 蓝宝中国品牌策略与视觉体系',
    summary: '从授权 Logo 到品牌化经营，建立蓝宝中国市场的品牌定位、视觉体系与产品品牌化路径。',
  },
  '02': {
    name: 'BLAUPUNKT CMF 策略与产品品牌化升级',
    summary: '在不大改结构和成本受限的条件下，通过色彩、材质、工艺和细节控制提升产品识别度与品牌感。',
  },
  '03': {
    name: 'BLAUPUNKT AI 视觉验证流程',
    summary: '将 AI 纳入前期视觉探索，用于快速验证产品风格、人物状态、场景情绪和品牌调性。',
  },
  '04': {
    name: 'Nanna 兔品牌 IP 与内容传播',
    summary: '为理性、硬件属性较强的消费电子品牌建立人格化内容入口，降低用户互动门槛。',
  },
  '05': {
    name: 'SoundTrip 产品品牌化与商业转化',
    summary: '围绕便携音响产品建立从产品感知、CMF升级、视觉表达、达人传播到电商承接的转化链路。',
  },
  '06': {
    name: 'REAL YOUNG 饰品耳机品牌视觉升级',
    summary: '将耳机从单纯音频产品转向女性饰品化表达，强化时尚感、悦己感和品牌识别。',
  },
  '07': {
    name: '青少年学习耳机品牌方向',
    summary: '围绕学习、专注、舒适和成长场景，建立青少年学习耳机的品牌表达方向。',
  },
  '08': {
    name: 'Kodak / 其他视觉与电商项目',
    summary: '围绕品牌色、产品卖点和平台转化需求，完成电商视觉、包装和传播物料设计。',
  },
};

function ProjectCard({ project }: ProjectCardProps) {
  const display = projectDisplay[project.id] ?? { name: project.name, summary: project.summary };
  const tagLine = project.tags.join(' / ');

  return (
    <motion.article
      id={`project-${project.id}`}
      className="scroll-mt-24 border-t border-line py-16 lg:py-24 [&+&]:mt-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="grid gap-5 md:grid-cols-[80px_minmax(0,1fr)] xl:grid-cols-[80px_minmax(0,1fr)_minmax(220px,360px)] xl:items-start">
        <p className="text-2xl font-bold leading-none text-accent md:text-3xl">{project.id}</p>
        <div>
          <h3 className="text-2xl font-bold leading-tight text-ink md:text-4xl">{display.name}</h3>
        </div>
        <p className="max-w-md text-xs font-semibold uppercase leading-6 tracking-[0.16em] text-muted xl:text-right">
          {tagLine}
        </p>
      </div>

      <ImageShowcase
        src={project.cover}
        alt={display.name}
        className="mt-9 w-full border border-line bg-white shadow-[0_24px_80px_rgba(17,17,17,0.06)]"
        imageClassName="h-auto w-full object-contain"
        placeholder="Portfolio Image Placeholder"
      />

      <div className="mt-5 flex flex-col gap-3 text-sm leading-7 text-[#5F5F5F] md:flex-row md:items-center md:justify-between">
        <p className="max-w-4xl">{display.summary}</p>
        <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-accent">View Detail</span>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
