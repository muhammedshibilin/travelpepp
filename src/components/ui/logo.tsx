import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showText?: boolean;
}

export function Logo({ variant = 'dark', className, showText = true }: LogoProps) {
  const isLight = variant === 'light';
  const textColor = isLight ? 'text-white' : 'text-brand-black';
  const lineColor = '#FF4500'; // Vibrant orange/red from the logo

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative flex flex-col items-start leading-none">
        {showText && (
          <span className={cn("text-2xl font-bold tracking-tight lowercase", textColor)}>
            travelpepp
          </span>
        )}
        <div className="relative mt-0.5 w-full h-[3px]">
          {/* The orange line starting roughly under 'v' or 'e' */}
          <div 
            className="absolute left-[35%] right-0 h-full rounded-full" 
            style={{ backgroundColor: lineColor }}
          />
          {/* The airplane icon at the end of the line */}
          <div className="absolute -right-1 -top-[5px] transform translate-x-1/2">
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill={isLight ? "white" : "black"}
              className="rotate-45"
            >
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
