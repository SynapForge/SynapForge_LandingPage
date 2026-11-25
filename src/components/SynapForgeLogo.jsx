import React from 'react';

/**
 * SynapForge Brand Logo Component
 * Precision vector reproduction of the official brand identity:
 * - Dynamic S-F monogram with curved terminals and sharp angular cuts
 * - Primary Brand Color: #FF5500 (Forge Orange)
 * - Deep Charcoal / Black contrast elements
 */
export default function SynapForgeLogo({ 
  className = "w-8 h-8", 
  variant = "mark",
  showSubtext = true 
}) {
  // SVG Monogram Icon
  const LogoMark = (
    <svg 
      viewBox="0 0 200 160" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="forgeOrangeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B1A" />
          <stop offset="100%" stopColor="#FF4500" />
        </linearGradient>
      </defs>

      {/* Top Crossbar of T / F with upper curve of S */}
      <path
        d="M32 20 
           C48 10, 72 6, 105 6 
           L190 6 
           C195 6, 198 9, 198 14 
           L198 28 
           C198 33, 195 36, 190 36 
           L118 36 
           C110 36, 105 38, 100 42 
           C94 47, 92 53, 92 60 
           L178 60 
           C184 60, 188 64, 188 70 
           L188 82 
           C188 88, 184 92, 178 92 
           L92 92 
           L92 146 
           C92 152, 88 156, 82 156 
           L56 156 
           C50 156, 46 152, 46 146 
           L46 92 
           C32 92, 18 84, 10 72 
           C4 64, 2 54, 4 44 
           C6 34, 12 26, 22 21 
           L32 20 Z
           M46 38
           C40 42, 38 48, 38 54
           C38 62, 42 66, 50 68
           L66 70
           L66 38
           L46 38 Z"
        fill="url(#forgeOrangeGlow)"
        fillRule="evenodd"
        clipRule="evenodd"
      />

      {/* Lower Hook of S */}
      <path
        d="M46 92
           L66 92
           L66 122
           C52 122, 38 120, 24 112
           C14 106, 8 98, 6 90
           L28 84
           C32 90, 38 92, 46 92 Z"
        fill="url(#forgeOrangeGlow)"
      />
    </svg>
  );

  if (variant === "full") {
    return (
      <div className="flex items-center gap-3 select-none group">
        {/* Monogram Icon */}
        <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
          {LogoMark}
        </div>

        {/* Wordmark typography */}
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline">
            <span className="text-2xl font-black tracking-[-0.03em] leading-none text-slate-900 dark:text-white">
              Synap<span className="text-[#FF5500]">forge</span>
            </span>
          </div>
          {showSubtext && (
            <span className="text-[7.5px] font-mono tracking-[0.28em] font-extrabold text-slate-500 dark:text-slate-400 mt-1 uppercase">
              ARCHITECT. CODE. FORGE. SCALE.
            </span>
          )}
        </div>
      </div>
    );
  }

  // Variant "mark" (Icon only)
  return LogoMark;
}

