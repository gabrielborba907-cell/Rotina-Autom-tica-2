
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "A IA do plano de R$ 37,90 funciona?",
    answer: "Sim, mas é uma versão limitada. Ela possui travas na quantidade de mensagens que você pode trocar e no histórico de dados. Além disso, a configuração é manual (você faz)."
  },
  {
    question: "Vale a pena pagar o Anual?",
    answer: "Com certeza. Por apenas R$ 29,99 mensais, você tem a IA liberada (ilimitada) e não perde tempo configurando nada, pois nossa equipe entrega pronto. É mais barato e mais rápido."
  },
  {
    question: "Posso usar para controlar as contas da casa (Casal)?",
    answer: "Sim! O sistema é perfeito para organizar a vida financeira da família. Muitos casais adquirem dois acessos para somar as despesas e terem clareza total do orçamento doméstico."
  },
  {
    question: "Funciona no iPhone e Android?",
    answer: "Sim! Como o sistema roda direto no WhatsApp, funciona em qualquer aparelho que tenha o aplicativo de mensagens instalado (iOS ou Android)."
  },
  {
    question: "E se eu não me adaptar? Tem garantia?",
    answer: "Com certeza. Oferecemos uma garantia incondicional de 7 dias. Se você testar o sistema e sentir que não é a melhor solução para organizar sua vida financeira, basta nos enviar uma mensagem e devolvemos 100% do seu investimento. O risco é todo nosso."
  },
  {
    question: "Preciso baixar outro app?",
    answer: "Não! Tudo acontece na tela de conversa que você já usa todos os dias. Você não ocupa memória extra no seu celular."
  },
  {
    question: "É seguro?",
    answer: "Totalmente. O sistema é baseado em templates pessoais que rodam no seu ambiente. Seus dados financeiros não são compartilhados with terceiros."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  // Fix for framer-motion type inference issues in some environments
  const MotionDiv = motion.div as any;

  return (
    <section id="security" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
          Tire suas dúvidas e <span className="text-cyan-400">decida agora</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-white/10 rounded-xl bg-slate-900/30 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-lg text-slate-200">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="text-cyan-400 w-5 h-5 flex-shrink-0" />
                ) : (
                  <Plus className="text-slate-500 w-5 h-5 flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <MotionDiv
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </MotionDiv>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
