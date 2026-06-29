import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { HeroItem } from '../data/heroItems';
import FallbackImage from './FallbackImage';

type Hero3DGalleryProps = {
  items: HeroItem[];
  onSelect: (id: string) => void;
};

const slots = [
  {
    width: 'clamp(150px, 13vw, 230px)',
    transform: 'translate(-50%, -50%) translate3d(-42vw, -28vh, -120px) rotateY(28deg) rotateX(-7deg) scale(0.82)',
    duration: 6,
  },
  {
    width: 'clamp(150px, 14vw, 240px)',
    transform: 'translate(-50%, -50%) translate3d(-46vw, -3vh, -260px) rotateY(48deg) rotateX(4deg) scale(0.74)',
    duration: 7,
  },
  {
    width: 'clamp(190px, 18vw, 320px)',
    transform: 'translate(-50%, -50%) translate3d(-41vw, 31vh, -80px) rotateY(18deg) rotateX(8deg) scale(0.78)',
    duration: 5.8,
  },
  {
    width: 'clamp(170px, 15vw, 280px)',
    transform: 'translate(-50%, -50%) translate3d(41vw, -28vh, -110px) rotateY(-22deg) rotateX(-5deg) scale(0.78)',
    duration: 6.5,
  },
  {
    width: 'clamp(150px, 14vw, 260px)',
    transform: 'translate(-50%, -50%) translate3d(46vw, -3vh, -240px) rotateY(-50deg) rotateX(3deg) scale(0.72)',
    duration: 7.4,
  },
  {
    width: 'clamp(170px, 15vw, 280px)',
    transform: 'translate(-50%, -50%) translate3d(40vw, 31vh, -100px) rotateY(-18deg) rotateX(8deg) scale(0.76)',
    duration: 5.6,
  },
  {
    width: 'clamp(130px, 13vw, 220px)',
    transform: 'translate(-50%, -50%) translate3d(0px, -43vh, -260px) rotateY(8deg) rotateX(16deg) scale(0.62)',
    duration: 6.8,
  },
  {
    width: 'clamp(150px, 13vw, 240px)',
    transform: 'translate(-50%, -50%) translate3d(-26vw, -44vh, -220px) rotateY(12deg) rotateX(12deg) scale(0.66)',
    duration: 7.2,
  },
  {
    width: 'clamp(140px, 12vw, 220px)',
    transform: 'translate(-50%, -50%) translate3d(27vw, -44vh, -230px) rotateY(-14deg) rotateX(12deg) scale(0.64)',
    duration: 6.2,
  },
];

function Hero3DGallery({ items, onSelect }: Hero3DGalleryProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [draggingId, setDraggingId] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: globalThis.MouseEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      setRotate({ x: y * -8, y: x * 12 });
    };

    const resetRotate = () => setRotate({ x: 0, y: 0 });

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', resetRotate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', resetRotate);
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[60] overflow-visible"
      style={{ perspective: '1600px' }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateX: rotate.x, rotateY: rotate.y }}
        transition={{ type: 'spring', stiffness: 72, damping: 24, mass: 0.7 }}
      >
        {items.map((item, index) => {
          const slot = slots[index % slots.length];
          return (
            <button
              key={item.id}
              type="button"
              className="pointer-events-auto group absolute left-1/2 top-1/2 block cursor-grab text-left active:cursor-grabbing"
              data-hero-card={item.id}
              style={{
                width: slot.width,
                transform: slot.transform,
                transformStyle: 'preserve-3d',
                zIndex: 70 + index,
              }}
              onClick={(event) => {
                if (draggingId === item.id) {
                  event.preventDefault();
                  return;
                }

                onSelect(item.id);
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{
                  opacity: 1,
                  y: [0, index % 2 === 0 ? -10 : 9, 0],
                  rotate: [0, index % 2 === 0 ? 1.1 : -1.2, 0],
                  scale: 1,
                }}
                transition={{
                  opacity: { duration: 0.68, delay: index * 0.09 },
                  scale: { duration: 0.68, delay: index * 0.09 },
                  y: {
                    duration: slot.duration,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                    delay: index * 0.13,
                  },
                  rotate: {
                    duration: slot.duration + 0.4,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                    delay: index * 0.13,
                  },
                }}
                whileHover={{ scale: 1.04 }}
                drag
                dragMomentum={false}
                dragElastic={0.14}
                whileDrag={{ scale: 1.07, zIndex: 90 }}
                onDragStart={() => setDraggingId(item.id)}
                onDragEnd={() => {
                  window.setTimeout(() => setDraggingId(null), 0);
                }}
                style={{ touchAction: 'none' }}
              >
                <FallbackImage
                  src={item.image}
                  fallbackSrcs={item.fallbackImages}
                  alt={item.title}
                  className="min-h-[170px] w-full border border-line bg-white object-contain shadow-[0_22px_70px_rgba(17,17,17,0.10)]"
                  imageClassName="h-auto w-full border border-line bg-white object-contain shadow-[0_22px_70px_rgba(17,17,17,0.10)]"
                  placeholder={item.fallback}
                />
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted transition group-hover:text-accent">
                  {item.label}
                </p>
              </motion.div>
            </button>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Hero3DGallery;
