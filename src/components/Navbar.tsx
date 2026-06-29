import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Resume', id: 'resume' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Strategy', id: 'strategy' },
  { label: 'Brand Manual', id: 'brand-manual' },
  { label: 'Contact', id: 'contact' },
];

function Navbar() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const updateActive = () => {
      const currentY = window.scrollY + 160;
      const current = navItems.reduce((matched, item) => {
        const element = document.getElementById(item.id);
        if (!element) return matched;
        return element.offsetTop <= currentY ? item.id : matched;
      }, 'home');
      setActive(current);
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
    <header className="sticky top-0 z-50 border-b border-line bg-[#FAFAF8]/92 backdrop-blur-md">
      <nav className="section-shell flex h-14 items-center justify-between">
        <a href="#home" className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
          LIANG JIAFENG
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-[11px] uppercase tracking-[0.16em] transition ${
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
            className="rounded-full border border-accent px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent transition hover:bg-accent hover:text-white"
          >
            Contact Me
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
                className={`py-3 text-sm uppercase tracking-[0.14em] ${active === item.id ? 'text-accent' : 'text-[#4A4A4A]'}`}
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
