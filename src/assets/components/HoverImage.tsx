import React, { useRef } from 'react';

interface HoverImageProps {
  src: string;
  alt: string;
  soundSrc: string;
  className?: string;
}

const HoverImage: React.FC<HoverImageProps> = ({ src, alt, soundSrc, className }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="inline-block">
      <img
        src={src}
        alt={alt}
        onMouseEnter={handleMouseEnter}
        className={className ||  "cursor-pointer hover:opacity-80 transition-opacity duration-200 ml-10 h-28 z-10 relative"}
      />
      <audio ref={audioRef} src={soundSrc} />
    </div>
  );
};

export default HoverImage;
