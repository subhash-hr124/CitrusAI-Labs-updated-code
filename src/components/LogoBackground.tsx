import React from 'react';

export const LogoBackground = () => {
  const logos = Array.from({ length: 15 }, (_, i) => `1 (${(i % 20) + 1}).png`);
  
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.015] dark:opacity-[0.03]">
      <div className="flex flex-wrap gap-12 p-20 justify-center">
        {logos.map((logo, i) => (
          <img 
            key={i} 
            src={`/${logo}`}
            alt=""
            className="w-40 h-40 object-contain grayscale invert dark:invert-0"
          />
        ))}
      </div>
    </div>
  );
};
