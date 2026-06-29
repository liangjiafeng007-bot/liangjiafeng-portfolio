import { useEffect, useMemo, useState } from 'react';

type HeroVideoProps = {
  videoSrc?: string;
  fallbackVideos?: string[];
  posterSrc?: string;
  showMeta?: boolean;
  placeholder?: string;
};

function HeroVideo({
  videoSrc = '/assets/video/blaupunkt-tvc.mp4',
  fallbackVideos = ['/assets/video/blaupunkt-tvc.mp4.mp4'],
  posterSrc = '/assets/video/blaupunkt-tvc-poster.jpg',
  showMeta = true,
  placeholder = 'BLAUPUNKT TVC\nVideo Coming Soon',
}: HeroVideoProps) {
  const fallbackKey = fallbackVideos.join('|');
  const sources = useMemo(() => [videoSrc, ...fallbackVideos].filter(Boolean), [fallbackKey, videoSrc]);
  const [sourceIndex, setSourceIndex] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 767px)').matches : false,
  );

  useEffect(() => {
    setSourceIndex(0);
    setVideoFailed(false);
  }, [fallbackKey, sources.length, videoSrc]);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  const handleError = () => {
    if (sourceIndex < sources.length - 1) {
      setSourceIndex((index) => index + 1);
      return;
    }
    setVideoFailed(true);
  };

  return (
    <div className="relative mx-auto w-full">
      {showMeta && (
        <div className="mb-4 flex items-end justify-between border-b border-line pb-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">Featured TVC</p>
            <p className="mt-1 text-[12px] uppercase tracking-[0.14em] text-muted">BLAUPUNKT Brand Film</p>
          </div>
        </div>
      )}

      <div className="aspect-video w-full overflow-hidden border border-line bg-white shadow-[0_28px_90px_rgba(17,17,17,0.10)]">
        {isMobile ? (
          <img
            className="h-full w-full bg-white object-cover"
            src={posterSrc}
            alt="BLAUPUNKT TVC poster"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width={1280}
            height={720}
          />
        ) : videoFailed || !sources[sourceIndex] ? (
          <div className="flex h-full w-full flex-col items-center justify-center bg-[#F1F1EF] text-center">
            <p className="whitespace-pre-line text-[12px] font-semibold uppercase tracking-[0.2em] text-[#555555]">
              {placeholder}
            </p>
          </div>
        ) : (
          <video
            key={sources[sourceIndex]}
            className="h-full w-full bg-white object-cover"
            src={sources[sourceIndex]}
            poster={posterSrc}
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            width={1280}
            height={720}
            onError={handleError}
          />
        )}
      </div>

      {showMeta && <p className="mt-4 text-center text-[12px] leading-6 text-muted">以动态影像承接品牌视觉、产品场景与内容传播。</p>}
    </div>
  );
}

export default HeroVideo;
