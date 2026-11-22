"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "full" | "header" | "mark" | "footer";
  theme?: "dark" | "light";
  className?: string;
  showTagline?: boolean;
}

export const LogoMark: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Covers365 Emblem"
    >
      {/* Outer dynamic orbital orange swoosh - bottom-left to top */}
      <path
        d="M10 88 C 8 72, 22 58, 48 54 C 44 60, 42 66, 43 72 C 26 75, 18 81, 19 86 C 21 91, 32 94, 52 92 C 55 98, 60 103, 67 106 C 35 108, 12 101, 10 88 Z"
        fill="#FE8100"
      />

      {/* Main Security Shield */}
      <path
        d="M60 16 L94 28 C 94 65, 82 88, 60 102 C 38 88, 26 65, 26 28 L60 16 Z"
        fill="#01172F"
        stroke="#FFFFFF"
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* Officer Silhouette inside shield */}
      {/* Peaked service cap visor and crown */}
      <path
        d="M48 42 C 48 37, 56 34, 68 34 C 76 34, 82 37, 85 41 L88 45 C 80 47, 65 47, 52 46 Z"
        fill="#FFFFFF"
      />
      {/* Cap peak / visor */}
      <path
        d="M68 44 C 76 44, 84 46, 88 49 C 84 50, 76 50, 68 49 Z"
        fill="#FE8100"
      />
      {/* Officer profile face / jaw */}
      <path
        d="M58 46 L70 46 C 75 49, 75 54, 71 58 L70 63 L65 63 L64 68 L56 68 Z"
        fill="#FFFFFF"
      />
      {/* Officer uniform collar & shoulders */}
      <path
        d="M42 86 C 42 74, 48 69, 58 68 L62 76 L66 68 C 76 69, 82 74, 84 86 Z"
        fill="#FFFFFF"
      />
      {/* Dark necktie */}
      <path
        d="M61 74 L63 86 L61 86 L59 74 Z"
        fill="#01172F"
      />

      {/* Outer dynamic orbital orange swoosh - top-right flourish */}
      <path
        d="M86 26 C 98 28, 110 38, 108 50 C 106 60, 94 68, 78 72 C 80 66, 80 60, 77 54 C 90 51, 98 45, 99 40 C 100 36, 95 32, 85 30 Z"
        fill="#FE8100"
      />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = "header",
  theme = "dark",
  className = "",
  showTagline = false,
}) => {
  const isLight = theme === "light";

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}>
      {/* Crisp Vector Shield Mark */}
      <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
        <LogoMark className="w-10 h-10 md:w-12 md:h-12 drop-shadow-md" />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-baseline leading-none tracking-tight">
          <span
            className={`font-heading font-extrabold text-2xl md:text-3xl tracking-wide ${
              isLight ? "text-brand-navy" : "text-white"
            }`}
          >
            COVERS
          </span>
          <span className="font-heading font-extrabold text-2xl md:text-3xl text-brand-orange ml-0.5">
            365
          </span>
        </div>

        {/* Subtitle Rule */}
        <div className="flex items-center gap-1.5 mt-0.5">
          <span
            className={`h-[1px] w-3 ${
              isLight ? "bg-slate-300" : "bg-brand-navy-border"
            }`}
          />
          <span
            className={`font-heading font-semibold text-[9px] md:text-[10px] tracking-widest uppercase ${
              isLight ? "text-brand-slate-muted" : "text-slate-300"
            }`}
          >
            Security & Manpower Services
          </span>
          <span
            className={`h-[1px] w-3 ${
              isLight ? "bg-slate-300" : "bg-brand-navy-border"
            }`}
          />
        </div>

        {/* Optional Tagline */}
        {showTagline && (
          <p className="text-[11px] font-body italic text-slate-400 mt-1">
            Reliable People. Safer Spaces. <span className="text-brand-orange font-semibold">Always.</span>
          </p>
        )}
      </div>
    </Link>
  );
};
