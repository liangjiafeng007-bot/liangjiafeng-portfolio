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
  const [visible, setVisible] = useState(true);
  const [hoveringNav, setHoveringNav] = useState(false);

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
      setVisible(window.scrollY < 120);
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);

    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, []);

  useEffect(() => {
    if (window.scrollY < 120 || open || hoveringNav || !visible) return undefined;

    const timeout = window.setTimeout(() => {
      if (window.scrollY >= 120 && !hoveringNav) setVisible(false);
    }, 3000);

    return () => window.clearTimeout(timeout);
  }, [hoveringNav, open, visible]);

  const showNavigation = () => {
    setVisible(true);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    showNavigation();
    setActive(id);
    setOpen(false);

    const top = element.getBoundingClientRect().top + window.pageYOffset - 88;
    const targetTop = Math.max(top, 0);

    try {
      window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      });
    } catch {
      window.scrollTo(0, targetTop);
    }
  };

  return (
    <>
      <div
        className="fixed left-0 top-0 z-[80] h-[60px] w-full bg-transparent"
        aria-hidden="true"
        onMouseEnter={showNavigation}
        onClick={showNavigation}
      />

      <header
        className={`fixed left-0 top-0 z-[999] w-full border-b backdrop-blur-md transition-[opacity,transform,border-color,background-color] duration-300 ease-out ${
          visible || open || hoveringNav ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-full opacity-0'
        } ${
          scrolled
            ? 'border-[rgba(0,0,0,0.04)] bg-white/70 shadow-none'
            : 'border-[rgba(0,0,0,0.035)] bg-[#FAFAF8]/70 shadow-none'
        }`}
        onMouseEnter={() => {
          setHoveringNav(true);
          showNavigation();
        }}
        onMouseLeave={() => {
          setHoveringNav(false);
        }}
      >
        <nav className="section-shell flex h-14 items-center justify-between">
          <a
            href="#home"
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection('home');
            }}
          >
            LIANG JIAFENG
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(item.id);
                }}
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
              onClick={(event) => {
                event.preventDefault();
                scrollToSection('contact');
              }}
              className="rounded-full border border-accent px-4 py-1.5 text-[12px] font-semibold tracking-[0.12em] text-accent transition hover:bg-accent hover:text-white"
            >
              联系我
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
            onClick={() => {
              showNavigation();
              setOpen((value) => !value);
            }}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-line bg-white/95 lg:hidden">
            <div className="section-shell grid gap-2 py-5">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`py-3 text-sm tracking-[0.12em] ${
                    active === item.id ? 'text-accent' : 'text-[#4A4A4A]'
                  }`}
                  onClick={(event) => {
                    event.preventDefault();
                    setOpen(false);
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
