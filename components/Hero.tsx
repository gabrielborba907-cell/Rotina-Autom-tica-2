
import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import PhoneMockup from './ui/PhoneMockup';
import { CheckCircle2, ChevronRight, TrendingUp, Wallet, ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  // Fix for framer-motion type inference issues in some environments
  const MotionDiv = motion.div as any;
  const MotionH1 = motion.h1 as any;
  const MotionP = motion.p as any;

  const handleCheckout = () => {
    window.open('https://pay.cakto.com.br/qcjqru5_672232', '_blank');
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left order-2 lg:order-1">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs md:text-sm font-bold mb-8 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
            >
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
              ACESSO VITALÍCIO & IMEDIATO
            </MotionDiv>

            <MotionH1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-8 tracking-tighter"
            >
              O fim das planilhas: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 drop-shadow-sm">
                Finanças Automáticas no WhatsApp
              </span>
            </MotionH1>

            <MotionP
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Envie uma mensagem de texto com seus gastos e receba tudo somado na hora. 
              Do cafezinho ao investimento: <span className="text-slate-200">digite o valor e veja a mágica acontecer.</span>
            </MotionP>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center mb-12"
            >
              <Button pulse onClick={handleCheckout} className="text-lg md:text-xl shadow-cyan-500/30 flex flex-col items-center !py-4 !px-10 h-auto w-full sm:w-auto min-w-[300px]">
                <span className="flex items-center gap-2 font-black tracking-tight">
                  QUERO O SISTEMA PRONTO
                  <ChevronRight className="w-6 h-6" />
                </span>
                <span className="text-xs font-bold text-cyan-100/80 mt-1.5 flex items-center gap-2">
                  <span className="line-through decoration-red-500 decoration-2 text-red-400">R$ 449</span>
                  <span className="bg-slate-950/30 px-2 py-0.5 rounded">por 12x de R$ 29,99</span>
                </span>
              </Button>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-8 text-slate-400 text-sm font-semibold"
            >
              <div className="flex items-center gap-2 justify-center hover:text-cyan-400 transition-colors group">
                <CheckCircle2 className="text-cyan-500 w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Adeus Apps complexos</span>
              </div>
              <div className="flex items-center gap-2 justify-center hover:text-cyan-400 transition-colors group">
                <CheckCircle2 className="text-cyan-500 w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Resumo diário automático</span>
              </div>
            </MotionDiv>
          </div>

          {/* Right Column: Phone Mockup */}
          <MotionDiv 
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full lg:w-2/5 relative flex justify-center lg:justify-end order-1 lg:order-2 mt-8 lg:mt-0 perspective-1000"
          >
            <PhoneMockup className="animate-float">
              {/* Fake Dashboard UI */}
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Saldo Total</p>
                    <p className="text-2xl font-bold text-white">R$ 14.250,00</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-900/80 border border-white/5 p-3 rounded-2xl">
                    <p className="text-[9px] text-slate-500 mb-1">Entradas</p>
                    <p className="text-sm font-bold text-emerald-400">+ R$ 5.400</p>
                  </div>
                  <div className="bg-slate-900/80 border border-white/5 p-3 rounded-2xl">
                    <p className="text-[9px] text-slate-500 mb-1">Saídas</p>
                    <p className="text-sm font-bold text-red-400">- R$ 1.250</p>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-4">Últimos Registros</p>
                  <div className="space-y-3">
                    {[
                      { icon: <Wallet size={14}/>, label: 'Uber', val: '- R$ 27,90', time: '14:20' },
                      { icon: <ArrowUpRight size={14}/>, label: 'Pix Recebido', val: '+ R$ 150,00', time: '12:05' },
                      { icon: <Wallet size={14}/>, label: 'Almoço', val: '- R$ 45,00', time: '11:30' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400">
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white">{item.label}</p>
                            <p className="text-[9px] text-slate-500">{item.time}</p>
                          </div>
                        </div>
                        <p className={`text-xs font-bold ${item.val.startsWith('+') ? 'text-emerald-400' : 'text-slate-200'}`}>{item.val}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-6 left-4 right-4 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl text-center">
                  <p className="text-[10px] text-cyan-400 font-bold">Relatório diário enviado com sucesso!</p>
                </div>
              </div>
            </PhoneMockup>
          </MotionDiv>

        </div>
      </div>
    </section>
  );
};

export default Hero;
