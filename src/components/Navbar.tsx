import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { label: '首页', id: 'home' },
  { label: '简历', id: 'resume' },
  { label: '作品集', id: 'portfolio' },
  { label: '策略分析', id: 'strategy' },
  { label: '品牌手册', id: 'brand-manual' },
  { label: '联系方式', id: 'contact' },
];

function Navbar() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateActive = () => {
      const currentY = window.scrollY + 160;
      const current = navItems.reduce((matched, item) => {
        const element = document.getElementById(item.id);
        if (!element) return matched;
        return element.offsetTop <= currentY ? item.id : matched;
      }, 'home');
      setActive(current);
      setScrolled(window.scrollY > 8);
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);
    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-[80] border-b backdrop-blur-md transition duration-300 ${
        scrolled
          ? 'border-[rgba(0,0,0,0.04)] bg-white/70 shadow-none'
          : 'border-[rgba(0,0,0,0.035)] bg-[#FAFAF8]/70 shadow-none'
      }`}
    >
      <nav className="section-shell flex h-14 items-center justify-between">
        <a href="#home" className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
          LIANG JIAFENG
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-[12px] tracking-[0.12em] transition ${
                active === item.id ? 'font-semibold text-accent' : 'text-[#5B5B5B] hover:text-accent'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="rounded-full border border-accent px-4 py-1.5 text-[12px] font-semibold tracking-[0.12em] text-accent transition hover:bg-accent hover:text-white"
          >
            联系我
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <div className="section-shell grid gap-2 py-5">
            {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
                className={`py-3 text-sm tracking-[0.12em] ${active === item.id ? 'text-accent' : 'text-[#4A4A4A]'}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
