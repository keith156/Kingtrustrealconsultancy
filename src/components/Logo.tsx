import React from 'react';
import logoUrl from '../logo.png';

export function Logo({ className = "h-12" }: { className?: string }) {
  return (
    <div className={`relative group flex items-center justify-center ${className}`}>
      <img 
        src={logoUrl} 
        alt="King Trust Logo" 
        referrerPolicy="no-referrer"
        className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
      />
    </div>
  );
}
