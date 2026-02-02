import React from 'react';
import { Infinity } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
             <div className="p-1.5 bg-cyan-500/10 rounded-full border border-cyan-500/30">
                <Infinity className="w-5 h-5 text-cyan-400" />
              </div>
            <span className="font-display font-bold text-lg text-slate-200">
              Rotina Automática
            </span>
          </div>
          <div className="text-slate-500 text-sm text-center md:text-right">
            Não deixe para amanhã o dinheiro que você pode economizar hoje.
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© 2025 Rotina Automática. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Suporte VIP</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;