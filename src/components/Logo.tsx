import React from 'react';

export const SproutT = ({ className = "" }: { className?: string }) => (
  <svg 
    width="0.6em" 
    height="0.58em" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block align-baseline ${className}`}
  >
    {/* Stem - vertical part of t */}
    <path 
      d="M12 24V11" 
      stroke="currentColor" 
      strokeWidth="6" 
      strokeLinecap="round"
    />
    
    {/* Leaves - creating the 'sprout' look at the top */}
    <path 
      d="M12 11C12 11 14 3 22 3" 
      stroke="currentColor" 
      strokeWidth="5" 
      strokeLinecap="round"
    />
    <path 
      d="M12 11C12 11 10 3 2 3" 
      stroke="currentColor" 
      strokeWidth="5" 
      strokeLinecap="round"
    />
    
    {/* Crossbar - horizontal part of t */}
    <path 
      d="M5 17H19" 
      stroke="currentColor" 
      strokeWidth="6" 
      strokeLinecap="round"
    />
  </svg>
);

export const Logo = ({ className = "" }: { className?: string }) => (
  <span className={`text-xl font-display font-bold tracking-tight inline-flex items-baseline ${className}`}>
    <span>ci</span>
    <span className="mx-[0.5px]">
      <SproutT className="text-accent-premier" />
    </span>
    <span>rus</span>
    <span className="text-accent-premier">ai</span>
    <span>labs</span>
  </span>
);
