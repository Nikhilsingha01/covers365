"use client";

import React from "react";

interface IconProps {
  className?: string;
  strokeWidth?: number;
}

// 1. Guard with peaked officer cap - exactly as on the visiting card
export const GuardCapIcon: React.FC<IconProps> = ({ className = "w-6 h-6", strokeWidth = 1.75 }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Peaked cap crown & visor */}
    <path d="M4 8.5 C4 5.5, 8 4, 12 4 C 16 4, 20 5.5, 20 8.5 L20 10 L4 10 Z" />
    <path d="M3 10 C 6 10, 8 11.5, 12 11.5 C 16 11.5, 18 10, 21 10" />
    {/* Face & ears */}
    <path d="M8 11.5 V14 C8 16.2 9.8 18 12 18 C14.2 18 16 16.2 16 14 V11.5" />
    {/* Shoulders & uniform collar */}
    <path d="M4 21 C4 18.5 7 17.5 9 17 L12 19 L15 17 C17 17.5 20 18.5 20 21" />
    {/* Tie */}
    <path d="M11.5 19 L12.5 19 L12 21 Z" fill="currentColor" />
  </svg>
);

// 2. Manpower Supply - 3-person team silhouette from visiting card
export const ManpowerTeamIcon: React.FC<IconProps> = ({ className = "w-6 h-6", strokeWidth = 1.75 }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Center Leader / Person */}
    <circle cx="12" cy="7" r="3" />
    <path d="M7 19 C7 16 9.2 14 12 14 C14.8 14 17 16 17 19" />
    {/* Left Team Member */}
    <circle cx="5" cy="9" r="2.2" />
    <path d="M1.5 19 C1.5 17 3 15.5 5 15.5 C6.2 15.5 7.2 16.2 7.7 17" />
    {/* Right Team Member */}
    <circle cx="19" cy="9" r="2.2" />
    <path d="M16.3 17 C16.8 16.2 17.8 15.5 19 15.5 C21 15.5 22.5 17 22.5 19" />
  </svg>
);

// 3. Industrial Security - Factory with saw-tooth roof and smokestack from visiting card
export const IndustrialFactoryIcon: React.FC<IconProps> = ({ className = "w-6 h-6", strokeWidth = 1.75 }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Tall industrial smokestack */}
    <path d="M18 21 V4 L21 5 V21" />
    {/* Saw-tooth industrial factory roof line */}
    <path d="M3 21 V12 L8 15 V12 L13 15 V10 L18 13.5" />
    {/* Base line */}
    <path d="M2 21 H22" />
    {/* Factory windows */}
    <rect x="5" y="16" width="2" height="2" fill="currentColor" />
    <rect x="10" y="16" width="2" height="2" fill="currentColor" />
    <rect x="14" y="16" width="2" height="2" fill="currentColor" />
  </svg>
);

// 4. Event Security - Calendar with star emblem from visiting card
export const EventCalendarIcon: React.FC<IconProps> = ({ className = "w-6 h-6", strokeWidth = 1.75 }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Calendar frame */}
    <rect x="3" y="4" width="18" height="17" rx="2" />
    {/* Binder clips */}
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="3" y1="9" x2="21" y2="9" />
    {/* Star inside */}
    <polygon
      points="12,11.5 13.2,14 16,14.3 14,16 14.5,18.8 12,17.4 9.5,18.8 10,16 8,14.3 10.8,14"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
  </svg>
);

// Helper mapper to render service icon dynamically
export const ServiceIconRenderer: React.FC<{
  name: "shield-user" | "users" | "factory" | "calendar";
  className?: string;
  strokeWidth?: number;
}> = ({ name, className, strokeWidth = 1.75 }) => {
  switch (name) {
    case "shield-user":
      return <GuardCapIcon className={className} strokeWidth={strokeWidth} />;
    case "users":
      return <ManpowerTeamIcon className={className} strokeWidth={strokeWidth} />;
    case "factory":
      return <IndustrialFactoryIcon className={className} strokeWidth={strokeWidth} />;
    case "calendar":
      return <EventCalendarIcon className={className} strokeWidth={strokeWidth} />;
    default:
      return <GuardCapIcon className={className} strokeWidth={strokeWidth} />;
  }
};
