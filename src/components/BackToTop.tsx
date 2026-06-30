import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisible = () => setVisible(window.scrollY > 600);
    updateVisible();
    window.addEventListener('scroll', updateVisible, { passive: true });
    return () => window.removeEventListener('scroll', updateVisible);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="返回顶部"
      className="fixed bottom-6 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/95 text-[#555555] shadow-[0_12px_34px_rgba(17,17,17,0.12)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent md:bottom-8 md:right-8"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUp size={18} strokeWidth={1.8} />
    </button>
  );
}

export default BackToTop;
