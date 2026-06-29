import { motion } from 'framer-motion';

function Contact() {
  return (
    <footer id="contact" className="bg-paper">
      <div className="section-shell flex min-h-[72vh] flex-col justify-between border-t border-line py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="eyebrow">Contact</p>
          <h2 className="mt-8 max-w-4xl text-4xl font-bold leading-tight text-ink md:text-6xl">
            Let&apos;s build meaningful brand experiences.
          </h2>
          <p className="mt-8 text-base leading-8 text-[#666666] md:text-lg">期待与您进一步沟通</p>
        </motion.div>

        <div className="mt-24 grid gap-10 border-t border-line pt-8 text-sm leading-7 text-[#4A4A4A] md:grid-cols-3">
          <div>
            <p className="text-muted">© 2026 Liang Jiafeng</p>
          </div>

          <nav className="grid gap-2">
            <a href="#resume" className="transition hover:text-accent">
              Resume
            </a>
            <a href="#portfolio" className="transition hover:text-accent">
              Portfolio
            </a>
            <a href="#strategy" className="transition hover:text-accent">
              Strategy Report
            </a>
            <a href="#brand-manual" className="transition hover:text-accent">
              Brand Manual
            </a>
          </nav>

          <div className="flex flex-col gap-2 md:items-end md:text-right">
            <a href="mailto:jiafeng.liang@qq.com" className="transition hover:text-accent">
              Email: jiafeng.liang@qq.com
            </a>
            <a href="tel:137-630-50090" className="transition hover:text-accent">
              Tel: 137-630-50090
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
