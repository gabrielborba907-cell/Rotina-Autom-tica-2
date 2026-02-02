
import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { Check, X, Star, AlertTriangle, BatteryWarning, Lock, ArrowDown } from 'lucide-react';

const Pricing: React.FC = () => {
  // Fix for framer-motion type inference issues in some environments
  const MotionDiv = motion.div as any;

  const handleCheckoutPro = () => {
    window.open('https://pay.cakto.com.br/qcjqru5_672232', '_blank');
  };

  const handleCheckoutBasic = () => {
    window.open('https://pay.cakto.com.br/54bxj4o_672226', '_blank');
  };

  return (
    <section id="pricing" className="py-20 md:py-24 bg-slate-900/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Escolha sua <span className="text-cyan-400">experiência</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Você quer ter limites e trabalho ou quer ter liberdade total?
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Option 2: Pro (Anual) - MOVED TO TOP FOR MOBILE FOCUS */}
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex flex-col bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.15)] rounded-3xl p-6 md:p-10 relative overflow-hidden transform md:-translate-y-4 ring-2 ring-cyan-500/20"
          >
            {/* Badge */}
            <div className="absolute top-0 right-0 bg-cyan-500 text-slate-950 font-bold px-4 py-1.5 rounded-bl-2xl text-xs md:text-sm flex items-center gap-1 shadow-lg">
              <Star className="w-3 h-3 md:w-4 md:h-4 fill-slate-950" /> MELHOR ESCOLHA
            </div>

            <div className="mb-6 relative z-10">
              <span className="text-cyan-400 font-bold tracking-wider text-xs md:text-sm flex items-center gap-2 mb-2">
                OPÇÃO RECOMENDADA <Star className="w-3 h-3 fill-cyan-400" />
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white">Sistema PRO (Anual)</h3>
              <p className="text-slate-300 text-sm mt-2">Nós fazemos tudo por você + IA Ilimitada.</p>
            </div>
            
            {/* Price Block - Mobile Optimized */}
            <div className="mb-8 relative z-10 bg-slate-800/50 p-4 rounded-2xl border border-white/5">
              <div className="flex items-center gap-2 text-slate-500 font-medium text-sm mb-1">
                <span className="bg-red-500/10 text-red-400 px-2 py-0.5 rounded text-[10px] font-bold border border-red-500/20">ECONOMIZE R$ 90</span>
                <span className="line-through decoration-red-500/50 decoration-2 opacity-60">De R$ 449,90</span>
              </div>
              
              <div className="flex flex-col mt-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-xl text-slate-400 font-medium">12x de</span>
                  <span className="text-5xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400">29,99</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-slate-400">ou</span>
                  <span className="text-xl font-bold text-white">R$ 359,90</span>
                  <span className="text-sm text-cyan-400 font-bold">à vista</span>
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-3 md:space-y-4 mb-8 relative z-10">
              <div className="flex items-start gap-3 text-sm text-white">
                <div className="p-1 rounded-full bg-cyan-500/20 text-cyan-400 mt-0.5"><Check className="w-3 h-3" /></div>
                <span><strong>Sistema Entregue Pronto:</strong> Ativação técnica inclusa.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-white">
                 <div className="p-1 rounded-full bg-cyan-500/20 text-cyan-400 mt-0.5"><Check className="w-3 h-3" /></div>
                <span><strong>IA Totalmente Ilimitada:</strong> Sem travas.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-white">
                 <div className="p-1 rounded-full bg-cyan-500/20 text-cyan-400 mt-0.5"><Check className="w-3 h-3" /></div>
                <span><strong>Zero Trabalho:</strong> Não precisa configurar nada.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/90">
                 <div className="p-1 rounded-full bg-cyan-500/20 text-cyan-400 mt-0.5"><Check className="w-3 h-3" /></div>
                <span>Acesso VIP por 1 ano: Suporte Prioritário.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/90">
                 <div className="p-1 rounded-full bg-cyan-500/20 text-cyan-400 mt-0.5"><Check className="w-3 h-3" /></div>
                <span>Organização por categorias e Alertas</span>
              </div>
            </div>

            <Button pulse fullWidth onClick={handleCheckoutPro} className="relative z-10 text-base py-4 h-auto shadow-xl shadow-cyan-500/20">
              QUERO O ACESSO COMPLETO
            </Button>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
          </MotionDiv>

          {/* Option 1: Basic - MOVED TO BOTTOM FOR MOBILE */}
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="order-2 lg:order-1 flex flex-col bg-slate-950 border border-slate-800 rounded-3xl p-6 md:p-10 relative opacity-80 hover:opacity-100 transition-opacity"
          >
            <div className="mb-6">
              <span className="text-slate-500 font-bold tracking-wider text-xs md:text-sm">OPÇÃO BÁSICA (FAÇA VOCÊ MESMO)</span>
              <h3 className="text-xl md:text-2xl font-display font-bold text-slate-300 mt-2">Kit Start</h3>
              <p className="text-slate-500 text-sm mt-2">Acesso à IA Limitada + Manual de configuração.</p>
            </div>
            
            <div className="mb-8 pb-8 border-b border-slate-800">
              <div className="flex items-baseline gap-1">
                <span className="text-xl text-slate-500">R$</span>
                <span className="text-4xl font-display font-bold text-slate-300">37,90</span>
              </div>
              <span className="text-slate-600 text-xs uppercase font-bold tracking-wide">Pagamento Único</span>
            </div>

            <div className="flex-1 space-y-3 mb-8">
              <div className="flex items-start gap-3 text-sm text-yellow-500/80">
                <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                <span><strong>IA com Limites:</strong> Mensagens restritas.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-500">
                <div className="p-0.5 rounded bg-slate-800"><X className="w-3 h-3" /></div>
                <span>Configuração Manual (Tutorial)</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-500">
                <div className="p-0.5 rounded bg-slate-800"><X className="w-3 h-3" /></div>
                <span>Sem serviço de ativação</span>
              </div>
            </div>

            <Button variant="secondary" fullWidth onClick={handleCheckoutBasic} className="opacity-80 hover:opacity-100">
              QUERO O BÁSICO
            </Button>
          </MotionDiv>

        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-2 text-xs text-slate-500 text-center">
           <div className="flex items-center gap-2">
             <Lock className="w-3 h-3" />
             <span>Pagamento processado with segurança bancária.</span>
           </div>
           <span className="hidden md:inline">•</span>
           <span>Garantia de 7 dias ou seu dinheiro de volta.</span>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
