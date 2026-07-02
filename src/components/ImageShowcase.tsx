import { X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type ImageShowcaseProps = {
  src: string;
  fallbackSrcs?: string[];
  alt: string;
  className?: string;
  imageClassName?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
  width?: number;
  height?: number;
  placeholder?: string;
};

function ImageShowcase({
  src,
  fallbackSrcs = [],
  alt,
  className = '',
  imageClassName = '',
  loading = 'lazy',
  fetchPriority = 'auto',
  width,
  height,
  placeholder = 'Portfolio Image Placeholder',
}: ImageShowcaseProps) {
  const fallbackKey = fallbackSrcs.join('|');
  const sources = useMemo(() => [src, ...fallbackSrcs].filter(Boolean), [fallbackKey, src]);
  const [sourceIndex, setSourceIndex] = useState(0);
  const [failed, setFailed] = useState(sources.length === 0);
  const [isLoading, setIsLoading] = useState(sources.length > 0);
  const [open, setOpen] = useState(false);
  const [previewLoading, setPreviewLoading] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setSourceIndex(0);
    setFailed(sources.length === 0);
    setIsLoading(sources.length > 0);
  }, [fallbackKey, sources.length, src]);

  const currentSrc = sources[sourceIndex];

  useEffect(() => {
    const image = imageRef.current;
    if (image?.complete && image.naturalWidth > 0) {
      setIsLoading(false);
      setFailed(false);
    }
  }, [currentSrc]);

  useEffect(() => {
    if (failed || !sources[sourceIndex]) return undefined;

    const timeout = window.setTimeout(() => {
      setIsLoading(false);
    }, 8000);

    return () => window.clearTimeout(timeout);
  }, [failed, sourceIndex, sources]);

  useEffect(() => {
    if (!open) {
      setPreviewLoading(false);
      return undefined;
    }

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

  const handleImageError = () => {
    if (sourceIndex < sources.length - 1) {
      setIsLoading(true);
      setSourceIndex((index) => index + 1);
      return;
    }
    setIsLoading(false);
    setFailed(true);
  };

  return (
    <>
      <button
        type="button"
        className={`group block cursor-zoom-in overflow-hidden text-left ${className}`}
        onClick={() => {
          if (!failed) {
            setPreviewLoading(true);
            setOpen(true);
          }
        }}
        aria-label={`Open image preview: ${alt}`}
        aria-busy={isLoading}
      >
        {failed || !currentSrc ? (
          <div className={`flex min-h-[260px] w-full items-center justify-center whitespace-pre-line bg-[#F1F1EF] text-center text-sm text-muted ${imageClassName}`}>
            {placeholder}
          </div>
        ) : (
          <img
            src={currentSrc}
            alt={alt}
            ref={imageRef}
            className={`block w-full object-contain transition duration-500 ease-out group-hover:scale-[1.02] ${imageClassName}`}
            loading={loading}
            decoding="async"
            fetchPriority={fetchPriority}
            width={width}
            height={height}
            onLoad={() => {
              setIsLoading(false);
              setFailed(false);
            }}
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
                setPreviewLoading(false);
                setOpen(false);
              }}
            >
              <X size={20} />
            </button>
            {previewLoading ? <div className="absolute text-sm font-semibold text-white/70">{placeholder}</div> : null}
            <img
              src={currentSrc}
              alt={alt}
              className={`max-h-[90vh] max-w-[90vw] object-contain ${previewLoading ? 'opacity-0' : ''}`}
              decoding="async"
              onLoad={() => setPreviewLoading(false)}
              onError={() => setPreviewLoading(false)}
              onClick={(event) => event.stopPropagation()}
            />
          </div>,
          document.body,
        )}
    </>
  );
}

export default ImageShowcase;
