import FadeIn from './FadeIn';
import FallbackImage from './FallbackImage';
import type { Project } from '../data/projects';

type ProjectDetailProps = {
  project: Project;
};

function ProjectDetail({ project }: ProjectDetailProps) {
  const fields = [
    ['项目背景', project.detail.background],
    ['核心问题', project.detail.problem],
    ['我的判断', project.detail.judgment],
    ['项目价值', project.detail.value],
  ];

  return (
    <FadeIn>
      <aside className="sticky top-28 border border-line bg-white p-6 shadow-[0_18px_60px_rgba(17,17,17,0.05)] lg:p-8">
        <div className="flex items-start justify-between gap-6 border-b border-line pb-6">
          <div>
            <p className="eyebrow">Project Detail</p>
            <h3 className="mt-4 text-2xl font-bold leading-tight text-ink">{project.name}</h3>
          </div>
          <span className="text-2xl font-bold text-accent">{project.id}</span>
        </div>

        <div className="mt-7 grid gap-6">
          {fields.map(([label, value]) => (
            <div key={label}>
              <p className="text-sm font-semibold text-accent">{label}</p>
              <p className="mt-2 text-sm leading-7 text-[#4A4A4A]">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 border-t border-line pt-7 md:grid-cols-2 lg:grid-cols-1">
          <div>
            <p className="text-sm font-semibold text-ink">我做了什么</p>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-[#5A5A5A]">
              {project.detail.actions.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">输出成果</p>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-[#5A5A5A]">
              {project.detail.outputs.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3">
          {project.gallery.slice(0, 4).map((image) => (
            <div className="image-frame aspect-[16/10]" key={image}>
              <FallbackImage src={image} alt={`${project.name} 视觉成果`} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </aside>
    </FadeIn>
  );
}

export default ProjectDetail;
