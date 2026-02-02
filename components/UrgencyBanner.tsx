
import React from 'react';
import { Timer, ArrowDown } from 'lucide-react';

const UrgencyBanner: React.FC = () => {
  const handleCheckout = () => {
    window.open('https://pay.cakto.com.br/qcjqru5_672232', '_blank');
  };

  return (
    <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-cyan-950 border-y border-white/10 backdrop-blur-sm sticky top-0 md:top-[72px] z-40 shadow-lg">
      <div className="container mx-auto px-4 py-2 md:py-3">
        <div className="flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center">
          
          <div className="flex items-center gap-1.5 text-cyan-400 font-bold animate-pulse text-xs md:text-sm uppercase tracking-wide">
            <Timer className="w-4 h-4" />
            <span>Oferta Relâmpago:</span>
          </div>
          
          <p className="text-xs md:text-sm text-slate-300 leading-tight">
            De <span className="line-through text-red-400/70 decoration-red-400/70 decoration-1 mx-1">R$ 449</span> por <span className="font-bold text-white text-sm md:text-base">12x R$ 29,99</span>
          </p>
          
          <button 
            onClick={handleCheckout}
            className="text-[10px] md:text-xs font-bold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/30 transition-colors flex items-center gap-1 whitespace-nowrap ml-auto md:ml-0"
          >
            PEGAR DESCONTO <ArrowDown className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;
