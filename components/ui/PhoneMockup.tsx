
import React from 'react';
import { motion } from 'framer-motion';

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ children, className = "" }) => {
  return (
    <div className={`relative mx-auto ${className}`}>
      {/* External Frame */}
      <div className="relative w-[280px] h-[580px] md:w-[320px] md:h-[650px] bg-slate-800 rounded-[3rem] p-3 shadow-2xl border-[6px] border-slate-700 ring-1 ring-white/10 overflow-hidden">
        
        {/* Screen */}
        <div className="relative w-full h-full bg-slate-950 rounded-[2.2rem] overflow-hidden border border-white/5">
          {/* Dynamic Island */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-50 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-800 mr-2" />
            <div className="w-8 h-1 rounded-full bg-slate-900" />
          </div>

          {/* Screen Content */}
          <div className="h-full w-full pt-8 px-4">
            {children}
          </div>
        </div>

        {/* Physical Buttons (Visual only) */}
        <div className="absolute -left-[7px] top-24 w-[2px] h-12 bg-slate-700 rounded-l-md" />
        <div className="absolute -left-[7px] top-40 w-[2px] h-16 bg-slate-700 rounded-l-md" />
        <div className="absolute -right-[7px] top-32 w-[2px] h-20 bg-slate-700 rounded-r-md" />
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-4 bg-cyan-500/20 blur-[60px] rounded-[4rem] -z-10 animate-pulse" />
    </div>
  );
};

export default PhoneMockup;
