import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'dark',
  size = 'md' 
}) => {
  const isLight = variant === 'light';
  
  const sizeClasses = {
    sm: {
      crest: 'w-8 h-8',
      title: 'text-lg',
      sub: 'text-[9px] tracking-[0.2em]',
      tag: 'text-[8px]',
    },
    md: {
      crest: 'w-10 h-10',
      title: 'text-xl',
      sub: 'text-[10px] tracking-[0.22em]',
      tag: 'text-[9px]',
    },
    lg: {
      crest: 'w-14 h-14',
      title: 'text-3xl',
      sub: 'text-xs tracking-[0.25em]',
      tag: 'text-[10px]',
    },
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Handcrafted Asador & Flame Emblem */}
      <div 
        className={`relative flex items-center justify-center rounded-full border border-amber-600/30 shadow-inner ${sizeClasses.crest} ${
          isLight ? 'bg-[#2A231E] text-[#D9822B]' : 'bg-[#171412] text-[#D9822B]'
        }`}
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.8" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-3/5 h-3/5"
        >
          {/* Flame & Fire Hearth Motif */}
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
          {/* Cross Grill Lines */}
          <path d="M6 18h12" stroke="#C85227" strokeWidth="1.5" />
          <path d="M8 20h8" stroke="#C85227" strokeWidth="1.5" />
        </svg>
        {/* Subtle Ember Glow Dot */}
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#C85227] animate-pulse" />
      </div>

      <div className="flex flex-col text-left leading-none">
        <div className="flex items-center gap-1.5">
          <span 
            className={`font-serif font-bold uppercase tracking-wide ${sizeClasses.title} ${
              isLight ? 'text-white' : 'text-[#1F1A17]'
            }`}
          >
            El Asador
          </span>
          <span className="text-[#C85227] font-semibold text-xs">•</span>
        </div>
        <span 
          className={`font-sans font-semibold uppercase mt-0.5 ${sizeClasses.sub} ${
            isLight ? 'text-[#D9822B]' : 'text-[#C85227]'
          }`}
        >
          Margarita Ranch Grill
        </span>
        <span 
          className={`font-sans font-medium uppercase mt-0.5 tracking-wider ${sizeClasses.tag} ${
            isLight ? 'text-[#B5A89C]' : 'text-[#7D7166]'
          }`}
        >
          Austin, Texas
        </span>
      </div>
    </div>
  );
};
