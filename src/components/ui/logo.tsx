import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showText?: boolean;
}

export function Logo({ variant = 'dark', className, showText = true }: LogoProps) {
  // Using the white logo everywhere as requested
  return (
    <div className={cn("flex items-center", className)}>
      <Image 
        src="/logowhite.png" 
        alt="TravelPepp Logo" 
        width={160} 
        height={48} 
        className="object-contain"
        priority
      />
    </div>
  );
}
