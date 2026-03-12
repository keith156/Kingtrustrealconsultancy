import React from 'react';

export function Logo({ className = "h-12" }: { className?: string }) {
  return (
    <div className={`relative group flex items-center justify-center aspect-square ${className}`}>
      {/* Ambient outer glow */}
      <div className="absolute inset-0 bg-gold-500 rounded-full blur-lg opacity-20 group-hover:opacity-50 transition-opacity duration-500"></div>
      
      {/* Metallic gradient border wrapper */}
      <div className="relative w-full h-full p-[2px] rounded-full bg-gradient-to-br from-gold-500/80 via-gold-500/20 to-gold-500/80 shadow-lg group-hover:shadow-gold-500/40 transition-all duration-500 transform group-hover:-translate-y-0.5">
        {/* Inner premium white circle */}
        <div className="w-full h-full bg-gradient-to-b from-white to-gray-50 rounded-full flex items-center justify-center p-1 overflow-hidden shadow-inner">
          <img 
            src="/logo.png" 
            alt="King Trust Logo" 
            className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500 drop-shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}
