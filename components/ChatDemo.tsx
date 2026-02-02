
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';
import { Wifi, ChevronLeft, ChevronRight, Battery, Send, MoreVertical, Phone, Video } from 'lucide-react';

interface ChatMessage {
  type: 'user' | 'bot';
  text: string;
  time: string;
}

const slides = [
  {
    id: 1,
    title: "Registro Relâmpago",
    description: "Escreva como se estivesse falando com um amigo. O sistema entende e organiza tudo.",
    messages: [
      { type: 'user', text: "Uber 27,90", time: "14:20" },
      { type: 'bot', text: "✅ Registrado! Uber: R$ 27,90. Seu saldo diário agora é de R$ 112,00.", time: "14:20" }
    ]
  },
  {
    id: 2,
    title: "Alerta de Limite",
    description: "Receba avisos inteligentes antes de estourar seu orçamento planejado.",
    messages: [
      { type: 'user', text: "Jantar 150,00", time: "20:05" },
      { type: 'bot', text: "⚠️ Atenção! Com esse gasto você atingiu 90% do seu limite para 'Lazer' este mês. Quer continuar?", time: "20:05" }
    ]
  },
  {
    id: 3,
    title: "Resumo em Texto",
    description: "Nada de gráficos complexos. Receba o que importa de forma direta.",
    messages: [
      { type: 'user', text: "Resumo hoje", time: "22:00" },
      { type: 'bot', text: "📊 Resumo do dia:\n\nTotal: R$ 222,90\n- Transporte: R$ 27,90\n- Alimentação: R$ 45,00\n- Lazer: R$ 150,00\n\nVocê economizou 15% a mais que ontem! 🚀", time: "22:00" }
    ]
  },
  {
    id: 4,
    title: "Categorização Automática",
    description: "O sistema sabe o que é o quê. Cartão, PIX ou Dinheiro.",
    messages: [
      { type: 'user', text: "Supermercado 350 no nubank", time: "18:30" },
      { type: 'bot', text: "✅ Perfeito! R$ 350,00 adicionados em 'Essenciais' (Cartão Nubank). Tudo sob controle.", time: "18:30" }
    ]
  }
];

const ChatDemo: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Fix for framer-motion type inference issues in some environments
  const MotionDiv = motion.div as any;

  const handleCheckout = () => {
    window.open('https://pay.cakto.com.br/54bxj4o_672226', '_blank');
  };

  useEffect(() => {
    let interval: any;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 7000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleManualChange = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-cyan-950/20 to-slate-950" />
      
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-black mb-6 tracking-widest uppercase">
            Interface Real no WhatsApp
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Sua nova <span className="text-cyan-400">rotina inteligente</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Veja como o sistema reage em diferentes situações do seu dia a dia.
          </p>
        </div>

        {/* CARROSSEL / TECH FRAME */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             
             {/* Left side: Text info */}
             <div className="order-2 lg:order-1">
                <AnimatePresence mode="wait">
                  <MotionDiv 
                    key={currentIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-3xl font-display font-bold text-white leading-tight">
                      {slides[currentIndex].title}
                    </h3>
                    <p className="text-xl text-slate-400 leading-relaxed">
                      {slides[currentIndex].description}
                    </p>
                    
                    <div className="pt-4 flex gap-3">
                       {slides.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleManualChange(idx)}
                          className={`h-1.5 rounded-full transition-all duration-500 ${
                            idx === currentIndex ? 'w-12 bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.6)]' : 'w-2 bg-slate-800'
                          }`}
                        />
                      ))}
                    </div>
                  </MotionDiv>
                </AnimatePresence>
                
                <div className="mt-10 flex gap-4">
                  <button onClick={handlePrev} className="p-4 bg-slate-900 border border-white/10 rounded-2xl hover:bg-cyan-500 transition-all text-white hover:text-slate-950">
                    <ChevronLeft size={24} />
                  </button>
                  <button onClick={handleNext} className="p-4 bg-slate-900 border border-white/10 rounded-2xl hover:bg-cyan-500 transition-all text-white hover:text-slate-950">
                    <ChevronRight size={24} />
                  </button>
                </div>
             </div>

             {/* Right side: WhatsApp Mockup */}
             <div className="order-1 lg:order-2 flex justify-center">
                <div className="w-[320px] h-[600px] bg-[#0b141a] rounded-[3rem] p-3 shadow-2xl border-[6px] border-slate-700 ring-1 ring-white/10 overflow-hidden relative">
                  
                  {/* WhatsApp Header */}
                  <div className="bg-[#202c33] p-4 pt-10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <ChevronLeft className="text-[#8696a0]" size={20} />
                       <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-white shadow-lg">
                         RA
                       </div>
                       <div>
                         <p className="text-sm font-bold text-[#e9edef]">Rotina Automática</p>
                         <p className="text-[10px] text-[#8696a0]">Online agora</p>
                       </div>
                    </div>
                    <div className="flex gap-4 text-[#8696a0]">
                       <Video size={18} />
                       <Phone size={18} />
                       <MoreVertical size={18} />
                    </div>
                  </div>

                  {/* WhatsApp Background/Content */}
                  <div className="h-[430px] p-4 space-y-4 overflow-y-auto bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat">
                    <AnimatePresence mode="popLayout">
                      {slides[currentIndex].messages.map((msg, mIdx) => (
                        <MotionDiv
                          key={`${currentIndex}-${mIdx}`}
                          initial={{ opacity: 0, scale: 0.8, y: 10, x: msg.type === 'user' ? 20 : -20 }}
                          animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                          transition={{ delay: mIdx * 0.8, duration: 0.4 }}
                          className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm relative ${
                            msg.type === 'user' 
                              ? 'bg-[#005c4b] text-[#e9edef] rounded-tr-none' 
                              : 'bg-[#202c33] text-[#e9edef] rounded-tl-none'
                          }`}>
                            <p className="whitespace-pre-line">{msg.text}</p>
                            <span className="text-[9px] text-[#8696a0] block text-right mt-1">{msg.time}</span>
                          </div>
                        </MotionDiv>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* WhatsApp Footer */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-[#202c33] flex items-center gap-2">
                    <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 text-[#8696a0] text-sm flex items-center justify-between">
                       Digite uma mensagem...
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#00a884] flex items-center justify-center text-white">
                       <Send size={18} />
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button onClick={handleCheckout} pulse className="text-xl px-12 py-5 h-auto shadow-2xl shadow-cyan-500/30">
            QUERO ESSA PRATICIDADE
          </Button>
        </div>

      </div>
    </section>
  );
};

export default ChatDemo;
