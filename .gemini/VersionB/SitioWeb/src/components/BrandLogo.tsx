/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface BrandLogoProps {
  variant?: "light" | "dark"; // 'light' is for light backgrounds, 'dark' is for primary dark backgrounds
  className?: string;         // general sizing and layout utility classes
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = "dark",
  className = "h-12",
  showTagline = false,
}) => {
  // Palette variables depending on base style
  // Dark: White (#FAFAFA) and Accent Muted Gold (#B39E8C)
  // Light: Obsidian Espresso (#181514) and Deep Warm Brown (#251E1A)
  const mainColor = variant === "dark" ? "#FAFAFA" : "#181514";
  const accentColor = variant === "dark" ? "#B39E8C" : "#251E1A";
  const sparkColor = "#B39E8C"; // Always use Taupe/Gold for the sparkle highlight

  return (
    <div className={`flex flex-col items-start justify-center font-serif ${className}`}>
      <div className="flex items-center gap-2.5">
        {/* Isotipo: S&CO Monogram + Spark */}
        <div className="relative flex items-center justify-center select-none" style={{ height: "42px", width: "42px" }}>
          {/* Subtle thin geometric concentric rings showing high craftsmanship */}
          <svg
            className="absolute animate-spin-slow opacity-25"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="21" cy="21" r="19" stroke={mainColor} strokeWidth="0.5" strokeDasharray="2 4" />
          </svg>
          
          {/* Main Monogram Symbol */}
          <span 
            className="text-2xl font-semibold tracking-tighter leading-none" 
            style={{ color: mainColor, fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            S
          </span>
          <span 
            className="text-xs font-light translate-x-1.5 -translate-y-1 font-serif"
            style={{ color: accentColor }}
          >
            &
          </span>
          <span 
            className="text-lg font-medium tracking-tight translate-x-1" 
            style={{ color: mainColor, fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            CO
          </span>
          
          {/* Spark (Chispa de Lujo "+") positioned with pixel-perfection */}
          <div className="absolute top-1 right-0 select-none animate-pulse">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Premium 4-point sparkle star */}
              <path
                d="M5 0C5 2.76142 3.88071 5 1.11929 5C3.88071 5 5 7.23858 5 10C5 7.23858 6.11929 5 8.88071 5C6.11929 5 5 2.76142 5 0Z"
                fill={sparkColor}
              />
            </svg>
          </div>
        </div>

        {/* Text Logo: Artistic Alignment */}
        <div className="flex flex-col justify-center border-l pl-3" style={{ borderColor: `${variant === "dark" ? "#251E1A" : "#D1C6BD"}` }}>
          <div className="flex items-center">
            <span
              className="text-lg font-medium tracking-[0.18em] leading-none"
              style={{ color: mainColor, fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              SOARITY
            </span>
            <span
              className="text-md font-semibold font-serif leading-none ml-0.5 text-brand-accent"
              style={{ color: sparkColor }}
            >
              +
            </span>
          </div>
          <span
            className="text-[8px] font-sans tracking-[0.4em] uppercase opacity-75 leading-tight"
            style={{ color: accentColor }}
          >
            Boutique Digital
          </span>
        </div>
      </div>
      
      {showTagline && (
        <span className="text-[9px] font-sans tracking-[0.25em] uppercase text-brand-accent mt-1.5 opacity-80">
          Alta Costura Digital • Exclusividad
        </span>
      )}
    </div>
  );
};
