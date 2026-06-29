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
  const [sourceIndex, setSourceIndex] = useState(0);
  const [failed, setFailed] = useState(sources.length === 0);

  useEffect(() => {
    setSourceIndex(0);
    setFailed(sources.length === 0);
  }, [fallbackKey, sources.length, src]);

  if (failed || sources.length === 0) {
    return (
      <div className={`flex min-h-[260px] items-center justify-center whitespace-pre-line bg-[#F1F1EF] text-center text-sm text-muted ${className}`}>
        {placeholder}
      </div>
    );
  }

  return (
    <img
      src={sources[sourceIndex]}
      alt={alt}
      className={imageClassName ?? className}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      width={width}
      height={height}
      onError={() => {
        if (sourceIndex < sources.length - 1) {
          setSourceIndex((index) => index + 1);
          return;
        }
        setFailed(true);
      }}
    />
  );
}

export default FallbackImage;
