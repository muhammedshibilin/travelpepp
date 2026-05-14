import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showText?: boolean;
}

export function Logo({ variant = 'dark', className, showText = true }: LogoProps) {
  if (variant === 'light') {
    return (
      <div className={cn("flex items-center", className)}>
        <Image src="/logowhite.png" alt="TravelPepp Logo" width={160} height={48} className="object-contain" priority />
      </div>
    );
  }

  // variant === 'dark' (scrolled state on light background)
  // We use dark:hidden to show black logo in light mode, and hidden dark:block to show white logo in dark mode.
  return (
    <div className={cn("flex items-center", className)}>
      <Image src="/logoblack.png" alt="TravelPepp Logo" width={160} height={48} className="object-contain dark:hidden" priority />
      <Image src="/logowhite.png" alt="TravelPepp Logo" width={160} height={48} className="object-contain hidden dark:block" priority />
    </div>
  );
}
