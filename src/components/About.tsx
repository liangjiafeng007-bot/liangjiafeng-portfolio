import FadeIn from './FadeIn';
import FallbackImage from './FallbackImage';
import { resume } from '../data/resume';

function About() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="section-shell">
        <FadeIn>
          <div className="grid gap-12 lg:grid-cols-[420px_1fr] xl:gap-20">
            <div>
              <p className="eyebrow">About / 关于我</p>
              <div className="image-frame mt-10 aspect-[4/5] max-w-[360px] bg-[#F1F1EF]">
                <FallbackImage src="/avatar.jpg" alt="梁嘉峰头像" className="h-full w-full object-cover" placeholder="Avatar Placeholder" />
              </div>
              <div className="mt-8 border-t border-line pt-6 text-sm leading-7 text-muted">
                <p>{resume.experience.title}</p>
                <p>{resume.experience.company}</p>
                <p>{resume.experience.period}</p>
              </div>
            </div>

            <div>
              <h2 className="cn-title">不是单一视觉执行，而是把策略、产品和内容打通。</h2>
              <div className="mt-10 grid gap-6">
                {resume.intro.map((paragraph) => (
                  <p key={paragraph} className="body-copy max-w-5xl">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {resume.tags.map((tag) => (
                  <span className="pill" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-14 grid gap-4 border-t border-line pt-8 md:grid-cols-4">
                {resume.stats.map((stat) => (
                  <div key={stat.label} className="white-card p-6">
                    <p className="text-4xl font-bold text-accent">{stat.value}</p>
                    <p className="mt-4 text-sm leading-6 text-[#5A5A5A]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default About;
