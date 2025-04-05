import { useEffect, useRef, useState } from 'react';

const TextMarquee = () => {
  const services = [
    "Web Design", "Frontend Development", "Backend Development", "UI/UX Design", "React.js", "Next.js", "SEO Optimization",
    "Website Maintenance", "Performance Tuning", "Responsive Design", "Custom CMS", "WordPress Development", "Web App Security",
    "API Integration", "E-commerce Development", "Portfolio Sites", "Landing Pages", "Bug Fixing", "Code Reviews", "Hosting Support"
  ];

  const marqueeRef = useRef(null);
  const offsetRef = useRef(0);
  const speedRef = useRef(1.5);
  const targetSpeedRef = useRef(1.5);

  useEffect(() => {
    let frameId;

    const animate = () => {
      speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.05;
      offsetRef.current -= speedRef.current;

      const totalWidth = marqueeRef.current.scrollWidth / 2;
      if (Math.abs(offsetRef.current) >= totalWidth) {
        offsetRef.current = 0;
      }

      marqueeRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const handleMouseEnter = () => {
    targetSpeedRef.current = 4.5; // Slow speed on hover
  };

  const handleMouseLeave = () => {
    targetSpeedRef.current = 5; // Normal speed
  };

  return (
    <div
      className="w-full overflow-hidden text-white py-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={marqueeRef}
        className="flex w-max whitespace-nowrap"
        style={{ willChange: 'transform' }}
      >
        {[...services, ...services].map((service, index) => (
          <span
            key={index}
            className="mx-6 text-lg font-medium text-yellow-400"
          >
            {service}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextMarquee;
