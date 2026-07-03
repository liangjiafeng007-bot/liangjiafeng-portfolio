import { useEffect, useMemo, useState } from 'react';

type FallbackImageProps = {
  src?: string;
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

function FallbackImage({
  src,
  fallbackSrcs = [],
  alt,
  className = '',
  imageClassName,
  loading = 'lazy',
  fetchPriority = 'auto',
  width,
  height,
  placeholder = 'Portfolio Image Placeholder',
}: FallbackImageProps) {
  const fallbackKey = fallbackSrcs.join('|');
  const sources = useMemo(() => [src, ...fallbackSrcs].filter(Boolean) as string[], [fallbackKey, src]);
  const webpSources = useMemo(() => sources.filter((source) => source.toLowerCase().endsWith('.webp')), [sources]);
  const rasterSources = useMemo(() => {
    const compatibleSources = sources.filter((source) => !source.toLowerCase().endsWith('.webp'));
    return compatibleSources.length > 0 ? compatibleSources : sources;
  }, [sources]);
  const [sourceIndex, setSourceIndex] = useState(0);
  const [failed, setFailed] = useState(rasterSources.length === 0);
  const [allowWebp, setAllowWebp] = useState(true);

  useEffect(() => {
    setSourceIndex(0);
    setFailed(rasterSources.length === 0);
    setAllowWebp(true);
  }, [fallbackKey, rasterSources.length, src]);

  if (failed || rasterSources.length === 0) {
    return (
      <div className={`flex min-h-[260px] items-center justify-center whitespace-pre-line bg-[#F1F1EF] text-center text-sm text-muted ${className}`}>
        {placeholder}
      </div>
    );
  }

  return (
    <picture className={className}>
      {allowWebp && webpSources.length > 0 ? <source srcSet={webpSources.join(', ')} type="image/webp" /> : null}
      <img
        src={rasterSources[sourceIndex]}
        alt={alt}
        className={imageClassName ?? className}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        width={width}
        height={height}
        onError={() => {
          if (allowWebp && webpSources.length > 0) {
            setAllowWebp(false);
            return;
          }

          if (sourceIndex < rasterSources.length - 1) {
            setSourceIndex((index) => index + 1);
            return;
          }
          setFailed(true);
        }}
      />
    </picture>
  );
}

export default FallbackImage;
