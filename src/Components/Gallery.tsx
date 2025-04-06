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
  const marqueeRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const speedRef = useRef(4); // Current speed
  const targetSpeedRef = useRef(4); // Target speed
  const isHoveredRef = useRef(false);

  useEffect(() => {
    // Set the images manually from the imported files
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
      // Smoothly transition speed toward targetSpeed
      speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.05;

      offsetRef.current -= speedRef.current;

      const totalWidth = marqueeRef.current!.scrollWidth / 2;

      if (Math.abs(offsetRef.current) >= totalWidth) {
        offsetRef.current = 0; // Reset offset when half is scrolled
      }
  
      marqueeRef.current!.style.transform = `translateX(${offsetRef.current}px)`;

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    // Cleanup function to cancel animation when the component unmounts
    return () => cancelAnimationFrame(frameId);
  }, [images]);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    targetSpeedRef.current = 1; // Slow speed
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    targetSpeedRef.current = 4; // Original speed
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
          // Parallax effect: images further down the array move slower
          const parallaxSpeed = 0.5 + (i % 3) * 0.3; // Adjust the multiplier for different parallax speeds
          const translateX = offsetRef.current * parallaxSpeed;

          return (
            <img
              key={i}
              src={img}
              alt={`marquee-img-${i}`}
              className="w-[200px] h-[250px] object-cover mx-2"
              style={{
                transform: `translateX(${translateX}px)`, // Apply parallax effect
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
