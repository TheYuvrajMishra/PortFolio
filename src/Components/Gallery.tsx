import { useEffect, useRef, useState } from 'react';

// Import your local images
import pexelsAlxs from '../assets/pexels-alxs-919734.jpg';
import pexelsDivineTechyGirl from '../assets/pexels-divinetechygirl-1181675.jpg';
import pexelsJoshSorenson from '../assets/pexels-joshsorenson-1054397.jpg';
import pexelsJoshSorenson2 from '../assets/pexels-joshsorenson-1714208.jpg';
import pexelsJuniorTeixeira from '../assets/pexels-junior-teixeira-1064069-2047905.jpg';
import pexelsLuisGomes from '../assets/pexels-luis-gomes-166706-546819.jpg';
import pexelsMarinaHinic from '../assets/pexels-marina-hinic-199169-726233.jpg';
import pexelsMarkusSpiske from '../assets/pexels-markusspiske-1089438.jpg';
import pexelsOlaDapo from '../assets/pexels-ola-dapo-1754561-3345882.jpg';
import pexelsThisIsEngineering from '../assets/pexels-thisisengineering-3861964.jpg';

const ImageMarquee = () => {
  const [images, setImages] = useState<string[]>([]);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef<number>(0);
  const speedRef = useRef<number>(4);
  const targetSpeedRef = useRef<number>(4);
  const isHoveredRef = useRef<boolean>(false);

  useEffect(() => {
    const imageList = [
      pexelsAlxs,
      pexelsDivineTechyGirl,
      pexelsJoshSorenson,
      pexelsJoshSorenson2,
      pexelsJuniorTeixeira,
      pexelsLuisGomes,
      pexelsMarinaHinic,
      pexelsMarkusSpiske,
      pexelsOlaDapo,
      pexelsThisIsEngineering,
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
