import { X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

type ImageShowcaseProps = {
  src: string;
  fallbackSrcs?: string[];
  alt: string;
  className?: string;
  imageClassName?: string;
  placeholder?: string;
};

function ImageShowcase({
  src,
  fallbackSrcs = [],
  alt,
  className = '',
  imageClassName = '',
  placeholder = 'Portfolio Image Placeholder',
}: ImageShowcaseProps) {
  const fallbackKey = fallbackSrcs.join('|');
  const sources = useMemo(() => [src, ...fallbackSrcs].filter(Boolean), [fallbackKey, src]);
  const [sourceIndex, setSourceIndex] = useState(0);
  const [failed, setFailed] = useState(sources.length === 0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setSourceIndex(0);
    setFailed(sources.length === 0);
  }, [fallbackKey, sources.length, src]);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const currentSrc = sources[sourceIndex];
  const handleImageError = () => {
    if (sourceIndex < sources.length - 1) {
      setSourceIndex((index) => index + 1);
      return;
    }
    setFailed(true);
  };

  return (
    <>
      <button
        type="button"
        className={`group block cursor-zoom-in overflow-hidden text-left ${className}`}
        onClick={() => {
          if (!failed) setOpen(true);
        }}
        aria-label={`Open image preview: ${alt}`}
      >
        {failed || !currentSrc ? (
          <div className={`flex min-h-[260px] w-full items-center justify-center whitespace-pre-line bg-[#F1F1EF] text-center text-sm text-muted ${imageClassName}`}>
            {placeholder}
          </div>
        ) : (
          <img
            src={currentSrc}
            alt={alt}
            className={`block w-full object-contain transition duration-500 ease-out group-hover:scale-[1.02] ${imageClassName}`}
            loading="lazy"
            onError={handleImageError}
          />
        )}
      </button>

      {open &&
        currentSrc &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(0,0,0,0.86)] p-5"
            role="dialog"
            aria-modal="true"
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-black"
              aria-label="Close preview"
              onClick={(event) => {
                event.stopPropagation();
                setOpen(false);
              }}
            >
              <X size={20} />
            </button>
            <img
              src={currentSrc}
              alt={alt}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(event) => event.stopPropagation()}
            />
          </div>,
          document.body,
        )}
    </>
  );
}

export default ImageShowcase;
