import { useEffect, useRef, useState } from 'react';

const ImageMarquee = () => {
  const [images, setImages] = useState<string[]>([]);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef<number>(0);
  const speedRef = useRef<number>(4);
  const targetSpeedRef = useRef<number>(4);
  const isHoveredRef = useRef<boolean>(false);

  useEffect(() => {
    // Use online image links here
    const imageList = [
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      'https://images.pexels.com/photos/458805/pexels-photo-458805.jpeg',
      'https://images.pexels.com/photos/1447263/pexels-photo-1447263.jpeg',
      'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg',
      'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg',
      'https://images.pexels.com/photos/34088/pexels-photo.jpg',
      'https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg',
      'https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg',
      'https://images.pexels.com/photos/733852/pexels-photo-733852.jpeg',
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    ];
    setImages(imageList);
  }, []);

  useEffect(() => {
    if (!marqueeRef.current) return;

    let frameId: number;

    const animate = () => {
      speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.05;
      offsetRef.current -= speedRef.current;

      const marquee = marqueeRef.current;
      if (marquee) {
        const totalWidth = marquee.scrollWidth / 2;
        if (Math.abs(offsetRef.current) >= totalWidth) {
          offsetRef.current = 0;
        }

        marquee.style.transform = `translateX(${offsetRef.current}px)`;
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [images]);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    targetSpeedRef.current = 1;
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    targetSpeedRef.current = 4;
  };

  return (
    <div
      className="w-full overflow-hidden h-[260px] bg-transparent shadow-inner"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex w-max"
        ref={marqueeRef}
        style={{ willChange: 'transform', position: 'relative' }}
      >
        {[...images, ...images].map((img, i) => {
          const parallaxSpeed = 0.5 + (i % 3) * 0.3;
          const translateX = offsetRef.current * parallaxSpeed;

          return (
            <img
              key={i}
              loading="lazy"
              src={img}
              alt={`marquee-img-${i}`}
              className="w-[200px] h-[250px] object-cover mx-2"
              style={{
                transform: `translateX(${translateX}px)`,
                transition: 'transform 0.3s ease-out',
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageMarquee;
