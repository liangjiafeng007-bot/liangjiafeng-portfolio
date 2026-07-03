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
  const webpSources = useMemo(() => sources.filter((source) => source.toLowerCase().endsWith('.webp')), [sources]);
  const rasterSources = useMemo(() => {
    const compatibleSources = sources.filter((source) => !source.toLowerCase().endsWith('.webp'));
    return compatibleSources.length > 0 ? compatibleSources : sources;
  }, [sources]);
  const [sourceIndex, setSourceIndex] = useState(0);
  const [failed, setFailed] = useState(rasterSources.length === 0);
  const [isLoading, setIsLoading] = useState(rasterSources.length > 0);
  const [allowWebp, setAllowWebp] = useState(true);
  const [open, setOpen] = useState(false);
  const [previewLoading, setPreviewLoading] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setSourceIndex(0);
    setFailed(rasterSources.length === 0);
    setIsLoading(rasterSources.length > 0);
    setAllowWebp(true);
  }, [fallbackKey, rasterSources.length, src]);

  const currentSrc = rasterSources[sourceIndex];
  const webpSrcSet = webpSources.join(', ');

  const advanceSource = () => {
    if (sourceIndex < rasterSources.length - 1) {
      setSourceIndex((index) => index + 1);
      setIsLoading(true);
      setFailed(false);
      return;
    }

    setIsLoading(false);
    setFailed(true);
  };

  useEffect(() => {
    const image = imageRef.current;
    if (image?.complete && image.naturalWidth > 0) {
      setIsLoading(false);
      setFailed(false);
    }
  }, [currentSrc]);

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
    if (allowWebp && webpSources.length > 0) {
      setAllowWebp(false);
      setIsLoading(true);
      setFailed(false);
      return;
    }

    advanceSource();
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
          <div className="relative w-full">
            <picture>
              {allowWebp && webpSrcSet ? <source srcSet={webpSrcSet} type="image/webp" /> : null}
              <img
                key={currentSrc}
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
            </picture>
          </div>
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
